import type { HeroSlideData } from "../../../shared/types/heroSlides";
import styles from "../HeroSlider.module.css";

interface SliderDotsProps {
  slides: HeroSlideData[];
  currentIndex: number;
  onDotClick: (index: number) => void;
}

export function SliderDots({ slides, currentIndex, onDotClick }: SliderDotsProps) {
  return (
    <div className={styles.dotsContainer}>
      {slides.map((slide, index) => (
        <button
          key={slide.id}
          className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ""}`}
          onClick={() => onDotClick(index)}
          aria-label={`Перейти к слайду ${index + 1}`}
          aria-current={index === currentIndex ? "true" : "false"}
        />
      ))}
    </div>
  );
}
