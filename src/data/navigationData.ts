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
          { id: 'it-support', title: 'IT Support', href: '#it-support' },
        ],
      },
      {
        title: 'EVENT ORGANIZER',
        items: [
          { id: 'eo', title: 'EO (Event Organizer & IT Event Solutions)', href: '#eo' },
        ],
      },
    ],
  },
  {
    id: 'information',
    label: 'Information',
    href: '#information',
    hasDropdown: true,
    megaMenuType: 'vertical',
    items: [
      { id: 'news', title: 'News & Updates', href: '#news' },
      { id: 'activities', title: 'Company Activities', href: '#activities' },
      { id: 'csr', title: 'Corporate Social Responsibility (CSR)', href: '#csr' },
      { id: 'announcements', title: 'Official Press Releases', href: '#press-release' },
    ],
  },
];
