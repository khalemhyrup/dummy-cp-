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
    label: 'Divisions & Services',
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
    label: 'Home (IT & CME)',
    href: '#it',
    hasDropdown: false,
  },
  {
    id: 'about',
    label: 'About',
    href: '#about',
    hasDropdown: true,
    megaMenuType: 'columns',
    columns: [
      {
        title: 'PROFILE',
        items: [
          { id: 'about-us', title: 'About Grasindopro', href: '#about' },
          { id: 'client', title: 'Track Record & Clients', href: '#client' },
          { id: 'org-structure', title: 'Organization Structure', href: '#org-structure' },
        ],
      },
    ],
  },
  {
    id: 'product-service',
    label: 'Services & Solutions',
    href: '#it-solutions',
    hasDropdown: true,
    megaMenuType: 'columns',
    columns: [
      {
        title: 'IT SOLUTIONS',
        items: [
          { id: 'it-solutions', title: 'Overview IT Solutions', href: '#it-solutions' },
          { id: 'it-support', title: 'IT Support & Maintenance', href: '#it-support' },
          { id: 'network-fo', title: 'Fiber Optics & Network Installer', href: '#network-fo' },
          { id: 'security-systems', title: 'Security Systems (CCTV & Access)', href: '#security-systems' },
          { id: 'telecom', title: 'Telecommunications & Network Tower', href: '#telecom' },
        ],
      },
      {
        title: 'CME (MECHANICAL & ELECTRICAL)',
        id: 'cme-main',
        items: [
          { id: 'cme-main', title: 'Overview CME Solutions', href: '#cme-main' },
          { id: 'cme-mechanical', title: 'Mekanikal (HVAC, Plumbing & Hydrant)', href: '#cme-mechanical' },
          { id: 'cme-electrical', title: 'Elektrikal (Instalasi Listrik & Tenaga)', href: '#cme-electrical' },
        ],
      },
    ],
  },
  {
    id: 'information',
    label: 'Contact',
    href: '#contact',
    hasDropdown: false,
  },
];

// ==========================================
// 3. EO & ADVERTISING DIVISION NAVIGATION
// ==========================================
export const eoNavigationData: NavItem[] = [
  {
    id: 'eo-home',
    label: 'Home (EO & Media)',
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
    label: 'Services & Solutions',
    href: '#eo-main',
    hasDropdown: true,
    megaMenuType: 'columns',
    columns: [
      {
        title: 'EVENT ORGANIZER & MICE',
        items: [
          { id: 'eo-main', title: 'Overview Event Organizer', href: '#eo-main' },
          { id: 'eo', title: 'MICE, Gathering & Brand Activation', href: '#eo' },
        ],
      },
      {
        title: 'MEDIA ADVERTISING',
        items: [
          { id: 'media-advertising', title: 'Billboard & Highway Structures', href: '#media-advertising' },
          { id: 'media-advertising', title: 'Signage, Neon Box & Fleet Branding', href: '#media-advertising' },
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
