// src/app/page.tsx
'use client'

import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
  Clock,
  Phone,
  ChefHat,
  Calendar,
  Award,
  ArrowRight,
} from 'lucide-react'
import { Great_Vibes, Playfair_Display } from 'next/font/google'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

// Premium font imports
const greatVibes = Great_Vibes({ 
  subsets: ['latin'], 
  weight: ['400'],
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export default function SalvadoresHomepage() {
  // BUILD FIX: Explicitly typed all variant objects with the 'Variants' type
  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut"
      }
    }
  }

  const staggerContainer: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const cardVariants: Variants = {
    initial: { opacity: 0, y: 60, scale: 0.9 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.7,
        ease: "easeOut"
      }
    }
  }

  const cardHover: Variants = {
    hover: {
      y: -12,
      scale: 1.03,
      rotateY: 2,
      transition: {
        duration: 0.4,
        ease: "easeOut"
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

      <main className="flex-grow mt-14">
        {/* Hero Section */}
        <section className="relative flex min-h-screen mt-16 items-center justify-center overflow-hidden text-center text-white">
          <div className="absolute inset-0 z-0">
            <div
              className="h-full w-full bg-cover bg-center bg-fixed animate-kenburns"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop')",
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
              className={`${greatVibes.className} text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#D4AF37] mb-6`}
              style={{
                filter: 'drop-shadow(0 0 30px rgba(212,175,55,0.4))'
              }}
            >
              Salvadores
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className={`${playfair.className} text-xl sm:text-2xl md:text-3xl font-light tracking-wider text-gray-200 mb-8`}
            >
              Wine Bar & Restaurant
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className={`${playfair.className} max-w-4xl px-4 text-lg md:text-xl leading-relaxed text-gray-300 mb-12`}
            >
              Experience the finest in Mediterranean, French, Italian & Ceylonese cuisine 
              in an atmosphere of unparalleled luxury and elegance.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="flex w-full max-w-3xl flex-col gap-6 sm:flex-row"
            >
              <motion.div
                variants={cardVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(212,175,55,0.2)"
                }}
                className="flex-1 rounded-3xl border border-white/20 bg-black/60 p-6 backdrop-blur-md transition-all duration-500 hover:border-[#D4AF37]/50 sm:p-8"
              >
                <div className="mb-4 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37] to-amber-600">
                    <Clock className="text-black" size={24} />
                  </div>
                </div>
                <h3 className={`${playfair.className} text-xl font-semibold text-[#D4AF37] mb-3 text-center`}>Hours</h3>
                <p className={`${playfair.className} text-gray-300 text-center mb-2`}>Monday - Sunday</p>
                <p className={`${playfair.className} text-lg font-medium text-white text-center`}>11:30 AM - 11:00 PM</p>
              </motion.div>

              <motion.div
                variants={cardVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(212,175,55,0.2)"
                }}
                className="flex-1 rounded-3xl border border-white/20 bg-black/60 p-6 backdrop-blur-md transition-all duration-500 hover:border-[#D4AF37]/50 sm:p-8"
              >
                <div className="mb-4 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37] to-amber-600">
                    <Phone className="text-black" size={24} />
                  </div>
                </div>
                <h3 className={`${playfair.className} text-xl font-semibold text-[#D4AF37] mb-3 text-center`}>Contact</h3>
                <p className={`${playfair.className} text-lg font-medium text-white text-center mb-2`}>80 2558 4076</p>
                <a
                  href="mailto:salvadoresfinedine@gmail.com"
                  className={`${playfair.className} text-sm text-gray-300 hover:text-[#D4AF37] transition-colors duration-300 text-center block`}
                >
                  salvadoresfinedine@gmail.com
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        <section className="bg-gradient-to-b from-black via-gray-900 to-black py-20 sm:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #D4AF37 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }} />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className={`${greatVibes.className} text-5xl md:text-6xl lg:text-7xl text-[#D4AF37] mb-6`}>
                Discover Excellence
              </h2>
              <p className={`${playfair.className} text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed`}>
                Each experience at Salvadores is carefully crafted to create lasting memories
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 md:gap-10"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
            >
              {exploreLinks.map((link, index) => (
                <motion.div 
                  key={link.title} 
                  variants={cardVariants}
                  whileHover="hover"
                  className="group relative"
                >
                  <Link href={link.href} className="block h-full">
                    <motion.div
                      variants={cardHover}
                      className="relative h-[450px] overflow-hidden rounded-3xl border border-white/10 shadow-lg shadow-black/40 
                                 transition-all duration-500 ease-out hover:border-[#D4AF37]/50 hover:shadow-2xl hover:shadow-[#D4AF37]/20
                                 transform-gpu perspective-1000"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <div className="absolute inset-0">
                        <Image
                          src={link.imageUrl}
                          alt={link.title}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent 
                                        group-hover:from-black/95 transition-all duration-500" />
                      </div>
                      
                      <div className="relative z-10 flex h-full flex-col items-center justify-end p-8 text-center text-white">
                        <motion.div 
                          className="flex flex-col items-center transition-transform duration-500 group-hover:-translate-y-6"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                        >
                          <motion.div 
                            className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-sm
                                       group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/10 transition-all duration-500"
                            whileHover={{ 
                              scale: 1.1, 
                              rotate: 360,
                              boxShadow: "0 0 30px rgba(212,175,55,0.4)"
                            }}
                            transition={{ duration: 0.6 }}
                          >
                            <link.icon className="h-10 w-10 text-[#D4AF37]" strokeWidth={1.5} />
                          </motion.div>
                          
                          <h3 className={`${playfair.className} text-2xl lg:text-3xl font-bold text-white mb-4 
                                         group-hover:text-[#D4AF37] transition-colors duration-500`}>
                            {link.title}
                          </h3>
                          
                          <p className={`${playfair.className} text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-500`}>
                            {link.description}
                          </p>

                          <motion.div
                            className="flex items-center gap-3 text-[#D4AF37] font-medium opacity-0 group-hover:opacity-100 transition-all duration-500"
                            initial={{ x: -10 }}
                            whileHover={{ x: 10 }}
                            transition={{ duration: 0.3 }}
                          >
                            <span className={`${playfair.className} text-lg`}>Explore</span>
                            <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                          </motion.div>
                        </motion.div>
                      </div>

                      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 
                                     transition-opacity duration-700 pointer-events-none"
                           style={{
                             background: 'radial-gradient(circle at center, rgba(212,175,55,0.15) 0%, transparent 70%)'
                           }} />
                    </motion.div>
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