import styles from "./NewsCard.module.css";

interface NewsCardProps {
  badge: string;
  title: string;
  excerpt: string;
  imageUrl: string;
}

export function NewsCard({
  badge,
  title,
  excerpt,
  imageUrl,
}: NewsCardProps) {
  const handleClick = () => {
    // Заглушка для перехода на страницу новости
    console.log("Navigate to news:", title);
  };

  return (
    <article className={styles.card} onClick={handleClick}>
      {/* Блок изображения */}
      <div className={styles.imageWrapper}>
        <img 
          src={imageUrl} 
          alt={title}
          className={styles.image}
        />
        {/* Стикер поверх картинки */}
        <div className={styles.badge}>
          <span className={styles.badgeText}>{badge}</span>
        </div>
      </div>

      {/* Блок текста */}
      <div className={styles.textBlock}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.excerpt}>{excerpt}</p>
      </div>
    </article>
  );
}
