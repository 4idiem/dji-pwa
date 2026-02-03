export interface FeatureCardData {
  id: number;
  theme: "dark" | "light" | "blue";
  icon: "building" | "truck" | "gavel";
  badgeText: string;
  title: string;
  description: string;
}

export type FeaturesResponse = FeatureCardData[];
