import { useFetch } from "../../shared/hooks/useFetch";
import type { ServicesData } from "../../shared/types/services";
import { ServiceCard } from "./components";
import styles from "./ServicesSection.module.css";

export function ServicesSection() {
  const { data, loading, error } = useFetch<ServicesData>("/mock/services.json");

  if (loading) return <div>Загрузка...</div>;
  if (error || !data) return null;

  const { title, services, buttonText, buttonHref } = data;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Заголовок */}
        <div className={styles.headerRow}>
          <h2 className={styles.sectionTitle}>{title}</h2>
        </div>

        {/* Сетка карточек */}
        <div className={styles.cardsGrid}>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Кнопка "Все услуги" */}
        <div className={styles.footerButtonRow}>
          <a href={buttonHref} className={styles.allServicesButton}>
            <span className={styles.buttonText}>{buttonText}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
