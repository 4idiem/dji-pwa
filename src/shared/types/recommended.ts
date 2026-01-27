// Один товар в блоке "Рекомендуем"
export type RecommendedItem = {
  name?: string;
  price?: string;
  link?: string;
  image?: string;
};

// Ответ "API" — массив товаров
export type RecommendedResponse = RecommendedItem[];