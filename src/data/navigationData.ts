import { NavItem } from '../types/navigation';

// ==========================================
// 1. GENERAL / MAIN CORPORATE NAVIGATION
// ==========================================
export const mainNavigationData: NavItem[] = [
  {
    id: 'home',
    label: 'Home',
    href: '#',
    hasDropdown: false,
  },
  {
    id: 'about',
    label: 'About',
    href: '#about-us',
    hasDropdown: false,
  },
  {
    id: 'divisions',
    label: 'Services',
    href: '#service',
    hasDropdown: false,
  },
  {
    id: 'information',
    label: 'Contact',
    href: '#contact',
    hasDropdown: false,
  },
];

// ==========================================
// 2. IT & CME DIVISION NAVIGATION
// ==========================================
export const itNavigationData: NavItem[] = [
  {
    id: 'it-home',
    label: 'Home',
    href: '#it',
    hasDropdown: false,
  },
  {
    id: 'it-about',
    label: 'About',
    href: '#it/about',
    hasDropdown: false,
  },
  {
    id: 'product-service',
    label: 'Services',
    href: '#services',
    hasDropdown: false,
  },
  {
    id: 'it-project',
    label: 'Our Project',
    href: '#it/project',
    hasDropdown: false,
  },
  {
    id: 'it-contact',
    label: 'Contact',
    href: '#it/contact',
    hasDropdown: false,
  },
];

// ==========================================
// 3. EO & ADVERTISING DIVISION NAVIGATION
// ==========================================
export const eoNavigationData: NavItem[] = [
  {
    id: 'eo-home',
    label: 'Home',
    href: '#eo',
    hasDropdown: false,
  },
  {
    id: 'eo-about',
    label: 'About',
    href: '#eo/about',
    hasDropdown: false,
  },
  {
    id: 'product-service',
    label: 'Services',
    href: '#eo',
    hasDropdown: true,
    megaMenuType: 'columns',
    columns: [
      {
        title: 'ADVERTISING',
        id: 'media-advertising',
        items: [
          { id: 'media-advertising', title: 'Billboard, Signage, Neon Box & Fleet Branding', href: '#media-advertising' },
        ],
      },
      {
        title: 'EVENT ORGANIZER',
        id: 'eo',
        items: [
          { id: 'eo', title: 'MICE, Corporate Gathering, Expo & Brand Activation', href: '#eo' },
        ],
      },
    ],
  },
  {
    id: 'eo-contact',
    label: 'Contact',
    href: '#eo/contact',
    hasDropdown: false,
  },
];

// Default export for backward compatibility
export const navigationData = mainNavigationData;
