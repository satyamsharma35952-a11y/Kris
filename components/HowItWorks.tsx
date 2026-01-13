
import React from 'react';

const ProcessStep: React.FC<{ 
  number: string; 
  title: string; 
  description: string; 
  subPoints: string[];
  icon: React.ReactNode; 
  delay: string;
  isLower?: boolean;
}> = ({ number, title, description, subPoints, icon, delay, isLower }) => (
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
        Phase {number}
      </div>
    </div>

    {/* Content */}
    <div className="relative z-10">
      <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight tracking-tight">
        {title}
      </h3>
      <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6 group-hover:text-slate-700 transition-colors">
        {description}
      </p>
      
      <ul className="space-y-3">
        {subPoints.map((point, i) => (
          <li key={i} className="flex items-start space-x-3">
            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-green group-hover:bg-brand-red transition-colors shrink-0"></div>
            <span className="text-xs text-slate-400 group-hover:text-slate-600 font-semibold leading-tight">{point}</span>
          </li>
        ))}
      </ul>
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
              <span className="text-brand-green font-black text-sm uppercase tracking-[0.5em]">The Journey</span>
            </div>
            <h2 className="text-6xl lg:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9]">
              How We <br />
              <span className="italic font-serif text-brand-green font-normal">Create</span> Perfection.
            </h2>
          </div>
          <div className="lg:max-w-xs border-l-4 border-brand-green/20 pl-8 mb-4">
            <p className="text-slate-500 font-bold text-lg leading-snug">
              From the first conversation to the final clean-up, we handle every detail with meticulous care.
            </p>
          </div>
        </div>

        {/* Staggered Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 pb-12">
          
          <ProcessStep 
            number="01"
            delay="delay-step-1"
            title="Consultation & Menu Planning"
            description="We start with understanding your event goals, preferences, and guest needs — so every detail feels effortless and personal."
            subPoints={[
              "One-on-one consultation to discuss theme, size & special requests",
              "Explore our curated menus or create your own",
              "Finalize logistics, styling, and service format with ease"
            ]}
            icon={
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            }
          />
          
          <ProcessStep 
            number="02"
            delay="delay-step-2"
            isLower={true}
            title="Fresh Preparation & Setup"
            description="Our chefs use only the finest ingredients, prepared on-time and on-site for maximum freshness and flavor. Every dish is served with care."
            subPoints={[
              "Ingredients are sourced fresh and prepared",
              "Beautiful presentation and layout",
              "Timely delivery and complete setup"
            ]}
            icon={
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
              </svg>
            }
          />

          <ProcessStep 
            number="03"
            delay="delay-step-3"
            title="Exceptional Service & Clean-Up"
            description="Each meal is crafted with precision, ensuring every bite delivers a perfect balance of taste and nutrition, while presentation elevates the experience."
            subPoints={[
              "Professional staff ensures seamless food",
              "Continuous refilling and assistance to guests",
              "Hassle-free cleanup so you can enjoy the moment"
            ]}
            icon={
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
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
                  <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="Staff Profile" />
                </div>
              ))}
            </div>
            <p className="text-slate-600 font-bold text-sm tracking-tight">
              Our team ensures a <span className="text-brand-green">100%</span> seamless experience from start to finish.
            </p>
          </div>
          
          <button className="px-10 py-5 bg-white border-2 border-brand-green text-brand-green rounded-[1.5rem] font-black text-lg hover:bg-brand-green hover:text-white transition-all duration-300 shadow-xl shadow-brand-green/5 active:scale-95 group flex items-center space-x-3">
            <span>Start Your Plan</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
