import { useFetch } from "../../shared/hooks/useFetch";
import type { FeaturesResponse } from "../../shared/types/features";
import { FeatureCard } from "./components";
import styles from "./FeaturesSection.module.css";

export function FeaturesSection() {
  const { data, loading, error } = useFetch<FeaturesResponse>("/mock/features.json");
  const features = data ?? [];

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

  if (features.length === 0) {
    return null;
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Заголовок секции */}
        <div className={styles.headerRow}>
          <h2 className={styles.title}>Оригинальная продукция всей линейки DJI</h2>
        </div>

        {/* Карточки */}
        <div className={styles.cardsRow}>
          {features.map((feature) => (
            <FeatureCard key={feature.id} card={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
