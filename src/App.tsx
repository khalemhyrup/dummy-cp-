import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Header/Navbar';
import { HeroBanner } from './components/Home/HeroBanner';
import { OurSolution } from './components/Home/OurSolution';
import { AboutTechnology } from './components/Home/AboutTechnology';
import { WhyUs } from './components/Home/WhyUs';
import { StrategicAlliances } from './components/Home/StrategicAlliances';
import { AboutUs } from './components/About/AboutUs';
import { ServicesPage } from './components/Service/ServicesPage';
import { ITPage } from './components/IT/ITPage';
import { EOPage } from './components/EO/EOPage';
import { ITSupportPage } from './components/Services/ITSupportPage';
import { FiberOpticsPage } from './components/Services/FiberOpticsPage';
import { SecuritySystemsPage } from './components/Services/SecuritySystemsPage';
import { SoftwareManagedPage } from './components/Services/SoftwareManagedPage';
import { Footer } from './components/Footer/Footer';
import { SearchModal } from './components/Common/SearchModal';
import { DetailModal } from './components/Common/DetailModal';
import { MenuItem, NewsItem } from './types/navigation';

type PageType =
  | 'home'
  | 'about'
  | 'service'
  | 'eo'
  | 'it-solutions'
  | 'it-support'
  | 'network-fo'
  | 'security-systems'
  | 'software-managed';

const getHashPath = (hashStr: string): string => {
  return hashStr.replace(/^#\/?/, '').toLowerCase();
};

const getInitialPage = (): PageType => {
  if (typeof window !== 'undefined') {
    const raw = getHashPath(window.location.hash);
    if (raw.includes('it-support')) return 'it-support';
    if (raw.includes('fiber-optic') || raw.includes('network-fo') || raw.includes('network')) return 'network-fo';
    if (raw.includes('security-systems') || raw.includes('security')) return 'security-systems';
    if (raw.includes('software-managed') || raw.includes('software')) return 'software-managed';
    if (raw.includes('about')) return 'about';
    if (raw.includes('event-organizer') || raw.includes('eo')) return 'eo';
    if (raw.includes('it-solutions')) return 'it-solutions';
    if (raw.includes('service') || raw.includes('product-service')) return 'service';
    
    const saved = localStorage.getItem('currentPage') as PageType;
    if (saved) return saved;
  }
  return 'home';
};

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>(getInitialPage);
  const [itCategory, setItCategory] = useState<string>('all');
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

  const handleNavigate = (page: PageType | string, subCategory?: string) => {
    let target: PageType = 'home';
    let hashRoute = '';

    if (page === 'about' || page === 'about-us') {
      target = 'about';
      hashRoute = '/about-us';
    } else if (page === 'eo' || page === 'event-organizer' || page === 'advertising' || page === 'mice' || page === 'billboard') {
      target = 'eo';
      hashRoute = '/service/event-organizer';
    } else if (page === 'it-support') {
      target = 'it-support';
      hashRoute = '/service/it-support';
    } else if (page === 'network-fo' || page === 'network') {
      target = 'network-fo';
      hashRoute = '/service/fiber-optic';
    } else if (page === 'security-systems' || page === 'security') {
      target = 'security-systems';
      hashRoute = '/service/security-systems';
    } else if (page === 'software-managed' || page === 'software') {
      target = 'software-managed';
      hashRoute = '/service/software-managed';
    } else if (page === 'it-solutions') {
      target = 'it-solutions';
      hashRoute = '/service/it-solutions';
      if (subCategory) setItCategory(subCategory);
    } else if (page === 'service' || page === 'services' || page === 'product-service' || page === 'solution') {
      target = 'service';
      hashRoute = '/service';
    } else {
      target = 'home';
      hashRoute = '';
    }

    setCurrentPage(target);
    localStorage.setItem('currentPage', target);
    window.location.hash = hashRoute;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleHashChange = () => {
      const raw = getHashPath(window.location.hash);
      let target: PageType = 'home';

      if (raw.includes('it-support')) {
        target = 'it-support';
      } else if (raw.includes('fiber-optic') || raw.includes('network-fo') || raw.includes('network')) {
        target = 'network-fo';
      } else if (raw.includes('security-systems') || raw.includes('security')) {
        target = 'security-systems';
      } else if (raw.includes('software-managed') || raw.includes('software')) {
        target = 'software-managed';
      } else if (raw.includes('about')) {
        target = 'about';
      } else if (raw.includes('event-organizer') || raw.includes('eo')) {
        target = 'eo';
      } else if (raw.includes('it-solutions')) {
        target = 'it-solutions';
      } else if (raw.includes('service') || raw.includes('product-service')) {
        target = 'service';
      } else {
        target = 'home';
      }

      setCurrentPage(target);
      localStorage.setItem('currentPage', target);
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

    // Individual IT Solutions Dedicated Page Navigation
    if (titleLower.includes('it support') || itemIdLower === 'it-support') {
      handleNavigate('it-support');
      return;
    }

    if (titleLower.includes('fiber') || titleLower.includes('network') || itemIdLower === 'network-fo') {
      handleNavigate('network-fo');
      return;
    }

    if (titleLower.includes('security system') || itemIdLower === 'security-systems') {
      handleNavigate('security-systems');
      return;
    }

    if (titleLower.includes('software') || itemIdLower === 'software-managed') {
      handleNavigate('software-managed');
      return;
    }

    if (titleLower.includes('it solution') || itemIdLower === 'it-solutions' || itemIdLower === 'me-integration') {
      handleNavigate('it-solutions', 'all');
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
        ) : currentPage === 'it-support' ? (
          <ITSupportPage onContactClick={() => setIsSearchOpen(true)} />
        ) : currentPage === 'network-fo' ? (
          <FiberOpticsPage />
        ) : currentPage === 'security-systems' ? (
          <SecuritySystemsPage />
        ) : currentPage === 'software-managed' ? (
          <SoftwareManagedPage />
        ) : currentPage === 'it-solutions' ? (
          <ITPage key={itCategory} initialCategory={itCategory} onContactClick={() => setIsSearchOpen(true)} />
        ) : currentPage === 'service' ? (
          <ServicesPage onNavigate={handleNavigate} onContactClick={() => setIsSearchOpen(true)} />
        ) : (
          <>
            {/* Section 1: Hero Carousel Banner */}
            <HeroBanner />

            {/* Section 2: Our Solutions Bar */}
            <OurSolution />

            {/* Section 3: About Technology (Multipolar/Grasindopro Tech & Services) */}
            <AboutTechnology onLearnMore={() => handleNavigate('about')} />

            {/* Section 4: Kenapa Kami / Why Choose Us */}
            <WhyUs />

            {/* Section 5: Strategic Alliances (Global IT Partner Grid) */}
            <StrategicAlliances />
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
