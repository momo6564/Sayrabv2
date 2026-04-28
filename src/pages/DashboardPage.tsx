import React from 'react';
import { motion } from 'motion/react';
import { 
  BarChart3, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Settings, 
  Plus, 
  ChevronRight, 
  Clock,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router';
import { userCampaigns, recentTransactions } from '../data';

export const DashboardPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12 mb-20 border-b border-editorial-ink pb-12">
        <div>
          <span className="editorial-label block mb-4 italic">Management Suite</span>
          <h1 className="text-6xl font-serif text-editorial-ink tracking-tighter italic leading-none">The Director's Desk</h1>
        </div>
        <div className="flex gap-4">
          <button className="px-8 py-3 border border-editorial-ink text-editorial-ink font-bold uppercase tracking-widest text-[10px] hover:bg-editorial-muted transition-all">
            <Settings className="w-4 h-4" /> 
          </button>
          <Link to="/launch" className="px-10 py-3 bg-editorial-ink text-white font-bold uppercase tracking-widest text-[10px] hover:bg-editorial-accent transition-all flex items-center gap-4">
            <Plus className="w-4 h-4" /> New Edition
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-0 mb-20 border border-editorial-ink">
        {[
          { label: 'Total Raised', value: '$12,480', sub: '+12% vs LY', icon: DollarSign },
          { label: 'Active Runs', value: '03', sub: '2 Ending Soon', icon: TrendingUp },
          { label: 'Circulation', value: '842', sub: 'Supporters', icon: Users },
          { label: 'Efficiency', value: '4.2%', sub: 'Conversion', icon: BarChart3 },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className={`p-10 flex flex-col gap-6 ${i !== 3 ? 'border-b md:border-b-0 md:border-r border-editorial-ink' : ''} bg-editorial-bg`}
          >
            <div className="flex items-center justify-between">
               <span className="editorial-label text-editorial-ink/30 italic">{stat.label}</span>
               <stat.icon className="w-3 h-3 text-editorial-ink/20" />
            </div>
            <div>
               <h3 className="text-5xl font-serif tracking-tighter text-editorial-ink mb-2">{stat.value}</h3>
               <p className="text-[10px] font-bold text-editorial-ink/40 uppercase tracking-widest">{stat.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        {/* Active Campaigns */}
        <div className="lg:col-span-8 flex flex-col gap-10">
          <div className="flex items-end justify-between border-b border-editorial-ink pb-6 text-editorial-ink">
            <h2 className="text-3xl font-serif italic tracking-tight">Active Editions</h2>
            <Link to="/manage" className="editorial-label text-editorial-ink/40 hover:text-editorial-ink underline underline-offset-8">Archive Map</Link>
          </div>
          
          <div className="flex flex-col gap-0 border border-editorial-ink">
            {userCampaigns.map((camp, idx) => (
              <motion.div
                key={camp.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className={`p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-editorial-bg hover:bg-editorial-muted transition-colors cursor-pointer ${idx !== userCampaigns.length - 1 ? 'border-b border-editorial-ink' : ''}`}
              >
                <div className="md:col-span-2 aspect-square border border-editorial-ink grayscale overflow-hidden bg-editorial-muted">
                  <img src={camp.image} alt={camp.title} className="w-full h-full object-cover" />
                </div>
                <div className="md:col-span-6 flex flex-col gap-3">
                  <div className="flex items-center gap-4">
                    <h4 className="text-2xl font-serif text-editorial-ink italic">{camp.title}</h4>
                    {camp.status === 'ending-soon' && (
                      <span className="text-[9px] font-bold uppercase text-red-500 border border-red-500/20 px-2 py-0.5 mt-1">Limited Time</span>
                    )}
                  </div>
                  <div className="flex items-center gap-6 mt-2">
                     <div className="flex flex-col">
                        <span className="text-[10px] font-bold uppercase text-editorial-ink/30 tracking-widest">Raised</span>
                        <span className="text-lg font-serif italic tracking-tight text-editorial-ink">${camp.raised.toLocaleString()}</span>
                     </div>
                     <div className="flex flex-col">
                        <span className="text-[10px] font-bold uppercase text-editorial-ink/30 tracking-widest">Progress</span>
                        <span className="text-lg font-serif italic tracking-tight text-editorial-ink">{Math.round((camp.raised / camp.goal) * 100)}%</span>
                     </div>
                  </div>
                </div>
                <div className="md:col-span-4 flex justify-end gap-1">
                   <button className="h-20 w-12 border-l border-editorial-ink flex items-center justify-center hover:bg-editorial-ink hover:text-white transition-all">
                      <BarChart3 className="w-4 h-4" />
                   </button>
                   <button className="h-20 w-12 border-l border-editorial-ink flex items-center justify-center hover:bg-editorial-ink hover:text-white transition-all">
                      <ArrowRight className="w-4 h-4" />
                   </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-4 flex flex-col gap-10">
          <div className="border-b border-editorial-ink pb-6">
             <h2 className="text-3xl font-serif italic tracking-tight text-editorial-ink">Latest Sales</h2>
          </div>
          <div className="border border-editorial-ink bg-editorial-muted">
            <div className="p-8 flex flex-col gap-10">
              {recentTransactions.map((tx, idx) => (
                <div key={tx.id} className="flex flex-col gap-1">
                  <div className="flex justify-between items-start">
                     <span className="editorial-label text-editorial-ink italic">{tx.buyer}</span>
                     <span className="text-lg font-serif italic text-editorial-ink tracking-tight">+${tx.amount.toFixed(2)}</span>
                  </div>
                  <p className="text-[10px] font-bold text-editorial-ink/30 uppercase tracking-[0.2em] leading-relaxed">
                     Impact acquisition for // {tx.campaign}
                  </p>
                  <p className="text-[9px] text-editorial-ink/20 font-bold uppercase tracking-widest mt-1">Log ID: {tx.id.slice(0, 8)}</p>
                </div>
              ))}
            </div>
            <button className="w-full py-6 border-t border-editorial-ink text-[10px] font-bold uppercase tracking-[0.3em] text-editorial-ink/40 hover:bg-editorial-ink hover:text-white transition-all">
              Comprehensive Ledger
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
