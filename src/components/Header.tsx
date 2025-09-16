// src/components/Header.tsx
'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // <-- Import the hook
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const navLinks = [
  { name: 'HOME', href: '/' },
  { name: 'MENU', href: '/menu' },
  { name: 'RESERVATIONS', href: '/#reservations' },
  { name: 'ABOUT', href: '/#about' },
];

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // <-- Get the current URL path

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 py-5">
        <Link href="/" className="font-[var(--font-cinzel)] text-2xl md:text-3xl font-bold text-[#D4AF37] uppercase tracking-widest">
          SALVADORES
        </Link>
        <nav className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-wider">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.name} href={link.href} className={`transition-colors duration-300 relative group pb-1 ${isActive ? 'text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'}`}>
                <span>{link.name}</span>
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37] transform transition-transform duration-300 ease-out ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </Link>
            )
          })}
        </nav>
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <button aria-label="Open menu" className="p-2 text-white"><Menu size={28} /></button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-black/90 backdrop-blur-xl border-r border-white/10 p-0 text-white w-[80vw]">
              <div className="p-6 flex justify-between items-center border-b border-white/10">
                <h2 className="font-[var(--font-cinzel)] text-xl font-bold text-[#D4AF37] uppercase">SALVADORES</h2>
                <SheetClose asChild><button aria-label="Close menu" className="p-2 -mr-2"><X size={24} /></button></SheetClose>
              </div>
              <nav className="flex flex-col p-6 space-y-6 text-xl">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.name}>
                    <Link href={link.href} className={`font-light transition-colors ${pathname === link.href ? 'text-[#D4AF37]' : 'hover:text-[#D4AF37]'}`}>{link.name}</Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}