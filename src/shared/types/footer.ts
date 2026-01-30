export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSubSection {
  title: string;
  links: FooterLink[];
}

export interface FooterNavColumn {
  title: string;
  links: FooterLink[];
  subSection?: FooterSubSection;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface ContactInfo {
  address: string[];
  workingHours: string;
  phone: string;
  email: string;
}

export interface RatingInfo {
  score: string;
  maxStars: number;
  label: string;
}

export interface CTAInfo {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonHref: string;
}

export interface LegalInfo {
  copyright: string;
  privacyPolicy: FooterLink;
  inn: string;
  ogrn: string;
  madeBy: {
    text: string;
    name: string;
    href: string;
  };
}
