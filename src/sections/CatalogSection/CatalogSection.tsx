import { useState } from "react";
import styles from "./CatalogSection.module.css";

// Иконка стрелки для кнопок в карточках (тёмная)
function ArrowIcon() {
  return (
    <svg
      className={styles.arrowIcon}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.5 15L12.5 10L7.5 5" stroke="#162036" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

// Иконка стрелки для активной кнопки (белая)
function ArrowIconWhite() {
  return (
    <svg
      className={styles.arrowIcon}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.5 15L12.5 10L7.5 5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

// Подкатегории для "Квадрокоптеры"
const quadcopterSubcategories = [
  { label: "DJI Mavic", href: "https://dji-market.ru/drones?tfc_storepartuid%5B1459193801%5D=DJI+Mavic&tfc_div=:::" },
  { label: "DJI Air", href: "https://dji-market.ru/drones?tfc_storepartuid%5B1459193801%5D=DJI+Air&tfc_div=:::" },
  { label: "DJI Mini", href: "https://dji-market.ru/drones?tfc_storepartuid%5B1459193801%5D=DJI+Mini&tfc_div=:::" },
  { label: "DJI Matrice", href: "https://dji-market.ru/drones?tfc_storepartuid%5B1459193801%5D=DJI+Matrice&tfc_div=:::" },
  { label: "DJI Avata", href: "https://dji-market.ru/drones?tfc_storepartuid%5B1459193801%5D=DJI+Avata&tfc_div=:::" },
  { label: "DJI Neo", href: "https://dji-market.ru/drones?tfc_storepartuid%5B1459193801%5D=DJI+Neo&tfc_div=:::" },
];

// Подкатегории для "Камеры"
const cameraSubcategories = [
  { label: "Osmo Action", href: "https://dji-market.ru/camera?tfc_storepartuid%5B1459189451%5D=Osmo+Action&tfc_div=:::" },
  { label: "Osmo Pocket", href: "https://dji-market.ru/camera?tfc_storepartuid%5B1459189451%5D=Osmo+Pocket&tfc_div=:::" },
];

// Подкатегории для "Стабилизаторы"
const stabilizerSubcategories = [
  { label: "DJI Osmo", href: "https://dji-market.ru/handheld?tfc_storepartuid%5B1459188801%5D=%D0%A1%D1%82%D0%B0%D0%B1%D0%B8%D0%BB%D0%B8%D0%B7%D0%B0%D1%82%D0%BE%D1%80%D1%8B&tfc_div=:::" },
  { label: "DJI RS", href: "https://dji-market.ru/handheld?tfc_storepartuid%5B1459188801%5D=%D0%A1%D1%82%D0%B0%D0%B1%D0%B8%D0%BB%D0%B8%D0%B7%D0%B0%D1%82%D0%BE%D1%80%D1%8B&tfc_div=:::" },
  { label: "DJI Ronin", href: "https://dji-market.ru/handheld?tfc_storepartuid%5B1459188801%5D=%D0%A1%D1%82%D0%B0%D0%B1%D0%B8%D0%BB%D0%B8%D0%B7%D0%B0%D1%82%D0%BE%D1%80%D1%8B&tfc_div=:::" },
];

// Подкатегории для "Аксессуары"
const accessoriesSubcategories = [
  { label: "Защиты пропеллеров", href: "https://dji-market.ru/accessories?tfc_storepartuid%5B1459195911%5D=%D0%97%D0%B0%D1%89%D0%B8%D1%82%D1%8B+%D0%BF%D1%80%D0%BE%D0%BF%D0%B5%D0%BB%D0%BB%D0%B5%D1%80%D0%BE%D0%B2&tfc_div=:::" },
  { label: "Карты памяти", href: "https://dji-market.ru/accessories?tfc_storepartuid%5B1459195911%5D=%D0%9A%D0%B0%D1%80%D1%82%D1%8B+%D0%BF%D0%B0%D0%BC%D1%8F%D1%82%D0%B8&tfc_div=:::" },
];

// Подкатегории для "Микрофоны"
const microphoneSubcategories = [
  { label: "DJI Mic", href: "https://dji-market.ru/dji-mic?tfc_storepartuid%5B1459184161%5D=DJI+Mic&tfc_div=:::" },
];

// Данные категорий
const categories = {
  big: {
    title: "Квадрокоптеры",
    image: "https://static.tildacdn.com/stor3538-3537-4436-a561-616239366164/89915627.jpg",
    href: "#quadcopters",
    description: "Лучшее решение для съёмки впечатляющих пейзажей с высоты",
  },
  small: [
    {
      id: 1,
      title: "Камеры",
      image: "https://static.tildacdn.com/stor6165-3135-4534-a635-653131373266/31712135.webp",
      href: "#cameras",
      description: "Универсальный вариант для четких фото и видео в путешествии",
      subcategories: cameraSubcategories,
    },
    {
      id: 2,
      title: "Микрофоны",
      image: "https://static.tildacdn.com/stor6162-3939-4330-b435-663866346361/66903096.jpg",
      href: "#microphones",
      description: "Беспроводной звук студийного качества для вашего контента",
      subcategories: microphoneSubcategories,
    },
    {
      id: 3,
      title: "Стабилизаторы",
      image: "https://static.tildacdn.com/stor6536-3137-4664-b564-653333333230/99622643.jpg",
      href: "#stabilizers",
      description: "Необходимое оснащение для съёмки динамичных сцен в движении",
      subcategories: stabilizerSubcategories,
    },
    {
      id: 4,
      title: "Аксессуары",
      image: "https://static.tildacdn.com/stor3835-6361-4165-b430-646332303634/75700000.png",
      href: "#accessories",
      description: "Правильный выбор для записи видео в 4K и серийной съемки",
      subcategories: accessoriesSubcategories,
      showAllHref: "https://dji-market.ru/accessories",
    },
  ],
};

export function CatalogSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [expandedSmallCards, setExpandedSmallCards] = useState<Set<number>>(new Set());
  const [closingSmallCards, setClosingSmallCards] = useState<Set<number>>(new Set());

  const handleToggleExpand = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isExpanded) {
      // Запускаем анимацию закрытия
      setIsClosing(true);
      setTimeout(() => {
        setIsExpanded(false);
        setIsClosing(false);
      }, 300); // Длительность анимации
    } else {
      setIsExpanded(true);
    }
  };

  const handleToggleSmallCard = (e: React.MouseEvent, cardId: number) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (expandedSmallCards.has(cardId)) {
      // Запускаем анимацию закрытия для этой карточки
      setClosingSmallCards(prev => new Set(prev).add(cardId));
      setTimeout(() => {
        setExpandedSmallCards(prev => {
          const newSet = new Set(prev);
          newSet.delete(cardId);
          return newSet;
        });
        setClosingSmallCards(prev => {
          const newSet = new Set(prev);
          newSet.delete(cardId);
          return newSet;
        });
      }, 300);
    } else {
      // Открываем карточку (другие остаются как есть)
      setExpandedSmallCards(prev => new Set(prev).add(cardId));
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header Row - заголовок */}
        <div className={styles.headerRow}>
          <h2 className={styles.title}>Оригинальная продукция всей линейки DJI</h2>
        </div>

        {/* Cards Grid */}
        <div className={styles.cardsGrid}>
          {/* Большая карточка слева */}
          <div
            className={styles.bigCard}
            style={{ backgroundImage: `url(${categories.big.image})` }}
          >
            {/* Collapsed состояние */}
            {!isExpanded && (
              <div className={styles.bottomOverlay}>
                <span className={styles.categoryText}>{categories.big.title}</span>
                <button
                  type="button"
                  className={styles.arrowButton}
                  onClick={handleToggleExpand}
                  aria-label={`Раскрыть ${categories.big.title}`}
                >
                  <ArrowIcon />
                </button>
              </div>
            )}

            {/* Expanded состояние */}
            {isExpanded && (
              <div className={`${styles.expandedPanel} ${isClosing ? styles.expandedPanelClosing : ''}`}>
                {/* Заголовок наверху */}
                <span className={styles.categoryText}>{categories.big.title}</span>

                {/* Список подкатегорий */}
                <div className={styles.subcategoryList}>
                  {quadcopterSubcategories.map((sub) => (
                    <a key={sub.label} href={sub.href} className={styles.subcategoryLink}>
                      {sub.label}
                    </a>
                  ))}
                  <a href="https://dji-market.ru/drones" className={styles.showAllLink}>
                    Показать все
                  </a>
                </div>

                {/* Нижняя строка: описание + кнопка */}
                <div className={styles.expandedBottomRow}>
                  <div className={styles.expandedDescription}>
                    {categories.big.description}
                  </div>
                  <button
                    type="button"
                    className={`${styles.arrowButton} ${styles.arrowButtonActive}`}
                    onClick={handleToggleExpand}
                    aria-label={`Свернуть ${categories.big.title}`}
                  >
                    <ArrowIconWhite />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Правая сетка 2x2 */}
          <div className={styles.rightGrid}>
            {categories.small.map((category) => {
              const isSmallExpanded = expandedSmallCards.has(category.id);
              const isSmallClosing = closingSmallCards.has(category.id);
              const hasSubcategories = 'subcategories' in category && category.subcategories;
              
              return (
                <div
                  key={category.id}
                  className={styles.smallCard}
                  style={{ backgroundImage: `url(${category.image})` }}
                >
                  {/* Collapsed состояние */}
                  {!isSmallExpanded && (
                    <div className={styles.bottomOverlaySmall}>
                      <span className={styles.categoryText}>{category.title}</span>
                      <button
                        type="button"
                        className={styles.arrowButton}
                        onClick={(e) => {
                          if (hasSubcategories) {
                            handleToggleSmallCard(e, category.id);
                          } else {
                            e.preventDefault();
                            e.stopPropagation();
                            window.location.href = category.href;
                          }
                        }}
                        aria-label={hasSubcategories ? `Раскрыть ${category.title}` : `Перейти в ${category.title}`}
                      >
                        <ArrowIcon />
                      </button>
                    </div>
                  )}

                  {/* Expanded состояние для маленькой карточки */}
                  {isSmallExpanded && hasSubcategories && (
                    <div className={`${styles.expandedPanelSmall} ${isSmallClosing ? styles.expandedPanelSmallClosing : ''}`}>
                      {/* Заголовок наверху */}
                      <span className={styles.categoryText}>{category.title}</span>

                      {/* Список подкатегорий */}
                      <div className={styles.subcategoryListSmall}>
                        {category.subcategories.map((sub) => (
                          <a key={sub.label} href={sub.href} className={styles.subcategoryLink}>
                            {sub.label}
                          </a>
                        ))}
                        {'showAllHref' in category && category.showAllHref && (
                          <a href={category.showAllHref} className={styles.showAllLink}>
                            Показать все
                          </a>
                        )}
                      </div>

                      {/* Нижняя строка: описание + кнопка */}
                      <div className={styles.expandedBottomRow}>
                        <div className={styles.expandedDescriptionSmall}>
                          {category.description}
                        </div>
                        <button
                          type="button"
                          className={`${styles.arrowButton} ${styles.arrowButtonActive}`}
                          onClick={(e) => handleToggleSmallCard(e, category.id)}
                          aria-label={`Свернуть ${category.title}`}
                        >
                          <ArrowIconWhite />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={styles.bottomCTA}>
          <a href="https://dji-market.ru/products" className={styles.catalogButton}>
            <span className={styles.catalogButtonText}>Смотреть весь каталог</span>
          </a>
        </div>
      </div>
    </section>
  );
}
