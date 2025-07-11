// src/app/products/lykos-swarovski/page.tsx
import ProductHero from '@/app/components/producthero';
import ProductNav   from '@/app/components/product-navbar';
import Intro from "../../components/Intro"


export default function ProductPage() {
  const navItems = [
    { id: 'intro', label: 'Introduction' },
    { id: 'lykosswarovskistellaris', label: 'Lykos-Swarovski Stellaris' },
    { id: 'Finishing', label: 'Finishing' },
    { id: 'customize', label: 'Customize' },
  
  ];


  return (
    <main>
      <ProductHero
        image="/img/swarovskikeycap-bg.png"
        title="Lykos X Swarovski"
        subtitle="Limited Edition"
        buttons={[
          { label: 'Discover', href: '#intro' },
          { label: 'Buy Now',  href: '/checkout/lykos-swarovski' },
        ]}
      />

      <ProductNav items={navItems} />
      <Intro>Step into the extraordinary with the Lykos × Swarovski Stellaris Limited Edition keycap. Feel the smooth, premium touch under your fingertips and let your setup shine with an otherworldly vibe. </Intro>


      {/* further sections … */}
    </main>
  );
}
