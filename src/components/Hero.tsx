import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { siteConfig, heroImage } from '../data';

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden paper-bg min-h-[85vh] lg:min-h-[90vh] flex items-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large circle motif */}
        <div className="absolute top-10 right-[10%] w-64 h-64 lg:w-96 lg:h-96 rounded-full border-[3px] border-ink-black/10" />
        <div className="absolute top-16 right-[12%] w-56 h-56 lg:w-80 lg:h-80 rounded-full border-[2px] border-burnt-orange/20" />
        
        {/* Concentric circles */}
        <div className="absolute bottom-20 left-[5%] w-32 h-32 rounded-full bg-mustard/10" />
        <div className="absolute bottom-24 left-[6%] w-24 h-24 rounded-full bg-mustard/15" />
        
        {/* Grid dots */}
        <div className="absolute top-1/4 left-[15%] w-3 h-3 bg-ink-black/20 rounded-full" />
        <div className="absolute top-1/3 left-[18%] w-2 h-2 bg-burnt-orange/30 rounded-full" />
        <div className="absolute bottom-1/3 right-[20%] w-3 h-3 bg-olive/20 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text content */}
          <div className="lg:col-span-7 relative z-10">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-8 bg-burnt-orange" />
              <span className="cat-number text-burnt-orange">RETRO VINTAGE / CURATED WITH CHARACTER</span>
            </div>

            {/* Main headline */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight mb-6">
              <span className="block">GOOD THINGS</span>
              <span className="block text-burnt-orange">NEVER GO OUT</span>
              <span className="block">OF STYLE.</span>
            </h1>

            {/* Supporting copy */}
            <p className="text-lg lg:text-xl text-ink-black/70 max-w-lg mb-8 leading-relaxed">
              A nostalgic marketplace for timeless objects, curious finds, and everyday classics.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <button
                onClick={() => scrollTo('archive')}
                className="btn-retro flex items-center gap-2"
              >
                BROWSE THE ARCHIVE <ArrowUpRight size={16} />
              </button>
              <button
                onClick={() => scrollTo('story')}
                className="btn-outline flex items-center gap-2"
              >
                OUR POINT OF VIEW <ArrowDown size={16} />
              </button>
            </div>

            {/* Labels */}
            <div className="flex flex-wrap gap-4 lg:gap-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-olive rounded-full" />
                <span className="cat-number text-ink-black/60">THOUGHTFULLY CURATED</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-burnt-orange rounded-full" />
                <span className="cat-number text-ink-black/60">OLD-SCHOOL CHARM, NEW STORIES</span>
              </div>
            </div>
          </div>

          {/* Visual composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              {/* Main artwork panel with real image */}
              <div className="absolute inset-0 border-2 border-ink-black rounded-sm overflow-hidden bg-burnt-orange">
                <img
                  src={heroImage}
                  alt="Curated collection of vintage-inspired objects"
                  className="w-full h-full object-cover"
                />
                {/* Overlay for vintage feel */}
                <div className="absolute inset-0 bg-burnt-orange/10 mix-blend-multiply" />
                
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 cat-number text-warm-cream bg-ink-black/40 px-2 py-1 backdrop-blur-sm">NO. 001</div>
                <div className="absolute bottom-4 right-4 cat-number text-warm-cream bg-ink-black/40 px-2 py-1 backdrop-blur-sm">RETRO GOODS</div>
                
                {/* Grid lines */}
                <div className="absolute top-0 left-1/4 w-[1px] h-full bg-warm-cream/10" />
                <div className="absolute top-0 left-2/4 w-[1px] h-full bg-warm-cream/10" />
                <div className="absolute top-0 left-3/4 w-[1px] h-full bg-warm-cream/10" />
              </div>

              {/* Floating stamp */}
              <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 stamp">
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full border-[3px] border-ink-black bg-warm-cream flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <div className="cat-number text-[8px] lg:text-[9px] leading-tight">KEEP</div>
                    <div className="font-display text-xs lg:text-sm leading-tight">GOOD</div>
                    <div className="font-display text-xs lg:text-sm leading-tight">THINGS</div>
                  </div>
                </div>
              </div>

              {/* Catalogue number tag */}
              <div className="absolute -top-3 -right-3 lg:-top-4 lg:-right-4 bg-ink-black text-warm-cream px-3 py-1.5 cat-number">
                VOL. 18
              </div>

              {/* Small accent shape */}
              <div className="absolute top-8 -right-8 w-16 h-16 bg-olive border-2 border-ink-black/20 rotate-12 hidden lg:block" />
              
              {/* Corner dots */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-mustard rounded-full border border-ink-black/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function EditorialTicker() {
  const text = siteConfig.ticker;
  const repeated = `${text} ${text} ${text} ${text}`;

  return (
    <div className="bg-ink-black py-4 overflow-hidden" role="presentation">
      <div className="ticker-track flex whitespace-nowrap">
        <span className="text-warm-cream font-display text-lg sm:text-xl tracking-wide px-4">
          {repeated}
        </span>
        <span className="text-warm-cream font-display text-lg sm:text-xl tracking-wide px-4" aria-hidden="true">
          {repeated}
        </span>
      </div>
    </div>
  );
}
