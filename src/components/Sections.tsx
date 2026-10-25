import { useState } from 'react';
import { Heart, ArrowUpRight, ArrowUp, Send } from 'lucide-react';
import { useStore } from '../store';
import { collections, journalArticles, interiorImage, printPaperImage } from '../data';

// ==================== BRAND STORY ====================
export function BrandStory() {
  return (
    <section id="story" className="py-16 lg:py-24 paper-bg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
        <div className="w-full h-full concentric rounded-full" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[2px] w-8 bg-burnt-orange" />
              <span className="cat-number text-burnt-orange">02 / OUR POINT OF VIEW</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              GOOD DESIGN SHOULD FEEL CLEAR, USEFUL, AND A LITTLE UNEXPECTED.
            </h2>
            <p className="text-lg text-ink-black/70 leading-relaxed mb-6">
              Retro Goods brings together timeless objects, curious finds, and everyday classics with character. We believe the things around us should be thoughtfully chosen, useful, and worth keeping.
            </p>
            <p className="text-ink-black/60 leading-relaxed mb-8">
              We're drawn to objects that carry a sense of history without being trapped by it. Pieces that feel like they belong in a well-loved home, a creative studio, or a favourite corner shop. Design that rewards a second look.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-burnt-orange mt-1.5 shrink-0" />
                <div>
                  <span className="font-semibold text-sm">Enduring Design</span>
                  <p className="text-sm text-ink-black/60">Objects that outlast trends</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-mustard mt-1.5 shrink-0" />
                <div>
                  <span className="font-semibold text-sm">Curated Selection</span>
                  <p className="text-sm text-ink-black/60">Less, but better</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-olive mt-1.5 shrink-0" />
                <div>
                  <span className="font-semibold text-sm">Warm Character</span>
                  <p className="text-sm text-ink-black/60">Nostalgia that inspires discovery</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-[4/5] border-2 border-ink-black/10 relative overflow-hidden">
              <img
                src={interiorImage}
                alt="Warm retro-inspired interior with vintage objects"
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-olive/5" />
              
              {/* Stamp */}
              <div className="absolute bottom-6 left-6 stamp">
                <div className="w-16 h-16 rounded-full border-2 border-ink-black bg-warm-cream flex items-center justify-center">
                  <span className="font-display text-xs text-center leading-tight">EST.<br/>GOOD<br/>THINGS</span>
                </div>
              </div>
              
              {/* Catalogue label */}
              <div className="absolute top-4 right-4 bg-warm-cream px-3 py-1.5 border border-ink-black/20">
                <span className="cat-number">PLATE 02</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== FEATURE BAND ====================
export function FeatureBand() {
  return (
    <section className="bg-burnt-orange py-16 lg:py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(0,0,0,0.1) 20px, rgba(0,0,0,0.1) 21px)'
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="cat-number text-warm-cream/60 block mb-3">COLLECTION 03</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-warm-cream leading-tight mb-6">
              PRINT & PAPER,<br />
              <span className="text-ink-black">WITHOUT THE</span><br />
              EXTRA NOISE.
            </h2>
            <p className="text-warm-cream/80 text-lg mb-8 max-w-md">
              Posters, notebooks, and printed objects with the character of hand-made editions.
            </p>
            <button
              onClick={() => {
                document.getElementById('archive')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-warm-cream text-ink-black px-6 py-3 font-semibold text-sm uppercase tracking-wider border-2 border-warm-cream hover:bg-ink-black hover:text-warm-cream hover:border-ink-black transition-all"
            >
              EXPLORE PRINT & PAPER <ArrowUpRight size={16} />
            </button>
          </div>

          {/* Visual composition */}
          <div className="hidden lg:block relative">
            <div className="aspect-square max-w-sm mx-auto relative border-2 border-warm-cream/30 overflow-hidden">
              <img
                src={printPaperImage}
                alt="Print and paper collection"
                className="w-full h-full object-cover"
              />
              {/* Overlay for color harmony */}
              <div className="absolute inset-0 bg-burnt-orange/20 mix-blend-multiply" />
              <div className="absolute bottom-4 right-4 cat-number text-warm-cream/80 bg-ink-black/40 px-2 py-1 backdrop-blur-sm">PP / 003</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== COLLECTIONS ====================
export function Collections() {
  const { dispatch } = useStore();

  return (
    <section id="collections" className="py-16 lg:py-24 bg-warm-cream border-y-2 border-ink-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-[2px] w-8 bg-burnt-orange" />
          <span className="cat-number text-burnt-orange">03 / EDITORIAL COLLECTIONS</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mb-10">
          Curated Collections.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection, idx) => (
            <button
              key={collection.id}
              onClick={() => {
                dispatch({ type: 'SET_ACTIVE_CATEGORY', category: collection.categories[0] });
                document.getElementById('archive')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group text-left border-2 border-ink-black/10 hover:border-ink-black transition-all product-card"
            >
              {/* Cover */}
              <div
                className="aspect-[3/4] relative overflow-hidden border-b-2 border-ink-black/10"
                style={{ backgroundColor: collection.color + '15' }}
              >
                {/* Use different images for different collections */}
                {collection.id === 'home-objects' ? (
                  <img
                    src={interiorImage}
                    alt={collection.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : collection.id === 'print-paper' ? (
                  <img
                    src={printPaperImage}
                    alt={collection.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : collection.id === 'sound-culture' ? (
                  <img
                    src="https://image.qwenlm.ai/generated-images/163166c2-9edd-4e95-8f1e-e624f6e88ebe/_result.png"
                    alt={collection.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : collection.id === 'everyday-classics' ? (
                  <img
                    src="https://image.qwenlm.ai/generated-images/c5e926cb-5720-4589-a309-3416473d277f/_result.png"
                    alt={collection.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div
                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                    style={{
                      background: `linear-gradient(135deg, ${collection.color}40 0%, ${collection.color}15 100%)`
                    }}
                  />
                )}
                {/* Overlay for color harmony */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{ backgroundColor: collection.color }}
                />
                {/* Decorative elements */}
                <div
                  className="absolute top-6 right-6 w-12 h-12 rounded-full border-2 opacity-30"
                  style={{ borderColor: '#fff' }}
                />
                <div className="absolute top-4 left-4 cat-number text-warm-cream bg-ink-black/40 px-2 py-0.5 backdrop-blur-sm">
                  0{idx + 1}
                </div>
              </div>
              {/* Content */}
              <div className="p-4">
                <h3 className="font-display text-lg mb-1 group-hover:text-burnt-orange transition-colors">
                  {collection.name}
                </h3>
                <p className="text-sm text-ink-black/60 leading-relaxed">
                  {collection.description}
                </p>
                <span className="inline-flex items-center gap-1 mt-3 text-xs font-semibold uppercase tracking-wider text-burnt-orange">
                  Explore <ArrowUpRight size={12} />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== FAVORITES ====================
export function FavoritesView() {
  const { dispatch, favoriteProducts } = useStore();

  return (
    <section id="favorites" className="py-16 lg:py-24 paper-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-[2px] w-8 bg-burnt-orange" />
          <span className="cat-number text-burnt-orange">YOUR PERSONAL ARCHIVE</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl mb-4">
          Saved Objects.
        </h2>

        {favoriteProducts.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-ink-black/5 flex items-center justify-center">
              <Heart size={24} className="text-ink-black/30" />
            </div>
            <h3 className="font-display text-lg mb-2">No saved objects yet</h3>
            <p className="text-ink-black/60 mb-4">
              Browse the archive and save objects you'd like to revisit.
            </p>
            <button
              onClick={() => document.getElementById('archive')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline"
            >
              EXPLORE THE ARCHIVE
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <p className="cat-number text-ink-black/50">
                {favoriteProducts.length} SAVED OBJECT{favoriteProducts.length !== 1 ? 'S' : ''}
              </p>
              <button
                onClick={() => dispatch({ type: 'CLEAR_FAVORITES' })}
                className="text-sm font-semibold text-brick hover:underline"
              >
                Clear all
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteProducts.map(product => (
                <div key={product.id} className="bg-warm-cream border-2 border-ink-black/10 p-4">
                  <div className="flex gap-4">
                    {product.image.startsWith('http') ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-20 h-20 shrink-0 border border-ink-black/10 object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div
                        className="w-20 h-20 shrink-0 border border-ink-black/10"
                        style={{ background: product.image }}
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <span className="cat-number text-ink-black/40 block">{product.category}</span>
                      <h4 className="font-display text-base mb-1 truncate">{product.name}</h4>
                      <p className="font-mono font-bold text-sm mb-2">${product.price}</p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => dispatch({ type: 'SET_SELECTED_PRODUCT', product })}
                          className="text-xs font-semibold text-burnt-orange hover:underline"
                        >
                          View
                        </button>
                        <button
                          onClick={() => {
                            if (product.inStock) {
                              dispatch({ type: 'ADD_TO_CART', product });
                              dispatch({ type: 'SET_CART_OPEN', isOpen: true });
                            }
                          }}
                          className="text-xs font-semibold text-olive hover:underline"
                        >
                          Add to bag
                        </button>
                        <button
                          onClick={() => dispatch({ type: 'TOGGLE_FAVORITE', productId: product.id })}
                          className="text-xs font-semibold text-brick hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

// ==================== JOURNAL ====================
export function JournalPreview() {
  const [expandedArticle, setExpandedArticle] = useState<string | null>(null);

  return (
    <section id="journal" className="py-16 lg:py-24 bg-warm-cream border-y-2 border-ink-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-[2px] w-8 bg-burnt-orange" />
          <span className="cat-number text-burnt-orange">04 / JOURNAL</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mb-4">
          Objects with Stories.
        </h2>
        <p className="text-ink-black/60 max-w-lg mb-10">
          Exploring design, visual culture, collecting, and the everyday objects that shape our spaces.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {journalArticles.slice(0, 6).map(article => (
            <article
              key={article.id}
              className="border-2 border-ink-black/10 hover:border-ink-black transition-colors bg-aged-paper"
            >
              {/* Article header */}
              <div className="p-5 border-b border-ink-black/10">
                <div className="flex items-center justify-between mb-3">
                  <span className="cat-number text-burnt-orange">{article.category}</span>
                  <span className="cat-number text-ink-black/40">{article.readTime}</span>
                </div>
                <h3 className="font-display text-lg leading-tight mb-2">{article.title}</h3>
                <p className="text-sm text-ink-black/60 leading-relaxed">{article.excerpt}</p>
              </div>
              {/* Read more */}
              <div className="p-5">
                <button
                  onClick={() => setExpandedArticle(expandedArticle === article.id ? null : article.id)}
                  className="text-sm font-semibold text-burnt-orange hover:underline inline-flex items-center gap-1"
                >
                  {expandedArticle === article.id ? 'Close' : 'Read more'} <ArrowUpRight size={14} />
                </button>
                {expandedArticle === article.id && (
                  <div className="mt-4 pt-4 border-t border-ink-black/10">
                    <div className="prose prose-sm max-w-none">
                      {article.content.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className="text-sm text-ink-black/70 leading-relaxed mb-3">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== NEWSLETTER & CONTACT ====================
export function NewsletterContact() {
  const [email, setEmail] = useState('');
  const [emailStatus, setEmailStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [contactStatus, setContactStatus] = useState<'idle' | 'success'>('idle');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setEmailStatus('error');
      return;
    }
    setEmailStatus('success');
    setEmail('');
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;
    setContactStatus('success');
    setContactForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 lg:py-24 paper-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Newsletter */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[2px] w-8 bg-burnt-orange" />
              <span className="cat-number text-burnt-orange">NEWSLETTER</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl mb-4">
              A Little Nostalgia<br />In Your Inbox.
            </h2>
            <p className="text-ink-black/60 mb-6">
              Discover new finds, thoughtful design, and occasional notes from the Retro Goods archive.
            </p>

            {emailStatus === 'success' ? (
              <div className="p-4 bg-olive/10 border-2 border-olive">
                <p className="font-semibold text-olive">Thank you for subscribing!</p>
                <p className="text-sm text-ink-black/60 mt-1">
                  This is a demonstration — no real mailing list is connected.
                </p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setEmailStatus('idle'); }}
                    placeholder="your@email.com"
                    className={`flex-1 px-4 py-3 bg-warm-cream border-2 font-body text-sm focus:outline-none transition-colors ${
                      emailStatus === 'error' ? 'border-brick' : 'border-ink-black/20 focus:border-ink-black'
                    }`}
                    aria-label="Email address"
                    required
                  />
                  <button type="submit" className="btn-retro px-6">
                    <Send size={16} />
                  </button>
                </div>
                {emailStatus === 'error' && (
                  <p className="text-sm text-brick">Please enter a valid email address.</p>
                )}
                <p className="text-xs text-ink-black/40">
                  Demonstration form — no data is collected or stored.
                </p>
              </form>
            )}
          </div>

          {/* Contact */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[2px] w-8 bg-burnt-orange" />
              <span className="cat-number text-burnt-orange">GET IN TOUCH</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl mb-4">
              Say Hello.
            </h2>
            <p className="text-ink-black/60 mb-6">
              Questions, collaborations, or just want to share a vintage find? We'd love to hear from you.
            </p>

            {contactStatus === 'success' ? (
              <div className="p-4 bg-olive/10 border-2 border-olive">
                <p className="font-semibold text-olive">Message received!</p>
                <p className="text-sm text-ink-black/60 mt-1">
                  This is a demonstration — no message was actually sent.
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-semibold mb-1">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full px-4 py-3 bg-warm-cream border-2 border-ink-black/20 focus:border-ink-black font-body text-sm focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-semibold mb-1">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full px-4 py-3 bg-warm-cream border-2 border-ink-black/20 focus:border-ink-black font-body text-sm focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold mb-1">Message</label>
                  <textarea
                    id="contact-message"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-warm-cream border-2 border-ink-black/20 focus:border-ink-black font-body text-sm focus:outline-none transition-colors resize-none"
                    required
                  />
                </div>
                <button type="submit" className="btn-retro">
                  SEND MESSAGE →
                </button>
                <p className="text-xs text-ink-black/40">
                  Demonstration form — no messages are actually sent.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== FOOTER ====================
export function Footer() {
  const { dispatch } = useStore();

  return (
    <footer className="bg-ink-black text-warm-cream py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-burnt-orange rounded-full flex items-center justify-center">
                <span className="text-warm-cream font-display text-sm font-bold">R</span>
              </div>
              <span className="font-display text-xl">RETRO GOODS</span>
            </div>
            <p className="text-warm-cream/60 text-sm leading-relaxed mb-4">
              A curated marketplace for timeless objects, nostalgic design, and everyday classics with character.
            </p>
            <p className="cat-number text-warm-cream/40">
              GOOD THINGS NEVER GO OUT OF STYLE.
            </p>
          </div>

          {/* Archive links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">The Archive</h4>
            <ul className="space-y-2">
              {['All Objects', 'Home Objects', 'Lighting', 'Print & Paper', 'Sound & Culture'].map(cat => (
                <li key={cat}>
                  <button
                    onClick={() => {
                      dispatch({ type: 'SET_ACTIVE_CATEGORY', category: cat });
                      document.getElementById('archive')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-sm text-warm-cream/60 hover:text-burnt-orange transition-colors"
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2">
              {[
                { label: 'Our Story', id: 'story' },
                { label: 'Journal', id: 'journal' },
                { label: 'Contact', id: 'contact' },
                { label: 'Saved Items', id: 'favorites' },
              ].map(item => (
                <li key={item.id}>
                  <button
                    onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-sm text-warm-cream/60 hover:text-burnt-orange transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Information</h4>
            <ul className="space-y-2">
              <li><span className="text-sm text-warm-cream/60">Privacy Policy</span></li>
              <li><span className="text-sm text-warm-cream/60">Terms of Service</span></li>
              <li><span className="text-sm text-warm-cream/60">Shipping & Returns</span></li>
            </ul>
            <div className="mt-4 pt-4 border-t border-warm-cream/10">
              <p className="text-xs text-warm-cream/40">
                This is a demonstration website. No real products, transactions, or data collection.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-warm-cream/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="cat-number text-warm-cream/40">
            © 2024 RETRO GOODS — DEMONSTRATION SITE
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-sm text-warm-cream/60 hover:text-burnt-orange transition-colors"
            aria-label="Back to top"
          >
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
