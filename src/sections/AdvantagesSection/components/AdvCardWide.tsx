import type { AdvantageWideCard } from "../../../shared/types/advantages";
import styles from "../AdvantagesSection.module.css";

interface AdvCardWideProps {
  card: AdvantageWideCard;
}

export function AdvCardWide({ card }: AdvCardWideProps) {
  const { title, description } = card;

  return (
    <div className={styles.cardWide}>
      <div className={styles.textBlockWide}>
        <h3 className={styles.cardTitleWide}>{title}</h3>
        <p className={styles.cardDescWide}>{description}</p>
      </div>
      {/* Декоративная надпись DJI */}
      <span className={styles.decorDJI}>DJI</span>
    </div>
  );
}
