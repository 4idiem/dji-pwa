import { useEffect, useRef, useState, useCallback, forwardRef, useImperativeHandle } from "react";
import styles from "./YandexMapWidget.module.css";

// Типизация для Yandex Maps API 2.1
declare global {
  interface Window {
    ymaps?: {
      ready: (callback: () => void) => void;
      Map: new (
        container: HTMLElement | string,
        state: {
          center: [number, number];
          zoom: number;
          controls?: string[];
        },
        options?: {
          suppressMapOpenBlock?: boolean;
        }
      ) => YMapInstance;
      Placemark: new (
        coords: [number, number],
        properties?: Record<string, unknown>,
        options?: {
          preset?: string;
          iconColor?: string;
          iconLayout?: string;
          iconImageHref?: string;
          iconImageSize?: [number, number];
          iconImageOffset?: [number, number];
        }
      ) => YPlacemark;
      templateLayoutFactory?: {
        createClass: (template: string) => unknown;
      };
    };
  }
}

interface YMapInstance {
  destroy: () => void;
  setCenter: (center: [number, number], zoom?: number, options?: { duration?: number }) => void;
  setZoom: (zoom: number, options?: { duration?: number }) => void;
  getZoom: () => number;
  geoObjects: {
    add: (obj: YPlacemark) => void;
  };
  behaviors: {
    disable: (behaviors: string | string[]) => void;
  };
  controls: {
    remove: (control: string) => void;
  };
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface YPlacemark {
  // Placemark interface
}

interface YandexMapWidgetProps {
  coords: {
    lat: number;
    lng: number;
  };
  zoom?: number;
  onLoad?: () => void;
  onError?: () => void;
}

export interface YandexMapWidgetRef {
  zoomIn: () => void;
  zoomOut: () => void;
}

// Глобальное состояние загрузки API
let apiLoadPromise: Promise<void> | null = null;
let apiLoaded = false;

function loadYandexMapsAPI(): Promise<void> {
  // Проверяем наличие ключа
  const apiKey = import.meta.env.VITE_YANDEX_MAPS_API_KEY;
  if (!apiKey) {
    return Promise.reject(new Error("NO_API_KEY"));
  }

  if (apiLoaded && window.ymaps) {
    return Promise.resolve();
  }

  if (apiLoadPromise) {
    return apiLoadPromise;
  }

  apiLoadPromise = new Promise((resolve, reject) => {
    // Проверяем, не загружен ли уже скрипт
    const existingScript = document.getElementById("yandex-maps-api");
    if (existingScript) {
      if (window.ymaps) {
        window.ymaps.ready(() => {
          apiLoaded = true;
          resolve();
        });
      } else {
        reject(new Error("Yandex Maps API script exists but ymaps not available"));
      }
      return;
    }

    const script = document.createElement("script");
    script.id = "yandex-maps-api";
    script.src = `https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU`;
    script.async = true;

    script.onload = () => {
      if (window.ymaps) {
        window.ymaps.ready(() => {
          apiLoaded = true;
          resolve();
        });
      } else {
        reject(new Error("Yandex Maps API loaded but ymaps not available"));
      }
    };

    script.onerror = () => {
      console.error("Yandex API load failed", { 
        src: script.src, 
        online: navigator.onLine 
      });
      apiLoadPromise = null;
      reject(new Error("Failed to load Yandex Maps API"));
    };

    document.head.appendChild(script);
  });

  return apiLoadPromise;
}

export const YandexMapWidget = forwardRef<YandexMapWidgetRef, YandexMapWidgetProps>(
  function YandexMapWidget({ coords, zoom = 16, onLoad, onError }, ref) {
    const containerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<YMapInstance | null>(null);
    const [currentZoom, setCurrentZoom] = useState(zoom);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const zoomIn = useCallback(() => {
      if (mapRef.current) {
        const newZoom = Math.min(currentZoom + 1, 19);
        setCurrentZoom(newZoom);
        mapRef.current.setZoom(newZoom, { duration: 200 });
      }
    }, [currentZoom]);

    const zoomOut = useCallback(() => {
      if (mapRef.current) {
        const newZoom = Math.max(currentZoom - 1, 1);
        setCurrentZoom(newZoom);
        mapRef.current.setZoom(newZoom, { duration: 200 });
      }
    }, [currentZoom]);

    useImperativeHandle(ref, () => ({
      zoomIn,
      zoomOut,
    }), [zoomIn, zoomOut]);

    useEffect(() => {
      let mounted = true;
      let map: YMapInstance | null = null;

      async function initMap() {
        if (!containerRef.current) return;

        try {
          setIsLoading(true);
          await loadYandexMapsAPI();

          if (!mounted || !containerRef.current || !window.ymaps) return;

          const ymaps = window.ymaps;

          // Создаем карту
          map = new ymaps.Map(
            containerRef.current,
            {
              center: [coords.lat, coords.lng],
              zoom: zoom,
              controls: [], // Убираем все контролы
            },
            {
              suppressMapOpenBlock: true, // Убираем "Открыть в Яндекс.Картах"
            }
          );

          // Отключаем все взаимодействия
          map.behaviors.disable([
            "scrollZoom",
            "drag", 
            "dblClickZoom",
            "multiTouch",
            "rightMouseButtonMagnifier",
            "leftMouseButtonMagnifier",
            "ruler",
            "routeEditor"
          ]);

          // Создаем маркер
          const placemark = new ymaps.Placemark(
            [coords.lat, coords.lng],
            {},
            {
              preset: "islands#darkBlueDotIcon",
            }
          );

          map.geoObjects.add(placemark);

          mapRef.current = map;
          setIsLoading(false);
          onLoad?.();
        } catch (error) {
          console.error("Failed to initialize Yandex Map:", error);
          if (mounted) {
            setHasError(true);
            if (error instanceof Error && error.message === "NO_API_KEY") {
              setErrorMessage("Нет ключа Yandex Maps (VITE_YANDEX_MAPS_API_KEY)");
            }
            setIsLoading(false);
            onError?.();
          }
        }
      }

      initMap();

      return () => {
        mounted = false;
        if (map) {
          try {
            map.destroy();
          } catch {
            // Игнорируем ошибки при уничтожении
          }
        }
        mapRef.current = null;
      };
    }, [coords.lat, coords.lng, zoom, onLoad, onError]);

    if (hasError) {
      if (errorMessage) {
        return (
          <div className={styles.errorWrapper}>
            <p className={styles.errorText}>{errorMessage}</p>
            <a 
              href="https://yandex.com/maps/-/CPE2BQMk" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.errorLink}
            >
              Открыть Я.Карты
            </a>
          </div>
        );
      }
      return null; // Родитель покажет fallback
    }

    return (
      <div className={styles.mapWrapper}>
        {isLoading && (
          <div className={styles.loading}>
            <div className={styles.spinner} />
          </div>
        )}
        <div ref={containerRef} className={styles.mapContainer} />
      </div>
    );
  }
);

export default YandexMapWidget;
