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
            <div className="relative flex items-center">
              {/* Enterprise IT Generic Dummy Logo */}
              <div className="flex flex-col">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tighter text-slate-900 group-hover:text-amber-600 transition-colors">
                  DUMMY
                </span>
                <span className="text-[10px] font-bold tracking-[0.25em] text-amber-600 uppercase -mt-1">
                  TECHNOLOGY GROUP
                </span>
              </div>
              <div className="ml-2 pl-2 border-l-2 border-amber-500 hidden sm:block">
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold block leading-tight">
                  ENTERPRISE IT
                </span>
                <span className="text-[9px] text-gray-400 font-medium block leading-tight">
                  SOLUTIONS
                </span>
              </div>
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

            {/* Language Switcher */}
            <div className="flex items-center bg-gray-100/80 rounded-full p-1 border border-gray-200">
              <button
                onClick={() => onLangChange('ID')}
                title="Indonesian"
                className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold transition-all ${
                  currentLang === 'ID'
                    ? 'bg-white text-red-600 shadow-xs'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                <span className="text-base leading-none">🇮🇩</span>
                <span className="hidden sm:inline">ID</span>
              </button>
              <button
                onClick={() => onLangChange('EN')}
                title="English"
                className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold transition-all ${
                  currentLang === 'EN'
                    ? 'bg-white text-blue-700 shadow-xs'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                <span className="text-base leading-none">🇬🇧</span>
                <span className="hidden sm:inline">EN</span>
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
                className="flex items-center justify-between font-bold text-gray-800 py-2 cursor-pointer"
                onClick={() => {
                  if (item.id === 'about' || item.label === 'About') {
                    if (onNavigate) onNavigate('about');
                    onMenuItemClick('About Us');
                    setActiveDropdown(null);
                    setMobileMenuOpen(false);
                  } else if (item.id === 'product-service' || item.label.includes('Service') || item.label.includes('Product')) {
                    if (onNavigate) onNavigate('service');
                    onMenuItemClick('Product & Service');
                    setActiveDropdown(null);
                    setMobileMenuOpen(false);
                  } else if (item.id === 'home' || item.label === 'Home') {
                    if (onNavigate) onNavigate('home');
                    onMenuItemClick('Home');
                    setActiveDropdown(null);
                    setMobileMenuOpen(false);
                  } else if (item.hasDropdown) {
                    setActiveDropdown(activeDropdown === item.id ? null : item.id);
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
                          <div className="text-xs font-bold text-amber-700 tracking-wider uppercase mb-1">
                            {col.title}
                          </div>
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
