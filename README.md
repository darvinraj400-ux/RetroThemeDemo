# RETRO GOODS

> *Good things never go out of style.*

A curated retro-vintage marketplace celebrating timeless objects, nostalgic design, curious finds, and everyday classics. Built as a fully functional, responsive e-commerce demonstration with a distinctive editorial aesthetic inspired by mid-century product design, 1970s print culture, and vintage catalogues.

![RETRO GOODS](https://image.qwenlm.ai/generated-images/8daf762b-7a12-46bc-90d6-a9ebc5a680d0/_result.png)

---

## ✨ Features

### 🛍️ Marketplace
- **18 curated products** across 8 categories (Home Objects, Lighting, Print & Paper, Sound & Culture, Kitchen & Tabletop, Accessories, Collectibles)
- **Real product photography** with AI-generated retro-inspired imagery
- **Product detail modals** with full descriptions, materials, dimensions, and stock status
- **Quantity selection** and multi-item cart management

### 🔍 Discovery
- **Live search** across product names, descriptions, categories, and tags
- **Category filtering** with visual feedback
- **Sorting options** (Featured, Alphabetical, Price Low/High, Newest)
- **Combined filters** that work together seamlessly

### ❤️ Personal Archive
- **Save favorite items** with persistent local storage
- **Dedicated favorites view** with quick actions (view, add to bag, remove)
- **Synchronized state** across all views

### 🛒 Shopping Bag
- **Slide-out cart drawer** with full item management
- **Quantity controls** with proper validation
- **Live subtotal calculation**
- **Persistent cart** via localStorage
- **Demo checkout** (clearly labeled as demonstration — no real payment processing)

### 🎨 Find Your Retro Era
- **Interactive 4-question quiz** that adapts to user answers
- **Deterministic results** based on responses (not random)
- **Personalized product recommendations**
- **Direct navigation** to matched collections

### 📰 Journal
- **6 editorial articles** exploring design, culture, and collecting
- **Expandable content** with rich typography
- **Reading time estimates**
- **Category tagging**

### 📬 Communication
- **Newsletter signup** (demonstration form with validation)
- **Contact form** with proper labels and validation
- **Honest disclosure** that no real backend is connected

---

## 🎨 Design System

### Color Palette
Inspired by aged paper, faded posters, enamel objects, and vintage print inks:

| Token | Hex | Usage |
|-------|-----|-------|
| Aged Paper | `#F2E5C8` | Primary background |
| Warm Cream | `#F8F0DE` | Secondary background, cards |
| Ink Black | `#29251F` | Text, borders, structure |
| Burnt Orange | `#C65C36` | Signature accent, CTAs |
| Mustard Yellow | `#D5A832` | Secondary accent |
| Olive Green | `#626A43` | Supporting tone |
| Dusty Blue | `#718A98` | Supporting tone |
| Brick Red | `#973F32` | Supporting tone |
| Warm Brown | `#735440` | Supporting tone |
| Faded Pink | `#D7A4A0` | Supporting tone |

### Typography
- **Display:** DM Serif Display — bold retro serif for headlines
- **Body:** Inter — clean sans-serif for UI and descriptions
- **Mono:** Space Mono — catalogue numbers, metadata, prices

### Graphic Motifs
- Paper-like backgrounds with subtle texture
- Fine ink borders and strong outlines
- Catalogue numbers and vintage stamps
- Halftone-inspired patterns
- Starburst shapes and concentric circles
- Editorial section markers with orange rule lines

---

## 🛠️ Tech Stack

- **React 18** — UI library
- **TypeScript** — Type safety
- **Vite** — Build tool and dev server
- **Tailwind CSS v4** — Utility-first styling
- **Lucide React** — Icon system
- **Framer Motion** — (available for animations)
- **React Router** — (available for routing)

---

## 📁 Project Structure

```
src/
├── App.tsx                    # Main app with BackToTop component
├── main.tsx                   # Entry point
├── index.css                  # Global styles, design tokens, utilities
├── store.tsx                  # State management (Context + useReducer)
├── data.ts                    # Products, collections, articles, config
└── components/
    ├── Header.tsx             # Announcement bar, nav, mobile menu, search
    ├── Hero.tsx               # Hero section + editorial ticker
    ├── Archive.tsx            # Product grid, filters, detail modal
    ├── ShoppingBag.tsx        # Cart drawer with full management
    ├── RetroEra.tsx           # Interactive discovery quiz
    └── Sections.tsx           # Brand story, collections, favorites,
                               # journal, newsletter, contact, footer
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd retro-goods

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Type check
npm run typecheck
```

The dev server runs at `http://localhost:3000`.

---

## 🎯 Key Interactions

### Navigation Flow
```
Discover RETRO GOODS
    ↓
Explore the archive (search, filter, sort)
    ↓
Find a distinctive object (view details)
    ↓
Save to favorites OR add to bag
    ↓
Continue exploring OR proceed to checkout (demo)
```

### State Management
- **Cart** and **favorites** persist in `localStorage`
- Data is validated on load to handle schema changes
- Graceful fallbacks when storage is unavailable
- Body scroll locking for modals and drawers

### Accessibility
- Skip-to-content link
- Semantic HTML with proper heading hierarchy
- Keyboard navigation throughout
- Visible focus states
- ARIA labels on icon buttons
- Escape key dismisses modals
- `prefers-reduced-motion` support
- Screen reader announcements for dynamic content

---

## 🖼️ Imagery

All product photography is AI-generated to match the retro-vintage aesthetic. Images are hosted on the generation service and reused across similar products to maintain visual consistency while keeping the bundle lean.

**Image categories:**
- **Hero:** Curated vintage still life composition
- **Lighting:** Sculptural mid-century lamps
- **Sound & Culture:** Wooden radios, turntables, vinyl crates
- **Home Objects:** Geometric clocks, ceramic vases
- **Kitchen & Tabletop:** Hand-thrown mugs, enamelware
- **Print & Paper:** Screen prints, notebooks, posters
- **Interiors:** Warm retro-inspired living spaces

---

## ⚠️ Demonstration Notice

This is a **demonstration project** for a fictional brand. Please note:

- ❌ No real products are sold
- ❌ No payment processing is connected
- ❌ No real user accounts or data collection
- ❌ Newsletter and contact forms don't send actual messages
- ❌ Product descriptions are sample content
- ❌ No verified product provenance or historical claims

The shopping bag and checkout flows are labeled as demonstrations to maintain honesty about capabilities.

---

## 🎨 Creative Direction

The visual identity draws from:
- Mid-century modern product design
- 1960s–70s advertising and print culture
- Vintage department-store catalogues
- Old record sleeves and music magazines
- Retro packaging and product labels
- Screen-printed posters
- Analog photography aesthetics
- Collectible design objects

**The goal:** Make the past feel alive, desirable, and relevant to the present — not a costume party for old design trends.

---

## 📱 Responsive Design

Tested across breakpoints:
- 320px — 430px (mobile phones)
- 768px (tablets)
- 1024px — 1440px+ (desktops)

Mobile-first approach with adaptive layouts, touch-friendly targets, and optimized typography scaling.

---

## 📄 License

This project is provided as-is for demonstration and educational purposes.

---

## 🙏 Acknowledgments

- **Fonts:** Google Fonts (DM Serif Display, Inter, Space Mono)
- **Icons:** Lucide React
- **Images:** AI-generated photography
- **Inspiration:** Decades of thoughtful design across print, product, and interior disciplines

---

<div align="center">

**RETRO GOODS** · *Good things never go out of style.*

Made with intention · Built to inspire · Keep good things

</div>
