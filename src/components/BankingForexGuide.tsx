import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Landmark, LandmarkIcon, CheckSquare, ShieldCheck, ChevronRight, HelpCircle } from 'lucide-react';

export function BankingForexGuide() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'payments' | 'forex'>('payments');

  const paymentGuides = [
    {
      titleEN: 'SWIFT Transfer',
      titleHI: 'स्विफ्ट ट्रांसफर (SWIFT)',
      type: 'BANKING PROTOCOL',
      descEN: 'Society for Worldwide Interbank Financial Telecommunication. A standardized global secure network containing unique BIC bank identifiers that registers and settles payment instructions between global banks.',
      descHI: 'सोसायटी फॉर वर्ल्डवाइड इंटरबैंक फाइनेंशियल टेलीकम्युनिकेशन। एक मानकीकृत वैश्विक सुरक्षित नेटवर्क जिसमें अद्वितीय बीआईसी बैंक पहचानकर्ता शामिल हैं जो वैश्विक बैंकों के बीच भुगतान निर्देशों का निपटान करता है।'
    },
    {
      titleEN: 'Telegraphic Transfer (TT Payment)',
      titleHI: 'टेलीग्राफिक ट्रांसफर (TT भुगतान)',
      type: 'WIRE METHOD',
      descEN: 'Electronic funds transfer via local banks acting directly as wiring transfers. Usually completed within 24-48 hours. Carries higher risks for buyer if sent as full advance payments.',
      descHI: 'सीधे वायरिंग स्थानान्तरण के रूप में कार्य करने वाले स्थानीय बैंकों के माध्यम से इलेक्ट्रॉनिक फंड ट्रांसफर। आमतौर पर 24-48 घंटों के भीतर पूरा हो जाता है। पूर्ण अग्रिम भुगतान के रूप में भेजे जाने पर खरीदार के लिए उच्च जोखिम।'
    },
    {
      titleEN: 'Letter Of Credit (LC)',
      titleHI: 'साख पत्र / लेटर ऑफ क्रेडिट (LC)',
      type: 'SECURED INSTRUMENT',
      descEN: 'A sovereign banking commitment where the buyer\'s bank guarantees absolute cash delivery to the exporter upon presentation of clean shipping documents matching conditions explicitly.',
      descHI: 'एक संप्रभु बैंकिंग प्रतिबद्धता जहां संप्रभु बैंक निर्यात शर्तों से मेल खाने वाले साफ शिपिंग संविदा दस्तावेजों की प्रस्तुति पर निर्यातक को पूर्ण नकद वितरण की गारंटी देता है।'
    },
    {
      titleEN: 'Export Payment Settlement',
      titleHI: 'निर्यात भुगतान निपटान',
      type: 'RECEIPT FLOW',
      descEN: 'Securing receivables via foreign currency accounts. Regulations like FEMA mandate realizing all export transaction earnings inside 9 months of cargo dispatch.',
      descHI: 'विदेशी मुद्रा खातों के माध्यम से प्राप्य सुरक्षित करना। FEMA जैसे नियम कार्गो प्रेषण के 9 महीनों के भीतर सभी निर्यात लेनदेन की कमाई का निपटान करने का आदेश देते हैं।'
    },
    {
      titleEN: 'Import Payment Settling',
      titleHI: 'आयात भुगतान निपटान',
      type: 'OUTWARD REGISTER',
      descEN: 'Making outward remittances to offshore suppliers. Requires presenting verified Bills of Entry to authorized local dealer bank branches for RBI customs reporting.',
      descHI: 'विदेशी आपूर्तिकर्ताओं को जावक प्रेषण (Remittance) भेजना। RBI सीमा शुल्क रिपोर्टिंग के लिए अधिकृत स्थानीय बैंक शाखाओं में सत्यापित बिल ऑफ एंट्री प्रस्तुत करने की आवश्यकता होती है।'
    }
  ];

  const forexGuides = [
    {
      titleEN: 'Foreign Exchange (Forex) Conversion',
      titleHI: 'विदेशी मुद्रा (Forex) रूपांतरण',
      descEN: 'Converting incoming USD or EUR into local currency (like INR). Banks apply their base card rates or negotiated customized rates, including cross-currency spreads.',
      descHI: 'आने वाले USD या EUR को स्थानीय मुद्रा (जैसे INR) में बदलना। बैंक अपनी आधार कार्ड दरों या बातचीत की गई दरों को लागू करते हैं, जिसमें मुद्रा प्रसार (spread) शामिल होता है।'
    },
    {
      titleEN: 'Currency Risk Exposure',
      titleHI: 'मुद्रा जोखिम जोखिम (Currency Risk)',
      descEN: 'Financial vulnerabilities resulting from rapid changes in global currency conversion rates during the life of a commercial invoice.',
      descHI: 'एक वाणिज्यिक चालान के संचालन के दौरान वैश्विक मुद्रा रूपांतरण दरों में तेजी से बदलाव के परिणामस्वरूप होने वाली वित्तीय कमजोरियां।'
    },
    {
      titleEN: 'Hedging with Forward Contracts',
      titleHI: 'फॉरवर्ड कॉन्ट्रैक्ट के साथ हेजिंग',
      descEN: 'Locking in fixed future exchange conversion rates with local corporate dealer banks to insulate expected trade revenues from sudden currency shocks.',
      descHI: 'अचानक मुद्रा के उतार-चढ़ाव से अपेक्षित व्यापार राजस्व को बचाने के लिए अधिकृत बैंकों के साथ भविष्य की विनिमय रूपांतरण दरों को लॉक करना।'
    }
  ];

  return (
    <div id="banking-forex-guide-root" className="space-y-6">
      {/* Search Header Banner */}
      <div className="bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm space-y-3 text-left">
        <h2 className="text-xl md:text-2xl font-bold font-display text-slate-900 flex items-center gap-2">
          <Landmark className="w-6 h-6 text-[#1d4ed8]" />
          {t('Banking & Foreign Exchange (Forex) Guide', 'बैंकिंग और विदेशी मुद्रा (Forex) संवादात्मक मार्गदर्शिका')}
        </h2>
        <p className="text-xs text-slate-500 leading-relaxed max-w-3xl">
          {t(
            'Understand trade finance pathways, SWIFT rules, international telegraphic payments, hedging practices, and Letters of Credit (LC) structures to secure export transactions.',
            'निर्यात लेनदेन को सुरक्षित करने के लिए व्यापार वित्त पथ, स्विफ्ट नियम, अंतरराष्ट्रीय टेलीग्राफिक भुगतान, हेजिंग प्रथाओं और साख पत्र (LC) संरचनाओं को समझें।'
          )}
        </p>

        {/* Tab triggers */}
        <div className="flex gap-1.5 p-1 bg-slate-50 rounded-lg border border-slate-200 w-fit">
          <button
            id="tab-btn-banking-pay"
            onClick={() => setActiveTab('payments')}
            className={`px-3 py-1.5 rounded-[6px] text-xs font-semibold cursor-pointer transition ${
              activeTab === 'payments' ? 'bg-[#1d4ed8] text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {t('Payment Instruments', 'भुगतान साधन और उपकरण')}
          </button>
          <button
            id="tab-btn-banking-forex"
            onClick={() => setActiveTab('forex')}
            className={`px-3 py-1.5 rounded-[6px] text-xs font-semibold cursor-pointer transition ${
              activeTab === 'forex' ? 'bg-[#1d4ed8] text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {t('Forex & Hedging', 'विदेशी मुद्रा और हेजिंग (Hedging)')}
          </button>
        </div>
      </div>

      {/* Structured grid details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-8 bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm space-y-5">
          {activeTab === 'payments' ? (
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest border-b pb-2 flex items-center gap-2">
                <LandmarkIcon className="w-4 h-4 text-[#1d4ed8]" />
                {t('International Payment Instruments & Settling', 'अंतरराष्ट्रीय भुगतान समाधान और निपटान')}
              </h3>

              <div className="space-y-4">
                {paymentGuides.map((guide, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-lg border border-slate-150 text-left space-y-1">
                    <span className="text-[9px] font-mono text-[#1d4ed8] font-bold tracking-widest block uppercase">
                      {guide.type}
                    </span>
                    <h4 className="font-bold text-slate-800 text-xs font-display">
                      {t(guide.titleEN, guide.titleHI)}
                    </h4>
                    <p className="text-xs text-slate-560 leading-relaxed font-sans">
                      {t(guide.descEN, guide.descHI)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest border-b pb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                {t('Foreign Exchange & Currency Risk Protection', 'विदेशी मुद्रा और विनिमय उतार-चढ़ाव जोखिम सुरक्षा')}
              </h3>

              <div className="space-y-4">
                {forexGuides.map((guide, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-lg border border-slate-150 text-left space-y-1">
                    <h4 className="font-bold text-slate-800 text-xs font-display flex items-center gap-1.5">
                      <ChevronRight className="w-4 h-4 text-[#1d4ed8]" />
                      {t(guide.titleEN, guide.titleHI)}
                    </h4>
                    <p className="text-xs text-slate-560 leading-relaxed font-sans">
                      {t(guide.descEN, guide.descHI)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Sidebar Checklist */}
        <div className="lg:col-span-4 bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm space-y-4 text-left">
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-705 uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-100 pb-2">
              <CheckSquare className="w-4 h-4 text-emerald-600" />
              {t('Secure Settle Best Practices', 'सुरक्षित बैंकिंग सर्वोत्तम प्रथाएं')}
            </h4>
            <ul className="space-y-2 text-xs text-slate-650">
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>{t('Strictly prefer Irrevocable Letters of Credit (LC) at Sight.', 'नजर में अपरिवर्तनीय साख पत्र (sight LC) को प्राथमिकता दें।')}</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>{t('Ensure full matching of commercial invoices with B/L lines.', 'लदान बिल पंक्तियों के साथ वाणिज्यिक चालान के मिलान को सुनिश्चित करें।')}</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>{t('Always hedge at least 70% of long term USD liabilities online.', 'लंबे समय की देनदारियों का कम से कम 70% ऑनलाइन हेजिंग पर सुरक्षित करें।')}</span>
              </li>
            </ul>
          </div>

          <div className="p-3 border border-amber-200 bg-amber-50/40 rounded-lg space-y-1">
            <h5 className="font-bold text-amber-900 text-[11px] uppercase tracking-wider flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 shrink-0" />
              {t('FEMA 1999 Compliance', 'FEMA 1999 अनुपालन')}
            </h5>
            <p className="text-[10px] text-amber-950 leading-relaxed">
              {t(
                'Under FEMA guidelines, all exports funds must be settled and routed through legal authorized banking accounts within a strict window.',
                'FEMA नियमों के तहत, निर्धारित खिड़की के भीतर सभी निर्यात निधियों का निपटान अधिकृत कानूनी बैंकिंग चैनलों के माध्यम से किया जाना चाहिए।'
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
