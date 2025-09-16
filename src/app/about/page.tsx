'use client'

import { motion } from 'framer-motion'
import {
  Award,
  Users,
  Star,
  Wine,
  Utensils,
  Heart,
  Globe,
  Calendar,
  Trophy,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Crown,
  Flame
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function AboutPage() {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const fadeInLeft = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  }

  const fadeInRight = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 }
  }

  const awards = [
    { year: '2024', title: 'Best Fine Dining Restaurant', organization: 'Bengaluru Food Awards' },
    { year: '2023', title: 'Excellence in Service', organization: 'Hospitality India' },
    { year: '2023', title: 'Wine Program of the Year', organization: 'Indian Wine Society' },
    { year: '2022', title: 'Restaurant of the Year', organization: 'Times Food Guide' }
  ]

  const milestones = [
    { year: '2018', event: 'Salvadores Opens', description: 'Founded with a vision to bring world-class dining to Bengaluru' },
    { year: '2019', event: 'First Award', description: 'Recognized as "Rising Star Restaurant" by Bengaluru Times' },
    { year: '2020', event: 'Menu Innovation', description: 'Introduced seasonal tasting menus and wine pairings' },
    { year: '2021', event: 'Expansion', description: 'Added private dining rooms and expanded wine cellar' },
    { year: '2022', event: 'International Recognition', description: 'Featured in international culinary magazines' },
    { year: '2023', event: 'Sustainability Program', description: 'Launched farm-to-table and zero-waste initiatives' },
    { year: '2024', event: 'Continued Excellence', description: 'Maintaining highest standards with 4.9-star rating' }
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
              variants={fadeInUp}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-[0.15em] text-[#D4AF37] drop-shadow-2xl mb-6"
            >
              About Salvadores
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl sm:text-2xl md:text-3xl font-light tracking-wider mb-8 text-gray-200 max-w-4xl mx-auto"
            >
              Where culinary artistry meets unparalleled hospitality
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 max-w-4xl mx-auto"
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
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#D4AF37] mb-6">
                  Our Story
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-gray-300">
                  Born from a passion for culinary excellence, Salvadores began as a dream to create a dining destination 
                  that would rival the world&apos;s finest restaurants. Our founders, inspired by travels across the Mediterranean 
                  and their Ceylonese heritage, envisioned a place where diverse culinary traditions would harmoniously blend.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-gray-300">
                  Today, we stand as testament to that vision, having earned recognition as one of India&apos;s premier fine dining 
                  establishments. Every dish tells a story, every service interaction reflects our commitment to perfection, 
                  and every evening spent with us becomes a cherished memory.
                </p>
                <div className="flex items-center gap-6 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#D4AF37]">7+</div>
                    <div className="text-sm text-gray-400">Years of Excellence</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#D4AF37]">50K+</div>
                    <div className="text-sm text-gray-400">Happy Guests</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#D4AF37]">4.9</div>
                    <div className="text-sm text-gray-400">Average Rating</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src={imageUrls.storyImage}
                    alt="Salvadores restaurant founders and heritage moments"
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center">
                  <Heart size={32} className="text-black" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

  
        {/* Philosophy Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#D4AF37] mb-6">
                Our Philosophy
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
                The principles that guide everything we do at Salvadores
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {[
                {
                  icon: Flame,
                  title: 'Culinary Excellence',
                  description: 'We source the finest ingredients globally and employ time-honored techniques alongside innovative methods to create unforgettable flavors.',
                  color: 'text-red-400'
                },
                {
                  icon: Heart,
                  title: 'Heartfelt Service',
                  description: 'Every guest is treated as family, with personalized attention and genuine care that makes each visit feel special and memorable.',
                  color: 'text-pink-400'
                },
                {
                  icon: Crown,
                  title: 'Luxury Experience',
                  description: 'From our elegant ambiance to our curated wine selection, every detail is designed to provide an unparalleled fine dining experience.',
                  color: 'text-yellow-400'
                },
                {
                  icon: Globe,
                  title: 'Cultural Fusion',
                  description: 'We celebrate the rich culinary traditions of the Mediterranean, France, Italy, and Ceylon, creating harmonious flavor combinations.',
                  color: 'text-blue-400'
                },
                {
                  icon: Users,
                  title: 'Community Focus',
                  description: 'We believe in supporting local farmers, artisans, and our community while creating gathering spaces for meaningful connections.',
                  color: 'text-green-400'
                },
                {
                  icon: Sparkles,
                  title: 'Continuous Innovation',
                  description: 'While respecting tradition, we constantly evolve our menu and techniques to surprise and delight our discerning guests.',
                  color: 'text-purple-400'
                }
              ].map((principle, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-6 md:p-8 backdrop-blur-sm hover:border-[#D4AF37]/30 transition-all duration-500 h-full">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#B8941F]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <principle.icon size={32} className={`${principle.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{principle.title}</h3>
                    <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </motion.div>
              ))}
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
                viewport={{ once: true }}
              >
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#D4AF37] mb-8">
                  Awards & Recognition
                </h2>
                
                <div className="space-y-6">
                  {awards.map((award, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-black/30 hover:bg-black/50 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8941F] flex items-center justify-center flex-shrink-0">
                        <Trophy size={20} className="text-black" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-[#D4AF37] font-bold text-lg">{award.year}</span>
                          <div className="h-px bg-[#D4AF37]/30 flex-1"></div>
                        </div>
                        <h3 className="text-white font-bold text-lg mb-1">{award.title}</h3>
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
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src={imageUrls.awardsDisplay}
                    alt="Salvadores restaurant awards, trophies and certificates display"
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  />
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center">
                  <Star size={28} className="text-black fill-current" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#B8941F] to-[#D4AF37] rounded-full flex items-center justify-center">
                  <Award size={20} className="text-black" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#D4AF37] mb-6">
                Our Journey
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                From humble beginnings to becoming Bengaluru&apos;s premier fine dining destination
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#D4AF37] to-[#B8941F] md:transform md:-translate-x-px"></div>

                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative flex items-center mb-12 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full md:transform md:-translate-x-1/2 z-10"></div>

                    {/* Content */}
                    <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                      <div className="rounded-2xl border border-white/10 bg-black/60 p-6 backdrop-blur-sm">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-2xl font-bold text-[#D4AF37]">{milestone.year}</span>
                          <Calendar size={20} className="text-[#D4AF37]" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{milestone.event}</h3>
                        <p className="text-gray-300 leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>

                    {/* Spacer for desktop layout */}
                    <div className="hidden md:block md:w-2/12"></div>
                  </motion.div>
                ))}
              </div>
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
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#D4AF37] mb-6">
                Our Space
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
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
                  description: 'Temperature-controlled cellar housing 500+ premium selections',
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
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  {/* Space Image */}
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-white/10">
                    <Image
                      src={space.image}
                      alt={space.alt}
                      width={800}
                      height={600}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-sm hover:border-[#D4AF37]/30 transition-all duration-500">
                    <h3 className="text-xl font-bold text-white mb-3">{space.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{space.description}</p>
                    <div className="space-y-2">
                      {space.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle size={16} className="text-[#D4AF37] flex-shrink-0" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
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
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#D4AF37] mb-6">
                Experience Salvadores
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                We invite you to be part of our story. Join us for an unforgettable dining experience 
                where every detail has been crafted with passion and precision.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8941F] px-8 py-4 text-lg font-bold text-black shadow-xl shadow-[#D4AF37]/30 hover:shadow-[#D4AF37]/50 transition-all duration-300 hover:scale-105">
                  <span className="flex items-center justify-center gap-3">
                    <Utensils size={20} />
                    Reserve Your Table
                    <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </button>
                <button className="rounded-full border border-[#D4AF37]/30 bg-black/60 px-8 py-4 text-lg font-bold text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300">
                  <span className="flex items-center justify-center gap-3">
                    <Wine size={20} />
                    View Our Menu
                  </span>
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}