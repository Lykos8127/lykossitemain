'use client';

import Image from 'next/image';
import Link from 'next/link';

type Button = { label: string; href: string };

interface ProductHeroProps {
  /**  Background image in /public or remote URL  */
  image: string;
  title: string;
  subtitle: string;
  buttons: Button[];
}

export default function producthero({
  image,
  title,
  subtitle,
  buttons,
}: ProductHeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden text-white">
      {/* background */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover object-center z-0"
      />

      {/* overlay content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold">{title}</h1>
        <p className="mt-2 text-2xl md:text-3xl font-medium">{subtitle}</p>

        <div className="mt-10 flex gap-6 flex-wrap justify-center">
          {buttons.map((b) => (
            <Link
              key={b.href}
              href={b.href}
              className="px-8 py-2 rounded-full border border-white hover:bg-white hover:text-black transition"
            >
              {b.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
