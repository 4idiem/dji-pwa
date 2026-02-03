import { useState, useEffect, useCallback, useRef } from "react";

interface UseHeroSliderOptions {
  totalSlides: number;
  autoplayInterval?: number;
}

interface UseHeroSliderReturn {
  currentIndex: number;
  prevIndex: number;
  nextIndex: number;
  isPaused: boolean;
  isAnimating: boolean;
  goToSlide: (index: number) => void;
  goToNext: () => void;
  goToPrev: () => void;
  pauseAutoplay: () => void;
  resumeAutoplay: () => void;
}

export function useHeroSlider({
  totalSlides,
  autoplayInterval = 5000,
}: UseHeroSliderOptions): UseHeroSliderReturn {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationTimeoutRef = useRef<number | null>(null);
  const autoplayRef = useRef<number | null>(null);

  // Вычисление индексов для бесконечной прокрутки
  const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  const nextIndex = (currentIndex + 1) % totalSlides;

  // Функция для блокировки анимации на время перехода
  const withAnimationLock = useCallback((callback: () => void) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    callback();
    
    // Снимаем блокировку после завершения анимации
    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current);
    }
    animationTimeoutRef.current = window.setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Длительность анимации
  }, [isAnimating]);

  // Переход к конкретному слайду
  const goToSlide = useCallback((index: number) => {
    withAnimationLock(() => {
      setCurrentIndex(index);
    });
  }, [withAnimationLock]);

  // Переход к следующему слайду
  const goToNext = useCallback(() => {
    withAnimationLock(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    });
  }, [totalSlides, withAnimationLock]);

  // Переход к предыдущему слайду
  const goToPrev = useCallback(() => {
    withAnimationLock(() => {
      setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    });
  }, [totalSlides, withAnimationLock]);

  // Пауза автопрокрутки
  const pauseAutoplay = useCallback(() => {
    setIsPaused(true);
  }, []);

  // Возобновление автопрокрутки
  const resumeAutoplay = useCallback(() => {
    setIsPaused(false);
  }, []);

  // Автопрокрутка
  useEffect(() => {
    if (isPaused || totalSlides <= 1) {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
      return;
    }

    autoplayRef.current = window.setInterval(() => {
      if (!isAnimating) {
        goToNext();
      }
    }, autoplayInterval);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isPaused, totalSlides, autoplayInterval, isAnimating, goToNext]);

  // Очистка таймеров при размонтировании
  useEffect(() => {
    return () => {
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, []);

  return {
    currentIndex,
    prevIndex,
    nextIndex,
    isPaused,
    isAnimating,
    goToSlide,
    goToNext,
    goToPrev,
    pauseAutoplay,
    resumeAutoplay,
  };
}
