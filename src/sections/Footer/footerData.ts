import type {
  FooterNavColumn,
  SocialLink,
  ContactInfo,
  RatingInfo,
  CTAInfo,
  LegalInfo,
} from "../../shared/types/footer";

export const contactInfo: ContactInfo = {
  address: [
    "Москва, Багратионовский проезд, д. 7, корп.",
    "20В, БЦ «Конвент Плюс»",
  ],
  workingHours: "ПН-ВС: с 09:00 до 18:00",
  phone: "+7 495 211-11-07",
  email: "sale@dji-market.ru",
};

export const navigationColumns: FooterNavColumn[] = [
  {
    title: "Каталог",
    links: [
      { label: "Квадрокоптеры", href: "/catalog/quadcopters" },
      { label: "Камеры", href: "/catalog/cameras" },
      { label: "Микрофоны", href: "/catalog/microphones" },
      { label: "Стабилизаторы", href: "/catalog/stabilizers" },
      { label: "Аксессуары", href: "/catalog/accessories" },
      { label: "Образовательные", href: "/catalog/education" },
      { label: "Источники питания", href: "/catalog/power-sources" },
    ],
  },
  {
    title: "Магазин",
    links: [
      { label: "О магазине", href: "/about" },
      { label: "Блог", href: "/blog" },
      { label: "Корзина", href: "/cart" },
      { label: "Сравнение товаров", href: "/compare" },
    ],
  },
  {
    title: "Информация",
    links: [
      { label: "Оплата и доставка", href: "/delivery" },
      { label: "Гарантии", href: "/warranty" },
      { label: "Поддержка", href: "/support" },
    ],
    subSection: {
      title: "Помощь",
      links: [
        { label: "Обратный звонок", href: "/callback" },
        { label: "Написать в WhatsApp", href: "https://wa.me/74952111107" },
      ],
    },
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "Telegram",
    href: "https://t.me/djimarket",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAY1BMVEX////8/f+41Pd7sfFFmO0gius9le1zrfCuzvby9/2QvPMTh+srjewzkOwykOwMhuvV5frB2figxvW20vfq8v1np/A4kuzv9f3i7fxtqvDO4fmWwPRQne7L3/kAguqGt/Ld6/s4puGjAAAA/0lEQVR4AayRhQ5DMQhFeVKFls5d/v8rt9I1YRLfjcLBgT9oGKfZGOt8+EYRDaWcExmePnAhk1MX4ajZgpNW5qXKY0lT4lVnA1X7I3cNTdEkJYNY+25eiahn2S53u0p5L3DsiZn4cAQAgXQSOFFjxpx2AAGgmBp5FjhnqWd9beGOvRQKrOvjptaDCxcAOJHA8IJmbA2uMoVT0D4b5Ntlt8i0g+YQCD0wk0GDd7EHFmjF8H0V2kilO4oRBQZOndbefdgCatGqjIcBbtWkMzQFfT9qs3L59c4sDNVDlx8PxQmURlY/Ja55SusNU24Iz3f41P4041M2FvitEB4jPp0DAHyFFi4xND68AAAAAElFTkSuQmCC",
  },
  {
    name: "Тенчат",
    href: "https://tenchat.ru/djimarket",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABg0lEQVR4Ae2XBRIDQRBE0TNwC9zdIXYJtAQ5CiTlaBnuh8HdHQ6wk22mcZjZuCdb9UrG+q3/yRKl5b/Jl9gki5IriSFBmBifay1KbMz4nfk7vEDikbxKECVemcGs/wJs2JIgRmx9SXxddlohxniYTQGb9rKXlEEUl0YGrqW/HTYKLGrD6xog7E4Ih0viDA3O5Rq19VYSixS40oWbW1vA3R1wcxset3cwV9cgaup0AldZyqsmLxmtGR6x4/ISorNbdxUMCkARkJeO9hE7Li4gumw6AVgIOOMt4AJubyN5C4IQ4KD2TpiHhxHLN3d2IFrarAUUyirgHRiE1+35YdwNc2YWeHiwDGIfx3Dsn7m9fWqGTkC5FUUlCub8gmU++3RzuFbwAjooMDllKcA+jtHPzwhkBDICGYEEFjDiKGAoJRnx9X/wDo8CJyfA7e+y65Zt7OOYYASulKJURf1Tio6uf8Wqi23sCyacLOrLcmusS3a2Bb9LssV9YxLvrVn8N6dx356/AU/Qs8D+1edIAAAAAElFTkSuQmCC",
  },
  {
    name: "Дзен",
    href: "https://dzen.ru/djimarket",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAASFBMVEVHcEwgICIgICIgICIgICIgICIgICIgICIgICIgICIgICIgICIWFhgCAgSqqqu0tLXHx8ja2tr29vY2Njf///+ZmZnz8/O8vL1iz8E4AAAADHRSTlMAHmCVuNfm9f8d5wnbUshcAAAA2ElEQVR4AYWTVQLEIAxEWbSuyP1PWi/NrGV+50FcXHpJpY11riics0YrWQoqaYsPVTLbtSm+ytSXXxA1TUF0EvR923Ut/eOIX1Cg7ylQyA2wAAwDAHarrwBgHAEoSiERmCYEpFBQw+z9DHUooeGD4H2AL7QwAETvIwAGimiT35RaKMM99u6fxIO4A2h3zSH6SzHM7a4D2HPv+mG83MyMQ9/t9WRgQmDKAAmRmYmG+J5kbpbjyzQ4Cu9xGIZtNTssftwlszDcyrFLy609ezj86f05Xisvkzn/FbaSJDXv12ZOAAAAAElFTkSuQmCC",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/djimarket",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABJklEQVR4Ae2WpVaFQRSFcaeS4QVwIjTiLbgk7D1w9xeg4FQcOu6acHeXtNnDmsFd7in/WetLI+f7dbYDAFEsAUvgoeAQ5k5iSQFpIH1kkMyQFXJMTsgpwTuc6jlHes2M3qNP71mge7g76DLNg8gygZ1QckGmuSdZJ7Azq8RDCSQTCJGgBCoFBWqVQLegQJcSmPnWIr9oICMXcIr4C4FJJbD9rUX+NtzX+CIQlfVbgS0lcP4jAVNt/UCA7acCZ0oAPxfQdXMLFNUBvpHflvgbAVM7h0B6zrfeD3kB+Ucg/xLKf4biPyLJX3GH9GFUogRSBQUSTSBZEwskQpFs1USyl6E0gRSRJtJPhsnci1B69oVQeqzXzOo9+kmj3juBeDw2BkSxBCyBO+9s03HRLVCoAAAAAElFTkSuQmCC",
  },
  {
    name: "Ozon",
    href: "https://ozon.ru/djimarket",
    icon: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3NzcxNzgrNzc1N//AABEIABwAHAMBEQACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAAFBgEDBwQA/8QALxAAAgECBAQDBwUAAAAAAAAAAQIDBBEABQYSITFxkUJRYQcUQXKBocETFiMyYv/EABoBAAIDAQEAAAAAAAAAAAAAAAUGAQQHAAP/xAAxEQABAgQDBAcJAAAAAAAAAAABAAIDBAUREjFxIVFhgQYUIqGxwdETFSMyQWKR4fH/2gAMAwEAAhEDEQA/AFdFZ3VEUszGyqBck+QxppIAuUoAEmwTVl3s91FXRCQ00dKrC494k2k/QAkfUDAqNWpOEbYr6K9Dp8Z4vlqq820Hn+WQNO9MlREouzUz79o6WB7DHqBWJSM7CHWPHZ+lESQjQxe19EsYKKktP0BQUGR6am1TmKb5CG/TNrlFB22X/THhf1HrhRrs68xertPZGfE5pkotPMdzQ35ndyB5rr3Pa6ZjBUCih8MUIBIHqxFye3TC5crSpehScFtnNxHefT+o17PdTZ3X52tBVzNV0zRszs6jdEAOBuB8TYcfPEgofW6bKQZb2rBhdcc+HmlLX1NT0mrsxipFVY96ttXkGZQT9ycaBSnviSbHPz9CssnmtbHcAmTQ2pMplyN9N6h2JAdwjkc2RlJ3WJ8JBuQenK3EFX5PA/rAOx2w629AjnR+LMvfhlwcbBfZuvbnnluRT9g6bP8AOucze78+E8drfNbC3Yb04+/p8dkwhi0PhdTVal07pSgkpNNRxVNU/iQllv8AAu/i6A9sTcDJRDps9UYoiThLWjkeQ+mp71mlTK9XUSVFSxkmlYs7tzYnni9L1Sal2ezhu2flFJro3TJp4fEh7bAbCRlllnqueD+rdR+cHukh+FDHHySh0DaOsRnfaPFWbV8h2worTLlTjlC9jly//9k=",
  },
  {
    name: "Яндекс Маркет",
    href: "https://market.yandex.ru/djimarket",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAbFBMVEX/Uib/Tib/Rif/cSH/3QD/bCL/0wj/3wD/5QD/pxf/ohj/4gD/ZSP/3gD/QSj/zwn/eyD/Sif/lRv/4wD/VyX/xA7/Qij/sRT/nhn/hh7/diD/0An/XiT/thL/yAz/2QT/rRX/vhD/jxz/iR3i4QJUAAABK0lEQVR4AWIgFgDqJA81CUEYCEMOTTQ2ZO319t7/HQ+JXl078DMZhg8N+p69mQjuIMRIyY0YUjaG45dinZHxV07JC21RogkXVf+orZ0w48D3fnH94JNhA6rtfjkXDZ6QUws9Udp+ie1A5qo6QkX+N2UX1Xn+BduZjw4SCGuX4JgHyyLG01t0o0Qs19xwvfDlHSBsoSiNzgtOZpzEhT30uauO/7VqCkIdkRi2ewDCcQXlpa0sgIZiyoW9l947KdpZQe9kpFCSNd8e5PvdspGaZYiVHVjMstBAzI1qpOjTWrGkj+LyNkoSr4UP5BAN721bht1gJiWlZq10VXcr+1ma/Diu+zMK0PVwZLIW2mNSkw5zC9bqA+LU/j6hVmtpekjR3Xk1Pi+oO5jHt+wTGwURbuoDs6kAAAAASUVORK5CYII=",
  },
  {
    name: "Мегамаркет",
    href: "https://megamarket.ru/djimarket",
    icon: "https://toplogos.ru/images/logo-megamarket.png",
  },
];

export const ratingInfo: RatingInfo = {
  score: "5.0",
  maxStars: 5,
  label: "Рейтинг организации в Яндекс",
};

export const ctaInfo: CTAInfo = {
  title: "Не нашли ответ?",
  subtitle: "Мы всегда готовы помочь",
  buttonText: "Оставить заявку",
  buttonHref: "/request",
};

export const legalInfo: LegalInfo = {
  copyright: "©2025 DJI-market Все права защищены",
  privacyPolicy: { label: "Политика конфиденциальности", href: "/privacy" },
  inn: "ИНН 550611951647",
  ogrn: "ОГРН 322554300022804",
  madeBy: {
    text: "Сайт сделан в",
    name: "affarts",
    href: "https://affarts.ru",
  },
};
