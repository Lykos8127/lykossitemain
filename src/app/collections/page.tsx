// src/app/collections/page.tsx
import CollectionRow from '@/app/components/collectionrow';

export const metadata = { title: 'Collections | Lykos' };

export default function CollectionsPage() {
  return (
    <main className="h-screen" > {/* push below fixed navbar if you have one */}
      <CollectionRow />
    </main>
  );
}
