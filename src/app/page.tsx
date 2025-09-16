'use client'

import { motion } from 'framer-motion'
import {
  Clock,
  Phone,
  Star,
  ChefHat,
  Calendar,
  MapPin,
  Award,
  Utensils,
  TrendingUp,
  Shield,
  CheckCircle,
  ArrowRight,
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
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" }
  }

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
            className="relative z-10 flex flex-col items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h1
              variants={fadeInUp}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase tracking-[0.15em] text-[#D4AF37] drop-shadow-2xl mb-4 md:mb-6"
            >
              SALVADORES
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl md:text-2xl font-light tracking-wider mb-6 md:mb-8 text-gray-200"
            >
              Wine Bar & Restaurant
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="max-w-4xl text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 mb-8 md:mb-12 px-4"
            >
              Experience the finest in Mediterranean, French, Italian & Ceylonese cuisine 
              in an atmosphere of unparalleled luxury and elegance.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-2xl"
            >
              <motion.div
                variants={fadeInUp}
                className="flex-1 rounded-2xl border border-white/20 bg-black/60 p-4 sm:p-6 backdrop-blur-md hover:border-[#D4AF37]/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <Clock className="text-[#D4AF37] flex-shrink-0" size={18} />
                  <h3 className="text-base md:text-lg font-semibold text-[#D4AF37]">Hours</h3>
                </div>
                <p className="text-gray-300 text-xs md:text-sm mb-1">Monday - Sunday</p>
                <p className="text-white font-medium text-sm md:text-base">11:30 AM - 11:00 PM</p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex-1 rounded-2xl border border-white/20 bg-black/60 p-4 sm:p-6 backdrop-blur-md hover:border-[#D4AF37]/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <Phone className="text-[#D4AF37] flex-shrink-0" size={18} />
                  <h3 className="text-base md:text-lg font-semibold text-[#D4AF37]">Contact</h3>
                </div>
                <p className="text-gray-300 text-xs md:text-sm mb-1">80 2558 4076</p>
                <a
                  href="mailto:salvadoresfinedine@gmail.com"
                  className="text-white font-medium hover:text-[#D4AF37] transition-colors duration-300 text-xs md:text-sm break-all"
                >
                  salvadoresfinedine@gmail.com
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Signature Dishes Section */}
        <section className="bg-gradient-to-b from-black via-gray-900 to-black py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="mb-12 md:mb-16 text-center"
            >
              <h2 className="mb-4 md:mb-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                Signature Dishes
              </h2>
              <p className="mx-auto max-w-4xl text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 px-4">
                Culinary masterpieces crafted with passion, precision, and the finest ingredients from around the world
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
              {[
                {
                  name: 'Truffle Wellington',
                  description: 'Premium beef tenderloin wrapped in puff pastry with black truffle duxelles and foie gras',
                  price: '₹4,500',
                  category: "Chef's Special",
                },
                {
                  name: 'Lobster Thermidor',
                  description: 'Fresh Maine lobster with cognac cream sauce, gruyère cheese, and micro herbs',
                  price: '₹5,200',
                  category: 'Seafood Excellence',
                },
                {
                  name: 'Wagyu Tasting',
                  description: 'A5 Japanese wagyu prepared three ways with seasonal accompaniments',
                  price: '₹8,000',
                  category: 'Ultimate Indulgence',
                },
              ].map((dish, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm hover:border-[#D4AF37]/30 transition-all duration-500"
                >
                  <div className="relative h-40 sm:h-48 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                    <div className="absolute inset-0 bg-[#D4AF37]/10 group-hover:bg-[#D4AF37]/20 transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ChefHat className="text-[#D4AF37] opacity-40 group-hover:opacity-60 transition-opacity duration-500" size={50} />
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <span className="rounded-full bg-black/70 px-3 py-1 text-xs text-gray-400 backdrop-blur-sm">
                        Image Coming Soon
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-6">
                    <div className="mb-3 md:mb-4 flex items-start justify-between gap-2">
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-300 flex-1">
                        {dish.name}
                      </h3>
                      <span className="text-lg sm:text-xl font-bold text-[#D4AF37] flex-shrink-0">
                        {dish.price}
                      </span>
                    </div>
                    <p className="mb-3 md:mb-4 text-xs sm:text-sm leading-relaxed text-gray-300">
                      {dish.description}
                    </p>
                    <span className="inline-block rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-3 py-1 text-xs font-medium text-[#D4AF37]">
                      {dish.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <button className="group rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8941F] px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-bold text-black shadow-xl shadow-[#D4AF37]/30 hover:shadow-[#D4AF37]/50 transition-all duration-300 hover:scale-105">
                <span className="flex items-center gap-2 sm:gap-3">
                  <Utensils className="transition-transform duration-300 group-hover:rotate-12" size={18} />
                  View Full Menu
                  <Star className="transition-transform duration-300 group-hover:rotate-12" size={18} />
                </span>
              </button>
            </motion.div>
          </div>
        </section>

        {/* Reservations Section */}
        <section id="reservations" className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-black py-16 md:py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#D4AF37]/5 to-transparent opacity-30"></div>

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="mb-12 md:mb-16 text-center"
            >
              <h2 className="mb-4 md:mb-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                Reservations
              </h2>
              <p className="mx-auto max-w-4xl text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 px-4">
                Experience our seamless booking process and discover the optimal times to dine with us
              </p>
            </motion.div>

            {/* Main Reservations Grid */}
            <div className="mx-auto max-w-7xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
                
                {/* Left Column - Booking Process */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6 md:space-y-8"
                >
                  {/* Booking Process */}
                  <div className="rounded-2xl md:rounded-3xl border border-white/10 bg-black/60 p-6 md:p-8 backdrop-blur-sm">
                    <h3 className="mb-6 md:mb-8 flex items-center gap-3 font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#D4AF37]">
                      <CheckCircle className="text-[#D4AF37] flex-shrink-0" size={24} />
                      How We Handle Bookings
                    </h3>

                    <div className="space-y-4 md:space-y-6">
                      {[
                        {
                          step: "1",
                          title: "Instant Confirmation",
                          description: "Receive immediate booking confirmation via SMS and email with table details and special requests noted."
                        },
                        {
                          step: "2", 
                          title: "Personal Touch",
                          description: "Our concierge team contacts you 24 hours prior to confirm preferences and dietary requirements."
                        },
                        {
                          step: "3",
                          title: "Premium Preparation",
                          description: "Tables are personally prepared by our service team with custom settings for your occasion."
                        },
                        {
                          step: "4",
                          title: "Seamless Experience",
                          description: "Upon arrival, you're greeted by name and escorted to your reserved table with complimentary welcome."
                        }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex items-start gap-3 md:gap-4"
                        >
                          <div className="flex h-8 w-8 md:h-10 md:w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8941F] text-xs md:text-sm font-bold text-black">
                            {item.step}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="mb-1 md:mb-2 font-semibold text-white text-sm md:text-base">
                              {item.title}
                            </h4>
                            <p className="text-xs md:text-sm leading-relaxed text-gray-300">
                              {item.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Reserve Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                  >
                    <button className="group w-full rounded-xl md:rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#B8941F] px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl font-bold text-black shadow-2xl shadow-[#D4AF37]/40 hover:shadow-[#D4AF37]/60 transition-all duration-500 hover:scale-[1.02] transform">
                      <span className="flex items-center justify-center gap-3 md:gap-4">
                        <Calendar className="transition-transform duration-300 group-hover:scale-110 flex-shrink-0" size={20} />
                        <span className="truncate">Make Reservation</span>
                        <ArrowRight className="transition-transform duration-300 group-hover:translate-x-2 flex-shrink-0" size={20} />
                      </span>
                    </button>
                    <p className="mt-3 md:mt-4 text-xs md:text-sm text-gray-400">
                      Click to access our secure booking platform
                    </p>
                  </motion.div>
                </motion.div>

                {/* Right Column - Peak Times */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6 md:space-y-8"
                >
                  {/* Peak Hours */}
                  <div className="rounded-2xl md:rounded-3xl border border-white/10 bg-black/40 p-6 md:p-8 backdrop-blur-sm">
                    <h4 className="mb-4 md:mb-6 flex items-center gap-3 font-serif text-lg sm:text-xl md:text-2xl font-bold text-[#D4AF37]">
                      <TrendingUp className="text-[#D4AF37] flex-shrink-0" size={20} />
                      Peak Hours & Best Times
                    </h4>

                    <div className="space-y-4 md:space-y-6">
                      {[
                        {
                          title: "Peak Dinner Hours",
                          time: "7:30 PM - 9:30 PM",
                          description: "Our busiest period. Advance booking highly recommended.",
                          status: "High Demand",
                          color: "text-red-400"
                        },
                        {
                          title: "Optimal Dining",
                          time: "6:00 PM - 7:00 PM",
                          description: "Perfect timing for intimate conversations and relaxed service.",
                          status: "Recommended",
                          color: "text-green-400"
                        },
                        {
                          title: "Late Night Elegant",
                          time: "9:30 PM - 11:00 PM",
                          description: "Sophisticated atmosphere with our premium wine selection.",
                          status: "Available",
                          color: "text-blue-400"
                        }
                      ].map((period, index) => (
                        <motion.div 
                          key={index} 
                          variants={scaleIn}
                          initial="initial"
                          whileInView="animate"
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="rounded-xl border border-white/10 bg-gray-800/30 p-3 md:p-4"
                        >
                          <div className="flex items-center justify-between mb-2 md:mb-3 gap-2">
                            <h5 className="font-semibold text-white text-xs md:text-sm flex-1 min-w-0">
                              {period.title}
                            </h5>
                            <span className={`text-xs font-medium ${period.color} flex-shrink-0`}>
                              {period.status}
                            </span>
                          </div>
                          <p className="font-medium text-[#D4AF37] mb-1 md:mb-2 text-xs md:text-sm">
                            {period.time}
                          </p>
                          <p className="text-xs leading-relaxed text-gray-300">
                            {period.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Location & Contact Info */}
                  <div className="rounded-xl md:rounded-2xl border border-[#D4AF37]/20 bg-gradient-to-r from-[#D4AF37]/10 to-[#B8941F]/10 p-4 md:p-6">
                    <div className="mb-3 md:mb-4 flex items-center gap-3">
                      <MapPin className="text-[#D4AF37] flex-shrink-0" size={18} />
                      <h4 className="font-semibold text-white text-sm md:text-base">Visit Us</h4>
                    </div>
                    <p className="mb-1 md:mb-2 font-medium text-gray-300 text-xs md:text-sm">Salvadores Fine Dining</p>
                    <p className="mb-3 md:mb-4 text-gray-300 text-xs md:text-sm">123 Luxury Lane, Bengaluru, Karnataka</p>
                    <div className="space-y-2 md:space-y-3 text-xs md:text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="flex-shrink-0 text-[#D4AF37]" size={12} />
                        <span className="text-gray-300">Daily: 11:30 AM - 11:00 PM</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="flex-shrink-0 text-[#D4AF37]" size={12} />
                        <span className="text-gray-300">80 2558 4076</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="flex-shrink-0 text-[#D4AF37]" size={12} />
                        <span className="text-gray-300">Reservations guaranteed for 15 minutes</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Special Periods Section - Full Width Below Main Grid */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full"
              >
                <div className="rounded-2xl md:rounded-3xl border border-white/10 bg-black/40 p-6 md:p-8 backdrop-blur-sm">
                  <h4 className="mb-6 md:mb-8 flex items-center justify-center gap-3 font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#D4AF37]">
                    <Award className="text-[#D4AF37] flex-shrink-0" size={24} />
                    Special Periods & Events
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {[
                      {
                        period: "Weekend Evenings",
                        details: "Friday & Saturday 7:00 PM onwards",
                        note: "Premium experience with live jazz. Book 48 hours ahead.",
                        icon: "🎵"
                      },
                      {
                        period: "Holiday Celebrations",  
                        details: "New Year, Valentine's, Diwali",
                        note: "Special menus available. Limited seating with festive ambiance.",
                        icon: "🎉"
                      },
                      {
                        period: "Business Lunch",
                        details: "Monday - Friday 12:00 PM - 3:00 PM",
                        note: "Express service available. Private dining rooms for meetings.",
                        icon: "💼"
                      }
                    ].map((special, index) => (
                      <motion.div 
                        key={index} 
                        variants={scaleIn}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 p-4 md:p-6 text-center hover:bg-[#D4AF37]/15 transition-all duration-300"
                      >
                        <div className="mb-3 md:mb-4">
                          <div className="text-2xl md:text-3xl mb-2">{special.icon}</div>
                          <h5 className="font-semibold text-white text-sm md:text-base mb-2">
                            {special.period}
                          </h5>
                          <p className="text-xs md:text-sm text-[#D4AF37] font-medium mb-3">
                            {special.details}
                          </p>
                        </div>
                        <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                          {special.note}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="bg-gradient-to-b from-black via-gray-900 to-black py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="mb-12 md:mb-16 text-center"
            >
              <h2 className="mb-4 md:mb-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                Guest Reviews
              </h2>
              <p className="mx-auto max-w-4xl text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 px-4">
                Discover what our valued guests say about their extraordinary dining experiences
              </p>
            </motion.div>

            <div className="mb-8 md:mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  name: 'Arjun Malhotra',
                  rating: 5,
                  review: 'Absolutely phenomenal experience! The truffle wellington was divine, and the service was impeccable. Every detail was perfect.',
                  occasion: 'Anniversary Dinner',
                  date: '2 weeks ago',
                },
                {
                  name: 'Priya Sharma',
                  rating: 5,
                  review: 'Salvadores exceeded all expectations. The ambiance is breathtaking, and the chef\'s tasting menu was a culinary masterpiece. Highly recommended!',
                  occasion: 'Business Dinner',
                  date: '1 month ago',
                },
                {
                  name: 'David Rodriguez',
                  rating: 5,
                  review: 'World-class dining experience in Bengaluru. The wine selection is outstanding, and the staff\'s knowledge about each dish was impressive.',
                  occasion: 'Special Occasion',
                  date: '3 weeks ago',
                },
              ].map((review, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-2xl md:rounded-3xl border border-white/10 bg-black/50 p-4 sm:p-6 backdrop-blur-sm hover:border-[#D4AF37]/30 transition-all duration-500"
                >
                  <div className="mb-4 md:mb-6 flex items-center justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base md:text-lg font-semibold text-white truncate">{review.name}</h4>
                      <p className="text-xs md:text-sm text-gray-400">{review.occasion}</p>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="fill-current text-[#D4AF37]" size={14} />
                      ))}
                    </div>
                  </div>

                  <blockquote className="mb-4 md:mb-6 text-xs md:text-sm leading-relaxed text-gray-300 italic">
                    &ldquo;{review.review}&rdquo;
                  </blockquote>

                  <div className="flex items-center justify-between text-xs gap-3">
                    <span className="text-gray-400 flex-shrink-0">{review.date}</span>
                    <span className="flex items-center gap-1 font-medium text-[#D4AF37] flex-shrink-0">
                      <Star className="fill-current" size={8} />
                      Verified Guest
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="mx-auto max-w-2xl rounded-2xl md:rounded-3xl border border-white/10 bg-black/40 p-6 md:p-8 backdrop-blur-sm">
                <div className="mb-4 md:mb-6 flex items-center justify-center gap-3 md:gap-4">
                  <div className="flex items-center gap-1 md:gap-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="fill-current text-[#D4AF37]" size={16} />
                    ))}
                  </div>
                  <span className="text-xl md:text-2xl font-bold text-[#D4AF37]">4.9</span>
                </div>
                <p className="mb-1 md:mb-2 text-lg md:text-xl text-white">Average Rating</p>
                <p className="mb-4 md:mb-6 text-sm md:text-base text-gray-300">Based on 247 verified reviews</p>
                <button className="rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8941F] px-6 md:px-8 py-2 md:py-3 text-sm md:text-base font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:ring-offset-2 focus:ring-offset-gray-900">
                  Read All Reviews
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