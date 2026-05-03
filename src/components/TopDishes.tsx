import React from 'react';
import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';

const TopDishes: React.FC = () => {
  const trending = [
    { name: 'Mutton Dum Biryani', orders: '120+ ordered today', image: '/images/biryani.png' },
    { name: 'Dragon Chicken', orders: '85+ ordered today', image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&q=80&w=800' },
    { name: 'Virgin Mojito', orders: '50+ ordered today', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <section className="section-padding bg-dark-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 md:mb-24 gap-10">
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-6">
              <Flame className="text-primary-yellow animate-glow-pulse" size={32} />
              <span className="text-[10px] text-primary-yellow font-black uppercase tracking-[0.6em]">Trending Now</span>
            </div>
            <h2 className="text-left text-white m-0">The Most Ordered Delicacies of the Day</h2>
          </div>
          <div className="bg-primary-blue/5 backdrop-blur-2xl p-4 px-8 rounded-full border border-primary-blue/20">
            <div className="flex items-center gap-4">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-blue">Kitchen status: LIVE</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {trending.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-[48px] overflow-hidden h-[350px] group cursor-pointer border border-white/5 shadow-2xl"
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-125" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />
              
              <div className="absolute bottom-10 left-10 right-10">
                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-primary-yellow transition-colors leading-tight">{item.name}</h3>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary-yellow animate-pulse" />
                  <span className="text-[10px] text-primary-yellow font-black uppercase tracking-[0.2em]">{item.orders}</span>
                </div>
              </div>

              {/* Float Badge */}
              <div className="absolute top-8 right-8 w-14 h-14 flex items-center justify-center bg-white/5 backdrop-blur-2xl rounded-full border border-white/10 group-hover:bg-primary-yellow group-hover:text-black transition-all duration-500 group-hover:scale-110">
                <Flame size={24} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDishes;
