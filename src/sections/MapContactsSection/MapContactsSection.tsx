import { useState, useEffect, useRef, useCallback } from "react";
import { useFetch } from "../../shared/hooks/useFetch";
import type { MapContactsData, SocialLink } from "../../shared/types/mapContacts";
import { YandexMapWidget, type YandexMapWidgetRef } from "./components";
import styles from "./MapContactsSection.module.css";

// Иконка указателя (красная)
const LocationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 2C6.68629 2 4 4.68629 4 8C4 12.5 10 18 10 18C10 18 16 12.5 16 8C16 4.68629 13.3137 2 10 2ZM10 10.5C8.61929 10.5 7.5 9.38071 7.5 8C7.5 6.61929 8.61929 5.5 10 5.5C11.3807 5.5 12.5 6.61929 12.5 8C12.5 9.38071 11.3807 10.5 10 10.5Z" fill="#FF4444"/>
  </svg>
);

// Иконка указателя (белая)
const LocationIconWhite = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 2C6.68629 2 4 4.68629 4 8C4 12.5 10 18 10 18C10 18 16 12.5 16 8C16 4.68629 13.3137 2 10 2ZM10 10.5C8.61929 10.5 7.5 9.38071 7.5 8C7.5 6.61929 8.61929 5.5 10 5.5C11.3807 5.5 12.5 6.61929 12.5 8C12.5 9.38071 11.3807 10.5 10 10.5Z" fill="#FFFFFF"/>
  </svg>
);

// Иконка WhatsApp
const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.0025 2C5.58625 2 2 5.58 2 10C2 11.5 2.43375 12.91 3.18375 14.11L2 18L6.0025 16.83C7.1525 17.52 8.52875 17.92 10.0025 17.92C14.4187 17.92 18 14.34 18 9.92C18 5.58 14.4187 2 10.0025 2ZM14.2475 13.15C14.04 13.73 13.21 14.22 12.5675 14.35C12.125 14.44 11.5525 14.51 9.4825 13.65C6.835 12.55 5.1275 9.87 5 9.71C4.8775 9.55 3.995 8.39 3.995 7.19C3.995 5.99 4.625 5.41 4.875 5.14C5.0825 4.92 5.435 4.82 5.77 4.82C5.8825 4.82 5.98375 4.825 6.075 4.83C6.325 4.84 6.45 4.855 6.6175 5.25C6.825 5.75 7.325 6.95 7.3825 7.07C7.445 7.19 7.5075 7.36 7.42 7.52C7.3375 7.685 7.265 7.765 7.145 7.905C7.025 8.045 6.91125 8.155 6.79125 8.305C6.68125 8.435 6.5575 8.575 6.6975 8.825C6.8375 9.07 7.32 9.87 8.0375 10.51C8.9625 11.34 9.72 11.6 9.9975 11.72C10.205 11.81 10.455 11.79 10.6 11.63C10.79 11.42 11.0225 11.07 11.26 10.73C11.43 10.485 11.6475 10.455 11.875 10.545C12.1075 10.63 13.3025 11.22 13.5525 11.345C13.8025 11.47 13.9625 11.53 14.025 11.63C14.0867 11.73 14.0867 12.21 13.88 12.79C13.67 13.37 12.84 13.86 12.1975 13.99C11.755 14.08 11.1825 14.15 9.1125 13.29" fill="#25D366"/>
  </svg>
);

// Иконка Tenchat
const TenchatIcon = () => (
  <svg width="20" height="20" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      fill="#D93F35" 
      d="M5.4 1.45a42.78 42.78 0 0 1 22.07 0 6.6 6.6 0 0 1 4.76 5.1c.85 4.39.85 8.9 0 13.28a6.6 6.6 0 0 1-5.31 5.25.83.83 0 0 0-.62.8v5.24c0 .12-.08.24-.2.3a.33.33 0 0 1-.35-.05l-5.32-4.51a2.3 2.3 0 0 0-1.61-.54c-4.52.25-9.05-.22-13.42-1.38a6.6 6.6 0 0 1-4.76-5.11 34.71 34.71 0 0 1 0-13.27A6.6 6.6 0 0 1 5.4 1.45Z"
    />
    <text x="16.5" y="18" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial">T</text>
  </svg>
);

// Иконка карты (для fallback)
const MapIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 16L24 8L40 16L56 8V48L40 56L24 48L8 56V16Z" stroke="#454D5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24 8V48" stroke="#454D5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M40 16V56" stroke="#454D5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

interface SocialButtonProps {
  link: SocialLink;
}

function SocialButton({ link }: SocialButtonProps) {
  const isTenchat = link.name === "Тенчат";
  
  return (
    <a
      href={link.href}
      className={styles.socialButton}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.name}
    >
      {isTenchat ? (
        <TenchatIcon />
      ) : (
        <img src={link.icon} alt={link.name} className={styles.socialButtonIcon} />
      )}
    </a>
  );
}

export function MapContactsSection() {
  const { data, loading, error } = useFetch<MapContactsData>("/mock/map_contacts.json");
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState(false);
  const [isInView, setIsInView] = useState(true); // Загружаем сразу
  const sectionRef = useRef<HTMLElement>(null);
  const mapWidgetRef = useRef<YandexMapWidgetRef>(null);

  // Отслеживание online/offline состояния
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Lazy-load: загружаем карту только когда секция в viewport
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "200px" }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const handleMapLoad = useCallback(() => {
    setMapLoaded(true);
  }, []);

  const handleMapError = useCallback(() => {
    setMapError(true);
  }, []);

  const handleZoomIn = useCallback(() => {
    mapWidgetRef.current?.zoomIn();
  }, []);

  const handleZoomOut = useCallback(() => {
    mapWidgetRef.current?.zoomOut();
  }, []);

  if (loading) return <div>Загрузка...</div>;
  if (error || !data) return null;

  const {
    title,
    coords,
    zoom,
    yandexMapUrl,
    howToGetUrl,
    taxiUrl,
    metroStation,
    address,
    workingHours,
    contactLabel,
    phone,
    email,
    whatsappPhone,
    socialLinks,
    mapButtons,
  } = data;

  const showMap = isOnline && !mapError && isInView;

  return (
    <section className={styles.section} ref={sectionRef}>
      {/* Заголовок */}
      <div className={styles.headerBlock}>
        <h2 className={styles.title}>{title}</h2>
      </div>

      {/* Основной блок */}
      <div className={styles.mainBlock}>
        {/* Карта */}
        <div className={styles.mapContainer}>
          {showMap ? (
            <YandexMapWidget
              ref={mapWidgetRef}
              coords={coords}
              zoom={zoom}
              onLoad={handleMapLoad}
              onError={handleMapError}
            />
          ) : (
            <div className={styles.mapFallback}>
              <MapIcon />
              <span>Карта недоступна офлайн</span>
            </div>
          )}

          {/* Кнопки зума (кастомные) */}
          {(showMap || mapLoaded) && (
            <div className={styles.zoomControls}>
              <button 
                className={styles.zoomButton} 
                aria-label="Приблизить"
                onClick={handleZoomIn}
              >
                +
              </button>
              <button 
                className={styles.zoomButton} 
                aria-label="Отдалить"
                onClick={handleZoomOut}
              >
                −
              </button>
            </div>
          )}

          {/* Кнопки на карте */}
          <div className={styles.mapOverlayButtons}>
            <a
              href={howToGetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapButton}
            >
              <LocationIcon />
              <span className={styles.mapButtonText}>{mapButtons.howToGet.label}</span>
            </a>
            <a
              href={taxiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapButton}
            >
              <img src={mapButtons.taxi.icon} alt="" className={styles.mapButtonIcon} />
              <span className={styles.mapButtonText}>{mapButtons.taxi.label}</span>
            </a>
          </div>
        </div>

        {/* Карточка контактов */}
        <div className={styles.contactCard}>
          {/* Адрес */}
          <div className={styles.addressBlock}>
            <div className={styles.metroRow}>
              <img src={metroStation.icon} alt="" className={styles.metroIcon} />
              <span className={styles.metroName}>{metroStation.name}</span>
            </div>
            <p className={styles.address}>{address}</p>
            <p className={styles.workingHours}>{workingHours}</p>
          </div>

          {/* Контакты */}
          <div className={styles.contactBlock}>
            <p className={styles.contactLabel}>{contactLabel}</p>
            <a href={`tel:${phone.replace(/\s/g, "")}`} className={styles.contactLink}>
              {phone}
            </a>
            <a href={`mailto:${email}`} className={styles.contactLink}>
              {email}
            </a>
          </div>

          {/* Соцсети */}
          <div className={styles.socialBlock}>
            {socialLinks.map((link) => (
              <SocialButton key={link.name} link={link} />
            ))}
          </div>

          {/* Кнопки действий */}
          <div className={styles.actionsBlock}>
            <a
              href={yandexMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.actionButton} ${styles.actionButtonPrimary}`}
            >
              <LocationIconWhite />
              <span className={`${styles.actionButtonText} ${styles.actionButtonTextWhite}`}>
                Открыть Я.Карты
              </span>
            </a>
            <a
              href={`https://wa.me/${whatsappPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.actionButton} ${styles.actionButtonOutline}`}
            >
              <WhatsAppIcon />
              <span className={`${styles.actionButtonText} ${styles.actionButtonTextBlack}`}>
                Написать в WhatsApp
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
