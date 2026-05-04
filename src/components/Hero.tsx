import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Phone, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with optimized overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-bg.png" 
          alt="Cravings Kitchen Exterior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/95 via-dark/40 to-dark" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="px-6 py-2 rounded-full bg-primary-blue/10 text-primary-blue text-[10px] font-black uppercase tracking-[0.5em] mb-12 border border-primary-blue/20 backdrop-blur-md"
          >
            Hyderabadi Biryani Experts
          </motion.div>
          
          <h1 className="mb-10 text-glow-yellow">
            Cravings <span className="text-primary-yellow">Kitchen</span> <br />
            Hyderabadi Biryani
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 mb-16 max-w-2xl leading-relaxed">
            Indulge in the authentic taste of Nizami traditions. We serve the most flavorful and aromatic Hyderabadi Biryani in town.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <a href="#menu" className="btn btn-primary px-14 text-base">
              Explore Menu
              <ChevronRight size={20} />
            </a>
            <a href="#booking" className="btn btn-secondary px-14 text-base">
              Book a Table
            </a>
          </div>

          <div className="mt-24 flex flex-wrap justify-center gap-10 md:gap-16 lg:gap-24">
            <div className="flex items-center gap-5 group cursor-pointer">
              <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center text-primary-blue !p-0 transition-all group-hover:bg-primary-blue group-hover:text-white group-hover:scale-110">
                <Phone size={24} />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-white/30 font-black uppercase tracking-[0.2em] mb-1">Call Us</p>
                <p className="text-sm font-bold text-white">+91 12345 67890</p>
              </div>
            </div>
            <div className="flex items-center gap-5 group cursor-pointer">
              <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center text-primary-yellow !p-0 transition-all group-hover:bg-primary-yellow group-hover:text-black group-hover:scale-110">
                <MapPin size={24} />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-white/30 font-black uppercase tracking-[0.2em] mb-1">Location</p>
                <p className="text-sm font-bold text-white">AIR Bypass Road</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-primary-blue/10 blur-[200px] rounded-full -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary-yellow/5 blur-[180px] rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />
    </section>
  );
};

export default Hero;
