import { useFetch } from "../../shared/hooks/useFetch";
import { useHeroSlider } from "../../shared/hooks/useHeroSlider";
import type { HeroSlidesResponse } from "../../shared/types/heroSlides";
import { HeroSlide, SliderDots } from "./components";
import styles from "./HeroSlider.module.css";

export function HeroSlider() {
  const { data, loading, error } = useFetch<HeroSlidesResponse>("/mock/hero_slides.json");
  const slides = data ?? [];

  const {
    currentIndex,
    prevIndex,
    nextIndex,
    goToSlide,
    goToNext,
    goToPrev,
    pauseAutoplay,
    resumeAutoplay,
  } = useHeroSlider({
    totalSlides: slides.length,
    autoplayInterval: 5000,
  });

  // Состояние загрузки
  if (loading) {
    return (
      <section className={styles.section}>
        <div className={styles.loadingContainer}>
          <span className={styles.loadingText}>Загрузка...</span>
        </div>
      </section>
    );
  }

  // Состояние ошибки
  if (error) {
    return (
      <section className={styles.section}>
        <div className={styles.errorContainer}>
          <span className={styles.errorText}>Ошибка загрузки: {error}</span>
        </div>
      </section>
    );
  }

  // Нет данных
  if (slides.length === 0) {
    return null;
  }

  // Получаем слайды для отображения
  const prevSlide = slides[prevIndex];
  const currentSlide = slides[currentIndex];
  const nextSlide = slides[nextIndex];

  return (
    <section className={styles.section}>
      <div
        className={styles.sliderContainer}
        onMouseEnter={pauseAutoplay}
        onMouseLeave={resumeAutoplay}
        onFocus={pauseAutoplay}
        onBlur={resumeAutoplay}
      >
        <div className={styles.sliderTrack}>
          {/* Левый боковой слайд (peek) */}
          <HeroSlide
            slide={prevSlide}
            isCenter={false}
            onClick={goToPrev}
          />

          {/* Центральный слайд */}
          <HeroSlide
            slide={currentSlide}
            isCenter={true}
          />

          {/* Правый боковой слайд (peek) */}
          <HeroSlide
            slide={nextSlide}
            isCenter={false}
            onClick={goToNext}
          />
        </div>
      </div>

      {/* Точки навигации */}
      <SliderDots
        slides={slides}
        currentIndex={currentIndex}
        onDotClick={goToSlide}
      />
    </section>
  );
}
