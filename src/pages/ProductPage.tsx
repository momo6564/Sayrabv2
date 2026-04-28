import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Heart, Plus, BarChart3, ChevronRight } from 'lucide-react';
import { useParams, Link } from 'react-router';
import { products } from '../data';

export const ProductPage: React.FC = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id) || products[0];
  
  const [selectedSize, setSelectedSize] = React.useState('L');
  const [quantity, setQuantity] = React.useState(1);

  const sizes = ['XS', 'S', 'M', 'L', 'XL', '2XL'];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Product Images */}
        <div className="lg:col-span-7 flex flex-col gap-8">
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             className="aspect-[4/5] border border-editorial-ink relative bg-editorial-muted overflow-hidden"
           >
              <img src={product.image} alt={product.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="absolute top-8 left-8">
                 <span className="px-4 py-2 bg-editorial-bg border border-editorial-ink text-[10px] font-bold uppercase tracking-widest text-editorial-ink">
                    Edition 1.0 // {product.category}
                 </span>
              </div>
           </motion.div>
           <div className="grid grid-cols-2 gap-8">
              <div className="aspect-square border border-editorial-ink bg-editorial-muted" />
              <div className="aspect-square border border-editorial-ink bg-editorial-muted" />
           </div>
        </div>

        {/* Product Info */}
        <div className="lg:col-span-5 flex flex-col py-0 lg:py-10">
           <div className="border-b border-editorial-ink pb-10 mb-10">
              <span className="editorial-label text-editorial-ink/30 mb-2 block">{product.creator}</span>
              <h1 className="text-5xl md:text-7xl font-serif text-editorial-ink tracking-tighter italic mb-6 leading-none">
                {product.name}
              </h1>
              <p className="text-3xl font-serif tracking-tight text-editorial-ink mb-8">${product.price}</p>
              <p className="font-serif text-lg text-editorial-ink/60 leading-relaxed italic border-l-2 border-editorial-ink pl-6 py-2">
                "Each piece represents a commitment to community-driven impact through premium design."
              </p>
           </div>

           <div className="flex flex-col gap-10">
              {/* Campaign Progress */}
              <div className="p-8 border border-editorial-ink bg-editorial-bg shadow-[8px_8px_0px_0px_#1A1A1A]">
                 <div className="flex justify-between items-end mb-4">
                    <div>
                       <p className="editorial-label mb-1">Fundraising Status</p>
                       <p className="text-2xl font-serif italic">{product.progress}% Funded</p>
                    </div>
                    <p className="text-sm font-bold text-editorial-ink/40 uppercase tracking-widest">{product.daysRemaining} Days Left</p>
                 </div>
                 <div className="w-full h-px bg-editorial-ink/10 relative">
                    <div className="absolute top-0 left-0 h-full bg-editorial-ink" style={{ width: `${product.progress}%` }} />
                 </div>
              </div>

              {/* Size Selection */}
              <div className="space-y-4">
                 <div className="flex justify-between items-center">
                    <p className="editorial-label">Select Size</p>
                    <button className="text-[10px] uppercase font-bold tracking-widest underline underline-offset-4 text-editorial-ink/40">Size Guide</button>
                 </div>
                 <div className="flex flex-wrap gap-3">
                    {sizes.map(size => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-14 h-14 border flex items-center justify-center text-xs font-bold transition-all ${
                          selectedSize === size 
                            ? 'bg-editorial-ink text-white border-editorial-ink' 
                            : 'border-editorial-ink/20 text-editorial-ink/60 hover:border-editorial-ink hover:text-editorial-ink'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                 </div>
              </div>

              <div className="flex flex-col gap-4 pt-10">
                 <button className="w-full h-16 bg-editorial-ink text-white text-sm font-bold uppercase tracking-[0.3em] hover:bg-editorial-accent transition-all flex items-center justify-center gap-4">
                    <ShoppingCart className="w-4 h-4" /> Add to Collection
                 </button>
                 <button className="w-full h-16 border border-editorial-ink text-editorial-ink text-sm font-bold uppercase tracking-[0.3em] hover:bg-editorial-muted transition-all flex items-center justify-center gap-4">
                    <Heart className="w-4 h-4" /> Save to Archive
                 </button>
              </div>
           </div>

           {/* Details Accordion */}
           <div className="mt-20 border-t border-editorial-ink space-y-0">
              {[
                { title: 'Composition', content: '100% Organic Heavyweight Cotton, pre-shrunk and treated for editorial longevity.' },
                { title: 'Logistics', content: 'Each piece is part of a limited campaign. Production begins upon successful goal completion.' },
                { title: 'Sustainability', content: 'Manufactured with zero-waste protocols in our London-affiliated studio.' },
              ].map((item, i) => (
                <div key={i} className="border-b border-editorial-ink py-6 group cursor-pointer">
                   <div className="flex items-center justify-between">
                      <span className="editorial-label text-editorial-ink group-hover:text-editorial-accent transition-colors">{item.title}</span>
                      <Plus className="w-4 h-4 text-editorial-ink/40" />
                   </div>
                   <div className="mt-4 h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
                      <p className="text-sm font-serif italic text-editorial-ink/60 leading-relaxed max-w-sm">{item.content}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
};
