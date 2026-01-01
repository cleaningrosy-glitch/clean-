
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 -left-20 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <span className="inline-block px-4 py-1.5 bg-yellow-100 text-yellow-700 rounded-full text-sm font-bold tracking-wider mb-6 uppercase">
              🏠 Serving Yonkers, NY
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-slate-800">
              The Friendliest <br/>
              <span className="text-blue-600">Cleaners</span> in Town
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              We don't just scrub floors; we create happy homes. Reliable, affordable, and local to Yonkers. Let us handle the dust while you enjoy your day!
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a href="#estimate" className="px-10 py-4 bg-blue-600 text-white rounded-full font-bold text-lg shadow-xl hover:bg-blue-700 transition transform hover:-translate-y-1 w-full sm:w-auto text-center">
                Book My Sparkle
              </a>
              <a href="#services" className="px-10 py-4 bg-white text-slate-600 border border-slate-200 rounded-full font-bold text-lg shadow-md hover:bg-slate-50 transition transform hover:-translate-y-1 w-full sm:w-auto text-center">
                View Services
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-6 justify-center md:justify-start">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} className="w-12 h-12 rounded-full border-4 border-white" src={`https://picsum.photos/100/100?random=${i}`} alt="Client" />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex text-yellow-500">
                  {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                </div>
                <p className="font-bold text-slate-700">Trusted by 500+ neighbors</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-[12px] border-white">
              <img src="https://picsum.photos/800/600?home-cleaning" alt="Clean House" className="w-full object-cover h-[400px] md:h-[500px]" />
            </div>
            {/* Floaties */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20 animate-bounce">
              <p className="text-2xl">✨</p>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-blue-50 max-w-[200px]">
              <p className="text-sm font-bold text-slate-800">Next available slot:</p>
              <p className="text-blue-600 font-bold">This Tuesday!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
