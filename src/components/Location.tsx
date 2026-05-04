import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="location" className="section-padding bg-dark-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="bg-white/[0.02] backdrop-blur-2xl rounded-[64px] overflow-hidden border border-white/5 shadow-2xl">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-10 md:p-16 lg:p-20">
              <span className="text-[10px] text-primary-blue font-black uppercase tracking-[0.5em] mb-6 block">Visit Us</span>
              <h2 className="text-left text-white mb-16 leading-[1.1]">The Home of Authentic Biryani</h2>
              
              <div className="space-y-12">
                <div className="flex gap-8 items-start group">
                  <div className="w-16 h-16 rounded-[24px] bg-white/[0.03] border border-white/10 flex items-center justify-center text-primary-blue flex-shrink-0 transition-all duration-500 group-hover:bg-primary-blue group-hover:text-white group-hover:scale-110 shadow-xl">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-3">Address</h4>
                    <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-xs font-medium">Opposite SV Music College, AIR Bypass Road, Tirupati, Andhra Pradesh 517501</p>
                  </div>
                </div>

                <div className="flex gap-8 items-start group">
                  <div className="w-16 h-16 rounded-[24px] bg-white/[0.03] border border-white/10 flex items-center justify-center text-primary-yellow flex-shrink-0 transition-all duration-500 group-hover:bg-primary-yellow group-hover:text-black group-hover:scale-110 shadow-xl">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-3">Service Hours</h4>
                    <p className="text-base md:text-lg text-white/60 leading-relaxed font-medium">Daily: 11:00 AM - 11:00 PM</p>
                    <p className="text-[10px] text-primary-yellow font-black uppercase tracking-[0.2em] mt-2">Open on Public Holidays</p>
                  </div>
                </div>

                <div className="flex gap-8 items-start group">
                  <div className="w-16 h-16 rounded-[24px] bg-white/[0.03] border border-white/10 flex items-center justify-center text-primary-blue flex-shrink-0 transition-all duration-500 group-hover:bg-primary-blue group-hover:text-white group-hover:scale-110 shadow-xl">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-3">Direct Contact</h4>
                    <p className="text-xl md:text-2xl font-black text-white mb-1">+91 12345 67890</p>
                    <p className="text-xs text-white/20 font-black uppercase tracking-widest">info@cravingskitchen.com</p>
                  </div>
                </div>

                <div className="pt-10">
                  <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn btn-primary w-full md:w-auto px-12 !h-16 text-xs tracking-[0.3em] font-black">
                    <Navigation size={20} />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="lg:flex-1 min-h-[500px] bg-dark relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent z-10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center z-20">
                  <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                    className="w-24 h-24 rounded-full bg-primary-blue/20 flex items-center justify-center mx-auto mb-8 border border-primary-blue/30 backdrop-blur-xl shadow-2xl"
                  >
                    <MapPin size={40} className="text-primary-blue" />
                  </motion.div>
                  <p className="text-2xl font-black tracking-tight text-white mb-2">AIR Bypass Road, Tirupati</p>
                  <p className="text-[10px] text-white/30 font-black uppercase tracking-[0.4em]">Interactive Map View</p>
                </div>
              </div>
              {/* Decorative texture */}
              <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_#fff_1px,_transparent_1px)] bg-[size:40px_40px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
