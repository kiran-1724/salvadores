// src/components/Footer.tsx
'use client'

import { motion } from 'framer-motion';
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  ArrowUp,
  Heart
} from 'lucide-react';
import Link from 'next/link';
import { Great_Vibes } from 'next/font/google';

const greatVibes = Great_Vibes({ 
  subsets: ['latin'], 
  weight: ['400'],
  display: 'swap',
});

const footerLinks = {
  explore: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Story', href: '/about#story' },
    { name: 'Chef\'s Table', href: '/menu#chefs-table' },
    { name: 'Private Dining', href: '/private-dining' },
  ],
  menu: [
    { name: 'Dinner Menu', href: '/menu' },
    { name: 'Wine Selection', href: '/menu#wine' },
    { name: 'Desserts', href: '/menu#desserts' },
    { name: 'Special Occasions', href: '/menu#special' },
  ],
  services: [
    { name: 'Reservations', href: '/reservation' },
    { name: 'Events & Catering', href: '/events' },
    { name: 'Gift Cards', href: '/gift-cards' },
    { name: 'Reviews', href: '/reviews' },
  ]
};

const socialLinks = [
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
];

const contactInfo = {
  address: '123 Luxury Lane, Bengaluru, Karnataka 560001',
  phone: '80 2558 4076',
  email: 'salvadoresfinedine@gmail.com',
  hours: 'Daily 11:30 AM - 11:00 PM'
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Animation variants
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }
    }
  };

  const linkVariants = {
    initial: { opacity: 0, x: -10 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/50 to-black" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      
      <motion.div
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10"
      >
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-4 space-y-6">
              <div className="space-y-4">
                <h3 className={`${greatVibes.className} text-4xl lg:text-5xl text-[#D4AF37] 
                               drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]`}>
                  Salvadores
                </h3>
                <p className="text-xs tracking-[0.3em] text-gray-400 uppercase">
                  Wine Bar & Restaurant
                </p>
              </div>
              
              <p className="text-gray-300 leading-relaxed max-w-md">
                Experience culinary artistry where Mediterranean sophistication meets 
                exceptional hospitality in an atmosphere of unparalleled luxury and elegance.
              </p>
              
              {/* Contact Info Cards */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 group cursor-pointer">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D4AF37]/10 
                                  flex items-center justify-center group-hover:bg-[#D4AF37]/20 
                                  transition-colors duration-300">
                    <Phone size={14} className="text-[#D4AF37]" />
                  </div>
                  <a href={`tel:${contactInfo.phone}`} 
                     className="text-sm text-gray-300 hover:text-[#D4AF37] transition-colors duration-300">
                    {contactInfo.phone}
                  </a>
                </div>
                
                <div className="flex items-center space-x-3 group cursor-pointer">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D4AF37]/10 
                                  flex items-center justify-center group-hover:bg-[#D4AF37]/20 
                                  transition-colors duration-300">
                    <Mail size={14} className="text-[#D4AF37]" />
                  </div>
                  <a href={`mailto:${contactInfo.email}`} 
                     className="text-sm text-gray-300 hover:text-[#D4AF37] transition-colors duration-300 break-all">
                    {contactInfo.email}
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D4AF37]/10 
                                  flex items-center justify-center">
                    <Clock size={14} className="text-[#D4AF37]" />
                  </div>
                  <span className="text-sm text-gray-300">{contactInfo.hours}</span>
                </div>
              </div>
            </motion.div>
            
            {/* Navigation Links */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
              
              {/* Explore */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-semibold text-white tracking-wider text-sm uppercase 
                               border-b border-[#D4AF37]/20 pb-2">
                  Explore
                </h4>
                <nav className="space-y-3">
                  {footerLinks.explore.map((link, index) => (
                    <motion.div
                      key={link.name}
                      variants={linkVariants}
                      custom={index}
                      className="group"
                    >
                      <Link 
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-[#D4AF37] 
                                   transition-all duration-300 flex items-center space-x-2
                                   hover:translate-x-1"
                      >
                        <span className="w-1 h-1 bg-gray-600 rounded-full 
                                         group-hover:bg-[#D4AF37] transition-colors duration-300" />
                        <span>{link.name}</span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </motion.div>
              
              {/* Menu */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-semibold text-white tracking-wider text-sm uppercase 
                               border-b border-[#D4AF37]/20 pb-2">
                  Menu
                </h4>
                <nav className="space-y-3">
                  {footerLinks.menu.map((link, index) => (
                    <motion.div
                      key={link.name}
                      variants={linkVariants}
                      custom={index}
                      className="group"
                    >
                      <Link 
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-[#D4AF37] 
                                   transition-all duration-300 flex items-center space-x-2
                                   hover:translate-x-1"
                      >
                        <span className="w-1 h-1 bg-gray-600 rounded-full 
                                         group-hover:bg-[#D4AF37] transition-colors duration-300" />
                        <span>{link.name}</span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </motion.div>
              
              {/* Services */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-semibold text-white tracking-wider text-sm uppercase 
                               border-b border-[#D4AF37]/20 pb-2">
                  Services
                </h4>
                <nav className="space-y-3">
                  {footerLinks.services.map((link, index) => (
                    <motion.div
                      key={link.name}
                      variants={linkVariants}
                      custom={index}
                      className="group"
                    >
                      <Link 
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-[#D4AF37] 
                                   transition-all duration-300 flex items-center space-x-2
                                   hover:translate-x-1"
                      >
                        <span className="w-1 h-1 bg-gray-600 rounded-full 
                                         group-hover:bg-[#D4AF37] transition-colors duration-300" />
                        <span>{link.name}</span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </motion.div>
            </div>
            
            {/* Location & Social */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-white tracking-wider text-sm uppercase 
                               border-b border-[#D4AF37]/20 pb-2">
                  Visit Us
                </h4>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D4AF37]/10 
                                  flex items-center justify-center mt-1">
                    <MapPin size={14} className="text-[#D4AF37]" />
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {contactInfo.address}
                  </p>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="font-semibold text-white tracking-wider text-sm uppercase">
                  Follow Us
                </h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="group relative w-10 h-10 rounded-full border border-gray-700 
                                 flex items-center justify-center hover:border-[#D4AF37] 
                                 transition-all duration-300 hover:scale-110"
                      aria-label={social.name}
                    >
                      <social.icon 
                        size={18} 
                        className="text-gray-400 group-hover:text-[#D4AF37] 
                                   transition-colors duration-300" 
                      />
                      <div className="absolute inset-0 rounded-full bg-[#D4AF37]/10 
                                      scale-0 group-hover:scale-100 transition-transform 
                                      duration-300 ease-out" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <motion.div 
          variants={itemVariants}
          className="border-t border-white/10 bg-black/50 backdrop-blur-sm"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              <p className="text-xs text-gray-500 text-center sm:text-left">
                © {new Date().getFullYear()} Salvadores Restaurant. All Rights Reserved. 
                <span className="inline-flex items-center ml-2">
                  Crafted with <Heart size={12} className="mx-1 text-red-500" /> in Bengaluru
                </span>
              </p>
              
              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="group flex items-center space-x-2 text-xs text-gray-400 
                           hover:text-[#D4AF37] transition-all duration-300 
                           hover:-translate-y-1"
                aria-label="Back to top"
              >
                <span>Back to Top</span>
                <div className="w-6 h-6 rounded-full border border-gray-600 
                                flex items-center justify-center group-hover:border-[#D4AF37] 
                                transition-all duration-300 group-hover:bg-[#D4AF37]/10">
                  <ArrowUp size={12} className="group-hover:scale-110 transition-transform duration-200" />
                </div>
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}