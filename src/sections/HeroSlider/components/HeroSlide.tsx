import type { HeroSlideData } from "../../../shared/types/heroSlides";
import styles from "../HeroSlider.module.css";

interface HeroSlideProps {
  slide: HeroSlideData;
  isCenter?: boolean;
  onClick?: () => void;
}

export function HeroSlide({ slide, isCenter = false, onClick }: HeroSlideProps) {
  const { hero, productCard } = slide;

  // Боковой слайд (peek) - такой же контент, только другой размер
  if (!isCenter) {
    return (
      <div
        className={styles.peekSlide}
        style={{ backgroundImage: `url(${hero.bgImage})` }}
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            onClick?.();
          }
        }}
        aria-label={`Перейти к слайду: ${hero.title}`}
      >
        <div className={styles.peekSlideOverlay} />
        
        {/* Левый блок с текстом */}
        <div className={styles.slideContent}>
          <div className={styles.slideTextBlock}>
            <h2 className={styles.slideTitle}>{hero.title}</h2>
            <p className={styles.slideSubtitle}>{hero.subtitle}</p>
          </div>
          <div className={styles.ctaButton}>{hero.ctaText}</div>
        </div>

        {/* Правый блок с карточкой товара */}
        <div className={styles.productCard}>
          <div className={styles.productImageWrapper}>
            <img
              src={productCard.productImage}
              alt={productCard.productName}
              className={styles.productImage}
            />
          </div>
          <div className={styles.productInfo}>
            <span className={styles.productBadge}>{productCard.badgeText}</span>
            <h3 className={styles.productName}>{productCard.productName}</h3>
            <div className={styles.productPrices}>
              <span className={styles.priceCurrent}>{productCard.priceCurrent}</span>
              {productCard.priceOld && (
                <span className={styles.priceOld}>{productCard.priceOld}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Центральный слайд
  return (
    <div
      className={styles.centerSlide}
      style={{ backgroundImage: `url(${hero.bgImage})` }}
    >
      <div className={styles.centerSlideOverlay} />
      
      {/* Левый блок с текстом */}
      <div className={styles.slideContent}>
        <div className={styles.slideTextBlock}>
          <h2 className={styles.slideTitle}>{hero.title}</h2>
          <p className={styles.slideSubtitle}>{hero.subtitle}</p>
        </div>
        <a
          href={productCard.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
        >
          {hero.ctaText}
        </a>
      </div>

      {/* Правый блок с карточкой товара */}
      <a
        href={productCard.link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.productCard}
      >
        <div className={styles.productImageWrapper}>
          <img
            src={productCard.productImage}
            alt={productCard.productName}
            className={styles.productImage}
          />
        </div>
        <div className={styles.productInfo}>
          <span className={styles.productBadge}>{productCard.badgeText}</span>
          <h3 className={styles.productName}>{productCard.productName}</h3>
          <div className={styles.productPrices}>
            <span className={styles.priceCurrent}>{productCard.priceCurrent}</span>
            {productCard.priceOld && (
              <span className={styles.priceOld}>{productCard.priceOld}</span>
            )}
          </div>
        </div>
      </a>
    </div>
  );
}
