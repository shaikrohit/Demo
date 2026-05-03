import React from 'react';
import { motion } from 'framer-motion';
import { Users, Utensils, Star, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    { icon: <Users size={24} />, title: 'Family Friendly', desc: 'Spacious for all' },
    { icon: <Utensils size={24} />, title: 'Multi-Cuisine', desc: '50+ authentic dishes' },
    { icon: <Star size={24} />, title: 'Premium Quality', desc: 'Top-tier ingredients' },
    { icon: <ShieldCheck size={24} />, title: 'Safe & Hygienic', desc: 'Sanitized kitchen' },
  ];

  return (
    <section id="about" className="section-padding bg-dark-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-[48px] overflow-hidden border border-white/5 shadow-2xl">
              <img src="/images/interior.png" alt="Di Table9 Ambience" className="w-full aspect-[4/5] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
            </div>
            {/* Experience Badge */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-8 -right-4 md:-right-12 bg-dark/40 backdrop-blur-2xl p-10 md:p-12 rounded-[40px] border border-white/10 border-l-4 border-l-primary-yellow shadow-2xl"
            >
              <span className="block text-5xl md:text-6xl font-black text-primary-yellow mb-2">10+</span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white leading-loose">Years of<br />Excellence</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 lg:pl-10"
          >
            <span className="text-[10px] text-primary-blue font-black uppercase tracking-[0.5em] mb-6 block">Our Story</span>
            <h2 className="mb-10 text-white">A Legacy of Taste and Luxury Ambience</h2>
            <p className="mb-8 text-lg md:text-xl leading-relaxed text-white/80">
              Established with a passion for authentic flavors, Di Table9 has become Tirupati's landmark for premium dining. We bring together traditional recipes and modern culinary techniques to create a menu that speaks to the soul.
            </p>
            <p className="mb-14 text-base md:text-lg leading-relaxed text-white/40 font-medium">
              Our restaurant is designed to offer a tranquil escape from the bustling city, with dim lighting, neon accents, and a warm atmosphere perfect for family gatherings and celebrations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
              {features.map((feat, i) => (
                <div key={i} className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary-blue/10 flex items-center justify-center text-primary-blue flex-shrink-0 transition-all duration-500 group-hover:bg-primary-blue group-hover:text-white group-hover:scale-110 shadow-lg">
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-2 text-white">{feat.title}</h4>
                    <p className="text-sm text-white/40 leading-relaxed font-medium">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
