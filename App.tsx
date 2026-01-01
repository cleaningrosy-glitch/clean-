
import React from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { EstimateTool } from './components/EstimateTool';
import { Chatbot } from './components/Chatbot';

const App: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <div className="bg-white">
        <div className="container mx-auto px-6 py-12 flex justify-center gap-12 flex-wrap md:flex-nowrap items-center grayscale opacity-50">
          {/* Logo cloud - placeholder social proof */}
          <span className="font-bold text-xl">Local 🏡 Best</span>
          <span className="font-bold text-xl">Westchester News</span>
          <span className="font-bold text-xl">Yonkers Proud</span>
          <span className="font-bold text-xl">Clean Home Certified</span>
        </div>
      </div>
      <Services />
      
      {/* Testimonial Section */}
      <section className="py-24 bg-yellow-400">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 text-slate-900">What Your Neighbors Are Saying</h2>
            <div className="bg-white p-12 rounded-[50px] shadow-2xl relative">
              <p className="text-2xl italic text-slate-700 mb-8 leading-relaxed">
                "Sparkle & Shine changed our life! With three kids and a busy schedule in Yonkers, finding a reliable cleaning service was hard. Bubbles (the chat assistant) was so cute, and the actual cleaning was impeccable. Coming home to a fresh-smelling house is the best part of my week!"
              </p>
              <div className="flex flex-col items-center">
                <img src="https://picsum.photos/80/80?woman" className="w-16 h-16 rounded-full mb-4 border-4 border-yellow-200" alt="Sarah J." />
                <p className="font-bold text-slate-800 text-lg">Sarah J.</p>
                <p className="text-slate-500">Ludlow Park, Yonkers</p>
              </div>
              <div className="absolute -top-10 -left-10 text-9xl text-yellow-100 font-serif leading-none opacity-50 select-none">“</div>
            </div>
          </div>
        </div>
      </section>

      <EstimateTool />

      {/* About Section */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="w-full aspect-square bg-blue-100 rounded-[60px] transform rotate-3 absolute top-0 left-0"></div>
                <img 
                  src="https://picsum.photos/600/600?happy-cleaner" 
                  alt="Our Founder" 
                  className="w-full aspect-square object-cover rounded-[60px] relative z-10 shadow-xl transform -rotate-3 transition hover:rotate-0 duration-500" 
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-8">We're Just Around the Corner</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Sparkle & Shine was started by Maria in 2018 with one bucket, a mop, and a dream to make Yonkers homes shine. We're not a big corporate franchise—we're your neighbors.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We hire locally, use eco-friendly products that are safe for your pets and kids, and treat every home like it was our own grandmother's. Our mission is simple: To bring a little more sparkle to your day.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-3xl font-bold text-blue-600 mb-1">500+</p>
                  <p className="text-slate-500">Homes Cleaned</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600 mb-1">100%</p>
                  <p className="text-slate-500">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Chatbot />
    </Layout>
  );
};

export default App;
