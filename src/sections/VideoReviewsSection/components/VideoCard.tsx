import styles from "./VideoCard.module.css";

interface VideoCardProps {
  badgeText: string;
  title: string;
  hashtags: string;
  shortsUrl: string;
  previewImageUrl: string;
}

// Play иконка
function PlayIcon() {
  return (
    <svg
      className={styles.playIcon}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 1.5L11.5 7L2.5 12.5V1.5Z"
        fill="white"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function VideoCard({
  badgeText,
  title,
  hashtags,
  shortsUrl,
  previewImageUrl,
}: VideoCardProps) {
  const handleClick = () => {
    window.open(shortsUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className={styles.card}
      onClick={handleClick}
    >
      {/* Фоновое изображение */}
      <img 
        src={previewImageUrl} 
        alt={title}
        className={styles.previewImage}
      />

      {/* Затемняющий overlay */}
      <div className={styles.overlay} />

      {/* Контент карточки */}
      <div className={styles.content}>
        {/* Верхний блок: бейдж + заголовок */}
        <div className={styles.topBlock}>
          <div className={styles.badge}>
            <span className={styles.badgeText}>{badgeText}</span>
          </div>
          <h3 className={styles.title}>{title}</h3>
        </div>

        {/* Нижний блок: CTA + хэштеги */}
        <div className={styles.bottomBlock}>
          <div className={styles.cta}>
            <div className={styles.playButton}>
              <PlayIcon />
            </div>
            <span className={styles.ctaText}>
              Смотреть<br />видео
            </span>
          </div>
          <p className={styles.hashtags}>{hashtags}</p>
        </div>
      </div>
    </div>
  );
}
