import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FileText, Download, Printer, Copy, CheckCircle } from 'lucide-react';

interface Resource {
  id: string;
  titleEN: string;
  titleHI: string;
  descEN: string;
  descHI: string;
  contentEN: string;
  contentHI: string;
}

const downloadResources: Resource[] = [
  {
    id: 'incoterms',
    titleEN: 'Incoterms 2020 Cheat Sheet',
    titleHI: 'Incoterms 2020 संक्षिप्त चार्ट',
    descEN: 'A standard comprehensive text summary of the 11 Incoterms rules, responsibilities, and risk divisions.',
    descHI: '11 इंकोटर्म्स नियमों, जिम्मेदारियों और जोखिम विभाजनों का एक मानक व्यापक पाठ सारांश।',
    contentEN: `INCOTERMS 2020 REFERENCE SHEET - EXPORT IMPORT HUB
--------------------------------------------------
EXW (Ex Works): Seller holds minimum responsibility. Buyer covers all freight, customs, and duties.
FCA (Free Carrier): Seller delivers cargo to buyer specified carrier. Risk transfers at cargo handover.
FAS (Free Alongside Ship): Seller places goods beside maritime vessel. Buyer handles all ship loading risks.
FOB (Free On Board): Seller clears local custom customs and loads cargo on vessel. Risk transfers at ship rail.
CFR (Cost and Freight): Seller pays freight to destination harbor. Risk transfers at departure point.
CIF (Cost, Insurance & Freight): Seller pays CFR values plus marine transit risk insurance.
CPT (Carriage Paid To): Seller covers transport up to nominated arrival station. Risk transfers at carrier hand over.
CIP (Carriage & Insurance Paid): Seller covers CPT values plus active transit insurance policies.
DAP (Delivered at Place): Seller delivers to destination. Buyer manages import customs clearances and taxes.
DPU (Delivered at Place Unloaded): Seller unloads cargo at agreed destination.
DDP (Delivered Duty Paid): Seller handles absolute end-to-end logistics, including import customs and local tax duties.`,
    contentHI: `इन्कोटर्म्स 2020 संदर्भ पत्र - एक्सपोर्ट इम्पोर्ट हब
--------------------------------------------------
EXW (एक्स वर्क्स): विक्रेता की न्यूनतम जिम्मेदारी। खरीदार सभी माल ढुलाई, सीमा शुल्क को कवर करता है।
FCA (फ्री कैरियर): विक्रेता खरीदार द्वारा निर्दिष्ट वाहक को कार्गो वितरित करता है।
FAS (फ्री अलोंगसाइड शिप): विक्रेता बंदरगाह पर प्रस्थान जहाज के किनारे माल रखता है।
FOB (फ्री ऑन बोर्ड): विक्रेता स्थानीय सीमा शुल्क साफ करता है और जहाज पर माल लोड करता है।
CFR (लागत और माल भाड़ा): विक्रेता गंतव्य बंदरगाह तक माल ढुलाई का भुगतान करता है।
CIF (लागत, बीमा और माल भाड़ा): विक्रेता CFR मूल्यों और समुद्री पारगमन जोखिम बीमा का भुगतान करता है।
CPT (वहन मार्ग शुल्क भुगतान): विक्रेता नामित आगमन स्टेशन तक परिवहन को कवर करता है।
CIP (वहन और बीमा विवरण): विक्रेता CPT मूल्यों के साथ-साथ सक्रिय पारगमन बीमा पॉलिसियों को कवर करता है।
DAP (गंतव्य स्थान पर सुपुर्दगी): विक्रेता गंतव्य तक पहुंचाता है। खरीदार आयात सीमा शुल्क प्रबंधित करता है।
DPU (गंतव्य स्थान पर अनलोड सुपुर्दगी): विक्रेता सहमत गंतव्य पर कार्गो को उतारता है।
DDP (शुल्क भुगतान सुपुर्दगी): विक्रेता आयात सीमा शुल्क और स्थानीय करों सहित पूर्ण लॉजिस्टिक्स संभालता है।`
  },
  {
    id: 'export_checklist',
    titleEN: 'Compulsory Export Action Checklist',
    titleHI: 'अनिवार्य निर्यात कार्रवाई चेकलिस्ट',
    descEN: 'The master checklist of operations required prior to launching ship cargo containers.',
    descHI: 'शिप कार्गो कंटेनर लॉन्च करने से पहले आवश्यक संचालन की मास्टर चेकलिस्ट।',
    contentEN: `COMPULSORY EXPORT CHECKLIST - EXPORT IMPORT HUB
-----------------------------------------------
1. Obtain company PAN index registration.
2. Form proprietary or corporate entity structure.
3. Establish active bank account (including Authorized Dealer code).
4. Secure Importer-Exporter Code (IEC) from DGFT portal.
5. Apply and secure RCMC membership with relevant Export Promotion Councils.
6. Verify HSN system codes for selected product lines.
7. Perform strict credit check on foreign buyers (e.g. utilize ECGC).
8. Secure Marine Cargo Transit Insurance.
9. Verify fumigation stamps (ISPM-15) for wooden packaging palletes.
10. Confirm receipt of secured Letter of Credit (LC) from buyers bank.`,
    contentHI: `अनिवार्य निर्यात चेकलिस्ट - एक्सपोर्ट इम्पोर्ट हब
-----------------------------------------------
1. कंपनी पैन (PAN) विनिर्देश पंजीकरण प्राप्त करें।
2. स्वामित्व या कॉर्पोरेट कानूनी व्यवसायिक इकाई का गठन करें।
3. एडी (AD) कोड के साथ बैंक खाता खोलें।
4. DGFT पोर्टल से Importer-Exporter Code (IEC) प्राप्त करें।
5. संबंधित एक्सपोर्ट प्रमोशन काउंसिल (EPC) के साथ RCMC सदस्यता प्राप्त करें।
6. चयनित उत्पाद लाइनों के लिए HSN प्रणाली कोड को सत्यापित करें।
7. विदेशी खरीदारों पर क्रेडिट चेक करें (जैसे ECGC माध्यम से)।
8. समुद्री कार्गो पारगमन बीमा (Marine Insurance) सुरक्षित करें।
9. लकड़ी की पैकेजिंग के लिए धूमन (ISPM-15) टिकटों को सत्यापित करें।
10. खरीदार बैंक से सुरक्षित साख पत्र (LC) की प्राप्ति की पुष्टि करें।`
  },
  {
    id: 'import_checklist',
    titleEN: 'Comprehensive Import Compliance Protocol',
    titleHI: 'व्यापक आयात अनुपालन प्रोटोकॉल',
    descEN: 'Steps required to clear arrival cargo boxes without sovereign penalties.',
    descHI: 'बिना किसी संप्रभु दंड के आगमन कार्गो बॉक्स को साफ करने के लिए आवश्यक कदम।',
    contentEN: `COMPREHENSIVE IMPORT PROTOCOL - EXPORT IMPORT HUB
-----------------------------------------------
1. Verify domestic HS code eligibility of cargo items.
2. Confirm item is not under restricted, prohibited, or quota classifications.
3. Provide registered IEC code on all Bill of Entry lines.
4. Establish custom clearing agent appointments (CHAs) prior to vessel arrival.
5. Track and secure master Bill of Lading (B/L) or Airway Bill.
6. Submit advance Bill of Entry online via ICEGATE.
7. Prepare full payment for customs duties and IGST rates.
8. Arrange immediate inland transport trucks for port harbor discharge.
9. Coordinate quarantine checks (phytosanitary, health, CE) instantly on border.
10. Ensure storage facilities are ready to prevent demurrage charges.`,
    contentHI: `व्यापक आयात प्रोटोकॉल - एक्सपोर्ट इम्पोर्ट हब
-----------------------------------------------
1. कार्गो वस्तुओं की घरेलू एचएस (HS) कोड पात्रता को सत्यापित करें।
2. पुष्टि करें कि वस्तु प्रतिबंधित, निषिद्ध या कोटा वर्गीकरण के अंतर्गत नहीं है।
3. सभी बिल ऑफ एंट्री लाइनों पर पंजीकृत आईईसी (IEC) कोड प्रदान करें।
4. जहाज के आगमन से पहले कस्टम हाउस एजेंट (CHA) की नियुक्ति करें।
5. मास्टर लदान बिल (B/L) या हवाई मार्ग बिल को ट्रैक और सुरक्षित करें।
6. ICEGATE के माध्यम से अग्रिम बिल ऑफ एंट्री ऑनलाइन जमा करें।
7. सीमा शुल्क (Custom Duty) और IGST दरों के पूर्ण भुगतान के लिए वित्तीय व्यवस्था करें।
8. बंदरगाह निकासी के लिए तत्काल इनलैंड परिवहन ट्रकों की व्यवस्था करें।
9. सीमा पर संगरोध जांच (फाइटोसैनिटरी, स्वास्थ्य, सीई) का समन्वय करें।
10. अतिरिक्त बंदरगाह शुल्क (demurrage) से बचने के लिए भंडारण सुविधाओं को तैयार रखें।`
  },
  {
    id: 'docs_checklist',
    titleEN: 'Standard Maritime Documentation Audit List',
    titleHI: 'मानक समुद्री दस्तावेज़ीकरण ऑडिट सूची',
    descEN: 'A compliance auditor sheet verifying twelve key international trade papers.',
    descHI: 'बारह प्रमुख अंतरराष्ट्रीय व्यापार दस्तावेजों को सत्यापित करने वाला ऑडिट प्रपत्र।',
    contentEN: `STANDARD DOCUMENT AUDIT CHECKS - EXPORT IMPORT HUB
--------------------------------------------------
- Commercial Invoice: Check name matching, unit prices, value summaries, and HSN codes.
- Packing List: Verify net-to-gross weight ratios, box dimensions, and total pallet sums.
- Bill of Lading: Check shipper description, notify party, port of discharge, and "Shipped on Board" stamps.
- Certificate of Origin: Ensure authorized Chamber seals and clear country trace marks.
- Insurance Policy: Verify coverage matches CIF contract values plus 10%.
- Phytosanitary Certificate: Confirm zero pest signatures on natural goods.
- Fumigation Certificate: Verify valid chemicals (Methyl Bromide) and stamp timelines.
- Inspection Tally: Confirm quality specifications conform under laboratory audits.`,
    contentHI: `मानक दस्तावेज़ ऑडिट चेक - एक्सपोर्ट इम्पोर्ट हब
--------------------------------------------------
- कमर्शियल इनवॉइस (Commercial Invoice): नाम मिलान, इकाई मूल्य, और HSN कोड।
- पैकिंग सूची (Packing List): कुल वजन माप अनुपात, बॉक्स आयाम और पैलेट गणना।
- लदान बिल (Bill of Lading): शिपर विवरण, नोटीफाई पार्टी, निर्वहन बंदरगाह, और स्टांप।
- उत्पत्ति का प्रमाण पत्र (Certificate of Origin): अधिकृत चैंबर सील सुनिश्चित करें।
- बीमा पॉलिसी (Insurance Policy): सत्यापित करें कि कवरेज अनुबंध मूल्यों से मेल खाता है।
- फाइटोसैनिटरी सर्टिफिकेट: प्राकृतिक वस्तुओं पर शून्य कीट हस्ताक्षरों की पुष्टि करें।
- धूमन प्रमाणपत्र (Fumigation Certificate): मान्य रसायनों और स्टांप समयसीमा को सत्यापित करें।
- निरीक्षण रिपोर्ट: प्रयोगशाला विश्लेषण के तहत विनिर्देशों के अनुरूप होने की पुष्टि करें।`
  },
  {
    id: 'export_process_flow',
    titleEN: '9-Step Export Process Flow Cheat Sheet',
    titleHI: '9-चरण निर्यात प्रक्रिया फ्लो शीट',
    descEN: 'An academic guide reflecting the full step progression from product selection to payment collection.',
    descHI: 'उत्पाद चयन से लेकर भुगतान संग्रह तक की पूर्ण चरण प्रगति को दर्शाने वाली व्यावहारिक संदर्भ शीट।',
    contentEN: `9-STEP EXPORT MASTER PIPELINE - EXPORT IMPORT HUB
------------------------------------------------
1. Product Selection: Identify high-yield local products.
2. Market Research: Locate high-volume import target nations.
3. DGFT Codes Registration: Setup lifetime IEC licenses.
4. Sourcing Buyers: Sourcing leads via trade fairs, chamber indices.
5. Quotation Drafting: Quote prices under FOB or CIF Incoterms.
6. Order Locks: Contract Purchase Orders and lock bank LCs.
7. Documentation: File shipping bills, packaging lists.
8. Ship Load: Customs clearance, marine loading stamps (LEO).
9. Bank Clearance: Present clean BL sheets to claim currency cash.`,
    contentHI: `9-चरण निर्यात मास्टर पाइपलाइन - एक्सपोर्ट इम्पोर्ट हब
------------------------------------------------
1. उत्पाद चयन: उच्च उपज वाले स्थानीय उत्पादों की पहचान।
2. बाजार अनुसंधान: उच्च मात्रा में आयातक लक्ष्य देशों का पता लगाएं।
3. DGFT आईईसी लाइसेंस पंजीकरण: लाइफटाइम आईईसी पहचान पत्र स्थापित करें।
4. खरीदारों की खोज: वैश्विक व्यापार मेलों, चैंबरों के माध्यम से खरीदार ढूंढें।
5. उद्धरण मसौदा (Quotation): FOB या CIF इंकोटर्म्स के तहत कीमतें उद्धृत करें।
6. ऑर्डर लॉक करना: सुनिश्चित खरीद आदेश और सुरक्षित बैंक एलसी (LC) अनुबंधित करें।
7. शिपिंग दस्तावेज़ीकरण: सीमा शुल्क पैकेजिंग सूची, इनवॉइस संकलन फ़ाइल।
8. शिप लोड: सीमा शुल्क निकासी, समुद्री प्रस्थान लोडिंग (LEO)।
9. बैंक निपटान: प्रेषण नकदी का दावा करने के लिए बैंक में साफ बीएल प्रस्तुत करें।`
  }
];

export function DownloadCenter() {
  const { t, language } = useLanguage();
  const [activeResId, setActiveResId] = useState<string>('incoterms');
  const [copied, setCopied] = useState<boolean>(false);

  const selectedResource = downloadResources.find(r => r.id === activeResId) || downloadResources[0];

  const handleDownloadText = () => {
    const textContent = language === 'hi' ? selectedResource.contentHI : selectedResource.contentEN;
    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${selectedResource.id}_guide_${language}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyToClipboard = () => {
    const textContent = language === 'hi' ? selectedResource.contentHI : selectedResource.contentEN;
    navigator.clipboard.writeText(textContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="download-center-root" className="space-y-6">
      {/* Search Header Banner */}
      <div className="bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm space-y-3 text-left">
        <h2 className="text-xl md:text-2xl font-bold font-display text-slate-900 flex items-center gap-2">
          <FileText className="w-6 h-6 text-[#1d4ed8]" />
          {t('Interactive Export-Import Download & Reference Center', 'इंटरैक्टिव एक्सपोर्ट-इंपोर्ट डाउनलोड और संदर्भ केंद्र')}
        </h2>
        <p className="text-xs text-slate-500 leading-relaxed max-w-3xl">
          {t(
            'Access high-fidelity export-import educational cheatsheets. Choose a resource category below to preview, copy to your clipboard, print or download directly as clear text files.',
            'उच्च गुणवत्ता वाले आयात-निर्यात व्यावहारिक चीट-शीट विवरणों तक पहुँचें। पूर्वावलोकन करने, क्लिपबोर्ड पर कॉपी करने, प्रिंट करने या सीधे डाउनलोड करने के लिए नीचे दी गई श्रेणियों में से चुनें।'
          )}
        </p>

        {/* Resource selection tabs */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {downloadResources.map((res) => (
            <button
              id={`dl-res-btn-${res.id}`}
              key={res.id}
              onClick={() => setActiveResId(res.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-[6px] border transition cursor-pointer ${
                activeResId === res.id
                  ? 'bg-[#1d4ed8] text-white border-[#1d4ed8] shadow-xs'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-[#e2e8f0]'
              }`}
            >
              {language === 'hi' ? res.titleHI : res.titleEN}
            </button>
          ))}
        </div>
      </div>

      {/* Main Preview Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left preview screen */}
        <div className="lg:col-span-8 bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm space-y-4 text-left">
          <div className="flex flex-wrap justify-between items-center gap-4 pb-3 border-b border-slate-100">
            <div>
              <h3 className="text-base font-bold text-slate-800 font-display">
                {language === 'hi' ? selectedResource.titleHI : selectedResource.titleEN}
              </h3>
              <p className="text-[10px] text-slate-400 font-mono">
                {language === 'hi' ? selectedResource.descHI : selectedResource.descEN}
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-2 shrink-0">
              <button
                id="dl-btn-run"
                onClick={handleDownloadText}
                className="px-3 py-1.5 bg-[#1d4ed8] hover:bg-blue-750 text-white rounded-[6px] text-xs font-semibold flex items-center gap-1 cursor-pointer transition"
              >
                <Download className="w-3.5 h-3.5" />
                {t('Download .TXT', 'डाउनलोड .TXT')}
              </button>

              <button
                id="dl-btn-copy"
                onClick={handleCopyToClipboard}
                className="px-3 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 rounded-[6px] text-xs font-semibold flex items-center gap-1 cursor-pointer transition"
              >
                <Copy className="w-3.5 h-3.5" />
                {copied ? t('Copied!', 'कॉपी हो गया!') : t('Copy Text', 'कॉपी टेक्स्ट')}
              </button>

              <button
                id="dl-btn-print"
                onClick={() => window.print()}
                className="px-3 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 rounded-[6px] text-xs font-semibold flex items-center gap-1 cursor-pointer transition"
              >
                <Printer className="w-3.5 h-3.5" />
                {t('Print', 'प्रिंट करें')}
              </button>
            </div>
          </div>

          {/* Textarea preview block */}
          <pre className="p-4 bg-slate-900 text-slate-100 rounded-lg text-xs overflow-x-auto font-mono whitespace-pre-wrap leading-relaxed shadow-inner border border-slate-950 h-96">
            {language === 'hi' ? selectedResource.contentHI : selectedResource.contentEN}
          </pre>
        </div>

        {/* Right side educational overview */}
        <div className="lg:col-span-4 bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm space-y-4 text-left">
          <h4 className="text-xs font-bold text-slate-705 uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-100 pb-2">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            {t('Academic Reference Index', 'अकादमिक संदर्भ सूचकांक')}
          </h4>
          <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
            {t(
              'These resources are designed for quick references inside trading offices, clearing docks, customs clearance checks, and shipping cargo containers.',
              'ये संसाधन व्यापारिक कार्यालयों, क्लीयरेंस डॉक, सीमा शुल्क निकासी चेक और शिपिंग कार्गो कंटेनरों के भीतर त्वरित संदर्भों के लिए डिज़ाइन किए गए हैं।'
            )}
          </p>
          <div className="p-3 bg-blue-50/50 border border-blue-150 rounded-lg text-[10px] text-slate-600 space-y-1">
            <span className="font-bold text-[#1d4ed8] block">{t('COMPLIANCE NOTE:', 'अनुपालन विवरण:')}</span>
            <p className="leading-normal font-sans">
              {t(
                'Remember to verify active custom forms with terminal ports prior to vessel loading as local regulations change frequently.',
                'स्थानीय स्तर पर बंदरगाह सीमा नियमों में बदलाव के कारण लोडिंग से पहले टर्मिनल बंदरगाहों के साथ सक्रिय सीमा शुल्क रूपों को सत्यापित करें।'
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
