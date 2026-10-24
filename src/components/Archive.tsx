import { useState, useEffect } from 'react';
import { Search, X, Heart, ShoppingBag, ChevronLeft, ChevronRight, SlidersHorizontal } from 'lucide-react';
import { useStore } from '../store';
import { categories, Product } from '../data';

export function Archive() {
  const { state, dispatch, filteredProducts } = useStore();
  const [showFilters, setShowFilters] = useState(false);

  return (
    <section id="archive" className="py-16 lg:py-24 paper-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="h-[2px] w-8 bg-burnt-orange" />
          <span className="cat-number text-burnt-orange">01 / THE ARCHIVE</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mb-4">
          A Curated Collection<br />of Objects.
        </h2>
        <p className="text-ink-black/60 max-w-lg mb-8">
          Timeless pieces, curious finds, and everyday classics — each selected for character, craft, and lasting appeal.
        </p>

        {/* Search and filter bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-black/40" />
            <input
              type="search"
              placeholder="Search objects..."
              value={state.searchQuery}
              onChange={(e) => dispatch({ type: 'SET_SEARCH_QUERY', query: e.target.value })}
              className="w-full pl-10 pr-10 py-2.5 bg-warm-cream border-2 border-ink-black/20 focus:border-ink-black font-body text-sm focus:outline-none transition-colors"
              aria-label="Search products"
            />
            {state.searchQuery && (
              <button
                onClick={() => dispatch({ type: 'SET_SEARCH_QUERY', query: '' })}
                className="absolute right-3 top-1/2 -translate-y-1/2"
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Mobile filter toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="sm:hidden flex items-center gap-2 btn-outline py-2.5"
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>

          {/* Sort */}
          <select
            value={state.sortBy}
            onChange={(e) => dispatch({ type: 'SET_SORT_BY', sortBy: e.target.value })}
            className="py-2.5 px-4 bg-warm-cream border-2 border-ink-black/20 focus:border-ink-black font-body text-sm focus:outline-none cursor-pointer"
            aria-label="Sort products"
          >
            <option value="featured">Featured</option>
            <option value="alphabetical">Alphabetical</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
        </div>

        {/* Category filters */}
        <div className={`${showFilters ? 'block' : 'hidden'} sm:block mb-8`}>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => dispatch({ type: 'SET_ACTIVE_CATEGORY', category: cat })}
                className={`px-4 py-2 text-sm font-semibold border-2 transition-all ${
                  state.activeCategory === cat
                    ? 'bg-ink-black text-warm-cream border-ink-black'
                    : 'bg-transparent text-ink-black border-ink-black/20 hover:border-ink-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-6">
          <p className="cat-number text-ink-black/50">
            {filteredProducts.length} OBJECT{filteredProducts.length !== 1 ? 'S' : ''} FOUND
          </p>
          {(state.searchQuery || state.activeCategory !== 'All Objects') && (
            <button
              onClick={() => {
                dispatch({ type: 'SET_SEARCH_QUERY', query: '' });
                dispatch({ type: 'SET_ACTIVE_CATEGORY', category: 'All Objects' });
              }}
              className="text-sm font-semibold text-burnt-orange hover:underline"
            >
              Clear all filters
            </button>
          )}
        </div>

        {/* Product grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProducts.map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-ink-black/5 flex items-center justify-center">
              <Search size={24} className="text-ink-black/30" />
            </div>
            <h3 className="font-display text-xl mb-2">No objects found</h3>
            <p className="text-ink-black/60 mb-4">Try adjusting your search or filters.</p>
            <button
              onClick={() => {
                dispatch({ type: 'SET_SEARCH_QUERY', query: '' });
                dispatch({ type: 'SET_ACTIVE_CATEGORY', category: 'All Objects' });
              }}
              className="btn-outline"
            >
              VIEW ALL OBJECTS
            </button>
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      {state.selectedProduct && <ProductDetailModal />}
    </section>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const { state, dispatch } = useStore();
  const isFavorite = state.favorites.includes(product.id);

  // Alternating card styles for visual variety
  const cardVariants = [
    'bg-warm-cream',
    'bg-aged-paper',
    'bg-warm-cream',
  ];
  const bgClass = cardVariants[index % 3];

  return (
    <article
      className={`product-card group ${bgClass} border-2 border-ink-black/10 hover:border-ink-black cursor-pointer`}
      style={{ animationDelay: `${index * 50}ms` }}
      onClick={() => dispatch({ type: 'SET_SELECTED_PRODUCT', product })}
    >
      {/* Image area */}
      <div className="relative aspect-[4/3] overflow-hidden border-b-2 border-ink-black/10">
        <div
          className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
          style={{ background: product.image }}
        />
        {/* Overlay pattern for depth */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle, #29251F 1px, transparent 1px)',
          backgroundSize: '6px 6px'
        }} />
        {/* Catalogue number */}
        <div className="absolute top-3 left-3 bg-warm-cream/90 px-2 py-0.5 cat-number backdrop-blur-sm">
          {product.catalogNumber}
        </div>
        {/* New badge */}
        {product.isNew && (
          <div className="absolute top-3 right-12 bg-burnt-orange text-warm-cream px-2 py-0.5 cat-number">
            NEW
          </div>
        )}
        {/* Featured badge */}
        {product.isFeatured && !product.isNew && (
          <div className="absolute top-3 right-12 bg-ink-black text-warm-cream px-2 py-0.5 cat-number">
            ★ PICK
          </div>
        )}
        {/* Favorite button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch({ type: 'TOGGLE_FAVORITE', productId: product.id });
          }}
          className="absolute bottom-3 right-3 w-9 h-9 bg-warm-cream/90 border border-ink-black/20 flex items-center justify-center hover:bg-ink-black hover:text-warm-cream transition-colors backdrop-blur-sm"
          aria-label={isFavorite ? 'Remove from saved items' : 'Save to favorites'}
        >
          <Heart size={16} fill={isFavorite ? '#C65C36' : 'none'} stroke={isFavorite ? '#C65C36' : 'currentColor'} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 lg:p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <span className="cat-number text-ink-black/40 block mb-1">{product.category}</span>
            <h3 className="font-display text-lg lg:text-xl leading-tight group-hover:text-burnt-orange transition-colors">{product.name}</h3>
          </div>
          <span className="font-mono text-sm font-bold whitespace-nowrap bg-ink-black/5 px-2 py-0.5">
            ${product.price}
          </span>
        </div>
        <p className="text-sm text-ink-black/60 leading-relaxed mb-3 line-clamp-2">
          {product.shortDesc}
        </p>
        {/* Color swatches */}
        {product.colors.length > 0 && (
          <div className="flex items-center gap-1.5 mb-3">
            {product.colors.map(color => (
              <div
                key={color}
                className="w-3 h-3 rounded-full border border-ink-black/20"
                style={{ backgroundColor: getColorHex(color) }}
                title={color}
              />
            ))}
          </div>
        )}
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-burnt-orange group-hover:underline">
            View Object →
          </span>
        </div>
      </div>
    </article>
  );
}

function getColorHex(name: string): string {
  const map: Record<string, string> = {
    'Burnt Orange': '#C65C36',
    'Mustard': '#D5A832',
    'Olive': '#626A43',
    'Dusty Blue': '#718A98',
    'Brick Red': '#973F32',
    'Warm Brown': '#735440',
    'Faded Pink': '#D7A4A0',
    'Ink Black': '#29251F',
    'Warm Cream': '#F8F0DE',
    'Aged Paper': '#F2E5C8',
  };
  return map[name] || '#999';
}

function ProductDetailModal() {
  const { state, dispatch } = useStore();
  const product = state.selectedProduct;
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dispatch({ type: 'SET_SELECTED_PRODUCT', product: null });
    };
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [dispatch]);

  if (!product) return null;

  const isFavorite = state.favorites.includes(product.id);
  const images = [product.image];

  return (
    <div className="fixed inset-0 z-[90] flex items-start justify-center overflow-y-auto" role="dialog" aria-modal="true" aria-label={`Product details: ${product.name}`}>
      <div className="absolute inset-0 bg-ink-black/60" onClick={() => dispatch({ type: 'SET_SELECTED_PRODUCT', product: null })} />
      <div className="relative bg-aged-paper border-2 border-ink-black w-full max-w-4xl mx-4 my-8 sm:my-16 shadow-xl">
        {/* Close button */}
        <button
          onClick={() => dispatch({ type: 'SET_SELECTED_PRODUCT', product: null })}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-warm-cream border-2 border-ink-black flex items-center justify-center hover:bg-ink-black hover:text-warm-cream transition-colors"
          aria-label="Close product details"
        >
          <X size={20} />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Image section */}
          <div className="relative">
            <div className="aspect-square border-b-2 md:border-b-0 md:border-r-2 border-ink-black/10 relative overflow-hidden">
              <div
                className="w-full h-full"
                style={{ background: images[currentImage] }}
              />
              {/* Subtle overlay pattern */}
              <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: 'radial-gradient(circle, #29251F 1px, transparent 1px)',
                backgroundSize: '8px 8px'
              }} />
            </div>
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                <button
                  onClick={() => setCurrentImage((currentImage - 1 + images.length) % images.length)}
                  className="w-8 h-8 bg-warm-cream border border-ink-black flex items-center justify-center"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={() => setCurrentImage((currentImage + 1) % images.length)}
                  className="w-8 h-8 bg-warm-cream border border-ink-black flex items-center justify-center"
                  aria-label="Next image"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
            <div className="absolute top-4 left-4 bg-warm-cream/90 px-2 py-1 cat-number">
              {product.catalogNumber}
            </div>
          </div>

          {/* Details section */}
          <div className="p-6 lg:p-8 overflow-y-auto max-h-[80vh]">
            <span className="cat-number text-burnt-orange block mb-2">{product.category}</span>
            <h2 className="font-display text-2xl lg:text-3xl mb-3">{product.name}</h2>
            <p className="text-2xl font-mono font-bold mb-4">${product.price}</p>
            
            <p className="text-ink-black/70 leading-relaxed mb-6">{product.description}</p>

            {/* Details */}
            <div className="border-t border-ink-black/10 pt-4 mb-6 space-y-2">
              {product.material && (
                <div className="flex gap-2 text-sm">
                  <span className="cat-number text-ink-black/40 w-24 shrink-0">MATERIAL</span>
                  <span>{product.material}</span>
                </div>
              )}
              {product.dimensions && (
                <div className="flex gap-2 text-sm">
                  <span className="cat-number text-ink-black/40 w-24 shrink-0">SIZE</span>
                  <span>{product.dimensions}</span>
                </div>
              )}
              <div className="flex gap-2 text-sm">
                <span className="cat-number text-ink-black/40 w-24 shrink-0">STATUS</span>
                <span className={product.inStock ? 'text-olive font-semibold' : 'text-brick font-semibold'}>
                  {product.inStock ? 'In Stock' : 'Unavailable'}
                </span>
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-semibold">QTY</span>
              <div className="flex items-center border-2 border-ink-black">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-ink-black/5"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="w-10 h-10 flex items-center justify-center font-mono font-bold border-x-2 border-ink-black">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-ink-black/5"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  if (product.inStock) {
                    for (let i = 0; i < quantity; i++) {
                      dispatch({ type: 'ADD_TO_CART', product });
                    }
                    dispatch({ type: 'SET_CART_OPEN', isOpen: true });
                  }
                }}
                disabled={!product.inStock}
                className="btn-retro flex-1 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ShoppingBag size={16} />
                {product.inStock ? 'ADD TO BAG' : 'UNAVAILABLE'}
              </button>
              <button
                onClick={() => dispatch({ type: 'TOGGLE_FAVORITE', productId: product.id })}
                className="btn-outline flex items-center justify-center gap-2"
                aria-label={isFavorite ? 'Remove from saved items' : 'Save to favorites'}
              >
                <Heart size={16} fill={isFavorite ? '#C65C36' : 'none'} stroke={isFavorite ? '#C65C36' : 'currentColor'} />
                {isFavorite ? 'SAVED' : 'SAVE'}
              </button>
            </div>

            {/* Tags */}
            <div className="mt-6 pt-4 border-t border-ink-black/10">
              <div className="flex flex-wrap gap-2">
                {product.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 bg-ink-black/5 border border-ink-black/10 cat-number">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
