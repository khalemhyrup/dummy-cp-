import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Header/Navbar';
import { HeroBanner } from './components/Home/HeroBanner';
import { OurSolution } from './components/Home/OurSolution';
import { NewestUpdates } from './components/Home/NewestUpdates';
import { StrategicAlliances } from './components/Home/StrategicAlliances';
import { WeCareValues } from './components/Home/WeCareValues';
import { AboutUs } from './components/About/AboutUs';
import { ServicesPage } from './components/Service/ServicesPage';
import { ITPage } from './components/IT/ITPage';
import { EOPage } from './components/EO/EOPage';
import { Footer } from './components/Footer/Footer';
import { SearchModal } from './components/Common/SearchModal';
import { DetailModal } from './components/Common/DetailModal';
import { MenuItem, NewsItem } from './types/navigation';

type PageType = 'home' | 'about' | 'service' | 'eo' | 'it-solutions';

const getInitialPage = (): PageType => {
  if (typeof window !== 'undefined') {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (hash === 'about' || hash === 'about-us') return 'about';
    if (hash === 'eo' || hash === 'event-organizer' || hash === 'advertising') return 'eo';
    if (hash === 'it-support' || hash === 'it-solutions') return 'it-solutions';
    if (hash === 'service' || hash === 'services' || hash === 'product-service') return 'service';
    
    const saved = localStorage.getItem('currentPage') as PageType;
    if (saved === 'about' || saved === 'service' || saved === 'eo' || saved === 'it-solutions' || saved === 'home') {
      return saved;
    }
  }
  return 'home';
};

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>(getInitialPage);
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

  const handleNavigate = (page: PageType | string) => {
    let target: PageType = 'home';
    if (page === 'about' || page === 'about-us') {
      target = 'about';
    } else if (page === 'eo' || page === 'event-organizer' || page === 'advertising' || page === 'mice' || page === 'billboard') {
      target = 'eo';
    } else if (page === 'it-solutions' || page === 'it-support' || page === 'network-fo' || page === 'security-systems') {
      target = 'it-solutions';
    } else if (page === 'service' || page === 'services' || page === 'product-service' || page === 'solution') {
      target = 'service';
    } else {
      target = 'home';
    }

    setCurrentPage(target);
    localStorage.setItem('currentPage', target);
    window.location.hash = target === 'home' ? '' : target;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash === 'about' || hash === 'about-us') {
        setCurrentPage('about');
        localStorage.setItem('currentPage', 'about');
      } else if (hash === 'eo' || hash === 'event-organizer' || hash === 'advertising') {
        setCurrentPage('eo');
        localStorage.setItem('currentPage', 'eo');
      } else if (hash === 'it-solutions' || hash === 'it-support') {
        setCurrentPage('it-solutions');
        localStorage.setItem('currentPage', 'it-solutions');
      } else if (hash === 'service' || hash === 'services' || hash === 'product-service') {
        setCurrentPage('service');
        localStorage.setItem('currentPage', 'service');
      } else if (hash === '' || hash === 'home') {
        setCurrentPage('home');
        localStorage.setItem('currentPage', 'home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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

    // Navigate directly to Product & Service Page (Combined IT + EO)
    if (
      titleLower === 'product & service' ||
      titleLower === 'product' ||
      titleLower === 'services' ||
      titleLower === 'service' ||
      itemIdLower === 'product-service'
    ) {
      handleNavigate('service');
      return;
    }

    // Navigate to EO Page (Event Organizer & Advertising)
    if (
      titleLower.includes('event organizer') ||
      titleLower.includes('advertising') ||
      titleLower.includes('billboard') ||
      itemIdLower === 'eo' ||
      itemIdLower === 'media-advertising'
    ) {
      handleNavigate('eo');
      return;
    }

    // Navigate to IT Solutions Page
    if (
      titleLower.includes('it support') ||
      titleLower.includes('network') ||
      titleLower.includes('security system') ||
      titleLower.includes('software') ||
      itemIdLower === 'it-support' ||
      itemIdLower === 'it-solutions' ||
      itemIdLower === 'network-fo' ||
      itemIdLower === 'security-systems' ||
      itemIdLower === 'software-managed' ||
      itemIdLower === 'me-integration'
    ) {
      handleNavigate('it-solutions');
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
      content: `You selected "${title}" from the Grasindopro menu hierarchy. This section presents technical specifications, investor publications, or corporate governance documentation.`
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
        ) : currentPage === 'eo' ? (
          <EOPage onContactClick={() => setIsSearchOpen(true)} />
        ) : currentPage === 'it-solutions' ? (
          <ITPage onContactClick={() => setIsSearchOpen(true)} />
        ) : currentPage === 'service' ? (
          <ServicesPage onNavigate={handleNavigate} onContactClick={() => setIsSearchOpen(true)} />
        ) : (
          <>
            {/* Section 1: Hero Carousel Banner */}
            <HeroBanner />

            {/* Section 2: Our Solutions Bar */}
            <OurSolution />

            {/* Section 3: Newest Updates (News, Activities, CSR, Press Release) */}
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
