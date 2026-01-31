import styles from "./MainHeaderBar.module.css";

// Animated hamburger/close icon
interface AnimatedMenuIconProps {
  isOpen: boolean;
}

const AnimatedMenuIcon = ({ isOpen }: AnimatedMenuIconProps) => (
  <div className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ''}`}>
    <span className={styles.hamburgerLine}></span>
    <span className={styles.hamburgerLine}></span>
  </div>
);

const SearchIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
      stroke="#A2A6AF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5 17.5L13.875 13.875"
      stroke="#A2A6AF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CompareIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="2" y="8" width="4" height="10" rx="1" fill="#A2A6AF" />
    <rect x="8" y="4" width="4" height="14" rx="1" fill="#C4C8D0" />
    <rect x="14" y="2" width="4" height="16" rx="1" fill="#A2A6AF" />
  </svg>
);

const CartIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 1.66667L2.5 5V16.6667C2.5 17.1087 2.67559 17.5326 2.98816 17.8452C3.30072 18.1577 3.72464 18.3333 4.16667 18.3333H15.8333C16.2754 18.3333 16.6993 18.1577 17.0118 17.8452C17.3244 17.5326 17.5 17.1087 17.5 16.6667V5L15 1.66667H5Z"
      stroke="#454D5E"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.5 5H17.5"
      stroke="#454D5E"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.3333 8.33333C13.3333 9.21739 12.9821 10.0652 12.357 10.6903C11.7319 11.3155 10.8841 11.6667 10 11.6667C9.11594 11.6667 8.2681 11.3155 7.64298 10.6903C7.01786 10.0652 6.66667 9.21739 6.66667 8.33333"
      stroke="#454D5E"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface MainHeaderBarProps {
  isMenuOpen: boolean;
  onMenuToggle: () => void;
}

export const MainHeaderBar = ({ isMenuOpen, onMenuToggle }: MainHeaderBarProps) => {
  return (
    <div className={styles.mainHeaderBar}>
      <div className={styles.container}>
        {/* Logo */}
        <a href="/" className={styles.logoLink}>
          <img
            src="https://static.tildacdn.com/tild6662-3062-4964-b661-316431313062/Artboard_1.svg"
            alt="DJI Market"
            className={styles.logo}
          />
        </a>

        {/* Menu Button */}
        <button className={styles.menuButton} onClick={onMenuToggle}>
          <AnimatedMenuIcon isOpen={isMenuOpen} />
          <span className={styles.menuText}>Меню</span>
        </button>

        {/* Search Input */}
        <div className={styles.searchInput}>
          <SearchIcon />
          <span className={styles.searchPlaceholder}>Поиск</span>
        </div>

        {/* Email Block */}
        <div className={styles.contactBlock}>
          <span className={styles.primaryText}>sale@dji-market.ru</span>
          <span className={styles.secondaryText}>Сейчас работаем</span>
        </div>

        {/* Phone Block */}
        <div className={styles.contactBlock}>
          <span className={styles.primaryText}>+7 495 211-11-07</span>
          <span className={styles.secondaryText}>Обратный звонок</span>
        </div>

        {/* Compare Shortcut */}
        <div className={styles.shortcut}>
          <div className={styles.iconWrapper}>
            <CompareIcon />
          </div>
          <span className={styles.shortcutText}>К сравнению</span>
        </div>

        {/* Cart Shortcut */}
        <div className={styles.shortcut}>
          <div className={styles.iconWrapper}>
            <CartIcon />
            <span className={styles.badge}>1</span>
          </div>
          <span className={styles.shortcutText}>Корзина</span>
        </div>
      </div>
    </div>
  );
};
