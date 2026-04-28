import React from 'react';
import { motion } from 'motion/react';
import { Search, Filter, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { Link } from 'react-router';
import { products } from '../data';

export const StorePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState('All');
  const categories = ['All', 'T-shirts', 'Outerwear', 'Accessories', 'Headwear'];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      {/* Search & Filter Header */}
      <div className="flex flex-col gap-16 mb-20">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 py-10 border-y border-editorial-ink">
          <div>
            <span className="editorial-label block mb-4">Marketplace</span>
            <h1 className="text-6xl md:text-8xl font-serif text-editorial-ink tracking-tighter italic">The Collection</h1>
          </div>
          <div className="flex flex-col md:items-end gap-6 w-full md:w-auto">
             <div className="flex items-center border-b border-editorial-ink pb-2 w-full md:w-80">
                <input 
                  type="text" 
                  placeholder="SEARCH.." 
                  className="bg-transparent border-none outline-none text-[10px] uppercase font-bold tracking-widest w-full"
                />
                <Search className="w-4 h-4 text-editorial-ink" />
             </div>
             <p className="text-[10px] font-bold text-editorial-ink/40 uppercase tracking-[0.2em]">152 active movements found</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6">
           {categories.map(cat => (
             <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 text-[10px] font-bold uppercase tracking-widest transition-all ${
                activeCategory === cat 
                  ? 'bg-editorial-ink text-white' 
                  : 'border border-editorial-ink/20 text-editorial-ink/60 hover:border-editorial-ink'
              }`}
             >
               {cat}
             </button>
           ))}
           <div className="ml-auto hidden md:flex items-center gap-4 editorial-label">
              <span className="text-editorial-ink/30 italic">Sort:</span>
              <span className="text-editorial-ink border-b border-editorial-ink cursor-pointer">Trending</span>
           </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-20">
        {products.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: idx * 0.05 }}
            className="group flex flex-col gap-6"
          >
            <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] border border-editorial-ink overflow-hidden bg-editorial-muted">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
              
              <div className="absolute top-4 left-4">
                 <span className="px-3 py-1 bg-editorial-bg border border-editorial-ink text-[8px] font-bold uppercase tracking-widest text-editorial-ink">
                    {product.category}
                 </span>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 bg-editorial-bg/90 backdrop-blur translate-y-full group-hover:translate-y-0 transition-transform duration-500 border-t border-editorial-ink">
                 <button className="w-full py-3 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-editorial-ink hover:text-white transition-all">
                    View Details
                 </button>
              </div>
            </Link>
            
            <div className="flex flex-col gap-2">
              <span className="editorial-label text-editorial-ink/30">{product.creator}</span>
              <Link to={`/product/${product.id}`} className="hover:underline underline-offset-4 decoration-1">
                <h3 className="text-2xl font-serif text-editorial-ink mb-1">{product.name}</h3>
              </Link>
              <div className="flex items-center justify-between mt-4">
                 <p className="text-2xl font-serif tracking-tight">${product.price}</p>
                 <div className="flex items-center gap-4">
                    <span className="text-[10px] font-bold uppercase text-editorial-ink/40 tracking-widest">{product.progress}%</span>
                    <div className="w-12 h-[1px] bg-editorial-ink/10">
                       <div className="h-full bg-editorial-ink" style={{ width: `${product.progress}%` }} />
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination / Load More */}
      <div className="mt-40 flex flex-col items-center gap-8 border-t border-editorial-ink pt-20">
         <p className="editorial-label italic text-editorial-ink/30">Showing 16 of 152</p>
         <button className="px-12 py-4 border border-editorial-ink text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-editorial-ink hover:text-white transition-all">
            Browse More Editions
         </button>
      </div>
    </div>
  );
};
