import type { AdvantageSmallCard } from "../../../shared/types/advantages";
import styles from "../AdvantagesSection.module.css";

// Иконка грузовика
function TruckIcon() {
  return (
    <svg className={styles.icon} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.333 2.5H1.667V12.5H13.333V2.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.333 6.667H16.667L18.333 8.333V12.5H13.333V6.667Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.583 17.5C5.504 17.5 6.25 16.754 6.25 15.833C6.25 14.913 5.504 14.167 4.583 14.167C3.663 14.167 2.917 14.913 2.917 15.833C2.917 16.754 3.663 17.5 4.583 17.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.417 17.5C16.337 17.5 17.083 16.754 17.083 15.833C17.083 14.913 16.337 14.167 15.417 14.167C14.496 14.167 13.75 14.913 13.75 15.833C13.75 16.754 14.496 17.5 15.417 17.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Иконка подтверждения (галочка в круге)
function VerifiedIcon() {
  return (
    <svg className={styles.icon} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 18.333C14.602 18.333 18.333 14.602 18.333 10C18.333 5.398 14.602 1.667 10 1.667C5.398 1.667 1.667 5.398 1.667 10C1.667 14.602 5.398 18.333 10 18.333Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 10L9.167 11.667L12.5 8.333"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface AdvCardSmallProps {
  card: AdvantageSmallCard;
}

export function AdvCardSmall({ card }: AdvCardSmallProps) {
  const { icon, title, description } = card;

  return (
    <div className={styles.cardSmall}>
      <div className={styles.iconBox}>
        {icon === "truck" ? <TruckIcon /> : <VerifiedIcon />}
      </div>
      <div className={styles.textBlockSmall}>
        <h3 className={styles.cardTitleSmall}>{title}</h3>
        <p className={styles.cardDescSmall}>{description}</p>
      </div>
    </div>
  );
}
