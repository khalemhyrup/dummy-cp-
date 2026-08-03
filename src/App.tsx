import React, { useState } from 'react';
import { Navbar } from './components/Header/Navbar';
import { HeroBanner } from './components/Home/HeroBanner';
import { NewestUpdates } from './components/Home/NewestUpdates';
import { StrategicAlliances } from './components/Home/StrategicAlliances';
import { WeCareValues } from './components/Home/WeCareValues';
import { CareerBanner } from './components/Home/CareerBanner';
import { Footer } from './components/Footer/Footer';
import { SearchModal } from './components/Common/SearchModal';
import { DetailModal } from './components/Common/DetailModal';
import { MenuItem, NewsItem } from './types/navigation';

export const App: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<'ID' | 'EN'>('EN');
  const [activeModal, setActiveModal] = useState<{
    isOpen: boolean;
    title: string;
    category?: string;
    content?: string;
  }>({
    isOpen: false,
    title: '',
  });

  const handleMenuItemClick = (item: MenuItem | string) => {
    const title = typeof item === 'string' ? item : item.title;
    setActiveModal({
      isOpen: true,
      title: title,
      category: 'Navigation Details',
      content: `You selected "${title}" from the Multipolar Technology menu hierarchy. This section presents technical specifications, investor publications, or corporate governance documentation.`
    });
  };

  const handleSelectArticle = (article: NewsItem) => {
    setActiveModal({
      isOpen: true,
      title: article.title,
      category: `${article.category} • ${article.date}`,
      content: article.content
    });
  };

  const handleSearchSelect = (title: string, detail: string) => {
    setActiveModal({
      isOpen: true,
      title: title,
      category: 'Search Result',
      content: detail
    });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col selection:bg-amber-500 selection:text-slate-950">
      
      {/* Persistent Header Navbar */}
      <Navbar
        onSearchOpen={() => setIsSearchOpen(true)}
        onMenuItemClick={handleMenuItemClick}
        currentLang={currentLang}
        onLangChange={setCurrentLang}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* Section 1: Hero Carousel Banner */}
        <HeroBanner />

        {/* Section 2: Newest Updates (News, Activities, CSR, Press Release) */}
        <NewestUpdates onSelectArticle={handleSelectArticle} />

        {/* Section 3: Strategic Alliances (Global IT Partner Grid) */}
        <StrategicAlliances />

        {/* Section 4: We CARE Corporate Values */}
        <WeCareValues />

        {/* Section 5: Career Recruitment CTA Banner */}
        <CareerBanner onCareerClick={() => handleMenuItemClick('Career')} />
      </main>

      {/* Persistent 3-Column Footer */}
      <Footer onLinkClick={handleMenuItemClick} />

      {/* Global Interactive Modals */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectResult={handleSearchSelect}
      />

      <DetailModal
        isOpen={activeModal.isOpen}
        onClose={() => setActiveModal((prev) => ({ ...prev, isOpen: false }))}
        title={activeModal.title}
        category={activeModal.category}
        content={activeModal.content}
      />

    </div>
  );
};

export default App;
