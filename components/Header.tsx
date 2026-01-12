
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
    ? "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm py-3 px-6 lg:px-12"
    : `fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6 px-6 lg:px-12 ${isDark ? 'text-white' : 'text-slate-900'}`;

  const linkClass = scrolled 
    ? "text-slate-600 hover:text-green-600 transition-colors font-medium" 
    : `${isDark ? 'text-white/80 hover:text-white' : 'text-slate-600 hover:text-green-600'} transition-colors font-medium`;

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className={`w-8 h-8 rounded-full ${scrolled ? 'bg-green-600' : 'bg-green-500'} flex items-center justify-center`}>
            <span className="text-white font-bold text-xs">C</span>
          </div>
          <span className={`text-2xl font-bold tracking-tighter ${scrolled ? 'text-slate-900' : ''}`}>
            coriander<span className="text-green-500">.</span>
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-10">
          <a href="#" className={linkClass}>Home</a>
          <a href="#" className={linkClass}>About Us</a>
          <div className="group relative">
             <a href="#" className={linkClass}>Services +</a>
          </div>
          <a href="#" className={linkClass}>Blog</a>
          <a href="#" className={linkClass}>Contact Us</a>
        </div>

        <div className="flex items-center space-x-4">
          <button className={`px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl active:scale-95 ${
            scrolled 
              ? 'bg-green-600 text-white hover:bg-green-700' 
              : 'bg-white text-slate-900 hover:bg-slate-100'
          }`}>
            Get A Quote
          </button>
        </div>
      </div>
    </nav>
  );
};
