export const products = [
  {
    id: 'blossom-dreams',
    name: 'Blossom Dreams',
    brand: 'Maison Lumière',
    price: 128,
    description:
      'An elegant bouquet of jasmine, neroli, and pear that evokes the awakening of a spring morning.',
    notes: ['Jasmine Absolute', 'Neroli', 'Pear Nectar', 'Sandalwood'],
    image: '/images/blossom-dreams.jpg',
    badge: 'Bestseller',
  },
  {
    id: 'amber-nocturne',
    name: 'Amber Nocturne',
    brand: 'Noir Atelier',
    price: 156,
    description:
      'Warm amber, smoky vanilla, and midnight florals weave together a velvety evening aura.',
    notes: ['Amber Resin', 'Vanilla Smoke', 'Black Orchid', 'Tonka Bean'],
    image: '/images/amber-nocturne.jpg',
    badge: 'Limited',
  },
  {
    id: 'citrus-aurora',
    name: 'Citrus Aurora',
    brand: 'Solstice & Co.',
    price: 98,
    description:
      'A radiant burst of yuzu, bergamot, and cold-pressed grapefruit balanced with white musk.',
    notes: ['Yuzu', 'Bergamot', 'Pink Grapefruit', 'White Musk'],
    image: '/images/citrus-aurora.jpg',
    badge: 'New',
  },
];

export function getProductById(id) {
  return products.find((product) => product.id === id);
}
