export interface AdvantageSmallCard {
  id: number;
  icon: "truck" | "verified";
  title: string;
  description: string;
}

export interface AdvantageWideCard {
  title: string;
  description: string;
}

export interface AdvantagesData {
  smallCards: AdvantageSmallCard[];
  wideCard: AdvantageWideCard;
}
