
import React from 'react';

const ProcessStep: React.FC<{ 
  number: string; 
  title: string; 
  description: string; 
  icon: React.ReactNode; 
  delay: string;
  isLower?: boolean;
}> = ({ number, title, description, icon, delay, isLower }) => (
  <div className={`relative group flex flex-col p-10 rounded-[3rem] bg-white border border-slate-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(26,138,67,0.15)] transition-all duration-700 opacity-0 animate-reveal-card ${delay} ${isLower ? 'lg:mt-24' : ''}`} style={{ animationFillMode: 'forwards' }}>
    
    {/* Decorative Background Number */}
    <div className="absolute top-4 right-8 text-8xl font-black text-slate-50 group-hover:text-brand-green/5 transition-colors duration-500 select-none -z-0">
      {number}
    </div>

    {/* Icon & Label */}
    <div className="relative z-10 flex items-start justify-between mb-10">
      <div className="w-20 h-20 rounded-2xl bg-brand-green/5 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-500 transform group-hover:rotate-[10deg] group-hover:scale-110">
        {icon}
      </div>
      <div className="px-4 py-1.5 rounded-full bg-brand-red/5 border border-brand-red/10 text-brand-red text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        Pillar {number}
      </div>
    </div>

    {/* Content */}
    <div className="relative z-10">
      <h3 className="text-3xl font-bold text-slate-900 mb-5 leading-tight tracking-tighter">
        {title}
      </h3>
      <p className="text-slate-500 font-medium leading-relaxed group-hover:text-slate-700 transition-colors">
        {description}
      </p>
    </div>

    {/* Interactive Bottom Bar */}
    <div className="mt-12 flex items-center justify-between">
      <div className="h-[3px] w-12 bg-slate-100 group-hover:bg-brand-green transition-all duration-500 rounded-full"></div>
      <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-brand-green/10 transition-colors">
        <svg className="w-4 h-4 text-slate-300 group-hover:text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" />
        </svg>
      </div>
    </div>
  </div>
);

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-32 bg-[#FBFDFA] relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-[-10%] w-[40%] h-[40%] bg-brand-green/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[30%] bg-brand-red/5 rounded-full blur-[120px]"></div>
      </div>

      <style>{`
        @keyframes revealCard {
          0% { opacity: 0; transform: translateY(50px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-reveal-card {
          animation: revealCard 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .delay-step-1 { animation-delay: 0.1s; }
        .delay-step-2 { animation-delay: 0.3s; }
        .delay-step-3 { animation-delay: 0.5s; }
      `}</style>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Editorial Header */}
        <div className="flex flex-col lg:flex-row items-end justify-between mb-32 gap-12">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center space-x-4">
              <span className="h-px w-16 bg-brand-red"></span>
              <span className="text-brand-green font-black text-sm uppercase tracking-[0.5em]">The Masterclass</span>
            </div>
            <h2 className="text-6xl lg:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9]">
              How We Define <br />
              <span className="italic font-serif text-brand-green font-normal">Modern</span> Catering.
            </h2>
          </div>
          <div className="lg:max-w-xs border-l-4 border-brand-green/20 pl-8 mb-4">
            <p className="text-slate-500 font-bold text-lg leading-snug">
              Every dish is a testament to our three unshakeable pillars of excellence.
            </p>
          </div>
        </div>

        {/* Staggered Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 pb-12">
          
          <ProcessStep 
            number="01"
            delay="delay-step-1"
            title="Fresh Food"
            description="No frozen or pre-cooked food. All perishable items are bought on a daily basis to ensure maximum flavor and nutritional integrity."
            icon={
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 3.269c1.1.26 2.029.962 2.726 1.86m-10.826.685C5.45 6.41 5 7.425 5 8.5c0 3.866 3.134 7 7 7s7-3.134 7-7c0-1.075-.242-2.09-.672-3" />
              </svg>
            }
          />
          
          <ProcessStep 
            number="02"
            delay="delay-step-2"
            isLower={true}
            title="Hygiene And Safety"
            description="We are fully compliant with COVID-19 norms and safety standards issued by FSSAI. Our kitchens are sanctuaries of surgical-grade cleanliness."
            icon={
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            }
          />

          <ProcessStep 
            number="03"
            delay="delay-step-3"
            title="Multi-cuisine Menu"
            description="Our menu is a living thing. Enjoy a daily rotating selection of global cuisines, with a signature grand special menu every week."
            icon={
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            }
          />
        </div>

        {/* Dynamic CTA Footer */}
        <div className="mt-24 pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center space-x-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-sm">
                  <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="Chef Profile" />
                </div>
              ))}
            </div>
            <p className="text-slate-600 font-bold text-sm tracking-tight">
              Backed by a team of <span className="text-brand-green">45+</span> certified culinary experts.
            </p>
          </div>
          
          <button className="px-10 py-5 bg-white border-2 border-brand-green text-brand-green rounded-[1.5rem] font-black text-lg hover:bg-brand-green hover:text-white transition-all duration-300 shadow-xl shadow-brand-green/5 active:scale-95 group flex items-center space-x-3">
            <span>Explore All Standards</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
