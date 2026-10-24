import { useState, useEffect, useRef } from 'react';
import { Search, ShoppingBag, Heart, Menu, X, ArrowUpRight } from 'lucide-react';
import { useStore } from '../store';
import { siteConfig } from '../data';

export function Header() {
  const { state, dispatch, cartCount } = useStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isSearchOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isSearchOpen]);

  const scrollTo = (id: string) => {
    dispatch({ type: 'SET_MOBILE_MENU_OPEN', isOpen: false });
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-ink-black text-warm-cream text-center py-2 px-4 cat-number overflow-hidden whitespace-nowrap">
        <span className="inline-block">{siteConfig.announcement}</span>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-aged-paper/95 backdrop-blur-sm border-b-2 border-ink-black shadow-sm'
            : 'bg-aged-paper border-b border-ink-black/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2 -ml-2"
              onClick={() => dispatch({ type: 'SET_MOBILE_MENU_OPEN', isOpen: true })}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>

            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 bg-burnt-orange rounded-full flex items-center justify-center">
                <span className="text-warm-cream font-display text-sm font-bold">R</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-display text-xl lg:text-2xl tracking-tight">RETRO GOODS</span>
              </div>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              <button onClick={() => scrollTo('archive')} className="text-sm font-semibold uppercase tracking-wider hover:text-burnt-orange transition-colors">
                Archive
              </button>
              <button onClick={() => scrollTo('collections')} className="text-sm font-semibold uppercase tracking-wider hover:text-burnt-orange transition-colors">
                Collections
              </button>
              <button onClick={() => scrollTo('story')} className="text-sm font-semibold uppercase tracking-wider hover:text-burnt-orange transition-colors">
                Our Story
              </button>
              <button onClick={() => scrollTo('journal')} className="text-sm font-semibold uppercase tracking-wider hover:text-burnt-orange transition-colors">
                Journal
              </button>
              <button onClick={() => scrollTo('contact')} className="text-sm font-semibold uppercase tracking-wider hover:text-burnt-orange transition-colors">
                Contact
              </button>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 hover:bg-ink-black/5 rounded transition-colors"
                aria-label="Search products"
              >
                <Search size={20} />
              </button>

              {/* Favorites */}
              <button
                onClick={() => scrollTo('favorites')}
                className="p-2 hover:bg-ink-black/5 rounded transition-colors relative"
                aria-label={`Saved items (${state.favorites.length})`}
              >
                <Heart size={20} fill={state.favorites.length > 0 ? '#C65C36' : 'none'} stroke={state.favorites.length > 0 ? '#C65C36' : 'currentColor'} />
                {state.favorites.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-burnt-orange text-warm-cream text-[10px] font-bold rounded-full flex items-center justify-center">
                    {state.favorites.length}
                  </span>
                )}
              </button>

              {/* Cart */}
              <button
                onClick={() => dispatch({ type: 'SET_CART_OPEN', isOpen: true })}
                className="p-2 hover:bg-ink-black/5 rounded transition-colors relative"
                aria-label={`Shopping bag (${cartCount} items)`}
              >
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-burnt-orange text-warm-cream text-[10px] font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Browse CTA - Desktop */}
              <button
                onClick={() => scrollTo('archive')}
                className="hidden lg:flex items-center gap-1 btn-retro text-xs py-2 px-4"
              >
                BROWSE <ArrowUpRight size={14} />
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {isSearchOpen && (
            <div className="pb-4 border-t border-ink-black/10 pt-3">
              <div className="relative max-w-md mx-auto">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-black/50" />
                <input
                  ref={searchRef}
                  type="search"
                  placeholder="Search the archive..."
                  value={state.searchQuery}
                  onChange={(e) => {
                    dispatch({ type: 'SET_SEARCH_QUERY', query: e.target.value });
                    scrollTo('archive');
                  }}
                  className="w-full pl-10 pr-10 py-2.5 bg-warm-cream border-2 border-ink-black font-body text-sm focus:outline-none focus:border-burnt-orange"
                  aria-label="Search products"
                />
                <button
                  onClick={() => {
                    setIsSearchOpen(false);
                    dispatch({ type: 'SET_SEARCH_QUERY', query: '' });
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  aria-label="Close search"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Menu */}
      {state.isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="absolute inset-0 bg-ink-black/50" onClick={() => dispatch({ type: 'SET_MOBILE_MENU_OPEN', isOpen: false })} />
          <div className="absolute inset-y-0 left-0 w-80 max-w-[85vw] bg-aged-paper border-r-2 border-ink-black overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <span className="font-display text-xl">RETRO GOODS</span>
                <button
                  onClick={() => dispatch({ type: 'SET_MOBILE_MENU_OPEN', isOpen: false })}
                  className="p-2"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="space-y-1" aria-label="Mobile navigation">
                {[
                  { label: 'The Archive', id: 'archive' },
                  { label: 'Collections', id: 'collections' },
                  { label: 'Our Story', id: 'story' },
                  { label: 'Journal', id: 'journal' },
                  { label: 'Saved Items', id: 'favorites' },
                  { label: 'Contact', id: 'contact' },
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="block w-full text-left py-3 text-2xl font-display hover:text-burnt-orange transition-colors border-b border-ink-black/10"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              <div className="mt-8 space-y-3">
                <button
                  onClick={() => {
                    dispatch({ type: 'SET_MOBILE_MENU_OPEN', isOpen: false });
                    dispatch({ type: 'SET_CART_OPEN', isOpen: true });
                  }}
                  className="flex items-center gap-3 w-full py-3 text-lg font-semibold"
                >
                  <ShoppingBag size={20} />
                  Shopping Bag ({cartCount})
                </button>
                <button
                  onClick={() => scrollTo('archive')}
                  className="btn-retro w-full text-center"
                >
                  BROWSE THE ARCHIVE ↗
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
