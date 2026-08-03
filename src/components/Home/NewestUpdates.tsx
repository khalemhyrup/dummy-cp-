import React, { useState } from 'react';
import { newsArticlesData } from '../../data/homeData';
import { NewsItem } from '../../types/navigation';
import { Calendar, ArrowUpRight, Filter } from 'lucide-react';

interface NewestUpdatesProps {
  onSelectArticle: (article: NewsItem) => void;
}

export const NewestUpdates: React.FC<NewestUpdatesProps> = ({ onSelectArticle }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'News', 'Activities', 'CSR', 'Press Release'];

  const filteredArticles = selectedCategory === 'All'
    ? newsArticlesData
    : newsArticlesData.filter(item => item.category === selectedCategory);

  return (
    <section className="py-20 bg-slate-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-amber-600 font-bold text-xs tracking-widest uppercase block mb-1">
              LATEST INSIGHTS & ANNOUNCEMENTS
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
              Newest Updates
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* News Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group"
            >
              {/* Card Image */}
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-amber-400 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {article.category}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center text-xs text-slate-400 mb-3 space-x-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{article.date}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-amber-600 transition-colors line-clamp-2 mb-3">
                    {article.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {article.summary}
                  </p>
                </div>

                <button
                  onClick={() => onSelectArticle(article)}
                  className="inline-flex items-center text-xs font-bold text-amber-600 group-hover:text-amber-700 pt-2 border-t border-slate-100 w-full justify-between"
                >
                  <span>Read Full Story</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
