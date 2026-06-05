import React, { useState } from 'react';
import { tradeBasics } from '../data/basics';
import { HelpCircle, ChevronRight, TrendingUp, RefreshCw, Send, PackageOpen } from 'lucide-react';

export function CoreBasics() {
  const [activeTab, setActiveTab] = useState<'basics' | 'export_flow' | 'import_flow' | 'workflow'>('basics');

  const stepColors = [
    'bg-indigo-50 border-indigo-200 text-indigo-700',
    'bg-teal-50 border-teal-200 text-teal-700',
    'bg-amber-50 border-amber-200 text-amber-700',
    'bg-pink-50 border-pink-200 text-pink-700',
    'bg-blue-50 border-blue-200 text-blue-700'
  ];

  return (
    <div className="space-y-6 bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-xs">
      {/* Header */}
      <div className="space-y-1">
        <h2 className="text-xl md:text-2xl font-bold font-display text-slate-900">Export Import Basics</h2>
        <p className="text-[11px] text-slate-500">
          The structural theoretical foundations of global business, customs, and transaction workflows.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap border-b border-slate-200 gap-1 pb-1">
        <button
          id="btn-tab-basics"
          onClick={() => setActiveTab('basics')}
          className={`px-3 py-2 font-medium text-xs rounded-t-md transition duration-200 cursor-pointer ${
            activeTab === 'basics' ? 'bg-blue-50 text-[#1d4ed8] border-b-2 border-[#1d4ed8] font-semibold' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          What is Export/Import?
        </button>
        <button
          id="btn-tab-export"
          onClick={() => setActiveTab('export_flow')}
          className={`px-3 py-2 font-medium text-xs rounded-t-md transition duration-200 cursor-pointer ${
            activeTab === 'export_flow' ? 'bg-blue-50 text-[#1d4ed8] border-b-2 border-[#1d4ed8] font-semibold' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          Export Process Details
        </button>
        <button
          id="btn-tab-import"
          onClick={() => setActiveTab('import_flow')}
          className={`px-3 py-2 font-medium text-xs rounded-t-md transition duration-200 cursor-pointer ${
            activeTab === 'import_flow' ? 'bg-blue-50 text-[#1d4ed8] border-b-2 border-[#1d4ed8] font-semibold' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          Import Process Details
        </button>
        <button
          id="btn-tab-workflow"
          onClick={() => setActiveTab('workflow')}
          className={`px-3 py-2 font-medium text-xs rounded-t-md transition duration-200 cursor-pointer ${
            activeTab === 'workflow' ? 'bg-blue-50 text-[#1d4ed8] border-b-2 border-[#1d4ed8] font-semibold' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          International Trade Workflow
        </button>
      </div>

      {/* Tab Content 1: Basics */}
      {activeTab === 'basics' && (
        <div className="space-y-8 animate-fade-in">
          {/* Custom Connectivity Matrix Graphic (Replacing Unsplash image) */}
          <div className="relative rounded-xl overflow-hidden h-48 md:h-64 bg-slate-950 border border-slate-800 flex items-center justify-between p-6 md:p-10 text-white shadow-xs">
            {/* Background Grid Accent */}
            <div className="absolute inset-0 opacity-20 pointer-events-none select-none">
              <svg className="w-full h-full text-indigo-500/10" viewBox="0 0 1000 300" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="basics-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#basics-grid)" />
              </svg>
            </div>

            <div className="relative z-10 space-y-2 md:space-y-4 max-w-lg text-left">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-blue-500/20 text-blue-400 border border-blue-500/30 font-mono text-[10px] font-bold rounded uppercase tracking-wider">
                NETWORK LEDGER ACTIVATED
              </span>
              <h4 className="font-extrabold text-white text-lg md:text-xl font-display tracking-tight leading-tight">
                Global Trade Connectivity Matrix
              </h4>
              <p className="text-[11px] text-slate-350 leading-relaxed font-normal">
                An interactive visualization of ocean cargo vectors, aviation transport grids, and central wire systems driving modern industrial imports and exports securely.
              </p>
            </div>

            {/* Stylized Node Network Illustration */}
            <div className="relative z-10 shrink-0 hidden md:block w-80 h-36">
              <svg viewBox="0 0 300 130" className="w-full h-full text-blue-500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 30,65 Q 150,5 270,65" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M 30,65 Q 150,125 270,65" stroke="#10b981" strokeWidth="1.5" strokeDasharray="2 2" />
                <path d="M 30,65 L 270,65" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />

                <circle cx="30" cy="65" r="8" fill="#1e1b4b" stroke="#3b82f6" strokeWidth="2" />
                <circle cx="30" cy="65" r="3" fill="#3b82f6" />
                <text x="30" y="85" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">NODE A</text>

                <circle cx="150" cy="35" r="8" fill="#1e1b4b" stroke="#3b82f6" strokeWidth="2" />
                <circle cx="150" cy="35" r="3" fill="#a855f7" />
                
                <circle cx="270" cy="65" r="8" fill="#1e1b4b" stroke="#10b981" strokeWidth="2" />
                <circle cx="270" cy="65" r="3" fill="#10b981" />
                <text x="270" y="85" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">NODE B</text>
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-4">
              <div className="relative h-36 rounded-lg overflow-hidden mb-2 bg-slate-950 border border-slate-800 p-4 flex flex-col justify-between text-white shadow-2xs font-mono">
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]"></div>
                <div className="relative z-10 flex justify-between items-center text-[9px]">
                  <span className="text-blue-400 font-bold uppercase tracking-wider">OUTBOUND COMPLIANCE</span>
                  <span className="text-slate-400">LOADING</span>
                </div>
                <div className="relative z-10 text-[10px] text-slate-355 my-auto text-left leading-relaxed font-sans font-normal">
                  Cargo departure vector mapping and custom harbor stackings before boarding global vessels.
                </div>
                <span className="relative z-10 text-[9px] font-mono tracking-wider font-bold bg-[#1d4ed8] text-white px-2 py-0.5 rounded w-fit uppercase">
                  OUTGOING VESSEL LOADING
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Send className="w-5 h-5 text-indigo-600" />
                <h3 className="text-lg font-bold font-display text-slate-800">What is Export?</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{tradeBasics.whatIsExport}</p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-4">
              <div className="relative h-36 rounded-lg overflow-hidden mb-2 bg-slate-950 border border-slate-800 p-4 flex flex-col justify-between text-white shadow-2xs font-mono">
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]"></div>
                <div className="relative z-10 flex justify-between items-center text-[9px]">
                  <span className="text-teal-400 font-bold uppercase tracking-wider">INBOUND OFFTAKE</span>
                  <span className="text-slate-400">UNLOADING</span>
                </div>
                <div className="relative z-10 text-[10px] text-slate-355 my-auto text-left leading-relaxed font-sans font-normal">
                  Inbound quarantine clearance checks, custom duty rate structures calculations and dry-terminal offloading.
                </div>
                <span className="relative z-10 text-[9px] font-mono tracking-wider font-bold bg-[#0d9488] text-white px-2 py-0.5 rounded w-fit uppercase">
                  INCOMING FREIGHT HARBOR
                </span>
              </div>
              <div className="flex items-center gap-2">
                <PackageOpen className="w-5 h-5 text-teal-600" />
                <h3 className="text-lg font-bold font-display text-slate-800">What is Import?</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{tradeBasics.whatIsImport}</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold font-display text-slate-800 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-amber-500" /> Key Differentiating Factors
            </h3>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="p-3.5 font-semibold text-slate-700 w-1/4">Comparison Factor</th>
                    <th className="p-3.5 font-semibold text-indigo-700 w-3/8">Export Operations</th>
                    <th className="p-3.5 font-semibold text-teal-700 w-3/8">Import Operations</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {tradeBasics.differenceTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition">
                      <td className="p-3.5 font-medium text-slate-800 bg-slate-50/30">{row.factor}</td>
                      <td className="p-3.5 text-slate-600 leading-relaxed">{row.export}</td>
                      <td className="p-3.5 text-slate-600 leading-relaxed">{row.import}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Tab Content 2: Export Flow */}
      {activeTab === 'export_flow' && (
        <div className="space-y-6 animate-fade-in">
          <div className="p-4 bg-amber-50 border border-amber-100 text-amber-900 rounded-xl text-xs leading-relaxed">
            💡 <strong>Pro-Tip for exporters:</strong> Never manufacturing high volumes before obtaining a confirmed Letter of Credit (LC) from the buyer\'s bank, backing your production expenses.
          </div>
          <div className="space-y-4">
            {tradeBasics.exportProcess.map((item, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-5 rounded-2xl border border-slate-150 hover:border-slate-300 hover:shadow-xs transition bg-slate-50/40"
              >
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center font-bold font-mono text-sm shrink-0 ${stepColors[idx % stepColors.length]}`}>
                  {item.step}
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-800 text-sm font-display">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab Content 3: Import Flow */}
      {activeTab === 'import_flow' && (
        <div className="space-y-6 animate-fade-in">
          <div className="p-4 bg-teal-50 border border-teal-105 text-teal-900 rounded-xl text-xs leading-relaxed">
            💡 <strong>Pro-Tip for importers:</strong> Request that the exporter provide transit inspection certificates from SGS or Bureau Veritas to avoid getting sub-par components.
          </div>
          <div className="space-y-4">
            {tradeBasics.importProcess.map((item, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-5 rounded-2xl border border-slate-150 hover:border-slate-300 hover:shadow-xs transition bg-slate-50/40"
              >
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center font-bold font-mono text-sm shrink-0 ${stepColors[idx % stepColors.length]}`}>
                  {item.step}
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-800 text-sm font-display">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab Content 4: International Trade Workflow */}
      {activeTab === 'workflow' && (
        <div className="space-y-6 animate-fade-in">
          <div className="p-6 bg-slate-50/60 rounded-2xl border border-slate-200">
            <h3 className="text-base font-bold text-slate-800 font-display mb-4">Functional Workflow Cycle</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              When international trade happens, there is a tripartite workflow that runs simultaneously across different entities:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
              <div className="bg-white p-5 rounded-xl border border-slate-150 space-y-2">
                <span className="text-lg">💰</span>
                <h4 className="font-semibold text-slate-800 font-display text-sm">Financial Flow</h4>
                <p className="text-slate-500 leading-relaxed">
                  Consists of the exchange of quotes, proforma, funding reserves under Letters of Credit, currency swaps, and bank wire clearings.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-150 space-y-2">
                <span className="text-lg">📄</span>
                <h4 className="font-semibold text-slate-800 font-display text-sm">Information/Doc Flow</h4>
                <p className="text-slate-500 leading-relaxed">
                  Consists of bills of sale, custom declarations, Phytosanitary clearances, ocean container Bill of Ladings, and certificates of origin.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-150 space-y-2">
                <span className="text-lg">📦</span>
                <h4 className="font-semibold text-slate-800 font-display text-sm">Goods/Physical Flow</h4>
                <p className="text-slate-500 leading-relaxed">
                  Includes localized cargo trucking (drayage), storage inside dry ports, deep-sea shipping, and terminal warehouse distributions.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
