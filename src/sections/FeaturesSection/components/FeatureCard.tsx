import type { FeatureCardData } from "../../../shared/types/features";
import styles from "../FeaturesSection.module.css";

// Иконка здания/госучреждения
function BuildingIcon({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 21H21M5 21V7L12 3L19 7V21M9 21V15H15V21M9 10H9.01M15 10H15.01M9 13H9.01M15 13H15.01"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Иконка грузовика/доставки
function TruckIcon({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 16V3H1V16H16ZM16 16H23V11L20 8H16V16ZM8 19.5C8 20.8807 6.88071 22 5.5 22C4.11929 22 3 20.8807 3 19.5C3 18.1193 4.11929 17 5.5 17C6.88071 17 8 18.1193 8 19.5ZM21 19.5C21 20.8807 19.8807 22 18.5 22C17.1193 22 16 20.8807 16 19.5C16 18.1193 17.1193 17 18.5 17C19.8807 17 21 18.1193 21 19.5Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Иконка молотка/тендера
function GavelIcon({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.25 2L19 6.75L17.5 8.25L12.75 3.5L14.25 2ZM5.5 11L11 5.5L12.5 7L7 12.5L5.5 11ZM2 22L4 20L8 16L10 18L6 22L4 20L2 22ZM19.5 8.5L21 10L10 21L8.5 19.5L19.5 8.5Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface FeatureCardProps {
  card: FeatureCardData;
}

export function FeatureCard({ card }: FeatureCardProps) {
  const { theme, icon, badgeText, title, description } = card;

  // Выбираем классы в зависимости от темы
  const themeClass = {
    dark: styles.cardDark,
    light: styles.cardLight,
    blue: styles.cardBlue,
  }[theme];

  const iconBoxClass = {
    dark: styles.iconBoxDark,
    light: styles.iconBoxLight,
    blue: styles.iconBoxBlue,
  }[theme];

  const badgeClass = {
    dark: styles.badgeDark,
    light: styles.badgeLight,
    blue: styles.badgeBlue,
  }[theme];

  const titleClass = {
    dark: styles.cardTitleDark,
    light: styles.cardTitleLight,
    blue: styles.cardTitleBlue,
  }[theme];

  const descriptionClass = {
    dark: styles.cardDescriptionDark,
    light: styles.cardDescriptionLight,
    blue: styles.cardDescriptionBlue,
  }[theme];

  // Цвет иконки
  const iconColor = theme === "light" ? "#3475FF" : "#FFFFFF";

  // Выбираем иконку
  const IconComponent = {
    building: BuildingIcon,
    truck: TruckIcon,
    gavel: GavelIcon,
  }[icon];

  return (
    <div className={`${styles.card} ${themeClass}`}>
      {/* Верхняя строка: иконка + бейдж */}
      <div className={styles.cardTopRow}>
        <div className={`${styles.iconBox} ${iconBoxClass}`}>
          <IconComponent color={iconColor} />
        </div>
        <span className={`${styles.badge} ${badgeClass}`}>{badgeText}</span>
      </div>

      {/* Заголовок */}
      <h3 className={`${styles.cardTitle} ${titleClass}`}>{title}</h3>

      {/* Описание */}
      <p className={`${styles.cardDescription} ${descriptionClass}`}>{description}</p>
    </div>
  );
}
