import React, { useState } from 'react';
import { incotermsData } from '../data/incoterms';
import { HelpCircle, Check, AlertTriangle, ShieldCheck, ArrowRight, Anchor, Globe } from 'lucide-react';

export function IncotermsSection() {
  const [selectedTermCode, setSelectedTermCode] = useState<string>('FOB');
  
  // Interactive Simulator States
  const [simTransport, setSimTransport] = useState<'All' | 'Sea'>('All');
  const [simRiskLimit, setSimRiskLimit] = useState<'SellerMin' | 'SellerLoaded' | 'SellerTrans' | 'SellerDest' | 'SellerMax'>('SellerLoaded');
  const [simImportTaxBy, setSimImportTaxBy] = useState<'Seller' | 'Buyer'>('Buyer');
  const [simUnloadAtDestBy, setSimUnloadAtDestBy] = useState<'Seller' | 'Buyer'>('Buyer');

  const selectedIncoterm = incotermsData.find(item => item.code === selectedTermCode) || incotermsData[0];

  // Logic to recommend an Incoterm based on parameters
  const calculateRecommendation = () => {
    if (simTransport === 'Sea') {
      if (simRiskLimit === 'SellerMin') return 'EXW';
      if (simRiskLimit === 'SellerLoaded') return 'FAS';
      if (simRiskLimit === 'SellerTrans') return 'FOB';
      if (simRiskLimit === 'SellerDest') {
        return 'CIF'; // or CFR
      }
      return 'CIF';
    } else {
      if (simRiskLimit === 'SellerMin') return 'EXW';
      if (simRiskLimit === 'SellerLoaded') return 'FCA';
      if (simRiskLimit === 'SellerTrans') return 'CPT';
      if (simRiskLimit === 'SellerDest') {
        if (simImportTaxBy === 'Seller') return 'DDP';
        if (simUnloadAtDestBy === 'Seller') return 'DPU';
        return 'DAP';
      }
      return 'DCA';
    }
  };

  const recommendedTermCode = calculateRecommendation();
  const recommendedTerm = incotermsData.find(item => item.code === recommendedTermCode) || incotermsData[1];

  return (
    <div className="space-y-6">
      {/* Intro Header */}
      <div className="bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
        <h2 className="text-xl md:text-2xl font-bold font-display text-slate-900">Incoterms 2020 Standard Directory</h2>
        <p className="text-xs text-slate-500 leading-relaxed max-w-3xl">
          International Commercial Terms (Incoterms) clarify the essential rules and risk allocation milestones under standard sales contracts. Explore the 11 rules and use our simulator below to pick the best transport term.
        </p>

        {/* Rapid Selector Badges */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {incotermsData.map((item) => (
            <button
              id={`incoterm-badge-${item.code}`}
              key={item.code}
              onClick={() => setSelectedTermCode(item.code)}
              className={`px-3 py-1.5 text-xs font-mono font-bold rounded-[6px] border transition cursor-pointer ${
                selectedTermCode === item.code
                  ? 'bg-[#1d4ed8] text-white border-[#1d4ed8] shadow-xs'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-[#e2e8f0]'
              }`}
            >
              {item.code}
            </button>
          ))}
        </div>
      </div>

      {/* Two-Column Detail Block */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Lefshand: Overview List of selected */}
        <div className="lg:col-span-8 bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm space-y-5">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="space-y-1">
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-50 text-[#1d4ed8] font-bold font-mono uppercase tracking-wide">
                Incoterm 2020 Protocol
              </span>
              <h3 className="text-xl font-bold font-display text-slate-800">
                {selectedIncoterm.code} - {selectedIncoterm.name}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500 px-3 py-1.5 rounded-[6px] bg-slate-50 border border-slate-200 font-medium">
              {selectedIncoterm.transportMode === 'Sea/Inland Waterway Only' ? <Anchor className="w-4 h-4 text-blue-600" /> : <Globe className="w-4 h-4 text-blue-700" />}
              {selectedIncoterm.transportMode}
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 text-xs text-slate-600 leading-relaxed italic">
            "{selectedIncoterm.definition}"
          </div>

          {/* Dynamic Graphic and Responsibility Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
            {/* Custom Interactive Responsibility Visualization Card (Replacing Image Reference) */}
            <div className="relative h-44 rounded-lg overflow-hidden border border-slate-800 bg-slate-950 p-4 flex flex-col justify-between text-white shadow-2xs">
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                <svg className="w-full h-full text-blue-500/10" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <pattern id="incoterm-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#incoterm-grid)" />
                </svg>
              </div>

              {/* Header Title */}
              <div className="relative z-10 flex justify-between items-center text-[10px]">
                <span className="text-teal-400 font-bold tracking-wider">{selectedIncoterm.code} TRANSIT PATH</span>
                <span className="text-slate-400 font-mono text-[8px]">{selectedIncoterm.transportMode}</span>
              </div>

              {/* Custom SVG Transit Lane Diagram with risk transfer mark */}
              <div className="relative z-10 my-1 py-1">
                <svg viewBox="0 0 320 60" className="w-full h-full text-slate-300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="25" width="300" height="8" rx="4" fill="rgba(255,255,255,0.1)" />
                  
                  {selectedIncoterm.code === 'EXW' && (
                    <rect x="10" y="25" width="20" height="8" rx="4" fill="#3b82f6" />
                  )}
                  {(selectedIncoterm.code === 'FOB' || selectedIncoterm.code === 'FAS' || selectedIncoterm.code === 'FCA') && (
                    <rect x="10" y="25" width="100" height="8" rx="4" fill="#3b82f6" />
                  )}
                  {(selectedIncoterm.code === 'CIF' || selectedIncoterm.code === 'CIP' || selectedIncoterm.code === 'CFR' || selectedIncoterm.code === 'CPT') && (
                    <rect x="10" y="25" width="220" height="8" rx="4" fill="#3b82f6" />
                  )}
                  {(selectedIncoterm.code === 'DDP' || selectedIncoterm.code === 'DAP' || selectedIncoterm.code === 'DPU') && (
                    <rect x="10" y="25" width="300" height="8" rx="4" fill="#3b82f6" />
                  )}

                  {/* Points / Milestones */}
                  <circle cx="20" cy="29" r="6" fill={['EXW'].includes(selectedIncoterm.code) ? '#f43f5e' : '#3b82f6'} stroke="#fff" strokeWidth="1.5" />
                  <circle cx="100" cy="29" r="6" fill={['FAS', 'FOB', 'FCA'].includes(selectedIncoterm.code) ? '#f43f5e' : selectedIncoterm.code === 'EXW' ? '#475569' : '#3b82f6'} stroke="#fff" strokeWidth="1.5" />
                  <circle cx="180" cy="29" r="6" fill={['CIF', 'CIP', 'CFR', 'CPT'].includes(selectedIncoterm.code) ? '#f43f5e' : ['EXW', 'FOB', 'FAS', 'FCA'].includes(selectedIncoterm.code) ? '#475569' : '#3b82f6'} stroke="#fff" strokeWidth="1.5" />
                  <circle cx="300" cy="29" r="6" fill={['DDP', 'DAP', 'DPU'].includes(selectedIncoterm.code) ? '#f43f5e' : '#475569'} stroke="#fff" strokeWidth="1.5" />

                  {/* Labels */}
                  <text x="20" y="15" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">Factory</text>
                  <text x="100" y="15" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">Docks</text>
                  <text x="180" y="15" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">Ocean</text>
                  <text x="300" y="15" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">Delivery</text>

                  {/* Seller vs Buyer Legend */}
                  <text x="60" y="48" textAnchor="middle" fill="#3b82f6" fontSize="8" fontWeight="bold">Seller Paid</text>
                  <text x="260" y="48" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="bold">Buyer Paid</text>
                </svg>
              </div>

              {/* Status Footer */}
              <div className="relative z-10 flex justify-between items-center text-[9px] border-t border-slate-800 pt-1.5 text-slate-400">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#f43f5e] inline-block animate-pulse"></span>
                  Risk Handover Stage (Focal Point)
                </span>
                <span className="text-[8px] bg-blue-500/20 text-blue-300 px-1.5 py-0.5 rounded uppercase font-mono font-bold">
                  {selectedIncoterm.code} Active
                </span>
              </div>
            </div>

            {/* Custom Interactive responsibility diagram */}
            <div className="space-y-3 flex flex-col justify-center">
              <h4 className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">Shipment Responsibility Diagram</h4>
              <div className="space-y-1 text-[10px]">
                {/* Visual Bar Stages */}
                {[
                  { stage: '1. Export Packing / Factory', owner: 'Seller' },
                  { stage: '2. Inland Carriage (Origin)', owner: ['EXW'].includes(selectedIncoterm.code) ? 'Buyer' : 'Seller' },
                  { stage: '3. Board Vessel (Origin Port)', owner: ['EXW', 'FCA', 'FAS'].includes(selectedIncoterm.code) ? 'Buyer' : 'Seller' },
                  { stage: '4. International Ocean Freight', owner: ['EXW', 'FCA', 'FAS', 'FOB'].includes(selectedIncoterm.code) ? 'Buyer' : 'Seller' },
                  { stage: '5. Import Customs Duty', owner: ['DDP'].includes(selectedIncoterm.code) ? 'Seller' : 'Buyer' },
                ].map((stg, sidx) => (
                  <div key={sidx} className="flex items-center justify-between gap-2 p-1 py-0.5 rounded bg-white border border-slate-150">
                    <span className="font-medium text-slate-600 truncate">{stg.stage}</span>
                    <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold font-mono ${
                      stg.owner === 'Seller' ? 'bg-blue-50 text-blue-800' : 'bg-rose-50 text-rose-800'
                    }`}>
                      {stg.owner.toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Responsibilities */}
            <div className="space-y-4">
              <h4 className="font-bold text-slate-800 text-xs border-b border-blue-100 pb-2 flex items-center gap-2">
                <span className="text-[10px] px-2 py-0.5 rounded bg-blue-50 text-blue-800 font-mono">SELLER</span> Responsibilities
              </h4>
              <ul className="space-y-2">
                {selectedIncoterm.sellerResponsibility.map((res, i) => (
                  <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-650 shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-slate-800 text-xs border-b border-rose-100 pb-2 flex items-center gap-2">
                <span className="text-[10px] px-2 py-0.5 rounded bg-rose-50 text-rose-800 font-mono">BUYER</span> Responsibilities
              </h4>
              <ul className="space-y-2">
                {selectedIncoterm.buyerResponsibility.map((res, i) => (
                  <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#1d4ed8] shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Transfers of Risk & Cost */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
            <div className="p-4 bg-blue-50/40 rounded-lg space-y-1">
              <h5 className="font-bold text-slate-800 text-xs text-blue-900">⚡ Risk Transfer Point</h5>
              <p className="text-xs text-slate-600 leading-relaxed">{selectedIncoterm.riskTransfer}</p>
            </div>
            <div className="p-4 bg-sky-50/40 rounded-lg space-y-1">
              <h5 className="font-bold text-slate-800 text-xs text-sky-900">💵 Cost Responsibility</h5>
              <p className="text-xs text-slate-600 leading-relaxed">{selectedIncoterm.costResponsibility}</p>
            </div>
          </div>

          {/* Advantages & Disadvantages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="space-y-3">
              <h4 className="font-bold text-[#1d4ed8] text-xs flex items-center gap-1.5">
                👍 Key Advantages
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-500">
                {selectedIncoterm.advantages.map((adv, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-[#1d4ed8] font-bold">•</span>
                    <span>{adv}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-rose-850 text-xs flex items-center gap-1.5">
                ⚠️ Drawbacks / Disadvantages
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-500">
                {selectedIncoterm.disadvantages.map((dis, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-rose-600 font-bold">•</span>
                    <span>{dis}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Practical Example */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <h4 className="text-[11px] font-bold text-slate-705 uppercase tracking-wider">Practical Business Example</h4>
            <p className="text-xs text-slate-600 leading-relaxed">{selectedIncoterm.example}</p>
          </div>
        </div>

        {/* Rightside: Interactive recommendation simulator */}
        <div className="lg:col-span-4 bg-[#1e293b] text-white p-5 md:p-6 rounded-xl border border-slate-700 shadow-sm space-y-5">
          <div className="space-y-1">
            <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-widest">
              TRADE SIMULATOR
            </span>
            <h3 className="text-lg font-bold font-display text-white">Incoterms Generator</h3>
            <p className="text-xs text-slate-305">
              Answer simple questions regarding your supply model to see our recommended Incoterm protocol.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            {/* Q1 */}
            <div className="space-y-2">
              <label className="text-xs text-slate-300 font-semibold block">1. Transport Logistics Mode</label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  id="sim-trans-all"
                  onClick={() => setSimTransport('All')}
                  className={`px-3 py-2 rounded-[6px] border text-center font-medium transition cursor-pointer ${
                    simTransport === 'All' ? 'bg-[#1d4ed8] border-[#1d4ed8] text-white font-semibold' : 'bg-[#334155] border-slate-600 text-slate-300 hover:bg-slate-750'
                  }`}
                >
                  Any/Multimodal
                </button>
                <button
                  id="sim-trans-sea"
                  onClick={() => setSimTransport('Sea')}
                  className={`px-3 py-2 rounded-[6px] border text-center font-medium transition cursor-pointer ${
                    simTransport === 'Sea' ? 'bg-[#1d4ed8] border-[#1d4ed8] text-white font-semibold' : 'bg-[#334155] border-slate-600 text-slate-300 hover:bg-slate-750'
                  }`}
                >
                  Sea / Inland Only
                </button>
              </div>
            </div>

            {/* Q2 */}
            <div className="space-y-2">
              <label className="text-xs text-slate-300 font-semibold block">2. Where should the risk transfer?</label>
              <select
                id="sim-risk-limit"
                value={simRiskLimit}
                onChange={(e) => setSimRiskLimit(e.target.value as any)}
                className="w-full bg-[#334155] text-white border border-slate-600 rounded-[6px] px-3 py-2 text-xs focus:ring-1 focus:ring-blue-450 outline-none"
              >
                <option value="SellerMin">Factory gate (Seller has zero liability)</option>
                <option value="SellerLoaded">Delivered to first carrier node in origin country</option>
                <option value="SellerTrans">Positioned on board departing transport vessel</option>
                <option value="SellerDest">Delivered to final destination site</option>
              </select>
            </div>

            {/* Q3 */}
            {simRiskLimit === 'SellerDest' && (
              <div className="space-y-2">
                <label className="text-xs text-slate-300 font-semibold block">3. Who clears import customs duties?</label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    id="sim-tax-buyer"
                    onClick={() => setSimImportTaxBy('Buyer')}
                    className={`px-3 py-2 rounded-[6px] border text-center font-medium transition cursor-pointer ${
                      simImportTaxBy === 'Buyer' ? 'bg-[#1d4ed8] border-[#1d4ed8] text-white font-semibold' : 'bg-[#334155] border-slate-600 text-slate-300 hover:bg-slate-750'
                    }`}
                  >
                    Buyer (Importer)
                  </button>
                  <button
                    id="sim-tax-seller"
                    onClick={() => setSimImportTaxBy('Seller')}
                    className={`px-3 py-2 rounded-[6px] border text-center font-medium transition cursor-pointer ${
                      simImportTaxBy === 'Seller' ? 'bg-[#1d4ed8] border-[#1d4ed8] text-white font-semibold' : 'bg-[#334155] border-slate-600 text-slate-300 hover:bg-slate-750'
                    }`}
                  >
                    Seller (Exporter)
                  </button>
                </div>
              </div>
            )}

            {/* Q4 */}
            {simRiskLimit === 'SellerDest' && simImportTaxBy === 'Buyer' && (
              <div className="space-y-2">
                <label className="text-xs text-slate-300 font-semibold block">4. Who unloads arriving trucks?</label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    id="sim-unload-buyer"
                    onClick={() => setSimUnloadAtDestBy('Buyer')}
                    className={`px-3 py-2 rounded-[6px] border text-center font-medium transition cursor-pointer ${
                      simUnloadAtDestBy === 'Buyer' ? 'bg-[#1d4ed8] border-[#1d4ed8] text-white font-semibold' : 'bg-[#334155] border-slate-600 text-slate-300 hover:bg-slate-755'
                    }`}
                  >
                    Buyer (Default)
                  </button>
                  <button
                    id="sim-unload-seller"
                    onClick={() => setSimUnloadAtDestBy('Seller')}
                    className={`px-3 py-2 rounded-[6px] border text-center font-medium transition cursor-pointer ${
                      simUnloadAtDestBy === 'Seller' ? 'bg-[#1d4ed8] border-[#1d4ed8] text-white font-semibold' : 'bg-[#334155] border-slate-600 text-slate-300 hover:bg-slate-755'
                    }`}
                  >
                    Seller Unloads
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* SIMULATOR RECOMMENDATION PREVIEW PANEL */}
          <div className="p-4 bg-slate-800 rounded-lg border border-slate-700 space-y-2.5 pt-3">
            <span className="text-[9px] font-mono text-blue-400 font-bold uppercase tracking-wider block">
              RECOMMENDED REGULATION
            </span>
            <div className="flex items-center justify-between">
              <h4 className="text-2xl font-display font-black text-white">{recommendedTerm.code}</h4>
              <button
                id="view-sim-rec-btn"
                onClick={() => setSelectedTermCode(recommendedTerm.code)}
                className="px-3 py-1.5 rounded-[6px] bg-[#3b82f6] hover:bg-blue-405 text-white font-bold text-xs font-display flex items-center gap-1 cursor-pointer transition"
              >
                Inspect Details <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans pt-1">
              <strong>{recommendedTerm.name}</strong> - {recommendedTerm.meaning}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
