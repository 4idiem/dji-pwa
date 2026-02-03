import { useFetch } from "../../shared/hooks/useFetch";
import type { AdvantagesData } from "../../shared/types/advantages";
import { AdvCardSmall, AdvCardWide } from "./components";
import styles from "./AdvantagesSection.module.css";

export function AdvantagesSection() {
  const { data, loading, error } = useFetch<AdvantagesData>("/mock/advantages.json");

  if (loading) {
    return (
      <section className={styles.section}>
        <div className={styles.container}>
          <p className={styles.loadingText}>Загрузка...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.section}>
        <div className={styles.container}>
          <p className={styles.errorText}>Ошибка загрузки: {error}</p>
        </div>
      </section>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Заголовок секции */}
        <div className={styles.headerRow}>
          <h2 className={styles.title}>Преимущества DJI-Market</h2>
        </div>

        {/* Карточки преимуществ */}
        <div className={styles.advantagesContent}>
          {/* Верхний ряд: 2 маленькие карточки */}
          <div className={styles.topCardsRow}>
            {data.smallCards.map((card) => (
              <AdvCardSmall key={card.id} card={card} />
            ))}
          </div>

          {/* Нижний ряд: широкая карточка */}
          <AdvCardWide card={data.wideCard} />
        </div>
      </div>
    </section>
  );
}
