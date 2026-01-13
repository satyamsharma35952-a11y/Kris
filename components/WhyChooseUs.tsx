
import React from 'react';

const ChoiceItem: React.FC<{ title: string; delay: string }> = ({ title, delay }) => (
  <div 
    className={`group flex items-center justify-between py-6 border-b border-slate-100 cursor-pointer transition-all duration-300 hover:pl-4 opacity-0 animate-slide-in-right ${delay}`}
    style={{ animationFillMode: 'forwards' }}
  >
    <span className="text-xl lg:text-2xl font-bold text-slate-800 group-hover:text-brand-green transition-colors">
      {title}
    </span>
    <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:border-brand-green group-hover:bg-brand-green/5 transition-all duration-300">
      <svg className="w-5 h-5 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </div>
  </div>
);

export const WhyChooseUs: React.FC = () => {
  const choices = [
    "Experienced Chefs",
    "Customizable Menus",
    "Premium Ingredients",
    "Professional Staff"
  ];

  return (
    <section className="py-32 bg-brand-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-green/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-right { animation: slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
      `}</style>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="space-y-12 order-2 lg:order-1">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="h-[2px] w-12 bg-brand-green"></div>
                <span className="text-brand-green font-black text-sm uppercase tracking-[0.4em]">Why Choice Us</span>
              </div>
              
              <h2 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tighter">
                Exceptional Catering Service <br />
                <span className="relative inline-block italic font-serif text-brand-green font-normal">
                  Unforgettable
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="#1A8A43" strokeWidth="4" fill="transparent" strokeLinecap="round" />
                  </svg>
                </span> Flavors For Your Guests.
              </h2>
            </div>

            <div className="max-w-xl">
              {choices.map((choice, idx) => (
                <ChoiceItem key={idx} title={choice} delay={`delay-${(idx + 1) * 100}`} />
              ))}
            </div>

            <div className="pt-6">
              <button className="group relative px-10 py-5 bg-[#D1FA9B] text-brand-dark rounded-full font-black text-lg hover:shadow-2xl hover:shadow-brand-green/20 transition-all active:scale-95 flex items-center space-x-3 overflow-hidden">
                <span className="relative z-10">Learn More</span>
                <svg className="w-6 h-6 relative z-10 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 bg-brand-green translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-10"></div>
              </button>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] border-[12px] border-white group">
              <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" 
                alt="Culinary Team in Action" 
                className="w-full h-[600px] object-cover transition-transform duration-[3000ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 to-transparent"></div>
              
              {/* Overlay Play/Detail Button */}
              <div className="absolute bottom-10 left-10">
                <button className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-brand-green shadow-2xl hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 rotate-[-45deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>

              {/* Fire/Steam effect overlay (visual polish) */}
              <div className="absolute top-0 right-0 w-full h-full pointer-events-none mix-blend-screen opacity-40 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-tr from-brand-red/20 via-transparent to-brand-green/20 animate-[spin_20s_linear_infinite]"></div>
              </div>
            </div>

            {/* Floating decoration */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border-2 border-brand-green/20 rounded-full -z-10 animate-pulse"></div>
          </div>

        </div>
      </div>
    </section>
  );
};
