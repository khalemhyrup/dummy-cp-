import React, { useState, useRef, useEffect } from 'react';
import { navigationData } from '../../data/navigationData';
import { NavItem, MenuItem } from '../../types/navigation';
import { MegaMenu } from './MegaMenu';
import { ChevronDown, Menu as MenuIcon, X } from 'lucide-react';

interface NavbarProps {
  onSearchOpen?: () => void;
  onMenuItemClick: (item: MenuItem | string) => void;
  currentLang: 'ID' | 'EN';
  onLangChange: (lang: 'ID' | 'EN') => void;
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onMenuItemClick,
  currentLang,
  onLangChange,
  currentPage = 'home',
  onNavigate,
}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Transparent → solid transition on scroll (only on home page)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // set initial state
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isHome = currentPage === 'home';
  // transparent when: on home page AND not scrolled
  const isTransparent = isHome && !scrolled;

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
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isTransparent
          ? 'bg-transparent border-b border-transparent shadow-none'
          : 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm'
      }`}
    >
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
                className={`h-14 sm:h-16 md:h-16 w-auto object-contain transition-all ${
                  isTransparent ? 'brightness-0 invert' : ''
                }`}
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
                        ? isTransparent ? 'text-amber-300' : 'text-amber-600 bg-amber-50/50'
                        : isTransparent
                        ? 'text-white/90 hover:text-amber-300'
                        : 'text-gray-700 hover:text-amber-600 hover:bg-gray-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isDropdownActive
                            ? 'rotate-180 text-amber-400'
                            : isTransparent ? 'text-white/60' : 'text-gray-400'
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


            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-md transition-colors ${
                isTransparent
                  ? 'text-white hover:text-amber-300'
                  : 'text-gray-700 hover:text-amber-600 hover:bg-gray-100'
              }`}
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
