import React, { useState } from 'react';
import { documentsData } from '../data/documents';
import { Copy, Printer, CheckCircle, FileText, AlertOctagon, HelpCircle } from 'lucide-react';

export function DocumentationCenter() {
  const [selectedDocName, setSelectedDocName] = useState<string>('Commercial Invoice');
  const [copied, setCopied] = useState<boolean>(false);

  const selectedDoc = documentsData.find(item => item.name === selectedDocName) || documentsData[0];

  const handleCopy = () => {
    const formattedText = `
DOCUMENT TYPE: ${selectedDoc.name}
PURPOSE: ${selectedDoc.purpose}
MANDATORY REQUIRED INFORMATION:
${selectedDoc.requiredInfo.map((info, idx) => `${idx + 1}. ${info}`).join('\n')}
--------------------------------------------------
SAMPLE DEMO STRUCTURE:
Header: ${selectedDoc.sampleFormat.header}
Sections Involved: ${selectedDoc.sampleFormat.sections.join(', ')}
Key Reference Fields:
${Object.entries(selectedDoc.sampleFormat.fields).map(([k, v]) => `- ${k}: ${v}`).join('\n')}
--------------------------------------------------
COMMON MISTAKES IN GLOBAL PRACTICE:
${selectedDoc.commonMistakes.map(m => `- ${m}`).join('\n')}
    `;
    
    navigator.clipboard.writeText(formattedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Intro with Workflow Banner */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="relative h-44 md:h-52 bg-slate-900 overflow-hidden text-white flex items-center justify-between p-6 shadow-xs">
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 opacity-15 pointer-events-none select-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="doc-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#doc-grid)" />
            </svg>
          </div>

          <div className="relative z-10 space-y-1.5 max-w-xl">
            <span className="inline-flex items-center text-[9px] font-mono font-bold tracking-widest text-[#60a5fa] uppercase bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
              DOCUMENTATION WORKFLOW PIPELINE & ACCREDITATION
            </span>
            <h1 className="text-xl md:text-2xl font-bold font-display text-white">Export Document & Stamp Pipeline</h1>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              1. Commercial Invoice &rarr; 2. Packing List &rarr; 3. Cert of Origin &rarr; 4. Shipping Bill &rarr; 5. Sea Bill of Lading. Settle all custom filings with clean compliance records.
            </p>
          </div>

          {/* Interactive Document Pipeline visual line diagram */}
          <div className="relative z-10 shrink-0 hidden lg:block w-70 h-22 text-blue-500">
            <svg viewBox="0 0 280 80" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2500/svg">
              <line x1="20" y1="40" x2="260" y2="40" stroke="rgba(255,255,255,0.15)" strokeWidth="3" />
              <line x1="20" y1="40" x2="140" y2="40" stroke="#3b82f6" strokeWidth="2" strokeDasharray="3 3" />
              
              <g transform="translate(10, 20)">
                <rect x="0" y="0" width="28" height="38" rx="3" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />
                <line x1="5" y1="10" x2="23" y2="10" stroke="#60a5fa" strokeWidth="1.5" />
                <line x1="5" y1="15" x2="18" y2="15" stroke="#60a5fa" strokeWidth="1.5" />
                <line x1="5" y1="20" x2="23" y2="20" stroke="#60a5fa" strokeWidth="1.5" />
                <text x="14" y="31" textAnchor="middle" fill="#94a3b8" fontSize="6.5" fontWeight="bold">INV</text>
              </g>

              <g transform="translate(70, 20)">
                <rect x="0" y="0" width="28" height="38" rx="3" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />
                <line x1="5" y1="10" x2="18" y2="10" stroke="#60a5fa" strokeWidth="1.5" />
                <line x1="5" y1="15" x2="23" y2="15" stroke="#60a5fa" strokeWidth="1.5" />
                <line x1="5" y1="20" x2="15" y2="20" stroke="#60a5fa" strokeWidth="1.5" />
                <text x="14" y="31" textAnchor="middle" fill="#94a3b8" fontSize="6.5" fontWeight="bold">PKG</text>
              </g>

              <g transform="translate(130, 20)">
                <rect x="0" y="0" width="28" height="38" rx="3" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />
                <line x1="5" y1="10" x2="23" y2="10" stroke="#60a5fa" strokeWidth="1.5" />
                <circle cx="14" cy="20" r="3" fill="#10b981" />
                <text x="14" y="31" textAnchor="middle" fill="#94a3b8" fontSize="6.5" fontWeight="bold">COO</text>
              </g>

              <g transform="translate(190, 20)">
                <rect x="0" y="0" width="28" height="38" rx="3" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
                <text x="14" y="22" textAnchor="middle" fill="#64748b" fontSize="7" fontWeight="bold">S/B</text>
              </g>

              <g transform="translate(240, 20)">
                <rect x="0" y="0" width="28" height="38" rx="3" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
                <text x="14" y="22" textAnchor="middle" fill="#64748b" fontSize="7" fontWeight="bold">B/L</text>
              </g>
            </svg>
          </div>
        </div>
        <div className="p-5 md:p-6 space-y-3">
          <h3 className="text-base font-bold font-display text-slate-900">Customs Statutory Document Index</h3>
          <p className="text-xs text-slate-505 leading-relaxed max-w-4xl">
            The central archive for global commerce paperwork. Select any of the 12 primary documents below to master its statutory purpose, check mandatory fields, recognize common errors, and download/print clean reference templates.
          </p>

          {/* Categories grid */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {documentsData.map((doc, idx) => (
              <button
                id={`doc-tab-${idx}`}
                key={doc.name}
                onClick={() => setSelectedDocName(doc.name)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-[6px] border transition cursor-pointer flex items-center gap-1.5 ${
                  selectedDocName === doc.name
                    ? 'bg-[#1d4ed8] border-[#1d4ed8] text-white shadow-xs font-bold'
                    : 'bg-slate-50 text-slate-650 border-slate-200 hover:bg-[#e2e8f0]'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                {doc.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Hand: Explanatory Content */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm space-y-5">
            <h3 className="text-lg font-bold font-display text-slate-800 border-b border-slate-100 pb-3 flex items-center gap-2">
              📂 Theoretical Guide: {selectedDoc.name}
            </h3>

            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5">Official Purpose</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{selectedDoc.purpose}</p>
            </div>

            <div className="space-y-2.5">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Mandatory Required Information</h4>
              <ul className="space-y-2 text-xs text-slate-600">
                {selectedDoc.requiredInfo.map((info, idx) => (
                  <li key={idx} className="flex items-start gap-2 leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-slate-100 border text-[10px] font-mono font-semibold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{info}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 p-5 rounded-2xl bg-rose-50 border border-rose-100">
              <h4 className="text-xs font-bold text-rose-800 uppercase tracking-wide flex items-center gap-1.5">
                <AlertOctagon className="w-4 h-4" /> Common Drafting Mistakes to Avoid
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {selectedDoc.commonMistakes.map((mistake, idx) => (
                  <li key={idx} className="flex items-start gap-1.5 leading-relaxed">
                    <span className="text-rose-500 font-bold">•</span>
                    <span>{mistake}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Hand: Interactive Template Preview Panel */}
        <div className="lg:col-span-6 space-y-6 print-area">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 md:p-6 space-y-5">
            <div className="flex justify-between items-center border-b border-slate-100 pb-4 no-print">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                🖥️ Digital Reference Template
              </h4>
              <div className="flex gap-2">
                <button
                  id="btn-copy-doc"
                  onClick={handleCopy}
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-800 transition text-xs font-semibold flex items-center gap-1 cursor-pointer"
                  title="Copy checklist metadata"
                >
                  {copied ? <CheckCircle className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'Copied' : 'Copy Text'}
                </button>
                <button
                  id="btn-print-doc"
                  onClick={handlePrint}
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-800 transition text-xs font-semibold flex items-center gap-1 cursor-pointer"
                  title="Print educational layout"
                >
                  <Printer className="w-4 h-4" />
                  Print Form
                </button>
              </div>
            </div>

            {/* Simulated Sheet Frame */}
            <div className="border-4 border-slate-300 p-6 rounded-2xl bg-slate-50 font-mono text-[11px] leading-relaxed text-slate-700 shadow-xs max-h-[600px] overflow-y-auto">
              <div className="text-center font-bold font-display text-slate-900 border-b-2 border-slate-400 pb-3 mb-6">
                *** {selectedDoc.sampleFormat.header} ***
                <div className="text-[9px] text-slate-500 mt-1 font-sans">EDUCATIONAL LAYOUT REFERENCE &middot; COMPLIANT FIELD SYSTEM</div>
              </div>

              {/* Master grid */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4 border-b border-slate-200 pb-4">
                  <div>
                    <span className="font-bold underline text-slate-900">01. EXP/SHP ADDRESS:</span>
                    <p className="mt-1 text-slate-600 text-[10px] break-words">
                      {selectedDoc.sampleFormat.fields['Exporter'] || selectedDoc.sampleFormat.fields['Shipper'] || 'GLOBAL TRADE PARTNERS CO.'}
                    </p>
                  </div>
                  <div>
                    <span className="font-bold underline text-slate-900">02. CONSIGNEE/IMPORTER:</span>
                    <p className="mt-1 text-slate-600 text-[10px] break-words">
                      {selectedDoc.sampleFormat.fields['Consignee'] || 'CONSIGNEE DESIGNATE INC.'}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 border-b border-slate-200 pb-4">
                  <div>
                    <span className="font-bold text-slate-900">REF RECORD ID:</span> 
                    <p className="text-slate-650 font-bold">
                      {selectedDoc.sampleFormat.fields['Invoice No'] || selectedDoc.sampleFormat.fields['PI Number'] || selectedDoc.sampleFormat.fields['BL Number'] || selectedDoc.sampleFormat.fields['AWB Number'] || selectedDoc.sampleFormat.fields['Shipping Bill No'] || 'REF-884920A'}
                    </p>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">REGULATORY STATUS:</span>
                    <p className="text-slate-650">
                      {selectedDoc.sampleFormat.fields['Incoterm'] || selectedDoc.sampleFormat.fields['Payment Terms'] || selectedDoc.sampleFormat.fields['Origin Criterion'] || 'TREATMENT COMPLIANCE CHECK OK'}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="font-bold underline text-slate-900 block">03. MANDATORY SCHEMAS INCLUDED:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedDoc.sampleFormat.sections.map((sec, idx) => (
                      <div key={idx} className="flex items-center gap-1 bg-slate-200/50 px-2 py-1 rounded border border-slate-300">
                        <span className="text-emerald-700">✓</span>
                        <span className="text-[10px]">{sec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Simulated variables block */}
                <div className="bg-slate-200/30 p-4 rounded-xl space-y-2 border border-slate-200">
                  <span className="font-bold text-slate-900 text-[10px] block uppercase border-b border-slate-200 pb-1">Declarative Fields Checklist:</span>
                  {Object.entries(selectedDoc.sampleFormat.fields).map(([key, val]) => (
                    <div key={key} className="flex justify-between gap-4 text-[10px] border-b border-slate-200/50 pb-1">
                      <span className="font-bold text-slate-850 shrink-0">{key}:</span>
                      <span className="text-slate-600 text-right truncate max-w-xs">{val}</span>
                    </div>
                  ))}
                </div>

                {/* Seal stamp section */}
                <div className="flex justify-between items-end pt-6 border-t border-slate-300">
                  <div className="text-[9px] text-slate-400 font-sans max-w-xs leading-tight">
                    This template matches standard WCO and ICC documentary criteria. Verify final formatting details with port agents prior to custom filing.
                  </div>
                  <div className="w-24 border-t border-slate-400 pt-1 text-center font-bold text-[9px] text-slate-600">
                    AUTHORIZED SEAL
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
