
import React from 'react';
import { ContentData } from '../types.ts';

interface HeroProps {
  content: ContentData;
  onRefreshAI: () => void;
  isLoading: boolean;
}

export const HeroModern: React.FC<HeroProps> = ({ content, onRefreshAI, isLoading }) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-white/80 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop" 
          className="w-full h-full object-cover scale-110 animate-[ken-burns_20s_ease-in-out_infinite_alternate]"
          alt="Catering background"
        />
        <style>{`
          @keyframes ken-burns {
            from { transform: scale(1); }
            to { transform: scale(1.15); }
          }
          .fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
            opacity: 0;
            transform: translateY(20px);
          }
          @keyframes fadeInUp {
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-20 grid lg:grid-cols-2 gap-16 items-center">
        <div className="max-w-2xl">
          <div className="fade-in-up [animation-delay:100ms] inline-flex items-center space-x-2 bg-brand-green/10 text-brand-green px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-brand-green/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
            <span>Est. 2014 • House of Curry</span>
          </div>

          <h1 className="fade-in-up [animation-delay:300ms] text-6xl lg:text-8xl font-bold leading-[1] text-slate-900 tracking-tight mb-8">
            {content.heroTitle.split(' ').map((word, i) => (
              <span key={i} className={i === 2 || i === 3 ? 'text-brand-green font-serif italic font-normal' : ''}>
                {word}{' '}
              </span>
            ))}
          </h1>

          <p className="fade-in-up [animation-delay:500ms] text-xl text-slate-600 leading-relaxed mb-12 max-w-lg">
            {content.heroSubtitle}
          </p>

          <div className="fade-in-up [animation-delay:700ms] flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="relative overflow-hidden group w-full sm:w-auto px-10 py-5 bg-brand-red text-white rounded-2xl font-bold text-lg hover:bg-brand-red/90 transition-all shadow-2xl shadow-brand-red/20">
              <span className="relative z-10">{content.ctaText}</span>
            </button>
            
            <button 
              onClick={onRefreshAI}
              disabled={isLoading}
              className="group flex items-center space-x-3 px-6 py-4 rounded-2xl bg-white border border-slate-200 text-slate-600 font-bold hover:border-brand-green/30 hover:text-brand-green transition-all shadow-sm"
            >
              <div className={`p-1.5 rounded-lg bg-slate-50 group-hover:bg-brand-green/10 transition-colors ${isLoading ? 'animate-spin' : ''}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <span>{isLoading ? 'Reimagining...' : 'AI Perspective'}</span>
            </button>
          </div>

          <div className="fade-in-up [animation-delay:900ms] mt-16 pt-10 border-t border-slate-200 flex flex-wrap items-center gap-8">
            <div>
              <p className="text-3xl font-bold text-slate-900">4.9/5</p>
              <div className="flex text-brand-red mt-1">
                {[1, 2, 3, 4, 5].map(i => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
            </div>
            <div className="h-10 w-px bg-slate-200"></div>
            <div>
              <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-[140px]">
                {content.stats}
              </p>
            </div>
          </div>
        </div>

        <div className="relative order-first lg:order-last mb-12 lg:mb-0">
          <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] border-[12px] border-white">
             <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop" 
                className="w-full aspect-[4/5] object-cover"
                alt="Main Food Display"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent"></div>
          </div>

          <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-2xl max-w-[260px] animate-float">
            <div className="flex items-center space-x-4 mb-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-green flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <p className="text-sm font-bold text-slate-800 uppercase tracking-tight">Rapid Response</p>
            </div>
            <p className="text-xs text-slate-500 font-medium">Delivering gourmet excellence even on tight schedules.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
