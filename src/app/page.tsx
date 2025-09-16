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

       

  
      
      </main>

      <Footer />
    </div>
  )
}