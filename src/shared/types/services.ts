export interface ServiceItem {
  id: string;
  title: string;
  bullets: string[];
  iconName: "wrench" | "gear" | "drone" | "search-drone";
  href: string;
}

export interface ServicesData {
  title: string;
  services: ServiceItem[];
  buttonText: string;
  buttonHref: string;
}
