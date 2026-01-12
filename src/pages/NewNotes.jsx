import React from 'react';
import {
  Plus,
  ChevronRight,
  Clock,
  CheckCircle,
  MessageSquare,
  Calendar,
  Zap,
  LayoutGrid
} from 'lucide-react';

const NewNotes = () => {
  return (
    <div className="min-h-screen bg-[#F0F2F5] p-4 md:p-10 font-sans text-slate-800">
      <div className="max-w-6xl mx-auto">

        {/* Top Minimalist Form */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 bg-white/40 backdrop-blur-md p-4 rounded-3xl border border-white/60 shadow-sm">
          <div className="flex items-center gap-4 px-4 w-full md:w-auto">
            <div className="bg-orange-500 p-2 rounded-2xl shadow-lg shadow-orange-200 text-white">
              <Zap size={20} fill="white" />
            </div>
            <h1 className="text-xl font-black tracking-tight uppercase">Activity Stream</h1>
          </div>
          <div className="flex items-center gap-2 w-full md:w-[500px] mt-4 md:mt-0">
            <input
              type="text"
              placeholder="Start a new list activity..."
              className="w-full bg-white border-none rounded-2xl py-3 px-6 shadow-inner focus:ring-2 focus:ring-orange-200 outline-none text-sm"
            />
            <button className="bg-white p-3 rounded-2xl shadow-sm hover:shadow-md hover:bg-orange-500 hover:text-white transition-all text-orange-500">
              <Plus size={24} />
            </button>
          </div>
        </div>

        {/* The Activities Stack */}
        <div className="space-y-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex flex-col lg:flex-row bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white">

              {/* Left Side: Main Info (30%) */}
              <div className="lg:w-1/3 p-8 border-r border-slate-50">
                <div className="flex items-center gap-2 mb-4">
                  <span className="h-1 w-8 bg-orange-500 rounded-full"></span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]"><b className=" text-orange-500">Due Date,</b> Oct 24, 2025</span>
                </div>
                <h2 className="text-2xl font-bold leading-tight mb-3 text-slate-900">
                  {item === 1 ? "Cloud Server Migration" : item === 2 ? "Q1 Financial Audit" : "Customer Feedback Loop"}
                </h2>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  Moving all legacy assets to the new high-performance architecture.
                </p>
                <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-2xl text-xs font-bold text-slate-600">
                  Active
                </div>
              </div>

              {/* Right Side: Progress List (70%) */}
              <div className="flex-1 bg-slate-50/50 p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-sm flex items-center gap-2">
                    <LayoutGrid size={16} className="text-orange-500" /> Progress Logs
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {[1, 2].map((progress) => (
                    <div key={progress} className="bg-white p-5 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow group border border-transparent hover:border-orange-100">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 bg-emerald-50 text-emerald-500 rounded-xl group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                            <CheckCircle size={16} />
                          </div>
                          <h4 className="font-bold text-slate-800 text-sm">Database indexing completed</h4>
                        </div>

                        <span className="text-[10px] text-slate-300 font-medium italic">Oct 24, 2025</span>
                      </div>

                      <div className="bg-slate-50 p-3 rounded-2xl text-[11px] text-slate-500 relative">
                        <MessageSquare 
                          size={50} 
                          className="absolute top-1/2 right-5 transform -translate-y-1/2 text-orange-400 opacity-30"
                        />
                        <span className="font-semibold text-slate-700 block mb-1">Feedback:</span>
                        Everything looks optimized for high-traffic loads.
                      </div>
                    </div>
                  ))}

                  {/* Add Progress - Simple Inline Form */}
                  <div className="flex items-center justify-center border-2 border-dashed border-slate-200 rounded-[2rem] p-4 hover:bg-white transition-all cursor-pointer group">
                    <div className="flex items-center gap-2 text-slate-400 font-bold text-xs group-hover:text-orange-500">
                      <Plus size={16} />
                      Add Step
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewNotes;
