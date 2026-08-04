import React, { useState } from 'react';
import { Navbar } from './components/Header/Navbar';
import { HeroBanner } from './components/Home/HeroBanner';
import { NewestUpdates } from './components/Home/NewestUpdates';
import { StrategicAlliances } from './components/Home/StrategicAlliances';
import { WeCareValues } from './components/Home/WeCareValues';
import { AboutUs } from './components/About/AboutUs';
import { ServicesPage } from './components/Service/ServicesPage';
import { Footer } from './components/Footer/Footer';
import { SearchModal } from './components/Common/SearchModal';
import { DetailModal } from './components/Common/DetailModal';
import { MenuItem, NewsItem } from './types/navigation';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'service'>('home');
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

  const handleNavigate = (page: 'home' | 'about' | 'service' | string) => {
    if (page === 'about') {
      setCurrentPage('about');
    } else if (page === 'service' || page === 'services') {
      setCurrentPage('service');
    } else {
      setCurrentPage('home');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMenuItemClick = (item: MenuItem | string) => {
    const title = typeof item === 'string' ? item : item.title;
    const itemId = typeof item === 'object' ? item.id : '';

    const titleLower = title.toLowerCase();
    const itemIdLower = itemId.toLowerCase();

    // Navigate to About page
    if (
      titleLower === 'about' ||
      titleLower === 'about us' ||
      itemIdLower === 'about' ||
      itemIdLower === 'about-us' ||
      itemIdLower === 'milestones' ||
      itemIdLower === 'values' ||
      itemIdLower === 'org-structure' ||
      itemIdLower === 'leadership'
    ) {
      handleNavigate('about');
      return;
    }

    // Navigate to Product & Service page
    if (
      titleLower.includes('service') ||
      titleLower.includes('product') ||
      titleLower.includes('solution') ||
      itemIdLower === 'product-service' ||
      itemIdLower === 'it-support' ||
      itemIdLower === 'eo'
    ) {
      handleNavigate('service');
      return;
    }

    // Navigate to Home page
    if (titleLower === 'home' || itemIdLower === 'home') {
      handleNavigate('home');
      return;
    }

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
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onSearchOpen={() => setIsSearchOpen(true)}
        onMenuItemClick={handleMenuItemClick}
        currentLang={currentLang}
        onLangChange={setCurrentLang}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'about' ? (
          <AboutUs />
        ) : currentPage === 'service' ? (
          <ServicesPage onContactClick={() => setIsSearchOpen(true)} />
        ) : (
          <>
            {/* Section 1: Hero Carousel Banner */}
            <HeroBanner />

            {/* Section 2: Newest Updates (News, Activities, CSR, Press Release) */}
            <NewestUpdates onSelectArticle={handleSelectArticle} />

            {/* Section 3: Strategic Alliances (Global IT Partner Grid) */}
            <StrategicAlliances />

            {/* Section 4: We CARE Corporate Values */}
            <WeCareValues />
          </>
        )}
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
