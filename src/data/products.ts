export interface Product {
  id: string;
  name: string;
  category: 'Phenyl' | 'Room Care';
  flavor?: 'Rose' | 'Lime';
  variant?: string;
  price: number;
  moqPrice: number;
  size: string;
  image?: string;
  description: string;
}

export const products: Product[] = [
  // Phenyl Products
  {
    id: 'phenyl-rose',
    name: 'Premium Rose Phenyl',
    category: 'Phenyl',
    flavor: 'Rose',
    price: 450,
    moqPrice: 350,
    size: '5L',
    description: 'Premium rose-scented floor cleaner with long-lasting fragrance',
  },
  {
    id: 'phenyl-lime',
    name: 'Premium Lime Phenyl',
    category: 'Phenyl',
    flavor: 'Lime',
    price: 450,
    moqPrice: 350,
    size: '5L',
    description: 'Fresh lime-scented floor cleaner with antibacterial properties',
  },
  
  // Room Care Products
  {
    id: 'taski-r1-super',
    name: 'Taski R1 Super',
    category: 'Room Care',
    variant: 'Heavy Duty Cleaner',
    price: 1649,
    moqPrice: 1499,
    size: '5L',
    description: 'Heavy-duty alkaline cleaner for stubborn dirt and grease removal',
  },
  {
    id: 'taski-r2',
    name: 'Taski R2',
    category: 'Room Care',
    variant: 'General Purpose Cleaner',
    price: 1649,
    moqPrice: 1499,
    size: '5L',
    description: 'Versatile general-purpose cleaner for daily cleaning tasks',
  },
  {
    id: 'taski-r3',
    name: 'Taski R3',
    category: 'Room Care',
    variant: 'Glass & Surface Cleaner',
    price: 1649,
    moqPrice: 1499,
    size: '5L',
    description: 'Professional glass and surface cleaner for streak-free cleaning',
  },
  {
    id: 'taski-r4-shine-up',
    name: 'Taski R4 Shine Up',
    category: 'Room Care',
    variant: 'Floor Polish',
    price: 1649,
    moqPrice: 1499,
    size: '5L',
    description: 'High-gloss floor polish for maintaining floor shine and protection',
  },
  {
    id: 'taski-r5',
    name: 'Taski R5',
    category: 'Room Care',
    variant: 'Air Freshener',
    price: 1649,
    moqPrice: 1499,
    size: '5L',
    description: 'Long-lasting air freshener with pleasant fragrance',
  },
  {
    id: 'taski-r6',
    name: 'Taski R6',
    category: 'Room Care',
    variant: 'Bathroom Cleaner',
    price: 1649,
    moqPrice: 1499,
    size: '5L',
    description: 'Specialized bathroom cleaner for tiles, fixtures, and surfaces',
  },
  {
    id: 'taski-r7',
    name: 'Taski R7',
    category: 'Room Care',
    variant: 'Kitchen Degreaser',
    price: 1649,
    moqPrice: 1499,
    size: '5L',
    description: 'Powerful kitchen degreaser for removing oil and food residues',
  },
  {
    id: 'taski-r8',
    name: 'Taski R8',
    category: 'Room Care',
    variant: 'Carpet Cleaner',
    price: 1649,
    moqPrice: 1499,
    size: '5L',
    description: 'Professional carpet and upholstery cleaner for deep cleaning',
  },
  {
    id: 'taski-r9',
    name: 'Taski R9',
    category: 'Room Care',
    variant: 'Disinfectant',
    price: 1649,
    moqPrice: 1499,
    size: '5L',
    description: 'Hospital-grade disinfectant for superior germ protection',
  },
];

export const phenylProducts = products.filter(product => product.category === 'Phenyl');
export const roomCareProducts = products.filter(product => product.category === 'Room Care');