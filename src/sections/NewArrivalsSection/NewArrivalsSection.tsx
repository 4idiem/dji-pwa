import { useState } from "react";
import { useFetch } from "../../shared/hooks/useFetch";
import type { NewArrivalsResponse } from "../../shared/types/newArrivals";
import styles from "./NewArrivalsSection.module.css";

// SVG иконки стрелок (как в Рекомендуем)
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

// Иконка сравнения
function CompareIcon() {
  return (
    <svg className={styles.compareIcon} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="10" width="4" height="8" rx="1" fill="#A2A6AF" />
      <rect x="8" y="6" width="4" height="12" rx="1" fill="#C4C8D0" />
      <rect x="14" y="2" width="4" height="16" rx="1" fill="#A2A6AF" />
    </svg>
  );
}

// Форматирование цены
function formatPrice(price: number): string {
  return price.toLocaleString("ru-RU") + " ₽";
}

export function NewArrivalsSection() {
  const { data, loading, error } = useFetch<NewArrivalsResponse>("/mock/new_arrivals.json");
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = data ?? [];
  const visibleCards = 5;
  const cardWidth = 260.8;
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
            <h2 className={styles.title}>Новинки</h2>
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
            <h2 className={styles.title}>Новинки</h2>
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
            <h2 className={styles.title}>Новинки</h2>
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
          <h2 className={styles.title}>Новинки</h2>

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
            {items.map((item) => {
              const hasDiscount = item.oldPrice !== undefined;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.card}
                >
                  {/* Tag Row */}
                  <div className={styles.tagRow}>
                    {item.tag && (
                      <div className={styles.tag}>
                        <span className={styles.tagTriangle} />
                        <div className={styles.tagBody}>
                          <span className={styles.tagDot} />
                          <span className={styles.tagText}>{item.tag}</span>
                        </div>
                      </div>
                    )}
                    <button
                      type="button"
                      className={styles.compareButton}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        // TODO: Добавить логику сравнения
                      }}
                      aria-label="Добавить к сравнению"
                    >
                      <CompareIcon />
                    </button>
                  </div>

                  {/* Image Block */}
                  <div className={styles.imageBlock}>
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className={styles.productImage}
                    />
                  </div>

                  {/* Info Block */}
                  <div className={styles.infoBlock}>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <div className={styles.priceRow}>
                      <p className={styles.currentPrice}>{formatPrice(item.price)}</p>
                      {hasDiscount && (
                        <p className={styles.oldPrice}>{formatPrice(item.oldPrice!)}</p>
                      )}
                    </div>
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
