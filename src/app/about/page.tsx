// src/app/about/page.tsx
'use client'

import { motion } from 'framer-motion'
import {
  Award,
  Star,
  Wine,
  Utensils,
  Heart,
  Trophy,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import { Great_Vibes, Playfair_Display } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

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

export default function AboutPage() {
  // Enhanced animation variants - removed Variants typing
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  }

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  }

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  }

  const staggerContainer = {
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

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  }

  const titleVariants = {
    initial: { 
      opacity: 0, 
      y: 50, 
      scale: 0.9 
    },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  }

  const cardHover = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  }

  const awards = [
    { year: '2024', title: 'Best Fine Dining Restaurant', organization: 'Bengaluru Food Awards' },
    { year: '2023', title: 'Excellence in Service', organization: 'Hospitality India' },
    { year: '2023', title: 'Wine Program of the Year', organization: 'Indian Wine Society' },
    { year: '2022', title: 'Restaurant of the Year', organization: 'Times Food Guide' }
  ]

  // Image URLs - Replace these with your actual image paths
  const imageUrls = {
    heroBackground: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noy8nrNZGsjtNJiIEYlczEsKA4Pjk6-N6JAfiVftXqTPpUv2902F4AsH5PRA0SSuOj6KVZWGf9hHYIXFqYf5EjyC9S03cOFSXMC7OF_0vnTFzGCYDc7a59bVCxDbjt_NP0vMcGK6w=s1360-w1360-h1020-rw',
    storyImage: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nowouO_m2P-OgCkTlqnUfgJOHPOS57etWTnLKTqcAD7RSs1-jUsqQtk18Nn4Jv-4gxo7_0qm9WAx4JfYNaBJ9b9Mh7sajhNvrw4Htw2WtyergZAB8otLpUHVTt77DfHoBDZg5E=s1360-w1360-h1020-rw',
    awardsDisplay: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nocMqOFgwmpX5EkkGirY4N2WTceNhb6nsuKPq0OX3yGKlLFR47HnsiaGQ97Q-_iBkL2PiVFfjn9EkU-QlTgO-l9zRJNP292ByLI2xokFfRIvsGoL5ZzvBH_ZrVLS8Ogop2dSs2G=s1360-w1360-h1020-rw',
    mainDining: 'https://lh3.googleusercontent.com/p/AF1QipN8BZnITblbkm4pnh899KeUzBQHJgghDzX3r7fH=s1360-w1360-h1020-rw',
    privateDining: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npajl6pEIcahyudOnRjOR-7MuDb0pDELOGVFrfHLkQ75gWlTjt8Eg8cYD9DZhHpSxWD1rL2vj42ZEFQwRpcQ_OH9xbD3VOeeA3eGwvIqyxtlfeFG5sj4Vrw1P624_XYEIEDwSVI=s1360-w1360-h1020-rw',
    wineCellar: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nr7wwFfPuXjwmnUzikaL9pwuPwc_Uzvh8x0eEWWGD1HGtIGl3iSlLM1fBayhduWsBohXWNIO7sXrKhzWcNP0HlVJRSeuaU7l-JDK99M44UhrzQxiHknSoYkhbrAMoR3Z7A2aDO3=s1360-w1360-h1020-rw',
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-gray-200">
      <Header />

      <main className="flex-grow pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={imageUrls.heroBackground}
              alt="Salvadores restaurant elegant dining room interior"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 via-black/80 to-black/90" />
          </div>

          <motion.div
            className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h1
              variants={titleVariants}
              className={`${greatVibes.className} text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#D4AF37] mb-8`}
              style={{
                filter: 'drop-shadow(0 0 30px rgba(212,175,55,0.4))'
              }}
            >
              About Salvadores
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className={`${playfair.className} text-xl sm:text-2xl md:text-3xl font-light text-gray-200 max-w-4xl mx-auto mb-8`}
            >
              Where culinary artistry meets unparalleled hospitality
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className={`${playfair.className} text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 max-w-4xl mx-auto`}
            >
              Since 2018, Salvadores has been Bengaluru&apos;s premier destination for extraordinary dining experiences, 
              combining Mediterranean, French, Italian, and Ceylonese cuisines with impeccable service and elegant ambiance.
            </motion.p>
          </motion.div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-black via-gray-900 to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
              <motion.div
                variants={fadeInLeft}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                className="space-y-6"
              >
                <h2 className={`${greatVibes.className} text-4xl sm:text-5xl md:text-6xl text-[#D4AF37] mb-8`}>
                  Our Story
                </h2>
                <p className={`${playfair.className} text-base md:text-lg leading-relaxed text-gray-300`}>
                  Born from a passion for culinary excellence, Salvadores began as a dream to create a dining destination 
                  that would rival the world&apos;s finest restaurants. Our founders, inspired by travels across the Mediterranean 
                  and their Ceylonese heritage, envisioned a place where diverse culinary traditions would harmoniously blend.
                </p>
                <p className={`${playfair.className} text-base md:text-lg leading-relaxed text-gray-300`}>
                  Today, we stand as testament to that vision, having earned recognition as one of India&apos;s premier fine dining 
                  establishments. Every dish tells a story, every service interaction reflects our commitment to perfection, 
                  and every evening spent with us becomes a cherished memory.
                </p>
                <motion.div 
                  className="flex items-center gap-6 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="text-center">
                    <div className={`${playfair.className} text-2xl font-bold text-[#D4AF37]`}>7+</div>
                    <div className="text-sm text-gray-400">Years of Excellence</div>
                  </div>
                  <div className="text-center">
                    <div className={`${playfair.className} text-2xl font-bold text-[#D4AF37]`}>50K+</div>
                    <div className="text-sm text-gray-400">Happy Guests</div>
                  </div>
                  <div className="text-center">
                    <div className={`${playfair.className} text-2xl font-bold text-[#D4AF37]`}>4.9</div>
                    <div className="text-sm text-gray-400">Average Rating</div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                className="relative"
              >
                <motion.div 
                  className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={imageUrls.storyImage}
                    alt="Salvadores restaurant founders and heritage moments"
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  />
                </motion.div>
                <motion.div 
                  className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Heart size={32} className="text-black" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Awards & Recognition Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
              <motion.div
                variants={fadeInLeft}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
              >
                <h2 className={`${greatVibes.className} text-4xl sm:text-5xl md:text-6xl text-[#D4AF37] mb-8`}>
                  Awards & Recognition
                </h2>
                
                <div className="space-y-6">
                  {awards.map((award, index) => (
                    <motion.div
                      key={index}
                      variants={cardHover}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      whileHover="hover"
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-black/30 hover:bg-black/50 hover:border-[#D4AF37]/30 transition-all duration-300"
                    >
                      <motion.div 
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8941F] flex items-center justify-center flex-shrink-0"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Trophy size={20} className="text-black" />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`${playfair.className} text-[#D4AF37] font-bold text-lg`}>{award.year}</span>
                          <div className="h-px bg-[#D4AF37]/30 flex-1"></div>
                        </div>
                        <h3 className={`${playfair.className} text-white font-bold text-lg mb-1`}>{award.title}</h3>
                        <p className="text-gray-300 text-sm">{award.organization}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                className="relative"
              >
                <motion.div 
                  className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={imageUrls.awardsDisplay}
                    alt="Salvadores restaurant awards, trophies and certificates display"
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  />
                </motion.div>
                
                {/* Decorative Elements */}
                <motion.div 
                  className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Star size={28} className="text-black fill-current" />
                </motion.div>
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#B8941F] to-[#D4AF37] rounded-full flex items-center justify-center"
                  initial={{ scale: 0, rotate: 180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Award size={20} className="text-black" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Location & Ambiance Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className={`${greatVibes.className} text-4xl sm:text-5xl md:text-6xl text-[#D4AF37] mb-6`}>
                Our Space
              </h2>
              <p className={`${playfair.className} text-lg md:text-xl text-gray-300 max-w-3xl mx-auto`}>
                Experience elegance in every corner of our thoughtfully designed restaurant
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: 'Main Dining Room',
                  description: 'Elegant seating for 80 guests with panoramic city views',
                  features: ['City Views', 'Live Piano', 'Climate Controlled'],
                  image: imageUrls.mainDining,
                  alt: 'Salvadores main dining room with elegant seating and city views'
                },
                {
                  title: 'Private Dining Rooms',
                  description: '3 intimate spaces perfect for special celebrations',
                  features: ['Exclusive Service', 'Custom Menus', 'AV Equipment'],
                  image: imageUrls.privateDining,
                  alt: 'Salvadores private dining room setup for special occasions'
                },
                {
                  title: 'Wine Cellar',
                  description: 'Temperature-controlled cellar housing premium collection',
                  features: ['Rare Vintages', 'Sommelier Tours', 'Tasting Events'],
                  image: imageUrls.wineCellar,
                  alt: 'Salvadores wine cellar with premium wine collection'
                }
              ].map((space, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.15 }}
                  className="group"
                >
                  {/* Space Image */}
                  <motion.div 
                    className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-white/10"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={space.image}
                      alt={space.alt}
                      width={800}
                      height={600}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </motion.div>

                  <motion.div 
                    className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-sm hover:border-[#D4AF37]/30 transition-all duration-500"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className={`${playfair.className} text-xl font-bold text-white mb-3`}>{space.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{space.description}</p>
                    <div className="space-y-2">
                      {space.features.map((feature, featureIndex) => (
                        <motion.div 
                          key={featureIndex} 
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: featureIndex * 0.1 }}
                        >
                          <CheckCircle size={16} className="text-[#D4AF37] flex-shrink-0" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className={`${greatVibes.className} text-4xl sm:text-5xl md:text-6xl text-[#D4AF37] mb-6`}>
                Experience Salvadores
              </h2>
              <p className={`${playfair.className} text-lg md:text-xl text-gray-300 mb-8 leading-relaxed`}>
                We invite you to be part of our story. Join us for an unforgettable dining experience 
                where every detail has been crafted with passion and precision.
              </p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.button 
                  className="group rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8941F] px-8 py-4 text-lg font-bold text-black shadow-xl shadow-[#D4AF37]/30 hover:shadow-[#D4AF37]/50 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center justify-center gap-3">
                    <Utensils size={20} />
                    Reserve Your Table
                    <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </motion.button>
                <motion.button 
                  className="rounded-full border border-[#D4AF37]/30 bg-black/60 px-8 py-4 text-lg font-bold text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center justify-center gap-3">
                    <Wine size={20} />
                    View Our Menu
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}