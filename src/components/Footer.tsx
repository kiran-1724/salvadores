// src/components/Footer.tsx
import { Instagram, Facebook, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-400">
        <div className="md:col-span-1">
          <h3 className="font-[var(--font-cinzel)] text-2xl font-bold text-[#D4AF37] uppercase tracking-widest">SALVADORES</h3>
          <p className="mt-4 text-sm">Experience culinary artistry in an atmosphere of unparalleled luxury.</p>
        </div>
        <div>
          <h4 className="font-bold text-white tracking-wider mb-4">Quick Links</h4>
          <nav className="flex flex-col space-y-2 text-sm">
            <Link href="/#about" className="hover:text-amber-400">About Us</Link>
            <Link href="/menu" className="hover:text-amber-400">Menu</Link>
            <Link href="/#reservations" className="hover:text-amber-400">Reservations</Link>
          </nav>
        </div>
        <div>
          <h4 className="font-bold text-white tracking-wider mb-4">Contact</h4>
          <div className="text-sm space-y-2">
            <p>123 Luxury Lane, Bengaluru</p>
            <p>80 2558 4076</p>
            <a href="mailto:salvadoresfinedine@gmail.com" className="hover:text-amber-400">salvadoresfinedine@gmail.com</a>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-white tracking-wider mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-amber-400"><Instagram size={20}/></a>
            <a href="#" className="hover:text-amber-400"><Facebook size={20}/></a>
            <a href="#" className="hover:text-amber-400"><Twitter size={20}/></a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 text-center text-xs text-gray-600 mt-12 border-t border-white/10 pt-8">
        <p>&copy; {new Date().getFullYear()} Salvadores Restaurant. All Rights Reserved. Crafted with passion.</p>
      </div>
    </footer>
  );
}