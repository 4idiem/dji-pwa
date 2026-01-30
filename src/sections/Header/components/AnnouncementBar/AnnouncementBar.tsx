import styles from "./AnnouncementBar.module.css";

const TrendUpIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.3333 5L10.8333 12.5L7.08333 8.75L1.66667 14.1667"
      stroke="#162036"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.3333 5H18.3333V10"
      stroke="#162036"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const announcementText =
  "Уважаемые покупатели! В связи с нестабильным курсом валют и пересмотром цен некоторыми производителями, цены на товары могут отличаться от заявленных на сайте";

export const AnnouncementBar = () => {
  return (
    <div className={styles.announcementBar}>
      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeContent}>
          {[...Array(4)].map((_, index) => (
            <span key={index} className={styles.marqueeItem}>
              <TrendUpIcon />
              <span className={styles.text}>{announcementText}</span>
            </span>
          ))}
        </div>
        <div className={styles.marqueeContent} aria-hidden="true">
          {[...Array(4)].map((_, index) => (
            <span key={index} className={styles.marqueeItem}>
              <TrendUpIcon />
              <span className={styles.text}>{announcementText}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
