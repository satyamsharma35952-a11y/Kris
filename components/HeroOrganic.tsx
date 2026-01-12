
import React from 'react';
import { ContentData } from '../types.ts';

interface HeroProps {
  content: ContentData;
  onRefreshAI: () => void;
  isLoading: boolean;
}

export const HeroOrganic: React.FC<HeroProps> = ({ content, onRefreshAI, isLoading }) => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#F9FBF9] pt-20">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="relative z-10 grid grid-cols-2 gap-4">
             <div className="space-y-4 pt-12">
               <img src="https://images.unsplash.com/photo-1555244162-803834f70033?w=500&auto=format" className="rounded-[40px] shadow-lg grayscale-[20%] hover:grayscale-0 transition-all duration-500" alt="Food 1"/>
               <img src="https://images.unsplash.com/photo-1547573854-74d2a71d0826?w=500&auto=format" className="rounded-[40px] shadow-lg" alt="Food 2"/>
             </div>
             <div className="space-y-4">
               <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&auto=format" className="rounded-[40px] shadow-lg" alt="Food 3"/>
               <img src="https://images.unsplash.com/photo-1555244114-1065e933454b?w=500&auto=format" className="rounded-[40px] shadow-lg grayscale-[20%] hover:grayscale-0 transition-all duration-500" alt="Food 4"/>
             </div>
          </div>
          {/* Decorative Leaf Element (Conceptual) */}
          <div className="absolute -top-10 -left-10 w-40 h-40 opacity-10 pointer-events-none">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#2D5A27" d="M44.7,-76.4C58.2,-69.2,69.7,-57.4,78.3,-44.1C86.8,-30.8,92.5,-15.4,91.2,-0.7C89.9,14,81.6,28,72.1,40.1C62.6,52.2,51.8,62.3,39.4,69.5C26.9,76.7,13.5,80.9,-0.6,81.9C-14.7,83,-29.4,80.8,-42.9,74.2C-56.3,67.6,-68.5,56.5,-77.1,43.2C-85.7,29.9,-90.7,15,-91.1,-0.2C-91.5,-15.5,-87.3,-30.9,-78.9,-44.5C-70.5,-58.1,-57.8,-69.8,-43.8,-76.8C-29.8,-83.8,-14.9,-86.1,0.2,-86.5C15.3,-86.9,30.5,-85.4,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
          </div>
        </div>

        <div className="space-y-8 order-1 lg:order-2">
          <div className="flex items-center space-x-3">
             <div className="h-[2px] w-12 bg-green-700"></div>
             <span className="text-green-800 font-bold tracking-widest text-sm uppercase">Earth-to-Table Experience</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-serif text-slate-800 leading-tight">
            {content.heroTitle}
          </h1>

          <p className="text-lg text-slate-600 font-medium max-w-lg leading-relaxed">
            {content.heroSubtitle}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4">
             <button className="px-10 py-4 bg-green-800 text-white rounded-xl font-bold shadow-lg hover:shadow-green-100 hover:bg-green-900 transition-all flex items-center justify-center space-x-2">
                <span>Our Custom Menu</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
             </button>
             <button 
                onClick={onRefreshAI}
                className="px-10 py-4 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-all"
             >
                {isLoading ? 'AI Thinking...' : 'New Idea'}
             </button>
          </div>

          <div className="bg-white/50 border border-green-50 p-6 rounded-3xl flex items-center space-x-6 backdrop-blur-sm shadow-sm max-w-sm">
             <div className="p-3 bg-green-100 rounded-2xl">
               <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
             </div>
             <div>
               <p className="font-bold text-slate-800">100% Sustainable</p>
               <p className="text-sm text-slate-500">Every bite is sourced with love and care for our planet.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
