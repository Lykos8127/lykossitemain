// src/lib/collections.ts
export interface CollectionItem {
  slug: string;          // unique id / link
  title: string;
  subtitle: string;
  imgA: string;          // first image
  imgB: string;          // second image (on hover)
}

export const collections: CollectionItem[] = [
  {
    slug: 'black-diamond-01',
    title: 'Lykos Black Diamond 01',
    subtitle: 'Swiss hand-crafted carbon fiber keycap.',
    imgA: '/img/black-diamond-1-a.png',
    imgB: '/img/black-diamond-1-b.png',
  },
  {
    slug: 'lykos-swarovski',
    title: 'Lykos × Swarovski',
    subtitle: 'Creation of 2 authentic brands working together',
    imgA: '/img/swarovski-a.png',
    imgB: '/img/swarovski-b.png',
  },
  {
    slug: 'lykos-custom',
    title: 'Lykos Custom',
    subtitle: 'Swiss custom-made keycap according to your wishes',
    imgA: '/img/custom-a.png',
    imgB: '/img/custom-b.png',
  },
  // ➜ Add more items here; the page updates automatically
];