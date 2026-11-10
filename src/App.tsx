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
import { GalleryPage } from './components/pages/GalleryPage';
import { AboutPage } from './components/pages/AboutPage';
import { ContactPage } from './components/pages/ContactPage';

const validRoutes: PageRoute[] = ['home', 'services', 'decorations', 'gifts', 'gallery', 'about', 'contact'];

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

  const scrollToSection = (route: PageRoute) => {
    if (route === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    let element = document.getElementById(route);
    if (!element && (route === 'decorations' || route === 'gifts')) {
      const servicesEl = document.getElementById('services');
      const galleryEl = document.getElementById('gallery');
      if (servicesEl && window.scrollY < servicesEl.offsetTop - 120) {
        element = servicesEl;
      } else {
        element = galleryEl || servicesEl;
      }
    }
    if (element) {
      const navbarHeight = 80;
      const top = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    }
  };

  // Scroll to initial hash on mount and handle browser back/forward hash changes
  useEffect(() => {
    const initialRoute = parseHashRoute();
    if (initialRoute !== 'home') {
      requestAnimationFrame(() => {
        scrollToSection(initialRoute);
      });
    }

    const handleHashChange = () => {
      const nextRoute = parseHashRoute();
      setCurrentRoute(nextRoute);
      scrollToSection(nextRoute);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Update active navigation link based on currently visible section while scrolling
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 180;

      if (window.scrollY < 120) {
        setCurrentRoute('home');
        return;
      }

      let activeSection: PageRoute = 'home';
      for (const route of validRoutes) {
        const el = document.getElementById(route);
        if (el) {
          const offsetTop = el.offsetTop;
          if (scrollPosition >= offsetTop) {
            activeSection = route;
          }
        }
      }
      setCurrentRoute(activeSection);
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const navigateTo = (route: PageRoute) => {
    setCurrentRoute(route);
    window.history.replaceState(null, '', route === 'home' ? window.location.pathname : `#${route}`);
    scrollToSection(route);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#241E1C] flex flex-col font-sans selection:bg-[#7D1D2C]/15 selection:text-[#7D1D2C]">
      {/* 1. Clean Sticky Minimal Navbar */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={navigateTo}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      {/* 2. Single-Page Scrolling Sections */}
      <main className="flex-1">
        <div id="home" className="scroll-mt-20">
          <HomePage
            onNavigate={navigateTo}
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        </div>

        <div id="gallery" className="scroll-mt-20 border-t border-[#E8DFD3]">
          <GalleryPage
            onNavigate={navigateTo}
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        </div>

        <div id="about" className="scroll-mt-20 border-t border-[#E8DFD3]">
          <AboutPage
            onNavigate={navigateTo}
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        </div>

        <div id="contact" className="scroll-mt-20 border-t border-[#E8DFD3]">
          <ContactPage
            onNavigate={navigateTo}
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        </div>
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
