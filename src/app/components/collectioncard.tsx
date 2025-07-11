// src/app/components/CollectionCard.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { CollectionItem } from '../lib/collection';

export default function CollectionCard({ item }: { item: CollectionItem }) {
  return (
    <Link
      href={`/collections/${item.slug}`}
      className="flex-none w-[33vw] px-6 pt-10 group"
    >
      {/* -------- swap image zone (25 vh) -------- */}
      <div className="relative h-[25vh] w-full overflow-hidden">
        <Image
          src={item.imgA}
          alt={item.title}
          fill
          className="object-contain transition-opacity duration-300 group-hover:opacity-0"
        />
        <Image
          src={item.imgB}
          alt={item.title}
          fill
          className="absolute inset-0 object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </div>

      {/* -------- texts -------- */}
      <h3 className="mt-6 text-center text-xl font-semibold whitespace-normal">
        {item.title}
      </h3>
      <p className="mt-2 text-center text-base text-gray-300">
        {item.subtitle}
      </p>
    </Link>
  );
}