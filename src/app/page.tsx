// src/app/page.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useAnimation, Variants } from 'framer-motion'
import { Menu, X, Clock, Phone } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

// Using Next.js links for better navigation
const navLinks = [
  { name: 'HOME', href: '/' },
  { name: 'RESERVATIONS', href: '/reservations' },
  { name: 'MENU', href: '/menu' },
  { name: 'ABOUT', href: '/about' },
];

export default function SalvadoresHomepage() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Optimized scroll detection for the header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Re-introducing Framer Motion variants for smooth, staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
};

  const mobileMenuVariants = {
    open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  };

const mobileLinkVariants: Variants = {
  open: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 260, damping: 20 } },
  closed: { y: 20, opacity: 0, transition: { type: "spring", stiffness: 260, damping: 20 } },
};

  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-200">
      {/* ======================= REFINED FLOATING HEADER ======================= */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 py-5">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/" className="font-[var(--font-cinzel)] text-2xl md:text-3xl font-bold text-[#D4AF37] uppercase tracking-widest">
              SALVADORES
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-wider">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-white hover:text-[#D4AF37] transition-colors duration-300 relative group pb-1">
                <span>{link.name}</span>
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out ${link.name === 'HOME' ? 'scale-x-100' : ''}`}></span>
              </Link>
            ))}
          </nav>
          
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <button aria-label="Open menu" className="p-2 text-white hover:text-[#D4AF37] transition-colors"><Menu size={28} /></button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-black/90 backdrop-blur-xl border-r border-white/10 p-0 text-white w-[80vw]">
                <div className="p-6 flex justify-between items-center border-b border-white/10">
                  <h2 className="font-[var(--font-cinzel)] text-xl font-bold text-[#D4AF37] uppercase">SALVADORES</h2>
                  <SheetClose asChild><button aria-label="Close menu" className="p-2 -mr-2"><X size={24} /></button></SheetClose>
                </div>
                <motion.nav initial="closed" animate={isSheetOpen ? "open" : "closed"} variants={mobileMenuVariants} className="flex flex-col p-6 space-y-6 text-xl">
                  {navLinks.map((link) => (
                    <motion.div key={link.href} variants={mobileLinkVariants}>
                      <SheetClose asChild>
                        <Link href={link.href} className="font-light hover:text-[#D4AF37] transition-colors">{link.name}</Link>
                      </SheetClose>
                    </motion.div>
                  ))}
                </motion.nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* ======================= HERO SECTION WITH PERFORMANT PARALLAX ======================= */}
        <section className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden">
          {/* 
            PERFORMANCE FIX: Using `bg-fixed` for a smooth, CSS-only parallax effect.
            This is vastly more performant than manipulating `transform` with JavaScript on every scroll event.
          */}
          <div className="absolute inset-0 z-0">
            <div className="fixed top-0 left-0 h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/gps-cs-s/AC9h4noE8FziiP98v90A39QVw5EHOQUcLm3bqm6hL47eikRftEh6AVfObjkecPlh-m8RyKxmCJqfdbPYVnyn8jIl6mimZAAxUqGXDA6TewRL3DgAKBsYbkIB9ZUjCIo7vryrH_HwoG9aDA=s1360-w1360-h1020-rw')" }}/>
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 flex flex-col items-center px-4">
            <motion.h1 variants={itemVariants} className="font-[var(--font-cinzel)] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-[#D4AF37] uppercase tracking-[0.2em] md:tracking-[0.3em] drop-shadow-2xl">
              SALVADORES
            </motion.h1>
            <motion.p variants={itemVariants} className="mt-4 text-lg md:text-2xl font-light tracking-wider">
              Wine Bar & Restaurant
            </motion.p>
            <motion.p variants={itemVariants} className="mt-8 max-w-3xl text-base md:text-lg text-gray-300 leading-relaxed">
              Experience the finest in Mediterranean, French, Italian & Ceylonese cuisine in an atmosphere of unparalleled luxury and elegance.
            </motion.p>

            {/* ======================= REDESIGNED INFO CARDS (MATCHING SCREENSHOT) ======================= */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="mt-16 w-full flex flex-col md:flex-row justify-center items-center gap-6"
            >
              <motion.div variants={itemVariants} className="w-[300px] bg-black/50 backdrop-blur-md p-6 rounded-lg border border-white/10 text-left">
                <div className="flex items-center gap-4">
                  <Clock className="text-[#D4AF37]" size={24} />
                  <h3 className="font-semibold text-xl text-[#D4AF37]">Hours</h3>
                </div>
                <p className="mt-4 text-gray-300">Monday - Sunday</p>
                <p className="text-lg text-white">11:30 AM - 11:00 PM</p>
              </motion.div>

              <motion.div variants={itemVariants} className="w-[300px] bg-black/50 backdrop-blur-md p-6 rounded-lg border border-white/10 text-left">
                <div className="flex items-center gap-4">
                  <Phone className="text-[#D4AF37]" size={24} />
                  <h3 className="font-semibold text-xl text-[#D4AF37]">Contact</h3>
                </div>
                <p className="mt-4 text-gray-300">80 2558 4076</p>
                <a href="mailto:salvadoresfinedine@gmail.com" className="text-lg text-white hover:text-[#D4AF37] transition-colors">
                  salvadoresfinedine@gmail.com
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
      </main>

      {/* ======================= SIMPLE & ELEGANT FOOTER ======================= */}
      <footer className="bg-black py-8 border-t border-white/10">
        <div className="container mx-auto text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Salvadores. All Rights Reserved.</p>
          <p className="text-sm mt-2">Crafted with passion for fine dining.</p>
        </div>
      </footer>
    </div>
  )
}