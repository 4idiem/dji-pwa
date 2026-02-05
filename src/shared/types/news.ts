export interface NewsItem {
  id: string;
  badge: string;
  title: string;
  excerpt: string;
  imageUrl: string;
}

export type NewsResponse = NewsItem[];
