
import React from 'react';

export const WhoWeAre: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Large Vertical Image */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?q=80&w=1974&auto=format&fit=crop" 
                alt="Our Professional Chefs" 
                className="w-full h-[700px] object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-24 h-[80%] bg-slate-50 -z-10 rounded-full blur-3xl opacity-50"></div>
          </div>

          {/* Right Side: Content */}
          <div className="lg:col-span-7 space-y-8 lg:pl-8">
            <div className="inline-flex items-center space-x-3 bg-green-50 px-4 py-2 rounded-full border border-green-100">
              <div className="h-[2px] w-8 bg-green-600"></div>
              <span className="text-green-700 font-bold text-xs uppercase tracking-[0.2em]">Who We Are</span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Crafting Culinary Experiences With <br />
              <span className="relative inline-block text-green-600 font-serif italic font-normal">
                Passion
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="#16a34a" strokeWidth="4" fill="transparent" strokeLinecap="round" />
                </svg>
              </span> And Precision.
            </h2>

            <p className="text-slate-500 text-lg leading-relaxed max-w-2xl">
              Coriander is one of the leading Corporate/Industrial catering service providers in NCR. Promoted by Chartered Accountant – Pooja Singhal, purely out of her passion to serve healthy and nutritious meals to people at large, coriander serves more than 12,000 meals per day currently.
            </p>

            <div className="grid md:grid-cols-2 gap-8 pt-4">
              {/* Stats Card */}
              <div className="bg-[#064e3b] text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="flex items-baseline">
                    <span className="text-6xl font-bold">25,000</span>
                    <span className="text-3xl text-green-400 ml-1">+</span>
                  </div>
                  <p className="text-xl font-bold mt-4">Employees</p>
                  <p className="text-green-100/70 text-sm mt-2 leading-relaxed">
                    Coriander is providing Catering services to more than 12,000 employees on daily basis
                  </p>
                </div>
                <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              </div>

              {/* Quotes & Features */}
              <div className="space-y-6">
                <div className="border-l-4 border-green-600 pl-6 py-2">
                  <p className="text-slate-600 italic font-medium leading-relaxed">
                    "We serve in all over Noida & Gurgaon in more than 40 Corporates including Microsoft, Amazon, Paytm, Naukri, Siemens, GE, Wipro and many more."
                  </p>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3 text-slate-700 font-semibold">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                    </div>
                    <span>Fresh, Locally Sourced Ingredients</span>
                  </li>
                  <li className="flex items-center space-x-3 text-slate-700 font-semibold">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                    </div>
                    <span>Customized Menus for Every Occasion</span>
                  </li>
                </ul>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <button className="px-8 py-4 bg-green-600 text-white rounded-2xl font-bold hover:bg-green-700 transition-all shadow-xl shadow-green-100 flex items-center space-x-2 active:scale-95">
                    <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    <span>Call Us</span>
                  </button>
                  <button className="px-8 py-4 border-2 border-slate-200 text-slate-700 rounded-2xl font-bold hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Gallery */}
            <div className="pt-12 grid grid-cols-4 gap-4">
              {[
                "https://images.unsplash.com/photo-1555244162-803834f70033?w=300&auto=format",
                "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=300&auto=format",
                "https://images.unsplash.com/photo-1547573854-74d2a71d0826?w=300&auto=format",
                "https://images.unsplash.com/photo-1555244114-1065e933454b?w=300&auto=format"
              ].map((img, i) => (
                <div key={i} className="rounded-2xl overflow-hidden aspect-[4/3] group cursor-pointer">
                  <img src={img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={`Gallery ${i}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
