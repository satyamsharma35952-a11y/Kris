
import React from 'react';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  variant: 'accent' | 'image' | 'clean' | 'dark';
  bgImage?: string;
  className?: string;
  delay: string;
  onClick: (id: string) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, description, icon, variant, bgImage, className, delay, onClick }) => {
  const baseClasses = `group relative rounded-[2.5rem] p-8 flex flex-col justify-between overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-3 hover:shadow-[0_40px_80px_-20px_rgba(26,138,67,0.25)] opacity-0 animate-reveal cursor-pointer`;
  
  const variantStyles = {
    accent: 'bg-brand-red text-white',
    image: 'bg-slate-900 text-white',
    clean: 'bg-white text-slate-900 border border-slate-100',
    dark: 'bg-brand-dark text-white'
  };

  return (
    <div 
      className={`${baseClasses} ${variantStyles[variant]} ${className} ${delay}`}
      style={{ animationFillMode: 'forwards' }}
      onClick={() => onClick(id)}
    >
      {variant === 'image' && (
        <>
          <img 
            src={bgImage} 
            className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-1000 group-hover:scale-110" 
            alt={title} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent"></div>
        </>
      )}

      {/* Decorative patterns */}
      {variant !== 'image' && variant !== 'clean' && (
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <svg className="w-24 h-24" viewBox="0 0 100 100" fill="currentColor">
            <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" fill="none" strokeDasharray="4 4" />
          </svg>
        </div>
      )}

      <div className="relative z-10">
        <div className={`mb-8 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:rotate-[15deg] group-hover:scale-110 ${
          variant === 'clean' ? 'bg-brand-green/10 text-brand-green' : 'bg-white/10 text-white'
        }`}>
          {icon}
        </div>
        <h3 className="text-2xl font-black leading-tight tracking-tight mb-3">
          {title}
        </h3>
        <p className={`text-sm leading-relaxed max-w-[220px] transition-colors duration-300 ${
          variant === 'clean' ? 'text-slate-500 group-hover:text-slate-700' : 'text-white/70 group-hover:text-white'
        }`}>
          {description}
        </p>
      </div>

      <div className="relative z-10 mt-8">
        <div className={`inline-flex items-center space-x-3 font-bold text-sm tracking-wide transition-all duration-300 group-hover:space-x-5 ${
          variant === 'clean' ? 'text-brand-green' : 'text-white'
        }`}>
          <span className="uppercase tracking-widest">Learn More</span>
          <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>

      <div className="absolute -inset-full bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rotate-45"></div>
    </div>
  );
};

export const SERVICES_DATA = [
  {
    id: 'corporate-cafeteria',
    title: "Corporate Cafeteria",
    description: "Revolutionizing office dining with chef-curated menus.",
    fullDescription: "Our corporate cafeteria solutions are designed to transform the workplace experience. We focus on nutritional balance, diversity of cuisine, and a vibrant atmosphere that fosters community and productivity among employees. From live counters to automated billing, we bring modern tech to traditional dining.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&auto=format",
    variant: 'image' as const,
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011-1v5m-4 0h4" /></svg>
  },
  {
    id: 'premium-events',
    title: "Premium Events",
    description: "Exquisite gala catering for milestones that demand perfection.",
    fullDescription: "Milestone events deserve more than just food; they deserve a culinary story. We provide end-to-end event catering management, including theme development, bespoke menu creation, and world-class service. Whether it is a grand opening or a leadership retreat, we ensure every plate is a masterpiece.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format",
    variant: 'accent' as const,
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" /></svg>
  },
  {
    id: 'packed-meals',
    title: "Packed Meals",
    description: "Hygienic, premium boxes delivered fresh to your desk.",
    fullDescription: "The perfect solution for busy professionals and on-the-go teams. Our packed meal services emphasize food safety and freshness. Each box is meticulously planned to provide a complete meal—protein, fiber, and flavor—delivered in eco-friendly packaging that maintains temperature and texture.",
    image: "https://images.unsplash.com/photo-1547573854-74d2a71d0826?w=800&auto=format",
    variant: 'clean' as const,
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
  },
  {
    id: 'signature-curries',
    title: "Signature Curries",
    description: "Our heritage in every bite. Traditional recipes meet modern techniques.",
    fullDescription: "House of Curry's pride lies in our secret spice blends and slow-cooked traditional recipes. We bring the authentic soul of India's regional cuisines to the corporate table, ensuring that even in a globalized world, the comfort of a perfect curry is never far away.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format",
    variant: 'dark' as const,
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
  },
  {
    id: 'industrial-solutions',
    title: "Industrial Solutions",
    description: "Large-scale catering excellence for manufacturing and tech hubs.",
    fullDescription: "Serving thousands of meals in a single shift requires precision and scale without compromising quality. Our industrial catering programs are optimized for high-volume delivery, strict hygiene protocols, and menus that sustain workers across demanding shifts in Noida and Gurgaon's largest hubs.",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&auto=format",
    variant: 'clean' as const,
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
  }
];

export const WhatWeDo: React.FC<{ onSelectService: (id: string) => void }> = ({ onSelectService }) => {
  return (
    <section id="what-we-do" className="py-32 bg-brand-light relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-green/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-brand-red/10 rounded-full blur-[120px]"></div>
      </div>

      <style>{`
        @keyframes reveal {
          0% { opacity: 0; transform: translateY(30px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-reveal { animation: reveal 1s cubic-bezier(0.19, 1, 0.22, 1) forwards; }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        .delay-4 { animation-delay: 0.4s; }
        .delay-5 { animation-delay: 0.5s; }
      `}</style>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center space-x-4">
              <span className="h-px w-12 bg-brand-red"></span>
              <span className="text-brand-green font-black text-sm uppercase tracking-[0.4em]">Our Expertise</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tighter">
              Bespoke <span className="italic font-serif text-brand-green font-normal">Catering</span> <br />
              Tailored For Your Vision.
            </h2>
          </div>
          <div className="lg:max-w-xs pb-2">
            <p className="text-slate-500 font-medium leading-relaxed border-l-2 border-brand-red/20 pl-6">
              From high-stakes boardrooms to intimate gala dinners, we bring global culinary standards to your doorstep.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[280px]">
          {SERVICES_DATA.map((service, index) => {
            let className = "";
            if (service.id === 'corporate-cafeteria') className = "md:row-span-2";
            if (service.id === 'signature-curries') className = "lg:row-span-2";
            if (service.id === 'industrial-solutions') className = "md:col-span-2";

            return (
              <ServiceCard 
                key={service.id}
                id={service.id}
                className={className}
                delay={`delay-${index + 1}`}
                variant={service.variant}
                bgImage={service.image}
                title={service.title}
                description={service.description}
                icon={service.icon}
                onClick={onSelectService}
              />
            );
          })}
        </div>

        <div className="mt-20 flex flex-col items-center justify-center space-y-6">
          <div className="p-4 bg-white rounded-3xl shadow-2xl flex items-center space-x-6 border border-slate-50">
            <div className="flex -space-x-3">
              {[1,2,3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-slate-200">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Client" />
                </div>
              ))}
            </div>
            <p className="text-sm font-bold text-slate-700">Join <span className="text-brand-green">250+</span> Companies who trust us</p>
            <button className="px-6 py-2 bg-brand-red text-white rounded-xl font-bold text-sm hover:bg-brand-red/90 transition-all">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
