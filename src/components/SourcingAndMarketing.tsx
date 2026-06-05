import React, { useState } from 'react';
import { productResearchData, marketingData } from '../data/basics';
import { buyerFindingGuide } from '../data/buyers';
import { Search, Compass, Users, UserCheck, ShieldClose, CheckCircle, ExternalLink, Mail, Award, MapPin } from 'lucide-react';

export function SourcingAndMarketing() {
  const [activeTab, setActiveTab] = useState<'buyers' | 'suppliers' | 'market_research' | 'marketing'>('buyers');

  // Major sourcing portals from data/buyers.ts
  const portals = [
    { name: 'Alibaba.com', type: 'B2B Directory', desc: 'The largest B2B directory connecting global buyers with global fabricators.', url: 'https://www.alibaba.com' },
    { name: 'GlobalSources.com', type: 'B2B Directory', desc: 'Specialist catalog for high-quality components, consumer electronics, and verified suppliers.', url: 'https://www.globalsources.com' },
    { name: 'TradeMap.org (ITC)', type: 'Government', desc: 'The International Trade Centre\'s comprehensive portal showing historical custom statistics and importer directories.', url: 'https://www.trademap.org' },
    { name: 'Canton Fair Hub', type: 'Trade Fair', desc: 'Held bi-annually in Guangzhou, China. The peak physical sourcing event worldwide.', url: 'https://www.cantonfair.org.cn' },
    { name: 'FIEO B2B Directory', type: 'Council', desc: 'The Federation of Indian Export Organisations list of verified business directories.', url: 'https://www.fieo.org' },
  ];

  return (
    <div className="space-y-6 bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center gap-4 border-b border-slate-200 pb-4">
        <div className="space-y-1">
          <h2 className="text-xl md:text-2xl font-bold font-display text-slate-900">Buyer & Supplier Finding Directory</h2>
          <p className="text-[11px] text-slate-500">
            Learn product selection matrix calculations, target country rankings, supplier audits, and B2B global marketing.
          </p>
        </div>
        
        {/* Horizontal tabs */}
        <div className="flex flex-wrap gap-1 p-1 bg-slate-50 rounded-lg border border-slate-150">
          <button
            id="btn-sourcing-buyers"
            onClick={() => setActiveTab('buyers')}
            className={`px-3 py-1.5 rounded-[6px] text-xs font-semibold cursor-pointer transition ${
              activeTab === 'buyers' ? 'bg-[#1d4ed8] text-white shadow-xs font-bold' : 'text-slate-600 hover:text-slate-905 hover:bg-[#e2e8f0]'
            }`}
          >
            Finding Buyers
          </button>
          <button
            id="btn-sourcing-suppliers"
            onClick={() => setActiveTab('suppliers')}
            className={`px-3 py-1.5 rounded-[6px] text-xs font-semibold cursor-pointer transition ${
              activeTab === 'suppliers' ? 'bg-[#1d4ed8] text-white shadow-xs font-bold' : 'text-slate-600 hover:text-slate-905 hover:bg-[#e2e8f0]'
            }`}
          >
            Finding Suppliers
          </button>
          <button
            id="btn-sourcing-research"
            onClick={() => setActiveTab('market_research')}
            className={`px-3 py-1.5 rounded-[6px] text-xs font-semibold cursor-pointer transition ${
              activeTab === 'market_research' ? 'bg-[#1d4ed8] text-white shadow-xs font-bold' : 'text-slate-600 hover:text-slate-905 hover:bg-[#e2e8f0]'
            }`}
          >
            Product Research
          </button>
          <button
            id="btn-sourcing-marketing"
            onClick={() => setActiveTab('marketing')}
            className={`px-3 py-1.5 rounded-[6px] text-xs font-semibold cursor-pointer transition ${
              activeTab === 'marketing' ? 'bg-[#1d4ed8] text-white shadow-xs font-bold' : 'text-slate-600 hover:text-slate-905 hover:bg-[#e2e8f0]'
            }`}
          >
            B2B Marketing
          </button>
        </div>
      </div>

      {/* Tab: Buyers */}
      {activeTab === 'buyers' && (
        <div className="space-y-8 animate-fade-in">
          {/* Custom Matchmaking Sourcing Header Banners */}
          <div className="relative rounded-xl overflow-hidden h-40 bg-indigo-950 border border-indigo-900 flex items-center justify-between p-6 text-white shadow-2xs">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
            <div className="relative z-10 space-y-1.5 max-w-lg text-left">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-indigo-500/20 text-indigo-300 font-mono text-[9px] font-bold rounded uppercase">
                <Users className="w-3 h-3" /> MATCHMAKING
              </span>
              <h3 className="text-normal md:text-base font-bold font-display tracking-tight text-white leading-tight">
                B2B Trade Matchmaking Conferences & Exporter Networking Sessions
              </h3>
              <p className="text-[11px] text-indigo-200 font-normal leading-relaxed">
                Strategic buyer lead acquisition and custom corporate networks to capture stable high-revenue clients globally.
              </p>
            </div>
            <div className="relative z-10 hidden sm:block shrink-0 opacity-25">
              <Users className="w-16 h-16 text-indigo-400" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <h3 className="font-bold text-slate-800 text-lg font-display flex items-center gap-2">
                <Users className="w-5 h-5 text-indigo-600" /> Five Strategies to Find International Buyers
              </h3>
              <div className="space-y-4 font-sans">
                {buyerFindingGuide.methods.map((meth, i) => (
                  <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1.5 hover:shadow-2xs hover:border-slate-200 transition">
                    <h4 className="font-semibold text-slate-800 text-xs flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-indigo-50 text-indigo-700 text-[10px] font-mono font-bold flex items-center justify-center">
                        {(i+1)}
                      </span>
                      {meth.channel}
                    </h4>
                    <p className="text-xs text-slate-600 pl-7 leading-relaxed">{meth.strategy}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sourcing directories list */}
            <div className="space-y-4 bg-slate-50/50 p-6 rounded-2xl border border-slate-250">
              <h3 className="font-bold text-slate-800 text-sm font-display uppercase tracking-wider block">
                ⭐ Major Sourcing Directories & Trade Portals
              </h3>
              <p className="text-xs text-slate-500 leading-normal font-sans">
                Below are the central digital platforms trading companies utilize to publish product listings or collect verified lists of active corporate buyers:
              </p>
              
              <div className="space-y-4 pt-2">
                {portals.map((port, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-slate-205 space-y-1 hover:shadow-2xs transition">
                    <div className="flex justify-between items-center">
                      <h4 className="font-bold text-slate-800 text-xs font-display">{port.name}</h4>
                      <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded uppercase font-mono">
                        {port.type}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-sans leading-relaxed pt-1.5">{port.desc}</p>
                    <span className="text-[10px] text-slate-400 font-mono italic block pt-1 select-all">{port.url}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab: Suppliers */}
      {activeTab === 'suppliers' && (
        <div className="space-y-8 animate-fade-in">
          {/* Custom Supplier Audit Header Banners */}
          <div className="relative rounded-xl overflow-hidden h-40 bg-teal-950 border border-teal-900 flex items-center justify-between p-6 text-white shadow-2xs">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
            <div className="relative z-10 space-y-1.5 max-w-lg text-left">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-teal-500/20 text-teal-300 font-mono text-[9px] font-bold rounded uppercase">
                <Compass className="w-3 h-3" /> MANUFACTURING AUDIT
              </span>
              <h3 className="text-normal md:text-base font-bold font-display tracking-tight text-white leading-tight">
                On-site Factory Quality Control Auditing & Manufacturing Verification
              </h3>
              <p className="text-[11px] text-teal-200 font-normal leading-relaxed">
                Pre-shipment manufacturing checks, escrow payment terms safeguarding, and independent third-party site verification lists.
              </p>
            </div>
            <div className="relative z-10 hidden sm:block shrink-0 opacity-25">
              <Compass className="w-16 h-16 text-teal-400" />
            </div>
          </div>

          <div className="p-5 bg-teal-50 border border-teal-100 rounded-2xl flex items-start gap-4">
            <span className="text-2xl mt-1 shrink-0">🏭</span>
            <div className="space-y-1">
              <h3 className="font-bold text-slate-800 text-base font-display">How to Secure Reliable Overseas Suppliers</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Finding supplier pricing holds little value if shipping quality is sub-par. Follow these compulsory auditing vectors:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            <div>
              <h4 className="font-bold text-slate-800 text-sm font-display mb-4 flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-teal-600 animate-pulse" /> Supplier Vetting Milestones Checklist
              </h4>
              <div className="space-y-4 font-sans">
                {buyerFindingGuide.supplierEvaluation.map((step, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex gap-4">
                    <span className="w-8 h-8 rounded-lg bg-teal-55/60 text-teal-800 font-bold border border-teal-100 text-xs font-mono flex items-center justify-center shrink-0">
                      {(idx+1).toString().padStart(2, '0')}
                    </span>
                    <div className="space-y-1 text-xs">
                      <h5 className="font-semibold text-slate-850 leading-tight">{step.step}</h5>
                      <p className="text-slate-500 leading-relaxed text-[11px]">{step.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Red flag indicators */}
            <div className="bg-slate-900 text-white p-6 md:p-8 rounded-3xl space-y-4 flex flex-col justify-between border border-slate-800 shadow-lg">
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-rose-400 font-bold uppercase block tracking-wider">CRITICAL RISK RED FLAGS</span>
                <h4 className="font-bold font-display text-white text-base">When to halt conversations with a factory:</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-sans pt-1">
                  1. <strong>Payment pressure:</strong> Factory demands 100% advance wire payments prior to sampling, refusing escrow letters or Sight LCs.
                </p>
                <p className="text-xs text-slate-300 leading-relaxed font-sans pt-1">
                  2. <strong>Address vagueness:</strong> Refuses to provide local license registry IDs or block coordinates of their manufacturing plant.
                </p>
                <p className="text-xs text-slate-300 leading-relaxed font-sans pt-1">
                  3. <strong>Certificate fakes:</strong> Uploads raw Photoshop alterations of ISO or SGS stamp sheets (validate direct with the issuing houses).
                </p>
              </div>
              <div className="p-4.5 bg-slate-800 border border-slate-700 rounded-xl text-[11px] text-slate-400 font-mono">
                🛑 <strong>Verification Tip:</strong> Appoint certified independent surveyor teams (SGS) to execute site visits before funding deposits.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab: Product Research */}
      {activeTab === 'market_research' && (
        <div className="space-y-8 animate-fade-in font-sans">
          {/* Custom Market Research Header Banners */}
          <div className="relative rounded-xl overflow-hidden h-40 bg-slate-950 border border-slate-900 flex items-center justify-between p-6 text-white shadow-2xs">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
            <div className="relative z-10 space-y-1.5 max-w-lg text-left">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-500/20 text-blue-300 font-mono text-[9px] font-bold rounded uppercase">
                <Search className="w-3 h-3" /> MACRO ANALYSIS
              </span>
              <h3 className="text-normal md:text-base font-bold font-display tracking-tight text-white leading-tight">
                Macro Global Sourcing Market Research & Target Hub Sizing
              </h3>
              <p className="text-[11px] text-slate-350 font-normal leading-relaxed">
                Analyze HS codes trade flows, calculate seasonal purchase indices, map tariff schedules and demographic corridors easily.
              </p>
            </div>
            <div className="relative z-10 hidden sm:block shrink-0 opacity-25">
              <Search className="w-16 h-16 text-blue-400" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            <div className="space-y-4">
              <h3 className="font-bold text-slate-800 text-lg font-display flex items-center gap-1.5">
                <Compass className="w-5 h-5 text-indigo-605" /> Product Selection Principles
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-sans">
                Unexperienced traders frequently fail by targeting saturated hyper-competitive retail elements (like phone covers). Master product matching:
              </p>
              
              <div className="space-y-3">
                {productResearchData.selectionMethods.map((meth, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex gap-3 text-xs">
                    <span className="text-indigo-600 font-bold">✔</span>
                    <p className="text-slate-600 leading-relaxed">{meth}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Country classification */}
            <div className="space-y-4">
              <h3 className="font-bold text-slate-800 text-lg font-display">Target Market Country Classification</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-sans">
                Sellers categorize potential export sovereign destinations into distinct clusters matching their production setups:
              </p>

              <div className="grid grid-cols-1 gap-4 text-xs">
                <div className="p-5 bg-indigo-50/50 border border-indigo-150 rounded-2xl space-y-1.5">
                  <h4 className="font-bold text-indigo-900 font-display text-sm">Niche / Premium Saturated Markets</h4>
                  <p className="text-slate-650 leading-relaxed">{productResearchData.countryClassification.nicheMarket}</p>
                </div>
                <div className="p-5 bg-teal-50/50 border border-teal-150 rounded-2xl space-y-1.5">
                  <h4 className="font-bold text-teal-900 font-display text-sm">Industrial / Heavy Commodity Markets</h4>
                  <p className="text-slate-650 leading-relaxed">{productResearchData.countryClassification.bulkMarket}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Research steps */}
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-105 space-y-4">
            <h4 className="font-bold text-slate-850 font-display text-base">Four Practical Market Research steps:</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs font-sans">
              {productResearchData.marketResearchSteps.map((step, idx) => (
                <div key={idx} className="bg-white p-4.5 rounded-xl border border-slate-150 space-y-2">
                  <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider block">PHASE 0{(idx+1)}</span>
                  <p className="text-slate-600 leading-relaxed text-[11px]">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab: Marketing */}
      {activeTab === 'marketing' && (
        <div className="space-y-6 animate-fade-in font-sans">
          {/* Custom Global Exhibition Header Banners */}
          <div className="relative rounded-xl overflow-hidden h-40 bg-violet-950 border border-violet-900 flex items-center justify-between p-6 text-white shadow-2xs">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
            <div className="relative z-10 space-y-1.5 max-w-lg text-left">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-violet-500/20 text-violet-300 font-mono text-[9px] font-bold rounded uppercase">
                📢 B2B OUTREACH
              </span>
              <h3 className="text-normal md:text-base font-bold font-display tracking-tight text-white leading-tight">
                Global Trade Shows, Canton Exhibitions, and Digital B2B Outreaches
              </h3>
              <p className="text-[11px] text-violet-200 font-normal leading-relaxed">
                Drive buyer engagement via B2B search optimization, digital product catalogs, specialized trade fair events and direct email campaign.
              </p>
            </div>
            <div className="relative z-10 hidden sm:block shrink-0 opacity-25">
              <Award className="w-16 h-16 text-violet-400" />
            </div>
          </div>

          <div className="p-5 bg-slate-50 border border-slate-150 rounded-2xl flex items-start gap-4">
            <span className="text-2xl mt-1 shrink-0">📢</span>
            <div className="space-y-1">
              <h3 className="font-bold text-slate-800 text-base font-display">International B2B Marketing Overview</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {marketingData.b2bMarketing}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            {marketingData.digitalChannels.map((channel, i) => (
              <div key={i} className="p-5 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col justify-between space-y-3 hover:shadow-2xs transition">
                <div className="space-y-1.5 text-xs">
                  <span className="p-1 rounded bg-indigo-50 border border-indigo-100 text-indigo-850 font-mono font-bold text-[9px] uppercase">
                    CHANNELS
                  </span>
                  <h4 className="font-bold text-slate-800 text-xs font-display pt-1">{channel.platform}</h4>
                  <p className="text-slate-500 text-[11px] leading-relaxed pt-1">{channel.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-100 space-y-1.5">
            <h4 className="font-bold text-xs text-amber-805 uppercase tracking-wider font-display">Systematic Export Lead Generation formula</h4>
            <p className="text-xs text-slate-600 leading-relaxed">{marketingData.leadGeneration}</p>
          </div>
        </div>
      )}
    </div>
  );
}
