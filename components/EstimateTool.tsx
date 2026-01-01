
import React, { useState, useMemo } from 'react';
import { CLEANING_PACKAGES, PRICING_FACTORS, FREQUENCY_DISCOUNTS } from '../constants';
import { BookingDetails } from '../types';
import { Calendar } from './Calendar';

export const EstimateTool: React.FC = () => {
  const [details, setDetails] = useState<BookingDetails>({
    bedrooms: 2,
    bathrooms: 1,
    squareFeet: 1000,
    packageId: 'basic',
    date: null,
    frequency: 'once',
  });

  const [submitted, setSubmitted] = useState(false);

  const totalPrice = useMemo(() => {
    const pkg = CLEANING_PACKAGES.find(p => p.id === details.packageId);
    const base = pkg?.price || 100;
    const extras = (details.bedrooms * PRICING_FACTORS.bedroom) + (details.bathrooms * PRICING_FACTORS.bathroom);
    const subtotal = base + extras;
    const discount = subtotal * (FREQUENCY_DISCOUNTS[details.frequency] || 0);
    return subtotal - discount;
  }, [details]);

  const handleInputChange = (field: keyof BookingDetails, value: any) => {
    setDetails(prev => ({ ...prev, [field]: value }));
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!details.date) {
      alert("Please select a preferred date for your cleaning! ✨");
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div id="estimate" className="py-20 bg-blue-50">
        <div className="bg-white rounded-[50px] p-12 shadow-2xl text-center max-w-2xl mx-auto border-4 border-yellow-200 animate-in fade-in zoom-in duration-500">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          </div>
          <h3 className="text-3xl font-bold text-slate-800 mb-4">It's a Date! 🗓️</h3>
          <p className="text-slate-600 mb-2">
            We've received your request for <strong>{details.date?.toLocaleDateString()}</strong>.
          </p>
          <p className="text-slate-600 mb-8">
            A {CLEANING_PACKAGES.find(p => p.id === details.packageId)?.name} will be amazing. One of our cleaning specialists will call you within 2 hours to confirm the exact arrival window!
          </p>
          <button 
            onClick={() => setSubmitted(false)} 
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition"
          >
            Back to Estimator
          </button>
        </div>
      </div>
    );
  }

  return (
    <div id="estimate" className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get Your Instant Quote</h2>
          <p className="text-slate-600 max-w-xl mx-auto">No hidden fees, no complicated math. Just choose what you need and see your price immediately.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Controls */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-blue-100">
            <form onSubmit={handleBooking} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">Service Type</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {CLEANING_PACKAGES.map((pkg) => (
                    <button
                      key={pkg.id}
                      type="button"
                      onClick={() => handleInputChange('packageId', pkg.id)}
                      className={`p-4 rounded-2xl border-2 transition text-sm font-bold ${details.packageId === pkg.id ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-slate-100 bg-slate-50 text-slate-500 hover:border-blue-200'}`}
                    >
                      {pkg.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Bedrooms</label>
                    <div className="flex items-center gap-4">
                      <button type="button" onClick={() => handleInputChange('bedrooms', Math.max(0, details.bedrooms - 1))} className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-yellow-200 transition">-</button>
                      <span className="text-lg font-bold w-4 text-center">{details.bedrooms}</span>
                      <button type="button" onClick={() => handleInputChange('bedrooms', details.bedrooms + 1)} className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-yellow-200 transition">+</button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Bathrooms</label>
                    <div className="flex items-center gap-4">
                      <button type="button" onClick={() => handleInputChange('bathrooms', Math.max(0, details.bathrooms - 1))} className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-yellow-200 transition">-</button>
                      <span className="text-lg font-bold w-4 text-center">{details.bathrooms}</span>
                      <button type="button" onClick={() => handleInputChange('bathrooms', details.bathrooms + 1)} className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-yellow-200 transition">+</button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">Frequency</label>
                    <select 
                      value={details.frequency}
                      onChange={(e) => handleInputChange('frequency', e.target.value)}
                      className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-medium"
                    >
                      <option value="once">One-time (No discount)</option>
                      <option value="weekly">Weekly (20% Off!)</option>
                      <option value="biweekly">Every 2 Weeks (15% Off!)</option>
                      <option value="monthly">Every 4 Weeks (10% Off!)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">Preferred Date</label>
                  <Calendar 
                    selectedDate={details.date} 
                    onDateSelect={(date) => handleInputChange('date', date)} 
                  />
                </div>
              </div>

              <button type="submit" className="w-full bg-yellow-400 text-slate-900 py-4 rounded-2xl font-bold text-lg shadow-lg hover:bg-yellow-500 transition-all transform hover:scale-[1.02] active:scale-95">
                Book My Cleaning
              </button>
            </form>
          </div>

          {/* Pricing Summary */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-yellow-200 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </span>
                Estimate Summary
              </h3>
              <ul className="space-y-4 text-slate-600">
                <li className="flex justify-between pb-4 border-b border-slate-50">
                  <span>Service Type</span>
                  <span className="font-bold text-slate-800">{CLEANING_PACKAGES.find(p => p.id === details.packageId)?.name}</span>
                </li>
                <li className="flex justify-between pb-4 border-b border-slate-50">
                  <span>Layout</span>
                  <span className="font-bold text-slate-800">{details.bedrooms} Bed, {details.bathrooms} Bath</span>
                </li>
                <li className="flex justify-between pb-4 border-b border-slate-50">
                  <span>Preferred Date</span>
                  <span className={`font-bold ${details.date ? 'text-blue-600' : 'text-slate-300'}`}>
                    {details.date ? details.date.toLocaleDateString() : 'Not selected'}
                  </span>
                </li>
                <li className="flex justify-between pb-4 border-b border-slate-50">
                  <span>Frequency</span>
                  <span className="font-bold text-slate-800 capitalize">{details.frequency}</span>
                </li>
                {details.frequency !== 'once' && (
                  <li className="flex justify-between text-green-600 font-bold italic">
                    <span>Recurring Discount</span>
                    <span>-{(FREQUENCY_DISCOUNTS[details.frequency] * 100).toFixed(0)}%</span>
                  </li>
                )}
              </ul>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-100">
              <div className="flex justify-between items-end mb-4">
                <span className="text-slate-500 font-medium">Total Price Estimate</span>
                <span className="text-5xl font-bold text-blue-600">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-slate-400 text-center italic mt-4">
                *Final price may vary based on actual home condition. Taxes included.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
