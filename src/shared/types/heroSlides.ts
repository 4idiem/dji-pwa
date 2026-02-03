export interface HeroSlideData {
  id: number;
  hero: {
    title: string;
    subtitle: string;
    ctaText: string;
    bgImage: string;
  };
  productCard: {
    badgeText: string;
    productImage: string;
    productName: string;
    priceCurrent: string;
    priceOld: string | null;
    link: string;
  };
}

export type HeroSlidesResponse = HeroSlideData[];
