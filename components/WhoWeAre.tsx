
import React from 'react';

export const WhoWeAre: React.FC = () => {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-light/50 -z-10 skew-x-6 transform origin-top-right"></div>
      <div className="absolute -left-20 top-1/2 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl opacity-60"></div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 group">
              <div className="rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[16px] border-white">
                <img 
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Our Executive Chef" 
                  className="w-full h-[650px] object-cover transition-all duration-700 scale-105 group-hover:scale-100"
                />
              </div>
              
              <div className="absolute -right-8 top-12 bg-white p-4 rounded-3xl shadow-2xl border border-slate-100 flex items-center space-x-4 animate-float">
                <div className="w-12 h-12 bg-brand-red rounded-2xl flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C7.58 2 4 5.58 4 10c0 4.42 3.58 8 8 8s8-3.58 8-8c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" /></svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Premium Taste</p>
                  <p className="text-sm font-black text-slate-900 leading-tight">ISO Certified</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full border-[8px] border-white overflow-hidden shadow-2xl z-20 hidden lg:block">
              <img src="https://images.unsplash.com/photo-1577214714282-354da217e99c?q=80&w=400&auto=format" className="w-full h-full object-cover" alt="Kitchen Prep"/>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-10 lg:pl-12">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-3">
                <span className="w-12 h-[2px] bg-brand-red"></span>
                <span className="text-brand-green font-bold text-sm uppercase tracking-[0.3em]">Our Heritage</span>
              </div>

              <h2 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                Crafting Culinary <br />
                Artistry With <span className="relative inline-block italic font-serif text-brand-green font-normal">
                  Passion
                  <svg className="absolute -bottom-3 left-0 w-full opacity-60" viewBox="0 0 200 20" fill="none">
                    <path d="M5 15C35 5 165 5 195 15" stroke="#BF311A" strokeWidth="6" strokeLinecap="round" />
                  </svg>
                </span>
              </h2>

              <p className="text-slate-500 text-xl leading-relaxed max-w-2xl font-medium">
                House of Curry stands as a beacon of flavor in the corporate catering landscape. Led by Pooja Singhal, we transform daily meals into vibrant culinary journeys for over <span className="text-brand-red font-bold">12,000</span> professionals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 pt-4">
              <div className="relative group">
                <div className="absolute inset-0 bg-brand-red rounded-[2.5rem] translate-x-2 translate-y-2 -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform"></div>
                <div className="bg-brand-dark text-white p-10 rounded-[2.5rem] shadow-2xl h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                        <span className="text-brand-red font-bold">✓</span>
                      </div>
                      <span className="text-xs uppercase font-bold tracking-widest text-brand-light/70">Catering Leader</span>
                    </div>
                    <h3 className="text-5xl font-black mb-2 tracking-tighter">25K+</h3>
                    <p className="text-lg font-bold text-brand-light">Professionals Served</p>
                  </div>
                  <p className="text-brand-light/60 text-sm mt-8 leading-relaxed">
                    Bringing authentic curry culture and global cuisines to elite workspaces since 2014.
                  </p>
                </div>
              </div>

              <div className="space-y-8 flex flex-col justify-center">
                <div className="space-y-4">
                   <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 rounded-full bg-brand-green/10 flex items-center justify-center mt-1 flex-shrink-0">
                         <svg className="w-3 h-3 text-brand-green" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                      </div>
                      <p className="text-slate-700 font-bold">Chef-Curated Spice Blends</p>
                   </div>
                   <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 rounded-full bg-brand-green/10 flex items-center justify-center mt-1 flex-shrink-0">
                         <svg className="w-3 h-3 text-brand-green" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                      </div>
                      <p className="text-slate-700 font-bold">Tailored Corporate Dining Plans</p>
                   </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button className="group relative px-8 py-4 bg-brand-green text-white rounded-2xl font-bold overflow-hidden shadow-2xl shadow-brand-green/20 active:scale-95 transition-all">
                    <div className="absolute inset-0 bg-brand-dark translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <div className="relative z-10 flex items-center space-x-3">
                       <div className="w-2 h-2 rounded-full bg-white animate-ping"></div>
                       <span>Book A Consultation</span>
                    </div>
                  </button>
                  <button className="px-8 py-4 bg-white border-2 border-slate-100 text-slate-800 rounded-2xl font-bold hover:bg-slate-50 hover:border-slate-200 active:scale-95 transition-all">
                    Call Us Now
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-10 border-t border-slate-100">
               <p className="text-[10px] uppercase font-bold text-slate-400 tracking-[0.3em] mb-6">Partners in success</p>
               <div className="flex flex-wrap items-center gap-8 opacity-40">
                  <span className="text-xl font-black text-brand-green tracking-tighter">MICROSOFT</span>
                  <span className="text-xl font-black text-brand-green tracking-tighter">AMAZON</span>
                  <span className="text-xl font-black text-brand-green tracking-tighter">PAYTM</span>
                  <span className="text-xl font-black text-brand-green tracking-tighter">WIPRO</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
