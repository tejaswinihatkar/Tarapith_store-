export type Category = 'All' | 'Idols' | 'Clothes' | 'Sacred' | 'Ritual';

export interface Product {
  id: number;
  name: string;
  category: Category;
  price: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Sacred Brass Murti',
    category: 'Idols',
    price: 2499,
    image: '/images/Tara-Maa-brass-statue.jpg',
    description: 'Handcrafted brass idol with intricate traditional detailing'
  },
  {
    id: 2,
    name: 'Maa Tara Photo Frame',
    category: 'Idols',
    price: 850,
    image: '/images/photoframe.jpeg',
    description: 'Beautiful framed photograph with ornate golden border'
  },
  {
    id: 3,
    name: 'Authentic Red Saree',
    category: 'Clothes',
    price: 1200,
    image: '/images/shopping.webp',
    description: 'Traditional red saree with golden embroidery'
  },
  {
    id: 4,
    name: 'Protection Yantra',
    category: 'Sacred',
    price: 599,
    image: '/images/tara-yantra-9057449665196_l.jpg',
    description: 'Sacred geometric symbol for spiritual protection'
  },
  {
    id: 5,
    name: 'Sacred Red Thread',
    category: 'Sacred',
    price: 99,
    image: '/images/dhaaga.png',
    description: 'Blessed red thread for spiritual protection'
  },
  {
    id: 6,
    name: 'Blessing Kumkum',
    category: 'Ritual',
    price: 150,
    image: '/images/kumkum.webp',
    description: 'Pure vermillion powder for religious ceremonies'
  },
  {
    id: 7,
    name: 'Silver Katori Set',
    category: 'Ritual',
    price: 3500,
    image: '/images/silver katori set .jpg',
    description: 'Premium silver bowl set for puja rituals'
  },
  {
    id: 8,
    name: 'Incense Stick (Dhoop)',
    category: 'Ritual',
    price: 250,
    image: '/images/dhoop-batti-034.jpg',
    description: 'Natural incense sticks with calming fragrance'
  }
];

export const categories: Category[] = ['All', 'Idols', 'Clothes', 'Sacred', 'Ritual'];
