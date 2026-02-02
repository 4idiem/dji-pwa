import styles from "./Footer.module.css";
import {
  contactInfo,
  navigationColumns,
  socialLinks,
  ratingInfo,
  ctaInfo,
  legalInfo,
} from "./footerData";
import { SocialIcon } from "./components/SocialIcon";
import { StarIcon } from "./components/StarIcon";

export function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerInner}>
        <div className={styles.footerContainer}>
          <div className={styles.footerPanel}>
            {/* Логотип */}
            <a href="/" className={styles.logo} aria-label="На главную">
              <img
                src="https://static.tildacdn.com/tild6634-6631-4438-a438-613035643336/djiiii_11.png"
                alt="DJI-Market.ru"
              />
            </a>

          {/* ========== Верхняя часть ========== */}
          <div className={styles.footerTop}>
            {/* === Блок контактов (Адрес) === */}
            <div className={styles.contactBlock}>
              {/* Адрес */}
              <div className={styles.addressGroup}>
                <p className={styles.groupTitle}>Адрес:</p>
                {contactInfo.address.map((line, index) => (
                  <p key={index} className={styles.addressText}>
                    {line}
                  </p>
                ))}
                <p className={styles.workingHours}>{contactInfo.workingHours}</p>
              </div>

              {/* Контакты */}
              <div className={styles.contactGroup}>
                <p className={styles.groupTitle}>Свяжитесь с нами:</p>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className={styles.contactLink}
                >
                  {contactInfo.phone}
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className={styles.contactLink}
                >
                  {contactInfo.email}
                </a>
              </div>

              {/* Социальные иконки */}
              <div className={styles.socialIcons}>
                {socialLinks.map((social) => (
                  <SocialIcon
                    key={social.name}
                    name={social.name}
                    href={social.href}
                    icon={social.icon}
                  />
                ))}
              </div>
            </div>

            {/* === Навигационные колонки === */}
            {navigationColumns.map((column) => (
              <div key={column.title} className={styles.navColumn}>
                <h3 className={styles.navTitle}>{column.title}</h3>
                <ul className={styles.navList}>
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} className={styles.navLink}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
                {column.subSection && (
                  <div className={styles.subSection}>
                    <h3 className={styles.navTitle}>{column.subSection.title}</h3>
                    <ul className={styles.navList}>
                      {column.subSection.links.map((link) => (
                        <li key={link.href}>
                          <a href={link.href} className={styles.navLink}>
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}

            {/* === CTA блок === */}
            <div className={styles.ctaSection}>
              {/* CTA карточка */}
              <div className={styles.ctaCard}>
                <p className={styles.ctaTitle}>{ctaInfo.title}</p>
                {ctaInfo.subtitle && (
                  <p className={styles.ctaSubtitle}>{ctaInfo.subtitle}</p>
                )}
                <a href={ctaInfo.buttonHref} className={styles.ctaButton}>
                  {ctaInfo.buttonText}
                </a>
              </div>

              {/* Рейтинг */}
              <div className={styles.ratingBlock}>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAYFBMVEX4YEr4X0n4XEX4VTz4Uzn4WkH5hnj8v7j91tH94N34ZVD+5uP////+8vD/9/b9zsj7uLD+7+393tr//v75cl/4bFn4UDX7ppv5gHH8wrv3TTH8xsD3Rib92dX4WkP4Z1PMr9nAAAAAnklEQVR4AcTPNQLDQBAEwUNhW8z4/1caM2kv9qS1qP4bbax171jJfBQn6TuJuZnJcn55eH0xrR5QlFUM9Q19BY12NmsFdDl0RulewqEFr0P4AB1Cm8BoA2giaCcro3IzMC4yarsCjYxKbzusmYxHBIULjPUFRF5Gt8LqtIhHBA+jdc8ddVbAdKgPPo4Lqqw/s+NTdZ6n8InWr8HpgQQAHnwKoF6Sk9YAAAAASUVORK5CYII="
                  alt="Яндекс"
                  className={styles.yandexIcon}
                />
                <span className={styles.ratingScore}>{ratingInfo.score}</span>
                <div className={styles.stars}>
                  {Array.from({ length: ratingInfo.maxStars }).map((_, i) => (
                    <StarIcon key={i} className={styles.star} />
                  ))}
                </div>
                <span className={styles.ratingLabel}>{ratingInfo.label}</span>
              </div>
            </div>
          </div>

          {/* ========== Нижняя строка ========== */}
          <div className={styles.footerBottom}>
            {/* Юридическая информация */}
            <p className={styles.legalText}>{legalInfo.copyright}</p>
            <a
              href={legalInfo.privacyPolicy.href}
              className={styles.legalLink}
            >
              {legalInfo.privacyPolicy.label}
            </a>
            <p className={styles.legalText}>
              {legalInfo.inn}, {legalInfo.ogrn}
            </p>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}
