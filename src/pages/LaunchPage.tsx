import React from 'react';
import { motion } from 'motion/react';
import { 
  Plus, 
  Palette, 
  Type, 
  Image as ImageIcon, 
  Upload, 
  Layout, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles,
  Layers,
  MousePointer2,
  ArrowRight
} from 'lucide-react';

export const LaunchPage: React.FC = () => {
  const [step, setStep] = React.useState(1);
  const [selectedProduct, setSelectedProduct] = React.useState<string | null>(null);

  const productOptions = [
    { id: 'tee', name: 'Premium Tee', price: '12.50' },
    { id: 'hoodie', name: 'Legacy Hoodie', price: '21.00' },
    { id: 'tote', name: 'Canvas Tote', price: '8.20' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12 mb-20 border-b border-editorial-ink pb-12">
        <div className="flex flex-col gap-4">
          <span className="editorial-label block mb-2 italic">Phase {step} // Selection</span>
          <h1 className="text-6xl md:text-8xl font-serif text-editorial-ink tracking-tighter italic leading-none">The Creation Studio</h1>
        </div>
        <div className="flex gap-4">
          {[1, 2, 3].map(i => (
            <div key={i} className={`w-16 h-1 transition-all duration-500 ${i <= step ? 'bg-editorial-ink' : 'bg-editorial-ink/10'}`} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        
        {/* Design Canvas Area */}
        <div className="lg:col-span-8 flex flex-col gap-12">
           <div className="bg-editorial-muted border border-editorial-ink aspect-square lg:aspect-[16/10] relative overflow-hidden shadow-[16px_16px_0px_0px_#1A1A1A]">
              {/* Toolbar */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-4 p-3 bg-editorial-bg border border-editorial-ink z-20">
                 <button className="p-3 hover:bg-editorial-muted text-editorial-ink"><MousePointer2 className="w-5 h-5" /></button>
                 <div className="w-[1px] h-6 bg-editorial-ink/10" />
                 <button className="p-3 hover:bg-editorial-muted"><Type className="w-5 h-5" /></button>
                 <button className="p-3 hover:bg-editorial-muted"><Palette className="w-5 h-5" /></button>
                 <button className="p-3 hover:bg-editorial-muted"><Layers className="w-5 h-5" /></button>
                 <div className="w-[1px] h-6 bg-editorial-ink/10" />
                 <button className="px-6 py-3 bg-editorial-ink text-white font-bold uppercase tracking-widest text-[9px] flex items-center gap-3 transition-all hover:bg-editorial-accent">
                    <Sparkles className="w-4 h-4" /> AI Generator
                 </button>
              </div>

              {/* Canvas Content */}
              <div className="absolute inset-0 flex items-center justify-center p-20">
                 <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="relative w-full h-full flex items-center justify-center"
                 >
                    <img 
                       src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl_frp3kt1m2w0EpPaur7diGWllEdztbl9P6o8EQT9PTHAh9qrUuPS8EyfvqL6wm4Ol3ye2nQPv3aGNUYF-xpSpCVJ0vrJWy7PiY_cMdSuKue9_uCGtg9gk4wVP3QTCvQ0A_2zOWxmkCmILQH63N_VWRDXox3xWMUoQroH5Em0AmwD6tHW6bI2K9aTvEFC_OE6DxzByUtsROuGeNjimIWSzXG1slD9xcrhKGMNHxcNl4k9dBFaV-rlOBRF9-d77flEpXJOZXPu9Lhe" 
                       alt="Mockup"
                       className="max-w-[70%] h-auto grayscale opacity-80"
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                       <div className="w-48 h-48 border border-editorial-ink/20 flex flex-col items-center justify-center bg-editorial-bg/50 backdrop-blur-sm">
                          <p className="text-[10px] font-bold text-editorial-ink/20 uppercase tracking-[0.4em]">Grid Align // Center</p>
                       </div>
                    </div>
                 </motion.div>
              </div>

              {/* View Switcher */}
              <div className="absolute bottom-8 left-8 flex gap-4">
                 <div className="w-16 h-16 border border-editorial-ink bg-editorial-bg p-2 grayscale">
                    <div className="w-full h-full bg-editorial-muted" />
                 </div>
                 <div className="w-16 h-16 border border-editorial-ink bg-editorial-bg p-2 opacity-30">
                    <div className="w-full h-full bg-editorial-muted" />
                 </div>
              </div>
           </div>

           <div className="flex flex-col gap-6">
              <span className="editorial-label text-editorial-ink/30 italic">Material Specs</span>
              <p className="font-serif text-lg text-editorial-ink/60 leading-relaxed italic max-w-2xl">
                The Heritage Collection uses a singular-source organic weave, specifically calibrated for editorial-grade ink absorption and structured silhouette maintenance.
              </p>
           </div>
        </div>

        {/* Sidebar Configuration */}
        <div className="lg:col-span-4 flex flex-col gap-12">
           
           {/* Section 1: Product Selection */}
           <div className="flex flex-col gap-6">
              <h3 className="editorial-label flex items-center gap-4">
                 <Layout className="w-4 h-4 text-editorial-ink/30" /> Primary Canvas
              </h3>
              <div className="flex flex-col gap-4">
                 {productOptions.map(p => (
                   <button 
                    key={p.id}
                    onClick={() => setSelectedProduct(p.id)}
                    className={`flex items-center justify-between p-6 border transition-all ${
                      selectedProduct === p.id 
                        ? 'bg-editorial-ink text-white border-editorial-ink shadow-[4px_4px_0px_0px_#CAB49B]' 
                        : 'border-editorial-ink/20 hover:border-editorial-ink'
                    }`}
                   >
                     <div className="flex items-center gap-4 text-left">
                        <div className={`text-[10px] font-bold uppercase tracking-widest ${selectedProduct === p.id ? 'text-white' : 'text-editorial-ink/40'}`}>
                           {p.name}
                        </div>
                     </div>
                     <span className={`text-xl font-serif italic ${selectedProduct === p.id ? 'text-white' : 'text-editorial-ink'}`}>${p.price}</span>
                   </button>
                 ))}
                 <button className="flex items-center justify-center gap-4 p-6 border border-dashed border-editorial-ink/20 text-editorial-ink/30 text-[10px] font-bold uppercase tracking-widest hover:border-editorial-ink hover:text-editorial-ink transition-all">
                    <Plus className="w-4 h-4" /> Add to Batch
                 </button>
              </div>
           </div>

           {/* Section 2: Colors */}
           <div className="flex flex-col gap-6">
              <h3 className="editorial-label flex items-center gap-4">
                 <Palette className="w-4 h-4 text-editorial-ink/30" /> Color Study
              </h3>
              <div className="flex flex-wrap gap-4">
                 {['#1A1A1A', '#F8F7F2', '#CAB49B', '#444444', '#777777', '#AAAAAA'].map(color => (
                    <button 
                      key={color}
                      className="w-12 h-12 border border-editorial-ink p-1 hover:scale-110 transition-transform"
                      style={{ backgroundColor: color === '#F8F7F2' ? '#F8F7F2' : 'transparent' }}
                    >
                       <div className="w-full h-full" style={{ backgroundColor: color }} />
                    </button>
                 ))}
              </div>
           </div>

           {/* Section 3: Upload Assets */}
           <div className="flex flex-col gap-6">
              <h3 className="editorial-label flex items-center gap-4">
                 <Upload className="w-4 h-4 text-editorial-ink/30" /> Visual Assets
              </h3>
              <div className="p-12 border border-editorial-ink bg-editorial-bg flex flex-col items-center justify-center text-center gap-4 group cursor-pointer hover:bg-editorial-muted transition-all">
                 <Upload className="w-8 h-8 text-editorial-ink/30 group-hover:text-editorial-accent transition-colors" />
                 <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-editorial-ink">Import Graphic</p>
                    <p className="text-[9px] text-editorial-ink/30 uppercase font-bold tracking-wider mt-2">Vector / AI / Scalar</p>
                 </div>
              </div>
           </div>

           <div className="mt-12">
              <button 
                onClick={() => setStep(2)}
                className="w-full h-20 bg-editorial-ink text-white font-bold uppercase tracking-[0.4em] text-[11px] flex items-center justify-center gap-4 hover:bg-editorial-accent transition-all group"
              >
                Logistics Phase <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-all" />
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};
