
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  variant: 'dark' | 'image' | 'light';
  bgImage?: string;
  delay: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, variant, bgImage, delay }) => {
  const baseClasses = `relative p-8 rounded-[2.5rem] h-[400px] flex flex-col justify-center items-center text-center transition-all duration-500 ease-out hover:-translate-y-4 hover:shadow-[0_30px_60px_-15px_rgba(26,138,67,0.3)] group overflow-hidden opacity-0 animate-fade-in-up`;
  
  const variants = {
    dark: 'bg-brand-dark text-white',
    image: 'bg-slate-900 text-white',
    light: 'bg-white text-slate-900 border border-slate-100 shadow-sm hover:border-brand-green/20'
  };

  return (
    <div className={`${baseClasses} ${variants[variant]} ${delay}`} style={{ animationFillMode: 'forwards' }}>
      {variant === 'image' && (
        <>
          <img src={bgImage} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-1000" alt={title} />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 to-transparent"></div>
        </>
      )}

      <div className="relative z-10 flex flex-col items-center">
        <div className={`mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${variant === 'light' ? 'text-brand-green' : 'text-brand-red'}`}>
          {icon}
        </div>

        <h3 className="text-xl lg:text-2xl font-black mb-4 tracking-tight uppercase">{title}</h3>
        
        <p className={`text-sm leading-relaxed mb-8 max-w-[240px] ${variant === 'light' ? 'text-slate-500' : 'text-brand-light/70'}`}>
          {description}
        </p>

        <a href="#" className={`inline-flex items-center space-x-2 font-bold text-sm transition-all ${variant === 'light' ? 'text-brand-red' : 'text-brand-green'} hover:space-x-4`}>
          <span>Learn More</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
      
      {variant !== 'light' && (
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
      )}
    </div>
  );
};

export const WhatWeDo: React.FC = () => {
  return (
    <section className="py-32 bg-brand-light relative overflow-hidden">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-600 { animation-delay: 600ms; }
      `}</style>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center space-x-4 bg-white px-6 py-2 rounded-full border border-slate-100 shadow-sm">
             <div className="h-[2px] w-8 bg-brand-red"></div>
             <span className="text-brand-green font-bold text-xs uppercase tracking-[0.3em]">Exquisite Services</span>
             <div className="h-[2px] w-8 bg-brand-red"></div>
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
            We Have Services For <span className="relative inline-block italic font-serif text-brand-green">
              Catering
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="#BF311A" strokeWidth="4" fill="transparent" strokeLinecap="round" />
              </svg>
            </span> Tailored To Your Event.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard 
            delay="delay-100"
            variant="dark"
            title="Cafeteria Services"
            description="Freshly prepared nutritious meals for the modern corporate workspace."
            icon={<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
          />
          <ServiceCard 
            delay="delay-200"
            variant="image"
            bgImage="https://images.unsplash.com/photo-1555244162-803834f70033?w=600&auto=format"
            title="Corporate Catering"
            description="Bespoke culinary experiences designed for executive meetings and events."
            icon={<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
          />
          <ServiceCard 
            delay="delay-300"
            variant="dark"
            title="Industrial Catering"
            description="Scaling gourmet standards to meet the high demands of industrial workforces."
            icon={<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
          />
          <ServiceCard 
            delay="delay-400"
            variant="light"
            title="Packed Food Services"
            description="Premium boxed lunches and dinners—hygienic, timely, and delicious."
            icon={<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>}
          />
          
          <ServiceCard 
            delay="delay-300"
            variant="light"
            title="Special Events"
            description="From gallery openings to grand weddings, we provide the perfect culinary backdrop."
            icon={<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>}
          />
          <ServiceCard 
            delay="delay-400"
            variant="dark"
            title="Hospital Cafeteria"
            description="Nutritious menus focused on recovery and wellness for healthcare professionals."
            icon={<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}
          />
          <ServiceCard 
            delay="delay-500"
            variant="light"
            title="Salads & Bowls"
            description="Fresh, locally-sourced bowls designed for health and high-energy performance."
            icon={<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>}
          />
          <ServiceCard 
            delay="delay-600"
            variant="dark"
            title="House of Curry Specials"
            description="Our signature curry collection featuring recipes passed down through generations."
            icon={<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>}
          />
        </div>
      </div>
    </section>
  );
};
