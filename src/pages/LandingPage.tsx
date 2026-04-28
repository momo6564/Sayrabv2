import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ArrowRight, TrendingUp, Users, Target } from 'lucide-react';
import { Link } from 'react-router';
import { products } from '../data';

export const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-32 py-12">
      {/* Hero Section */}
      <section id="hero" className="px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 border border-editorial-ink overflow-hidden">
          
          {/* Rail Area */}
          <div className="hidden lg:flex lg:col-span-1 border-r border-editorial-ink flex-col items-center justify-between py-12">
             <div className="w-2 h-2 bg-editorial-ink rounded-full" />
             <div className="writing-mode-vertical-rl rotate-180 text-[10px] uppercase font-bold tracking-[0.4em] text-editorial-ink/40">
                VOL. 01 / ISSUE 12
             </div>
             <div className="w-2 h-2 bg-editorial-ink rounded-full" />
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 p-8 md:p-20 flex flex-col gap-10 bg-editorial-bg"
          >
            <div className="flex flex-col gap-4">
              <span className="editorial-label italic tracking-[0.1em]">Featuring // The Creator Economy</span>
              <h1 className="text-6xl md:text-8xl leading-[0.9] tracking-tighter text-editorial-ink">
                Wear Your <br />
                <span className="italic font-serif">Movement.</span>
              </h1>
            </div>
            
            <p className="font-serif text-xl md:text-2xl text-editorial-ink/70 leading-relaxed max-w-sm">
              Exploring the intersection of premium apparel and community vision.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/launch" className="px-10 py-5 bg-editorial-ink text-white font-bold uppercase tracking-widest text-[11px] hover:bg-editorial-accent transition-all flex items-center gap-3">
                Launch Campaign <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/store" className="px-10 py-5 border border-editorial-ink text-editorial-ink font-bold uppercase tracking-widest text-[11px] hover:bg-editorial-muted transition-all">
                Explore Store
              </Link>
            </div>
          </motion.div>
          
          {/* Image Container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative bg-editorial-muted border-l border-editorial-ink h-[500px] lg:h-auto"
          >
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnQDDtz5PrPvGOf_QcHQ26-jySW8jJ3AIHJY0ioJZpps-xNnYrzY776aozThmpsWxqP__5h94YVnBj9aeTtWKbofWXNZABlTD18ObCspLucKZ1u8d1puISlhjIC7OlkfhODHG8VP_biP8cI4Aht21sGgtGiirjLQYps6OR65UBhqO3wYIC0yHtpiQ16wVgUY64Wg8JOfOZree2N8nJpbEii1Bpxn-JoEAkNaNz8UbR9qv-5FNZW8PPCF3PchiPC2yLA49zvYvGRUhR" 
              alt="Campaign Hero" 
              className="w-full h-full object-cover grayscale transition-all duration-1000 hover:grayscale-0"
            />
            <div className="absolute inset-0 border-[20px] border-editorial-bg pointer-events-none" />
            <div className="absolute bottom-12 left-12 right-12 p-8 border border-white bg-white/20 backdrop-blur-sm text-white">
               <span className="editorial-label text-white/80 block mb-2">Editor's Pick</span>
               <h3 className="text-2xl font-serif">Youth Arts / 82% Funded</h3>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trending Section */}
      <section id="trending" className="px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4 border-b border-editorial-ink pb-8">
          <div>
            <span className="editorial-label">Curated Selection</span>
            <h2 className="text-4xl md:text-6xl tracking-tight text-editorial-ink">Trending Campaigns</h2>
          </div>
          <Link to="/store" className="flex items-center gap-2 text-editorial-ink font-bold uppercase tracking-widest text-[10px] hover:text-editorial-accent transition-all pb-2">
            View All Collections <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col gap-6"
            >
              <div className="relative aspect-[3/4] border border-editorial-ink overflow-hidden bg-editorial-muted">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-0 right-0 p-4 border-l border-b border-editorial-ink bg-editorial-bg text-[10px] font-bold uppercase tracking-widest">
                  {item.daysRemaining} days left
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <span className="editorial-label">{item.creator}</span>
                <Link to={`/product/${item.id}`} className="hover:underline underline-offset-8 transition-all">
                  <h3 className="text-3xl font-serif">{item.name}</h3>
                </Link>
                <div className="flex items-center justify-between mt-2 pt-4 border-t border-editorial-ink/10">
                   <p className="text-2xl font-serif italic">${item.price}</p>
                   <div className="flex items-center gap-4">
                      <span className="text-[10px] font-bold uppercase text-editorial-ink/40">{item.progress}% Funded</span>
                      <div className="w-16 h-[2px] bg-editorial-muted">
                         <div className="h-full bg-editorial-ink transition-all duration-1000" style={{ width: `${item.progress}%` }} />
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How it Works - Editorial Layout */}
      <section className="px-4 md:px-8 py-32 bg-editorial-ink text-white border-y border-editorial-ink">
        <div className="max-w-7xl mx-auto flex flex-col gap-24">
          <div className="max-w-3xl">
            <span className="editorial-label text-white/50 mb-6 block tracking-[0.4em]">The Methodology</span>
            <h2 className="text-5xl md:text-7xl leading-[0.9] tracking-tighter mb-10">
              Fueling Your <br />
              <span className="italic font-serif text-editorial-accent">Movement</span> Since 2024.
            </h2>
            <p className="font-serif text-xl text-white/60 leading-relaxed italic">
              "We provide the tools, you provide the vision. Together, we create a lasting impact through quality and community."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-white/10 pt-16">
            {[
              { id: '01', title: 'Define', desc: 'Choose products and set targets. We handle the logistical complexity.' },
              { id: '02', title: 'Launch', desc: 'Share your story. Community members support your vision through purchase.' },
              { id: '03', title: 'Impact', desc: 'Reach your goal, we fulfill with precision, and funds are disbursed.' },
            ].map(step => (
              <div key={step.id} className="flex flex-col gap-6">
                 <span className="font-serif text-6xl text-editorial-accent/30">{step.id}</span>
                 <h4 className="text-2xl font-bold uppercase tracking-tight">{step.title}</h4>
                 <p className="text-sm text-white/50 leading-relaxed font-sans">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Link to="/launch" className="px-12 py-6 border border-white text-white uppercase text-xs font-bold tracking-[0.3em] hover:bg-white hover:text-editorial-ink transition-all">
              Initiate Your Campaign
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
