// src/components/Header.tsx
'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  Clock,
  Mail,
  Instagram,
  Facebook
} from 'lucide-react';
// BUILD FIX: The 'Variants' import is now used correctly.
import { motion, AnimatePresence, Variants } from 'framer-motion';

// Import the script font for logo
import { Great_Vibes } from 'next/font/google';

const greatVibes = Great_Vibes({ 
  subsets: ['latin'], 
  weight: ['400'],
  display: 'swap',
});

const navLinks = [
 
  { 
    name: 'MENU', 
    href: '/menu',
    description: 'Culinary masterpieces'
  },
  { 
    name: 'RESERVATIONS', 
    href: '/reservation',
    description: 'Book your table'
  },
  { 
    name: 'ABOUT', 
    href: '/about',
    description: 'Our story & heritage'
  },
];

const contactInfo = {
  phone: '80 2558 4076',
  email: 'salvadoresfinedine@gmail.com',
  address: '123 Luxury Lane, Bengaluru',
  hours: 'Daily 11:30 AM - 11:00 PM'
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // BUILD FIX: Added ': Variants' to explicitly type each variant object.
  const headerVariants: Variants = {
    initial: { y: -100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      }
    }
  };

  const logoVariants: Variants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 1.2, 
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.3 
      }
    }
  };

  const navVariants: Variants = {
    initial: { opacity: 0, y: -20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        staggerChildren: 0.1,
        delayChildren: 0.5 
      }
    }
  };

  const navItemVariants: Variants = {
    initial: { opacity: 0, y: -20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  const mobileMenuVariants: Variants = {
    initial: { 
      x: '100%',
      opacity: 0
    },
    animate: { 
      x: 0,
      opacity: 1,
      transition: { 
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: { 
      x: '100%',
      opacity: 0,
      transition: { 
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const mobileNavItemVariants: Variants = {
    initial: { x: 50, opacity: 0 },
    animate: (index: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.1 + (index * 0.08),
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  };

  return (
    <>
      <motion.header
        variants={headerVariants}
        initial="initial"
        animate="animate"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-out ${
          isScrolled 
            ? 'bg-black/95 backdrop-blur-xl border-b border-[#D4AF37]/20 shadow-2xl shadow-black/50' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 lg:py-3">
            
            <motion.div variants={logoVariants} className="flex-shrink-0">
              <Link href="/" className="group relative">
                <div className="relative">
                  <h1 className={`${greatVibes.className} text-3xl mt-2 sm:text-4xl lg:text-5xl xl:text-6xl font-normal text-[#D4AF37] 
                                 relative z-10 transition-all duration-500 group-hover:scale-105
                                 drop-shadow-[0_0_25px_rgba(212,175,55,0.4)] filter`}>
                    Salvadores
                  </h1>
                  
                  <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r 
                                  from-transparent via-[#D4AF37]/60 to-transparent 
                                  transform scale-x-0 group-hover:scale-x-100 
                                  transition-transform duration-700 ease-out" />
                  
                  <p className="font-sans text-xs sm:text-sm text-gray-400 tracking-[0.3em] text-center 
                               font-light opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    WINE BAR & RESTAURANT
                  </p>
                </div>
              </Link>
            </motion.div>

            <motion.nav 
              variants={navVariants}
              className="hidden lg:flex items-center space-x-12"
            >
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    variants={navItemVariants}
                    custom={index}
                    className="relative group"
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <Link 
                      href={link.href}
                      className={`relative text-sm font-light tracking-[0.15em] transition-all duration-300 
                                  ${isActive 
                                    ? 'text-[#D4AF37]' 
                                    : 'text-white hover:text-[#D4AF37]'
                                  }
                                  py-2 px-1`}
                    >
                      <span className="relative z-10">{link.name}</span>
                      
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute inset-0 border border-[#D4AF37]/30 rounded-sm bg-[#D4AF37]/5"
                          transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
                        />
                      )}
                      
                      <div className={`absolute -bottom-2 left-0 right-0 h-[1px] 
                                       bg-[#D4AF37] transform transition-transform duration-300 
                                       ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                    </Link>
                    
                    <AnimatePresence>
                      {hoveredLink === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.9 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 
                                     bg-black/90 backdrop-blur-md border border-[#D4AF37]/20 
                                     rounded-md px-3 py-2 text-xs text-gray-300 whitespace-nowrap
                                     shadow-xl shadow-black/40"
                        >
                          {link.description}
                          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 
                                          w-2 h-2 bg-black/90 border-l border-t border-[#D4AF37]/20 
                                          rotate-45" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.nav>

            <motion.div 
              variants={navVariants}
              className="hidden xl:flex items-center space-x-6 text-xs text-gray-300"
            >
              <div className="flex items-center space-x-2 group cursor-pointer">
                <Phone size={14} className="text-[#D4AF37] group-hover:scale-110 transition-transform duration-200" />
                <span className="group-hover:text-[#D4AF37] transition-colors duration-200">
                  {contactInfo.phone}
                </span>
              </div>
              <div className="w-px h-4 bg-gray-600" />
              <div className="flex items-center space-x-2 group cursor-pointer">
                <Clock size={14} className="text-[#D4AF37] group-hover:scale-110 transition-transform duration-200" />
                <span className="group-hover:text-[#D4AF37] transition-colors duration-200">
                  Daily 11:30 AM - 11:00 PM
                </span>
              </div>
            </motion.div>

            <motion.button
              variants={navItemVariants}
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden relative z-10 p-2 text-white hover:text-[#D4AF37] 
                         transition-colors duration-300 group"
              aria-label="Open mobile menu"
            >
              <Menu 
                size={28} 
                className="transition-transform duration-300 group-hover:scale-110" 
              />
            </motion.button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            <motion.div
              variants={mobileMenuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-black/95 backdrop-blur-xl 
                         border-l border-[#D4AF37]/20 z-50 lg:hidden shadow-2xl shadow-black/50
                         overflow-hidden flex flex-col"
            >
              <div className="flex flex-col h-full overflow-hidden">
                
                <div className="flex items-center justify-between p-6 border-b border-white/10 flex-shrink-0">
                  <div>
                    <h2 className={`${greatVibes.className} text-2xl text-[#D4AF37]`}>Salvadores</h2>
                    <p className="font-sans text-xs text-gray-400 tracking-[0.2em] mt-1">WINE BAR & RESTAURANT</p>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
                    aria-label="Close mobile menu"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <div className="flex-1 overflow-y-auto overflow-x-hidden">
                  <nav className="px-6 py-8">
                    <div className="space-y-2">
                      {navLinks.map((link, index) => {
                        const isActive = pathname === link.href;
                        return (
                          <motion.div
                            key={link.name}
                            variants={mobileNavItemVariants}
                            custom={index}
                            initial="initial"
                            animate="animate"
                          >
                            <Link
                              href={link.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={`block py-4 px-4 rounded-lg border transition-all duration-300 
                                          ${isActive 
                                            ? 'border-[#D4AF37]/30 bg-[#D4AF37]/5 text-[#D4AF37]' 
                                            : 'border-transparent text-white hover:border-[#D4AF37]/20 hover:bg-[#D4AF37]/5 hover:text-[#D4AF37]'
                                          }`}
                            >
                              <div className="font-serif text-lg tracking-[0.1em]">{link.name}</div>
                              <div className="font-sans text-xs text-gray-400 mt-1">{link.description}</div>
                            </Link>
                          </motion.div>
                        );
                      })}
                    </div>
                  </nav>
                
                  <div className="border-t border-white/10 p-6 space-y-4">
                    <motion.div
                      variants={mobileNavItemVariants}
                      custom={navLinks.length}
                      initial="initial"
                      animate="animate"
                      className="space-y-3 text-sm text-gray-300"
                    >
                      <div className="flex items-center space-x-3">
                        <Phone size={16} className="text-[#D4AF37] flex-shrink-0" />
                        <a href={`tel:${contactInfo.phone}`} 
                           className="hover:text-[#D4AF37] transition-colors duration-200">
                          {contactInfo.phone}
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail size={16} className="text-[#D4AF37] flex-shrink-0" />
                        <a href={`mailto:${contactInfo.email}`} 
                           className="hover:text-[#D4AF37] transition-colors duration-200 break-all">
                          {contactInfo.email}
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin size={16} className="text-[#D4AF37] flex-shrink-0" />
                        <span>{contactInfo.address}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock size={16} className="text-[#D4AF37] flex-shrink-0" />
                        <span>{contactInfo.hours}</span>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      variants={mobileNavItemVariants}
                      custom={navLinks.length + 1}
                      initial="initial"
                      animate="animate"
                      className="flex space-x-4 pt-4"
                    >
                      <a href="#" className="p-2 text-gray-400 hover:text-[#D4AF37] transition-colors duration-200">
                        <Instagram size={20} />
                      </a>
                      <a href="#" className="p-2 text-gray-400 hover:text-[#D4AF37] transition-colors duration-200">
                        <Facebook size={20} />
                      </a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}