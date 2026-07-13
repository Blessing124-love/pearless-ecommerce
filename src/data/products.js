// Product data for PEARLESS e-commerce
export const products = [
  {
    id: 1,
    name: 'Classic Windbreaker',
    tagline: 'Grown Not Given',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=800&q=80',
    description:
      'The ultimate statement piece. Our Classic Windbreaker features a meticulously embroidered pear logo on the chest, representing growth and excellence. Water-resistant, breathable, and designed for those who understand that true style is earned.',
    colors: [
      { id: 'white', label: 'White', hex: '#ffffff' },
      { id: 'black', label: 'Black', hex: '#111827' },
      { id: 'gold', label: 'Gold', hex: '#eab308' },
    ],
    sizes: [
      { id: 'xs', label: 'XS', available: true, chest: 34, length: 28 },
      { id: 's', label: 'S', available: true, chest: 36, length: 29 },
      { id: 'm', label: 'M', available: true, chest: 38, length: 30 },
      { id: 'l', label: 'L', available: true, chest: 40, length: 31 },
      { id: 'xl', label: 'XL', available: true, chest: 42, length: 32 },
      { id: 'xxl', label: 'XXL', available: false, chest: 44, length: 33 },
    ],
    features: [
      '100% Premium Polyester',
      'Water-Resistant Coating',
      'Breathable Lining',
      'Embroidered Pear Logo',
      'Hidden Pockets',
      'Adjustable Hood',
    ],
    rating: 4.8,
    reviews: 342,
  },
  {
    id: 2,
    name: 'Statement Back Jacket',
    tagline: 'Trust the Process',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1539533057440-7bf6b16f6dc8?w=800&q=80',
    description:
      'Bold. Unforgettable. The Statement Back Jacket features dual pear characters fist-bumping on the back—a powerful reminder that success is a shared journey. Premium craftsmanship meets street culture.',
    colors: [
      { id: 'white', label: 'White', hex: '#ffffff' },
      { id: 'black', label: 'Black', hex: '#111827' },
      { id: 'navy', label: 'Navy', hex: '#001f3f' },
    ],
    sizes: [
      { id: 'xs', label: 'XS', available: true, chest: 34, length: 28 },
      { id: 's', label: 'S', available: true, chest: 36, length: 29 },
      { id: 'm', label: 'M', available: true, chest: 38, length: 30 },
      { id: 'l', label: 'L', available: true, chest: 40, length: 31 },
      { id: 'xl', label: 'XL', available: true, chest: 42, length: 32 },
      { id: 'xxl', label: 'XXL', available: true, chest: 44, length: 33 },
    ],
    features: [
      '100% Premium Polyester',
      'Water-Resistant Coating',
      'Breathable Lining',
      'Large Back Graphic',
      'Multiple Pockets',
      'Ergonomic Fit',
    ],
    rating: 4.9,
    reviews: 298,
  },
]
