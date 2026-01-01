
import React, { useState, useEffect } from 'react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-yellow-400 p-2 rounded-full shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 22 1-1h3l9-9"/><path d="M3 21v-3l9-9"/><path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9"/><path d="m2.2 2.2 5 5"/><path d="m5 2 2 2"/><path d="m2 5 2 2"/><circle cx="11" cy="11" r="2"/></svg>
            </div>
            <span className="text-2xl font-bold text-blue-600 tracking-tight">Sparkle<span className="text-yellow-500">&</span>Shine</span>
          </div>
          <div className="hidden md:flex gap-8 font-medium text-slate-600">
            <a href="#services" className="hover:text-yellow-500 transition">Services</a>
            <a href="#estimate" className="hover:text-yellow-500 transition">Estimate</a>
            <a href="#about" className="hover:text-yellow-500 transition">Our Story</a>
          </div>
          <a href="#estimate" className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold shadow-lg hover:bg-blue-700 transition transform hover:scale-105">
            Book Now
          </a>
        </div>
      </nav>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-white py-12 border-t border-yellow-100">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-600">Sparkle & Shine Yonkers</h3>
            <p className="text-slate-500 leading-relaxed">
              Proudly serving Yonkers, Hastings-on-Hudson, Scarsdale, and all of lower Westchester County.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <p className="text-slate-500">📞 917-780-8373</p>
            <p className="text-slate-500">✉️ cleaninrosy@gmail.com</p>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-12 pt-6 border-t border-slate-100 text-center text-sm text-slate-400">
          &copy; {new Date().getFullYear()} Sparkle & Shine Yonkers. Made with ✨ in NY.
        </div>
      </footer>
    </div>
  );
};
