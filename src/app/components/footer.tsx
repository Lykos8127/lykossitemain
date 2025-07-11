export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10 mt-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-sm">
        {/* Column 1: Brand */}
        <div>
          <h2 className="text-xl font-bold mb-2">LYKOS</h2>
          <p className="opacity-70">Swiss made luxury keycaps.</p>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h3 className="font-semibold mb-2">Navigation</h3>
          <ul className="space-y-1">
            <li><a href="#drops" className="hover:underline">Drops</a></li>
            <li><a href="#collection" className="hover:underline">Collection</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Socials */}
        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">TikTok</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs mt-8 opacity-50">
        &copy; {new Date().getFullYear()} LYKOS. All rights reserved.
      </div>
    </footer>
  );
}