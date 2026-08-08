import { NavItem } from '../types/navigation';

export const navigationData: NavItem[] = [
  {
    id: 'home',
    label: 'Home',
    href: '#',
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
          { id: 'about-us', title: 'About Us', href: '#about' },
          { id: 'client', title: 'Our Clients & Track Record', href: '#client' },
          { id: 'milestones', title: 'Company Milestones', href: '#milestone' },
          { id: 'values', title: 'Core Values (We CARE)', href: '#values' },
        ],
      },
      {
        title: 'MANAGEMENT',
        items: [
          { id: 'org-structure', title: 'Organization Structure', href: '#management' },
        ],
      },
    ],
  },
  {
    id: 'product-service',
    label: 'Product & Service',
    href: '#solution',
    hasDropdown: true,
    megaMenuType: 'columns',
    columns: [
      {
        title: 'IT SOLUTIONS',
        items: [
          { id: 'it-support', title: 'IT Support & Maintenance', href: '#it-support' },
          { id: 'network-fo', title: 'Fiber Optics & Network Installer', href: '#network-fo' },
          { id: 'security-systems', title: 'Security Systems (CCTV & Access Door)', href: '#security-systems' },
          { id: 'telecom', title: 'Telecommunications & Network Tower', href: '#telecom' },
        ],
      },
      {
        title: 'EVENT ORGANIZER',
        items: [
          { id: 'eo', title: 'EO (Event Organizer & MICE Solutions)', href: '#eo' },
          { id: 'media-advertising', title: 'Media Advertising & Billboard', href: '#media-advertising' },
        ],
      },
      {
        title: 'CME (MECHANICAL & ELECTRICAL)',
        id: 'cme-main',
        items: [
          { id: 'cme-mechanical', title: 'Mekanikal (HVAC, Plumbing, Hydrant & Pemipaan Gas)', href: '#cme-mechanical' },
          { id: 'cme-electrical', title: 'Elektrikal (Instalasi Listrik, Sistem Tenaga & Otomatisasi)', href: '#cme-electrical' },
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
