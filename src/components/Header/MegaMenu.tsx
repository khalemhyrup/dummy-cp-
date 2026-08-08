import React from 'react';
import { NavItem, MenuItem } from '../../types/navigation';
import { ChevronRight } from 'lucide-react';

interface MegaMenuProps {
  navItem: NavItem;
  isOpen: boolean;
  onItemClick: (item: MenuItem | string) => void;
  lang: 'ID' | 'EN';
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ navItem, isOpen, onItemClick }) => {
  if (!isOpen || !navItem.hasDropdown) return null;

  return (
    <div className="absolute top-full left-0 right-0 w-full z-50 transition-all duration-300 animate-fadeIn pointer-events-auto">
      {/* Pointer Caret aligned under nav */}
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="bg-white shadow-2xl rounded-b-lg border-t-2 border-amber-500 p-8 text-gray-800 text-sm relative">
          
          {/* Subtle pointer triangle on top border */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-amber-500" />

          {navItem.megaMenuType === 'columns' && navItem.columns && (
            <div className={`grid gap-8 ${
              navItem.columns.length === 4 ? 'grid-cols-1 md:grid-cols-4' : 'grid-cols-1 md:grid-cols-3'
            }`}>
              {navItem.columns.map((col, colIdx) => (
                <div key={colIdx} className="space-y-4">
                  {col.title && (
                    <div className="border-b border-gray-200 pb-2">
                      <button
                        onClick={() => onItemClick(col.title!)}
                        className="group flex items-center justify-between w-full text-left font-bold text-xs tracking-wider uppercase text-gray-900 hover:text-amber-600 transition-colors cursor-pointer"
                      >
                        <span>{col.title}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                      </button>
                    </div>
                  )}

                  <ul className="space-y-2.5">
                    {col.items.map((subItem) => {
                      if (subItem.isHeader) {
                        return (
                          <li key={subItem.id} className="pt-4 border-b border-gray-200 pb-1">
                            <h4 className="font-bold text-xs tracking-wider uppercase text-gray-900">
                              {subItem.title}
                            </h4>
                          </li>
                        );
                      }
                      return (
                        <li key={subItem.id}>
                          <button
                            onClick={() => onItemClick(subItem)}
                            className="group flex items-start gap-1.5 text-left text-gray-700 hover:text-amber-600 transition-all duration-150 w-full"
                          >
                            <ChevronRight className="w-3.5 h-3.5 mt-0.5 text-gray-400 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
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
            <div className="max-w-xs ml-auto mr-32 bg-white rounded-md">
              <ul className="divide-y divide-gray-100">
                {navItem.items.map((subItem) => (
                  <li key={subItem.id}>
                    <button
                      onClick={() => onItemClick(subItem)}
                      className="w-full text-left py-3 px-4 text-[13px] font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50/50 transition-colors flex items-center justify-between"
                    >
                      <span>{subItem.title}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
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
