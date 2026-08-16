import React from 'react';
import { NavItem, MenuItem } from '../../types/navigation';
import { ChevronRight } from 'lucide-react';
import { PortalType } from './Navbar';

interface MegaMenuProps {
  navItem: NavItem;
  isOpen: boolean;
  onItemClick: (item: MenuItem | string) => void;
  lang: 'ID' | 'EN';
  portal?: PortalType;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ navItem, isOpen, onItemClick, portal = 'main' }) => {
  if (!isOpen || !navItem.hasDropdown) return null;

  const isDarkEO = portal === 'eo';

  return (
    <div className="absolute top-full left-0 right-0 w-full z-50 transition-all duration-300 animate-mega-menu pointer-events-auto">
      {/* Pointer Caret aligned under nav */}
      <div className="max-w-7xl mx-auto px-6 relative">
        <div
          className={`shadow-2xl rounded-b-lg border-t-2 border-amber-500 p-8 text-sm relative ${
            isDarkEO
              ? 'bg-[#050e1f] text-neutral-100 border-x border-b border-blue-900/50'
              : 'bg-white text-gray-800 border-x border-b border-neutral-200'
          }`}
        >
          
          {/* Subtle pointer triangle on top border */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-amber-500" />

          {navItem.megaMenuType === 'columns' && navItem.columns && (
            <div className={`grid gap-8 ${
              navItem.columns.length === 4
                ? 'grid-cols-1 md:grid-cols-4'
                : navItem.columns.length === 2
                ? 'grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto'
                : 'grid-cols-1 md:grid-cols-3'
            }`}>
              {navItem.columns.map((col, colIdx) => (
                <div key={colIdx} className="space-y-4">
                  {col.title && (
                    <div className={`border-b pb-2 ${isDarkEO ? 'border-blue-900/60' : 'border-gray-200'}`}>
                      <button
                        onClick={() => onItemClick(col.id ? { id: col.id, title: col.title! } : col.title!)}
                        className={`group flex items-center justify-between w-full text-left font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer ${
                          isDarkEO ? 'text-amber-400 hover:text-white' : 'text-gray-900 hover:text-amber-600'
                        }`}
                      >
                        <span>{col.title}</span>
                        <ChevronRight className={`w-3.5 h-3.5 group-hover:translate-x-0.5 transition-all flex-shrink-0 ${
                          isDarkEO ? 'text-blue-400 group-hover:text-amber-400' : 'text-gray-400 group-hover:text-amber-600'
                        }`} />
                      </button>
                    </div>
                  )}

                  <ul className="space-y-2.5">
                    {col.items.map((subItem) => {
                      if (subItem.isHeader) {
                        return (
                          <li key={subItem.id} className={`pt-4 border-b pb-1 ${isDarkEO ? 'border-blue-900/60' : 'border-gray-200'}`}>
                            <h4 className={`font-bold text-xs tracking-wider uppercase ${isDarkEO ? 'text-amber-400' : 'text-gray-900'}`}>
                              {subItem.title}
                            </h4>
                          </li>
                        );
                      }
                      return (
                        <li key={subItem.id}>
                          <button
                            onClick={() => onItemClick(subItem)}
                            className={`group flex items-start gap-1.5 text-left transition-all duration-150 w-full cursor-pointer ${
                              isDarkEO
                                ? 'text-neutral-300 hover:text-amber-400'
                                : 'text-gray-700 hover:text-amber-600'
                            }`}
                          >
                            <ChevronRight className={`w-3.5 h-3.5 mt-0.5 group-hover:translate-x-0.5 transition-transform flex-shrink-0 ${
                              isDarkEO ? 'text-blue-500 group-hover:text-amber-400' : 'text-gray-400 group-hover:text-amber-600'
                            }`} />
                            <span className="text-[13px] font-medium leading-snug group-hover:underline">
                              {subItem.title}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {navItem.megaMenuType === 'vertical' && navItem.items && (
            <div className={`max-w-xs ml-auto mr-32 rounded-md ${isDarkEO ? 'bg-[#081836] border border-blue-900/60' : 'bg-white'}`}>
              <ul className={`divide-y ${isDarkEO ? 'divide-blue-900/50' : 'divide-gray-100'}`}>
                {navItem.items.map((subItem) => (
                  <li key={subItem.id}>
                    <button
                      onClick={() => onItemClick(subItem)}
                      className={`w-full text-left py-3 px-4 text-[13px] font-medium transition-colors flex items-center justify-between cursor-pointer ${
                        isDarkEO
                          ? 'text-neutral-200 hover:text-amber-400 hover:bg-white/5'
                          : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50/50'
                      }`}
                    >
                      <span>{subItem.title}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
