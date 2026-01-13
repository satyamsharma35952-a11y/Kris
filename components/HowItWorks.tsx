
import React from 'react';

const Step: React.FC<{ 
  number: string; 
  title: string; 
  description: string; 
  icon: React.ReactNode; 
  delay: string;
}> = ({ number, title, description, icon, delay }) => (
  <div className={`relative group flex flex-col items-center text-center px-6 opacity-0 animate-fade-in-up ${delay}`} style={{ animationFillMode: 'forwards' }}>
    {/* Step Number Background */}
    <div className="absolute -top-6 -right-6 text-9xl font-black text-slate-100/50 group-hover:text-brand-green/10 transition-colors duration-500 select-none">
      {number}
    </div>

    {/* Icon Container */}
    <div className="relative z-10 w-24 h-24 mb-8 flex items-center justify-center">
      <div className="absolute inset-0 bg-brand-green/5 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
      <div className="absolute inset-0 bg-white border border-slate-100 rounded-3xl shadow-sm group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-500 flex items-center justify-center">
        <div className="text-brand-green group-hover:text-brand-red transition-colors duration-500">
          {icon}
        </div>
      </div>
    </div>

    {/* Content */}
    <div className="relative z-10">
      <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight uppercase">
        {title}
      </h3>
      <p className="text-slate-500 font-medium leading-relaxed max-w-xs mx-auto group-hover:text-slate-700 transition-colors">
        {description}
      </p>
    </div>

    {/* Subtle Link/Indicator */}
    <div className="mt-8 h-[2px] w-0 bg-brand-red group-hover:w-12 transition-all duration-500 rounded-full"></div>
  </div>
);

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Decorative connecting line (Hidden on mobile) */}
      <div className="hidden lg:block absolute top-[60%] left-1/2 -translate-x-1/2 w-2/3 h-px border-t-2 border-dashed border-slate-100 -z-0"></div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 300ms; }
        .delay-300 { animation-delay: 500ms; }
      `}</style>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-24 space-y-6">
          <div className="inline-flex items-center space-x-4">
            <span className="h-[2px] w-12 bg-brand-red"></span>
            <span className="text-brand-green font-black text-sm uppercase tracking-[0.4em]">Why We Excel</span>
            <span className="h-[2px] w-12 bg-brand-red"></span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold text-slate-900 tracking-tighter leading-tight">
            Our Core <br />
            <span className="italic font-serif text-brand-green font-normal">Commitment</span> To Quality.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-16 lg:gap-8">
          <Step 
            number="01"
            delay="delay-100"
            title="Fresh Food"
            description="No frozen or pre-cooked food. All perishable items are bought on a daily basis to ensure maximum flavor."
            icon={
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            }
          />
          
          <Step 
            number="02"
            delay="delay-200"
            title="Hygiene And Safety"
            description="We are fully compliant with COVID-19 norms and safety standards issued by FSSAI for your complete peace of mind."
            icon={
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            }
          />

          <Step 
            number="03"
            delay="delay-300"
            title="Multi-cuisine Menu"
            description="A daily new menu keeps things exciting, with a grand special menu curated once every week for our clients."
            icon={
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            }
          />
        </div>

        <div className="mt-24 text-center">
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-8">Ready for premium catering?</p>
          <button className="px-12 py-5 bg-brand-dark text-white rounded-2xl font-black text-lg shadow-2xl shadow-brand-green/20 hover:bg-brand-green transition-all transform hover:-translate-y-1 active:scale-95">
            View Sample Weekly Menu
          </button>
        </div>
      </div>
    </section>
  );
};
