import React, { createContext, useContext, useReducer, useEffect, useCallback } from 'react';
import { Product, products } from './data';

// Types
interface CartItem {
  product: Product;
  quantity: number;
}

interface StoreState {
  cart: CartItem[];
  favorites: string[];
  isCartOpen: boolean;
  isMobileMenuOpen: boolean;
  selectedProduct: Product | null;
  searchQuery: string;
  activeCategory: string;
  sortBy: string;
}

type Action =
  | { type: 'ADD_TO_CART'; product: Product }
  | { type: 'REMOVE_FROM_CART'; productId: string }
  | { type: 'UPDATE_QUANTITY'; productId: string; quantity: number }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_FAVORITE'; productId: string }
  | { type: 'CLEAR_FAVORITES' }
  | { type: 'SET_CART_OPEN'; isOpen: boolean }
  | { type: 'SET_MOBILE_MENU_OPEN'; isOpen: boolean }
  | { type: 'SET_SELECTED_PRODUCT'; product: Product | null }
  | { type: 'SET_SEARCH_QUERY'; query: string }
  | { type: 'SET_ACTIVE_CATEGORY'; category: string }
  | { type: 'SET_SORT_BY'; sortBy: string };

// Initial state
const initialState: StoreState = {
  cart: [],
  favorites: [],
  isCartOpen: false,
  isMobileMenuOpen: false,
  selectedProduct: null,
  searchQuery: '',
  activeCategory: 'All Objects',
  sortBy: 'featured',
};

// Persistence helpers
function loadFromStorage<T>(key: string, fallback: T): T {
  try {
    const stored = localStorage.getItem(key);
    if (stored) {
      const parsed = JSON.parse(stored);
      return parsed as T;
    }
  } catch {
    // Ignore storage errors
  }
  return fallback;
}

function saveToStorage(key: string, value: unknown): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Ignore storage errors
  }
}

// Reducer
function reducer(state: StoreState, action: Action): StoreState {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existing = state.cart.find(item => item.product.id === action.product.id);
      if (existing) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.product.id === action.product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { ...state, cart: [...state.cart, { product: action.product, quantity: 1 }] };
    }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.product.id !== action.productId),
      };
    case 'UPDATE_QUANTITY': {
      if (action.quantity < 1) return state;
      return {
        ...state,
        cart: state.cart.map(item =>
          item.product.id === action.productId
            ? { ...item, quantity: action.quantity }
            : item
        ),
      };
    }
    case 'CLEAR_CART':
      return { ...state, cart: [] };
    case 'TOGGLE_FAVORITE': {
      const isFav = state.favorites.includes(action.productId);
      const newFavs = isFav
        ? state.favorites.filter(id => id !== action.productId)
        : [...state.favorites, action.productId];
      return { ...state, favorites: newFavs };
    }
    case 'CLEAR_FAVORITES':
      return { ...state, favorites: [] };
    case 'SET_CART_OPEN':
      return { ...state, isCartOpen: action.isOpen };
    case 'SET_MOBILE_MENU_OPEN':
      return { ...state, isMobileMenuOpen: action.isOpen };
    case 'SET_SELECTED_PRODUCT':
      return { ...state, selectedProduct: action.product };
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.query };
    case 'SET_ACTIVE_CATEGORY':
      return { ...state, activeCategory: action.category };
    case 'SET_SORT_BY':
      return { ...state, sortBy: action.sortBy };
    default:
      return state;
  }
}

// Context
interface StoreContextType {
  state: StoreState;
  dispatch: React.Dispatch<Action>;
  cartCount: number;
  cartTotal: number;
  filteredProducts: Product[];
  favoriteProducts: Product[];
}

const StoreContext = createContext<StoreContextType | null>(null);

// Provider
export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState, (init) => {
    const savedCart = loadFromStorage<CartItem[]>('retro-cart', init.cart);
    const savedFavs = loadFromStorage<string[]>('retro-favorites', init.favorites);
    // Validate saved data
    const validCart = savedCart.filter(item => 
      products.some(p => p.id === item.product.id)
    );
    const validFavs = savedFavs.filter(id => 
      products.some(p => p.id === id)
    );
    return { ...init, cart: validCart, favorites: validFavs };
  });

  // Persist cart and favorites
  useEffect(() => {
    saveToStorage('retro-cart', state.cart);
  }, [state.cart]);

  useEffect(() => {
    saveToStorage('retro-favorites', state.favorites);
  }, [state.favorites]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (state.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [state.isMobileMenuOpen]);

  const cartCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = state.cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const filteredProducts = useCallback(() => {
    let result = [...products];
    
    // Filter by category
    if (state.activeCategory !== 'All Objects') {
      result = result.filter(p => p.category === state.activeCategory);
    }
    
    // Filter by search
    if (state.searchQuery.trim()) {
      const q = state.searchQuery.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q))
      );
    }
    
    // Sort
    switch (state.sortBy) {
      case 'alphabetical':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default: // featured
        result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    }
    
    return result;
  }, [state.activeCategory, state.searchQuery, state.sortBy])();

  const favoriteProducts = products.filter(p => state.favorites.includes(p.id));

  return (
    <StoreContext.Provider value={{
      state,
      dispatch,
      cartCount,
      cartTotal,
      filteredProducts,
      favoriteProducts,
    }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) throw new Error('useStore must be used within StoreProvider');
  return context;
}
