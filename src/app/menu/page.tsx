// src/app/menu/page.tsx
'use client'

import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Leaf, Star, Search, Grid, List, Utensils, Wine, Heart, Crown, ChevronDown } from 'lucide-react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// --- MENU DATA ---
const menuItems = [
    { id: 1, category: 'Appetizers', name: "Burrata Caprese", description: "Fresh burrata, heirloom tomatoes, basil, aged balsamic glaze.", isVegetarian: true },
    { id: 2, category: 'Appetizers', name: "Pan-Seared Scallops", description: "With saffron risotto and a lemon-butter reduction.", isSignature: true },
    { id: 3, category: 'Appetizers', name: "Truffle Arancini", description: "Crispy risotto balls filled with molten mozzarella and black truffle.", isVegetarian: true },
    { id: 4, category: 'Main Courses', name: "Tuscan Lamb Rack", description: "Herb-crusted lamb with garlic mashed potatoes and rosemary jus.", isSignature: true },
    { id: 5, category: 'Main Courses', name: "Lobster Thermidor", description: "A classic French dish of creamy lobster meat, stuffed into its shell." },
    { id: 6, category: 'Main Courses', name: "Mushroom Risotto", description: "Creamy arborio rice with wild mushrooms, parmesan, and white truffle oil.", isVegetarian: true },
    { id: 7, category: 'Main Courses', name: "Ceylonese Black Pork Curry", description: "A rich, aromatic curry with roasted spices, served with basmati rice.", isSignature: true },
    { id: 8, desserts: 'Desserts', name: "Deconstructed Tiramisu", description: "An artistic take on the classic Italian coffee-flavored dessert.", isSignature: true },
    { id: 9, desserts: 'Desserts', name: "Molten Chocolate Lava Cake", description: "Served warm with a scoop of Madagascar vanilla bean ice cream." },
];

const menuCategories = [
    { id: 'all', name: 'All Dishes', icon: Utensils },
    { id: 'Appetizers', name: 'Appetizers', icon: Wine },
    { id: 'Main Courses', name: 'Main Courses', icon: Crown },
    { id: 'Desserts', name: 'Desserts', icon: Heart },
];

// Refined animation variants for a smoother, staggered entrance
const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08 }
    }
};

const fadeInUpItem: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [viewMode, setViewMode] = useState('list'); // Default to the elegant list view

    const filteredItems = menuItems.filter(item => {
        const categoryMatch = item.category || item.desserts; // Handle different category keys
        const matchesCategory = activeCategory === 'all' || categoryMatch === activeCategory;
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              item.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="bg-black text-white">
            <Header />

            <main>
                {/* Section 1: Immersive Hero Introduction */}
                <section className="relative h-screen flex flex-col items-center justify-center text-center">
                    <div className="absolute inset-0 z-0 bg-black">
                        <div 
                          className="h-full w-full bg-cover bg-center opacity-30" 
                          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrkZ1KdvSc5_hNgMsjccvB2h4zgpxrXO2dQtYs1BayzGy3LkT2Tw6WQESaGZsp1F2gTkwCQwY22eHUMhmWr8OBQQHwNZzUyqDcijtyx7V1bcjloZ_hJP6oMfPPYXaZQy11GaZ44AQ=s1360-w1360-h1020-rw')" }}
                        />
                    </div>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 1, ease: "easeOut" }} 
                        className="relative z-10 p-4"
                    >
                        <h1 className="text-5xl md:text-7xl font-[var(--font-cinzel)] font-bold tracking-widest text-[#D4AF37]">A Culinary Journey</h1>
                        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">Discover a symphony of flavors, crafted with passion.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="absolute bottom-10 animate-bounce"
                    >
                        <ChevronDown className="h-8 w-8 text-white/50" />
                    </motion.div>
                </section>

                {/* Section 2: The Main Menu Content on a clean canvas */}
                <section className="bg-black py-24">
                    <div className="container mx-auto px-4">
                        {/* Filter Controls */}
                        <motion.div 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="mb-12"
                        >
                            <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6">
                                <div className="relative w-full md:flex-1">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                                    <Input
                                        type="text"
                                        placeholder="Search for a dish..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-12 pr-4 py-3 bg-[#111] border-2 border-white/10 rounded-full focus:border-[#D4AF37] focus:ring-0 transition-colors text-white"
                                    />
                                </div>
                                <div className="flex items-center bg-[#111] border border-white/10 rounded-full p-1">
                                    <Button onClick={() => setViewMode('grid')} variant="ghost" size="icon" className={`rounded-full transition-colors ${viewMode === 'grid' ? 'bg-[#D4AF37] text-black hover:bg-amber-300' : 'text-gray-400 hover:bg-white/10 hover:text-white'}`}><Grid className="h-5 w-5" /></Button>
                                    <Button onClick={() => setViewMode('list')} variant="ghost" size="icon" className={`rounded-full transition-colors ${viewMode === 'list' ? 'bg-[#D4AF37] text-black hover:bg-amber-300' : 'text-gray-400 hover:bg-white/10 hover:text-white'}`}><List className="h-5 w-5" /></Button>
                                </div>
                            </div>
                            <div className="flex flex-wrap justify-center gap-3">
                                {menuCategories.map((cat) => (
                                    <Button key={cat.id} onClick={() => setActiveCategory(cat.id)} variant="outline" className={`rounded-full px-6 py-3 transition-all border-2 ${activeCategory === cat.id ? 'bg-[#D4AF37] text-black border-[#D4AF37]' : 'bg-transparent border-white/20 text-gray-300 hover:border-[#D4AF37] hover:text-[#D4AF37] hover:bg-transparent'}`}>
                                        <cat.icon className="mr-2 h-5 w-5" /> {cat.name}
                                    </Button>
                                ))}
                            </div>
                        </motion.div>

                        {/* Menu Items */}
                        <motion.div 
                            layout
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                            className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4 max-w-4xl mx-auto'}
                        >
                            <AnimatePresence>
                                {filteredItems.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        layout
                                        variants={fadeInUpItem}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="w-full"
                                    >
                                        <div className="bg-[#111] border border-white/10 rounded-xl p-6 h-full transition-all duration-300 hover:border-[#D4AF37] hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="text-xl font-[var(--font-cinzel)] font-bold text-white">{item.name}</h3>
                                                  {item.isVegetarian && (
                                                    <span title="Vegetarian">
                                                        <Leaf className="h-5 w-5 text-green-400" />
                                                    </span>
                                                )}
                                                {item.isSignature && (
                                                    <span title="Signature Dish">
                                                        <Star className="h-5 w-5 text-amber-400 fill-amber-400" />
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-gray-400 text-sm">{item.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                        
                        {filteredItems.length === 0 && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16 text-gray-500">
                                <Search className="mx-auto h-12 w-12 mb-4" />
                                <h3 className="text-2xl font-semibold text-white">No Dishes Found</h3>
                                <p>Please try adjusting your search or filter.</p>
                            </motion.div>
                        )}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}