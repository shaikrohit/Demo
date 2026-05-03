import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MenuSection: React.FC = () => {
  const categories = ['Starters', 'Biryani', 'Main Course', 'Beverages'];
  const [activeCategory, setActiveCategory] = useState('Starters');

  const menuItems: Record<string, any[]> = {
    'Starters': [
      { name: 'Chicken Majestic', price: '₹280', desc: 'Slices of chicken stir fried with green chillies and spices.' },
      { name: 'Apollo Fish', price: '₹320', desc: 'Boneless fish fillets marinated and deep fried with curry leaves.' },
      { name: 'Veg Manchurian', price: '₹180', desc: 'Vegetable balls tossed in spicy manchurian sauce.' },
      { name: 'Paneer 65', price: '₹220', desc: 'Cubes of paneer fried with south indian spices.' },
    ],
    'Biryani': [
      { name: 'Special Chicken Biryani', price: '₹349', desc: 'Our signature biryani with aromatic basmati rice and tender chicken.' },
      { name: 'Mutton Dum Biryani', price: '₹449', desc: 'Traditional Hyderabadi mutton biryani cooked on slow flame.' },
      { name: 'Prawns Biryani', price: '₹420', desc: 'Spiced prawns layered with flavorful saffron rice.' },
      { name: 'Paneer Biryani', price: '₹280', desc: 'Fragrant rice cooked with marinated paneer and spices.' },
    ],
    'Main Course': [
      { name: 'Butter Chicken', price: '₹320', desc: 'Tender chicken in a rich, creamy tomato gravy.' },
      { name: 'Mutton Rogan Josh', price: '₹420', desc: 'Classic Kashmiri mutton curry with aromatic spices.' },
      { name: 'Dal Makhani', price: '₹210', desc: 'Black lentils slow cooked overnight with butter and cream.' },
      { name: 'Kadhai Paneer', price: '₹260', desc: 'Paneer cooked with bell peppers and freshly ground spices.' },
    ],
    'Beverages': [
      { name: 'Fresh Lime Soda', price: '₹80', desc: 'Refreshing lime juice with soda and mint.' },
      { name: 'Virgin Mojito', price: '₹120', desc: 'Classic mint and lime mocktail with a fizzy twist.' },
      { name: 'Cold Coffee', price: '₹140', desc: 'Rich espresso blended with milk and vanilla ice cream.' },
      { name: 'Masala Chai', price: '₹40', desc: 'Traditional spiced indian tea.' },
    ],
  };

  return (
    <section id="menu" className="section-padding bg-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-[10px] text-primary-blue font-black uppercase tracking-[0.6em] mb-4 block">Taste the Tradition</span>
          <h2 className="text-white">Our Digital Menu</h2>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-start md:justify-center overflow-x-auto pb-10 mb-12 gap-4 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-10 py-5 rounded-full text-xs font-black uppercase tracking-[0.3em] transition-all duration-500 ${
                activeCategory === cat 
                ? 'bg-primary-yellow text-black shadow-2xl shadow-yellow-500/20 scale-105' 
                : 'bg-white/[0.03] text-white/40 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-16">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="contents"
            >
              {menuItems[activeCategory].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row justify-between items-start gap-6 pb-10 border-b border-white/5 group transition-all duration-300 hover:border-white/20"
                >
                  <div className="flex-1 w-full">
                    <div className="flex items-center gap-6 mb-4">
                      <h3 className="text-2xl font-black text-white group-hover:text-primary-yellow transition-colors m-0 tracking-tight">
                        {item.name}
                      </h3>
                      <div className="h-px bg-white/5 flex-1 hidden sm:block group-hover:bg-primary-blue/30 transition-all duration-500" />
                      <span className="text-primary-yellow font-black text-2xl tracking-tighter">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-base leading-relaxed text-white/40 max-w-xl font-medium">
                      {item.desc}
                    </p>
                    <span className="sm:hidden text-primary-yellow font-black text-2xl mt-4 inline-block">
                      {item.price}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-24 text-center">
          <button className="btn btn-secondary px-14 group">
            <span className="tracking-[0.3em]">Download Full PDF Menu</span>
            <div className="w-2.5 h-2.5 rounded-full bg-primary-blue group-hover:scale-[3] transition-transform duration-500" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
