import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, ArrowLeft, Trash2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { products } from '../data';

export const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = React.useState([
    { ...products[0], quantity: 1, size: 'L' },
    { ...products[1], quantity: 1, size: 'M' },
  ]);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 12.00;
  const total = subtotal + shipping;

  const removeItem = (id: number, size: string) => {
    setCartItems(cartItems.filter(item => !(item.id === id && item.size === size)));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
      <div className="flex flex-col gap-12">
        <div className="border-b border-editorial-ink pb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
           <div>
             <span className="editorial-label block mb-4">Your Selection</span>
             <h1 className="text-6xl font-serif text-editorial-ink tracking-tighter italic">The Archive</h1>
           </div>
           <Link to="/store" className="flex items-center gap-2 text-sm font-bold text-editorial-ink/40 hover:text-editorial-ink transition-colors group italic">
              <ArrowLeft className="w-4 h-4" /> Continue Shopping
           </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
           
           {/* Items List */}
           <div className="lg:col-span-8 flex flex-col gap-8">
              {cartItems.map((item, idx) => (
                <motion.div 
                  key={`${item.id}-${item.size}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="pb-12 border-b border-editorial-ink/10 flex flex-col sm:flex-row items-center gap-10"
                >
                   <div className="w-40 aspect-[3/4] border border-editorial-ink bg-editorial-muted flex-shrink-0 overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale" />
                   </div>
                   
                   <div className="flex-grow flex flex-col justify-between py-2 w-full">
                      <div className="flex justify-between items-start">
                         <div>
                            <p className="editorial-label text-editorial-ink/30 mb-2 block">{item.creator}</p>
                            <h3 className="text-3xl font-serif text-editorial-ink leading-tight">{item.name}</h3>
                            <p className="text-[10px] font-bold text-editorial-ink/40 uppercase tracking-[0.2em] mt-4">Size: {item.size} // Qty: {item.quantity}</p>
                         </div>
                         <p className="text-3xl font-serif tracking-tight text-editorial-ink">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      
                      <div className="flex items-center gap-8 mt-10">
                         <div className="flex items-center gap-6">
                            <button className="text-EDITORIAL-INK font-bold text-lg hover:text-editorial-accent">-</button>
                            <span className="text-sm font-bold text-editorial-ink w-4 text-center">{item.quantity}</span>
                            <button className="text-editorial-ink font-bold text-lg hover:text-editorial-accent">+</button>
                         </div>
                         <button 
                           onClick={() => removeItem(item.id, item.size)}
                           className="text-[10px] uppercase font-bold tracking-widest text-red-500 underline underline-offset-8 transition-all hover:text-red-700"
                         >
                           Remove Selection
                         </button>
                      </div>
                   </div>
                </motion.div>
              ))}

              {cartItems.length === 0 && (
                <div className="py-32 flex flex-col items-center gap-8 border border-dashed border-editorial-ink/20">
                   <p className="text-3xl font-serif italic text-editorial-ink/20 leading-relaxed">"The archive is currently empty."</p>
                   <Link to="/store" className="px-10 py-5 bg-editorial-ink text-white font-bold uppercase tracking-widest text-[11px] hover:bg-editorial-accent transition-all">
                      Browse Collections
                   </Link>
                </div>
              )}
           </div>

           {/* Summary */}
           <div className="lg:col-span-4 lg:pl-10">
              <div className="flex flex-col gap-10 sticky top-24">
                 <div>
                    <h2 className="text-2xl font-bold uppercase tracking-tight mb-8">Summary</h2>
                    
                    <div className="flex flex-col gap-6">
                       <div className="flex justify-between items-end border-b border-editorial-ink/10 pb-4">
                          <span className="editorial-label">Subtotal</span>
                          <span className="text-xl font-serif">${subtotal.toFixed(2)}</span>
                       </div>
                       <div className="flex justify-between items-end border-b border-editorial-ink/10 pb-4">
                          <span className="editorial-label text-editorial-ink/30 italic">Logistics Fee</span>
                          <span className="text-xl font-serif italic text-editorial-ink/30">${shipping.toFixed(2)}</span>
                       </div>
                       <div className="flex justify-between items-end pt-6">
                          <span className="text-2xl font-bold uppercase tracking-tighter">Total</span>
                          <span className="text-5xl font-serif text-editorial-ink tracking-tighter">${total.toFixed(2)}</span>
                       </div>
                    </div>
                 </div>

                 <button className="w-full py-6 bg-editorial-ink text-white font-bold uppercase tracking-[0.3em] text-[11px] hover:bg-editorial-accent transition-all flex items-center justify-center gap-4 group">
                    Enter Final Stage <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                 </button>
                 
                 <div className="p-8 border border-editorial-ink bg-editorial-muted">
                    <p className="text-[10px] text-editorial-ink font-bold uppercase tracking-widest text-center leading-relaxed italic">
                      Sustainability Note: Your order initiates a community fulfillment cycle based on campaign success.
                    </p>
                 </div>
              </div>
           </div>

        </div>
      </div>
    </div>
  );
};
