// src/app/reservation/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Clock,
  Phone,
  Star,
  Calendar,
  Users,
  MapPin,
  ChefHat,
  CheckCircle,
  ArrowRight,
  AlertCircle,
  Sparkles,
  Utensils,
  Wine,
  Gift,
  Heart,
  Building2,
  User,
  Mail,
  MessageSquare,
  Shield,
  TrendingUp,
  Timer
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// 1. DEFINE THE TYPE FOR A SINGLE TIME SLOT
// This tells TypeScript what a 'slot' object looks like.
// The `?` makes a property optional.
type TimeSlot = {
  time: string;
  available: number;
  total: number;
  isLunch?: boolean;
  isDinner?: boolean;
  optimal?: boolean;
  peak?: boolean;
  lateNight?: boolean;
};

// Mock data for available slots
const timeSlots: TimeSlot[] = [ // You can optionally type the whole array too
  { time: '11:30 AM', available: 8, total: 12, isLunch: true },
  { time: '12:00 PM', available: 6, total: 12, isLunch: true },
  { time: '12:30 PM', available: 4, total: 12, isLunch: true },
  { time: '1:00 PM', available: 7, total: 12, isLunch: true },
  { time: '1:30 PM', available: 5, total: 12, isLunch: true },
  { time: '2:00 PM', available: 9, total: 12, isLunch: true },
  { time: '2:30 PM', available: 10, total: 12, isLunch: true },
  { time: '6:00 PM', available: 3, total: 16, isDinner: true, optimal: true },
  { time: '6:30 PM', available: 2, total: 16, isDinner: true, optimal: true },
  { time: '7:00 PM', available: 1, total: 16, isDinner: true, peak: true },
  { time: '7:30 PM', available: 0, total: 16, isDinner: true, peak: true },
  { time: '8:00 PM', available: 1, total: 16, isDinner: true, peak: true },
  { time: '8:30 PM', available: 2, total: 16, isDinner: true, peak: true },
  { time: '9:00 PM', available: 4, total: 16, isDinner: true },
  { time: '9:30 PM', available: 6, total: 16, isDinner: true, lateNight: true },
  { time: '10:00 PM', available: 8, total: 16, isDinner: true, lateNight: true },
  { time: '10:30 PM', available: 12, total: 16, isDinner: true, lateNight: true },
]

const occasionTypes = [
  { id: 'birthday', label: 'Birthday', icon: Gift, color: 'text-pink-400' },
  { id: 'anniversary', label: 'Anniversary', icon: Heart, color: 'text-red-400' },
  { id: 'business', label: 'Business', icon: Building2, color: 'text-blue-400' },
  { id: 'date', label: 'Romantic Date', icon: Wine, color: 'text-purple-400' },
  { id: 'celebration', label: 'Celebration', icon: Sparkles, color: 'text-yellow-400' },
  { id: 'casual', label: 'Casual Dining', icon: Utensils, color: 'text-green-400' },
]

export default function ReservationPage() {
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [selectedGuests, setSelectedGuests] = useState('2')
  const [selectedOccasion, setSelectedOccasion] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    specialRequests: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)

  // Set today's date as default
  useEffect(() => {
    const today = new Date()
    const formattedDate = today.toISOString().split('T')[0]
    setSelectedDate(formattedDate)
  }, [])

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const slideIn = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
    transition: { duration: 0.4 }
  }

  // 2. APPLY THE TYPE TO THE FUNCTION PARAMETER
  // This tells the function that 'slot' will be an object with the shape of 'TimeSlot'
  const getSlotAvailability = (slot: TimeSlot) => {
    if (slot.available === 0) return { status: 'full', color: 'bg-red-500/20 border-red-500/30 text-red-300' }
    if (slot.available <= 2) return { status: 'limited', color: 'bg-orange-500/20 border-orange-500/30 text-orange-300' }
    return { status: 'available', color: 'bg-green-500/20 border-green-500/30 text-green-300' }
  }

  const handleTimeSelection = (time: string, available: number) => {
    if (available > 0) {
      setSelectedTime(time)
    }
  }

  const handleFormSubmit = async (e: React.FormEvent) => { // Also good to type the event object
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setShowConfirmation(true)
  }

  const today = new Date().toISOString().split('T')[0]
  const maxDate = new Date()
  maxDate.setMonth(maxDate.getMonth() + 3)
  const maxDateStr = maxDate.toISOString().split('T')[0]

  const totalAvailableToday = timeSlots.reduce((sum, slot) => sum + slot.available, 0)
  const totalCapacity = timeSlots.reduce((sum, slot) => sum + slot.total, 0)

  return (
    <div className="flex min-h-screen flex-col bg-black text-gray-200">
      <Header />

      <main className="flex-grow pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-black to-[#B8941F]/10"></div>
          
          <div className="container relative z-10 mx-auto px-4 text-center sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="mb-4 font-serif text-3xl font-bold uppercase tracking-[0.2em] text-[#D4AF37] sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl">
                Reserve Your Table
              </h1>
              <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-gray-300 sm:text-lg md:mb-12 md:text-xl">
                Secure your dining experience at Salvadores with our streamlined reservation system
              </p>

              {/* Availability Stats */}
              <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/60 px-4 py-3 backdrop-blur-sm">
                  <TrendingUp className="text-[#D4AF37]" size={20} />
                  <div className="text-left">
                    <div className="text-sm text-gray-400">Today&apos;s Availability</div>
                    <div className="text-lg font-bold text-white">{totalAvailableToday} / {totalCapacity} tables</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/60 px-4 py-3 backdrop-blur-sm">
                  <Timer className="text-[#D4AF37]" size={20} />
                  <div className="text-left">
                    <div className="text-sm text-gray-400">Booking Status</div>
                    <div className="text-lg font-bold text-green-400">Open</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Reservation Form */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              {!showConfirmation ? (
                <motion.div
                  key="reservation-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-3"
                >
                  {/* Left Column - Date & Time Selection */}
                  <div className="space-y-8 lg:col-span-2">
                    {/* Step 1: Date & Time Selection */}
                    <motion.div
                      variants={fadeInUp}
                      initial="initial"
                      animate="animate"
                      className="rounded-2xl border border-white/10 bg-black/60 p-6 backdrop-blur-sm md:rounded-3xl md:p-8"
                    >
                      <h2 className="mb-6 flex items-center gap-3 text-xl font-bold text-[#D4AF37] md:text-2xl">
                        <Calendar size={24} />
                        Select Date & Time
                      </h2>

                      {/* Date Selection */}
                      <div className="mb-8">
                        <label className="mb-3 block text-sm font-medium text-gray-300">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          min={today}
                          max={maxDateStr}
                          className="w-full rounded-xl border border-white/20 bg-gray-800/50 px-4 py-3 text-white transition-all duration-300 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/50 sm:w-auto"
                        />
                      </div>

                      {/* Time Slots */}
                      <div>
                        <label className="mb-4 block text-sm font-medium text-gray-300">
                          Available Time Slots
                        </label>
                        
                        {/* Lunch Slots */}
                        <div className="mb-6">
                          <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-400">
                            <Utensils size={16} />
                            Lunch Service
                          </h4>
                          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                            {timeSlots.filter(slot => slot.isLunch).map((slot) => {
                              const availability = getSlotAvailability(slot)
                              const isSelected = selectedTime === slot.time
                              
                              return (
                                <button
                                  key={slot.time}
                                  onClick={() => handleTimeSelection(slot.time, slot.available)}
                                  disabled={slot.available === 0}
                                  className={`
                                    relative rounded-xl border p-3 text-sm transition-all duration-300
                                    ${isSelected 
                                      ? 'border-[#D4AF37] bg-[#D4AF37]/20 text-[#D4AF37]' 
                                      : slot.available === 0
                                        ? 'cursor-not-allowed border-gray-700 bg-gray-800/30 text-gray-500'
                                        : `${availability.color} cursor-pointer hover:scale-105`
                                    }
                                  `}
                                >
                                  <div className="font-medium">{slot.time}</div>
                                  <div className="mt-1 text-xs">
                                    {slot.available === 0 ? 'Full' : `${slot.available} tables`}
                                  </div>
                                  {isSelected && (
                                    <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-[#D4AF37]"></div>
                                  )}
                                </button>
                              )
                            })}
                          </div>
                        </div>

                        {/* Dinner Slots */}
                        <div>
                          <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-400">
                            <Wine size={16} />
                            Dinner Service
                          </h4>
                          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                            {timeSlots.filter(slot => slot.isDinner).map((slot) => {
                              const availability = getSlotAvailability(slot)
                              const isSelected = selectedTime === slot.time
                              
                              return (
                                <button
                                  key={slot.time}
                                  onClick={() => handleTimeSelection(slot.time, slot.available)}
                                  disabled={slot.available === 0}
                                  className={`
                                    relative rounded-xl border p-3 text-sm transition-all duration-300
                                    ${isSelected 
                                      ? 'border-[#D4AF37] bg-[#D4AF37]/20 text-[#D4AF37]' 
                                      : slot.available === 0
                                        ? 'cursor-not-allowed border-gray-700 bg-gray-800/30 text-gray-500'
                                        : `${availability.color} cursor-pointer hover:scale-105`
                                    }
                                  `}
                                >
                                  <div className="font-medium">{slot.time}</div>
                                  <div className="mt-1 text-xs">
                                    {slot.available === 0 ? 'Full' : `${slot.available} tables`}
                                  </div>
                                  {slot.peak && (
                                    <div className="absolute -left-1 -top-1 rounded bg-red-500 px-1 py-0.5 text-[10px] text-white">
                                      Peak
                                    </div>
                                  )}
                                  {slot.optimal && (
                                    <div className="absolute -left-1 -top-1 rounded bg-green-500 px-1 py-0.5 text-[10px] text-white">
                                      Best
                                    </div>
                                  )}
                                  {isSelected && (
                                    <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-[#D4AF37]"></div>
                                  )}
                                </button>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Step 2: Party Details & Guest Information */}
                    <AnimatePresence>
                      {selectedTime && (
                        <motion.div
                          variants={slideIn}
                          initial="initial"
                          animate="animate"
                          className="rounded-2xl border border-white/10 bg-black/60 p-6 backdrop-blur-sm md:rounded-3xl md:p-8"
                        >
                          <h2 className="mb-6 flex items-center gap-3 text-xl font-bold text-[#D4AF37] md:text-2xl">
                            <Users size={24} />
                            Party Details
                          </h2>

                          <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                            {/* Party Size */}
                            <div>
                              <label className="mb-3 block text-sm font-medium text-gray-300">
                                Number of Guests
                              </label>
                              <select
                                value={selectedGuests}
                                onChange={(e) => setSelectedGuests(e.target.value)}
                                className="w-full rounded-xl border border-white/20 bg-gray-800/50 px-4 py-3 text-white transition-all duration-300 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/50"
                              >
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                                  <option key={num} value={num}>
                                    {num} {num === 1 ? 'Guest' : 'Guests'}
                                  </option>
                                ))}
                                <option value="large">10+ Guests (Call Required)</option>
                              </select>
                            </div>

                            {/* Occasion */}
                            <div>
                              <label className="mb-3 block text-sm font-medium text-gray-300">
                                Occasion (Optional)
                              </label>
                              <div className="grid grid-cols-2 gap-2">
                                {occasionTypes.slice(0, 4).map((occasion) => (
                                  <button
                                    key={occasion.id}
                                    type="button" // Important for buttons inside a form
                                    onClick={() => setSelectedOccasion(occasion.id)}
                                    className={`
                                      flex items-center gap-2 rounded-lg p-2 text-sm transition-all duration-300
                                      ${selectedOccasion === occasion.id
                                        ? 'border border-[#D4AF37] bg-[#D4AF37]/20 text-[#D4AF37]'
                                        : 'border border-white/10 bg-gray-800/30 text-gray-300 hover:bg-gray-700/30'
                                      }
                                    `}
                                  >
                                    <occasion.icon size={16} className={selectedOccasion === occasion.id ? 'text-[#D4AF37]' : occasion.color} />
                                    <span className="truncate">{occasion.label}</span>
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Guest Information Form */}
                          <form onSubmit={handleFormSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                              <div>
                                <label className="mb-2 block text-sm font-medium text-gray-300">
                                  Full Name *
                                </label>
                                <div className="relative">
                                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                  <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    className="w-full rounded-xl border border-white/20 bg-gray-800/50 py-3 pl-12 pr-4 text-white placeholder:text-gray-400 transition-all duration-300 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/50"
                                    placeholder="Enter your full name"
                                  />
                                </div>
                              </div>

                              <div>
                                <label className="mb-2 block text-sm font-medium text-gray-300">
                                  Phone Number *
                                </label>
                                <div className="relative">
                                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                  <input
                                    type="tel"
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                    className="w-full rounded-xl border border-white/20 bg-gray-800/50 py-3 pl-12 pr-4 text-white placeholder:text-gray-400 transition-all duration-300 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/50"
                                    placeholder="+91 XXXXX XXXXX"
                                  />
                                </div>
                              </div>
                            </div>

                            <div>
                              <label className="mb-2 block text-sm font-medium text-gray-300">
                                Email Address *
                              </label>
                              <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                  type="email"
                                  required
                                  value={formData.email}
                                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                                  className="w-full rounded-xl border border-white/20 bg-gray-800/50 py-3 pl-12 pr-4 text-white placeholder:text-gray-400 transition-all duration-300 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/50"
                                  placeholder="your@email.com"
                                />
                              </div>
                            </div>

                            <div>
                              <label className="mb-2 block text-sm font-medium text-gray-300">
                                Special Requests (Optional)
                              </label>
                              <div className="relative">
                                <MessageSquare className="absolute left-3 top-3 text-gray-400" size={18} />
                                <textarea
                                  rows={3}
                                  value={formData.specialRequests}
                                  onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
                                  className="w-full resize-none rounded-xl border border-white/20 bg-gray-800/50 py-3 pl-12 pr-4 text-white placeholder:text-gray-400 transition-all duration-300 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/50"
                                  placeholder="Dietary restrictions, seating preferences, celebrations..."
                                />
                              </div>
                            </div>

                            {/* Submit Button */}
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className="w-full rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8941F] px-8 py-4 text-lg font-bold text-black shadow-lg shadow-[#D4AF37]/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-[#D4AF37]/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                              {isSubmitting ? (
                                <div className="flex items-center justify-center gap-3">
                                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-black/30 border-t-black"></div>
                                  Processing Reservation...
                                </div>
                              ) : (
                                <div className="flex items-center justify-center gap-3">
                                  <CheckCircle size={20} />
                                  Confirm Reservation
                                  <ArrowRight size={20} />
                                </div>
                              )}
                            </button>
                          </form>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Right Column - Reservation Summary & Info */}
                  <div className="space-y-6">
                    {/* Reservation Summary */}
                    <motion.div
                      variants={fadeInUp}
                      initial="initial"
                      animate="animate"
                      className="sticky top-24 rounded-2xl border border-white/10 bg-black/60 p-6 backdrop-blur-sm"
                    >
                      <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-[#D4AF37]">
                        <Sparkles size={20} />
                        Reservation Summary
                      </h3>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between border-b border-white/10 py-3">
                          <span className="text-gray-300">Date</span>
                          <span className="font-medium text-white">
                            {selectedDate ? new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-US', { 
                              weekday: 'short', 
                              month: 'short', 
                              day: 'numeric' 
                            }) : 'Not selected'}
                          </span>
                        </div>

                        <div className="flex items-center justify-between border-b border-white/10 py-3">
                          <span className="text-gray-300">Time</span>
                          <span className="font-medium text-white">
                            {selectedTime || 'Not selected'}
                          </span>
                        </div>

                        <div className="flex items-center justify-between border-b border-white/10 py-3">
                          <span className="text-gray-300">Guests</span>
                          <span className="font-medium text-white">
                            {selectedGuests} {selectedGuests === '1' ? 'Guest' : 'Guests'}
                          </span>
                        </div>

                        {selectedOccasion && (
                          <div className="flex items-center justify-between border-b border-white/10 py-3">
                            <span className="text-gray-300">Occasion</span>
                            <span className="font-medium text-white">
                              {occasionTypes.find(o => o.id === selectedOccasion)?.label}
                            </span>
                          </div>
                        )}

                        <div className="pt-4">
                          <div className="mb-2 flex items-center gap-2 text-sm text-gray-400">
                            <Shield size={14} />
                            No booking fees • Instant confirmation
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <AlertCircle size={14} />
                            Table held for 15 minutes past reservation time
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Restaurant Info */}
                    <motion.div
                      variants={fadeInUp}
                      initial="initial"
                      animate="animate"
                      transition={{ delay: 0.2 }}
                      className="rounded-2xl border border-white/10 bg-black/60 p-6 backdrop-blur-sm"
                    >
                      <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-[#D4AF37]">
                        <MapPin size={20} />
                        Restaurant Details
                      </h3>

                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-3">
                          <MapPin size={16} className="flex-shrink-0 text-[#D4AF37]" />
                          <span className="text-gray-300">123 Luxury Lane, Bengaluru, Karnataka</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone size={16} className="flex-shrink-0 text-[#D4AF37]" />
                          <span className="text-gray-300">80 2558 4076</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock size={16} className="flex-shrink-0 text-[#D4AF37]" />
                          <span className="text-gray-300">Daily: 11:30 AM - 11:00 PM</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <ChefHat size={16} className="flex-shrink-0 text-[#D4AF37]" />
                          <span className="text-gray-300">Fine Dining • Smart Casual Dress Code</span>
                        </div>
                      </div>

                      <div className="mt-4 border-t border-white/10 pt-4">
                        <div className="mb-2 flex items-center gap-2">
                          <Star className="fill-current text-[#D4AF37]" size={16} />
                          <span className="font-bold text-[#D4AF37]">4.9</span>
                          <span className="text-sm text-gray-400">• 247 reviews</span>
                        </div>
                        <p className="text-xs text-gray-400">
                          Consistently rated as Bengaluru&apos;s premier fine dining destination
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ) : (
                /* Confirmation Screen */
                <motion.div
                  key="confirmation"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="mx-auto max-w-3xl text-center"
                >
                  <div className="rounded-3xl border border-green-500/30 bg-gradient-to-br from-green-500/10 to-[#D4AF37]/10 p-8 backdrop-blur-sm md:p-12">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-[#D4AF37]">
                      <CheckCircle size={32} className="text-white" />
                    </div>
                    
                    <h2 className="mb-4 text-2xl font-bold text-[#D4AF37] md:text-3xl">
                      Reservation Confirmed!
                    </h2>
                    
                    <p className="mb-8 text-lg text-gray-300">
                      Thank you {formData.name}! Your table has been reserved for {selectedGuests} guests on{' '}
                      {new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        month: 'long', 
                        day: 'numeric' 
                      })} at {selectedTime}.
                    </p>
                    
                    <div className="mb-8 rounded-2xl bg-black/40 p-6">
                      <h3 className="mb-4 text-lg font-semibold text-white">Confirmation Details</h3>
                      <div className="space-y-2 text-left text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Reservation ID:</span>
                          <span className="font-mono text-white">SAL-{Date.now().toString().slice(-6)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Email:</span>
                          <span className="text-white">{formData.email}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Phone:</span>
                          <span className="text-white">{formData.phone}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="mb-6 text-sm text-gray-400">
                      A confirmation email has been sent to your email address. 
                      We&apos;ll also send you a reminder 2 hours before your reservation.
                    </p>
                    
                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                      <button
                        onClick={() => {
                          setShowConfirmation(false)
                          setSelectedTime('')
                          setFormData({ name: '', phone: '', email: '', specialRequests: '' })
                          setSelectedOccasion('')
                        }}
                        className="rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8941F] px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-105"
                      >
                        Make Another Reservation
                      </button>
                      <button
                        onClick={() => window.location.href = '/'}
                        className="rounded-xl border border-white/20 bg-black/60 px-6 py-3 text-white transition-all duration-300 hover:bg-white/10"
                      >
                        Return to Home
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}