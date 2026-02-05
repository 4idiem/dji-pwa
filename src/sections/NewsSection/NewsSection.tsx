import { useState } from "react";
import { useFetch } from "../../shared/hooks/useFetch";
import type { NewsResponse } from "../../shared/types/news";
import { NewsCard } from "./components/NewsCard";
import styles from "./NewsSection.module.css";

// SVG иконки стрелок
function ArrowLeftIcon() {
  return (
    <svg className={styles.arrowIcon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 18L9 12L15 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg className={styles.arrowIcon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 18L15 12L9 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function NewsSection() {
  const { data, loading, error } = useFetch<NewsResponse>("/mock/news.json");
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = data ?? [];
  const visibleCards = 3;
  const cardWidth = 445.33;
  const gap = 16;
  const maxIndex = Math.max(0, items.length - visibleCards);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  // Состояния загрузки/ошибки/пусто
  if (loading) {
    return (
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.headerRow}>
            <h2 className={styles.title}>Новости</h2>
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
            <h2 className={styles.title}>Новости</h2>
          </div>
          <p className={styles.errorText}>Ошибка загрузки: {error}</p>
        </div>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.headerRow}>
            <h2 className={styles.title}>Новости</h2>
          </div>
          <p className={styles.emptyText}>Нет данных</p>
        </div>
      </section>
    );
  }

  // Расчёт смещения для слайдера
  const translateX = currentIndex * (cardWidth + gap);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <h2 className={styles.title}>Новости</h2>
          <div className={styles.arrowGroup}>
            <button
              className={styles.arrowButton}
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Предыдущий"
            >
              <ArrowLeftIcon />
            </button>
            <button
              className={styles.arrowButton}
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              aria-label="Следующий"
            >
              <ArrowRightIcon />
            </button>
          </div>
        </div>

        <div className={styles.cardsRow}>
          <div
            className={styles.cardsTrack}
            style={{ transform: `translateX(-${translateX}px)` }}
          >
            {items.map((item) => (
              <NewsCard
                key={item.id}
                badge={item.badge}
                title={item.title}
                excerpt={item.excerpt}
                imageUrl={item.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
