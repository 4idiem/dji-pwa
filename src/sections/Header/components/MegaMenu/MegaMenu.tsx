import { useState, useEffect } from "react";
import styles from "./MegaMenu.module.css";

// Icons for left menu
const BriefcaseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.6667 5.83333H3.33333C2.41286 5.83333 1.66667 6.57953 1.66667 7.5V15.8333C1.66667 16.7538 2.41286 17.5 3.33333 17.5H16.6667C17.5871 17.5 18.3333 16.7538 18.3333 15.8333V7.5C18.3333 6.57953 17.5871 5.83333 16.6667 5.83333Z" stroke="#162036" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.3333 17.5V4.16667C13.3333 3.72464 13.1577 3.30072 12.8452 2.98816C12.5326 2.67559 12.1087 2.5 11.6667 2.5H8.33333C7.89131 2.5 7.46738 2.67559 7.15482 2.98816C6.84226 3.30072 6.66667 3.72464 6.66667 4.16667V17.5" stroke="#162036" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.5 13.3333V6.66667C17.4997 6.37439 17.4225 6.08766 17.2763 5.83539C17.13 5.58312 16.9198 5.37428 16.6667 5.23L10.8333 1.89667C10.5797 1.75213 10.2922 1.67618 10 1.67618C9.70783 1.67618 9.42033 1.75213 9.16667 1.89667L3.33333 5.23C3.08022 5.37428 2.86998 5.58312 2.72372 5.83539C2.57745 6.08766 2.5003 6.37439 2.5 6.66667V13.3333C2.5003 13.6256 2.57745 13.9123 2.72372 14.1646C2.86998 14.4169 3.08022 14.6257 3.33333 14.77L9.16667 18.1033C9.42033 18.2479 9.70783 18.3238 10 18.3238C10.2922 18.3238 10.5797 18.2479 10.8333 18.1033L16.6667 14.77C16.9198 14.6257 17.13 14.4169 17.2763 14.1646C17.4225 13.9123 17.4997 13.6256 17.5 13.3333Z" stroke="#162036" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2.725 5.8L10 10.0083L17.275 5.8" stroke="#162036" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 18.4V10" stroke="#162036" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const InfoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333Z" stroke="#162036" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 13.3333V10" stroke="#162036" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 6.66667H10.0083" stroke="#162036" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BookmarkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.8333 17.5L10 13.3333L4.16667 17.5V4.16667C4.16667 3.72464 4.34226 3.30072 4.65482 2.98816C4.96738 2.67559 5.39131 2.5 5.83333 2.5H14.1667C14.6087 2.5 15.0326 2.67559 15.3452 2.98816C15.6577 3.30072 15.8333 3.72464 15.8333 4.16667V17.5Z" stroke="#162036" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Social Icons
const TelegramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="10" fill="url(#telegram_gradient)"/>
    <path d="M14.5 6L12.7 14C12.7 14 12.5 14.5 12 14.3L8.5 11.5L7 10.8L4.5 10C4.5 10 4 9.8 4 9.4C4 9 4.5 8.8 4.5 8.8L13.8 5.3C13.8 5.3 14.5 5 14.5 5.5V6Z" fill="white"/>
    <path d="M7.5 14L7.8 11.3L12.5 7L8.5 10.8L7.5 14Z" fill="#B0BEC5"/>
    <defs>
      <linearGradient id="telegram_gradient" x1="10" y1="0" x2="10" y2="20" gradientUnits="userSpaceOnUse">
        <stop stopColor="#37AEE2"/>
        <stop offset="1" stopColor="#1E96C8"/>
      </linearGradient>
    </defs>
  </svg>
);

const TenChatIcon = () => (
  <img 
    src="https://play-lh.googleusercontent.com/_IpPaSNgx90wd3iwoOYebC3xNjqum7fff3PidgNRtI5kcBe1xr-nEuLX-n9bnyP-26Nu" 
    alt="TenChat" 
    width="20" 
    height="20" 
    style={{ borderRadius: '6px' }}
  />
);

const DzenIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="10" fill="black"/>
    <path d="M10 4C10 7.31371 7.31371 10 4 10C7.31371 10 10 12.6863 10 16C10 12.6863 12.6863 10 16 10C12.6863 10 10 7.31371 10 4Z" fill="white"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M27.4 3.1C27.1 2 26.2 1.1 25.1 0.8C22.9 0.2 14 0.2 14 0.2C14 0.2 5.1 0.2 2.9 0.8C1.8 1.1 0.9 2 0.6 3.1C0 5.3 0 10 0 10C0 10 0 14.7 0.6 16.9C0.9 18 1.8 18.9 2.9 19.2C5.1 19.8 14 19.8 14 19.8C14 19.8 22.9 19.8 25.1 19.2C26.2 18.9 27.1 18 27.4 16.9C28 14.7 28 10 28 10C28 10 28 5.3 27.4 3.1ZM11.2 14.2V5.8L18.5 10L11.2 14.2Z" fill="#FF0000"/>
  </svg>
);

const OzonIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="20" rx="10" fill="#005BFF"/>
    <ellipse cx="10" cy="10" rx="4" ry="3" stroke="white" strokeWidth="2"/>
  </svg>
);

const YandexMarketIcon = () => (
  <img 
    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAbFBMVEX/Uib/Tib/Rif/cSH/3QD/bCL/0wj/3wD/5QD/pxf/ohj/4gD/ZSP/3gD/QSj/zwn/eyD/Sif/lRv/4wD/VyX/xA7/Qij/sRT/nhn/hh7/diD/0An/XiT/thL/yAz/2QT/rRX/vhD/jxz/iR3i4QJUAAABK0lEQVR4AWIgFgDqJA81CUEYCEMOTTQ2ZO319t7/HQ+JXl078DMZhg8N+p69mQjuIMRIyY0YUjaG45dinZHxV07JC21RogkXVf+orZ0w48D3fnH94JNhA6rtfjkXDZ6QUws9Udp+ie1A5qo6QkX+N2UX1Xn+BduZjw4SCGuX4JgHyyLG01t0o0Qs19xwvfDlHSBsoSiNzgtOZpzEhT30uauO/7VqCkIdkRi2ewDCcQXlpa0sgIZiyoW9l947KdpZQe9kpFCSNd8e5PvdspGaZYiVHVjMstBAzI1qpOjTWrGkj+LyNkoSr4UP5BAN721bht1gJiWlZq10VXcr+1ma/Diu+zMK0PVwZLIW2mNSkw5zC9bqA+LU/j6hVmtpekjR3Xk1Pi+oO5jHt+wTGwURbuoDs6kAAAAASUVORK5CYII=" 
    alt="Яндекс Маркет" 
    width="20" 
    height="20" 
  />
);

// Category data - images can be easily replaced
const categories = [
  {
    id: 1,
    title: "Квадрокоптеры",
    image: "https://optim.tildacdn.com/stor6236-3736-4934-b235-356339316637/-/format/webp/87801305.jpg.webp"
  },
  {
    id: 2,
    title: "Камеры",
    image: "https://optim.tildacdn.com/stor6264-3138-4130-a262-393432323738/-/format/webp/1962de5de02af51c90b7add4724446f9.jpg.webp"
  },
  {
    id: 3,
    title: "Микрофоны",
    image: "https://optim.tildacdn.com/stor6162-3939-4330-b435-663866346361/-/format/webp/66903096.jpg.webp"
  },
  {
    id: 4,
    title: "Стабилизаторы",
    image: "https://optim.tildacdn.com/stor6536-3137-4664-b564-653333333230/-/format/webp/99622643.jpg.webp"
  },
  {
    id: 5,
    title: "Съемочное оборудование",
    image: "https://optim.tildacdn.com/stor3630-6663-4239-b762-643930653162/-/format/webp/26570120.jpg.webp"
  },
  {
    id: 6,
    title: "Образовательные",
    image: "https://optim.tildacdn.com/stor3035-3764-4865-a231-373466343064/-/format/webp/81304572.jpg.webp"
  },
  {
    id: 7,
    title: "Источники питания",
    image: "https://optim.tildacdn.com/stor3132-6530-4337-b038-626139623531/-/format/webp/44232086.jpg.webp"
  },
  {
    id: 8,
    title: "Аксессуары",
    image: "https://optim.tildacdn.com/stor3138-6636-4838-a136-613333373466/-/format/webp/12697392.png.webp"
  }
];

const menuLinks = [
  { id: 1, icon: <BriefcaseIcon />, label: "Для бизнеса" },
  { id: 2, icon: <CubeIcon />, label: "Услуги" },
  { id: 3, icon: <InfoIcon />, label: "О магазине" },
  { id: 4, icon: <BookmarkIcon />, label: "Блог" },
  { id: 5, icon: null, label: "Гарантии" },
  { id: 6, icon: null, label: "Оплата и доставка" }
];

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MegaMenu = ({ isOpen, onClose }: MegaMenuProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setIsClosing(false);
    } else if (isVisible) {
      // Запускаем анимацию закрытия
      setIsClosing(true);
      // После завершения анимации скрываем компонент
      const timer = setTimeout(() => {
        setIsVisible(false);
        setIsClosing(false);
      }, 300); // Длительность анимации
      return () => clearTimeout(timer);
    }
  }, [isOpen, isVisible]);

  if (!isVisible) return null;

  const wrapperClass = isClosing 
    ? `${styles.megaMenuWrapper} ${styles.closing}` 
    : styles.megaMenuWrapper;
  
  const backdropClass = isClosing 
    ? `${styles.backdrop} ${styles.backdropClosing}` 
    : styles.backdrop;

  return (
    <>
      <div className={backdropClass} onClick={onClose} />
      <div className={wrapperClass}>
        <div className={styles.megaMenu}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            {/* Links Block */}
            <nav className={styles.linksBlock}>
              {menuLinks.map((link) => (
                <a key={link.id} href="#" className={styles.menuLink}>
                  {link.icon && <span className={styles.linkIcon}>{link.icon}</span>}
                  <span className={link.icon ? "" : styles.noIcon}>{link.label}</span>
                </a>
              ))}
            </nav>

            {/* Contact Card */}
            <div className={styles.contactCard}>
              {/* Address Block */}
              <div className={styles.addressBlock}>
                <span className={styles.label}>Адрес:</span>
                <p className={styles.addressText}>
                  Москва, Багратионовский проезд, 7, корп.. 20В БЦ «Конвент Плюс»
                </p>
                <span className={styles.workHours}>ПН–ВС: с 09:00 до 18:00</span>
              </div>

              {/* Contact Us Block */}
              <div className={styles.contactUsBlock}>
                <span className={styles.label}>Свяжитесь с нами:</span>
                <a href="tel:+74952111107" className={styles.contactValue}>+7 495 211-11-07</a>
                <a href="mailto:sale@dji-market.ru" className={styles.contactValue}>sale@dji-market.ru</a>
              </div>

              {/* Social Icons */}
              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialIcon}><TelegramIcon /></a>
                <a href="#" className={styles.socialIcon}><TenChatIcon /></a>
                <a href="#" className={styles.socialIcon}><DzenIcon /></a>
                <a href="#" className={styles.socialIcon}><YouTubeIcon /></a>
                <a href="#" className={styles.socialIcon}><OzonIcon /></a>
                <a href="#" className={styles.socialIcon}><YandexMarketIcon /></a>
              </div>

              {/* Megamarket Logo */}
              <div className={styles.megamarketLogo}>
                <span className={styles.megamarketText}>мегамаркет</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className={styles.divider} />

          {/* Right Column - Catalog */}
          <div className={styles.rightColumn}>
            <h2 className={styles.catalogTitle}>Каталог</h2>
            <div className={styles.categoriesGrid}>
              {categories.map((category) => (
                <a key={category.id} href="#" className={styles.categoryCard}>
                  <img
                    src={category.image}
                    alt={category.title}
                    className={styles.categoryImage}
                  />
                  <div className={styles.categoryCardBg} />
                  <span className={styles.categoryTitle}>{category.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
