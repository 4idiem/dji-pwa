import { useEffect, useRef, useState } from "react";
import { useFetch } from "../../shared/hooks/useFetch";
import type { ReviewsResponse } from "../../shared/types/reviews";
import { ReviewCard } from "./components";
import styles from "./ReviewsSection.module.css";

// Иконка пина Яндекс карт
function YandexMapPin() {
  return (
    <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 0C7.16 0 0 7.16 0 16C0 28 16 40 16 40C16 40 32 28 32 16C32 7.16 24.84 0 16 0Z"
        fill="#FF4433"
      />
      <circle cx="16" cy="16" r="8" fill="white" />
    </svg>
  );
}

export function ReviewsSection() {
  const { data, loading, error } = useFetch<ReviewsResponse>("/mock/reviews.json");
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [expandedCardKey, setExpandedCardKey] = useState<string | null>(null);
  const positionRef = useRef(0);
  const lastTimeRef = useRef(0);

  const reviews = data ?? [];

  // Скорость прокрутки (пикселей в секунду)
  const speed = 30;

  // Ширина одного блока карточек (5 карточек * 420px + 4 gap * 16px)
  const singleSetWidth = reviews.length * 420 + (reviews.length - 1) * 16;

  // Анимация бегущей строки
  useEffect(() => {
    if (reviews.length === 0) return;

    let animationId: number;

    const animate = (timestamp: number) => {
      if (!trackRef.current) {
        animationId = requestAnimationFrame(animate);
        return;
      }

      if (lastTimeRef.current === 0) {
        lastTimeRef.current = timestamp;
      }

      if (!isPaused) {
        const deltaTime = (timestamp - lastTimeRef.current) / 1000;
        positionRef.current += speed * deltaTime;

        // Когда прошли первую "половину" (т.е. первые 5 карточек + gap), сбрасываем
        if (positionRef.current >= singleSetWidth + 16) {
          positionRef.current = 0;
        }

        trackRef.current.style.transform = `translateX(-${positionRef.current}px)`;
      }

      lastTimeRef.current = timestamp;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isPaused, reviews.length, singleSetWidth]);

  // Loading / Error / Empty states
  if (loading) {
    return (
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.headerRow}>
            <h2 className={styles.title}>Отзывы клиентов</h2>
          </div>
          <p className={styles.loadingText}>Загрузка...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.headerRow}>
            <h2 className={styles.title}>Отзывы клиентов</h2>
          </div>
          <p className={styles.errorText}>Ошибка загрузки: {error}</p>
        </div>
      </section>
    );
  }

  if (reviews.length === 0) {
    return (
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.headerRow}>
            <h2 className={styles.title}>Отзывы клиентов</h2>
          </div>
          <p className={styles.emptyText}>Нет отзывов</p>
        </div>
      </section>
    );
  }

  // Дублируем карточки для бесконечной прокрутки
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header Row */}
        <div className={styles.headerRow}>
          <h2 className={styles.title}>Отзывы клиентов</h2>

          {/* Рейтинг справа */}
          <div className={styles.ratingBlock}>
            <div className={styles.pinIcon}>
              <YandexMapPin />
            </div>
            <div className={styles.ratingText}>
              <span className={styles.ratingValue}>5.0</span>
              <span className={styles.ratingLabel}>на Яндекс картах</span>
            </div>
          </div>
        </div>

        {/* Carousel - бегущая строка */}
        <div
          className={styles.carouselWrapper}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div ref={trackRef} className={styles.carouselTrack}>
            {duplicatedReviews.map((review, index) => {
              const cardKey = `${review.id}-${index}`;
              return (
                <ReviewCard
                  key={cardKey}
                  review={review}
                  cardKey={cardKey}
                  expandedCardKey={expandedCardKey}
                  onExpand={setExpandedCardKey}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
