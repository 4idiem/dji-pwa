export interface MapCoords {
  lat: number;
  lng: number;
}

export interface MetroStation {
  name: string;
  icon: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface MapButton {
  label: string;
  icon: string;
}

export interface MapButtons {
  howToGet: MapButton;
  taxi: MapButton;
}

export interface MapContactsData {
  title: string;
  coords: MapCoords;
  zoom: number;
  yandexMapUrl: string;
  howToGetUrl: string;
  taxiUrl: string;
  metroStation: MetroStation;
  address: string;
  workingHours: string;
  contactLabel: string;
  phone: string;
  email: string;
  whatsappPhone: string;
  socialLinks: SocialLink[];
  mapButtons: MapButtons;
  mapFallbackImage: string;
}
