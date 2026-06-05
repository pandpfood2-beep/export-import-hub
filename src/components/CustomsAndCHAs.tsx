import React, { useState } from 'react';
import { customsClearanceData, chaData } from '../data/basics';
import { ShieldCheck, Server, AlertTriangle, FileText, CheckCircle, HelpCircle } from 'lucide-react';

export function CustomsAndCHAs() {
  const [activeSection, setActiveSection] = useState<'customs' | 'cha'>('customs');

  return (
    <div className="space-y-6 bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm">
      {/* Tab select header */}
      <div className="flex flex-wrap justify-between items-center gap-4 border-b border-slate-200 pb-4">
        <div className="space-y-1">
          <h2 className="text-xl md:text-2xl font-bold font-display text-slate-900">Customs Clearance & CHA Directory</h2>
          <p className="text-[11px] text-slate-500">
            Learn customs entry structures, ICEGATE calculations, anti-dumping checks, and licensing requirements for Custom House Agents (CHA).
          </p>
        </div>
        
        <div className="flex gap-1 p-1 bg-slate-50 rounded-lg border border-slate-202">
          <button
            id="btn-subtab-customs"
            onClick={() => setActiveSection('customs')}
            className={`px-3 py-1.5 rounded-[6px] text-xs font-semibold cursor-pointer transition ${
              activeSection === 'customs' ? 'bg-[#1d4ed8] text-white shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900 hover:bg-[#e2e8f0]'
            }`}
          >
            Customs Clearance & Duties
          </button>
          <button
            id="btn-subtab-cha"
            onClick={() => setActiveSection('cha')}
            className={`px-3 py-1.5 rounded-[6px] text-xs font-semibold cursor-pointer transition ${
              activeSection === 'cha' ? 'bg-[#1d4ed8] text-white shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900 hover:bg-[#e2e8f0]'
            }`}
          >
            Custom House Agents (CHA)
          </button>
        </div>
      </div>

      {activeSection === 'customs' ? (
        <div className="space-y-8 animate-fade-in">
          {/* Core Intro */}
          <div className="p-5 bg-slate-50 border border-slate-150 rounded-2xl flex items-start gap-4">
            <span className="text-2xl mt-1 shrink-0">管制</span>
            <div className="space-y-1">
              <h3 className="font-bold text-slate-800 text-base font-display">Customs Clearance Procedures</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{customsClearanceData.procedures}</p>
            </div>
          </div>

          {/* Custom Customs Clearance Graphics (Replacing Unsplash image) */}
          <div className="relative rounded-xl overflow-hidden h-40 bg-slate-950 border border-slate-800 flex items-center justify-between p-6 text-white shadow-2xs">
            <div className="absolute inset-0 opacity-15 pointer-events-none select-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="customs-grid-pattern" width="15" height="15" patternUnits="userSpaceOnUse">
                    <circle cx="7" cy="7" r="1" fill="#fff" opacity="0.25" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#customs-grid-pattern)" />
              </svg>
            </div>

            <div className="relative z-10 space-y-1.5 max-w-sm text-left">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-500/20 text-blue-300 font-mono text-[9px] font-bold rounded uppercase">
                👮 SECURITY & BORDER CONTROL
              </span>
              <h3 className="text-normal md:text-base font-bold font-display tracking-tight text-white leading-tight">
                Port Customs Clearance Depot & Shipping Inspection Terminal
              </h3>
              <p className="text-[11px] text-slate-350 leading-relaxed font-normal">
                Verifying manifesting papers, HS structures, physical cargo seals, and releasing official Customs Out of Charge.
              </p>
            </div>

            {/* Custom Cargo Container inline vector */}
            <div className="relative z-10 shrink-0 hidden sm:block w-44 h-24">
              <svg viewBox="0 0 100 60" className="w-full h-full text-blue-500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="15" y="10" width="70" height="40" rx="2" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
                <path d="M 25,10 L 25,50 M 40,10 L 40,50 M 55,10 L 55,50 M 70,10 L 70,50" stroke="#475569" strokeWidth="1" />
                
                <circle cx="50" cy="30" r="13" fill="#065f46" opacity="0.85" />
                <circle cx="50" cy="30" r="11" stroke="#34d399" strokeWidth="1" strokeDasharray="3 2" />
                <text x="50" y="32" textAnchor="middle" fill="#fff" fontSize="6" fontWeight="bold" fontFamily="monospace">O.O.C</text>
              </svg>
            </div>
          </div>

          {/* ICEGATE block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-3">
              <div className="flex items-center gap-2">
                <Server className="w-5 h-5 text-indigo-600" />
                <h4 className="font-bold text-slate-800 text-sm font-display">Indian Customs Portal: ICEGATE</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{customsClearanceData.icegateOverview}</p>
              <div className="p-3.5 bg-indigo-50 text-indigo-900 rounded-lg text-[11px] leading-relaxed font-sans">
                📌 <strong>Core Features:</strong> Electronically file Shipping Bills / Bill of Entry forms, trace cargo status real-time, register Authorized Dealer (AD) codes, and pay customs duties online.
              </div>
            </div>

            {/* Tax duties breakdown */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-800 text-sm font-display flex items-center gap-1.5">
                📊 International Customs Duty Structures
              </h4>
              <div className="space-y-3">
                {Object.entries(customsClearanceData.dutyStructure).map(([code, desc]) => (
                  <div key={code} className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex gap-3 text-xs">
                    <span className="font-mono font-bold text-indigo-700 uppercase">{code}</span>
                    <p className="text-slate-600 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Customs compliance checking */}
          <div className="p-6 rounded-2xl bg-indigo-50/45 border border-indigo-100/80 space-y-4">
            <h4 className="font-bold text-indigo-950 font-display text-sm flex items-center gap-1.5">
              <ShieldCheck className="w-5 h-5 text-indigo-600" /> Customs Regulatory Compliance Safeguards
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-700 leading-relaxed">
              {customsClearanceData.complianceCheck.map((check, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-indigo-100 p-4 space-y-1.5">
                  <span className="font-bold text-indigo-600 font-mono text-[10px]">RULE {idx + 1}</span>
                  <p className="text-slate-600 leading-relaxed">{check}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-8 animate-fade-in">
          {/* CHA definition block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="p-6 bg-slate-50/50 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h4 className="font-bold text-slate-800 text-sm border-b border-indigo-100 pb-2 flex items-center gap-1.5 font-display">
                💼 What is a Custom House Agent?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>{chaData.whatIs}</strong>
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                {chaData.role}
              </p>
              <div className="p-4 bg-teal-50 border border-teal-150 rounded-xl text-xs text-teal-900 leading-relaxed font-sans">
                💡 <strong>Important Note:</strong> Under modern protocols (such as CBLR 2018 in India), CHAs are formally designated as <strong>Customs Brokers</strong>. Exporters are heavily advised to hire highly experienced, certified customs brokers to avoid port delay penalties.
              </div>
            </div>

            {/* Responsibilities list */}
            <div className="space-y-4">
              <h4 className="font-bold text-slate-800 text-sm font-display flex items-center gap-1.5">
                🛠️ Key Operational Responsibilities of a CHA
              </h4>
              <div className="grid grid-cols-1 gap-2.5">
                {chaData.keyResponsibilities.map((resp, i) => (
                  <div key={i} className="flex gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs text-slate-600 leading-relaxed">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CHA Workflow Diagram */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest block">CHA (Customs House Agent) Brokerage Workflow Diagram</h4>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-[10px] text-slate-700">
              {[
                { step: '1. Documents Audit', desc: 'CHA collects and audits Commercial Invoice, Packing List and Certificates.' },
                { step: '2. ICEGATE Filing', desc: 'Files electronic Shipping Bill or Bill of Entry on Indian Customs system.' },
                { step: '3. Cargo inspection', desc: 'Accompanies Customs official for physical inspection and container seal checks.' },
                { step: '4. Let Export / OOC', desc: 'Secures statutory Let Export Order (LEO) or Out of Charge (OOC) releases.' },
              ].map((wrk, widx) => (
                <div key={widx} className="bg-white p-3 rounded border border-slate-150 space-y-1 relative shadow-3xs text-left">
                  <span className="absolute top-2 right-2 text-blue-500 font-bold">↳</span>
                  <h5 className="font-bold text-slate-800">{wrk.step}</h5>
                  <p className="text-slate-500 leading-normal">{wrk.desc}</p>
                </div>
              ))}
            </div>
            {/* Custom CHA Visual Box (Replacing Unsplash image) */}
            <div className="relative h-32 rounded-lg overflow-hidden border border-emerald-500/20 bg-emerald-950/20 p-4 flex flex-col justify-between text-left font-sans mt-2">
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]"></div>
              
              <div className="relative z-10 flex justify-between items-center text-[9px] font-mono">
                <span className="text-emerald-400 font-bold tracking-widest uppercase">CHA INTERFACE COMPLIANCE</span>
                <span className="text-slate-400">ICEGATE INTEGRATED</span>
              </div>

              <div className="relative z-10 text-[11px] my-auto text-slate-300 leading-normal font-sans">
                <strong>Documentation Review Node</strong>: Verified by customs broker licensed personnel. Ensures 0% penalty rates during border crossings and full clearance release.
              </div>

              <div className="relative z-10 flex items-center gap-1.5 text-[10px] text-emerald-400 font-semibold font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
                LICENSE COMPLIANT STATUS ACTIVE
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-slate-100">
            {/* Licensing steps */}
            <div className="space-y-4">
              <h4 className="font-bold text-slate-800 text-sm font-display">
                🎓 Custom Broker Licensing Pathway (CBLR Setup)
              </h4>
              <div className="space-y-3">
                {chaData.licensingProcess.map((step, idx) => (
                  <div key={idx} className="flex gap-4 items-center">
                    <span className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 text-xs font-mono font-bold text-indigo-700 flex items-center justify-center shrink-0">
                      {(idx+1).toString().padStart(2, '0')}
                    </span>
                    <p className="text-xs text-slate-600 leading-normal">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hiring benefits */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-lg space-y-4">
              <h4 className="font-bold text-white text-sm font-display flex items-center gap-1.5">
                🌟 Benefits of Appointing a Customs Broker
              </h4>
              <div className="space-y-3">
                {chaData.benefits.map((ben, idx) => (
                  <div key={idx} className="flex gap-2 text-xs">
                    <span className="text-teal-400 font-bold shrink-0">✔</span>
                    <p className="text-slate-300 leading-relaxed font-sans">{ben}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
