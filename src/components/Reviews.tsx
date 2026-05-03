import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Reviews: React.FC = () => {
  const reviews = [
    { name: 'Rahul Sharma', rating: 5, text: 'The best Biryani I have ever had in Tirupati. The ambience is truly premium and perfect for family dinners.', date: '2 days ago' },
    { name: 'Priya Reddy', rating: 4, text: 'Great place with amazing service. The staff is very polite and the neon theme looks fantastic at night.', date: '1 week ago' },
    { name: 'Anil Kumar', rating: 5, text: 'Table9 is my go-to place for birthday celebrations. Their Tandoori platter is a must-try!', date: '3 days ago' },
    { name: 'Sneha Rao', rating: 5, text: 'Very hygienic and well-maintained. The lighting creates a very warm and inviting atmosphere.', date: '2 weeks ago' },
  ];

  return (
    <section className="section-padding bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-[10px] text-primary-blue font-black uppercase tracking-[0.6em] mb-4 block">Testimonials</span>
          <h2 className="text-white">Voices of Our Guests</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/[0.02] backdrop-blur-2xl p-10 md:p-12 rounded-[48px] border border-white/5 flex flex-col h-full group hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 shadow-2xl"
            >
              <div className="mb-8 flex justify-between items-start">
                <div className="flex gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} 
                      className={`${i < review.rating ? 'text-primary-yellow fill-primary-yellow' : 'text-white/10'}`} 
                    />
                  ))}
                </div>
                <Quote className="text-white/[0.03] group-hover:text-primary-blue transition-colors duration-700" size={48} />
              </div>
              
              <p className="text-base md:text-lg leading-relaxed text-white/60 italic mb-10 flex-1 font-medium">
                "{review.text}"
              </p>
              
              <div className="pt-10 border-t border-white/5">
                <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white mb-2">{review.name}</h4>
                <span className="text-[10px] text-white/20 font-black uppercase tracking-widest">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
