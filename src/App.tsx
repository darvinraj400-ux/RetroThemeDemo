import { StoreProvider } from './store';
import { Header } from './components/Header';
import { Hero, EditorialTicker } from './components/Hero';
import { Archive } from './components/Archive';
import { ShoppingBagDrawer } from './components/ShoppingBag';
import { RetroEraQuiz } from './components/RetroEra';
import { BrandStory, FeatureBand, Collections, FavoritesView, JournalPreview, NewsletterContact, Footer } from './components/Sections';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-ink-black text-warm-cream border-2 border-ink-black flex items-center justify-center hover:bg-burnt-orange transition-colors shadow-lg"
      aria-label="Back to top"
    >
      <ArrowUp size={20} />
    </button>
  );
}

function AppContent() {
  return (
    <div className="min-h-screen bg-aged-paper">
      {/* Skip to content */}
      <a href="#archive" className="skip-link">
        Skip to archive
      </a>

      {/* Header */}
      <Header />

      {/* Main content */}
      <main>
        {/* Hero */}
        <Hero />

        {/* Ticker */}
        <EditorialTicker />

        {/* Archive */}
        <Archive />

        {/* Brand Story */}
        <BrandStory />

        {/* Feature Band */}
        <FeatureBand />

        {/* Collections */}
        <Collections />

        {/* Retro Era Quiz */}
        <RetroEraQuiz />

        {/* Favorites */}
        <FavoritesView />

        {/* Journal */}
        <JournalPreview />

        {/* Newsletter & Contact */}
        <NewsletterContact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Shopping Bag Drawer */}
      <ShoppingBagDrawer />

      {/* Back to top */}
      <BackToTop />
    </div>
  );
}

export default function App() {
  return (
    <StoreProvider>
      <AppContent />
    </StoreProvider>
  );
}
