// src/app/reservation/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Phone,
  Calendar,
  Users,
  MapPin,
  ChefHat,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
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
  MessageCircle
} from 'lucide-react'
import { Great_Vibes, Playfair_Display } from 'next/font/google'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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

type TableOption = {
  id: string;
  name: string;
  capacity: string;
  location: string;
  price: string;
  features: string[];
  image: string;
  available: boolean;
};

const timeSlots: TimeSlot[] = [
  { time: '11:30 AM', available: 8, total: 12, isLunch: true },
  { time: '12:00 PM', available: 6, total: 12, isLunch: true },
  { time: '12:30 PM', available: 4, total: 12, isLunch: true },
  { time: '1:00 PM', available: 7, total: 12, isLunch: true },
  { time: '1:30 PM', available: 5, total: 12, isLunch: true },
  { time: '2:00 PM', available: 9, total: 12, isLunch: true },
  { time: '6:00 PM', available: 3, total: 16, isDinner: true, optimal: true },
  { time: '6:30 PM', available: 2, total: 16, isDinner: true, optimal: true },
  { time: '7:00 PM', available: 1, total: 16, isDinner: true, peak: true },
  { time: '7:30 PM', available: 0, total: 16, isDinner: true, peak: true },
  { time: '8:00 PM', available: 1, total: 16, isDinner: true, peak: true },
  { time: '8:30 PM', available: 2, total: 16, isDinner: true, peak: true },
  { time: '9:00 PM', available: 4, total: 16, isDinner: true },
  { time: '9:30 PM', available: 6, total: 16, isDinner: true, lateNight: true },
  { time: '10:00 PM', available: 8, total: 16, isDinner: true, lateNight: true },
]

const tableOptions: TableOption[] = [
  {
    id: 'intimate',
    name: 'Intimate Corner',
    capacity: '2-4 guests',
    location: 'Window side',
    price: 'Standard',
    features: ['City View', 'Quiet', 'Romantic'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=400',
    available: true
  },
  {
    id: 'family',
    name: 'Family Table',
    capacity: '4-6 guests',
    location: 'Main dining',
    price: 'Standard',
    features: ['Spacious', 'Central', 'Family Friendly'],
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=400',
    available: true
  },
  {
    id: 'private',
    name: 'Private Dining',
    capacity: '6-10 guests',
    location: 'Private room',
    price: 'Premium +₹500',
    features: ['Exclusive', 'Private', 'Special Service'],
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=400',
    available: true
  },
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
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [selectedTable, setSelectedTable] = useState('')
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

  useEffect(() => {
    const today = new Date()
    const formattedDate = today.toISOString().split('T')[0]
    setSelectedDate(formattedDate)
  }, [])

  const stepVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }
    },
    exit: { 
      opacity: 0, 
      x: -50,
      transition: { duration: 0.3 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const }
    }
  }

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const getSlotAvailability = (slot: TimeSlot) => {
    if (slot.available === 0) return { status: 'full', color: 'bg-red-500/10 border-red-500/30 text-red-300' }
    if (slot.available <= 2) return { status: 'limited', color: 'bg-orange-500/10 border-orange-500/30 text-orange-300' }
    return { status: 'available', color: 'bg-green-500/10 border-green-500/30 text-green-300' }
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setShowConfirmation(true)
  }

  const resetReservation = () => {
    setShowConfirmation(false)
    setCurrentStep(1)
    setSelectedTime('')
    setSelectedTable('')
    setFormData({ name: '', phone: '', email: '', specialRequests: '' })
    setSelectedOccasion('')
  }

  const today = new Date().toISOString().split('T')[0]
  const maxDate = new Date()
  maxDate.setMonth(maxDate.getMonth() + 3)
  const maxDateStr = maxDate.toISOString().split('T')[0]

  const steps = [
    { number: 1, title: 'Date & Time', icon: Calendar },
    { number: 2, title: 'Select Table', icon: MapPin },
    { number: 3, title: 'Guest Details', icon: Users },
    { number: 4, title: 'Confirmation', icon: CheckCircle },
  ]

  const canProceedFromStep1 = selectedDate && selectedTime
  const canProceedFromStep2 = selectedTable
  const canProceedFromStep3 = formData.name && formData.phone && formData.email

  return (
    <div className="flex min-h-screen flex-col bg-black text-gray-200">
      <Header />

      <main className="flex-grow pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-12 md:py-16">
          <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 via-black to-[#B8941F]/5"></div>
          
          <div className="container relative z-10 mx-auto px-4 text-center sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className={`${greatVibes.className} text-5xl sm:text-6xl md:text-7xl text-[#D4AF37] mb-4`}>
                Reserve Your Experience
              </h1>
              <p className={`${playfair.className} mx-auto max-w-2xl text-lg md:text-xl text-gray-300 leading-relaxed`}>
                Secure your dining experience at Salvadores with our elegant reservation system
              </p>
            </motion.div>
          </div>
        </section>

        {!showConfirmation ? (
          <section className="py-8 md:py-12">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              
              {/* Progress Steps */}
              <motion.div 
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex justify-between items-center relative">
                  <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-800">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-[#D4AF37] to-amber-600"
                      initial={{ width: '0%' }}
                      animate={{ width: `${((currentStep - 1) / 3) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  
                  {steps.map((step) => (
                    <div key={step.number} className="relative flex flex-col items-center">
                      <motion.div
                        className={`w-10 h-10 rounded-full border-2 flex items-center justify-center relative z-10 transition-all duration-300 ${
                          currentStep >= step.number
                            ? 'bg-gradient-to-r from-[#D4AF37] to-amber-600 border-[#D4AF37] text-black'
                            : 'bg-gray-800 border-gray-600 text-gray-400'
                        }`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {currentStep > step.number ? (
                          <CheckCircle size={20} />
                        ) : (
                          <step.icon size={20} />
                        )}
                      </motion.div>
                      <span className={`${playfair.className} mt-2 text-sm font-medium ${
                        currentStep >= step.number ? 'text-[#D4AF37]' : 'text-gray-400'
                      }`}>
                        {step.title}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <AnimatePresence mode="wait">
                {/* Step 1: Date & Time Selection */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    variants={stepVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                  >
                    <div className="lg:col-span-2">
                      <motion.div
                        variants={cardVariants}
                        className="rounded-3xl border border-white/10 bg-black/60 p-8 backdrop-blur-sm"
                      >
                        <h2 className={`${playfair.className} text-2xl font-bold text-[#D4AF37] mb-6 flex items-center gap-3`}>
                          <Calendar size={24} />
                          Select Date & Time
                        </h2>

                        {/* Date Selection */}
                        <div className="mb-8">
                          <label className={`${playfair.className} mb-3 block text-lg font-medium text-gray-300`}>
                            Preferred Date
                          </label>
                          <input
                            type="date"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            min={today}
                            max={maxDateStr}
                            className="w-full max-w-sm rounded-2xl border border-white/20 bg-gray-800/50 px-4 py-3 text-white transition-all duration-300 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20"
                          />
                        </div>

                        {/* Time Slots */}
                        <div>
                          <label className={`${playfair.className} mb-4 block text-lg font-medium text-gray-300`}>
                            Available Time Slots
                          </label>
                          
                          {/* Lunch Slots */}
                          <div className="mb-8">
                            <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold text-gray-400">
                              <Utensils size={16} />
                              Lunch Service (11:30 AM - 2:30 PM)
                            </h4>
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                              {timeSlots.filter(slot => slot.isLunch).map((slot) => {
                                const availability = getSlotAvailability(slot)
                                const isSelected = selectedTime === slot.time
                                
                                return (
                                  <motion.button
                                    key={slot.time}
                                    onClick={() => slot.available > 0 && setSelectedTime(slot.time)}
                                    disabled={slot.available === 0}
                                    whileHover={slot.available > 0 ? { scale: 1.05, y: -2 } : {}}
                                    whileTap={slot.available > 0 ? { scale: 0.95 } : {}}
                                    className={`
                                      relative rounded-2xl border p-4 text-sm transition-all duration-300
                                      ${isSelected 
                                        ? 'border-[#D4AF37] bg-[#D4AF37]/20 text-[#D4AF37] shadow-lg shadow-[#D4AF37]/20' 
                                        : slot.available === 0
                                          ? 'cursor-not-allowed border-gray-700 bg-gray-800/30 text-gray-500'
                                          : `${availability.color} cursor-pointer hover:border-[#D4AF37]/50`
                                      }
                                    `}
                                  >
                                    <div className="font-medium">{slot.time}</div>
                                    <div className="mt-1 text-xs opacity-75">
                                      {slot.available === 0 ? 'Full' : `${slot.available} tables`}
                                    </div>
                                  </motion.button>
                                )
                              })}
                            </div>
                          </div>

                          {/* Dinner Slots */}
                          <div>
                            <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold text-gray-400">
                              <Wine size={16} />
                              Dinner Service (6:00 PM - 10:00 PM)
                            </h4>
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                              {timeSlots.filter(slot => slot.isDinner).map((slot) => {
                                const availability = getSlotAvailability(slot)
                                const isSelected = selectedTime === slot.time
                                
                                return (
                                  <motion.button
                                    key={slot.time}
                                    onClick={() => slot.available > 0 && setSelectedTime(slot.time)}
                                    disabled={slot.available === 0}
                                    whileHover={slot.available > 0 ? { scale: 1.05, y: -2 } : {}}
                                    whileTap={slot.available > 0 ? { scale: 0.95 } : {}}
                                    className={`
                                      relative rounded-2xl border p-4 text-sm transition-all duration-300
                                      ${isSelected 
                                        ? 'border-[#D4AF37] bg-[#D4AF37]/20 text-[#D4AF37] shadow-lg shadow-[#D4AF37]/20' 
                                        : slot.available === 0
                                          ? 'cursor-not-allowed border-gray-700 bg-gray-800/30 text-gray-500'
                                          : `${availability.color} cursor-pointer hover:border-[#D4AF37]/50`
                                      }
                                    `}
                                  >
                                    <div className="font-medium">{slot.time}</div>
                                    <div className="mt-1 text-xs opacity-75">
                                      {slot.available === 0 ? 'Full' : `${slot.available} tables`}
                                    </div>
                                    {slot.peak && (
                                      <div className="absolute -top-1 -right-1 rounded-full bg-red-500 px-2 py-0.5 text-[10px] text-white">
                                        Peak
                                      </div>
                                    )}
                                    {slot.optimal && (
                                      <div className="absolute -top-1 -right-1 rounded-full bg-green-500 px-2 py-0.5 text-[10px] text-white">
                                        Best
                                      </div>
                                    )}
                                  </motion.button>
                                )
                              })}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Summary Panel */}
                    <div>
                      <motion.div
                        variants={cardVariants}
                        className="sticky top-24 rounded-2xl border border-white/10 bg-black/60 p-6 backdrop-blur-sm"
                      >
                        <h3 className={`${playfair.className} text-lg font-bold text-[#D4AF37] mb-4 flex items-center gap-2`}>
                          <Sparkles size={20} />
                          Selection Summary
                        </h3>

                        <div className="space-y-4 mb-6">
                          <div className="flex justify-between py-2 border-b border-white/10">
                            <span className="text-gray-300">Date</span>
                            <span className="font-medium text-white">
                              {selectedDate ? new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-US', { 
                                weekday: 'short', 
                                month: 'short', 
                                day: 'numeric' 
                              }) : 'Not selected'}
                            </span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-white/10">
                            <span className="text-gray-300">Time</span>
                            <span className="font-medium text-white">
                              {selectedTime || 'Not selected'}
                            </span>
                          </div>
                        </div>

                        <motion.button
                          onClick={handleNextStep}
                          disabled={!canProceedFromStep1}
                          className={`w-full rounded-2xl px-6 py-3 font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                            canProceedFromStep1
                              ? 'bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black hover:scale-105 shadow-lg shadow-[#D4AF37]/30'
                              : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                          }`}
                          whileHover={canProceedFromStep1 ? { scale: 1.02 } : {}}
                          whileTap={canProceedFromStep1 ? { scale: 0.98 } : {}}
                        >
                          Continue to Table Selection
                          <ArrowRight size={18} />
                        </motion.button>
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Table Selection */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    variants={stepVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                  >
                    <div className="lg:col-span-2">
                      <motion.div
                        variants={cardVariants}
                        className="rounded-3xl border border-white/10 bg-black/60 p-8 backdrop-blur-sm"
                      >
                        <h2 className={`${playfair.className} text-2xl font-bold text-[#D4AF37] mb-6 flex items-center gap-3`}>
                          <MapPin size={24} />
                          Choose Your Table
                        </h2>

                        {/* Party Size Selection */}
                        <div className="mb-8">
                          <label className={`${playfair.className} mb-3 block text-lg font-medium text-gray-300`}>
                            Number of Guests
                          </label>
                          <select
                            value={selectedGuests}
                            onChange={(e) => setSelectedGuests(e.target.value)}
                            className="w-full max-w-sm rounded-2xl border border-white/20 bg-gray-800/50 px-4 py-3 text-white transition-all duration-300 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20"
                          >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                              <option key={num} value={num}>
                                {num} {num === 1 ? 'Guest' : 'Guests'}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Table Options */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {tableOptions.map((table) => (
                            <motion.button
                              key={table.id}
                              onClick={() => setSelectedTable(table.id)}
                              className={`text-left rounded-2xl border p-6 transition-all duration-300 ${
                                selectedTable === table.id
                                  ? 'border-[#D4AF37] bg-[#D4AF37]/10 shadow-lg shadow-[#D4AF37]/20'
                                  : 'border-white/10 bg-gray-800/30 hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/5'
                              }`}
                              whileHover={{ scale: 1.02, y: -2 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <div className="aspect-video rounded-xl overflow-hidden mb-4">
                                <Image 
                                  src={table.image} 
                                  alt={table.name}
                                  width={400}
                                  height={225}
                                  className="w-full h-full object-cover"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                                />
                              </div>
                              
                              <h3 className={`${playfair.className} text-lg font-bold text-white mb-2`}>
                                {table.name}
                              </h3>
                              
                              <div className="space-y-2 mb-4">
                                <div className="flex justify-between text-sm">
                                  <span className="text-gray-400">Capacity:</span>
                                  <span className="text-white">{table.capacity}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                  <span className="text-gray-400">Location:</span>
                                  <span className="text-white">{table.location}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                  <span className="text-gray-400">Price:</span>
                                  <span className={table.price.includes('+') ? 'text-[#D4AF37]' : 'text-white'}>
                                    {table.price}
                                  </span>
                                </div>
                              </div>
                              
                              <div className="flex flex-wrap gap-2">
                                {table.features.map((feature) => (
                                  <span 
                                    key={feature}
                                    className="text-xs bg-[#D4AF37]/20 text-[#D4AF37] px-2 py-1 rounded-full"
                                  >
                                    {feature}
                                  </span>
                                ))}
                              </div>
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Summary Panel */}
                    <div>
                      <motion.div
                        variants={cardVariants}
                        className="sticky top-24 rounded-2xl border border-white/10 bg-black/60 p-6 backdrop-blur-sm"
                      >
                        <h3 className={`${playfair.className} text-lg font-bold text-[#D4AF37] mb-4`}>
                          Reservation Summary
                        </h3>

                        <div className="space-y-3 mb-6">
                          <div className="flex justify-between py-2 border-b border-white/10">
                            <span className="text-gray-300">Date</span>
                            <span className="font-medium text-white">
                              {new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-US', { 
                                weekday: 'short', 
                                month: 'short', 
                                day: 'numeric' 
                              })}
                            </span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-white/10">
                            <span className="text-gray-300">Time</span>
                            <span className="font-medium text-white">{selectedTime}</span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-white/10">
                            <span className="text-gray-300">Guests</span>
                            <span className="font-medium text-white">{selectedGuests}</span>
                          </div>
                          {selectedTable && (
                            <div className="flex justify-between py-2 border-b border-white/10">
                              <span className="text-gray-300">Table</span>
                              <span className="font-medium text-white">
                                {tableOptions.find(t => t.id === selectedTable)?.name}
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="flex gap-3">
                          <motion.button
                            onClick={handlePrevStep}
                            className="flex-1 rounded-2xl border border-white/20 bg-gray-800/50 px-4 py-3 text-white transition-all duration-300 hover:bg-white/10"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <ArrowLeft size={18} className="mx-auto" />
                          </motion.button>
                          
                          <motion.button
                            onClick={handleNextStep}
                            disabled={!canProceedFromStep2}
                            className={`flex-[3] rounded-2xl px-6 py-3 font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                              canProceedFromStep2
                                ? 'bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black hover:scale-105 shadow-lg shadow-[#D4AF37]/30'
                                : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                            }`}
                            whileHover={canProceedFromStep2 ? { scale: 1.02 } : {}}
                            whileTap={canProceedFromStep2 ? { scale: 0.98 } : {}}
                          >
                            Continue to Details
                            <ArrowRight size={18} />
                          </motion.button>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Guest Details */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    variants={stepVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                  >
                    <div className="lg:col-span-2">
                      <motion.div
                        variants={cardVariants}
                        className="rounded-3xl border border-white/10 bg-black/60 p-8 backdrop-blur-sm"
                      >
                        <h2 className={`${playfair.className} text-2xl font-bold text-[#D4AF37] mb-6 flex items-center gap-3`}>
                          <Users size={24} />
                          Guest Information
                        </h2>

                        <form className="space-y-6">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                              <label className={`${playfair.className} mb-2 block text-sm font-medium text-gray-300`}>
                                Full Name *
                              </label>
                              <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                  type="text"
                                  required
                                  value={formData.name}
                                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                                  className="w-full rounded-2xl border border-white/20 bg-gray-800/50 py-3 pl-12 pr-4 text-white placeholder:text-gray-400 transition-all duration-300 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20"
                                  placeholder="Enter your full name"
                                />
                              </div>
                            </div>

                            <div>
                              <label className={`${playfair.className} mb-2 block text-sm font-medium text-gray-300`}>
                                Phone Number *
                              </label>
                              <div className="relative">
                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                  type="tel"
                                  required
                                  value={formData.phone}
                                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                  className="w-full rounded-2xl border border-white/20 bg-gray-800/50 py-3 pl-12 pr-4 text-white placeholder:text-gray-400 transition-all duration-300 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20"
                                  placeholder="+91 XXXXX XXXXX"
                                />
                              </div>
                            </div>
                          </div>

                          <div>
                            <label className={`${playfair.className} mb-2 block text-sm font-medium text-gray-300`}>
                              Email Address *
                            </label>
                            <div className="relative">
                              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                              <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                className="w-full rounded-2xl border border-white/20 bg-gray-800/50 py-3 pl-12 pr-4 text-white placeholder:text-gray-400 transition-all duration-300 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20"
                                placeholder="your@email.com"
                              />
                            </div>
                          </div>

                          {/* Occasion Selection */}
                          <div>
                            <label className={`${playfair.className} mb-3 block text-sm font-medium text-gray-300`}>
                              Special Occasion (Optional)
                            </label>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                              {occasionTypes.map((occasion) => (
                                <motion.button
                                  key={occasion.id}
                                  type="button"
                                  onClick={() => setSelectedOccasion(selectedOccasion === occasion.id ? '' : occasion.id)}
                                  className={`flex items-center gap-2 rounded-xl p-3 text-sm transition-all duration-300 ${
                                    selectedOccasion === occasion.id
                                      ? 'border border-[#D4AF37] bg-[#D4AF37]/20 text-[#D4AF37]'
                                      : 'border border-white/10 bg-gray-800/30 text-gray-300 hover:bg-gray-700/30 hover:border-[#D4AF37]/30'
                                  }`}
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  <occasion.icon size={16} className={selectedOccasion === occasion.id ? 'text-[#D4AF37]' : occasion.color} />
                                  <span className="truncate">{occasion.label}</span>
                                </motion.button>
                              ))}
                            </div>
                          </div>

                          <div>
                            <label className={`${playfair.className} mb-2 block text-sm font-medium text-gray-300`}>
                              Special Requests (Optional)
                            </label>
                            <div className="relative">
                              <MessageSquare className="absolute left-3 top-3 text-gray-400" size={18} />
                              <textarea
                                rows={3}
                                value={formData.specialRequests}
                                onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
                                className="w-full resize-none rounded-2xl border border-white/20 bg-gray-800/50 py-3 pl-12 pr-4 text-white placeholder:text-gray-400 transition-all duration-300 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20"
                                placeholder="Dietary restrictions, seating preferences, celebrations..."
                              />
                            </div>
                          </div>
                        </form>
                      </motion.div>
                    </div>

                    {/* Summary Panel */}
                    <div>
                      <motion.div
                        variants={cardVariants}
                        className="sticky top-24 rounded-2xl border border-white/10 bg-black/60 p-6 backdrop-blur-sm"
                      >
                        <h3 className={`${playfair.className} text-lg font-bold text-[#D4AF37] mb-4`}>
                          Final Review
                        </h3>

                        <div className="space-y-3 mb-6">
                          <div className="flex justify-between py-2 border-b border-white/10">
                            <span className="text-gray-300">Date</span>
                            <span className="font-medium text-white">
                              {new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-US', { 
                                weekday: 'short', 
                                month: 'short', 
                                day: 'numeric' 
                              })}
                            </span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-white/10">
                            <span className="text-gray-300">Time</span>
                            <span className="font-medium text-white">{selectedTime}</span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-white/10">
                            <span className="text-gray-300">Guests</span>
                            <span className="font-medium text-white">{selectedGuests}</span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-white/10">
                            <span className="text-gray-300">Table</span>
                            <span className="font-medium text-white">
                              {tableOptions.find(t => t.id === selectedTable)?.name}
                            </span>
                          </div>
                          {selectedOccasion && (
                            <div className="flex justify-between py-2 border-b border-white/10">
                              <span className="text-gray-300">Occasion</span>
                              <span className="font-medium text-white">
                                {occasionTypes.find(o => o.id === selectedOccasion)?.label}
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="flex gap-3">
                          <motion.button
                            onClick={handlePrevStep}
                            className="flex-1 rounded-2xl border border-white/20 bg-gray-800/50 px-4 py-3 text-white transition-all duration-300 hover:bg-white/10"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <ArrowLeft size={18} className="mx-auto" />
                          </motion.button>
                          
                          <motion.button
                            onClick={handleNextStep}
                            disabled={!canProceedFromStep3}
                            className={`flex-[3] rounded-2xl px-6 py-3 font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                              canProceedFromStep3
                                ? 'bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black hover:scale-105 shadow-lg shadow-[#D4AF37]/30'
                                : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                            }`}
                            whileHover={canProceedFromStep3 ? { scale: 1.02 } : {}}
                            whileTap={canProceedFromStep3 ? { scale: 0.98 } : {}}
                          >
                            Review & Confirm
                            <ArrowRight size={18} />
                          </motion.button>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Final Confirmation */}
                {currentStep === 4 && (
                  <motion.div
                    key="step4"
                    variants={stepVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="max-w-4xl mx-auto"
                  >
                    <motion.div
                      variants={cardVariants}
                      className="rounded-3xl border border-white/10 bg-black/60 p-8 backdrop-blur-sm"
                    >
                      <h2 className={`${playfair.className} text-2xl font-bold text-[#D4AF37] mb-8 text-center flex items-center justify-center gap-3`}>
                        <CheckCircle size={24} />
                        Confirm Your Reservation
                      </h2>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {/* Reservation Details */}
                        <div className="space-y-4">
                          <h3 className={`${playfair.className} text-lg font-semibold text-white mb-4`}>Reservation Details</h3>
                          
                          <div className="space-y-3">
                            {[
                              { label: 'Date', value: new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) },
                              { label: 'Time', value: selectedTime },
                              { label: 'Guests', value: `${selectedGuests} ${selectedGuests === '1' ? 'Guest' : 'Guests'}` },
                              { label: 'Table', value: tableOptions.find(t => t.id === selectedTable)?.name },
                              ...(selectedOccasion ? [{ label: 'Occasion', value: occasionTypes.find(o => o.id === selectedOccasion)?.label }] : []),
                            ].map((item, index) => (
                              <motion.div
                                key={item.label}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex justify-between py-3 border-b border-white/10"
                              >
                                <span className="text-gray-300">{item.label}</span>
                                <span className="font-medium text-white">{item.value}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Guest Information */}
                        <div className="space-y-4">
                          <h3 className={`${playfair.className} text-lg font-semibold text-white mb-4`}>Guest Information</h3>
                          
                          <div className="space-y-3">
                            {[
                              { label: 'Name', value: formData.name },
                              { label: 'Phone', value: formData.phone },
                              { label: 'Email', value: formData.email },
                              ...(formData.specialRequests ? [{ label: 'Special Requests', value: formData.specialRequests }] : []),
                            ].map((item, index) => (
                              <motion.div
                                key={item.label}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex justify-between py-3 border-b border-white/10"
                              >
                                <span className="text-gray-300">{item.label}</span>
                                <span className="font-medium text-white text-right">{item.value}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Important Notes */}
                      <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-2xl p-6 mb-8">
                        <h4 className={`${playfair.className} text-lg font-semibold text-[#D4AF37] mb-3`}>Important Information</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                          <li className="flex items-center gap-2">
                            <Shield size={14} className="text-[#D4AF37] flex-shrink-0" />
                            No booking fees • Instant confirmation
                          </li>
                          <li className="flex items-center gap-2">
                            <AlertCircle size={14} className="text-[#D4AF37] flex-shrink-0" />
                            Table held for 15 minutes past reservation time
                          </li>
                          <li className="flex items-center gap-2">
                            <ChefHat size={14} className="text-[#D4AF37] flex-shrink-0" />
                            Smart casual dress code preferred
                          </li>
                        </ul>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4">
                        <motion.button
                          onClick={handlePrevStep}
                          className="flex-1 rounded-2xl border border-white/20 bg-gray-800/50 px-6 py-4 text-white transition-all duration-300 hover:bg-white/10 flex items-center justify-center gap-2"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <ArrowLeft size={18} />
                          Back to Edit
                        </motion.button>
                        
                        <motion.button
                          onClick={handleFormSubmit}
                          disabled={isSubmitting}
                          className="flex-[2] rounded-2xl bg-gradient-to-r from-[#D4AF37] to-amber-600 px-8 py-4 text-lg font-bold text-black shadow-lg shadow-[#D4AF37]/30 transition-all duration-300 hover:scale-105 hover:shadow-[#D4AF37]/50 disabled:opacity-50 disabled:cursor-not-allowed"
                          whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                        >
                          {isSubmitting ? (
                            <div className="flex items-center justify-center gap-3">
                              <div className="h-5 w-5 animate-spin rounded-full border-2 border-black/30 border-t-black"></div>
                              Processing...
                            </div>
                          ) : (
                            <div className="flex items-center justify-center gap-3">
                              <CheckCircle size={20} />
                              Confirm Reservation
                            </div>
                          )}
                        </motion.button>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>
        ) : (
          /* Success Confirmation */
          <section className="py-16">
            <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <div className="rounded-3xl border border-green-500/30 bg-gradient-to-br from-green-500/10 to-[#D4AF37]/10 p-12 backdrop-blur-sm">
                  {/* Success Icon */}
                  <motion.div
                    className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-[#D4AF37]"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
                  >
                    <CheckCircle size={40} className="text-white" />
                  </motion.div>
                  
                  <motion.h2
                    className={`${greatVibes.className} text-4xl md:text-5xl text-[#D4AF37] mb-6`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    Reservation Confirmed!
                  </motion.h2>
                  
                  <motion.p
                    className={`${playfair.className} text-xl text-gray-300 mb-8 max-w-2xl mx-auto`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    Thank you {formData.name}! Your table has been reserved for {selectedGuests} guests on{' '}
                    {new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      month: 'long', 
                      day: 'numeric' 
                    })} at {selectedTime}.
                  </motion.p>
                  
                  {/* Confirmation Details */}
                  <motion.div
                    className="mb-8 rounded-2xl bg-black/40 p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <h3 className={`${playfair.className} text-lg font-semibold text-white mb-4`}>Confirmation Details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-gray-400">Reservation ID</div>
                        <div className="font-mono text-white font-bold">SAL-{Date.now().toString().slice(-6)}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-gray-400">Email Sent To</div>
                        <div className="text-white">{formData.email}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-gray-400">Contact Number</div>
                        <div className="text-white">{formData.phone}</div>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Check Messages Section */}
                  <motion.div
                    className="mb-8 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                  >
                    <h4 className={`${playfair.className} text-lg font-semibold text-[#D4AF37] mb-4`}>Check Your Messages</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-black/30">
                        <Mail className="text-[#D4AF37]" size={20} />
                        <div className="text-left">
                          <div className="text-white font-medium">Email Confirmation</div>
                          <div className="text-gray-400 text-sm">Check your inbox for details</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-black/30">
                        <MessageCircle className="text-[#D4AF37]" size={20} />
                        <div className="text-left">
                          <div className="text-white font-medium">WhatsApp Reminder</div>
                          <div className="text-gray-400 text-sm">2 hours before arrival</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Action Buttons */}
                  <motion.div
                    className="flex flex-col sm:flex-row justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 }}
                  >
                    <motion.button
                      onClick={resetReservation}
                      className="rounded-2xl bg-gradient-to-r from-[#D4AF37] to-amber-600 px-8 py-4 font-bold text-black transition-all duration-300 hover:scale-105 shadow-lg shadow-[#D4AF37]/30"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Make Another Reservation
                    </motion.button>
                    <motion.button
                      onClick={() => window.location.href = '/'}
                      className="rounded-2xl border border-white/20 bg-black/60 px-8 py-4 text-white transition-all duration-300 hover:bg-white/10"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Return to Home
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}