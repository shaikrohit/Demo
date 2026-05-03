import React from 'react';
import { Share2, Camera, MessageSquare, Play, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] pt-32 pb-40 lg:pb-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 lg:gap-16 mb-24">
          <div className="lg:col-span-1">
            <div className="text-3xl font-black mb-10 tracking-tighter">
              <span className="text-white">Di</span>
              <span className="text-primary-yellow">Table9</span>
            </div>
            <p className="text-base leading-relaxed mb-12 text-white/40 font-medium max-w-xs">
              Tirupati's premier destination for multi-cuisine excellence and luxury night ambience. Creating memories through taste since 2014.
            </p>
            <div className="flex gap-5">
              {[Camera, Share2, MessageSquare, Play].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/60 hover:bg-primary-blue hover:text-white hover:border-primary-blue transition-all duration-500 shadow-xl"
                  aria-label="Social Link"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] mb-12 text-primary-yellow">Explore</h4>
            <ul className="space-y-6 text-sm font-black uppercase tracking-[0.2em]">
              <li><a href="#" className="text-white/40 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-white/40 hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#menu" className="text-white/40 hover:text-white transition-colors">Digital Menu</a></li>
              <li><a href="#booking" className="text-white/40 hover:text-white transition-colors">Table Booking</a></li>
              <li><a href="#gallery" className="text-white/40 hover:text-white transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] mb-12 text-primary-yellow">Support</h4>
            <ul className="space-y-6 text-sm font-black uppercase tracking-[0.2em]">
              <li><a href="#" className="text-white/40 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/40 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-white/40 hover:text-white transition-colors">Refund Policy</a></li>
              <li><a href="#" className="text-white/40 hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] mb-12 text-primary-yellow">Newsletter</h4>
            <p className="text-sm text-white/40 mb-10 leading-relaxed font-medium">Join our inner circle for exclusive offers and tasting event invites.</p>
            <form className="space-y-5">
              <input 
                type="email" 
                placeholder="email@example.com" 
                className="w-full bg-white/[0.02] border border-white/5 rounded-3xl px-8 py-5 text-sm focus:border-primary-blue focus:bg-white/[0.05] transition-all outline-none font-bold"
              />
              <button className="btn btn-primary w-full !h-16 text-[10px] font-black uppercase tracking-[0.4em] shadow-2xl">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-white/5 gap-10">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 text-center md:text-left leading-loose">
            © 2026 Di Table9 Restaurant. Crafted for Tirupati's Finest.
          </p>
          <button 
            onClick={scrollToTop}
            className="w-16 h-16 rounded-[24px] bg-white/[0.03] border border-white/5 flex items-center justify-center hover:bg-primary-yellow hover:text-black hover:border-primary-yellow transition-all duration-500 shadow-2xl group"
            aria-label="Back to top"
          >
            <ArrowUp size={28} className="transition-transform duration-500 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
