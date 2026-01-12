
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  isDark: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isDark }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = scrolled 
    ? "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm py-3 px-6 lg:px-12"
    : `fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6 px-6 lg:px-12 ${isDark ? 'text-white' : 'text-slate-900'}`;

  const linkClass = scrolled 
    ? "text-slate-600 hover:text-brand-green transition-colors font-medium text-sm lg:text-base flex items-center" 
    : `${isDark ? 'text-white/80 hover:text-white' : 'text-slate-600 hover:text-brand-green'} transition-colors font-medium text-sm lg:text-base flex items-center`;

  const dropdownItems = [
    { label: 'Corporate Events', description: 'Bespoke menus for elite business gatherings.' },
    { label: 'Private Dinners', description: 'Intimate culinary experiences at home.' },
    { label: 'Wedding Catering', description: 'Magnificent feasts for your special day.' },
    { label: 'Custom Menus', description: 'Tailored nutrition for unique palates.' },
  ];

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center space-x-2">
          <div className={`w-10 h-10 rounded-full ${scrolled ? 'bg-brand-green' : 'bg-brand-green'} flex items-center justify-center transition-colors shadow-lg shadow-brand-green/20`}>
             <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
               <path d="M12 2C7.58 2 4 5.58 4 10c0 4.42 3.58 8 8 8s8-3.58 8-8c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
             </svg>
          </div>
          <span className={`text-xl lg:text-2xl font-bold tracking-tighter ${scrolled ? 'text-slate-900' : ''}`}>
            houseof<span className="text-brand-red">curry</span>
          </span>
        </div>

        {/* Main Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <a href="#" className={linkClass}>Home</a>
          <a href="#" className={linkClass}>About Us</a>
          
          <div className="relative group">
             <button className={`${linkClass} space-x-1 outline-none`}>
                <span>Services</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
             </button>
             
             <div className="absolute top-full -left-4 pt-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
               <div className="w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden py-3">
                  {dropdownItems.map((item, idx) => (
                    <a 
                      key={idx} 
                      href="#" 
                      className="flex flex-col px-5 py-3 hover:bg-brand-light group/item transition-colors"
                    >
                      <span className="text-slate-900 font-bold text-sm group-hover/item:text-brand-green">{item.label}</span>
                      <span className="text-slate-400 text-xs mt-1 font-medium">{item.description}</span>
                    </a>
                  ))}
                  <div className="mt-2 pt-2 border-t border-slate-50 px-5">
                    <a href="#" className="text-brand-green text-xs font-bold uppercase tracking-widest hover:text-brand-red">View All Services →</a>
                  </div>
               </div>
             </div>
          </div>

          <a href="#" className={linkClass}>Blog</a>
          <a href="#" className={linkClass}>Contact Us</a>
        </div>

        {/* CTA */}
        <div className="flex items-center space-x-4">
          <button className={`px-5 py-2 lg:px-7 lg:py-3 rounded-full font-bold text-sm lg:text-base transition-all shadow-lg hover:shadow-xl active:scale-95 ${
            scrolled 
              ? 'bg-brand-red text-white hover:bg-brand-red/90' 
              : 'bg-white text-slate-900 hover:bg-slate-50'
          }`}>
            Get A Quote
          </button>
        </div>
      </div>
    </nav>
  );
};
