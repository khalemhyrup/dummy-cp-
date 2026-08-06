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
          { id: 'milestones', title: 'Company Milestones', href: '#milestone' },
          { id: 'values', title: 'Core Values (We CARE)', href: '#values' },
        ],
      },
      {
        title: 'MANAGEMENT',
        items: [
          { id: 'org-structure', title: 'Organization Structure', href: '#management' },
          { id: 'leadership', title: 'Board & Leadership', href: '#management' },
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
          { id: 'software-managed', title: 'Software & IT Managed Services', href: '#software-managed' },
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
        title: 'CME (Civil Mechanical and Electrical)',
        items: [
          { id: 'civil-construction', title: 'Civil Construction & Building Works', href: '#civil-construction' },
          { id: 'me-installation', title: 'Mechanical & Electrical Installation (HVAC, Piping, Power)', href: '#me-installation' },
          { id: 'telecom-cme', title: 'Telecom Tower & CME Infrastructure Integration', href: '#telecom-cme' },
        ],
      },
    ],
  },
  {
    id: 'information',
    label: 'Information',
    href: '#information',
    hasDropdown: true,
    megaMenuType: 'columns',
    columns: [
      {
        title: 'NEWS & MEDIA',
        items: [
          { id: 'news', title: 'News & Updates', href: '#news' },
          { id: 'activities', title: 'Company Activities', href: '#activities' },
        ],
      },
      {
        title: 'PUBLICATIONS & CSR',
        items: [
          { id: 'csr', title: 'Corporate Social Responsibility (CSR)', href: '#csr' },
          { id: 'announcements', title: 'Official Press Releases', href: '#press-release' },
        ],
      },
    ],
  },
];
