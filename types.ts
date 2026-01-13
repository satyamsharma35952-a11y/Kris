
export enum DesignStyle {
  MODERN_CORPORATE = 'MODERN_CORPORATE',
  GOURMET_DARK = 'GOURMET_DARK',
  FRESH_ORGANIC = 'FRESH_ORGANIC'
}

export interface ContentData {
  heroTitle: string;
  heroSubtitle: string;
  stats: string;
  ctaText: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  variant: 'accent' | 'image' | 'clean' | 'dark';
  icon: string; // We'll store SVG path or similar
}
