import React, { useState } from 'react';
import { containerTypes, freightChargesList, logisticsModesData } from '../data/logistics';
import { Ship, Plane, Truck, Anchor, CheckCircle, HelpCircle, Package, Columns, Box } from 'lucide-react';

export function LogisticsSection() {
  const [selectedContType, setSelectedContType] = useState<string>('20ft Standard Dry Container');

  const selectedContainer = containerTypes.find(item => item.type === selectedContType) || containerTypes[0];

  return (
    <div className="space-y-6 bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm">
      {/* Tab select header */}
      <div className="space-y-1">
        <h2 className="text-xl md:text-2xl font-bold font-display text-slate-900">Freight & Sourcing Logistics</h2>
        <p className="text-[11px] text-slate-500 leading-relaxed max-w-3xl">
          International logistics bridges global buyers and overseas sellers. Search container capacities, compare sea/air modes of transit, and learn the components of an ocean freight quote.
        </p>
      </div>

      {/* Modes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Sea */}
        <div className="p-4 rounded-xl bg-sky-50/50 border border-sky-100 flex flex-col justify-between space-y-4 shadow-3xs">
          <div className="space-y-2">
            <div className="relative h-28 rounded-lg overflow-hidden border border-sky-150 bg-sky-100/50 flex items-center justify-center">
              <svg viewBox="0 0 100 50" className="w-16 h-16 text-sky-600 animate-[pulse_3s_ease_infinite]" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10,35 Q50,45 90,35 L85,20 L15,20 Z" fill="currentColor" opacity="0.15" />
                <path d="M10,35 L90,35 L80,45 L20,45 Z" fill="currentColor" />
                <rect x="35" y="15" width="30" height="20" fill="currentColor" opacity="0.7" rx="1" />
                <rect x="42" y="5" width="16" height="10" fill="currentColor" rx="1" />
                <line x1="15" y1="35" x2="85" y2="35" stroke="#fff" strokeWidth="1" />
              </svg>
            </div>
            <div className="p-2 bg-sky-100/80 rounded-xl w-fit text-sky-800"><Ship className="w-4 h-4" /></div>
            <h4 className="font-bold text-slate-800 text-sm font-display">Sea Freight (Ocean)</h4>
            <p className="text-[11px] text-slate-500 leading-normal">The baseline backbone of global trade, carrying 90% of intercontinental product volume.</p>
          </div>
          <div className="pt-2 text-[10px] text-slate-600 space-y-1">
            <div className="font-semibold text-slate-700">优点 (Advantages):</div>
            <div>• Lowest cost per metric ton over long lanes.</div>
            <div className="font-semibold text-slate-700 mt-1">缺点 (Disadvantages):</div>
            <div>• Low transit speed (15 - 45 days).</div>
          </div>
        </div>

        {/* Air */}
        <div className="p-4 rounded-xl bg-indigo-50/50 border border-indigo-100 flex flex-col justify-between space-y-4 shadow-3xs">
          <div className="space-y-2">
            <div className="relative h-28 rounded-lg overflow-hidden border border-indigo-150 bg-indigo-100/50 flex items-center justify-center">
              <svg viewBox="0 0 100 50" className="w-16 h-16 text-indigo-600" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 15,25 Q 50,12 85,25 L 50,38 Z" fill="currentColor" />
                <path d="M 45,20 L 50,5 L 58,5 L 54,20 Z" fill="currentColor" opacity="0.8" />
                <path d="M 40,30 L 45,45 L 53,45 L 48,30 Z" fill="currentColor" opacity="0.8" />
              </svg>
            </div>
            <div className="p-2 bg-indigo-100/80 rounded-xl w-fit text-indigo-800"><Plane className="w-4 h-4" /></div>
            <h4 className="font-bold text-slate-800 text-sm font-display">Air Cargo Freight</h4>
            <p className="text-[11px] text-slate-500 leading-normal">Fast-track premium shipping option reserved for high-value sensitive items.</p>
          </div>
          <div className="pt-2 text-[10px] text-slate-600 space-y-1">
            <div className="font-semibold text-slate-700">优点 (Advantages):</div>
            <div>• Quick transit (1 to 5 days globally).</div>
            <div className="font-semibold text-slate-700 mt-1">缺点 (Disadvantages):</div>
            <div>• Expensive transport rates.</div>
          </div>
        </div>

        {/* Road */}
        <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-100 flex flex-col justify-between space-y-4 shadow-3xs">
          <div className="space-y-2">
            <div className="relative h-28 rounded-lg overflow-hidden border border-amber-150 bg-amber-100/50 flex items-center justify-center">
              <svg viewBox="0 0 100 50" className="w-16 h-16 text-amber-600" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="15" width="45" height="20" rx="1" fill="currentColor" />
                <path d="M 65,22 L 78,22 L 74,35 L 65,35 Z" fill="currentColor" opacity="0.8" />
                <circle cx="32" cy="38" r="5" fill="#1e293b" />
                <circle cx="58" cy="38" r="5" fill="#1e293b" />
                <circle cx="72" cy="38" r="5" fill="#1e293b" />
              </svg>
            </div>
            <div className="p-2 bg-amber-100/80 rounded-xl w-fit text-amber-800"><Truck className="w-4 h-4" /></div>
            <h4 className="font-bold text-slate-800 text-sm font-display">Road Transport</h4>
            <p className="text-[11px] text-slate-500 leading-normal">Crucial for door-to-door regional trucking, drayage transfers, and trade lanes.</p>
          </div>
          <div className="pt-2 text-[10px] text-slate-600 space-y-1">
            <div className="font-semibold text-slate-700">优点 (Advantages):</div>
            <div>• Fast door pickup-drop logistics cycle.</div>
            <div className="font-semibold text-slate-700 mt-1">缺点 (Disadvantages):</div>
            <div>• Vulnerable to highway border checkpoints.</div>
          </div>
        </div>

        {/* Rail */}
        <div className="p-4 rounded-xl bg-emerald-50/45 border border-emerald-100 flex flex-col justify-between space-y-4 shadow-3xs">
          <div className="space-y-2">
            <div className="relative h-28 rounded-lg overflow-hidden border border-emerald-150 bg-emerald-100/50 flex items-center justify-center">
              <svg viewBox="0 0 100 50" className="w-16 h-16 text-emerald-600" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="15" y="15" width="30" height="22" rx="2" fill="currentColor" />
                <rect x="50" y="15" width="22" height="22" rx="1" fill="currentColor" opacity="0.8" />
                <rect x="76" y="15" width="12" height="22" rx="1" fill="currentColor" opacity="0.6" />
                <line x1="10" y1="41" x2="90" y2="41" stroke="#475569" strokeWidth="2.5" strokeDasharray="5 2" />
              </svg>
            </div>
            <div className="p-2 bg-emerald-100/80 rounded-xl w-fit text-emerald-800"><Box className="w-4 h-4" /></div>
            <h4 className="font-bold text-slate-800 text-sm font-display">Overland Rail Cargo</h4>
            <p className="text-[11px] text-slate-500 leading-normal">Rapid shipping option connecting inland dry ports across continental corridors.</p>
          </div>
          <div className="pt-2 text-[10px] text-slate-600 space-y-1">
            <div className="font-semibold text-slate-700">优点 (Advantages):</div>
            <div>• Environmentally clean, faster than sea.</div>
            <div className="font-semibold text-slate-700 mt-1">缺点 (Disadvantages):</div>
            <div>• Rigid railway terminal nodes.</div>
          </div>
        </div>
      </div>

      {/* Two split block: Container browser and LCL vs FCL */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
        {/* Left: Container selector details */}
        <div className="lg:col-span-8 space-y-6">
          <h3 className="text-lg font-bold font-display text-slate-800 flex items-center gap-2">
            🚢 Marine Shipping Containers Dictionary
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* List */}
            <div className="space-y-1.5 md:col-span-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">CONTAINER SPECIFICATIONS</span>
              {containerTypes.map((item, idx) => {
                const isSelected = selectedContType === item.type;
                return (
                  <button
                    id={`cont-type-btn-${idx}`}
                    key={item.type}
                    onClick={() => setSelectedContType(item.type)}
                    className={`w-full text-left px-3.5 py-2.5 text-xs rounded-xl border transition cursor-pointer font-medium block truncate ${
                      isSelected
                        ? 'bg-slate-900 text-white border-slate-900 font-semibold shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-150 hover:bg-slate-100'
                    }`}
                  >
                    {item.type}
                  </button>
                );
              })}
            </div>

            {/* Spec Panel details */}
            <div className="md:col-span-2 bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-5">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-indigo-600 font-bold uppercase tracking-wider block">CAPACITY MODEL</span>
                <h4 className="text-base font-bold text-slate-800 font-display">{selectedContainer.type}</h4>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs font-sans">
                <div className="p-3 bg-white rounded-xl border border-slate-150 space-y-0.5">
                  <span className="text-[9px] text-slate-400 font-semibold">Dimensions</span>
                  <p className="font-medium text-slate-800 leading-snug">{selectedContainer.dimensions}</p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-150 space-y-0.5">
                  <span className="text-[9px] text-slate-400 font-semibold">Max Payload Limit</span>
                  <p className="font-medium text-slate-800 leading-snug">{selectedContainer.maxPayload}</p>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Best Used For</span>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">{selectedContainer.bestUsedFor}</p>
              </div>

              {/* Basic SVG outline of a container */}
              <div className="w-full bg-slate-900 rounded-xl p-4 flex items-center justify-center border border-slate-800 select-none">
                <div className="border border-indigo-500/50 bg-indigo-500/5 px-6 py-4 rounded font-mono text-teal-400 font-bold text-xs uppercase flex items-center gap-2">
                  <Package className="w-4 h-4 text-teal-400 animate-pulse" />
                  Cargo locked &amp; sealed
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: FCL vs LCL */}
        <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 space-y-6">
          <h3 className="text-lg font-bold font-display text-slate-800">FCL vs LCL Choice Matrix</h3>
          <p className="text-xs text-slate-500 leading-relaxed font-sans">
            How Exporters package ocean merchandise:
          </p>

          <div className="space-y-5 text-xs font-sans">
            <div className="space-y-1">
              <span className="p-1 rounded bg-teal-50 border border-teal-200 text-teal-800 font-bold text-[10px] uppercase font-mono tracking-wider">
                Full Container Load (FCL)
              </span>
              <p className="text-[11px] text-slate-600 leading-relaxed pt-1.5">{logisticsModesData.fclVsLcl.fclMeaning}</p>
            </div>

            <div className="space-y-1 border-t border-slate-200 pt-4">
              <span className="p-1 rounded bg-indigo-50 border border-indigo-200 text-indigo-800 font-bold text-[10px] uppercase font-mono tracking-wider">
                Less Than Container Load (LCL)
              </span>
              <p className="text-[11px] text-slate-600 leading-relaxed pt-1.5">{logisticsModesData.fclVsLcl.lclMeaning}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Freight quote structures list */}
      <div className="space-y-4 pt-4 border-t border-slate-100">
        <h3 className="text-lg font-bold font-display text-slate-800 flex items-center gap-1.5">
          <Columns className="w-5 h-5 text-indigo-650" /> Anatomy of an Ocean Freight Quote (Charges Breakdown)
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed max-w-2xl font-sans">
          When a freight forwarder issues an international transport quote, the final invoice contains supplementary fees. Review the components:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {freightChargesList.map((charge, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col justify-between space-y-2">
              <div className="space-y-1">
                <span className="text-[9px] font-mono text-slate-400 font-bold uppercase tracking-widest">{charge.meaning}</span>
                <h4 className="font-bold text-slate-800 text-sm">{charge.component}</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-sans pt-1.5">{charge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
