// src/app/components/CollectionRow.tsx
import { collections } from '../lib/collection';
import CollectionCard from './collectioncard';

export default function CollectionRow() {
  return (
    <section className="flex flex-row flex-wrap justify-center items-start">
      {collections.map((item) => (
        <CollectionCard key={item.slug} item={item} />
      ))}
    </section>
  );
}
