import { useState, useEffect, useCallback } from "react";
import { AnnouncementBar } from "./components/AnnouncementBar";
import { MainHeaderBar } from "./components/MainHeaderBar";
import { CategoryNavBar } from "./components/CategoryNavBar";
import { MegaMenu } from "./components/MegaMenu";
import styles from "./Header.module.css";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleMenuClose = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <AnnouncementBar />
      <MainHeaderBar isMenuOpen={isMenuOpen} onMenuToggle={handleMenuToggle} />
      <CategoryNavBar />
      <MegaMenu isOpen={isMenuOpen} onClose={handleMenuClose} />
    </header>
  );
};
