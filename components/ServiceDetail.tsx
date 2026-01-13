
import React, { useEffect } from 'react';

interface ServiceDetailProps {
  service: {
    id: string;
    title: string;
    fullDescription: string;
    image: string;
    icon: React.ReactNode;
  };
  onBack: () => void;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen bg-white pt-32 pb-20 overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-light/40 -z-10 skew-x-[-12deg] transform origin-top-right"></div>
      
      <div className="container mx-auto px-6 lg:px-12">
        <button 
          onClick={onBack}
          className="group mb-12 flex items-center space-x-3 text-slate-400 hover:text-brand-green transition-all font-bold uppercase tracking-widest text-xs"
        >
          <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-brand-green group-hover:bg-brand-green/5 transition-all">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <span>Back to Services</span>
        </button>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-2xl bg-brand-green/10 text-brand-green flex items-center justify-center shadow-inner">
                  {service.icon}
                </div>
                <div className="h-px w-12 bg-brand-red"></div>
              </div>
              
              <h1 className="text-6xl lg:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9]">
                {service.title}
              </h1>
            </div>

            <p className="text-xl lg:text-2xl text-slate-500 leading-relaxed font-medium border-l-4 border-brand-red pl-8 italic">
              {service.fullDescription}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <button className="px-10 py-5 bg-brand-green text-white rounded-2xl font-black text-lg shadow-2xl shadow-brand-green/20 hover:bg-brand-dark transition-all active:scale-95 group flex items-center justify-center space-x-3">
                <span>Learn More Details</span>
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              
              <button className="px-10 py-5 bg-white border-2 border-slate-100 text-slate-900 rounded-2xl font-black text-lg hover:border-brand-green/20 hover:bg-slate-50 transition-all">
                Request Quote
              </button>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-12">
              <div className="space-y-2">
                <p className="text-brand-green font-black text-3xl">100%</p>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Hygiene Quality</p>
              </div>
              <div className="space-y-2">
                <p className="text-brand-red font-black text-3xl">24/7</p>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Support Access</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-[20px] border-white group">
              <img 
                src={service.image} 
                className="w-full aspect-[4/5] object-cover transition-transform duration-[2000ms] group-hover:scale-110" 
                alt={service.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent"></div>
            </div>
            
            {/* Abstract Shape */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-red rounded-full -z-10 animate-pulse opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
