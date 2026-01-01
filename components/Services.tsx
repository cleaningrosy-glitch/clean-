
import React from 'react';
import { CLEANING_PACKAGES } from '../constants';

export const Services: React.FC = () => {
  return (
    <div id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">Our Magic Touch</h2>
          <p className="text-slate-500">Whether you need a quick spruce-up or a deep transformation, we've got the perfect package for your home.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CLEANING_PACKAGES.map((pkg, idx) => (
            <div key={pkg.id} className={`p-8 rounded-[40px] border-2 transition hover:shadow-2xl flex flex-col ${idx === 1 ? 'border-blue-400 bg-blue-50 scale-105 relative shadow-xl' : 'border-yellow-100 bg-white'}`}>
              {idx === 1 && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Most Popular</span>
              )}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-slate-500 text-sm min-h-[40px]">{pkg.description}</p>
              </div>
              <div className="mb-8">
                <span className="text-4xl font-bold">${pkg.price}</span>
                <span className="text-slate-400 text-sm ml-1">starting at</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                    <svg className={`w-5 h-5 flex-shrink-0 ${idx === 1 ? 'text-blue-500' : 'text-yellow-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#estimate" className={`w-full py-4 rounded-2xl font-bold text-center transition ${idx === 1 ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-yellow-400 text-slate-900 hover:bg-yellow-500'}`}>
                Select Package
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
