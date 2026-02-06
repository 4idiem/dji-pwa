import { useFetch } from "../../shared/hooks/useFetch";
import type { CtaBannerData } from "../../shared/types/ctaBanner";
import styles from "./CtaBannerSection.module.css";

const LOGO_URL = "https://static.tildacdn.com/tild6634-6631-4438-a438-613035643336/djiiii_11.png";
const PERSON_IMAGE_URL = "https://png.pngtree.com/png-vector/20240311/ourmid/pngtree-happy-man-wearing-vr-glasses-png-image_11930695.png";

interface CtaBannerProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  centerImageUrl: string;
  centerImageAlt: string;
  imageClassName?: string;
  showLogo?: boolean;
}

function CtaBanner({
  title,
  description,
  buttonText,
  buttonHref,
  centerImageUrl,
  centerImageAlt,
  imageClassName = styles.personImage,
  showLogo = true,
}: CtaBannerProps) {
  return (
    <section className={styles.section}>
      {/* Градиентный баннер */}
      <div className={styles.banner}>
        {/* Левый контент */}
        <div className={styles.contentBlock}>
          {/* Логотип */}
          {showLogo && (
            <div className={styles.logo}>
              <img src={LOGO_URL} alt="DJI Market" />
            </div>
          )}

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

      {/* Картинка по центру */}
      <img
        src={centerImageUrl}
        alt={centerImageAlt}
        className={imageClassName}
      />
    </section>
  );
}

export function CtaBannerSection() {
  const { data, loading, error } = useFetch<CtaBannerData>("/mock/cta_banner.json");

  if (loading) return <div>Загрузка...</div>;
  if (error || !data) return null;

  const { title, description, buttonText, buttonHref } = data;

  return (
    <CtaBanner
      title={title}
      description={description}
      buttonText={buttonText}
      buttonHref={buttonHref}
      centerImageUrl={PERSON_IMAGE_URL}
      centerImageAlt="Человек в FPV очках"
    />
  );
}

export function CtaBannerConsultation() {
  const { data, loading, error } = useFetch<CtaBannerData>("/mock/cta_banner_consultation.json");

  if (loading) return <div>Загрузка...</div>;
  if (error || !data) return null;

  const { title, description, buttonText, buttonHref, centerImage } = data as CtaBannerData & { centerImage?: string };

  return (
    <CtaBanner
      title={title}
      description={description}
      buttonText={buttonText}
      buttonHref={buttonHref}
      centerImageUrl={centerImage || ""}
      centerImageAlt="Дрон DJI Mavic"
      imageClassName={styles.droneImage}
      showLogo={false}
    />
  );
}
