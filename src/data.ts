export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  shortDesc: string;
  material?: string;
  dimensions?: string;
  inStock: boolean;
  tags: string[];
  colors: string[];
  isNew?: boolean;
  isFeatured?: boolean;
  image: string;
  catalogNumber: string;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  categories: string[];
  color: string;
}

export interface JournalArticle {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  content: string;
  tags: string[];
}

export const categories = [
  'All Objects',
  'Home Objects',
  'Lighting',
  'Print & Paper',
  'Sound & Culture',
  'Kitchen & Tabletop',
  'Accessories',
  'Collectibles',
];

// Image URLs - reusing generated images across similar products
const IMG = {
  lamp: 'https://image.qwenlm.ai/generated-images/b181ab1a-ece1-4e87-8543-f4e88b1c39a0/_result.png',
  radio: 'https://image.qwenlm.ai/generated-images/163166c2-9edd-4e95-8f1e-e624f6e88ebe/_result.png',
  clock: 'https://image.qwenlm.ai/generated-images/decd5003-fc84-441b-ac50-3524e780b98d/_result.png',
  mug: 'https://image.qwenlm.ai/generated-images/c5e926cb-5720-4589-a309-3416473d277f/_result.png',
  crate: 'https://image.qwenlm.ai/generated-images/8fa88bf0-7e11-4e12-b149-f1f12c684590/_result.png',
  vase: 'https://image.qwenlm.ai/generated-images/870edf13-36ec-4220-bef7-d8e0568e259d/_result.png',
  turntable: 'https://image.qwenlm.ai/generated-images/e967592b-e68b-4401-8917-ed2d20f3f9e4/_result.png',
  prints: 'https://image.qwenlm.ai/generated-images/ed2732ba-31af-440a-8222-db95bb387ec9/_result.png',
  interior: 'https://image.qwenlm.ai/generated-images/ff4bf0ff-eac8-4992-9577-a5bd3f546fc7/_result.png',
  hero: 'https://image.qwenlm.ai/generated-images/8daf762b-7a12-46bc-90d6-a9ebc5a680d0/_result.png',
};

const productImages: Record<string, string> = {
  // Lighting
  'sunset-lamp': IMG.lamp,
  'pendant-light': IMG.lamp,
  'table-lamp': IMG.lamp,
  // Sound & Culture
  'portable-radio': IMG.radio,
  'vinyl-crate': IMG.crate,
  'table-turntable': IMG.turntable,
  // Home Objects
  'orbit-clock': IMG.clock,
  'ceramic-vase': IMG.vase,
  'desk-organizer': IMG.interior,
  // Kitchen & Tabletop
  'sunday-mug': IMG.mug,
  'enamel-bowl': IMG.mug,
  // Print & Paper
  'archive-poster': IMG.prints,
  'studio-notebook': IMG.prints,
  'screen-print': IMG.prints,
  'risograph-prints': IMG.prints,
  'wall-calendar': IMG.prints,
  // Accessories
  'retro-camera': IMG.crate,
  'field-bag': IMG.crate,
};

// Hero and collection images
export const heroImage = IMG.hero;
export const interiorImage = IMG.interior;
export const printPaperImage = IMG.prints;

export const products: Product[] = [
  {
    id: 'sunset-lamp',
    name: 'Sunset Lamp',
    category: 'Lighting',
    price: 128,
    description: 'A sculptural, warm-toned table lamp inspired by retro lighting design. Casts a warm, ambient glow that transforms any room into a welcoming space. The organic silhouette references mid-century industrial design while feeling entirely contemporary.',
    shortDesc: 'Sculptural warm-toned lamp with retro character.',
    material: 'Powder-coated steel, linen shade',
    dimensions: 'H 42cm × Ø 28cm',
    inStock: true,
    tags: ['lamp', 'lighting', 'warm', 'sculptural', 'mid-century'],
    colors: ['Burnt Orange', 'Mustard'],
    isFeatured: true,
    image: productImages['sunset-lamp'],
    catalogNumber: 'RG-LT-001',
  },
  {
    id: 'archive-poster',
    name: 'Archive Poster',
    category: 'Print & Paper',
    price: 45,
    description: 'A bold graphic print with vintage editorial character. Screen-printed on heavyweight paper using traditional techniques. Each poster carries the spirit of mid-century advertising design reinterpreted for modern walls.',
    shortDesc: 'Bold graphic print with vintage editorial character.',
    material: '300gsm cotton rag paper, screen-printed',
    dimensions: '50 × 70cm',
    inStock: true,
    tags: ['poster', 'print', 'graphic', 'wall art', 'screen-print'],
    colors: ['Dusty Blue', 'Ink Black'],
    isNew: true,
    image: productImages['archive-poster'],
    catalogNumber: 'RG-PP-002',
  },
  {
    id: 'portable-radio',
    name: 'Portable Radio',
    category: 'Sound & Culture',
    price: 195,
    description: 'A compact retro-inspired radio with modern internals. The warm wooden cabinet and analog tuning dial evoke decades of listening culture while delivering clear, rich sound. A functional object that doubles as a statement piece.',
    shortDesc: 'Compact retro radio with warm wooden cabinet.',
    material: 'Walnut veneer, fabric grille, ABS internals',
    dimensions: 'W 24cm × H 15cm × D 10cm',
    inStock: true,
    tags: ['radio', 'audio', 'wood', 'analog', 'listening'],
    colors: ['Warm Brown', 'Olive'],
    isFeatured: true,
    image: productImages['portable-radio'],
    catalogNumber: 'RG-SC-003',
  },
  {
    id: 'orbit-clock',
    name: 'Orbit Clock',
    category: 'Home Objects',
    price: 89,
    description: 'A geometric wall clock influenced by mid-century interiors. Clean lines and bold color blocking make this a functional art piece. Silent quartz movement ensures no ticking disturbance.',
    shortDesc: 'Geometric wall clock with mid-century influence.',
    material: 'Powder-coated steel, silent quartz movement',
    dimensions: 'Ø 30cm',
    inStock: true,
    tags: ['clock', 'wall', 'geometric', 'mid-century', 'timepiece'],
    colors: ['Brick Red', 'Burnt Orange', 'Mustard'],
    image: productImages['orbit-clock'],
    catalogNumber: 'RG-HO-004',
  },
  {
    id: 'sunday-mug',
    name: 'Sunday Mug',
    category: 'Kitchen & Tabletop',
    price: 32,
    description: 'A ceramic mug with warm colors and a classic silhouette. Hand-thrown and glazed in our studio, each piece carries subtle variations that make it uniquely yours. The generous 350ml capacity is perfect for slow morning rituals.',
    shortDesc: 'Hand-thrown ceramic mug in warm tones.',
    material: 'Stoneware ceramic, food-safe glaze',
    dimensions: 'H 9.5cm × Ø 8.5cm, 350ml',
    inStock: true,
    tags: ['mug', 'ceramic', 'kitchen', 'handmade', 'pottery'],
    colors: ['Faded Pink', 'Warm Cream'],
    isNew: true,
    image: productImages['sunday-mug'],
    catalogNumber: 'RG-KT-005',
  },
  {
    id: 'studio-notebook',
    name: 'Studio Notebook',
    category: 'Print & Paper',
    price: 24,
    description: 'A print-inspired notebook with a durable, tactile cover. Contains 160 pages of cream-colored dot-grid paper, perfect for sketching, note-taking, or journaling. The cover features a debossed geometric pattern.',
    shortDesc: 'Tactile notebook with debossed geometric cover.',
    material: 'Recycled card cover, 100gsm dot-grid paper',
    dimensions: 'A5 (14.8 × 21cm)',
    inStock: true,
    tags: ['notebook', 'paper', 'stationery', 'journal', 'sketch'],
    colors: ['Warm Brown', 'Aged Paper'],
    image: productImages['studio-notebook'],
    catalogNumber: 'RG-PP-006',
  },
  {
    id: 'vinyl-crate',
    name: 'Vinyl Storage Crate',
    category: 'Sound & Culture',
    price: 68,
    description: 'A practical storage piece designed for record collections. Solid construction with a warm wood finish holds up to 80 LPs. The open-front design allows easy browsing while the reinforced corners ensure lasting durability.',
    shortDesc: 'Solid wood crate for record collections.',
    material: 'Solid pine, brass corner reinforcements',
    dimensions: 'W 34cm × H 34cm × D 16cm',
    inStock: true,
    tags: ['vinyl', 'storage', 'records', 'wood', 'music'],
    colors: ['Warm Brown', 'Ink Black'],
    isFeatured: true,
    image: productImages['vinyl-crate'],
    catalogNumber: 'RG-SC-007',
  },
  {
    id: 'desk-organizer',
    name: 'Retro Desk Organizer',
    category: 'Accessories',
    price: 54,
    description: 'An organized workspace accessory with vintage-inspired form. Multiple compartments keep pens, cards, and small items tidy. The olive green finish brings warmth and character to any desk setup.',
    shortDesc: 'Vintage-inspired desk organizer in olive green.',
    material: 'Ceramic with matte glaze, cork base',
    dimensions: 'W 20cm × H 12cm × D 10cm',
    inStock: true,
    tags: ['desk', 'organizer', 'office', 'ceramic', 'workspace'],
    colors: ['Olive', 'Warm Cream'],
    image: productImages['desk-organizer'],
    catalogNumber: 'RG-AC-008',
  },
  {
    id: 'pendant-light',
    name: 'Pendant Light',
    category: 'Lighting',
    price: 165,
    description: 'A statement pendant light with a spun metal shade in warm mustard. The generous proportions and industrial-inspired form make it ideal above dining tables or kitchen islands. Includes adjustable cable length.',
    shortDesc: 'Spun metal pendant in warm mustard.',
    material: 'Spun aluminum, fabric-covered cable',
    dimensions: 'Ø 40cm, cable length adjustable to 200cm',
    inStock: true,
    tags: ['pendant', 'lighting', 'industrial', 'dining', 'metal'],
    colors: ['Mustard', 'Ink Black'],
    image: productImages['pendant-light'],
    catalogNumber: 'RG-LT-009',
  },
  {
    id: 'ceramic-vase',
    name: 'Ceramic Vase',
    category: 'Home Objects',
    price: 72,
    description: 'A hand-thrown ceramic vase with an organic silhouette and dusty blue glaze. Equally beautiful holding a single stem or standing alone as a sculptural object. Each piece shows subtle variations from the making process.',
    shortDesc: 'Hand-thrown vase with dusty blue glaze.',
    material: 'Stoneware ceramic, reactive glaze',
    dimensions: 'H 22cm × Ø 14cm',
    inStock: true,
    tags: ['vase', 'ceramic', 'flowers', 'handmade', 'sculptural'],
    colors: ['Dusty Blue', 'Faded Pink'],
    isNew: true,
    image: productImages['ceramic-vase'],
    catalogNumber: 'RG-HO-010',
  },
  {
    id: 'retro-camera',
    name: 'Retro Camera Strap',
    category: 'Accessories',
    price: 48,
    description: 'A handcrafted camera strap in vegetable-tanned leather with brass hardware. The wide, comfortable design distributes weight evenly while developing a beautiful patina with use. Compatible with all standard camera lugs.',
    shortDesc: 'Handcrafted leather camera strap with brass.',
    material: 'Vegetable-tanned leather, solid brass hardware',
    dimensions: 'W 2.5cm × L 110cm (adjustable)',
    inStock: true,
    tags: ['camera', 'leather', 'strap', 'handmade', 'brass'],
    colors: ['Warm Brown', 'Ink Black'],
    image: productImages['retro-camera'],
    catalogNumber: 'RG-AC-011',
  },
  {
    id: 'screen-print',
    name: 'Screen Print — Geometry No.3',
    category: 'Print & Paper',
    price: 58,
    description: 'A limited edition screen print exploring geometric composition in three colors. Printed by hand on archival paper using traditional screen-printing methods. Each print is numbered and signed by the artist.',
    shortDesc: 'Limited edition three-color geometric screen print.',
    material: 'Archival 280gsm paper, 3-color screen print',
    dimensions: '40 × 50cm, edition of 100',
    inStock: true,
    tags: ['print', 'screen-print', 'geometric', 'limited', 'art'],
    colors: ['Brick Red', 'Mustard', 'Olive'],
    image: productImages['screen-print'],
    catalogNumber: 'RG-PP-012',
  },
  {
    id: 'table-turntable',
    name: 'Table Turntable',
    category: 'Sound & Culture',
    price: 320,
    description: 'A belt-drive turntable with a warm walnut plinth and precision aluminum tonearm. Built-in phono preamp allows connection to any amplifier or active speakers. The retro aesthetic meets modern audiophile performance.',
    shortDesc: 'Belt-drive turntable with walnut plinth.',
    material: 'Walnut plinth, aluminum tonearm, rubber belt drive',
    dimensions: 'W 45cm × H 14cm × D 36cm',
    inStock: true,
    tags: ['turntable', 'vinyl', 'audio', 'walnut', 'hi-fi'],
    colors: ['Warm Brown', 'Ink Black'],
    isFeatured: true,
    image: productImages['table-turntable'],
    catalogNumber: 'RG-SC-013',
  },
  {
    id: 'enamel-bowl',
    name: 'Enamel Bowl',
    category: 'Kitchen & Tabletop',
    price: 38,
    description: 'A sturdy enamel bowl with a classic rolled rim and dusty blue exterior. Equally at home mixing batter, serving salad, or holding fruit on the counter. The speckled white interior references decades of kitchen tradition.',
    shortDesc: 'Classic enamel bowl with rolled rim.',
    material: 'Steel core, porcelain enamel coating',
    dimensions: 'Ø 26cm × H 11cm',
    inStock: true,
    tags: ['bowl', 'enamel', 'kitchen', 'serving', 'classic'],
    colors: ['Dusty Blue', 'Warm Cream'],
    image: productImages['enamel-bowl'],
    catalogNumber: 'RG-KT-014',
  },
  {
    id: 'field-bag',
    name: 'Field Bag',
    category: 'Accessories',
    price: 145,
    description: 'A versatile canvas and leather messenger bag with vintage-inspired proportions. Multiple pockets and a padded laptop sleeve make it practical for daily carry. The waxed canvas develops character with age and use.',
    shortDesc: 'Waxed canvas messenger with leather details.',
    material: 'Waxed cotton canvas, vegetable-tanned leather, brass buckles',
    dimensions: 'W 38cm × H 28cm × D 12cm',
    inStock: true,
    tags: ['bag', 'canvas', 'leather', 'messenger', 'everyday'],
    colors: ['Olive', 'Warm Brown'],
    image: productImages['field-bag'],
    catalogNumber: 'RG-AC-015',
  },
  {
    id: 'table-lamp',
    name: 'Mushroom Table Lamp',
    category: 'Lighting',
    price: 112,
    description: 'A sculptural table lamp with a rounded opal glass shade and warm brass base. The soft, diffused light creates an inviting atmosphere. A modern reinterpretation of classic 1970s mushroom lamp design.',
    shortDesc: 'Opal glass mushroom lamp with brass base.',
    material: 'Blown opal glass, brushed brass base',
    dimensions: 'H 32cm × Ø 22cm',
    inStock: true,
    tags: ['lamp', 'glass', 'brass', 'mushroom', 'ambient'],
    colors: ['Faded Pink', 'Mustard'],
    image: productImages['table-lamp'],
    catalogNumber: 'RG-LT-016',
  },
  {
    id: 'risograph-prints',
    name: 'Risograph Print Set',
    category: 'Print & Paper',
    price: 36,
    description: 'A set of three risograph prints exploring color and form. Each print uses two spot colors layered to create rich, textured results. The imperfect registration adds to the handcrafted character.',
    shortDesc: 'Set of three two-color risograph prints.',
    material: '150gsm paper, risograph printed',
    dimensions: '21 × 29.7cm each, set of 3',
    inStock: true,
    tags: ['print', 'risograph', 'color', 'set', 'art'],
    colors: ['Burnt Orange', 'Dusty Blue', 'Mustard'],
    isNew: true,
    image: productImages['risograph-prints'],
    catalogNumber: 'RG-PP-017',
  },
  {
    id: 'wall-calendar',
    name: 'Illustrated Wall Calendar',
    category: 'Collectibles',
    price: 28,
    description: 'A beautifully illustrated wall calendar featuring original artwork for each month. Printed on heavy stock with a wire binding for easy hanging. Each illustration celebrates everyday objects and seasonal moments.',
    shortDesc: '12-month illustrated calendar with original art.',
    material: '250gsm uncoated stock, wire-o binding',
    dimensions: '30 × 40cm (open: 30 × 20cm)',
    inStock: true,
    tags: ['calendar', 'illustration', 'wall', 'seasonal', 'paper'],
    colors: ['Brick Red', 'Aged Paper'],
    image: productImages['wall-calendar'],
    catalogNumber: 'RG-CL-018',
  },
];

export const collections: Collection[] = [
  {
    id: 'home-objects',
    name: 'Home Objects',
    description: 'Thoughtful pieces for warm, characterful interiors.',
    categories: ['Home Objects', 'Lighting'],
    color: '#C65C36',
  },
  {
    id: 'print-paper',
    name: 'Print & Paper',
    description: 'Posters, notebooks, printed goods, and expressive visual objects.',
    categories: ['Print & Paper'],
    color: '#D5A832',
  },
  {
    id: 'sound-culture',
    name: 'Sound & Culture',
    description: 'Objects inspired by music, analog media, and listening culture.',
    categories: ['Sound & Culture'],
    color: '#626A43',
  },
  {
    id: 'everyday-classics',
    name: 'Everyday Classics',
    description: 'Useful objects with distinctive shapes and enduring visual appeal.',
    categories: ['Kitchen & Tabletop', 'Accessories'],
    color: '#718A98',
  },
];

export const journalArticles: JournalArticle[] = [
  {
    id: 'why-designs-endure',
    title: 'Why Certain Designs Remain Appealing',
    category: 'Design',
    excerpt: 'Some objects seem to transcend their era. We explore what gives certain designs their lasting power and why we keep returning to them.',
    readTime: '5 min read',
    content: `Great design has a quality that resists the passage of time. It's not about following trends or chasing novelty — it's about getting something fundamentally right.

The objects we keep returning to share certain qualities: they're honest about their materials, clear about their purpose, and generous in their proportions. They don't shout for attention; they earn it through quiet competence.

Think of the Eames lounge chair, the Braun T3 radio, the Anglepoise lamp. These weren't designed to look timeless — they were designed to solve problems well. The timelessness came as a side effect of good thinking.

At Retro Goods, we're drawn to objects that carry this quality. Whether they were made last year or last century, they share a conviction that form and function should work together, that materials should be treated with respect, and that the things we live with should make daily life a little more pleasant.

The next time you find yourself attracted to an object, ask yourself: will this still feel right in ten years? If the answer is yes, you've probably found good design.`,
    tags: ['design', 'timeless', 'mid-century', 'philosophy'],
  },
  {
    id: 'color-in-interiors',
    title: 'How Color Shapes a Vintage-Inspired Interior',
    category: 'Interiors',
    excerpt: 'The right color palette can transform a space from merely furnished to genuinely characterful. Here\'s how to approach color with confidence.',
    readTime: '7 min read',
    content: `Color is perhaps the most powerful tool in interior design, yet it's often the one we approach with the most hesitation. We default to safe neutrals, worried that something bolder might feel overwhelming or dated.

But look at the best mid-century interiors and you'll find confidence with color. Burnt orange cushions against olive walls. Mustard lampshades casting warm light over dusty blue shelving. These combinations work because they're grounded in nature — these are earth tones, mineral tones, tones that have existed in the landscape for millennia.

The key principles are simple:

Start with one dominant color that you love. Let it appear in large surfaces — a wall, a rug, a curtain. Then add one or two supporting colors through smaller objects — a lamp, a vase, a stack of books. Finally, use a neutral to give the eye places to rest.

Don't be afraid of warmth. The vintage palette tends toward earthy, sun-baked tones rather than cool, clinical ones. This warmth is what makes retro-inspired spaces feel inviting rather than museum-like.

And remember: paint is cheap. If a color doesn't work, you can change it. The only real mistake is living with colors that don't make you feel at home.`,
    tags: ['color', 'interiors', 'palette', 'warm', 'decoration'],
  },
  {
    id: 'packaging-language',
    title: 'The Visual Language of Old Packaging',
    category: 'Visual Culture',
    excerpt: 'Before digital design, every product told its story through ink, paper, and typography. The lessons of vintage packaging remain remarkably relevant.',
    readTime: '6 min read',
    content: `Walk through any vintage market or flea fair and you'll find boxes, tins, labels, and wrappers that still communicate with remarkable clarity. These weren't designed by committees or focus groups — they were designed by craftspeople who understood that a package had to work on a shelf, in a hand, and in a kitchen cupboard.

The best vintage packaging shares several traits:

Typography does the heavy lifting. Before photography became cheap, type had to communicate everything — the product name, its qualities, its personality. Bold serifs, confident sans-serifs, and playful scripts each told you something different about what was inside.

Color was limited and intentional. Printing in multiple colors was expensive, so designers made each one count. A two-color label often communicates more clearly than a full-color modern equivalent.

Hierarchy is absolute. The most important information is largest. The brand name, the product type, the key benefit — each has its place and its size. There's no ambiguity about what you're looking at.

These principles haven't changed. Good packaging still needs to communicate quickly, honestly, and memorably. The tools have evolved, but the fundamentals of visual communication remain rooted in these old lessons.`,
    tags: ['packaging', 'typography', 'print', 'visual culture', 'design history'],
  },
  {
    id: 'record-collecting',
    title: 'A Beginner\'s Introduction to Record Collecting',
    category: 'Culture',
    excerpt: 'Vinyl isn\'t just a format — it\'s a way of engaging with music that rewards patience, curiosity, and a love of physical objects.',
    readTime: '8 min read',
    content: `Record collecting is having a moment, but its appeal goes deeper than nostalgia or trend. There's something genuinely rewarding about building a physical collection of music you love — about holding an album, reading the liner notes, and placing a record on a turntable with intention.

Getting started doesn't require a huge investment:

Begin with what you know. Buy records of albums you already love. The connection between the music and the object will make the experience richer.

Visit independent record shops. The staff usually know their stock intimately and can point you toward things you might enjoy. Second-hand bins are full of surprises at reasonable prices.

Invest in a decent turntable. You don't need audiophile equipment to start, but a properly set-up belt-drive turntable with a good cartridge will make your records sound their best.

Handle records with care. Hold them by the edges, keep them in their sleeves, store them upright. A well-cared-for record will last decades.

The joy of collecting isn't about completion — it's about discovery. Every record shop visit might yield a find you never expected. That's the magic of the format.`,
    tags: ['vinyl', 'records', 'music', 'collecting', 'turntable'],
  },
  {
    id: 'characterful-desk',
    title: 'How to Create a More Characterful Desk',
    category: 'Living',
    excerpt: 'Your workspace shapes your day. A few considered objects can transform a functional desk into a place that inspires focused, creative work.',
    readTime: '4 min read',
    content: `Most desks are functional but forgettable. A lamp that came with the office furniture. A mug from a conference. A pen that was free with a purchase. These objects don't inspire — they merely occupy space.

Creating a characterful desk doesn't mean filling it with decorative objects. It means choosing things that work well and look right:

Start with lighting. A good desk lamp transforms how you experience a workspace. Look for something with adjustable brightness and a form that pleases you. You'll spend hundreds of hours under its light — make it count.

Add one or two objects that bring you pleasure. A ceramic pen holder. A small plant. A framed postcard. These don't need to be expensive — they need to be considered.

Choose materials that age well. Wood, leather, ceramic, brass — these materials develop character over time. Plastic and chrome tend to look worse with age.

Keep the surface clear. A characterful desk isn't a cluttered desk. Give each object room to breathe. Rotate things seasonally if you like — it keeps the space feeling fresh.

The goal isn't a desk that looks like a magazine spread. It's a desk that makes you want to sit down and do good work.`,
    tags: ['desk', 'workspace', 'objects', 'productivity', 'design'],
  },
  {
    id: 'mixing-retro-modern',
    title: 'Mixing Retro Pieces with Contemporary Interiors',
    category: 'Interiors',
    excerpt: 'The best interiors don\'t belong to a single era. Here\'s how to blend vintage character with modern comfort and clarity.',
    readTime: '6 min read',
    content: `A room furnished entirely in one style can feel like a showroom — impressive but lifeless. The most interesting spaces mix periods, textures, and references. A mid-century sideboard alongside a contemporary sofa. Vintage posters in a minimalist hallway. An enamel bowl on a modern kitchen counter.

The key to successful mixing is contrast with connection:

Contrast in age creates visual interest. Old and new highlight each other. A weathered wooden table makes a sleek modern chair look more considered; the chair makes the table feel more intentional.

Connection comes through shared qualities. Color, material, proportion, or spirit — find what links your pieces across time. A 1960s ceramic vase and a contemporary linen cushion might share the same dusty blue. A vintage desk lamp and a modern laptop might share clean geometric lines.

Don't overthink it. Live with things you love and let the collection develop naturally. The best interiors evolve over time as you find objects that speak to you.

One warning: avoid creating a theme. A room should feel collected, not curated to within an inch of its life. Leave room for surprises, for things that don't quite fit but somehow work.

That slight tension between old and new, between planned and accidental, is what gives a space its character.`,
    tags: ['interiors', 'mixing', 'vintage', 'modern', 'styling'],
  },
];

export const siteConfig = {
  brandName: 'RETRO GOODS',
  tagline: 'Good things never go out of style.',
  announcement: 'EVERY OBJECT HAS A PAST. GIVE IT A NEXT CHAPTER. ✳',
  ticker: 'MADE WITH INTENTION ✳ BUILT TO INSPIRE ✳ RETRO GOODS ✳ KEEP GOOD THINGS ✳',
};
