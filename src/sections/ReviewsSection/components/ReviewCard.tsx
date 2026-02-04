import { useEffect, useRef, useState } from "react";
import type { ReviewItem } from "../../../shared/types/reviews";
import styles from "./ReviewCard.module.css";

// Звезда (оранжевая или серая)
function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 1.5L12.4 7.1L18.5 7.6L13.9 11.6L15.3 17.5L10 14.2L4.7 17.5L6.1 11.6L1.5 7.6L7.6 7.1L10 1.5Z"
        fill={filled ? "#F5A623" : "#DDE2EB"}
      />
    </svg>
  );
}

interface ReviewCardProps {
  review: ReviewItem;
  cardKey: string;
  expandedCardKey: string | null;
  onExpand: (cardKey: string | null) => void;
}

export function ReviewCard({ review, cardKey, expandedCardKey, onExpand }: ReviewCardProps) {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [isTruncated, setIsTruncated] = useState(false);
  
  const isExpanded = expandedCardKey === cardKey;

  useEffect(() => {
    const el = textRef.current;
    if (el) {
      // Проверяем, обрезан ли текст
      setIsTruncated(el.scrollHeight > el.clientHeight);
    }
  }, [review.text]);

  const handleToggle = () => {
    onExpand(isExpanded ? null : cardKey);
  };

  return (
    <article className={styles.card}>
      {/* Верхняя зона: иконка источника + текст */}
      <div className={styles.topZone}>
        {/* Иконка источника */}
        <img
          src={review.sourceIcon}
          alt="source"
          className={styles.sourceIcon}
        />

        {/* Блок текста */}
        <div className={styles.textBlock}>
          <p
            ref={textRef}
            className={`${styles.reviewText} ${isExpanded ? styles.expanded : ""}`}
          >
            {review.text}
          </p>
          {isTruncated && (
            <button
              type="button"
              className={styles.showMore}
              onClick={handleToggle}
            >
              {isExpanded ? "Свернуть" : "Показать полностью"}
            </button>
          )}
        </div>
      </div>

      {/* Нижняя зона: автор */}
      <div className={styles.bottomZone}>
        <img
          src={review.avatarUrl}
          alt={review.authorName}
          className={styles.avatar}
          loading="lazy"
        />
        <div className={styles.metaBlock}>
          {/* Звёзды */}
          <div className={styles.starsRow}>
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon key={star} filled={star <= review.rating} />
            ))}
          </div>
          {/* Имя и дата */}
          <div className={styles.authorRow}>
            <span className={styles.authorName}>{review.authorName}</span>
            <span className={styles.authorDate}>{review.date}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
