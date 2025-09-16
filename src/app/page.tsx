'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Clock,
  Phone,
  ChefHat,
  Calendar,
  Award,
  ArrowRight, // Added for the new CTA
} from 'lucide-react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function SalvadoresHomepage() {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.15 // Slightly increased stagger for better effect
      }
    }
  }

  const exploreLinks = [
    {
      title: 'Reservations',
      description: 'Secure your table for an unforgettable dining experience',
      href: '/reservation',
      icon: Calendar,
      imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop',
    },
    {
      title: 'Menu',
      description: 'Explore our exquisite culinary offerings and chef specials',
      href: '/menu',
      icon: ChefHat,
      imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'About Salvadores',
      description: 'Discover the story, heritage, and passion behind our name',
      href: '/about',
      icon: Award,
      imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-black text-gray-200">
      <Header />

      <main className="flex-grow pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden text-center text-white">
          <div className="absolute inset-0 z-0">
            <div
              className="h-full w-full bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: "url('https://lh3.googleusercontent.com/gps-cs-s/AC9h4noE8FziiP98v90A39QVw5EHOQUcLm3bqm6hL47eikRftEh6AVfObjkecPlh-m8RyKxmCJqfdbPYVnyn8jIl6mimZAAxUqGXDA6TewRL3DgAKBsYbkIB9ZUjCIo7vryrH_HwoG9aDA=s1360-w1360-h1020-rw')",
              }}
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>

          <motion.div
            className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h1
              variants={fadeInUp}
              className="mb-4 font-serif text-4xl font-bold uppercase tracking-[0.15em] text-[#D4AF37] drop-shadow-2xl sm:text-5xl md:mb-6 md:text-6xl lg:text-7xl xl:text-8xl"
            >
              SALVADORES
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mb-6 text-lg font-light tracking-wider text-gray-200 sm:text-xl md:mb-8 md:text-2xl"
            >
              Wine Bar & Restaurant
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="mb-8 max-w-4xl px-4 text-sm leading-relaxed text-gray-300 sm:text-base md:mb-12 md:text-lg"
            >
              Experience the finest in Mediterranean, French, Italian & Ceylonese cuisine 
              in an atmosphere of unparalleled luxury and elegance.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="flex w-full max-w-2xl flex-col gap-4 sm:flex-row sm:gap-6"
            >
              <motion.div
                variants={fadeInUp}
                className="flex-1 rounded-2xl border border-white/20 bg-black/60 p-4 backdrop-blur-md transition-all duration-300 hover:border-[#D4AF37]/50 sm:p-6"
              >
                <div className="mb-3 flex items-center gap-3 md:mb-4">
                  <Clock className="flex-shrink-0 text-[#D4AF37]" size={18} />
                  <h3 className="text-base font-semibold text-[#D4AF37] md:text-lg">Hours</h3>
                </div>
                <p className="mb-1 text-xs text-gray-300 md:text-sm">Monday - Sunday</p>
                <p className="text-sm font-medium text-white md:text-base">11:30 AM - 11:00 PM</p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex-1 rounded-2xl border border-white/20 bg-black/60 p-4 backdrop-blur-md transition-all duration-300 hover:border-[#D4AF37]/50 sm:p-6"
              >
                <div className="mb-3 flex items-center gap-3 md:mb-4">
                  <Phone className="flex-shrink-0 text-[#D4AF37]" size={18} />
                  <h3 className="text-base font-semibold text-[#D4AF37] md:text-lg">Contact</h3>
                </div>
                <p className="mb-1 text-xs text-gray-300 md:text-sm">80 2558 4076</p>
                <a
                  href="mailto:salvadoresfinedine@gmail.com"
                  className="break-all text-xs font-medium text-white transition-colors duration-300 hover:text-[#D4AF37] md:text-sm"
                >
                  salvadoresfinedine@gmail.com
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Explore Section - IMPROVED VERSION */}
        <section className="bg-gradient-to-b from-black via-gray-900 to-black py-20 sm:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 md:gap-10"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
            >
              {exploreLinks.map((link) => (
                <motion.div key={link.title} variants={fadeInUp}>
                  <Link 
                    href={link.href} 
                    className="group relative block h-96 overflow-hidden rounded-2xl border border-white/10 shadow-lg shadow-black/40 
                               transition-all duration-500 ease-in-out
                               hover:border-[#D4AF37]/50 hover:shadow-2xl hover:shadow-[#D4AF37]/10 hover:-translate-y-2"
                  >
                    <img
                      src={link.imageUrl}
                      alt={link.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
                    
                    <div className="relative z-10 flex h-full flex-col items-center justify-end p-6 text-center text-white md:p-8">
                      <div className="flex flex-col items-center transition-transform duration-500 group-hover:-translate-y-4">
                        
                        {/* Improved Icon Holder */}
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-sm">
                          <link.icon className="h-8 w-8 text-[#D4AF37]" strokeWidth={1.5} />
                        </div>
                        
                        <h3 className="font-serif text-2xl font-bold uppercase tracking-widest text-white">
                          {link.title}
                        </h3>
                        <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                          {link.description}
                        </p>

                        {/* New CTA revealed on hover */}
                        <div className="mt-4 flex items-center gap-2 text-sm text-[#D4AF37] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <span>Explore</span>
                          <ArrowRight size={16} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}