import { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useStore } from '../store';

export function ShoppingBagDrawer() {
  const { state, dispatch, cartCount, cartTotal } = useStore();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && state.isCartOpen) {
        dispatch({ type: 'SET_CART_OPEN', isOpen: false });
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [state.isCartOpen, dispatch]);

  if (!state.isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[80]" role="dialog" aria-modal="true" aria-label="Shopping bag">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink-black/50"
        onClick={() => dispatch({ type: 'SET_CART_OPEN', isOpen: false })}
      />

      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 w-full max-w-md bg-aged-paper border-l-2 border-ink-black flex flex-col shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b-2 border-ink-black/10">
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} />
            <h2 className="font-display text-xl">Your Bag</h2>
            <span className="cat-number text-ink-black/50">({cartCount})</span>
          </div>
          <button
            onClick={() => dispatch({ type: 'SET_CART_OPEN', isOpen: false })}
            className="w-10 h-10 flex items-center justify-center border-2 border-ink-black/20 hover:border-ink-black hover:bg-ink-black hover:text-warm-cream transition-all"
            aria-label="Close shopping bag"
          >
            <X size={18} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {state.cart.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-ink-black/5 flex items-center justify-center">
                <ShoppingBag size={24} className="text-ink-black/30" />
              </div>
              <h3 className="font-display text-lg mb-2">Your bag is empty</h3>
              <p className="text-sm text-ink-black/60 mb-4">
                Explore the archive and add some character to your collection.
              </p>
              <button
                onClick={() => {
                  dispatch({ type: 'SET_CART_OPEN', isOpen: false });
                  document.getElementById('archive')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-outline text-sm"
              >
                BROWSE THE ARCHIVE
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {state.cart.map(item => (
                <div key={item.product.id} className="flex gap-4 p-3 bg-warm-cream border border-ink-black/10">
                  {/* Thumbnail */}
                  <div
                    className="w-16 h-16 shrink-0 border border-ink-black/10"
                    style={{ background: item.product.image }}
                  />
                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm truncate">{item.product.name}</h4>
                    <p className="cat-number text-ink-black/40">{item.product.category}</p>
                    <p className="font-mono font-bold text-sm mt-1">${item.product.price}</p>
                  </div>
                  {/* Quantity & remove */}
                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => dispatch({ type: 'REMOVE_FROM_CART', productId: item.product.id })}
                      className="text-ink-black/40 hover:text-brick transition-colors"
                      aria-label={`Remove ${item.product.name} from bag`}
                    >
                      <Trash2 size={14} />
                    </button>
                    <div className="flex items-center border border-ink-black/20">
                      <button
                        onClick={() => {
                          if (item.quantity <= 1) {
                            dispatch({ type: 'REMOVE_FROM_CART', productId: item.product.id });
                          } else {
                            dispatch({ type: 'UPDATE_QUANTITY', productId: item.product.id, quantity: item.quantity - 1 });
                          }
                        }}
                        className="w-7 h-7 flex items-center justify-center hover:bg-ink-black/5"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="w-7 h-7 flex items-center justify-center text-xs font-mono font-bold border-x border-ink-black/20">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => dispatch({ type: 'UPDATE_QUANTITY', productId: item.product.id, quantity: item.quantity + 1 })}
                        className="w-7 h-7 flex items-center justify-center hover:bg-ink-black/5"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {state.cart.length > 0 && (
          <div className="border-t-2 border-ink-black/10 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-semibold">Subtotal</span>
              <span className="font-mono text-xl font-bold">${cartTotal}</span>
            </div>
            <p className="text-xs text-ink-black/50 cat-number">
              DEMONSTRATION — NO REAL PAYMENT WILL BE PROCESSED
            </p>
            <button
              onClick={() => {
                alert('This is a demonstration. No real checkout or payment processing is connected.');
              }}
              className="btn-retro w-full text-center"
            >
              PROCEED TO CHECKOUT →
            </button>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  dispatch({ type: 'SET_CART_OPEN', isOpen: false });
                  document.getElementById('archive')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-outline flex-1 text-center text-xs py-2"
              >
                CONTINUE BROWSING
              </button>
              <button
                onClick={() => dispatch({ type: 'CLEAR_CART' })}
                className="btn-outline flex-1 text-center text-xs py-2 text-brick border-brick hover:bg-brick hover:text-warm-cream"
              >
                CLEAR BAG
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
