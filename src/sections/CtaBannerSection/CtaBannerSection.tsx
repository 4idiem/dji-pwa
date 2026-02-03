import { useFetch } from "../../shared/hooks/useFetch";
import type { CtaBannerData } from "../../shared/types/ctaBanner";
import styles from "./CtaBannerSection.module.css";

const LOGO_URL = "https://static.tildacdn.com/tild6634-6631-4438-a438-613035643336/djiiii_11.png";
const PERSON_IMAGE_URL = "https://png.pngtree.com/png-vector/20240311/ourmid/pngtree-happy-man-wearing-vr-glasses-png-image_11930695.png";

export function CtaBannerSection() {
  const { data, loading, error } = useFetch<CtaBannerData>("/mock/cta_banner.json");

  if (loading) return <div>Загрузка...</div>;
  if (error || !data) return null;

  const { title, description, buttonText, buttonHref, personImage } = data;

  return (
    <section className={styles.section}>
      {/* Градиентный баннер */}
      <div className={styles.banner}>
        {/* Левый контент */}
        <div className={styles.contentBlock}>
          {/* Логотип */}
          <div className={styles.logo}>
            <img src={LOGO_URL} alt="DJI Market" />
          </div>

          {/* Текстовый блок */}
          <div className={styles.textBlock}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
          </div>
        </div>

        {/* Кнопка */}
        <a href={buttonHref} className={styles.ctaButton}>
          <span className={styles.buttonText}>{buttonText}</span>
        </a>
      </div>

      {/* Картинка человека по центру */}
      <img
        src={PERSON_IMAGE_URL}
        alt="Человек в FPV очках"
        className={styles.personImage}
      />
    </section>
  );
}
