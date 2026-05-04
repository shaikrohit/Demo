import React from 'react';
import { motion } from 'framer-motion';

const Gallery: React.FC = () => {
  const images = [
    { src: '/images/hero-bg.png', alt: 'Exterior night view', span: 'col-span-2 row-span-2' },
    { src: '/images/interior.png', alt: 'Elegant interior', span: 'col-span-1 row-span-1' },
    { src: '/images/biryani.png', alt: 'Signature Biryani', span: 'col-span-1 row-span-1' },
    { src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800', alt: 'Dining area', span: 'col-span-1 row-span-1' },
    { src: 'https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80&w=800', alt: 'Appetizers', span: 'col-span-1 row-span-1' },
    { src: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80&w=800', alt: 'Desserts', span: 'col-span-2 row-span-1' },
  ];

  return (
    <section id="gallery" className="section-padding bg-dark-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-[10px] text-primary-yellow font-black uppercase tracking-[0.6em] mb-4 block">Visual Journey</span>
          <h2 className="text-white">A Glimpse into Cravings Kitchen</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 auto-rows-[250px] md:auto-rows-[300px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-[40px] md:rounded-[56px] overflow-hidden group cursor-pointer border border-white/5 shadow-2xl ${img.span}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center p-8 text-center backdrop-blur-sm">
                <span className="text-sm md:text-base font-black uppercase tracking-[0.4em] text-white border-b-2 border-primary-yellow pb-4 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
