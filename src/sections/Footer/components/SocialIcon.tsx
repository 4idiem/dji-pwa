import styles from "../Footer.module.css";

interface SocialIconProps {
  name: string;
  href: string;
  icon: string;
}

export function SocialIcon({ name, href, icon }: SocialIconProps) {
  const isMegamarket = name === "Мегамаркет";
  const isTenchat = name === "Тенчат";
  
  return (
    <a
      href={href}
      className={`${styles.socialIcon} ${isMegamarket ? styles.socialIconMegamarket : ''}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
    >
      {isTenchat ? (
        <svg width="20" height="20" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            fill="#D93F35" 
            d="M5.4 1.45a42.78 42.78 0 0 1 22.07 0 6.6 6.6 0 0 1 4.76 5.1c.85 4.39.85 8.9 0 13.28a6.6 6.6 0 0 1-5.31 5.25.83.83 0 0 0-.62.8v5.24c0 .12-.08.24-.2.3a.33.33 0 0 1-.35-.05l-5.32-4.51a2.3 2.3 0 0 0-1.61-.54c-4.52.25-9.05-.22-13.42-1.38a6.6 6.6 0 0 1-4.76-5.11 34.71 34.71 0 0 1 0-13.27A6.6 6.6 0 0 1 5.4 1.45Z"
          />
          <text x="16.5" y="18" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial">T</text>
        </svg>
      ) : (
        <img 
          src={icon} 
          alt={name} 
          width={isMegamarket ? undefined : 20} 
          height={isMegamarket ? 20 : 20} 
        />
      )}
    </a>
  );
}
