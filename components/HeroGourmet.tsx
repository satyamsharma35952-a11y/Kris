
import React from 'react';
import { ContentData } from '../types.ts';

interface HeroProps {
  content: ContentData;
  onRefreshAI: () => void;
  isLoading: boolean;
}

export const HeroGourmet: React.FC<HeroProps> = ({ content, onRefreshAI, isLoading }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1547573854-74d2a71d0826?q=80&w=2070&auto=format&fit=crop" 
          className="w-full h-full object-cover opacity-30"
          alt="Dark gourmet food"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 space-y-12">
        <div className="space-y-4">
          <p className="text-green-500 font-bold uppercase tracking-[0.4em] text-sm italic">Coriander Experience</p>
          <h1 className="text-7xl md:text-8xl font-serif text-white leading-tight italic">
            {content.heroTitle}
          </h1>
          <div className="w-24 h-px bg-green-500 mx-auto"></div>
        </div>

        <p className="text-xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
          {content.heroSubtitle}
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
          <button className="group relative px-10 py-5 bg-transparent text-white border-2 border-green-500 overflow-hidden transition-all duration-300 hover:text-slate-950">
            <span className="relative z-10 font-bold text-lg">{content.ctaText}</span>
            <div className="absolute inset-0 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
          </button>
          
          <button 
            onClick={onRefreshAI}
            disabled={isLoading}
            className="flex items-center space-x-2 text-slate-400 hover:text-green-500 transition-colors uppercase tracking-widest text-xs font-bold"
          >
            <span className={isLoading ? 'animate-spin' : ''}>✨</span>
            <span>{isLoading ? 'Regenerating...' : 'Refresh Vision'}</span>
          </button>
        </div>

        <div className="pt-12 grid grid-cols-3 gap-8">
           <div className="text-center">
              <p className="text-green-500 text-3xl font-serif mb-1">500+</p>
              <p className="text-slate-500 text-xs uppercase tracking-widest">Global Partners</p>
           </div>
           <div className="text-center border-x border-slate-800">
              <p className="text-green-500 text-3xl font-serif mb-1">15k</p>
              <p className="text-slate-500 text-xs uppercase tracking-widest">Events Catered</p>
           </div>
           <div className="text-center">
              <p className="text-green-500 text-3xl font-serif mb-1">32</p>
              <p className="text-slate-500 text-xs uppercase tracking-widest">Awards Won</p>
           </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
         <div className="w-px h-16 bg-gradient-to-b from-green-500 to-transparent"></div>
      </div>
    </section>
  );
};
