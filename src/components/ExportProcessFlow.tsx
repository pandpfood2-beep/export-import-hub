import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Compass, ChevronRight, ArrowRight, ArrowDown, Search, Award, FileText, CheckCircle } from 'lucide-react';

interface StepDetail {
  id: number;
  titleEN: string;
  titleHI: string;
  descEN: string;
  descHI: string;
  checklistEN: string[];
  checklistHI: string[];
}

const stepsData: StepDetail[] = [
  {
    id: 1,
    titleEN: 'Product Selection',
    titleHI: 'उत्पाद का चयन',
    descEN: 'Identify a globally high-demand commodity (e.g., spices, engineering parts) matching your regional manufacturing strength and margins.',
    descHI: 'अपनी क्षेत्रीय विनिर्माण ताकत और मुनाफे से मेल खाने वाली अत्यधिक वैश्विक मांग वाली वस्तुओं (जैसे, मसाले, वस्त्र, इंजीनियरिंग सामान) की पहचान करें।',
    checklistEN: ['Check HSN code chapters', 'Analyze domestic supply consistency', 'Verify export bans/quotas'],
    checklistHI: ['एचएसएन कोड अध्यायों की जाँच करें', 'घरेलू आपूर्ति स्थिरता का विश्लेषण करें', 'सरकारी निर्यात प्रतिबंधों/कोटा को सत्यापित करें']
  },
  {
    id: 2,
    titleEN: 'Market Research',
    titleHI: 'बाजार अनुसंधान और विश्लेषण',
    descEN: 'Screen importing countries to measure tariff duties, trade barriers, local competition stats, and specific consumer preferences.',
    descHI: 'टैरिफ कर्तव्यों, व्यापार बाधाओं, स्थानीय प्रतिस्पर्धा आंकड़ों और विशिष्ट उपभोक्ता प्राथमिकताओं को मापने के लिए आयातक देशों की जांच करें।',
    checklistEN: ['Check country import volumes', 'Assess custom duties via global tariffs', 'Study target shipping transit times'],
    checklistHI: ['देश के आयात मात्रा की जाँच करें', 'वैश्विक टैरिफ के माध्यम से सीमा शुल्क का आकलन करें', 'शिपमेंट पारगमन समय का अध्ययन करें']
  },
  {
    id: 3,
    titleEN: 'IEC Registration',
    titleHI: 'आईईसी (IEC) पंजीकरण कानूनी प्रक्रिया',
    descEN: 'Apply online at dgft.gov.in to secure a lifetime Importer-Exporter Code. Register other entity profiles like GST or AD codes.',
    descHI: 'लाइफटाइम आयात-निर्यात कोड सुरक्षित करने के लिए dgft.gov.in पर ऑनलाइन आवेदन करें। जीएसटी या एडी बैंक कोड जैसे अन्य आवश्यक प्रोफाइल पंजीकृत करें।',
    checklistEN: ['DGFT e-IEC certificate', 'Bank Authorized Dealer AD code registration', 'RCMC registration with EPCs'],
    checklistHI: ['DGFT ई-आईईसी प्रमाणपत्र प्राप्त करें', 'एडी कोड बैंक पंजीकरण', 'EPCs के साथ RCMC सदस्यता लें']
  },
  {
    id: 4,
    titleEN: 'Buyer Search & Sourcing',
    titleHI: 'विदेशी खरीदार की खोज',
    descEN: 'Sourcing foreign buyer leads via international trade fairs, B2B portals (Alibaba, Indiamart), global commodity councils, and chamber directories.',
    descHI: 'अंतरराष्ट्रीय व्यापार मेलों, बी2बी दूरस्थ पोर्टलों, वैश्विक कमोडिटी परिषदों और चैंबर निर्देशिकाओं की मदद से विदेशी खरीदार लीड प्राप्त करना।',
    checklistEN: ['Utilize trade council directories', 'Perform D&B credit scoring checks on buyers', 'Post offers on B2B marketplaces'],
    checklistHI: ['व्यापार परिषद निर्देशिकाओं का लाभ उठाएं', 'खरीदारों पर डी एंड बी क्रेडिट स्कोरिंग चेक चलाएं', 'B2B मार्केटप्लेस पर व्यापार प्रस्ताव डालें']
  },
  {
    id: 5,
    titleEN: 'Quotation Drafting',
    titleHI: 'उद्धरण और मूल्य निर्धारण (Quotation)',
    descEN: 'Draft proforma invoices. Quote clear global commercial prices under designated Incoterms 2020 rules (e.g. FOB, CIF) based on accurate logistics estimates.',
    descHI: 'प्रोफार्मा चालान का मसौदा तैयार करें। सटीक लॉजिस्टिक्स आकलन के आधार पर निर्दिष्ट Incoterms 2020 नियमों (जैसे FOB, CIF) के तहत स्पष्ट वैश्विक वाणिज्यिक कीमतें उद्धृत करें।',
    checklistEN: ['Specify Incoterms guidelines', 'Disclose currency index and bank details', 'Outline clear payment milestones'],
    checklistHI: ['Incoterms दिशानिर्देशों को निर्दिष्ट करें', 'मुद्रा सूचकांक और बैंक खाते का खुलासा करें', 'स्पष्ट भुगतान तिथियों की रूपरेखा तैयार करें']
  },
  {
    id: 6,
    titleEN: 'Order Confirmation',
    titleHI: 'ऑर्डर की पुष्टि (Purchase Order)',
    descEN: 'Receive a legally binding Purchase Order (PO). Establish secure Letters of Credit (LC) with foreign buyer banks prior to raw fabric operations.',
    descHI: 'कानूनी रूप से बाध्यकारी खरीद आदेश (PO) प्राप्त करें। उत्पादन कार्य शुरू होने से पहले विदेशी खरीदार बैंकों के साथ सुरक्षित साख पत्र (LC) स्थापित करें।',
    checklistEN: ['Counter-verify PO signatures', 'Audit Letter of Credit parameters at bank', 'Prepare production planning sheets'],
    checklistHI: ['PO हस्ताक्षरों का प्रति-सत्यापन करें', 'बैंक में साख पत्र (LC) मापदंडों का ऑडिट करें', 'उत्पादन योजना विवरण पत्र तैयार करें']
  },
  {
    id: 7,
    titleEN: 'Trade Documentation',
    titleHI: 'शिपिंग दस्तावेज़ीकरण',
    descEN: 'Prepare mandatory commercial accounts. Appoint Custom Brokers (CHAs) to compile shipping bills and certificate documents.',
    descHI: 'अनिवार्य वाणिज्यिक दस्तावेज तैयार करें। शिपिंग बिल और प्रमाणपत्र संकलित करने के लिए कस्टम हाउस एजेंटों (CHAs) की नियुक्ति करें।',
    checklistEN: ['Commercial Invoice & Packing list', 'Draft Bills of lading with sea carriers', 'Obtain Phytosanitary certifications'],
    checklistHI: ['कमर्शियल इनवॉइस और पैकिंग सूची', 'समुद्री जहाजों के साथ लदान बिल लोड ड्राफ्ट', 'फाइटोसैनिटरी प्रमाणपत्र प्राप्त करें']
  },
  {
    id: 8,
    titleEN: 'Shipment and Dispatch',
    titleHI: 'शिपमेंट और कंटेनर प्रेषण',
    descEN: 'Pack cargo in container units. Haul packages to container freight stations (CFS), get custom border approvals (LEO) and load physical ship liners.',
    descHI: 'माल को कंटेनर इकाइयों में पैक करें। पैकेजों को कंटेनर फ्रेट स्टेशनों (CFS) तक ले जाएं, सीमा शुल्क मंजूरी (LEO) प्राप्त करें और जहाजों पर लोड करें।',
    checklistEN: ['Fumigate with ISPM-15 seals', 'Receive Customs Let Export Order (LEO)', 'Receive Master Bill of Lading (BL)'],
    checklistHI: ['ISPM-15 सील के साथ धूमन करें', 'सीमा शुल्क निर्यात आदेश (LEO) प्राप्त करें', 'मास्टर लदान बिल (BL) प्राप्त करें']
  },
  {
    id: 9,
    titleEN: 'Payment Collection',
    titleHI: 'भुगतान संग्रह और निपटान',
    descEN: 'Present clean shipping documents to dealer banks under the LC rule. Banks collect funds via SWIFT message transfers.',
    descHI: 'LC नियमों के तहत अधिकृत बैंकों को साफ शिपिंग दस्तावेज प्रस्तुत करें। बैंक स्विफ्ट (SWIFT) संदेश स्थानान्तरण के माध्यम से विदेशी मुद्रा सुरक्षित करते हैं।',
    checklistEN: ['Present clean documents to bank', 'Perform currency forex conversions', 'FEMA Bank realization certificate (BRC) filing'],
    checklistHI: ['बैंक में स्वच्छ दस्तावेज प्रस्तुत करें', 'फॉरेक्स विनिमय दर रूपांतरण करें', 'BRC बैंक प्राप्ति प्रमाणपत्र फाइलिंग दर्ज करें']
  }
];

export function ExportProcessFlow() {
  const { t, language } = useLanguage();
  const [activeStep, setActiveStep] = useState<number>(1);

  const currentStep = stepsData.find(s => s.id === activeStep) || stepsData[0];

  return (
    <div id="export-process-flow-root" className="space-y-6">
      {/* Search Header Banner */}
      <div className="bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm space-y-3 text-left">
        <h2 className="text-xl md:text-2xl font-bold font-display text-slate-900 flex items-center gap-2">
          <Compass className="w-6 h-6 text-[#1d4ed8]" />
          {t('Interactive 9-Step Export Process Flow Center', 'इंटरैक्टिव 9-चरण निर्यात प्रक्रिया फ्लो सेंटर')}
        </h2>
        <p className="text-xs text-slate-500 leading-relaxed max-w-3xl">
          {t(
            'Explore the end-to-end global trade pipeline. Interact with the visual flow below to see critical actions, legal checklists, and document checkpoints for every stage of your export journey.',
            'शुरू से अंत तक वैश्विक व्यापार पाइपलाइन का अन्वेषण करें। प्रत्येक चरण पर महत्वपूर्ण कार्यों, कानूनी सलाहों और दस्तावेज़ चेकपॉइंट्स को देखने के लिए नीचे दिए गए इंटरैक्टिव फ़्लो का उपयोग करें।'
          )}
        </p>
      </div>

      {/* Visual Workflow Steps Buttons Row (Responsive) */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-4">
        {/* Horizontal Progress Track for Desktops, simple grid on Mobile */}
        <div className="grid grid-cols-3 md:flex md:flex-wrap justify-between items-center gap-2 border-b border-slate-100 pb-4">
          {stepsData.map((step) => {
            const isActive = activeStep === step.id;
            return (
              <button
                id={`flow-step-trigger-${step.id}`}
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`py-2 px-3 text-xs font-semibold rounded-[6px] transition cursor-pointer flex items-center gap-1.5 border ${
                  isActive
                    ? 'bg-[#1d4ed8] text-white border-[#1d4ed8] shadow-3xs'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border-slate-200'
                }`}
              >
                <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                  isActive ? 'bg-white text-[#1d4ed8]' : 'bg-slate-200 text-slate-700'
                }`}>
                  {step.id}
                </span>
                <span className="truncate">{language === 'hi' ? step.titleHI.split(' ')[0] : step.titleEN}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic visual diagram showing Step progression */}
        <div className="flex flex-wrap items-center justify-center gap-2 py-2">
          {stepsData.map((step) => {
            const isCompleted = step.id < activeStep;
            const isCurrent = step.id === activeStep;
            return (
              <React.Fragment key={step.id}>
                <div
                  id={`process-dot-${step.id}`}
                  onClick={() => setActiveStep(step.id)}
                  className={`w-8 h-8 rounded-full border flex items-center justify-center cursor-pointer transition ${
                    isCurrent
                      ? 'bg-blue-600 text-white border-blue-600 scale-110 shadow-sm'
                      : isCompleted
                      ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                      : 'bg-slate-50 text-slate-400 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <span className="font-mono font-bold text-xs">{step.id}</span>
                </div>
                {step.id < 9 && (
                  <ChevronRight className="w-4 h-4 text-slate-300" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Explanatory Step Detail Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left explanation card */}
        <div className="lg:col-span-8 bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm space-y-4 text-left animate-fade-in">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
            <span className="w-8 h-8 rounded-full bg-blue-50 text-[#1d4ed8] font-bold font-mono text-xs flex items-center justify-center">
              0{currentStep.id}
            </span>
            <div>
              <h3 className="text-base font-bold text-slate-800 font-display">
                {language === 'hi' ? currentStep.titleHI : currentStep.titleEN}
              </h3>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest">{t('Active Pipeline Stage', 'सक्रिय पाइपलाइन चरण')}</p>
            </div>
          </div>

          <p className="text-xs text-slate-650 leading-relaxed font-sans">
            {language === 'hi' ? currentStep.descHI : currentStep.descEN}
          </p>
        </div>

        {/* Right checklist card */}
        <div className="lg:col-span-4 bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm space-y-3 text-left">
          <h4 className="text-xs font-bold text-slate-705 uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-100 pb-2">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            {t('Required Action Items', 'आवश्यक विशेष कार्य मदें')}
          </h4>
          <ul className="space-y-2 text-xs text-slate-700">
            {(language === 'hi' ? currentStep.checklistHI : currentStep.checklistEN).map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold font-mono">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
