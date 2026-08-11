import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Header/Navbar';
import { HeroBanner } from './components/Home/HeroBanner';
import { AboutTechnology } from './components/Home/AboutTechnology';
import { WhyUs } from './components/Home/WhyUs';
import { StrategicAlliances } from './components/Home/StrategicAlliances';
import { AboutUs } from './components/About/AboutUs';
import { OrgStructurePage } from './components/About/OrgStructurePage';
import { ClientPage } from './components/About/Client';
import { ServicesPage } from './components/Service/ServicesPage';
import { ITPage } from './components/IT/ITPage';
import { EOPage } from './components/EO/EOPage';
import { EOmain } from './components/EO/EOmain';
import { EOAdversting } from './components/EO/EOAdversting';
import { ITSupportPage } from './components/IT/ITSupportPage';
import { FiberOpticsPage } from './components/IT/FiberOpticsPage';
import { SecuritySystemsPage } from './components/IT/SecuritySystemsPage';
import { Telecomunication } from './components/IT/Telecomunication';
import { CMEmain } from './components/CME/CMEmain';
import { MechanicalPage } from './components/CME/Mechanical';
import { ElectricalPage } from './components/CME/Electrical';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { DetailModal } from './components/Common/DetailModal';
import { MenuItem, NewsItem } from './types/navigation';
import { pageEnter } from './animations';

type PageType =
  | 'home'
  | 'about'
  | 'org-structure'
  | 'client'
  | 'service'
  | 'cme-main'
  | 'civil-construction'
  | 'me-installation'
  | 'eo'
  | 'eo-main'
  | 'media-advertising'
  | 'it-solutions'
  | 'it-support'
  | 'network-fo'
  | 'security-systems'
  | 'telecom'
  | 'contact';

const getHashPath = (hashStr: string): string => {
  return hashStr.replace(/^#\/?/, '').toLowerCase();
};

const getInitialPage = (): PageType => {
  if (typeof window !== 'undefined') {
    const raw = getHashPath(window.location.hash);
    if (raw.includes('org-structure') || raw.includes('organization-structure') || raw.includes('struktur-organisasi')) return 'org-structure';
    if (raw.includes('civil-construction') || raw.includes('civil-building')) return 'civil-construction';
    if (raw.includes('me-installation') || raw.includes('mechanical-electrical')) return 'me-installation';
    if (raw.includes('cme-main') || raw === 'cme') return 'cme-main';
    if (raw.includes('it-support')) return 'it-support';
    if (raw.includes('fiber-optic') || raw.includes('network-fo') || raw.includes('network')) return 'network-fo';
    if (raw.includes('security-systems') || raw.includes('security')) return 'security-systems';
    if (raw.includes('telecom') || raw.includes('telecommunication') || raw.includes('telekomunikasi')) return 'telecom';
    if (raw.includes('contact')) return 'contact';
    if (raw.includes('about')) return 'about';
    if (raw.includes('event-organizer-main') || raw.includes('eo-main')) return 'eo-main';
    if (raw.includes('media-advertising') || raw.includes('advertising') || raw.includes('billboard')) return 'media-advertising';
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
  const mainRef = useRef<HTMLElement>(null);
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

    if (page === 'org-structure' || page === 'organization-structure' || page === 'struktur-organisasi') {
      target = 'org-structure';
      hashRoute = '/about/organization-structure';
    } else if (page === 'client' || page === 'clients' || page === 'our-clients' || page === 'rekam-jejak') {
      target = 'client';
      hashRoute = '/about/client';
    } else if (page === 'about' || page === 'about-us') {
      target = 'about';
      hashRoute = '/about-us';
    } else if (page === 'cme-main' || page === 'cme') {
      target = 'cme-main';
      hashRoute = '/service/cme-main';
    } else if (page === 'civil-construction' || page === 'civil-building') {
      target = 'civil-construction';
      hashRoute = '/service/civil-construction';
    } else if (page === 'me-installation' || page === 'me') {
      target = 'me-installation';
      hashRoute = '/service/me-installation';
    } else if (page === 'eo-main' || page === 'event-organizer-main') {
      target = 'eo-main';
      hashRoute = '/service/event-organizer-main';
    } else if (page === 'media-advertising' || page === 'advertising' || page === 'billboard') {
      target = 'media-advertising';
      hashRoute = '/service/media-advertising';
    } else if (page === 'eo' || page === 'event-organizer' || page === 'mice') {
      target = 'eo';
      hashRoute = '/service/event-organizer';
    } else if (page === 'it-support' || page === 'it-support-maintenance') {
      target = 'it-support';
      hashRoute = '/service/it-support';
    } else if (page === 'network-fo' || page === 'network' || page === 'fiber-optic' || page === 'fiber-optics' || page === 'fiber') {
      target = 'network-fo';
      hashRoute = '/service/fiber-optic';
    } else if (page === 'security-systems' || page === 'security' || page === 'security-system') {
      target = 'security-systems';
      hashRoute = '/service/security-systems';
    } else if (page === 'telecom' || page === 'telecommunication' || page === 'telekomunikasi') {
      target = 'telecom';
      hashRoute = '/service/telecom';
    } else if (page === 'it-solutions') {
      target = 'it-solutions';
      hashRoute = '/service/it-solutions';
      if (subCategory) setItCategory(subCategory);
    } else if (page === 'service' || page === 'services' || page === 'product-service' || page === 'solution') {
      target = 'service';
      hashRoute = '/service';
    } else if (page === 'contact' || page === 'information') {
      target = 'contact';
      hashRoute = '/contact';
    } else {
      target = 'home';
      hashRoute = '';
    }

    setCurrentPage(target);
    localStorage.setItem('currentPage', target);
    window.location.hash = hashRoute;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Page enter animation on every navigation
  useEffect(() => {
    if (mainRef.current) pageEnter(mainRef.current, 0.55);
  }, [currentPage]);

  useEffect(() => {
    const handleHashChange = () => {
      const raw = getHashPath(window.location.hash);
      let target: PageType = 'home';

      if (raw.includes('org-structure') || raw.includes('organization-structure') || raw.includes('struktur-organisasi')) {
        target = 'org-structure';
      } else if (raw.includes('client')) {
        target = 'client';
      } else if (raw.includes('it-support')) {
        target = 'it-support';
      } else if (raw.includes('fiber-optic') || raw.includes('network-fo') || raw.includes('network')) {
        target = 'network-fo';
      } else if (raw.includes('security-systems') || raw.includes('security')) {
        target = 'security-systems';
      } else if (raw.includes('telecom') || raw.includes('telecommunication') || raw.includes('telekomunikasi')) {
        target = 'telecom';
      } else if (raw.includes('contact')) {
        target = 'contact';
      } else if (raw.includes('about')) {
        target = 'about';
      } else if (raw.includes('civil-construction') || raw.includes('civil-building')) {
        target = 'civil-construction';
      } else if (raw.includes('me-installation') || raw.includes('mechanical-electrical')) {
        target = 'me-installation';
      } else if (raw.includes('cme-main') || raw === 'cme') {
        target = 'cme-main';
      } else if (raw.includes('event-organizer-main') || raw.includes('eo-main')) {
        target = 'eo-main';
      } else if (raw.includes('media-advertising') || raw.includes('advertising') || raw.includes('billboard')) {
        target = 'media-advertising';
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

    // Navigate to Client page
    if (
      itemIdLower === 'client' ||
      itemIdLower === 'clients' ||
      titleLower.includes('client') ||
      titleLower.includes('our clients') ||
      titleLower.includes('pelanggan')
    ) {
      handleNavigate('client');
      return;
    }

    // Navigate to Organization Structure page
    if (
      itemIdLower === 'org-structure' ||
      titleLower.includes('organization structure') ||
      titleLower.includes('struktur organisasi') ||
      titleLower.includes('org structure')
    ) {
      handleNavigate('org-structure');
      return;
    }

    // Navigate to About page
    if (
      titleLower === 'about' ||
      titleLower === 'about us' ||
      titleLower.includes('profile') ||
      titleLower.includes('management') ||
      itemIdLower === 'about' ||
      itemIdLower === 'about-us' ||
      itemIdLower === 'milestones' ||
      itemIdLower === 'values' ||
      itemIdLower === 'leadership'
    ) {
      handleNavigate('about');
      return;
    }

    // Navigate directly to CME Main Page
    if (
      itemIdLower === 'cme-main' ||
      itemIdLower === 'cme' ||
      titleLower === 'cme (civil mechanical and electrical)' ||
      titleLower === 'cme'
    ) {
      handleNavigate('cme-main');
      return;
    }

    // Navigate to Mekanikal Page
    if (
      itemIdLower === 'cme-mechanical' ||
      itemIdLower === 'civil-construction' ||
      titleLower.includes('mekanikal') ||
      titleLower.includes('civil construction')
    ) {
      handleNavigate('civil-construction');
      return;
    }

    // Navigate to Elektrikal & Integrasi Sistem Page
    if (
      itemIdLower === 'cme-electrical' ||
      itemIdLower === 'cme-integration' ||
      itemIdLower === 'me-installation' ||
      titleLower.includes('elektrikal') ||
      titleLower.includes('integrasi sistem') ||
      titleLower.includes('mechanical & electrical')
    ) {
      handleNavigate('me-installation');
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

    // Header title click "EVENT ORGANIZER" goes to EOmain.tsx
    if (titleLower === 'event organizer') {
      handleNavigate('eo-main');
      return;
    }

    // Navigate to Media Advertising Dedicated Page
    if (
      titleLower.includes('advertising') ||
      titleLower.includes('billboard') ||
      itemIdLower === 'media-advertising'
    ) {
      handleNavigate('media-advertising');
      return;
    }

    // Navigate to EO Sub-Page (Event Organizer & MICE Solutions)
    if (
      titleLower.includes('event organizer') ||
      itemIdLower === 'eo'
    ) {
      handleNavigate('eo');
      return;
    }

    // Individual IT Solutions Dedicated Page Navigation
    if (
      titleLower.includes('telecom') ||
      titleLower.includes('telekomunikasi') ||
      titleLower.includes('gsm') ||
      itemIdLower === 'telecom' ||
      itemIdLower === 'telecommunication' ||
      itemIdLower === 'telekomunikasi'
    ) {
      handleNavigate('telecom');
      return;
    }

    if (titleLower.includes('it support') || itemIdLower === 'it-support') {
      handleNavigate('it-support');
      return;
    }

    if (titleLower.includes('fiber') || itemIdLower === 'network-fo' || (titleLower.includes('network') && !titleLower.includes('telecom'))) {
      handleNavigate('network-fo');
      return;
    }

    if (titleLower.includes('security system') || itemIdLower === 'security-systems') {
      handleNavigate('security-systems');
      return;
    }

    if (titleLower.includes('it solution') || itemIdLower === 'it-solutions' || itemIdLower === 'me-integration') {
      handleNavigate('it-solutions', 'all');
      return;
    }

    // Navigate to Contact page
    if (
      titleLower === 'contact' ||
      titleLower === 'contact us' ||
      itemIdLower === 'contact' ||
      itemIdLower === 'information'
    ) {
      handleNavigate('contact');
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
      <main ref={mainRef} className="flex-1">
        {currentPage === 'about' ? (
          <AboutUs onNavigate={handleNavigate} />
        ) : currentPage === 'org-structure' ? (
          <OrgStructurePage onNavigate={handleNavigate} />
        ) : currentPage === 'client' ? (
          <ClientPage onNavigate={handleNavigate} onContactClick={() => setIsSearchOpen(true)} />
        ) : currentPage === 'cme-main' ? (
          <CMEmain onNavigate={handleNavigate} onContactClick={() => setIsSearchOpen(true)} />
        ) : currentPage === 'civil-construction' ? (
          <MechanicalPage onNavigate={handleNavigate} onContactClick={() => setIsSearchOpen(true)} />
        ) : currentPage === 'me-installation' ? (
          <ElectricalPage onNavigate={handleNavigate} onContactClick={() => setIsSearchOpen(true)} />
        ) : currentPage === 'eo-main' ? (
          <EOmain onNavigate={handleNavigate} onContactClick={() => setIsSearchOpen(true)} />
        ) : currentPage === 'media-advertising' ? (
          <EOAdversting onNavigate={handleNavigate} onContactClick={() => setIsSearchOpen(true)} />
        ) : currentPage === 'eo' ? (
          <EOPage onNavigate={handleNavigate} onContactClick={() => setIsSearchOpen(true)} />
        ) : currentPage === 'it-support' ? (
          <ITSupportPage onNavigate={handleNavigate} onContactClick={() => setIsSearchOpen(true)} />
        ) : currentPage === 'network-fo' ? (
          <FiberOpticsPage onNavigate={handleNavigate} />
        ) : currentPage === 'security-systems' ? (
          <SecuritySystemsPage onNavigate={handleNavigate} />
        ) : currentPage === 'telecom' ? (
          <Telecomunication onNavigate={handleNavigate} onContactClick={() => handleNavigate('contact')} />
        ) : currentPage === 'it-solutions' ? (
          <ITPage key={itCategory} initialCategory={itCategory} onContactClick={() => handleNavigate('contact')} />
        ) : currentPage === 'service' ? (
          <ServicesPage onNavigate={handleNavigate} onContactClick={() => handleNavigate('contact')} />
        ) : currentPage === 'contact' ? (
          <Contact onNavigate={handleNavigate} />
        ) : (
          <>
            {/* Section 1: Hero Carousel Banner */}
            <HeroBanner />

            {/* Section 2: About Grasindopro */}
            <AboutTechnology onLearnMore={() => handleNavigate('about')} />

            {/* Section 3: Why Choose Us */}
            <WhyUs />

            {/* Section 4: Strategic Alliances / Clients */}
            <StrategicAlliances />
          </>
        )}
      </main>

      {/* Persistent 3-Column Footer */}
      <Footer onLinkClick={handleMenuItemClick} />

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
