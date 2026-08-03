import React, { useState } from 'react';
import { Search, X, ChevronRight, FileText, Globe, Tag } from 'lucide-react';
import { navigationData } from '../../data/navigationData';
import { newsArticlesData } from '../../data/homeData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (title: string, detail: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectResult }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  // Aggregate searchable items
  const menuResults: { category: string; title: string }[] = [];
  navigationData.forEach((nav) => {
    if (nav.columns) {
      nav.columns.forEach((col) => {
        col.items.forEach((item) => {
          if (!item.isHeader) {
            menuResults.push({ category: nav.label, title: item.title });
          }
        });
      });
    } else if (nav.items) {
      nav.items.forEach((item) => {
        menuResults.push({ category: nav.label, title: item.title });
      });
    }
  });

  const filteredMenus = query
    ? menuResults.filter((m) => m.title.toLowerCase().includes(query.toLowerCase()))
    : menuResults.slice(0, 6);

  const filteredNews = query
    ? newsArticlesData.filter((n) => n.title.toLowerCase().includes(query.toLowerCase()))
    : newsArticlesData.slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 w-full max-w-2xl overflow-hidden">
        
        {/* Search Header */}
        <div className="p-4 border-b border-gray-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-amber-500" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search solutions, financial reports, news, policies..."
            className="w-full text-sm text-slate-800 focus:outline-none placeholder-gray-400 font-medium"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6">
          
          {/* Navigation Links match */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              <Globe className="w-3.5 h-3.5 text-amber-500" />
              <span>Sitemap & Navigation Results ({filteredMenus.length})</span>
            </div>
            <div className="divide-y divide-gray-100">
              {filteredMenus.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    onSelectResult(item.title, `Category: ${item.category}`);
                    onClose();
                  }}
                  className="w-full text-left py-2.5 px-3 rounded-lg hover:bg-amber-50/60 transition-colors flex items-center justify-between text-xs group"
                >
                  <div className="flex items-center gap-2">
                    <span className="bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded text-[10px]">
                      {item.category}
                    </span>
                    <span className="font-semibold text-slate-800 group-hover:text-amber-600">
                      {item.title}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-transform" />
                </button>
              ))}
            </div>
          </div>

          {/* News articles match */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              <FileText className="w-3.5 h-3.5 text-amber-500" />
              <span>News & Press Releases</span>
            </div>
            <div className="space-y-2">
              {filteredNews.map((news) => (
                <button
                  key={news.id}
                  onClick={() => {
                    onSelectResult(news.title, news.content);
                    onClose();
                  }}
                  className="w-full text-left p-3 rounded-xl border border-gray-100 hover:border-amber-300 hover:bg-slate-50 transition-all flex items-start gap-3 text-xs"
                >
                  <div className="flex-1">
                    <span className="text-[10px] font-bold text-amber-600 uppercase">
                      {news.category} • {news.date}
                    </span>
                    <h4 className="font-bold text-slate-900 line-clamp-1">
                      {news.title}
                    </h4>
                    <p className="text-gray-500 line-clamp-1 mt-0.5">
                      {news.summary}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>

        <div className="bg-slate-50 p-3 text-center text-xs text-gray-400 border-t border-gray-100">
          Press ESC or click close to exit
        </div>

      </div>
    </div>
  );
};
