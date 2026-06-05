import React from 'react';
import { ArrowRight, Globe, Ship, Landmark, Shield, FileCheck, HelpCircle, CheckCircle, Search, ClipboardList } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface DashboardProps {
  onNavigate: (section: string) => void;
}

export function Dashboard({ onNavigate }: DashboardProps) {
  const { t } = useLanguage();
  const coreBenefits = [
    {
      icon: <Globe className="w-6 h-6 text-indigo-600" />,
      title: 'Global Revenue Multiplication',
      desc: 'Access massive foreign commercial markets with higher purchasing power, offsetting local seasonal market drops.'
    },
    {
      icon: <Ship className="w-6 h-6 text-teal-600" />,
      title: 'Unit Cost Optimization',
      desc: 'Increasing production capacity in domestic factories dramatically downsizes per-unit raw material and manufacturing costs.'
    },
    {
      icon: <Landmark className="w-6 h-6 text-amber-600" />,
      title: 'Foreign Exchange Earnings',
      desc: 'Amass assets directly in hard international currencies (USD, EUR) to protect corporate buffers against local inflation.'
    },
    {
      icon: <Shield className="w-6 h-6 text-rose-600" />,
      title: 'Risk Diversification',
      desc: 'Operating across multiple country jurisdictions insulates trade operations from localized recessions.'
    }
  ];

  const quickNavNodes = [
    { code: 'basics', title: 'Trade Basics', desc: 'Core differences & global workflows', color: 'border-l-4 border-indigo-500' },
    { code: 'incoterms', title: 'Incoterms 2020', desc: '11 global commercial transport rules', color: 'border-l-4 border-teal-500' },
    { code: 'documents', title: 'Documentation', desc: '12 compulsory custom forms & samples', color: 'border-l-4 border-amber-500' },
    { code: 'payments', title: 'Payment Terms', desc: 'Letters of Credit, Sight LC, D/P, wire risk indexes', color: 'border-l-4 border-rose-500' },
    { code: 'customs', title: 'Customs Clearance', desc: 'Border clearances, ICEGATE, and tax rates', color: 'border-l-4 border-blue-500' },
    { code: 'logistics', title: 'Freight & Logistics', desc: 'Containers, FCL/LCL, and sea/air guides', color: 'border-l-4 border-emerald-500' },
    { code: 'sourcing', title: 'Sourcing & Marketing', desc: 'Finding foreign buyers & tracking factories', color: 'border-l-4 border-violet-500' },
    { code: 'faqs', title: '100+ FAQ Center', desc: 'All trade questions answered instantly', color: 'border-l-4 border-orange-500' },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative rounded-xl bg-slate-900 overflow-hidden text-white shadow-lg border border-slate-800">
        <div className="absolute inset-0 opacity-20 select-none pointer-events-none overflow-hidden">
          <svg className="w-full h-full text-blue-500/10" viewBox="0 0 1000 400" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dashboard-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dashboard-grid)" />
            <path d="M100,100 Q250,50 400,200 T700,100 T900,300" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2" strokeDasharray="5,5" fill="none" />
            <path d="M150,300 Q350,150 550,250 T850,150" stroke="rgba(20, 184, 166, 0.3)" strokeWidth="2" strokeDasharray="5,5" fill="none" />
            <path d="M200,80 Q450,280 700,80" stroke="rgba(244, 63, 94, 0.2)" strokeWidth="2" strokeDasharray="10,5" fill="none" />
            
            <circle cx="100" cy="100" r="5" fill="#3b82f6" opacity="0.6" />
            <circle cx="400" cy="200" r="7" fill="#14b8a6" opacity="0.6" />
            <circle cx="700" cy="100" r="6" fill="#f43f5e" opacity="0.5" />
            <circle cx="900" cy="300" r="5" fill="#a855f7" opacity="0.6" />
            <circle cx="150" cy="300" r="4" fill="#3b82f6" opacity="0.5" />
            <circle cx="550" cy="250" r="8" fill="#eab308" opacity="0.6" />
            <circle cx="850" cy="150" r="5" fill="#14b8a6" opacity="0.6" />

            <g transform="translate(480, 140) scale(0.65)" opacity="0.45" className="text-blue-400">
              <path d="M20,60 L240,60 L220,110 L40,110 Z" fill="currentColor" />
              <rect x="50" y="20" width="30" height="35" rx="2" fill="currentColor" />
              <rect x="90" y="10" width="40" height="45" rx="2" fill="currentColor" />
              <rect x="140" y="25" width="35" height="30" rx="2" fill="currentColor" />
              <rect x="180" y="40" width="30" height="15" rx="2" fill="currentColor" />
              <path d="M30,55 L230,55" stroke="currentColor" strokeWidth="2" />
            </g>
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent"></div>
        
        <div className="relative p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-405 text-xs font-semibold uppercase tracking-wider border border-blue-500/30">
              <Globe className="w-3.5 h-3.5" /> {t('Global Trade Reference Portal', 'वैश्विक व्यापार संदर्भ पोर्टल')}
            </div>
            <h1 className="text-2xl md:text-4xl font-extrabold font-display tracking-tight leading-tight">
              Master the Mechanics of International Trade & Logistics
            </h1>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed max-w-xl">
              Welcome to the ultimate digital academic library. Learn everything from customs clearance codes and cargo logistics, through to 11 Incoterms 2020 standards, secure Letters of Credit, and importing/exporting rules. Designed for trade entrepreneurs, logistics experts, and students globally.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <button 
                id="get-started-btn"
                onClick={() => onNavigate('basics')}
                className="px-5 py-2.5 text-xs rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold transition duration-200 shadow-md flex items-center gap-2 cursor-pointer border-none"
              >
                Start Learning <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button 
                id="view-resources-btn"
                onClick={() => onNavigate('checklists')}
                className="px-5 py-2.5 text-xs rounded-lg bg-slate-850 hover:bg-slate-800 text-slate-200 font-semibold transition duration-200 border border-slate-700 flex items-center gap-2 cursor-pointer"
              >
                <ClipboardList className="w-3.5 h-3.5 text-blue-500" /> Action Checklists
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-5 hidden lg:block bg-slate-850/90 rounded-xl p-5 border border-slate-700 backdrop-blur-xs space-y-4">
            <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest block">Featured Hub Insights</span>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex gap-2.5 items-start">
                <span className="text-emerald-400 font-bold shrink-0">✓</span>
                <p><strong>Interactive Infographic Roadmaps</strong>: Standard 9-step export pathways fully decoded with layouts.</p>
              </div>
              <div className="flex gap-2.5 items-start">
                <span className="text-emerald-400 font-bold shrink-0">✓</span>
                <p><strong>Real-world Case Documents</strong>: Check real-world Bill of Lading & Commercial Invoice templates.</p>
              </div>
              <div className="flex gap-2.5 items-start">
                <span className="text-emerald-400 font-bold shrink-0">✓</span>
                <p><strong>Container Load Maximizer</strong>: Standard cargo dimensions for 20FT, 40FT & High-Cubes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Block */}
      <section className="space-y-4">
        <div className="text-left space-y-1">
          <h2 className="text-xl md:text-2xl font-bold font-display text-slate-900">Why Engage in International Trade?</h2>
          <p className="text-xs text-slate-500">Expanding beyond domestic borders is the premier vehicle to trigger scalable exponential business growth.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {coreBenefits.map((b, i) => (
            <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition duration-250 flex flex-col justify-between space-y-4">
              <div className="p-2 bg-slate-50 rounded-lg w-fit">{b.icon}</div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-800 font-display text-sm">{b.title}</h3>
                <p className="text-[11px] text-slate-500 leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Navigation Bento Grid */}
      <section className="space-y-4">
        <h2 className="text-lg md:text-xl font-bold font-display text-slate-900 border-l-4 border-[#1d4ed8] pl-2.5">Explore Key Knowledge Verticals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickNavNodes.map((n) => (
            <button
              id={`nav-node-${n.code}`}
              key={n.code}
              onClick={() => onNavigate(n.code)}
              className={`bg-white p-4 rounded-xl border border-slate-250 text-left hover:border-slate-350 hover:shadow-sm transition duration-200 flex flex-col justify-between space-y-5 ${n.color} cursor-pointer`}
            >
              <div>
                <h3 className="font-bold text-slate-800 font-display text-sm">{n.title}</h3>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">{n.desc}</p>
              </div>
              <span className="text-[#1d4ed8] text-[11px] font-semibold inline-flex items-center gap-1">
                Access Library <ArrowRight className="w-3 h-3" />
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Journeys Split Screen Container */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Export Journey */}
        <div className="bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-xs space-y-4">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-blue-50 text-blue-700 text-[10px] font-bold rounded-full">
            🛫 EXPORT ROADMAP
          </div>
          <h2 className="text-lg md:text-xl font-bold font-display text-slate-900">The 10-Step Export Journey</h2>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            The standard pathway of exporting commercial cargo, from initial company registration through packing, customs, loading, and banking document clearance.
          </p>
          <div className="space-y-3 pt-1">
            {[
              { id: '1-3', title: 'Legalities & Sourcing', desc: 'Secure company licenses, get digital Importer-Exporter Codes (IEC), and negotiate physical supply contracts with domestic factories.' },
              { id: '4-6', title: 'Contracting & Packaging', desc: 'Sign sales contracts under Incoterms, lock in Letters of Credit, wrap products in ISPM-15 heat-treated wood pallets.' },
              { id: '7-9', title: 'Logistics & Customs Clear', desc: 'Haul cargo containers to departure docks. Custom Brokers (CHAs) file Shipping Bills on ICEGATE to trigger official Let Export Orders.' },
              { id: '10', title: 'Document Present & Bank Cash', desc: 'Present clean Bills of Lading and commercial invoices to banks to claim secure trade cash immediately.' }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-3 p-3 rounded-lg hover:bg-slate-50 transition border border-transparent hover:border-slate-100">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-800 flex items-center justify-center font-bold font-mono text-xs shrink-0">
                  {step.id}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 text-xs">{step.title}</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Import Journey */}
        <div className="bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-xs space-y-4">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-blue-50 text-blue-700 text-[10px] font-bold rounded-full">
            🛬 IMPORT ROADMAP
          </div>
          <h2 className="text-lg md:text-xl font-bold font-display text-slate-900">The 10-Step Import Journey</h2>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            The sequential logistics flow to source merchandise safely overseas and navigate customs tax checks to unload at local warehouse nodes.
          </p>
          <div className="space-y-3 pt-1">
            {[
              { id: '1-3', title: 'Feasibility & Global Sourcing', desc: 'Map HS code tax rates, audit overseas factory plants, obtain preliminary Proforma Invoice quotations.' },
              { id: '4-6', title: 'Finance Setup & Cargo Pickup', desc: 'Open Letters of Credit to commit bank collateral, contract sea freight container cargo with ocean carriers.' },
              { id: '7-9', title: 'Customs Declarations & Duties', desc: 'Upon container arrival at home ports, file the Bill of Entry form on custom systems, settle duty taxes (BCD, IGST).' },
              { id: '10', title: 'Out of Charge & Inland Delivery', desc: 'Pass physical custom scans to unlock the legal "Out of Charge" (OOC), letting local trucks haul the container to warehouses.' }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-3 p-3 rounded-lg hover:bg-slate-50 transition border border-transparent hover:border-slate-100">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-800 flex items-center justify-center font-bold font-mono text-xs shrink-0">
                  {step.id}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 text-xs">{step.title}</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
