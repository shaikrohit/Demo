import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Utensils, Calendar, MapPin } from 'lucide-react';

const MobileStickyBar: React.FC = () => {
  const actions = [
    { icon: <Phone size={20} />, label: 'Call', href: 'tel:+911234567890' },
    { icon: <Utensils size={20} />, label: 'Menu', href: '#menu' },
    { icon: <Calendar size={20} />, label: 'Book', href: '#booking' },
    { icon: <MapPin size={20} />, label: 'Directions', href: 'https://maps.google.com' },
  ];

  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="md:hidden fixed bottom-0 left-0 w-full glass z-50 px-4 py-3 flex justify-between items-center border-t border-white/10"
    >
      {actions.map((action, i) => (
        <a 
          key={i} 
          href={action.href} 
          className="flex flex-col items-center gap-1 text-[var(--text-gray)] hover:text-[var(--primary-yellow)] transition-colors"
        >
          <div className="p-2 rounded-full hover:bg-white/5 transition-colors">
            {action.icon}
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider">{action.label}</span>
        </a>
      ))}
    </motion.div>
  );
};

export default MobileStickyBar;
