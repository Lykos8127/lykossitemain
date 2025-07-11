// src/app/components/ProductNav.tsx
'use client';

import { useEffect, useState } from 'react';

export interface NavItem {
  id: string;    // #anchor target in the page
  label: string; // text shown in the bar
}

export default function ProductNav({ items }: { items: NavItem[] }) {
  /* --- optional: highlight current hash while scrolling --- */
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120; // offset for navbar height
      for (const it of items) {
        const el = document.getElementById(it.id);
        if (el && el.offsetTop <= scrollPos) {
          setActive(it.id);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  /* -------------------------------------------------------- */
  return (
    <nav className="bg-black text-[#afb6c0]">
      <ul className="mx-auto max-w-7xl flex justify-center flex-wrap gap-x-10 gap-y-4 px-4 py-6 text-lg">
        {items.map((it) => (
          <li key={it.id}>
            <a
              href={`#${it.id}`}
              className={`transition-colors hover:text-white ${
                active === it.id ? 'border-b-2 border-white' : ''
              }`}
            >
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
