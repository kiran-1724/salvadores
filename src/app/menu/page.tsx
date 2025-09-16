// src/app/menu/page.tsx
'use client'

import { useState, useRef } from 'react';
import { motion, AnimatePresence, Variants, useScroll, useTransform } from 'framer-motion';
import { 
  Leaf, 
  Star, 
  Search, 
  Grid, 
  List, 
  Utensils, 
  Heart, 
  Crown, 
  ChevronDown,
  Download,
  Award,
  Sparkles,
  Pizza,    // Icon for Pizza
  Soup,     // Icon for Salads/Appetizers
  Cookie,   // Icon for Desserts
  Beef,     // Icon for Main Courses
  ClipboardList // Icon for Pastas
} from 'lucide-react';
import { Great_Vibes, Playfair_Display } from 'next/font/google';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

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

// UPDATED: menuItems now have an icon property and no image property
const menuItems = [
  { id: 1, category: 'Salads', name: "Insalata di Formaggio di Capra e Pere", description: "Cinnamon honey roasted pear, salt roasted baby beets, wine soaked grapes, confit cherry tomatoes, and pistachio crusted goat cheese.", cuisine: "Italian", isVegetarian: true, icon: Soup },
  { id: 2, category: 'Salads', name: "Insalata di Pollo e Funghi", description: "Pulled roast chicken, roasted mushrooms, apple slices, carrots, soft boiled egg, and gouda cheese in sweet balsamic dressing.", cuisine: "Italian", icon: Soup },
  { id: 3, category: 'Pizzas', name: "Margherita Classica", description: "San Marzano tomatoes, fresh mozzarella, basil, and a drizzle of extra virgin olive oil.", cuisine: "Italian", isVegetarian: true, icon: Pizza },
  { id: 4, category: 'Pizzas', name: "Prosciutto e Funghi", description: "Tomato sauce, mozzarella, cooked ham, mushrooms, and fresh parsley.", cuisine: "Italian", icon: Pizza },
  { id: 5, category: 'Pastas', name: "Spaghetti Carbonara", description: "Classic Roman pasta with guanciale, pecorino cheese, black pepper, and egg yolk.", cuisine: "Italian", icon: ClipboardList },
  { id: 6, category: 'Pastas', name: "Truffle Tagliatelle", description: "Handmade pasta with a creamy black truffle sauce, topped with fresh truffle shavings.", cuisine: "Italian", isVegetarian: true, isSignature: true, icon: ClipboardList },
  { id: 7, category: 'Signatures', name: "Tuscan Lamb Rack", description: "Herb-crusted lamb with garlic mashed potatoes and rosemary jus.", cuisine: "Italian", isSignature: true, icon: Beef },
  { id: 8, category: 'Signatures', name: "Lobster Thermidor", description: "Classic French dish of creamy lobster meat, stuffed into its shell.", cuisine: "French", icon: Beef },
  { id: 9, category: 'Signatures', name: "Ceylonese Black Pork Curry", description: "Rich, aromatic curry with roasted spices, served with basmati rice.", cuisine: "Ceylonese", isSignature: true, icon: Beef },
  { id: 10, category: 'Signatures', name: "Bouillabaisse Marseillaise", description: "Traditional Provençal fish stew with saffron and rouille.", cuisine: "French", isSignature: true, icon: Beef },
  { id: 11, category: 'Desserts', name: "Deconstructed Tiramisu", description: "Artistic take on the classic Italian coffee-flavored dessert.", cuisine: "Italian", isSignature: true, icon: Cookie },
  { id: 12, category: 'Desserts', name: "Molten Chocolate Lava Cake", description: "Served warm with Madagascar vanilla bean ice cream.", cuisine: "French", icon: Cookie },
];

const tabCategories = ['Salads', 'Pizzas', 'Pastas', 'Signatures', 'Desserts'];

const cuisineTypes = [
  { name: 'Mediterranean', icon: '🌊' },
  { name: 'French', icon: '🥖' },
  { name: 'Italian', icon: '🍝' },
  { name: 'Ceylonese', icon: '🌶️' },
];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } }
};
const fadeInUpItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};
const scaleOnHover: Variants = {
  hover: { scale: 1.03, transition: { duration: 0.3, ease: "easeOut" } }
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('list');
  const [activeTab, setActiveTab] = useState(tabCategories[0]);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDownloadMenu = () => { window.open('/menu.pdf', '_blank'); };

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Header />

      <main ref={containerRef}>
        <section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <motion.div 
              className="h-[120%] w-full bg-cover bg-center bg-fixed"
              style={{ 
                y,
                backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }} 
            className="relative z-10 p-4 max-w-6xl mx-auto"
          >
            <motion.h1 
              className={`${playfair.className} text-5xl md:text-7xl lg:text-8xl font-bold text-[#D4AF37] mb-6`}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              Culinary Artistry
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              A symphony of Mediterranean, French, Italian & Ceylonese flavors, 
              crafted with passion and served with elegance
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              {cuisineTypes.map((cuisine, index) => (
                <motion.div
                  key={cuisine.name}
                  className="px-4 py-2 rounded-full bg-black/30 backdrop-blur-sm border border-[#D4AF37]/30 transition-colors duration-300 hover:border-[#D4AF37]"
                  whileHover={{ scale: 1.1, y: -2 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  <span className="text-white font-medium text-sm">
                    {cuisine.icon} {cuisine.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-10 animate-bounce"
          >
            <ChevronDown className="h-8 w-8 text-[#D4AF37]/70" />
          </motion.div>
        </section>

        {/* UPDATED: Signature Dishes section with dark theme and tabs */}
        <section className="py-24 bg-gradient-to-b from-black to-gray-900/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
               <div className="flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-[#D4AF37] mr-3" />
                <h2 className={`${greatVibes.className} text-4xl md:text-6xl text-[#D4AF37]`}>
                  Signature Creations
                </h2>
                <Award className="h-8 w-8 text-[#D4AF37] ml-3" />
              </div>
              <p className={`${playfair.className} text-xl text-gray-300 max-w-3xl mx-auto`}>
                Our chef&apos;s masterpieces, each dish tells a story of tradition, innovation, and culinary excellence
              </p>
            </motion.div>
            
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
              {tabCategories.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`${playfair.className} relative px-4 py-2 text-lg rounded-full transition-colors duration-300
                  ${activeTab === tab ? 'text-black' : 'text-gray-300 hover:text-white'}`}
                >
                   {activeTab === tab && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-amber-600 rounded-full"
                      layoutId="active_tab_highlight"
                    />
                  )}
                  <span className="relative z-10">{tab}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {menuItems.filter(item => item.category === activeTab).map(dish => (
                    <motion.div
                      key={dish.id}
                      variants={fadeInUpItem}
                      whileHover="hover"
                      className="w-full"
                    >
                      <motion.div 
                        variants={scaleOnHover}
                        className="bg-gradient-to-br from-gray-900/80 to-black border border-white/10 rounded-2xl p-6 h-full
                                   transition-all duration-500 hover:border-[#D4AF37]/50 hover:shadow-2xl hover:shadow-[#D4AF37]/10
                                   backdrop-blur-sm group flex flex-col"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-16 h-16 flex-shrink-0 rounded-lg bg-black/30 border border-white/10 flex items-center justify-center">
                            <dish.icon className="w-8 h-8 text-[#D4AF37]" />
                          </div>
                          <div className="text-right">
                             {dish.isSignature && (
                                <span className="text-xs bg-[#D4AF37]/20 text-[#D4AF37] px-2 py-1 rounded-full border border-[#D4AF37]/30 flex items-center gap-1.5">
                                 <Star className="w-3 h-3" /> Signature
                                </span>
                             )}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className={`${playfair.className} text-xl font-semibold text-white group-hover:text-[#D4AF37] transition-colors mb-2`}>
                            {dish.name}
                          </h3>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {dish.description}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        <section className="bg-black py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className={`${greatVibes.className} text-5xl md:text-7xl text-[#D4AF37] mb-4`}>
                Our Full Menu
              </h2>
              <p className={`${playfair.className} text-xl text-gray-300 max-w-2xl mx-auto`}>
                Discover our chef&apos;s carefully curated selection of dishes from around the world
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-12"
            >
              <div className="flex flex-col lg:flex-row gap-6 justify-between items-center mb-8">
                <div className="relative w-full lg:flex-1 max-w-2xl">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                  <Input
                    type="text"
                    placeholder="Search dishes, ingredients, or cuisine..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-14 pr-6 py-4 bg-gray-900/50 border-2 border-white/10 rounded-2xl 
                               focus:border-[#D4AF37] focus:ring-0 transition-all duration-300 text-white text-lg
                               backdrop-blur-sm hover:border-white/20"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-400">View:</span>
                  <div className="flex items-center bg-gray-900/50 border border-white/10 rounded-2xl p-1 backdrop-blur-sm">
                    <Button onClick={() => setViewMode('grid')} variant="ghost" size="icon" className={`rounded-xl transition-all duration-300 ${viewMode === 'grid' ? 'bg-[#D4AF37] text-black hover:bg-[#D4AF37]/90' : 'text-gray-400 hover:bg-white/10 hover:text-white'}`}><Grid className="h-5 w-5" /></Button>
                    <Button onClick={() => setViewMode('list')} variant="ghost" size="icon" className={`rounded-xl transition-all duration-300 ${viewMode === 'list' ? 'bg-[#D4AF37] text-black hover:bg-[#D4AF37]/90' : 'text-gray-400 hover:bg-white/10 hover:text-white'}`}><List className="h-5 w-5" /></Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {[{ id: 'all', name: 'All Dishes', icon: Utensils }, { id: 'Salads', name: 'Salads', icon: Leaf }, { id: 'Pizzas', name: 'Pizzas', icon: Sparkles }, { id: 'Pastas', name: 'Pastas', icon: Award }, { id: 'Signatures', name: 'Signatures', icon: Crown }, { id: 'Desserts', name: 'Desserts', icon: Heart }].map((cat) => (
                  <Button key={cat.id} onClick={() => setActiveCategory(cat.id)} variant="outline" className={`rounded-2xl px-6 py-3 transition-all duration-300 border-2 ${activeCategory === cat.id ? 'bg-[#D4AF37] text-black border-[#D4AF37] scale-105' : 'bg-transparent border-white/20 text-gray-300 hover:border-[#D4AF37] hover:text-[#D4AF37] hover:bg-[#D4AF37]/5 hover:scale-105'}`}>
                    <cat.icon className="mr-2 h-5 w-5" /> {cat.name}
                  </Button>
                ))}
              </div>
            </motion.div>

            <motion.div layout variants={staggerContainer} initial="hidden" animate="visible" className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6 max-w-5xl mx-auto'}>
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item) => (
                  <motion.div key={item.id} layout variants={fadeInUpItem} exit={{ opacity: 0, scale: 0.8 }} whileHover="hover" className="w-full">
                    <motion.div variants={scaleOnHover} className={`bg-gradient-to-br from-gray-900/80 to-black border border-white/10 rounded-2xl p-6 h-full transition-all duration-500 hover:border-[#D4AF37]/50 hover:shadow-2xl hover:shadow-[#D4AF37]/10 backdrop-blur-sm group relative overflow-hidden ${viewMode === 'list' ? 'flex items-center gap-6' : 'flex flex-col'}`}>
                      <div className="absolute top-4 right-4"><span className="text-xs bg-[#D4AF37]/20 text-[#D4AF37] px-2 py-1 rounded-full border border-[#D4AF37]/30">{item.cuisine}</span></div>
                      <div className={viewMode === 'list' ? 'flex-1' : ''}>
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className={`${playfair.className} text-xl font-semibold text-white group-hover:text-[#D4AF37] transition-colors`}>{item.name}</h3>
                          {item.isVegetarian && (
                            <span title="Vegetarian">
                              <Leaf className="h-5 w-5 text-green-400" />
                            </span>
                          )}
                          {item.isSignature && (
                            <span title="Signature Dish">
                              <Star className="h-5 w-5 text-[#D4AF37] fill-[#D4AF37]" />
                            </span>
                          )}
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.description}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
            
            {filteredItems.length === 0 && (
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20">
                <Search className="mx-auto h-16 w-16 mb-6 text-gray-600" />
                <h3 className={`${playfair.className} text-2xl font-semibold text-white mb-4`}>No Dishes Found</h3>
                <p className="text-gray-400">Please try adjusting your search or filter criteria</p>
              </motion.div>
            )}
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-gray-900/50 to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className={`${greatVibes.className} text-4xl md:text-6xl text-[#D4AF37] mb-6`}>
                Take Our Menu With You
              </h2>
              <p className={`${playfair.className} text-xl text-gray-300 mb-8 max-w-2xl mx-auto`}>
                Download our complete menu as a beautifully designed PDF, 
                perfect for sharing or planning your next visit
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button onClick={handleDownloadMenu} className="bg-gradient-to-r from-[#D4AF37] to-amber-600 hover:from-amber-600 hover:to-[#D4AF37] text-black font-semibold px-8 py-4 rounded-2xl text-lg transition-all duration-300 shadow-lg shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/40 border border-[#D4AF37]/30">
                  <Download className="mr-3 h-5 w-5" /> Download Full Menu
                </Button>
              </motion.div>
              <p className="text-sm text-gray-500 mt-4">PDF format • High resolution • Print-friendly</p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}