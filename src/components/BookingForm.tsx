import React from 'react';
import { Calendar, Users, Phone, User, MessageSquare, PartyPopper } from 'lucide-react';

const BookingForm: React.FC = () => {
  return (
    <section id="booking" className="section-padding relative overflow-hidden bg-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 relative z-10">
        <div className="bg-white/[0.02] backdrop-blur-2xl rounded-[64px] overflow-hidden border border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col lg:flex-row">
            {/* Info Side */}
            <div className="lg:w-2/5 p-10 md:p-16 lg:p-20 bg-gradient-to-br from-primary-blue/10 to-transparent">
              <span className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-primary-yellow/10 text-primary-yellow text-[10px] font-black uppercase tracking-[0.3em] mb-10 border border-primary-yellow/20 backdrop-blur-xl">
                <PartyPopper size={16} />
                Special Celebrations
              </span>
              <h2 className="text-left text-white mb-8 leading-[1.1]">Reserve Your Experience at Table9</h2>
              <p className="mb-12 text-lg md:text-xl leading-relaxed text-white/60">
                Planning a special celebration or a family reunion? Secure your spot now and let our chefs create a custom memory for you.
              </p>
              
              <div className="space-y-10">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-[24px] bg-white/[0.03] border border-white/10 flex items-center justify-center text-primary-blue shadow-xl">
                    <Phone size={28} />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/30 font-black uppercase tracking-[0.4em] mb-1.5">Direct Line</p>
                    <p className="text-2xl font-black text-white">+91 12345 67890</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-[24px] bg-white/[0.03] border border-white/10 flex items-center justify-center text-primary-yellow shadow-xl">
                    <Calendar size={28} />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/30 font-black uppercase tracking-[0.4em] mb-1.5">Dinner Hours</p>
                    <p className="text-2xl font-black text-white">11:00 AM - 11:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="flex-1 p-10 md:p-16 lg:p-20 bg-white/[0.01]">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] ml-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" size={20} />
                    <input type="text" placeholder="John Doe" className="w-full bg-white/[0.03] border-white/5 rounded-3xl pl-16 pr-8 py-5 focus:border-primary-blue focus:bg-white/5 transition-all outline-none" />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] ml-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" size={20} />
                    <input type="tel" placeholder="+91 98765 43210" className="w-full bg-white/[0.03] border-white/5 rounded-3xl pl-16 pr-8 py-5 focus:border-primary-blue focus:bg-white/5 transition-all outline-none" />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] ml-2">Reservation Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" size={20} />
                    <input type="date" className="w-full bg-white/[0.03] border-white/5 rounded-3xl pl-16 pr-8 py-5 focus:border-primary-blue focus:bg-white/5 transition-all outline-none [color-scheme:dark]" />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] ml-2">Number of Guests</label>
                  <div className="relative">
                    <Users className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" size={20} />
                    <select className="w-full bg-white/[0.03] border-white/5 rounded-3xl pl-16 pr-8 py-5 focus:border-primary-blue focus:bg-white/5 transition-all outline-none appearance-none">
                      <option>2 People</option>
                      <option>4 People</option>
                      <option>6 People</option>
                      <option>10+ (Large Group)</option>
                    </select>
                  </div>
                </div>
                <div className="md:col-span-2 space-y-4">
                  <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] ml-2">Special Occasion</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" size={20} />
                    <input type="text" placeholder="Birthday, Anniversary, Corporate Event..." className="w-full bg-white/[0.03] border-white/5 rounded-3xl pl-16 pr-8 py-5 focus:border-primary-blue focus:bg-white/5 transition-all outline-none" />
                  </div>
                </div>
                <div className="md:col-span-2 pt-6">
                  <button type="submit" className="w-full btn btn-primary !h-20 text-sm tracking-[0.3em] font-black shadow-[0_20px_40px_rgba(255,193,7,0.1)]">
                    Confirm Reservation
                  </button>
                  <p className="text-center text-[10px] text-white/20 mt-6 uppercase tracking-[0.4em] font-black">
                    * You will receive a confirmation call shortly
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
