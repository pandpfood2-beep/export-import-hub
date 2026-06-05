import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Landmark, ArrowRight, DollarSign, Calculator, Info, ShieldAlert } from 'lucide-react';

export function ExportCostCenter() {
  const { t } = useLanguage();
  
  // Calculator state
  const [productCostInput, setProductCostInput] = useState<number>(10000);
  const [packagingCostInput, setPackagingCostInput] = useState<number>(800);
  const [inlandFreightInput, setInlandFreightInput] = useState<number>(1200);
  const [documentationInput, setDocumentationInput] = useState<number>(500);
  const [customsInput, setCustomsInput] = useState<number>(1500);
  const [oceanFreightInput, setOceanFreightInput] = useState<number>(3500);
  const [insuranceInput, setInsuranceInput] = useState<number>(200);
  const [bankChargesInput, setBankChargesInput] = useState<number>(400);

  // Computed Prices
  const fobPrice = productCostInput + packagingCostInput + inlandFreightInput + documentationInput + customsInput;
  const cifPrice = fobPrice + oceanFreightInput + insuranceInput + bankChargesInput;

  const costBreakdownData = [
    {
      titleEN: 'Product Raw Cost',
      titleHI: 'उत्पाद की मूल लागत',
      descEN: 'The fabrication expenses or wholesale purchase price of goods from local trade factories, including profit margins.',
      descHI: 'स्थानीय कारखानों से वस्त्रों/सामानों के निर्माण का खर्च या थोक खरीद मूल्य, जिसमें लाभ मार्जिन भी शामिल है।'
    },
    {
      titleEN: 'Packaging Cost',
      titleHI: 'पैकेजिंग लागत',
      descEN: 'Custom-designed corrugated boxes, plastic pallets, heat shrink wrap, and regulatory ISPM-15 wooden fumigation labeling.',
      descHI: 'कस्टम बक्से, प्लास्टिक पैलेट, हीट श्रिंक रैप, और नियामक ISPM-15 लकड़ी के धूमन लेबलिंग (Fumigation)।'
    },
    {
      titleEN: 'Inland Logistic Freight',
      titleHI: 'इनलैंड रसद मालभाड़ा',
      descEN: 'Trucking container or railway flat wagon courier charges to transport cargo from factory warehouses to maritime departure docks.',
      descHI: 'कारखाने के गोदामों से समुद्री प्रस्थान बंदरगाहों तक कार्गो परिवहन के लिए ट्रकिंग कंटेनर या रेलवे फ्लैट वैगन रेल कूरियर शुल्क।'
    },
    {
      titleEN: 'Sovereign Customs Charges',
      titleHI: 'सरकारी सीमा शुल्क शुल्क',
      descEN: 'Filing entry fees on ICEGATE, physical border inspection charges, Custom Broker (CHA) service fees, and local state harbor levies.',
      descHI: 'ICEGATE पर प्रविष्टि शुल्क दाखिल करना, भौतिक सीमा निरीक्षण शुल्क, कस्टम हाउस एजेंट (CHA) सेवा शुल्क और स्थानीय पत्तन लेवी।'
    },
    {
      titleEN: 'Ocean or Air Freight Cargo',
      titleHI: 'समुद्री या हवाई माल भाड़ा',
      descEN: 'The actual transit cost charged by ocean liner carriers or airlines for shipping containers to international destination ports.',
      descHI: 'अंतरराष्ट्रीय गंतव्य बंदरगाहों पर शिपिंग कंटेनरों के लिए महासागर माल वाहक या एयरलाइनों द्वारा लिया जाने वाला वास्तविक पारगमन शुल्क।'
    },
    {
      titleEN: 'Marine Insurance Cost',
      titleHI: 'समुद्री बीमा लागत',
      descEN: 'Compulsory transit risk indemnity values covering ship sinkage, harbor fires, physical cargo theft, or loading damages.',
      descHI: 'जहाज डूबने, बंदरगाह की आग, भौतिक कार्गो चोरी, या लोडिंग नुकसान को कवर करने वाले पारगमन जोखिम क्षतिपूर्ति मूल्य।'
    },
    {
      titleEN: 'Banking Settlement Charges',
      titleHI: 'बैंकिंग निपटान शुल्क',
      descEN: 'Letter of Credit (LC) advising commission fees, SWIFT message processing tolls, and currency conversion spread markups.',
      descHI: 'साख पत्र (LC) सलाह आयोग शुल्क, स्विफ्ट (SWIFT) संदेश प्रसंस्करण शुल्क, और मुद्रा रूपांतरण स्प्रेड मार्कअप।'
    },
    {
      titleEN: 'Documentation & Certificates',
      titleHI: 'दस्तावेज़ीकरण और प्रमाण पत्र',
      descEN: 'Chamber attestation bill fees, Certificate Of Origin filings, health certificates, and phytosanitary verification invoices.',
      descHI: 'चैंबर सत्यापन बिल शुल्क, उत्पत्ति का प्रमाण पत्र (COO) फाइलिंग, स्वास्थ्य प्रमाणपत्र और फाइटोसैनिटरी सत्यापन इनवॉइस।'
    }
  ];

  const hiddenCosts = [
    {
      titleEN: 'Demurrage & Detention Invoices',
      titleHI: 'डेमुर्रेज और डिटेंशन इनवॉइस',
      descEN: 'Penalties levied by port terminals or shipping lines for failing to return empty cargo containers on time.',
      descHI: 'खाली कार्गो कंटेनरों को समय पर वापस करने में विफल रहने पर पोर्ट टर्मिनलों या शिपिंग लाइनों द्वारा लगाया जाने वाला जुर्माना।'
    },
    {
      titleEN: 'Exchange Rate Slippage',
      titleHI: 'विनिमय दर फिसलन (Slippage)',
      descEN: 'Unforgiving fluctuations in currency valuation between the sales contract date and the actual banking payment receipt date.',
      descHI: 'बिक्री अनुबंध की तारीख और वास्तविक बैंकिंग भुगतान रसीद की तारीख के बीच मुद्रा मूल्यांकन में भारी उतार-चढ़ाव।'
    },
    {
      titleEN: 'Port Re-Handling & Testing Fees',
      titleHI: 'पोर्ट री-हैंडलिंग और परीक्षण शुल्क',
      descEN: 'Unexpected agricultural laboratory testing fees or customs border security container scans.',
      descHI: 'अप्रत्याशित कृषि प्रयोगशाला परीक्षण शुल्क या सीमा शुल्क सीमा सुरक्षा कंटेनर स्कैन।'
    }
  ];

  return (
    <div id="export-cost-center-root" className="space-y-6">
      {/* Search Header Banner */}
      <div className="bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
        <h2 className="text-xl md:text-2xl font-bold font-display text-slate-900 flex items-center gap-2">
          <Landmark className="w-6 h-6 text-[#1d4ed8]" />
          {t('Export Cost Knowledge Center & FOB/CIF Pricing Simulator', 'निर्यात लागत ज्ञान केंद्र और FOB/CIF मूल्य निर्धारण सिम्युलेटर')}
        </h2>
        <p className="text-xs text-slate-500 leading-relaxed max-w-3xl">
          {t(
            'Understand pricing mathematics. In international trade, every cent counts. Get full visibility into inland logistics, document stamping fees, sovereign port assessments, and interactive financial calculators.',
            'मूल्य निर्धारण गणित को समझें। अंतरराष्ट्रीय व्यापार में, हर एक पैसा मायने रखता है। अंतर्देशीय लॉजिस्टिक्स, दस्तावेज़ मुद्रांकन शुल्क, संप्रभु बंदरगाह मूल्यांकन, और इंटरैक्टिव वित्तीय कैलकुलेटर में पूर्ण दृश्यता प्राप्त करें।'
          )}
        </p>
      </div>

      {/* Primary Cost Categories Block */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {costBreakdownData.map((cost, idx) => (
          <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs hover:shadow-xs transition space-y-3">
            <div className="w-8 h-8 rounded-full bg-blue-50 text-[#1d4ed8] flex items-center justify-center font-bold font-mono text-xs">
              {idx + 1}
            </div>
            <div className="space-y-1 text-left">
              <h4 className="font-bold text-slate-800 text-xs font-display">
                {t(cost.titleEN, cost.titleHI)}
              </h4>
              <p className="text-[10px] text-slate-500 leading-relaxed">
                {t(cost.descEN, cost.descHI)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive FOB/CIF Price Simulator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Interactive Calculator Controls */}
        <div className="lg:col-span-8 bg-[#1e293b] text-white p-5 md:p-6 rounded-xl border border-slate-700 shadow-sm space-y-5">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-700">
            <Calculator className="w-5 h-5 text-blue-400" />
            <div className="text-left">
              <h3 className="font-bold text-sm tracking-tight">{t('Interactive FOB & CIF Pricing Calculator', 'इंटरैक्टिव FOB और CIF मूल्य निर्धारण कैलकुलेटर')}</h3>
              <p className="text-[10px] text-slate-400">{t('Simulate actual product values to calculate FOB (Free On Board) & CIF (Cost, Insurance & Freight) prices instantly.', 'FOB (फ्री ऑन बोर्ड) और CIF (लागत, बीमा और माल भाड़ा) कीमतों की तुरंत गणना करने के लिए वास्तविक उत्पाद मूल्यों को सिमुलेट करें।')}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Input 1 */}
            <div className="space-y-1 text-left">
              <label className="text-[10px] text-slate-350 block font-medium">{t('Product Ex-Works Cost ($)', 'उत्पाद एक्स-वर्क्स लागत ($)')}</label>
              <input
                id="calc-pt-cost"
                type="number"
                value={productCostInput}
                onChange={(e) => setProductCostInput(Number(e.target.value))}
                className="w-full bg-slate-800 border border-slate-650 rounded-[4px] px-2.5 py-1 text-xs text-white"
              />
            </div>
            {/* Input 2 */}
            <div className="space-y-1 text-left">
              <label className="text-[10px] text-slate-350 block font-medium">{t('Export Packaging ($)', 'निर्यात पैकेजिंग लागत ($)')}</label>
              <input
                id="calc-pkg-cost"
                type="number"
                value={packagingCostInput}
                onChange={(e) => setPackagingCostInput(Number(e.target.value))}
                className="w-full bg-slate-800 border border-slate-650 rounded-[4px] px-2.5 py-1 text-xs text-white"
              />
            </div>
            {/* Input 3 */}
            <div className="space-y-1 text-left">
              <label className="text-[10px] text-slate-350 block font-medium">{t('Inland Freight ($)', 'इनलैंड माल ढुलाई ($)')}</label>
              <input
                id="calc-inland-freight"
                type="number"
                value={inlandFreightInput}
                onChange={(e) => setInlandFreightInput(Number(e.target.value))}
                className="w-full bg-slate-800 border border-slate-650 rounded-[4px] px-2.5 py-1 text-xs text-white"
              />
            </div>
            {/* Input 4 */}
            <div className="space-y-1 text-left">
              <label className="text-[10px] text-slate-350 block font-medium">{t('Documentation Stamping ($)', 'दस्तावेज़ीकरण स्टांपिंग ($)')}</label>
              <input
                id="calc-docs-cost"
                type="number"
                value={documentationInput}
                onChange={(e) => setDocumentationInput(Number(e.target.value))}
                className="w-full bg-slate-800 border border-slate-650 rounded-[4px] px-2.5 py-1 text-xs text-white"
              />
            </div>
            {/* Input 5 */}
            <div className="space-y-1 text-left">
              <label className="text-[10px] text-slate-350 block font-medium">{t('Customs Clearance ($)', 'कस्टम क्लीयरेंस और दाखिल ($)')}</label>
              <input
                id="calc-customs-clear"
                type="number"
                value={customsInput}
                onChange={(e) => setCustomsInput(Number(e.target.value))}
                className="w-full bg-slate-800 border border-slate-650 rounded-[4px] px-2.5 py-1 text-xs text-white"
              />
            </div>
            {/* Input 6 */}
            <div className="space-y-1 text-left">
              <label className="text-[10px] text-slate-350 block font-medium">{t('Ocean Freight ($)', 'फ्री महासागर कार्गो माल ढुलाई ($)')}</label>
              <input
                id="calc-ocean-freight"
                type="number"
                value={oceanFreightInput}
                onChange={(e) => setOceanFreightInput(Number(e.target.value))}
                className="w-full bg-slate-800 border border-slate-650 rounded-[4px] px-2.5 py-1 text-xs text-white"
              />
            </div>
            {/* Input 7 */}
            <div className="space-y-1 text-left">
              <label className="text-[10px] text-slate-350 block font-medium">{t('Marine Transit Insurance ($)', 'समुद्री पारगमन बीमा ($)')}</label>
              <input
                id="calc-insurance-cost"
                type="number"
                value={insuranceInput}
                onChange={(e) => setInsuranceInput(Number(e.target.value))}
                className="w-full bg-slate-800 border border-slate-650 rounded-[4px] px-2.5 py-1 text-xs text-white"
              />
            </div>
            {/* Input 8 */}
            <div className="space-y-1 text-left">
              <label className="text-[10px] text-slate-350 block font-medium">{t('Bank Message Charges ($)', 'बैंक प्रसंस्करण संदेश शुल्क ($)')}</label>
              <input
                id="calc-bank-cost"
                type="number"
                value={bankChargesInput}
                onChange={(e) => setBankChargesInput(Number(e.target.value))}
                className="w-full bg-slate-800 border border-slate-650 rounded-[4px] px-2.5 py-1 text-xs text-white"
              />
            </div>
          </div>

          {/* Calculator Results display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-slate-705">
            <div className="p-4 bg-slate-800 rounded-lg border border-slate-700 space-y-1 text-left">
              <span className="text-[9px] font-mono text-blue-400 font-bold uppercase tracking-widest">{t('FOB COMMERCIAL EXPORT PRICE', 'FOB वाणिज्यिक निर्यात मूल्य')}</span>
              <div className="flex items-baseline gap-1">
                <span className="text-xl md:text-2xl font-black font-display text-white">${fobPrice.toLocaleString()}</span>
                <span className="text-[10px] text-slate-400 font-mono">USD</span>
              </div>
              <p className="text-[9px] text-slate-400 leading-tight">
                {t('Covers all physical products up to delivery inside the departure cargo liner vessel.', 'प्रस्थान कार्गो जहाजों के भीतर माल पहुँचाने तक की सभी भौतिक वस्तुओं को कवर करता है।')}
              </p>
            </div>

            <div className="p-4 bg-slate-800 rounded-lg border border-slate-700 space-y-1 text-left">
              <span className="text-[9px] font-mono text-emerald-400 font-bold uppercase tracking-widest">{t('CIF DESTINATION IMPORT PRICE', 'CIF गंतव्य आयात मूल्य')}</span>
              <div className="flex items-baseline gap-1">
                <span className="text-xl md:text-2xl font-black font-display text-white">${cifPrice.toLocaleString()}</span>
                <span className="text-[10px] text-slate-400 font-mono">USD</span>
              </div>
              <p className="text-[9px] text-slate-400 leading-tight">
                {t('Includes FOB plus ocean freight rates and marine risk transit values up to target harbor arrival.', 'लक्षित बंदरगाह कूरियर आगमन तक FOB के साथ महासागर माल ढुलाई दर और समुद्री जोखिम पारगमन मूल्यों को शामिल करता है।')}
              </p>
            </div>
          </div>
        </div>

        {/* Right column: Hidden Costs warnings */}
        <div className="lg:col-span-4 bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm space-y-4 text-left">
          <h4 className="text-xs font-bold text-slate-705 uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-100 pb-2">
            <ShieldAlert className="w-4 h-4 text-rose-650" />
            {t('Hidden Trade Cost Blackholes', 'छिपे हुए अतिरिक्त व्यापारिक खर्च')}
          </h4>

          <div className="space-y-3">
            {hiddenCosts.map((cost, id) => (
              <div key={id} className="space-y-1 bg-rose-50/20 p-3 rounded-lg border border-rose-100/50">
                <h5 className="font-bold text-slate-850 text-xs">
                  {t(cost.titleEN, cost.titleHI)}
                </h5>
                <p className="text-[10px] text-slate-500 leading-relaxed">
                  {t(cost.descEN, cost.descHI)}
                </p>
              </div>
            ))}
          </div>

          <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 flex items-start gap-1.5">
            <Info className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
            <p className="text-[10px] text-amber-900 leading-normal">
              {t(
                'Remember to clearly specify standard Incoterms to determine who pays which component from these points to avoid litigation.',
                'मुकदमों से बचने के लिए यह स्पष्ट रूप से निर्दिष्ट करें कि इन बिंदुओं से संबंधित शुल्क का भुगतान कौन करेगा।'
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
