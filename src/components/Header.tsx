'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'HOME', href: '/' },
  { name: 'MENU', href: '/menu' },
  { name: 'RESERVATIONS', href: '/reservation' },
  { name: 'ABOUT', href: '/about' },
];

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants for the mobile menu links
  const mobileNavContainerVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };
  
  const mobileNavLinkVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/10 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 py-4">
        {/* Using font-serif which now maps to Cormorant Garamond */}
        <Link href="/" className="font-serif text-2xl md:text-3xl font-bold text-[#D4AF37] uppercase tracking-widest">
          SALVADORES
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-wider">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.name} href={link.href} className={`transition-colors duration-300 relative group pb-1 ${isActive ? 'text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'}`}>
                <span>{link.name}</span>
                <span className={`absolute bottom-0 left-0 w-full h-[1.5px] bg-[#D4AF37] transform transition-transform duration-300 ease-out ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </Link>
            )
          })}
        </nav>
        
        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <button aria-label="Open menu" className="p-2 text-white"><Menu size={28} /></button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-black/80 backdrop-blur-xl border-r border-white/10 p-0 text-white w-[85vw] max-w-sm">
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="p-6 flex justify-between items-center border-b border-white/10">
                  <h2 className="font-serif text-xl font-bold text-[#D4AF37] uppercase">SALVADORES</h2>
                  <SheetClose asChild>
                    <button aria-label="Close menu" className="p-2 -mr-2 text-gray-300 hover:text-white">
                      <X size={24} />
                    </button>
                  </SheetClose>
                </div>
                
                {/* Mobile Menu Navigation with animations */}
                <motion.nav 
                  className="flex flex-col p-6 space-y-1 text-4xl"
                  initial="closed"
                  animate={isSheetOpen ? "open" : "closed"}
                  variants={mobileNavContainerVariants}
                >
                  {navLinks.map((link) => (
                    <motion.div key={link.name} variants={mobileNavLinkVariants}>
                      <SheetClose asChild>
                        <Link href={link.href} className={`font-serif font-semibold py-3 block transition-colors ${pathname === link.href ? 'text-[#D4AF37]' : 'hover:text-[#D4AF37]'}`}>{link.name}</Link>
                      </SheetClose>
                    </motion.div>
                  ))}
                </motion.nav>
                
                {/* Mobile Menu Footer */}
                <div className="mt-auto border-t border-white/10 p-6 space-y-4 text-sm text-gray-300">
                  <div className="flex items-center gap-4">
                    <Phone size={16} className="text-[#D4AF37]" />
                    <span>80 2558 4076</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin size={16} className="text-[#D4AF37]" />
                    <span>123 Luxury Lane, Bengaluru</span>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}