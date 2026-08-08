export interface MenuItem {
  id: string;
  title: string;
  href?: string;
  isHeader?: boolean;
}

export interface MenuColumn {
  id?: string;
  title?: string;
  items: MenuItem[];
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  hasDropdown: boolean;
  megaMenuType?: 'columns' | 'vertical';
  columns?: MenuColumn[];
  items?: MenuItem[];
}

export interface NewsItem {
  id: string;
  title: string;
  category: 'News' | 'Activities' | 'CSR' | 'Press Release';
  date: string;
  image: string;
  summary: string;
  content: string;
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  ctaText: string;
  bgGradient: string;
  image: string;
  darkOverlay?: boolean;
}

export interface Partner {
  name: string;
  category: string;
  logoUrl: string;
}

export interface CompanyValue {
  key: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
}
