export interface CategoryItem {
  id: number;
  title: string;
  image: string;
  href?: string;
}

// Placeholder images - replace with actual product images
export const categories: CategoryItem[] = [
  {
    id: 1,
    title: "Квадрокоптеры",
    image: "/images/catalog/quadcopters.png",
    href: "#"
  },
  {
    id: 2,
    title: "Камеры",
    image: "/images/catalog/cameras.png",
    href: "#"
  },
  {
    id: 3,
    title: "Микрофоны",
    image: "/images/catalog/microphones.png",
    href: "#"
  },
  {
    id: 4,
    title: "Стабилизаторы",
    image: "/images/catalog/stabilizers.png",
    href: "#"
  },
  {
    id: 5,
    title: "Съемочное оборудование",
    image: "/images/catalog/filming-equipment.png",
    href: "#"
  },
  {
    id: 6,
    title: "Образовательные",
    image: "/images/catalog/educational.png",
    href: "#"
  },
  {
    id: 7,
    title: "Источники питания",
    image: "/images/catalog/power-sources.png",
    href: "#"
  },
  {
    id: 8,
    title: "Аксессуары",
    image: "/images/catalog/accessories.png",
    href: "#"
  }
];

export interface MenuLink {
  id: number;
  label: string;
  href?: string;
  hasIcon: boolean;
}

export const menuLinks: MenuLink[] = [
  { id: 1, label: "Для бизнеса", href: "#", hasIcon: true },
  { id: 2, label: "Услуги", href: "#", hasIcon: true },
  { id: 3, label: "О магазине", href: "#", hasIcon: true },
  { id: 4, label: "Блог", href: "#", hasIcon: true },
  { id: 5, label: "Гарантии", href: "#", hasIcon: false },
  { id: 6, label: "Оплата и доставка", href: "#", hasIcon: false }
];

export const contactInfo = {
  address: {
    label: "Адрес:",
    text: "Москва, Багратионовский проезд, 7, корп.. 20В БЦ «Конвент Плюс»",
    hours: "ПН–ВС: с 09:00 до 18:00"
  },
  contact: {
    label: "Свяжитесь с нами:",
    phone: "+7 495 211-11-07",
    email: "sale@dji-market.ru"
  }
};
