import React, { useState } from 'react';
import { paymentsData } from '../data/payments';
import { Shield, ArrowRight, TrendingDown, HelpCircle, Lock, AlertTriangle } from 'lucide-react';

export function PaymentsSection() {
  const [selectedTermName, setSelectedTermName] = useState<string>('Sight LC');

  const selectedTerm = paymentsData.find(item => item.term === selectedTermName) || paymentsData[0];

  const getSecurityMeta = (level: string) => {
    switch (level) {
      case 'Very High for Seller':
        return { color: 'bg-emerald-500', barWidth: 'w-full', text: 'Emerald Block Security (Very High)', bg: 'bg-emerald-50 text-emerald-800 border-emerald-200' };
      case 'Moderate for Seller':
        return { color: 'bg-amber-500', barWidth: 'w-2/3', text: 'Amber Block Security (Moderate)', bg: 'bg-amber-50 text-amber-800 border-amber-200' };
      case 'Balanced':
        return { color: 'bg-blue-500', barWidth: 'w-1/2', text: 'Standard Equal Balance', bg: 'bg-blue-50 text-blue-800 border-blue-200' };
      default:
        return { color: 'bg-rose-500', barWidth: 'w-1/4', text: 'High Risk / Unfenced (Low for Seller)', bg: 'bg-rose-50 text-rose-800 border-rose-200' };
    }
  };

  const meta = getSecurityMeta(selectedTerm.securityLevel);

  return (
    <div className="space-y-6 bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm">
      {/* Header */}
      <div className="space-y-1">
        <h2 className="text-xl md:text-2xl font-bold font-display text-slate-900">Trade Finance & Payment Terms</h2>
        <p className="text-[11px] text-slate-500 leading-relaxed max-w-3xl">
          Financing and payment methods define foreign default risk buffers. Select any payment term below to analyze its supplier security profiles, banking structures, and transaction costs.
        </p>
      </div>

      {/* Grid container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left column: List of Payment Instruments */}
        <div className="lg:col-span-4 space-y-1.5">
          {paymentsData.map((term, idx) => {
            const isSelected = selectedTermName === term.term;
            return (
              <button
                id={`pay-term-btn-${idx}`}
                key={term.term}
                onClick={() => setSelectedTermName(term.term)}
                className={`w-full text-left p-3.5 rounded-[6px] border transition duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#eff6ff] border-[#1d4ed8] text-[#1d4ed8] font-bold shadow-xs'
                    : 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-[#e2e8f0]'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold text-xs font-display">{term.term}</span>
                  <ArrowRight className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-[#1d4ed8]' : 'text-slate-400'}`} />
                </div>
                <p className={`text-[10px] mt-0.5 leading-snug truncate ${isSelected ? 'text-[#1d4ed8]/80' : 'text-slate-500'}`}>
                  {term.fullName}
                </p>
              </button>
            );
          })}
        </div>

         {/* Right column: Interactive Detail Analysis */}
        <div className="lg:col-span-8 space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-display text-slate-800">
              {selectedTerm.term} - <span className="text-slate-600 font-normal">{selectedTerm.fullName}</span>
            </h3>
            
            {/* Dynamic Payment Flow Visual Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
              {/* Dynamic Payment Flow Visual Card (Replacing Unsplash image) */}
              <div className="relative h-44 rounded-[10px] overflow-hidden border border-slate-800 bg-slate-950 p-4 flex flex-col justify-between text-white shadow-2xs">
                {/* Grid Background */}
                <div className="absolute inset-0 opacity-15 pointer-events-none select-none">
                  <svg className="w-full h-full text-indigo-500/10" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <pattern id="payments-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <circle cx="5" cy="5" r="0.8" fill="#fff" opacity="0.3" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#payments-grid)" />
                  </svg>
                </div>

                <div className="relative z-10 flex justify-between items-center text-[10px]">
                  <span className="text-indigo-400 font-bold tracking-wider font-mono">SWIFT {selectedTerm.term.includes('LC') ? 'MT700' : 'MT103'} DIRECTORY</span>
                  <span className="text-teal-400 font-mono text-[8px] font-bold">SECURED ROUTE</span>
                </div>

                <div className="relative z-10 my-auto py-2">
                  <svg viewBox="0 0 200 60" className="w-full h-full animate-[fade-in_0.5s_ease]" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 20,30 L 180,30" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="3" />
                    <path d="M 20,30 Q 100,5 180,30" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" />
                    
                    <g transform="translate(15, 15)">
                      <rect x="0" y="5" width="16" height="20" rx="2" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />
                      <line x1="2" y1="9" x2="14" y2="9" stroke="#60a5fa" strokeWidth="1" />
                      <text x="8" y="32" textAnchor="middle" fill="#94a3b8" fontSize="6" fontFamily="monospace">BENEFICIARY</text>
                    </g>

                    <g transform="translate(85, 12)">
                      <rect x="0" y="5" width="30" height="18" rx="3" fill="#111827" stroke="#10b981" strokeWidth="1" />
                      <text x="15" y="14" textAnchor="middle" fill="#10b981" fontSize="5" fontWeight="bold" fontFamily="monospace">SWIFT</text>
                      <text x="15" y="20" textAnchor="middle" fill="#fff" fontSize="5" fontFamily="monospace">{selectedTerm.term.includes('LC') ? 'MT700' : 'MT103'}</text>
                    </g>

                    <g transform="translate(165, 15)">
                      <rect x="0" y="5" width="16" height="20" rx="2" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />
                      <line x1="2" y1="9" x2="14" y2="9" stroke="#60a5fa" strokeWidth="1" />
                      <text x="8" y="32" textAnchor="middle" fill="#94a3b8" fontSize="6" fontFamily="monospace">ISSUER</text>
                    </g>
                  </svg>
                </div>

                <div className="relative z-10 text-[9px] font-mono tracking-wider font-bold bg-[#1d4ed8] text-white px-2 py-0.5 rounded w-fit uppercase">
                  SECURED TRADE BANKING
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-2.5">
                <h4 className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">Typical Payment Flow pipeline</h4>
                <div className="space-y-1 text-[9px] leading-relaxed">
                  {/* Step Indicators */}
                  <div className="p-1.5 bg-white rounded border border-slate-150 flex items-start gap-1.5">
                    <span className="w-3.5 h-3.5 rounded-full bg-blue-50 text-blue-800 font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <span><strong>1. Collateral Issue</strong>: Importer locks trade funds via credit collateral or SWIFT MT700 telegraphs.</span>
                  </div>
                  <div className="p-1.5 bg-white rounded border border-slate-150 flex items-start gap-1.5">
                    <span className="w-3.5 h-3.5 rounded-full bg-blue-50 text-blue-800 font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <span><strong>2. Ocean Consign</strong>: Seller consigns physical cargo and receives the Bill of Lading.</span>
                  </div>
                  <div className="p-1.5 bg-white rounded border border-slate-150 flex items-start gap-1.5">
                    <span className="w-3.5 h-3.5 rounded-full bg-blue-50 text-blue-800 font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <span><strong>3. Bank Settlement</strong>: Documents submitted trigger instant digital transfer via SWIFT networks.</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
              {selectedTerm.description}
            </p>
          </div>

          {/* Security Visualizer Gauge */}
          <div className={`p-5 rounded-2xl border ${meta.bg} space-y-3`}>
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Lock className="w-4 h-4" /> Seller Safety Index Rating
              </span>
              <span className="text-xs font-mono font-bold">{meta.text}</span>
            </div>
            {/* Visual Gauge track bar */}
            <div className="w-full h-3.5 bg-slate-250 rounded-full overflow-hidden">
              <div className={`h-full rounded-full transition-all duration-500 ${meta.color} ${meta.barWidth}`}></div>
            </div>
            <p className="text-[10px] text-slate-500 leading-relaxed italic">
              * Note: High-security levels preserve supplier capitals but require significant bank collateral from the purchasing importer, lowering conversion speed.
            </p>
          </div>

          {/* Lists: Pros risks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3 p-5 rounded-2xl bg-teal-50/40 border border-teal-100/80">
              <h4 className="font-bold text-xs text-teal-900 uppercase tracking-wider">👍 Primary Exporter Advantages</h4>
              <ul className="space-y-2">
                {selectedTerm.advantages.map((adv, i) => (
                  <li key={i} className="text-xs text-slate-650 flex items-start gap-1.5 leading-relaxed">
                    <span className="text-teal-600 font-bold">•</span>
                    <span>{adv}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 p-5 rounded-2xl bg-rose-50/40 border border-rose-100/80">
              <h4 className="font-bold text-xs text-rose-900 uppercase tracking-wider flex items-center gap-1">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" /> Operational Hazards
              </h4>
              <ul className="space-y-2">
                {selectedTerm.risks.map((risk, i) => (
                  <li key={i} className="text-xs text-slate-650 flex items-start gap-1.5 leading-relaxed">
                    <span className="text-rose-500 font-bold">•</span>
                    <span>{risk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Best usage cases */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-150 space-y-1">
            <h4 className="font-bold text-xs text-slate-700 uppercase tracking-widest">Recommended Practical Use-case</h4>
            <p className="text-xs text-slate-600 leading-relaxed">{selectedTerm.bestUsage}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
