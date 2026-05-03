import React from 'react';
import { motion } from 'framer-motion';
import { Star, Plus } from 'lucide-react';

const FeaturedDishes: React.FC = () => {
  const dishes = [
    { id: 1, name: 'Special Hyderabadi Biryani', price: '₹349', image: '/images/biryani.png', tag: 'Signature', rating: 4.9 },
    { id: 2, name: 'Mutton Seekh Kebab', price: '₹420', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800', tag: 'Bestseller', rating: 4.8 },
    { id: 3, name: 'Paneer Butter Masala', price: '₹280', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=800', rating: 4.7 },
    { id: 4, name: 'Tandoori Platter', price: '₹599', image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=800', tag: 'Chef Special', rating: 4.9 },
    { id: 5, name: 'Chicken 65', price: '₹260', image: 'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?auto=format&fit=crop&q=80&w=800', rating: 4.6 },
    { id: 6, name: 'Mixed Veg Handi', price: '₹240', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=800', rating: 4.5 },
  ];

  return (
    <section id="featured" className="section-padding bg-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-[10px] text-primary-yellow font-black uppercase tracking-[0.6em] mb-4 block">Chef's Selection</span>
          <h2 className="text-white">Signature Delicacies</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {dishes.map((dish, i) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col h-full bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-[40px] overflow-hidden group hover:border-white/10 transition-all duration-500 hover:-translate-y-4"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                {dish.tag && (
                  <div className="absolute top-6 left-6 px-6 py-2 bg-primary-yellow text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-2xl">
                    {dish.tag}
                  </div>
                )}
                <div className="absolute top-6 right-6 bg-dark/40 backdrop-blur-xl p-2 px-4 rounded-2xl flex items-center gap-2 border border-white/10 shadow-2xl">
                  <Star size={14} className="text-primary-yellow fill-primary-yellow" />
                  <span className="text-xs font-black text-white">{dish.rating}</span>
                </div>
              </div>
              
              <div className="p-10 flex flex-col flex-1">
                <h3 className="text-2xl font-black mb-6 text-white group-hover:text-primary-yellow transition-colors line-clamp-1">{dish.name}</h3>
                <div className="mt-auto flex justify-between items-end pt-8 border-t border-white/5">
                  <div>
                    <p className="text-[10px] text-white/30 uppercase font-black tracking-[0.4em] mb-2">Price</p>
                    <span className="text-3xl font-black text-white">{dish.price}</span>
                  </div>
                  <button className="w-16 h-16 rounded-[24px] bg-primary-blue text-white flex items-center justify-center hover:bg-primary-blue/80 hover:scale-110 transition-all shadow-2xl shadow-blue-500/20">
                    <Plus size={32} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
