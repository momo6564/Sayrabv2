import React from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export const LoginPage: React.FC = () => {
  return (
    <div className="min-h-[90vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 bg-editorial-bg border border-editorial-ink shadow-[24px_24px_0px_0px_#1A1A1A] overflow-hidden">
        
        {/* Editorial Side */}
        <div className="hidden lg:flex flex-col justify-between p-16 bg-editorial-ink text-white relative overflow-hidden h-full min-h-[600px]">
           <div className="flex items-center gap-4 border-b border-white/10 pb-8">
              <span className="text-4xl font-serif italic tracking-tighter">SAYRAB</span>
              <div className="h-6 w-[1px] bg-white/20" />
              <span className="editorial-label text-[9px] text-white/40 tracking-[0.4em]">Internal Access</span>
           </div>
           
           <div className="relative">
              <h2 className="text-6xl font-serif italic tracking-tighter leading-[0.8] mb-10">
                The Creator <br />
                <span className="text-editorial-accent">Nexus.</span>
              </h2>
              <p className="font-serif text-lg text-white/50 leading-relaxed italic max-w-xs">
                "Authentication is the prerequisite for contribution. Enter the nexus of global apparel impact."
              </p>
           </div>

           <div className="pt-8 border-t border-white/10">
              <span className="editorial-label text-white/30 italic">VOL. 24 // CORE</span>
           </div>
        </div>

        {/* Form Side */}
        <div className="p-10 md:p-20 flex flex-col justify-center bg-editorial-bg">
           <div className="mb-16">
              <span className="editorial-label block mb-4 italic">Identification</span>
              <h1 className="text-5xl font-serif text-editorial-ink tracking-tighter italic">Entry Portal</h1>
           </div>

           <div className="space-y-12">
              <div className="space-y-4">
                 <label className="editorial-label text-editorial-ink/30 italic">Corporate Identity</label>
                 <div className="relative border-b border-editorial-ink">
                    <Mail className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-editorial-ink/20" />
                    <input 
                      type="email" 
                      placeholder="NAME@STUDIO.COM" 
                      className="w-full h-14 pl-10 pr-4 bg-transparent outline-none text-[10px] uppercase font-bold tracking-widest placeholder:text-editorial-ink/20"
                    />
                 </div>
              </div>

              <div className="space-y-4">
                 <div className="flex justify-between items-center">
                    <label className="editorial-label text-editorial-ink/30 italic">Security Phrase</label>
                    <button className="text-[9px] font-bold uppercase tracking-widest text-editorial-ink/40 hover:text-editorial-ink transition-colors italic border-b border-editorial-ink/20">Forgotten?</button>
                 </div>
                 <div className="relative border-b border-editorial-ink">
                    <Lock className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-editorial-ink/20" />
                    <input 
                      type="password" 
                      placeholder="••••••••" 
                      className="w-full h-14 pl-10 pr-4 bg-transparent outline-none text-[10px] uppercase font-bold tracking-widest placeholder:text-editorial-ink/20"
                    />
                 </div>
              </div>

              <div className="pt-10 flex flex-col gap-6">
                 <button className="w-full h-20 bg-editorial-ink text-white font-bold uppercase tracking-[0.4em] text-[11px] shadow-xl hover:bg-editorial-accent transition-all flex items-center justify-center gap-4 group">
                    Initialize Session <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                 </button>
                 
                 <div className="text-center">
                    <p className="text-[10px] font-bold text-editorial-ink/30 uppercase tracking-widest">
                       Don't have an authentication? <Link to="/launch" className="text-editorial-ink underline underline-offset-4 ml-1">Initiate Campaign</Link>
                    </p>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};
