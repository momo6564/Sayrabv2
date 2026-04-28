import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  AlertTriangle, 
  TrendingUp, 
  Users, 
  Package, 
  Search, 
  Filter, 
  MoreHorizontal,
  CheckCircle2,
  XCircle,
  Flag
} from 'lucide-react';
import { products } from '../data';

export const AdminPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      <div className="flex items-center justify-between mb-12">
        <div className="flex flex-col gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-on-surface text-white rounded-full text-[10px] font-black uppercase tracking-widest w-fit">
            <ShieldCheck className="w-3 h-3" /> System Administrator
          </div>
          <h1 className="text-4xl font-black tracking-tighter text-on-surface">System Overview</h1>
        </div>
        <div className="hidden md:flex items-center gap-4 bg-white p-2 rounded-2xl border border-surface-container-high">
           <div className="flex items-center px-4 py-2 bg-surface-container rounded-xl w-64">
              <Search className="w-4 h-4 text-on-surface-variant mr-3" />
              <input type="text" placeholder="Search campaigns, users..." className="bg-transparent border-none outline-none text-sm w-full font-medium" />
           </div>
           <button className="p-3 hover:bg-surface-container rounded-xl transition-colors">
              <Filter className="w-5 h-5 text-on-surface-variant" />
           </button>
        </div>
      </div>

      {/* Global Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          { label: 'Avg. Order Value', value: '$54.20', status: 'optimal', icon: TrendingUp },
          { label: 'Flagged Content', value: '12', status: 'action-needed', icon: AlertTriangle },
          { label: 'Active Queue', value: '1,420 Items', status: 'normal', icon: Package },
        ].map((metric, i) => (
          <div key={i} className="bg-white p-8 rounded-[40px] border border-surface-container-high shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">{metric.label}</p>
              <h3 className="text-4xl font-black text-on-surface">{metric.value}</h3>
            </div>
            <div className={`p-4 rounded-2xl ${
              metric.status === 'action-needed' ? 'bg-red-50 text-red-600' : 'bg-primary/5 text-primary'
            }`}>
              <metric.icon className="w-8 h-8" />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Campaign Management */}
        <div className="lg:col-span-12">
          <div className="bg-white rounded-[40px] border border-surface-container-high shadow-sm overflow-hidden">
            <div className="p-8 border-b border-surface-container-high flex items-center justify-between">
              <h2 className="text-2xl font-black tracking-tight text-on-surface">Campaign Verification</h2>
              <div className="flex gap-2">
                 <button className="px-4 py-2 bg-primary text-white rounded-xl text-xs font-bold">Pending Approval (5)</button>
                 <button className="px-4 py-2 bg-surface-container text-on-surface-variant rounded-xl text-xs font-bold hover:bg-surface-container-high">Flagged (12)</button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-surface-container-low">
                    <th className="px-8 py-4 text-[10px] font-black uppercase text-on-surface-variant tracking-widest">Campaign</th>
                    <th className="px-8 py-4 text-[10px] font-black uppercase text-on-surface-variant tracking-widest">Creator</th>
                    <th className="px-8 py-4 text-[10px] font-black uppercase text-on-surface-variant tracking-widest">Goal Status</th>
                    <th className="px-8 py-4 text-[10px] font-black uppercase text-on-surface-variant tracking-widest">Risk Level</th>
                    <th className="px-8 py-4 text-[10px] font-black uppercase text-on-surface-variant tracking-widest text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container-high">
                  {products.map((item, idx) => (
                    <tr key={item.id} className="hover:bg-surface-container-lowest transition-colors">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-surface-container overflow-hidden">
                             <img src={item.image} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <p className="font-bold text-on-surface">{item.name}</p>
                            <p className="text-xs text-on-surface-variant">ID: CAM-{item.id}928</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6 font-medium text-sm">{item.creator}</td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-2">
                           <div className="w-24 h-1.5 bg-surface-container rounded-full overflow-hidden">
                              <div className="h-full bg-primary" style={{ width: `${item.progress}%` }} />
                           </div>
                           <span className="text-xs font-bold text-on-surface-variant">{item.progress}%</span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                          idx % 3 === 0 ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'
                        }`}>
                          {idx % 3 === 0 ? 'Low Risk' : 'Medium Risk'}
                        </span>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <div className="flex items-center justify-end gap-2">
                           <button className="p-2 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors" title="Approve">
                              <CheckCircle2 className="w-5 h-5" />
                           </button>
                           <button className="p-2 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors" title="Reject">
                              <XCircle className="w-5 h-5" />
                           </button>
                           <button className="p-2 hover:bg-surface-container rounded-lg transition-colors">
                              <MoreHorizontal className="w-5 h-5" />
                           </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="p-8 bg-surface-container-low flex items-center justify-between">
               <p className="text-xs font-bold text-on-surface-variant">Showing 3 of 152 active campaigns</p>
               <div className="flex gap-2">
                  <button className="px-4 py-2 border border-surface-container-high rounded-xl text-xs font-bold disabled:opacity-30" disabled>Previous</button>
                  <button className="px-4 py-2 bg-on-surface text-white rounded-xl text-xs font-bold">Next Page</button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
