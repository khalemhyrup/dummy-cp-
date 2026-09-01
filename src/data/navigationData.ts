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
    id: 'eo-services',
    label: 'Services',
    href: '#eo/services',
    hasDropdown: false,
  },
  {
    id: 'eo-gallery',
    label: 'Gallery',
    href: '#eo/gallery',
    hasDropdown: false,
  },
  {
    id: 'eo-contact',
    label: 'Contact Us',
    href: '#eo/contact',
    hasDropdown: false,
  },
];

// Default export for backward compatibility
export const navigationData = mainNavigationData;
