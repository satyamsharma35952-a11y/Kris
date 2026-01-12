
import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header.tsx';
import { HeroModern } from './components/HeroModern.tsx';
import { HeroGourmet } from './components/HeroGourmet.tsx';
import { HeroOrganic } from './components/HeroOrganic.tsx';
import { WhoWeAre } from './components/WhoWeAre.tsx';
import { WhatWeDo } from './components/WhatWeDo.tsx';
import { DesignStyle, ContentData } from './types.ts';
import { generateCreativeCopy } from './services/geminiService.ts';

const DEFAULT_CONTENT: ContentData = {
  heroTitle: "Trusted By Top Corporate Companies",
  heroSubtitle: "Experience the art of culinary excellence with our bespoke corporate catering services tailored for elite businesses.",
  stats: "478+ Corporate Clients Served",
  ctaText: "Explore Our Services"
};

const App: React.FC = () => {
  const [style, setStyle] = useState<DesignStyle>(DesignStyle.MODERN_CORPORATE);
  const [content, setContent] = useState<ContentData>(DEFAULT_CONTENT);
  const [loading, setLoading] = useState(false);

  const refreshContent = useCallback(async () => {
    setLoading(true);
    const newContent = await generateCreativeCopy("premium corporate");
    if (newContent) {
      setContent(newContent);
    }
    setLoading(false);
  }, []);

  // Sticky controls for switching styles
  const StyleSwitcher = () => (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] bg-white/80 backdrop-blur-xl border border-white p-2 rounded-full shadow-2xl flex items-center space-x-2">
      <button 
        onClick={() => setStyle(DesignStyle.MODERN_CORPORATE)}
        className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${style === DesignStyle.MODERN_CORPORATE ? 'bg-green-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
      >
        Modern
      </button>
      <button 
        onClick={() => setStyle(DesignStyle.GOURMET_DARK)}
        className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${style === DesignStyle.GOURMET_DARK ? 'bg-green-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
      >
        Gourmet
      </button>
      <button 
        onClick={() => setStyle(DesignStyle.FRESH_ORGANIC)}
        className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${style === DesignStyle.FRESH_ORGANIC ? 'bg-green-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
      >
        Organic
      </button>
    </div>
  );

  const renderHero = () => {
    switch (style) {
      case DesignStyle.GOURMET_DARK:
        return <HeroGourmet content={content} onRefreshAI={refreshContent} isLoading={loading} />;
      case DesignStyle.FRESH_ORGANIC:
        return <HeroOrganic content={content} onRefreshAI={refreshContent} isLoading={loading} />;
      case DesignStyle.MODERN_CORPORATE:
      default:
        return <HeroModern content={content} onRefreshAI={refreshContent} isLoading={loading} />;
    }
  };

  return (
    <div className="relative min-h-screen">
      <Header isDark={style === DesignStyle.GOURMET_DARK} />
      
      <main>
        {renderHero()}
        <WhoWeAre />
        <WhatWeDo />
      </main>

      <StyleSwitcher />

      {/* Floating Chat Button */}
      <div className="fixed bottom-8 right-8 z-[100] group">
         <div className="absolute bottom-full right-0 mb-4 bg-white px-4 py-2 rounded-xl shadow-xl text-sm font-bold text-slate-800 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
           Need help? Chat with us!
         </div>
         <button className="w-14 h-14 bg-green-600 rounded-full shadow-2xl flex items-center justify-center hover:bg-green-700 transition-all active:scale-90 animate-bounce">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
         </button>
      </div>

      {/* Variation Indicator */}
      <div className="fixed top-24 right-8 z-40 hidden xl:block pointer-events-none">
        <p className="text-[10rem] font-black text-slate-100/10 leading-none select-none">
          {style === DesignStyle.MODERN_CORPORATE ? '01' : style === DesignStyle.GOURMET_DARK ? '02' : '03'}
        </p>
      </div>
    </div>
  );
};

export default App;
