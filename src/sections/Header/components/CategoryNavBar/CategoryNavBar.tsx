import styles from "./CategoryNavBar.module.css";

const categories = [
  { id: 1, label: "Дроны с камерой", href: "#" },
  { id: 2, label: "Стабилизаторы", href: "#" },
  { id: 3, label: "Камеры", href: "#" },
  { id: 4, label: "Микрофоны", href: "#" },
  { id: 5, label: "Аксессуары", href: "#" },
];

const ContactIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.3333 1.66667L9.16667 10.8333"
      stroke="#A2A6AF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.3333 1.66667L12.5 18.3333L9.16667 10.8333L1.66667 7.5L18.3333 1.66667Z"
      stroke="#A2A6AF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const WhatsAppIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.05 2.91C16.1332 1.98392 15.0412 1.24967 13.8377 0.750548C12.6341 0.251424 11.3432 -0.00287234 10.04 2.88565e-05C4.58 2.88565e-05 0.130001 4.45003 0.130001 9.91003C0.130001 11.66 0.590001 13.36 1.45 14.86L0.0500011 20L5.30001 18.62C6.75001 19.41 8.38 19.83 10.04 19.83C15.5 19.83 19.95 15.38 19.95 9.92003C19.95 7.27003 18.92 4.78003 17.05 2.91ZM10.04 18.15C8.56 18.15 7.11 17.75 5.84 17L5.54 16.82L2.42 17.64L3.25 14.6L3.05 14.29C2.2277 12.9771 1.79119 11.4593 1.79 9.91003C1.79 5.37003 5.49 1.67003 10.03 1.67003C12.23 1.67003 14.3 2.53003 15.85 4.09003C16.6175 4.85386 17.2257 5.76243 17.6394 6.76256C18.0531 7.76268 18.264 8.83479 18.26 9.92003C18.28 14.46 14.58 18.15 10.04 18.15ZM14.56 11.99C14.31 11.87 13.09 11.27 12.87 11.18C12.64 11.1 12.48 11.06 12.31 11.3C12.14 11.55 11.67 12.11 11.53 12.27C11.39 12.44 11.24 12.46 10.99 12.33C10.74 12.21 9.94 11.94 9 11.1C8.26 10.44 7.77 9.63003 7.62 9.38003C7.48 9.13003 7.6 9.00003 7.73 8.87003C7.84 8.76003 7.98 8.58003 8.1 8.44003C8.22 8.30003 8.27 8.19003 8.35 8.03003C8.43 7.86003 8.39 7.72003 8.33 7.60003C8.27 7.48003 7.77 6.26003 7.57 5.76003C7.37 5.28003 7.16 5.34003 7.01 5.33003H6.53C6.36 5.33003 6.1 5.39003 5.87 5.64003C5.65 5.89003 5.01 6.49003 5.01 7.71003C5.01 8.93003 5.9 10.11 6.02 10.27C6.14 10.44 7.77 12.94 10.25 14.01C10.84 14.27 11.3 14.42 11.66 14.53C12.25 14.72 12.79 14.69 13.22 14.63C13.7 14.56 14.69 14.03 14.89 13.45C15.1 12.87 15.1 12.38 15.03 12.27C14.96 12.16 14.81 12.11 14.56 11.99Z"
      fill="#25D366"
    />
  </svg>
);

export const CategoryNavBar = () => {
  return (
    <div className={styles.categoryNavBar}>
      <div className={styles.container}>
        {/* Left - Categories */}
        <nav className={styles.categories}>
          {categories.map((category) => (
            <a key={category.id} href={category.href} className={styles.categoryLink}>
              {category.label}
            </a>
          ))}
        </nav>

        {/* Right - Contact Links */}
        <div className={styles.contactLinks}>
          <a href="#" className={styles.contactLink}>
            <ContactIcon />
            <span>Контакты</span>
          </a>
          <a
            href="https://wa.me/"
            className={styles.contactLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            <span>Написать в WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
