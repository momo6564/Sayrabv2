import React from 'react';
import { motion } from 'motion/react';
import { 
  Package, 
  Truck, 
  ClipboardList, 
  Settings, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Zap,
  Box,
  FileText
} from 'lucide-react';
import { productionQueue } from '../data';

export const ManufacturerPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-on-surface text-white rounded-[24px] flex items-center justify-center shadow-xl">
             <Package className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-4xl font-black tracking-tighter text-on-surface leading-none">Production Terminal</h1>
            <p className="text-on-surface-variant mt-1">Status: <span className="text-green-600 font-bold uppercase text-xs tracking-widest">Active • 99.2% Efficiency</span></p>
          </div>
        </div>
        <div className="flex gap-4">
           <div className="bg-white px-6 py-4 rounded-[28px] border border-surface-container-high flex items-center gap-4 shadow-sm">
              <div className="text-right">
                 <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest">Capacity Used</p>
                 <p className="text-xl font-black text-on-surface">82%</p>
              </div>
              <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary">
                 <Zap className="w-6 h-6" />
              </div>
           </div>
           <button className="p-5 bg-white border border-surface-container-high rounded-[28px] hover:bg-surface-container transition-colors shadow-sm">
             <Settings className="w-6 h-6 text-on-surface-variant" />
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Production Queue */}
        <div className="lg:col-span-8 space-y-6">
           <div className="flex items-center justify-between">
              <h2 className="text-2xl font-black tracking-tight text-on-surface flex items-center gap-3">
                 <ClipboardList className="w-6 h-6 text-primary" /> Active Queue
              </h2>
              <div className="flex gap-2">
                 {['All', 'Awaiting', 'In Production', 'Quality Check'].map(item => (
                   <button key={item} className="px-4 py-2 rounded-xl text-xs font-bold hover:bg-white transition-colors">{item}</button>
                 ))}
              </div>
           </div>

           <div className="space-y-4">
             {productionQueue.map((order, i) => (
               <motion.div
                 key={order.id}
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.1 }}
                 className="bg-white p-6 rounded-[32px] border border-surface-container-high shadow-sm hover:border-primary transition-all group"
               >
                 <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="w-24 h-24 bg-surface-container-low rounded-2xl overflow-hidden flex-shrink-0">
                       <img src={order.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    
                    <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                       <div>
                          <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">{order.id}</p>
                          <h4 className="text-lg font-bold text-on-surface">{order.productType}</h4>
                       </div>
                       <div className="flex items-center gap-8">
                          <div>
                             <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest">Quantity</p>
                             <p className="text-lg font-bold">{order.quantity} pcs</p>
                          </div>
                          <div>
                             <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest">Received</p>
                             <p className="text-lg font-bold">{order.receivedAt}</p>
                          </div>
                       </div>
                       <div className="flex items-center gap-2 mt-2">
                          <FileText className="w-3 h-3 text-on-surface-variant" />
                          <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter underline">{order.designFile}</span>
                       </div>
                    </div>

                    <div className="flex-shrink-0 flex flex-col items-center md:items-end gap-3">
                       <span className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest ${
                         order.status === 'In Production' ? 'bg-primary/10 text-primary' : 'bg-green-50 text-green-600'
                       }`}>
                         {order.status}
                       </span>
                       <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-on-surface hover:text-primary transition-colors">
                          Manage Step <ArrowRight className="w-4 h-4" />
                       </button>
                    </div>
                 </div>
               </motion.div>
             ))}
           </div>
        </div>

        {/* Sidebar Controls */}
        <div className="lg:col-span-4 flex flex-col gap-8">
           
           {/* Terminal Status */}
           <div className="bg-on-surface rounded-[40px] p-8 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                 <Truck className="w-32 h-32" />
              </div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                 <Box className="w-5 h-5 text-primary" /> Supply Chain
              </h3>
              <div className="space-y-6">
                 {[
                   { label: 'Raw Inventory', status: 'Optimal', color: 'text-green-400' },
                   { label: 'Packaging Stock', status: 'Low (2d left)', color: 'text-orange-400' },
                   { label: 'Carrier Pickup', status: '3:00 PM', color: 'text-primary' },
                 ].map((stat, i) => (
                   <div key={i} className="flex justify-between items-center border-b border-white/10 pb-4">
                      <p className="text-sm text-white/60">{stat.label}</p>
                      <p className={`text-sm font-black uppercase tracking-widest ${stat.color}`}>{stat.status}</p>
                   </div>
                 ))}
              </div>
              <button className="w-full h-14 bg-white text-on-surface rounded-2xl font-black text-sm mt-8 hover:bg-primary hover:text-white transition-all">
                 Request Restock
              </button>
           </div>

           {/* Manual Quality Check */}
           <div className="bg-white rounded-[40px] p-8 border border-surface-container-high shadow-sm">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-on-surface">
                 <CheckCircle2 className="w-5 h-5 text-green-600" /> Quality Control
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                 Select an order from the queue to perform a manual spot check or approve for shipping.
              </p>
              <div className="aspect-video bg-surface-container rounded-2xl flex flex-col items-center justify-center text-on-surface-variant gap-2 opacity-50 border border-dashed border-surface-container-highest">
                 <Package className="w-8 h-8" />
                 <p className="text-[10px] font-black uppercase tracking-widest">No order selected</p>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};
