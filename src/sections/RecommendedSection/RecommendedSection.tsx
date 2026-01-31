import { useState } from "react";
import { useFetch } from "../../shared/hooks/useFetch";
import type { RecommendedResponse } from "../../shared/types/recommended";
import styles from "./RecommendedSection.module.css";

// SVG иконки стрелок (Outline black, 24px внутри 40px кнопки)
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

export function RecommendedSection() {
  const { data, loading, error } = useFetch<RecommendedResponse>("/mock/recommended.json");
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = data ?? [];
  const visibleCards = 4;
  const cardWidth = 330;
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
            <h2 className={styles.title}>Рекомендуем</h2>
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
            <h2 className={styles.title}>Рекомендуем</h2>
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
            <h2 className={styles.title}>Рекомендуем</h2>
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
        {/* Header Row: заголовок + стрелки */}
        <div className={styles.headerRow}>
          <h2 className={styles.title}>Рекомендуем</h2>

          <div className={styles.arrowGroup}>
            <button
              type="button"
              className={styles.arrowButton}
              aria-label="Назад"
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >
              <ArrowLeftIcon />
            </button>
            <button
              type="button"
              className={styles.arrowButton}
              aria-label="Вперёд"
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
            >
              <ArrowRightIcon />
            </button>
          </div>
        </div>

        {/* Cards Row */}
        <div className={styles.cardsRow}>
          <div
            className={styles.cardsTrack}
            style={{ transform: `translateX(-${translateX}px)` }}
          >
            {items.map((item, idx) => {
              const title = item.name ?? "Без названия";
              const price = item.price ?? "—";
              const link = item.link ?? "#";
              const image = item.image;
              const key = link !== "#" ? link : `${title}-${idx}`;

              return (
                <a
                  key={key}
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.card}
                >
                  {/* Фон карточки - изображение */}
                  <div className={styles.cardBackground}>
                    {image && (
                      <img
                        src={image}
                        alt={title}
                        loading="lazy"
                        className={styles.cardBackgroundImage}
                      />
                    )}
                  </div>

                  {/* Градиент для читаемости текста */}
                  <div className={styles.cardOverlay} />

                  {/* Info Block: название + цена */}
                  <div className={styles.infoBlock}>
                    <h3 className={styles.cardTitle}>{title}</h3>
                    <p className={styles.cardPrice}>{price}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
