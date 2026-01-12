
import React from 'react';
import { ContentData } from '../types.ts';

interface HeroProps {
  content: ContentData;
  onRefreshAI: () => void;
  isLoading: boolean;
}

export const HeroModern: React.FC<HeroProps> = ({ content, onRefreshAI, isLoading }) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background with abstract shapes */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop" 
          className="w-full h-full object-cover opacity-20"
          alt="Catering background"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-50/90 to-transparent"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-green-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-24 -left-24 w-64 h-64 bg-slate-200/50 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest border border-green-200">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span>Premium Corporate Catering</span>
          </div>

          <h1 className="text-6xl lg:text-7xl font-bold leading-[1.1] text-slate-900 tracking-tight">
            {content.heroTitle.split(' ').map((word, i) => (
              <span key={i} className={word.toLowerCase() === 'companies' || word.toLowerCase() === 'corporates' ? 'text-green-600 italic font-serif' : ''}>
                {word}{' '}
              </span>
            ))}
          </h1>

          <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
            {content.heroSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="w-full sm:w-auto px-8 py-4 bg-green-600 text-white rounded-full font-bold text-lg hover:bg-green-700 transition-all shadow-xl hover:shadow-green-200 shadow-green-100 transform hover:-translate-y-1">
              {content.ctaText}
            </button>
            <button 
              onClick={onRefreshAI}
              disabled={isLoading}
              className="group flex items-center space-x-2 text-slate-600 font-semibold hover:text-green-600 transition-colors"
            >
              <div className={`p-2 rounded-full bg-slate-100 group-hover:bg-green-50 ${isLoading ? 'animate-spin' : ''}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <span>{isLoading ? 'Re-imagining...' : 'AI Twist'}</span>
            </button>
          </div>

          <div className="pt-8 border-t border-slate-200 flex items-center space-x-6">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map(i => (
                <img 
                  key={i} 
                  src={`https://picsum.photos/seed/${i + 10}/100/100`} 
                  className="w-12 h-12 rounded-full border-4 border-white object-cover" 
                  alt="Client" 
                />
              ))}
            </div>
            <div>
              <div className="flex text-yellow-400 mb-0.5">
                {[1, 2, 3, 4, 5].map(i => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-slate-500 font-medium">{content.stats}</p>
            </div>
          </div>
        </div>

        <div className="relative group perspective">
          <div className="relative z-20 rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-700 group-hover:scale-[1.02]">
             <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop" 
                className="w-full aspect-[4/5] object-cover"
                alt="Main Food Display"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </div>
          
          {/* Floating decorative card 1 */}
          <div className="absolute -right-8 top-12 z-30 bg-white p-4 rounded-2xl shadow-xl animate-float max-w-[200px]">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                 <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Certified</p>
                <p className="text-sm font-bold text-slate-900 leading-none">Organic Ingredients</p>
              </div>
            </div>
          </div>

          {/* Floating decorative card 2 */}
          <div className="absolute -left-12 bottom-12 z-30 bg-slate-900 text-white p-6 rounded-2xl shadow-2xl max-w-[240px]">
            <p className="text-3xl font-bold mb-1">98%</p>
            <p className="text-slate-300 text-sm">Client Retention Rate for Corporate Events</p>
            <div className="mt-4 flex h-1 w-full bg-slate-700 rounded-full overflow-hidden">
               <div className="w-[98%] bg-green-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
