import React, { useState } from 'react';
import { govtSchemesData, riskManagementData } from '../data/basics';
import { ShieldCheck, Award, Briefcase, HelpCircle, CheckCircle, AlertTriangle } from 'lucide-react';

export function RiskAndGovtSupport() {
  const [activeTab, setActiveTab] = useState<'govt' | 'risk'>('govt');

  const risks = [
    { title: 'Payment Default Risk (Non-Payment)', level: 'Severe Risk', details: riskManagementData.paymentRisk.mitigation, symbol: '💵' },
    { title: 'Transit Logistics Damage Risk (Marine Loss)', level: 'High Risk', details: riskManagementData.logisticsRisk.mitigation, symbol: '🚢' },
    { title: 'Currency Exchange/Appreciation Risk', level: 'Moderate Risk', details: riskManagementData.currencyRisk.mitigation, symbol: '💱' },
    { title: 'Sovereign Political & Country Blockade Risk', level: 'Variable Risk', details: riskManagementData.countryRisk.mitigation, symbol: '🌍' },
    { title: 'Document clerical discrepancy custom audits', level: 'Moderate Risk', details: riskManagementData.documentationRisk.mitigation, symbol: '📂' },
  ];

  return (
    <div className="space-y-6 bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center gap-4 border-b border-slate-200 pb-4">
        <div className="space-y-1">
          <h2 className="text-xl md:text-2xl font-bold font-display text-slate-900">Government Support & Risk mitigation</h2>
          <p className="text-[11px] text-slate-500">
            Learn customs rebate policies, DGFT applications, Export Promotion structures, and currency hedging techniques.
          </p>
        </div>
        
        {/* Toggle buttons */}
        <div className="flex gap-1 p-1 bg-slate-50 rounded-lg border border-slate-150 shrink-0">
          <button
            id="btn-riskgovt-govt"
            onClick={() => setActiveTab('govt')}
            className={`px-3 py-1.5 rounded-[6px] text-xs font-semibold cursor-pointer transition ${
              activeTab === 'govt' ? 'bg-[#1d4ed8] text-white shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900 hover:bg-[#e2e8f0]'
            }`}
          >
            Government Support & Schemes
          </button>
          <button
            id="btn-riskgovt-risk"
            onClick={() => setActiveTab('risk')}
            className={`px-3 py-1.5 rounded-[6px] text-xs font-semibold cursor-pointer transition ${
              activeTab === 'risk' ? 'bg-[#1d4ed8] text-white shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900 hover:bg-[#e2e8f0]'
            }`}
          >
            Export Risk Management
          </button>
        </div>
      </div>

      {activeTab === 'govt' ? (
        <div className="space-y-8 animate-fade-in font-sans">
          {/* Core introduction to incentives */}
          <div className="p-5 bg-indigo-50/50 border border-indigo-100 rounded-2xl flex items-start gap-4">
            <span className="text-2xl mt-1 shrink-0">🎁</span>
            <div className="space-y-1">
              <h3 className="font-bold text-slate-800 text-base font-display">Export Promotion Incentives & Benefits</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                National governments actively promote export volume growth to attract hard currency reserves, providing refund rebates and custom drawback schemes to registered startups.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            {/* DGFT and IEC details */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-5">
              <h4 className="font-bold text-slate-850 font-display text-base border-b border-slate-150 pb-2">
                🏛️ State Regulatory Nodes
              </h4>
              
              <div className="space-y-4">
                <div className="space-y-1 text-xs">
                  <span className="font-semibold text-slate-800 font-display block">The DGFT Board:</span>
                  <p className="text-slate-600 leading-relaxed">{govtSchemesData.dgft}</p>
                </div>

                <div className="space-y-1 text-xs border-t border-slate-205 pt-4">
                  <span className="font-semibold text-slate-800 font-display block">Importer-Exporter Code (IEC):</span>
                  <p className="text-slate-600 leading-relaxed">{govtSchemesData.iecCode}</p>
                </div>
              </div>
            </div>

            {/* RCMC and RoDTEP */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-205 space-y-5">
              <h4 className="font-bold text-slate-850 font-display text-base border-b border-slate-150 pb-2">
                🏆 Schemes & Councils
              </h4>

              <div className="space-y-4">
                <div className="space-y-1 text-xs">
                  <span className="font-semibold text-slate-800 font-display block">Registration-Cum-Membership (RCMC):</span>
                  <p className="text-slate-600 leading-relaxed">{govtSchemesData.rcmc}</p>
                </div>

                <div className="space-y-1 text-xs border-t border-slate-205 pt-4">
                  <span className="font-semibold text-slate-800 font-display block">The RoDTEP Scheme:</span>
                  <p className="text-slate-600 leading-relaxed">{govtSchemesData.rodtep}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-8 animate-fade-in font-sans">
          {/* Risk mitigation main table */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-display text-slate-800 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" /> Five Primary Global Trade Risks & Mitigations
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed max-w-2xl font-sans">
              International trade borders multiply logistical and business risks. Exporters actively employ specialized structural safeguards to insulate their cash flows:
            </p>

            <div className="space-y-3 pt-2">
              {risks.map((risk, index) => (
                <div key={index} className="p-5 bg-slate-50 border border-slate-150 rounded-2xl flex gap-4 hover:border-slate-300 transition hover:shadow-2xs">
                  <span className="text-2xl mt-0.5 shrink-0 block">{risk.symbol}</span>
                  <div className="space-y-1 text-xs font-sans">
                    <div className="flex justify-between items-center gap-4 flex-wrap">
                      <h4 className="font-bold text-slate-800 text-sm font-display">{risk.title}</h4>
                      <span className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase ${
                        risk.level === 'Severe Risk' ? 'bg-rose-50 text-rose-800 border border-rose-100' :
                        risk.level === 'High Risk' ? 'bg-orange-50 text-orange-850 border border-orange-100' :
                        'bg-slate-100 text-slate-700'
                      }`}>
                        {risk.level}
                      </span>
                    </div>
                    <p className="text-slate-650 leading-relaxed text-[11px] pt-1 leading-normal">
                      <strong>Mitigation Buffer:</strong> {risk.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
