import React, { useState } from 'react';
import { hsCodeData } from '../data/basics';
import { Search, Compass, ShieldAlert, CheckCircle, Eye, Info } from 'lucide-react';

export function HSCodeClassification() {
  const [activeItem, setActiveItem] = useState<string>('coffee');

  // Interactive sample product viewer for HS digits
  const demoSamples: Record<string, { name: string; hscode: string; breakdown: { label: string; digits: string; val: string }[] }> = {
    coffee: {
      name: 'Roasted Premium Coffee Beans',
      hscode: '0901.21.00',
      breakdown: [
        { label: 'Chapter (Broad type)', digits: '09', val: 'Coffee, Tea, Mate, and Spices.' },
        { label: 'Heading (Sub-category)', digits: '01', val: 'Coffee, roasted or decaffeinated.' },
        { label: 'Subheading (Global Standard)', digits: '21', val: 'Roasted coffee, not decaffeinated.' },
        { label: 'National Tariff Item (Statistical)', digits: '00', val: 'National administrative statistical count.' }
      ]
    },
    notebook: {
      name: 'Electronic Notebook Laptop PC',
      hscode: '8471.30.10',
      breakdown: [
        { label: 'Chapter (Broad type)', digits: '84', val: 'Nuclear reactors, boilers, machinery and mechanical appliances.' },
        { label: 'Heading (Sub-category)', digits: '71', val: 'Automatic data processing machines (Laptops).' },
        { label: 'Subheading (Global Standard)', digits: '30', val: 'Portable automatic data processing machines.' },
        { label: 'National Tariff Item (Statistical)', digits: '10', val: 'Personal computers weighing under 10 kgs.' }
      ]
    },
    wood: {
      name: 'Raw Sawn Timber Planks',
      hscode: '4407.11.00',
      breakdown: [
        { label: 'Chapter (Broad type)', digits: '44', val: 'Wood and articles of wood; wood charcoal.' },
        { label: 'Heading (Sub-category)', digits: '07', val: 'Wood sawn or chipped lengthwise, sliced over 6mm.' },
        { label: 'Subheading (Global Standard)', digits: '11', val: 'Coniferous sawn planks (Pine, Fir).' },
        { label: 'National Tariff Item (Statistical)', digits: '00', val: 'Coniferous structural timber.' }
      ]
    }
  };

  const sample = demoSamples[activeItem];

  return (
    <div className="space-y-6 bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm">
      <div className="space-y-1">
        <h2 className="text-xl md:text-2xl font-bold font-display text-slate-900">HS Code Classification Guide</h2>
        <p className="text-[11px] text-slate-505 max-w-2xl leading-relaxed">
          The Harmonized System (HS) classifications standardizes border descriptions. Learn HS structures, search indices, and test our digit tracker below.
        </p>
      </div>

      {/* Customs Classification Visual Hub */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-slate-50 p-4 rounded-xl border border-slate-150">
        <div className="md:col-span-5 relative h-40 rounded-lg overflow-hidden border bg-slate-950 border-slate-800 p-4 flex flex-col justify-between text-white font-mono">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          <div className="relative z-10 flex justify-between items-center text-[10px]">
            <span className="text-blue-400 font-bold tracking-widest">HS SYSTEM MATRIX</span>
            <span className="text-slate-400 text-[9px]">V.1.0</span>
          </div>

          <div className="relative z-10 space-y-1.5 my-auto">
            <div className="flex gap-1 text-center justify-center font-bold text-xs">
              <span className="px-2 py-1 bg-blue-600/30 border border-blue-500/40 rounded text-blue-400">09</span>
              <span className="px-2 py-1 bg-indigo-600/30 border border-indigo-500/40 rounded text-indigo-400">01</span>
              <span className="px-2 py-1 bg-teal-600/30 border border-teal-500/40 rounded text-teal-400">21</span>
              <span className="px-2 py-1 bg-amber-600/30 border border-amber-500/40 rounded text-amber-400">00</span>
            </div>
            <p className="text-[9px] text-center text-slate-400 font-sans tracking-wide">
              Global Digit Harmonization Index
            </p>
          </div>

          <span className="relative z-10 text-[9px] font-mono tracking-wider font-bold bg-blue-600 text-white px-2 py-0.5 rounded w-fit self-center uppercase">
            CLASSIFICATION SYSTEM
          </span>
        </div>
        <div className="md:col-span-7 space-y-1">
          <h3 className="font-bold text-slate-800 text-sm font-display flex items-center gap-1.5">
            <Info className="w-4 h-4 text-blue-600" /> HS Digit System Matrix (Harmonized Tariff Schedule)
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            HS nomenclature maps chemical properties, textile weaves, and components. Over 200 countries use these standard 6-digit roots to calculate import taxes (IGST, BCD) and manage global border safety protocols.
          </p>
        </div>
      </div>

      {/* Core definition */}
      <div className="p-5 bg-slate-50 border border-slate-150 rounded-2xl flex items-start gap-4">
        <span className="text-2xl mt-1 shrink-0">🔢</span>
        <div className="space-y-1">
          <h3 className="font-bold text-slate-800 text-base font-display">What is an HS Code?</h3>
          <p className="text-xs text-slate-600 leading-relaxed">{hsCodeData.whatIs}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left column: Digit structure tracker & details */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4">
            <h4 className="font-bold text-slate-800 text-sm font-display flex items-center gap-2">
              <Compass className="w-5 h-5 text-indigo-600" /> Structure of custom HS digits
            </h4>
            
            <div className="space-y-3 font-sans">
              {hsCodeData.structure.map((item, idx) => (
                <div key={idx} className="p-4 bg-slate-50 border border-slate-100/80 rounded-xl space-y-1 hover:border-slate-350 transition">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-indigo-700 font-mono">{item.digits}</span>
                    <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-200/50 px-2 py-0.5 rounded uppercase">
                      {item.meaning}
                    </span>
                  </div>
                  <p className="text-xs text-slate-550 leading-relaxed pt-1.5">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column: Interactive HS Digit Explorer Simulator */}
        <div className="lg:col-span-5 bg-slate-900 text-white p-6 md:p-8 rounded-3xl border border-slate-850 shadow-xl space-y-6">
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-teal-400 font-bold uppercase tracking-widest block">EXPLORER WIDGET</span>
            <h4 className="text-lg font-bold font-display text-white">HS Code Digit Breakdown</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Select one of our sample commodities to inspect how custom registries structure its 8-digit international commodity classification:
            </p>
          </div>

          {/* Selector pills */}
          <div className="flex bg-slate-800 p-1.5 rounded-xl gap-1">
            <button
              id="hscode-pills-coffee"
              onClick={() => setActiveItem('coffee')}
              className={`w-full text-center py-2 text-xs rounded-lg transition font-medium cursor-pointer ${
                activeItem === 'coffee' ? 'bg-indigo-600 text-white font-semibold' : 'text-slate-300 hover:text-white'
              }`}
            >
              ☕ Coffee
            </button>
            <button
              id="hscode-pills-notebook"
              onClick={() => setActiveItem('notebook')}
              className={`w-full text-center py-2 text-xs rounded-lg transition font-medium cursor-pointer ${
                activeItem === 'notebook' ? 'bg-indigo-600 text-white font-semibold' : 'text-slate-300 hover:text-white'
              }`}
            >
              💻 Laptop
            </button>
            <button
              id="hscode-pills-wood"
              onClick={() => setActiveItem('wood')}
              className={`w-full text-center py-2 text-xs rounded-lg transition font-medium cursor-pointer ${
                activeItem === 'wood' ? 'bg-indigo-600 text-white font-semibold' : 'text-slate-300 hover:text-white'
              }`}
            >
              🪵 Timber
            </button>
          </div>

          {/* Output structure rendering */}
          <div className="space-y-4 pt-2">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <span className="text-xs font-semibold text-slate-400">Commodity Selected:</span>
              <span className="text-xs font-bold text-white font-sans">{sample.name}</span>
            </div>

            <div className="p-3 bg-slate-800 border border-slate-700 rounded-xl text-center space-y-0.5">
              <span className="text-[9px] font-mono text-slate-400 font-bold block uppercase tracking-wide">Standard Code</span>
              <span className="text-2xl font-mono font-black text-teal-400 tracking-widest">{sample.hscode}</span>
            </div>

            {/* Breakdown steps mapping */}
            <div className="space-y-3 font-mono">
              {sample.breakdown.map((b, i) => (
                <div key={i} className="flex gap-3 text-[10px]">
                  <span className="bg-slate-800 px-2.0 py-0.5 rounded text-teal-400 font-bold shrink-0">{b.digits}</span>
                  <div className="space-y-0.5 text-slate-300">
                    <span className="font-bold text-slate-400 block font-sans">{b.label}</span>
                    <p className="text-slate-300 leading-tight font-sans text-[11px]">{b.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-slate-100">
        {/* Finding Steps */}
        <div className="space-y-3 text-xs leading-relaxed text-slate-655 font-sans">
          <h4 className="font-bold text-slate-800 font-display text-base">🔍 Four Steps to find your HS code</h4>
          <ul className="space-y-2">
            {hsCodeData.howToFind.map((step, idx) => (
              <li key={idx} className="flex items-start gap-2 leading-relaxed">
                <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Importance / Reasons */}
        <div className="space-y-3 text-xs leading-relaxed text-slate-655 font-sans">
          <h4 className="font-bold text-slate-850 font-display text-base">⚠️ Critical Importance of Correct Classification</h4>
          <ul className="space-y-2">
            {hsCodeData.importance.map((imp, idx) => (
              <li key={idx} className="flex items-start gap-2 leading-relaxed">
                <ShieldAlert className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                <span>{imp}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
