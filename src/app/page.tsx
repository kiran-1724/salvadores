'use client'

import { motion } from 'framer-motion'
import {
  Clock,
  Phone,
  Star,
  ChefHat,
  Calendar,
  Users,
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
  // Simplified animation variants for better performance
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

  return (
    <div className="flex min-h-screen flex-col bg-black text-gray-200">
      {/* Header */}
  <Header />

      <main className="flex-grow pt-20">
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
            className="relative z-10 flex flex-col items-center px-4 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h1
              variants={fadeInUp}
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-[0.15em] text-[#D4AF37] drop-shadow-2xl mb-6"
            >
              SALVADORES
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl font-light tracking-wider mb-8 text-gray-200"
            >
              Wine Bar & Restaurant
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="max-w-3xl text-base md:text-lg leading-relaxed text-gray-300 mb-12"
            >
              Experience the finest in Mediterranean, French, Italian & Ceylonese cuisine 
              in an atmosphere of unparalleled luxury and elegance.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="flex flex-col md:flex-row gap-6 w-full max-w-2xl"
            >
              <motion.div
                variants={fadeInUp}
                className="flex-1 rounded-2xl border border-white/20 bg-black/60 p-6 backdrop-blur-md hover:border-[#D4AF37]/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="text-[#D4AF37]" size={20} />
                  <h3 className="text-lg font-semibold text-[#D4AF37]">Hours</h3>
                </div>
                <p className="text-gray-300 text-sm mb-1">Monday - Sunday</p>
                <p className="text-white font-medium">11:30 AM - 11:00 PM</p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex-1 rounded-2xl border border-white/20 bg-black/60 p-6 backdrop-blur-md hover:border-[#D4AF37]/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="text-[#D4AF37]" size={20} />
                  <h3 className="text-lg font-semibold text-[#D4AF37]">Contact</h3>
                </div>
                <p className="text-gray-300 text-sm mb-1">80 2558 4076</p>
                <a
                  href="mailto:salvadoresfinedine@gmail.com"
                  className="text-white font-medium hover:text-[#D4AF37] transition-colors duration-300 text-sm"
                >
                  salvadoresfinedine@gmail.com
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Signature Dishes Section */}
        <section className="bg-gradient-to-b from-black via-gray-900 to-black py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="mb-16 text-center"
            >
              <h2 className="mb-6 font-serif text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                Signature Dishes
              </h2>
              <p className="mx-auto max-w-3xl text-lg md:text-xl leading-relaxed text-gray-300">
                Culinary masterpieces crafted with passion, precision, and the finest ingredients from around the world
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                    <div className="absolute inset-0 bg-[#D4AF37]/10 group-hover:bg-[#D4AF37]/20 transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ChefHat className="text-[#D4AF37] opacity-40 group-hover:opacity-60 transition-opacity duration-500" size={60} />
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <span className="rounded-full bg-black/70 px-3 py-1 text-xs text-gray-400 backdrop-blur-sm">
                        Image Coming Soon
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4 flex items-start justify-between">
                      <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                        {dish.name}
                      </h3>
                      <span className="text-xl font-bold text-[#D4AF37] ml-2">
                        {dish.price}
                      </span>
                    </div>
                    <p className="mb-4 text-sm leading-relaxed text-gray-300">
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
              <button className="group rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8941F] px-10 py-4 text-lg font-bold text-black shadow-xl shadow-[#D4AF37]/30 hover:shadow-[#D4AF37]/50 transition-all duration-300 hover:scale-105">
                <span className="flex items-center gap-3">
                  <Utensils className="transition-transform duration-300 group-hover:rotate-12" size={20} />
                  View Full Menu
                  <Star className="transition-transform duration-300 group-hover:rotate-12" size={20} />
                </span>
              </button>
            </motion.div>
          </div>
        </section>

        {/* Reservations & Booking Information Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-black py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#D4AF37]/5 to-transparent opacity-30"></div>

          <div className="container relative z-10 mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="mb-16 text-center"
            >
              <h2 className="mb-6 font-serif text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                Reservations
              </h2>
              <p className="mx-auto max-w-3xl text-lg md:text-xl leading-relaxed text-gray-300">
                Experience our seamless booking process and discover the optimal times to dine with us
              </p>
            </motion.div>

            <div className="mx-auto max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                {/* Booking Process & Information */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="space-y-8"
                >
                  {/* Booking Process */}
                  <div className="rounded-3xl border border-white/10 bg-black/60 p-8 backdrop-blur-sm">
                    <h3 className="mb-8 flex items-center gap-3 font-serif text-2xl md:text-3xl font-bold text-[#D4AF37]">
                      <CheckCircle className="text-[#D4AF37]" size={28} />
                      How We Handle Bookings
                    </h3>

                    <div className="space-y-6">
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
                          className="flex items-start gap-4"
                        >
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8941F] text-sm font-bold text-black">
                            {item.step}
                          </div>
                          <div>
                            <h4 className="mb-2 font-semibold text-white">
                              {item.title}
                            </h4>
                            <p className="text-sm leading-relaxed text-gray-300">
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
                    <button className="group w-full rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#B8941F] px-12 py-6 text-xl font-bold text-black shadow-2xl shadow-[#D4AF37]/40 hover:shadow-[#D4AF37]/60 transition-all duration-500 hover:scale-[1.02] transform">
                      <span className="flex items-center justify-center gap-4">
                        <Calendar className="transition-transform duration-300 group-hover:scale-110" size={24} />
                        Make Reservation
                        <ArrowRight className="transition-transform duration-300 group-hover:translate-x-2" size={24} />
                      </span>
                    </button>
                    <p className="mt-4 text-sm text-gray-400">
                      Click to access our secure booking platform
                    </p>
                  </motion.div>
                </motion.div>

                {/* Peak Times & Restaurant Information */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="space-y-8"
                >
                  {/* Peak Hours */}
                  <div className="rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-sm">
                    <h4 className="mb-6 flex items-center gap-3 font-serif text-xl md:text-2xl font-bold text-[#D4AF37]">
                      <TrendingUp className="text-[#D4AF37]" size={24} />
                      Peak Hours & Best Times
                    </h4>

                    <div className="space-y-6">
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
                        <div key={index} className="rounded-xl border border-white/10 bg-gray-800/30 p-4">
                          <div className="flex items-center justify-between mb-3">
                            <h5 className="font-semibold text-white text-sm">
                              {period.title}
                            </h5>
                            <span className={`text-xs font-medium ${period.color}`}>
                              {period.status}
                            </span>
                          </div>
                          <p className="font-medium text-[#D4AF37] mb-2 text-sm">
                            {period.time}
                          </p>
                          <p className="text-xs leading-relaxed text-gray-300">
                            {period.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Weekend & Special Days */}
                  <div className="rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-sm">
                    <h4 className="mb-6 flex items-center gap-3 font-serif text-xl md:text-2xl font-bold text-[#D4AF37]">
                      <Award className="text-[#D4AF37]" size={24} />
                      Special Periods
                    </h4>

                    <div className="space-y-4">
                      {[
                        {
                          period: "Weekend Evenings",
                          details: "Friday & Saturday 7:00 PM onwards",
                          note: "Premium experience with live jazz. Book 48 hours ahead."
                        },
                        {
                          period: "Holiday Celebrations",  
                          details: "New Year, Valentine's, Diwali",
                          note: "Special menus available. Limited seating with festive ambiance."
                        },
                        {
                          period: "Business Lunch",
                          details: "Monday - Friday 12:00 PM - 3:00 PM",
                          note: "Express service available. Private dining rooms for meetings."
                        }
                      ].map((special, index) => (
                        <div key={index} className="rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 p-4">
                          <div className="flex items-start gap-3">
                            <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/30 text-xs font-bold text-[#D4AF37]">
                              {index + 1}
                            </div>
                            <div>
                              <h5 className="font-semibold text-white text-sm mb-1">
                                {special.period}
                              </h5>
                              <p className="text-xs text-[#D4AF37] mb-2 font-medium">
                                {special.details}
                              </p>
                              <p className="text-xs text-gray-300 leading-relaxed">
                                {special.note}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Location & Contact Info */}
                  <div className="rounded-2xl border border-[#D4AF37]/20 bg-gradient-to-r from-[#D4AF37]/10 to-[#B8941F]/10 p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <MapPin className="text-[#D4AF37]" size={20} />
                      <h4 className="font-semibold text-white">Visit Us</h4>
                    </div>
                    <p className="mb-2 font-medium text-gray-300 text-sm">Salvadores Fine Dining</p>
                    <p className="mb-4 text-gray-300 text-sm">123 Luxury Lane, Bengaluru, Karnataka</p>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="flex-shrink-0 text-[#D4AF37]" size={14} />
                        <span className="text-gray-300">Daily: 11:30 AM - 11:00 PM</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="flex-shrink-0 text-[#D4AF37]" size={14} />
                        <span className="text-gray-300">80 2558 4076</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="flex-shrink-0 text-[#D4AF37]" size={14} />
                        <span className="text-gray-300">Reservations guaranteed for 15 minutes</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="bg-gradient-to-b from-black via-gray-900 to-black py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="mb-16 text-center"
            >
              <h2 className="mb-6 font-serif text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                Guest Reviews
              </h2>
              <p className="mx-auto max-w-3xl text-lg md:text-xl leading-relaxed text-gray-300">
                Discover what our valued guests say about their extraordinary dining experiences
              </p>
            </motion.div>

            <div className="mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  className="rounded-3xl border border-white/10 bg-black/50 p-6 backdrop-blur-sm hover:border-[#D4AF37]/30 transition-all duration-500"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-white">{review.name}</h4>
                      <p className="text-sm text-gray-400">{review.occasion}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="fill-current text-[#D4AF37]" size={16} />
                      ))}
                    </div>
                  </div>

                  <blockquote className="mb-6 text-sm leading-relaxed text-gray-300 italic">
                    &ldquo;{review.review}&rdquo;
                  </blockquote>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">{review.date}</span>
                    <span className="flex items-center gap-1 font-medium text-[#D4AF37]">
                      <Star className="fill-current" size={10} />
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
              <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-sm">
                <div className="mb-6 flex items-center justify-center gap-4">
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="fill-current text-[#D4AF37]" size={20} />
                    ))}
                  </div>
                  <span className="text-2xl font-bold text-[#D4AF37]">4.9</span>
                </div>
                <p className="mb-2 text-xl text-white">Average Rating</p>
                <p className="mb-6 text-gray-300">Based on 247 verified reviews</p>
                <button className="rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8941F] px-8 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:ring-offset-2 focus:ring-offset-gray-900">
                  Read All Reviews
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  )
}