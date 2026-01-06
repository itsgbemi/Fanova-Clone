
import { Product, CategoryItem, BrandItem } from './types';

export const ASSETS = {
  LOGO: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1764186999/gwrlckovluhlu5rjxsik.svg',
  POPUP_IMG: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767692402/vajlpbr8qsfdtnua0d9i.jpg',
  GOOGLE_PLAY: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1764187532/qovuzfabg48mfnnvux38.svg',
  APP_STORE: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1764187001/iyh4mljuwhxgeatmgfwb.webp',
  HERO: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767693013/fsyc24qtmxxooe8akpyi.avif',
  PROMO_70: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767693441/ngoppvyif12qdwlsj5vp.avif',
  PROMO_WINTER: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767693441/r7wc9fihdcws2tdtfgxc.avif',
  PROMO_LAST: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767693440/srurwyr0ynlexna8orsw.avif'
};

export const TRENDS: CategoryItem[] = [
  { title: 'The Cozy Drop', image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767693013/apz8tycuxrqinjqegtko.avif', link: '#' },
  { title: 'Denim Diaries', image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767693012/gzbvr4brzs6cvd3p26hl.avif', link: '#' },
  { title: 'Escaping the Cold', image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767693012/jzkjvstm7adgi3xsfkk7.avif', link: '#' },
  { title: 'Outerwear Essentials', image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767693012/ucoiclj7n7xuhmtkd9pl.avif', link: '#' },
];

export const BRANDS: BrandItem[] = [
  { name: 'NOVAMEN', logoText: 'NOVA MEN', image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767693441/mi71ap9uwgbpycr7yr8i.avif' },
  { name: 'NOVALUXE', logoText: 'NOVA LUXE', image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767693441/aa0e8rppttli6utwblsu.avif' },
  { name: 'NOVACURVE', logoText: 'NOVA CURVE', image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767693441/fhakvhkr7adcbqjce6wy.avif' },
  { name: 'NOVAKIDS', logoText: 'NOVA Kids', image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767693441/iy85meeavdua92dxjcgx.avif' },
  { name: 'NOVASCULPT', logoText: 'NOVA SCULPT', image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767693440/ycvu4zqychoqygqvqymk.avif' },
  { name: 'NOVABEAUTY', logoText: 'NOVA BEAUTY', image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767693440/hwxzazl04dqvum5vdkc7.avif' },
];

export const SHOP_CATEGORIES: CategoryItem[] = [
  { title: 'Matching Sets', image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767693440/jryfl3g6d3vhm0v5549e.avif', link: '#' },
  { title: 'Dresses', image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767693439/afvyknpgrjveas2kacom.avif', link: '#' },
  { title: 'Bottoms', image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767693439/rxss4dbagwkqho77fwck.avif', link: '#' },
  { title: 'Jackets & Coats', image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767693439/yrogml0wa0pqy3khegeg.avif', link: '#' },
  { title: 'Tops', image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767693439/lq4eeiin6smxo0sxmegt.avif', link: '#' },
  { title: 'Accessories', image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767693439/wljbdxn3o4oiwgahohjo.avif', link: '#' },
  { title: 'Shoes', image: 'https://res.cloudinary.com/dqhawdcol/image/upload/v1767693439/xtfgximiuqs7h76wbhdy.avif', link: '#' },
];

export const DUMMY_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Moscow Fur Coat - Brown",
    price: 229400,
    image: "https://picsum.photos/400/600?random=1",
    // Fix: Added missing required 'tags' property
    tags: [],
    isBogo: true,
    promoText: "Buy One, Get One FREE Dresses, Sets & Jumpsuits! Use Code: FREE"
  },
  {
    id: 2,
    name: "San Diego Sculpting Stretch Flare Jeans",
    price: 27600,
    originalPrice: 53500,
    image: "https://picsum.photos/400/600?random=2",
    tags: ["DEALS"],
    promoText: "NovaDeals, Starting at $5! Prices as Marked"
  },
  {
    id: 3,
    name: "My Heart Is Yours Short Sleeve PJ Set",
    price: 21400,
    originalPrice: 30600,
    image: "https://picsum.photos/400/600?random=3",
    // Fix: Added missing required 'tags' property
    tags: [],
    isNew: true,
    promoText: "Up to 70% Off Sitewide! Prices as Marked"
  },
  {
    id: 4,
    name: "Magnolia Belted Midi Dress",
    price: 91800,
    image: "https://picsum.photos/400/600?random=4",
    // Fix: Added missing required 'tags' property
    tags: [],
    isBogo: true,
    promoText: "Buy One, Get One FREE Dresses, Sets & Jumpsuits! Use Code: FREE"
  },
  {
    id: 5,
    name: "Bree Butter Snatched Jumpsuit - Black",
    price: 61200,
    image: "https://picsum.photos/400/600?random=5",
    tags: ["SNATCHED"],
    promoText: "Buy One, Get One FREE Dresses, Sets & Jumpsuits! Use Code: FREE"
  }
];
