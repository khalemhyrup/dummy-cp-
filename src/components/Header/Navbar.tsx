import React, { useState, useRef, useEffect } from 'react';
import { mainNavigationData, itNavigationData, eoNavigationData } from '../../data/navigationData';
import { NavItem, MenuItem } from '../../types/navigation';
import { MegaMenu } from './MegaMenu';
import { ChevronDown, Menu as MenuIcon, X, ArrowLeft, Layers, Server, Sparkles } from 'lucide-react';

export type PortalType = 'main' | 'it' | 'eo';

interface NavbarProps {
  onSearchOpen?: () => void;
  onMenuItemClick: (item: MenuItem | string) => void;
  currentLang: 'ID' | 'EN';
  onLangChange: (lang: 'ID' | 'EN') => void;
  currentPage?: string;
  onNavigate?: (page: string) => void;
  currentPortal?: PortalType;
}

export const Navbar: React.FC<NavbarProps> = ({
  onMenuItemClick,
  currentLang,
  onLangChange,
  currentPage = 'home',
  onNavigate,
  currentPortal: propPortal,
}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Compute active portal from prop or currentPage
  const activePortal: PortalType =
    propPortal ||
    (currentPage === 'it-home' ||
    currentPage === 'it-solutions' ||
    currentPage === 'it-support' ||
    currentPage === 'network-fo' ||
    currentPage === 'security-systems' ||
    currentPage === 'telecom' ||
    currentPage === 'cme-main' ||
    currentPage === 'civil-construction' ||
    currentPage === 'me-installation'
      ? 'it'
      : currentPage === 'eo-home' ||
        currentPage === 'eo-about' ||
        currentPage === 'eo-main' ||
        currentPage === 'eo' ||
        currentPage === 'media-advertising' ||
        currentPage === 'eo-contact'
      ? 'eo'
      : 'main');

  // Select navigation data based on portal
  const activeNavData: NavItem[] =
    activePortal === 'it'
      ? itNavigationData
      : activePortal === 'eo'
      ? eoNavigationData
      : mainNavigationData;

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

  const currentActiveNav = activeNavData.find((item) => item.id === activeDropdown);
  const isDarkEO = activePortal === 'eo';

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-md transition-all duration-300 shadow-xs ${
      isDarkEO
        ? 'bg-[#050e1f]/95 border-b border-blue-900/40 text-white'
        : 'bg-white/95 border-b border-neutral-200 text-neutral-900'
    }`}>
      
      {/* ================= TOP PORTAL SWITCHER BAR ================= */}
      <div className="bg-neutral-950 text-neutral-400 text-[11px] py-1.5 px-4 sm:px-6 lg:px-8 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Active Portal Badge Indicator */}
          <div className="flex items-center gap-2">
            <span className="text-neutral-500 font-mono hidden sm:inline">PORTAL:</span>
            <span
              className={`font-semibold tracking-wider uppercase px-2 py-0.5 rounded-xs ${
                activePortal === 'it'
                  ? 'bg-blue-900/80 text-blue-300'
                  : activePortal === 'eo'
                  ? 'bg-amber-900/80 text-amber-300'
                  : 'bg-neutral-800 text-neutral-200'
              }`}
            >
              {activePortal === 'it'
                ? 'IT & CME Infrastructure'
                : activePortal === 'eo'
                ? 'Event Organizer & Advertising'
                : 'Corporate Main Portal'}
            </span>
          </div>

          {/* Direct Switcher Tabs */}
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => {
                onNavigate?.('home');
                onMenuItemClick('Home');
              }}
              className={`px-2.5 py-0.5 rounded transition-colors cursor-pointer ${
                activePortal === 'main'
                  ? 'bg-white text-black font-bold'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
              }`}
            >
              Main Portal
            </button>

            <button
              onClick={() => {
                onNavigate?.('it-home');
                onMenuItemClick('Home (IT & CME)');
              }}
              className={`px-2.5 py-0.5 rounded transition-colors cursor-pointer flex items-center gap-1 ${
                activePortal === 'it'
                  ? 'bg-blue-600 text-white font-bold'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
              }`}
            >
              <Server className="w-3 h-3" />
              <span>IT &amp; CME</span>
            </button>

            <button
              onClick={() => {
                onNavigate?.('eo-home');
                onMenuItemClick('Home (EO & Media)');
              }}
              className={`px-2.5 py-0.5 rounded transition-colors cursor-pointer flex items-center gap-1 ${
                activePortal === 'eo'
                  ? 'bg-amber-600 text-white font-bold'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
              }`}
            >
              <Sparkles className="w-3 h-3" />
              <span>EO &amp; Media</span>
            </button>
          </div>

        </div>
      </div>

      {/* ================= MAIN NAVBAR BAR ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo Area */}
          <a
            href="#"
            onClick={(ev) => {
              ev.preventDefault();
              const homeTarget =
                activePortal === 'it'
                  ? 'it-home'
                  : activePortal === 'eo'
                  ? 'eo-home'
                  : 'home';
              if (onNavigate) onNavigate(homeTarget);
              onMenuItemClick('Home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative flex items-center py-1">
              <img
                src="/images/logo.png"
                alt="Grasindopro - PT Integra Aneksa Kreasindo"
                className="h-12 sm:h-14 md:h-16 w-auto object-contain"
              />
            </div>
            
            {/* Division Sub-label */}
            {activePortal !== 'main' && (
              <span className={`hidden md:inline-block text-[11px] font-mono font-bold tracking-widest border-l pl-3 uppercase ${
                isDarkEO ? 'text-amber-400 border-neutral-700' : 'text-neutral-400 border-neutral-300'
              }`}>
                {activePortal === 'it' ? 'IT & CME' : 'EO & MEDIA'}
              </span>
            )}
          </a>

          {/* Desktop Main Navigation List */}
          <nav
            className="hidden lg:flex items-center space-x-1 xl:space-x-2"
            onMouseLeave={handleMouseLeave}
          >
            {activeNavData.map((item) => {
              const isDropdownActive = activeDropdown === item.id;
              const isPageActive =
                (currentPage.includes('about') && (item.id === 'about' || item.id === 'eo-about' || item.label.includes('About'))) ||
                (currentPage.includes('service') && item.label.includes('Service')) ||
                ((currentPage === 'home' || currentPage === 'it-home' || currentPage === 'eo-home') && item.label.includes('Home'));

              return (
                <div
                  key={item.id}
                  className="relative py-7"
                  onMouseEnter={() => handleMouseEnter(item.id, item.hasDropdown)}
                >
                  <button
                    onClick={() => {
                      if (item.id === 'home' || item.id === 'it-home' || item.id === 'eo-home') {
                        const target =
                          activePortal === 'it'
                            ? 'it-home'
                            : activePortal === 'eo'
                            ? 'eo-home'
                            : 'home';
                        if (onNavigate) onNavigate(target);
                        setActiveDropdown(null);
                      } else if (item.id === 'about' || item.id === 'eo-about' || item.label === 'About') {
                        if (activePortal === 'eo') {
                          if (onNavigate) onNavigate('eo-about');
                        } else {
                          if (onNavigate) onNavigate('about');
                        }
                        setActiveDropdown(null);
                      } else if (item.id === 'product-service' || item.id === 'divisions' || item.label.includes('Service') || item.label.includes('Division')) {
                        const target =
                          activePortal === 'it'
                            ? 'it-solutions'
                            : activePortal === 'eo'
                            ? 'eo-main'
                            : 'service';
                        if (onNavigate) onNavigate(target);
                        setActiveDropdown(null);
                      } else if (item.id === 'information' || item.id === 'eo-contact' || item.label === 'Contact') {
                        if (activePortal === 'eo') {
                          if (onNavigate) onNavigate('eo-contact');
                        } else {
                          if (onNavigate) onNavigate('contact');
                        }
                        setActiveDropdown(null);
                      } else if (item.hasDropdown) {
                        setActiveDropdown(isDropdownActive ? null : item.id);
                      } else {
                        onMenuItemClick(item.label);
                      }
                    }}
                    className={`flex items-center gap-1 text-[13px] sm:text-[14px] font-semibold tracking-tight transition-colors duration-150 py-1.5 px-3 rounded-md cursor-pointer ${
                      isDarkEO
                        ? isPageActive || isDropdownActive
                          ? 'text-amber-400 bg-white/10 font-bold'
                          : 'text-neutral-200 hover:text-amber-300 hover:bg-white/5'
                        : isPageActive || isDropdownActive
                        ? 'text-neutral-900 bg-neutral-100 font-bold'
                        : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isDarkEO
                            ? isDropdownActive ? 'rotate-180 text-amber-400' : 'text-neutral-400'
                            : isDropdownActive ? 'rotate-180 text-neutral-900' : 'text-neutral-400'
                        }`}
                      />
                    )}
                  </button>
                </div>
              );
            })}
          </nav>

          {/* Right Action: Get in Touch & Mobile Hamburger */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            
            {/* Get in Touch Button (Desktop) */}
            <button
              onClick={() => {
                if (activePortal === 'eo') {
                  if (onNavigate) onNavigate('eo-contact');
                  onMenuItemClick('Contact');
                } else {
                  if (onNavigate) onNavigate('contact');
                  onMenuItemClick('Contact');
                }
              }}
              className={`hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold tracking-wider uppercase transition-colors shadow-xs cursor-pointer ${
                isDarkEO
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold'
                  : 'text-white bg-black hover:bg-neutral-800'
              }`}
            >
              Get in Touch
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-md transition-colors ${
                isDarkEO ? 'text-neutral-200 hover:bg-white/10' : 'text-neutral-800 hover:bg-neutral-100'
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
            portal={activePortal}
          />
        </div>
      )}

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-b max-h-[85vh] overflow-y-auto px-4 py-4 space-y-4 ${
          isDarkEO ? 'bg-[#050e1f] border-blue-900/40 text-white' : 'bg-white border-neutral-200 text-neutral-900'
        }`}>
          
          {/* Mobile Portal Switcher */}
          <div className={`p-2.5 rounded-xl space-y-1.5 ${
            isDarkEO ? 'bg-[#081530] border border-blue-900/60' : 'bg-neutral-100'
          }`}>
            <span className={`text-[10px] font-mono uppercase font-bold block px-2 ${
              isDarkEO ? 'text-amber-400' : 'text-neutral-500'
            }`}>
              Select Portal:
            </span>
            <div className="grid grid-cols-3 gap-1.5">
              <button
                onClick={() => {
                  onNavigate?.('home');
                  onMenuItemClick('Home');
                  setMobileMenuOpen(false);
                }}
                className={`py-1.5 text-xs font-semibold rounded text-center transition-all ${
                  activePortal === 'main'
                    ? 'bg-black text-white font-bold'
                    : isDarkEO
                    ? 'bg-white/10 text-neutral-200 hover:bg-white/20'
                    : 'bg-white text-neutral-700 hover:bg-neutral-50'
                }`}
              >
                Main
              </button>
              <button
                onClick={() => {
                  onNavigate?.('it-home');
                  onMenuItemClick('Home (IT & CME)');
                  setMobileMenuOpen(false);
                }}
                className={`py-1.5 text-xs font-semibold rounded text-center transition-all ${
                  activePortal === 'it'
                    ? 'bg-blue-600 text-white font-bold'
                    : isDarkEO
                    ? 'bg-white/10 text-neutral-200 hover:bg-white/20'
                    : 'bg-white text-neutral-700 hover:bg-neutral-50'
                }`}
              >
                IT &amp; CME
              </button>
              <button
                onClick={() => {
                  onNavigate?.('eo-home');
                  onMenuItemClick('Home (EO & Media)');
                  setMobileMenuOpen(false);
                }}
                className={`py-1.5 text-xs font-semibold rounded text-center transition-all ${
                  activePortal === 'eo'
                    ? 'bg-amber-500 text-slate-950 font-extrabold shadow-sm'
                    : isDarkEO
                    ? 'bg-white/10 text-neutral-200 hover:bg-white/20'
                    : 'bg-white text-neutral-700 hover:bg-neutral-50'
                }`}
              >
                EO &amp; Media
              </button>
            </div>
          </div>

          {/* Mobile Nav Items */}
          {activeNavData.map((item) => {
            const isItemActive =
              (currentPage.includes('about') && (item.id === 'about' || item.id === 'eo-about' || item.label.includes('About'))) ||
              (currentPage.includes('service') && item.label.includes('Service')) ||
              (currentPage.includes('contact') && (item.id === 'information' || item.id === 'eo-contact' || item.label.includes('Contact'))) ||
              ((currentPage === 'home' || currentPage === 'it-home' || currentPage === 'eo-home') && item.label.includes('Home'));

            return (
              <div
                key={item.id}
                className={`border-b pb-2 ${isDarkEO ? 'border-blue-900/40' : 'border-neutral-100'}`}
              >
                <div
                  className={`flex items-center justify-between font-bold py-2.5 px-3 rounded-lg cursor-pointer transition-colors ${
                    isDarkEO
                      ? isItemActive
                        ? 'bg-white/15 text-amber-400 font-extrabold shadow-xs'
                        : 'text-white hover:text-amber-300 hover:bg-white/5'
                      : isItemActive
                      ? 'bg-neutral-100 text-neutral-900 font-extrabold'
                      : 'text-neutral-900 hover:bg-neutral-50'
                  }`}
                  onClick={() => {
                    if (item.hasDropdown) {
                      setActiveDropdown(activeDropdown === item.id ? null : item.id);
                    } else if (item.id === 'home' || item.id === 'it-home' || item.id === 'eo-home') {
                      const target =
                        activePortal === 'it'
                          ? 'it-home'
                          : activePortal === 'eo'
                          ? 'eo-home'
                          : 'home';
                      if (onNavigate) onNavigate(target);
                      setActiveDropdown(null);
                      setMobileMenuOpen(false);
                    } else if (item.id === 'about' || item.id === 'eo-about' || item.label === 'About') {
                      if (activePortal === 'eo') {
                        if (onNavigate) onNavigate('eo-about');
                      } else {
                        if (onNavigate) onNavigate('about');
                      }
                      setActiveDropdown(null);
                      setMobileMenuOpen(false);
                    } else if (item.id === 'information' || item.id === 'eo-contact' || item.label === 'Contact') {
                      if (activePortal === 'eo') {
                        if (onNavigate) onNavigate('eo-contact');
                      } else {
                        if (onNavigate) onNavigate('contact');
                      }
                      setActiveDropdown(null);
                      setMobileMenuOpen(false);
                    } else {
                      onMenuItemClick(item.label);
                      setMobileMenuOpen(false);
                    }
                  }}
                >
                  <span className="tracking-tight">{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isDarkEO
                          ? activeDropdown === item.id ? 'rotate-180 text-amber-400' : 'text-neutral-400'
                          : activeDropdown === item.id ? 'rotate-180 text-neutral-900' : 'text-neutral-400'
                      }`}
                    />
                  )}
                </div>

                {item.hasDropdown && activeDropdown === item.id && (
                  <div className={`pl-4 pt-2 space-y-2 rounded-lg p-2 mt-1 ${isDarkEO ? 'bg-black/30' : 'bg-neutral-50'}`}>
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
                              className={`text-xs font-extrabold tracking-wider uppercase mb-1 hover:underline text-left block w-full cursor-pointer ${
                                isDarkEO ? 'text-amber-400' : 'text-neutral-800'
                              }`}
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
                                  className={`text-xs py-1 block text-left transition-colors ${
                                    isDarkEO ? 'text-neutral-200 hover:text-amber-300' : 'text-neutral-600 hover:text-black'
                                  }`}
                                >
                                  {sub.title}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Mobile Get in Touch */}
          <div className="pt-2">
            <button
              onClick={() => {
                if (activePortal === 'eo') {
                  if (onNavigate) onNavigate('eo-contact');
                } else {
                  if (onNavigate) onNavigate('contact');
                }
                setMobileMenuOpen(false);
              }}
              className={`w-full py-3 text-xs font-bold uppercase tracking-wider text-center cursor-pointer ${
                isDarkEO ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold' : 'bg-black text-white'
              }`}
            >
              Get in Touch
            </button>
          </div>

        </div>
      )}
    </header>
  );
};
