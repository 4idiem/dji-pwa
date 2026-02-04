export interface NewArrivalItem {
  id: number;
  tag?: string;
  title: string;
  price: number;
  oldPrice?: number;
  image: string;
  href: string;
  isSale?: boolean;
  isRecommended?: boolean;
}

export type NewArrivalsResponse = NewArrivalItem[];
