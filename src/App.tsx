/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { QuickQuoteModal } from './components/QuickQuoteModal';
import { PageRoute } from './types/navigation';
import { HomePage } from './components/pages/HomePage';
import { DecorationsPage } from './components/pages/DecorationsPage';
import { GiftsPage } from './components/pages/GiftsPage';
import { GalleryPage } from './components/pages/GalleryPage';
import { AboutPage } from './components/pages/AboutPage';
import { ContactPage } from './components/pages/ContactPage';

const validRoutes: PageRoute[] = ['home', 'decorations', 'gifts', 'gallery', 'about', 'contact'];

function parseHashRoute(): PageRoute {
  const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
  if (validRoutes.includes(hash as PageRoute)) {
    return hash as PageRoute;
  }
  return 'home';
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(() => parseHashRoute());
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Sync route with browser hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const nextRoute = parseHashRoute();
      setCurrentRoute(nextRoute);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const navigateTo = (route: PageRoute) => {
    if (currentRoute !== route) {
      window.location.hash = route;
      setCurrentRoute(route);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#241E1C] flex flex-col font-sans selection:bg-[#7D1D2C]/15 selection:text-[#7D1D2C]">
      {/* 1. Clean Sticky Minimal Navbar */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={navigateTo}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      {/* 2. Active Page Content */}
      <main className="flex-1">
        {currentRoute === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        )}

        {currentRoute === 'decorations' && (
          <DecorationsPage
            onNavigate={navigateTo}
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        )}

        {currentRoute === 'gifts' && (
          <GiftsPage
            onNavigate={navigateTo}
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        )}

        {currentRoute === 'gallery' && (
          <GalleryPage
            onNavigate={navigateTo}
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        )}

        {currentRoute === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        )}

        {currentRoute === 'contact' && (
          <ContactPage
            onNavigate={navigateTo}
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        )}
      </main>

      {/* 3. Minimal Editorial Footer */}
      <Footer onNavigate={navigateTo} />

      {/* 4. Floating WhatsApp Action */}
      <WhatsAppFloatingButton />

      {/* 5. Quick Consultation Modal */}
      <QuickQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </div>
  );
}
