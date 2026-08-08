import React, { useState, useRef } from 'react';
import { navigationData } from '../../data/navigationData';
import { NavItem, MenuItem } from '../../types/navigation';
import { MegaMenu } from './MegaMenu';
import { ChevronDown, Search, Menu as MenuIcon, X } from 'lucide-react';

interface NavbarProps {
  onSearchOpen: () => void;
  onMenuItemClick: (item: MenuItem | string) => void;
  currentLang: 'ID' | 'EN';
  onLangChange: (lang: 'ID' | 'EN') => void;
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onSearchOpen,
  onMenuItemClick,
  currentLang,
  onLangChange,
  currentPage = 'home',
  onNavigate,
}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (itemId: string, hasDropdown: boolean) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (hasDropdown) {
      setActiveDropdown(itemId);
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const currentActiveNav = navigationData.find((item) => item.id === activeDropdown);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo Area */}
          <a
            href="#"
            onClick={(ev) => {
              ev.preventDefault();
              if (onNavigate) {
                onNavigate('home');
              }
              onMenuItemClick('Home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative flex items-center py-1">
              {/* Grasindopro Official Logo */}
              <img
                src="/images/logo.png"
                alt="Grasindopro - PT Integra Aneksa Kreasindo"
                className="h-14 sm:h-16 md:h-16 w-auto object-contain transition-all"
              />
            </div>
          </a>

          {/* Desktop Main Navigation List */}
          <nav
            className="hidden lg:flex items-center space-x-1 xl:space-x-2"
            onMouseLeave={handleMouseLeave}
          >
            {navigationData.map((item) => {
              const isDropdownActive = activeDropdown === item.id;
              const isPageActive =
                (currentPage === 'about' && (item.id === 'about' || item.label === 'About')) ||
                (currentPage === 'service' && (item.id === 'product-service' || item.label.includes('Service') || item.label.includes('Product'))) ||
                (currentPage === 'home' && (item.id === 'home' || item.label === 'Home'));

              return (
                <div
                  key={item.id}
                  className="relative py-7"
                  onMouseEnter={() => handleMouseEnter(item.id, item.hasDropdown)}
                >
                  <button
                    onClick={() => {
                      if (item.id === 'about' || item.label === 'About') {
                        if (onNavigate) {
                          onNavigate('about');
                        }
                        onMenuItemClick('About Us');
                        setActiveDropdown(null);
                      } else if (item.id === 'product-service' || item.label.includes('Service') || item.label.includes('Product')) {
                        if (onNavigate) {
                          onNavigate('service');
                        }
                        onMenuItemClick('Product & Service');
                        setActiveDropdown(null);
                      } else if (item.id === 'home' || item.label === 'Home') {
                        if (onNavigate) {
                          onNavigate('home');
                        }
                        onMenuItemClick('Home');
                        setActiveDropdown(null);
                      } else if (item.hasDropdown) {
                        setActiveDropdown(isDropdownActive ? null : item.id);
                      } else {
                        onMenuItemClick(item.label);
                      }
                    }}
                    className={`flex items-center gap-1 text-[14px] font-semibold tracking-tight transition-colors duration-150 py-1 px-2.5 rounded-md ${
                      isPageActive || isDropdownActive
                        ? 'text-amber-600 bg-amber-50/50'
                        : 'text-gray-700 hover:text-amber-600 hover:bg-gray-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isDropdownActive ? 'rotate-180 text-amber-600' : 'text-gray-400'
                        }`}
                      />
                    )}
                  </button>
                </div>
              );
            })}
          </nav>

          {/* Utility Tools: Language Switch & Search */}
          <div className="flex items-center space-x-3 sm:space-x-4">

            {/* Language Switcher with SVG Flags */}
            <div className="flex items-center bg-gray-100/90 rounded-full p-1 border border-gray-200 shadow-2xs">
              <button
                onClick={() => onLangChange('ID')}
                title="Bahasa Indonesia"
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
                  currentLang === 'ID'
                    ? 'bg-white text-slate-900 shadow-xs border border-gray-200/60'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                <svg className="w-4 h-3 rounded-2xs border border-gray-300 shadow-2xs flex-shrink-0" viewBox="0 0 3 2">
                  <rect width="3" height="1" fill="#E70011" />
                  <rect y="1" width="3" height="1" fill="#FFFFFF" />
                </svg>
                <span>ID</span>
              </button>
              <button
                onClick={() => onLangChange('EN')}
                title="English"
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
                  currentLang === 'EN'
                    ? 'bg-white text-slate-900 shadow-xs border border-gray-200/60'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                <svg className="w-4 h-3 rounded-2xs border border-gray-300 shadow-2xs flex-shrink-0" viewBox="0 0 60 30">
                  <rect width="60" height="30" fill="#012169" />
                  <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
                  <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
                  <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
                  <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
                </svg>
                <span>EN</span>
              </button>
            </div>

            {/* Search Trigger Button */}
            <button
              onClick={onSearchOpen}
              className="p-2 rounded-full text-gray-600 hover:text-amber-600 hover:bg-amber-50 transition-colors focus:outline-none"
              aria-label="Search"
              title="Search website..."
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-amber-600 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Desktop Mega-Menu Container */}
      {currentActiveNav && (
        <div
          className="hidden lg:block"
          onMouseEnter={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
          }}
          onMouseLeave={handleMouseLeave}
        >
          <MegaMenu
            navItem={currentActiveNav}
            isOpen={!!currentActiveNav}
            onItemClick={(item) => {
              onMenuItemClick(item);
              setActiveDropdown(null);
            }}
            lang={currentLang}
          />
        </div>
      )}

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 max-h-[80vh] overflow-y-auto px-4 py-4 space-y-3">
          {navigationData.map((item) => (
            <div key={item.id} className="border-b border-gray-100 pb-2">
              <div
                className="flex items-center justify-between font-bold text-gray-800 py-2.5 px-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => {
                  if (item.hasDropdown) {
                    setActiveDropdown(activeDropdown === item.id ? null : item.id);
                  } else if (item.id === 'home' || item.label === 'Home') {
                    if (onNavigate) onNavigate('home');
                    onMenuItemClick('Home');
                    setActiveDropdown(null);
                    setMobileMenuOpen(false);
                  } else {
                    onMenuItemClick(item.label);
                    setMobileMenuOpen(false);
                  }
                }}
              >
                <span>{item.label}</span>
                {item.hasDropdown && (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      activeDropdown === item.id ? 'rotate-180 text-amber-600' : 'text-gray-400'
                    }`}
                  />
                )}
              </div>

              {item.hasDropdown && activeDropdown === item.id && (
                <div className="pl-4 pt-2 space-y-2">
                  {item.megaMenuType === 'columns' &&
                    item.columns?.map((col, cIdx) => (
                      <div key={cIdx} className="mb-3">
                        {col.title && (
                          <button
                            onClick={() => {
                              onMenuItemClick(col.title!);
                              setMobileMenuOpen(false);
                              setActiveDropdown(null);
                            }}
                            className="text-xs font-bold text-amber-700 hover:text-amber-900 tracking-wider uppercase mb-1 hover:underline text-left block w-full cursor-pointer"
                          >
                            {col.title}
                          </button>
                        )}
                        <ul className="space-y-1">
                          {col.items.map((sub) => (
                            <li key={sub.id}>
                              <button
                                onClick={() => {
                                  onMenuItemClick(sub);
                                  setMobileMenuOpen(false);
                                  setActiveDropdown(null);
                                }}
                                className="text-xs text-gray-600 hover:text-amber-600 py-1 block text-left"
                              >
                                {sub.title}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                  {item.megaMenuType === 'vertical' &&
                    item.items?.map((sub) => (
                      <button
                        onClick={() => {
                          onMenuItemClick(sub);
                          setMobileMenuOpen(false);
                          setActiveDropdown(null);
                        }}
                        className="text-xs text-gray-600 hover:text-amber-600 py-1.5 block w-full text-left"
                      >
                        {sub.title}
                      </button>
                    ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};
