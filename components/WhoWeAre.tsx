
import React from 'react';

export const WhoWeAre: React.FC = () => {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -z-10 skew-x-6 transform origin-top-right"></div>
      <div className="absolute -left-20 top-1/2 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-60"></div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Editorial Image Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 group">
              <div className="rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[16px] border-white">
                <img 
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Our Executive Chef" 
                  className="w-full h-[650px] object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
              </div>
              
              {/* Floating Quality Badge */}
              <div className="absolute -right-8 top-12 bg-white p-4 rounded-3xl shadow-2xl border border-slate-100 flex items-center space-x-4 animate-float">
                <div className="w-12 h-12 bg-green-600 rounded-2xl flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Certified Excellence</p>
                  <p className="text-sm font-black text-slate-900 leading-tight">ISO 22000 Quality</p>
                </div>
              </div>
            </div>

            {/* Behind-the-scenes secondary image */}
            <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full border-[8px] border-white overflow-hidden shadow-2xl z-20 hidden lg:block">
              <img src="https://images.unsplash.com/photo-1577214714282-354da217e99c?q=80&w=400&auto=format" className="w-full h-full object-cover" alt="Kitchen Prep"/>
            </div>
          </div>

          {/* Right Side: Content & Stats */}
          <div className="lg:col-span-7 space-y-10 lg:pl-12">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-3">
                <span className="w-12 h-[1px] bg-green-600"></span>
                <span className="text-green-700 font-bold text-sm uppercase tracking-[0.3em]">Our Story</span>
              </div>

              <h2 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                Crafting Culinary <br />
                Artistry With <span className="relative inline-block italic font-serif text-green-600 font-normal">
                  Passion
                  <svg className="absolute -bottom-3 left-0 w-full opacity-60" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 15C35 5 165 5 195 15" stroke="#16a34a" strokeWidth="6" strokeLinecap="round" />
                  </svg>
                </span>
              </h2>

              <p className="text-slate-500 text-xl leading-relaxed max-w-2xl font-medium">
                Coriander stands as a beacon of excellence in the corporate catering landscape. Led by Pooja Singhal, we transform daily meals into moments of inspiration for over <span className="text-slate-900 font-bold">12,000</span> professionals across the NCR.
              </p>
            </div>

            {/* Integrated Stats & Core Message */}
            <div className="grid md:grid-cols-2 gap-8 pt-4">
              <div className="relative group">
                <div className="absolute inset-0 bg-green-600 rounded-[2.5rem] translate-x-2 translate-y-2 -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform"></div>
                <div className="bg-[#064e3b] text-white p-10 rounded-[2.5rem] shadow-2xl h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                        <span className="text-green-400 font-bold">✓</span>
                      </div>
                      <span className="text-xs uppercase font-bold tracking-widest text-green-300">Industry Leader</span>
                    </div>
                    <h3 className="text-5xl font-black mb-2 tracking-tighter">25K+</h3>
                    <p className="text-lg font-bold text-green-100">Daily Lives Impacted</p>
                  </div>
                  <p className="text-green-100/60 text-sm mt-8 leading-relaxed">
                    Setting the gold standard for corporate nutritional wellness since 2014.
                  </p>
                </div>
              </div>

              <div className="space-y-8 flex flex-col justify-center">
                <div className="space-y-4">
                   <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1 flex-shrink-0">
                         <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                      </div>
                      <p className="text-slate-700 font-bold">Locally Sourced, Global Standards</p>
                   </div>
                   <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1 flex-shrink-0">
                         <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                      </div>
                      <p className="text-slate-700 font-bold">Customized Wellness Programs</p>
                   </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button className="group relative px-8 py-4 bg-green-600 text-white rounded-2xl font-bold overflow-hidden shadow-2xl shadow-green-200 active:scale-95 transition-all">
                    <div className="absolute inset-0 bg-green-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <div className="relative z-10 flex items-center space-x-3">
                       <div className="w-2 h-2 rounded-full bg-white animate-ping"></div>
                       <span>Book A Consultation</span>
                    </div>
                  </button>
                  <button className="px-8 py-4 bg-white border-2 border-slate-100 text-slate-800 rounded-2xl font-bold hover:bg-slate-50 hover:border-slate-200 active:scale-95 transition-all">
                    Our Process
                  </button>
                </div>
              </div>
            </div>

            {/* Partner Showcase (Trust Bar) */}
            <div className="pt-10 border-t border-slate-100">
               <p className="text-[10px] uppercase font-bold text-slate-400 tracking-[0.3em] mb-6">Trusted by innovators</p>
               <div className="flex flex-wrap items-center gap-8 opacity-40 grayscale group-hover:grayscale-0 transition-all">
                  <span className="text-xl font-black text-slate-900 tracking-tighter">MICROSOFT</span>
                  <span className="text-xl font-black text-slate-900 tracking-tighter">AMAZON</span>
                  <span className="text-xl font-black text-slate-900 tracking-tighter">PAYTM</span>
                  <span className="text-xl font-black text-slate-900 tracking-tighter">WIPRO</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
