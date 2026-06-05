import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Award, CheckCircle, FileText, Settings, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export function IECCompleteGuide() {
  const { t, language } = useLanguage();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const registrationSteps = [
    {
      num: '1',
      titleEN: 'Visit DGFT Portal',
      titleHI: 'DGFT पोर्टल पर जाएं',
      descEN: 'Gain access to the official portal of Directorate General of Foreign Trade (dgft.gov.in) and register user details.',
      descHI: 'विदेश व्यापार महानिदेशालय (dgft.gov.in) के आधिकारिक पोर्टल पर पहुंचें और उपयोगकर्ता विवरण दर्ज करें।'
    },
    {
      num: '2',
      titleEN: 'Fill Online Application',
      titleHI: 'ऑनलाइन आवेदन भरें',
      descEN: 'Log in with credentials and fill out the ANF-2A online form with company profile specifications.',
      descHI: 'प्रमाण-पत्रों के साथ लॉग इन करें और कंपनी प्रोफाइल विनिर्देशों के साथ ऑनलाइन ANF-2A फॉर्म भरें।'
    },
    {
      num: '3',
      titleEN: 'Upload Statutory Documents',
      titleHI: 'वैधानिक दस्तावेज अपलोड करें',
      descEN: 'Attach digital copies of business proof, PAN cards, and cancelled bank checks.',
      descHI: 'व्यावसायिक प्रमाण, पैन कार्ड और रद्द किए गए बैंक चेक की डिजिटल प्रतियां संलग्न करें।'
    },
    {
      num: '4',
      titleEN: 'Pay Government Fee',
      titleHI: 'सरकारी शुल्क का भुगतान करें',
      descEN: 'Pay a nominal processing fee of INR 500 online using Net Banking, UPI, or Credit Cards.',
      descHI: 'नेट बैंकिंग, यूपीआई या क्रेडिट कार्ड का उपयोग करके ऑनलाइन 500 रुपये का मामूली प्रसंस्करण शुल्क का भुगतान करें।'
    },
    {
      num: '5',
      titleEN: 'Instant Approval & Download',
      titleHI: 'त्वरित स्वीकृति और डाउनलोड',
      descEN: 'Applications are verified electronically. The system generates an e-IEC certificate available for download instantly.',
      descHI: 'आवेदनों का इलेक्ट्रॉनिक रूप से सत्यापन किया जाता है। सिस्टम तुरंत डाउनलोड के लिए उपलब्ध ई-आईईसी (e-IEC) प्रमाणपत्र उत्पन्न करता है।'
    }
  ];

  const faqs = [
    {
      id: 1,
      qEN: 'Is an Importer-Exporter Code (IEC) mandatory for all global transactions?',
      qHI: 'क्या सभी वैश्विक लेनदेन के लिए आयातक-निर्यातक कोड (IEC) अनिवार्य है?',
      aEN: 'Yes. Every regular enterprise intending to run physical export or import activities must secure a valid 10-digit IEC. However, casual personal parcels or governmental shipments are exempt.',
      aHI: 'हाँ। भौतिक निर्यात या आयात गतिविधियों को चलाने के इरादा रखने वाले प्रत्येक नियमित उद्यम के पास एक वैध 10-अंकीय IEC होना चाहिए। हालांकि, आकस्मिक व्यक्तिगत पार्सल या सरकारी शिपमेंट को छूट दी गई है।'
    },
    {
      id: 2,
      qEN: 'What is the absolute validity duration of an issued IEC?',
      qHI: 'जारी किए गए IEC की पूर्ण वैधता अवधि क्या है?',
      aEN: 'An issued IEC has lifetime validity. However, as per latest DGFT guidelines, the certificate must be updated active online annually between April and June.',
      aHI: 'जारी किए गए IEC की जीवन भर की वैधता है। हालांकि, नवीनतम DGFT दिशानिर्देशों के अनुसार, अप्रैल से जून के बीच प्रतिवर्ष इसे ऑनलाइन अपडेट किया जाना चाहिए।'
    },
    {
      id: 3,
      qEN: 'Can an individual get an IEC using a personal PAN card?',
      qHI: 'क्या कोई व्यक्ति व्यक्तिगत पैन कार्ड का उपयोग करके IEC प्राप्त कर सकता है?',
      aEN: 'Yes. Trade proprietors or sole individuals can easily secure an IEC under their individual name and personal PAN card index, registering as a proprietary business.',
      aHI: 'हाँ। व्यापार मालिक या अकेले व्यक्ति अपने व्यक्तिगत नाम और व्यक्तिगत पैन कार्ड इंडेक्स के तहत एक मालिक व्यापार के रूप में आसानी से आईईसी सुरक्षित कर सकते हैं।'
    },
    {
      id: 4,
      qEN: 'Is GST registration mandatory before applying for an IEC?',
      qHI: 'क्या IEC के लिए आवेदन करने से पहले GST पंजीकरण अनिवार्य है?',
      aEN: 'No, but highly recommended. While you can apply for an IEC under a PAN index first, actually shipping commercial cargo requires a registered GSTIN/GST invoice framework.',
      aHI: 'नहीं, लेकिन यह अत्यधिक अनुशंसित है। हालांकि आप पहले पैन इंडेक्स के तहत IEC के लिए आवेदन कर सकते हैं, लेकिन वास्तव में वाणिज्यिक कार्गो शिपिंग के लिए एक पंजीकृत GSTIN/GST इनवॉइस की आवश्यकता होती है।'
    }
  ];

  return (
    <div id="iec-guide-root" className="space-y-6">
      {/* Intro section */}
      <div className="bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm space-y-3 animate-fade-in">
        <h2 className="text-xl md:text-2xl font-bold font-display text-slate-900 flex items-center gap-2">
          <Award className="w-6 h-6 text-[#1d4ed8]" />
          {t('Complete Importer-Exporter Code (IEC) Instruction Guide', 'आयातक-निर्यातक कोड (IEC) संपूर्ण निर्देशिका')}
        </h2>
        <p className="text-xs text-slate-500 leading-relaxed max-w-3xl">
          {t(
            'The Importer-Exporter Code (IEC) is a compulsory 10-digit identification code issued by the Directorate General of Foreign Trade (DGFT), Ministry of Commerce, Government of India. Learn its importance, legal benefits, registration mechanisms, and file checklists.',
            'आयातक-निर्यातक कोड (IEC) भारत सरकार के वाणिज्य मंत्रालय के तहत विदेश व्यापार महानिदेशालय (DGFT) द्वारा जारी एक अनिवार्य 10-अंकीय पहचान कोड है। इसके महत्व, कानूनी लाभ, पंजीकरण तंत्र और फ़ाइल चेकलिस्ट के बारे में जानें।'
          )}
        </p>
      </div>

      {/* Grid: What is IEC, benefits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest border-b border-blue-50 pb-2 flex items-center gap-2">
            <span className="text-[10px] px-2 py-0.5 rounded bg-blue-50 text-blue-805 font-mono">DEFINITION</span>
            {t('What is Importer-Exporter Code (IEC)?', 'आयातक-निर्यातक कोड (IEC) क्या है?')}
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {t(
              'An Importer-Exporter Code (IEC) is a unique, lifetime business identifier issued by DGFT. It acts as the legal master key that activates and validates foreign trade projects. Government customs agencies at all marine or aviation checkpoints screen and record this alphanumeric digit on both bills of entry (for cargo entry) and shipping bills (for outward container clearances). No global banking settlement or foreign exchange conversion account clears without a registered active IEC.',
              'आयातक-निर्यातक कोड (IEC) विदेश व्यापार महानिदेशालय (DGFT) द्वारा जारी एक अद्वितीय, जीवन भर चलने वाला व्यावसायिक पहचानकर्ता है। यह कानूनी रूप से मास्टर की की तरह काम करता है जो विदेशी व्यापार परियोजनाओं को सक्रिय और सत्यापित करता है। सभी समुद्री या विमानन चौकियों पर सरकारी सीमा शुल्क एजेंसियां बिल ऑफ एंट्री (कार्गो प्रवेश) और शिपिंग बिल (जावक कंटेनर मंजूरी) पर इसे स्क्रीन और रिकॉर्ड करती हैं। बिना किसी पंजीकृत सक्रिय IEC के कोई भी वैश्विक बैंकिंग निपटान या विदेशी मुद्रा विनिमय खाता साफ नहीं होता है।'
            )}
          </p>

          <h4 className="font-bold text-slate-800 text-xs pt-2">{t('Main Usage of IEC:', 'IEC का मुख्य उपयोग:')}</h4>
          <ul className="space-y-2 text-xs text-slate-600">
            <li className="flex items-start gap-1.5">
              <span className="text-blue-600 mr-1.5 font-bold">•</span>
              <span>{t('Required at customs to clear imports / exports.', 'सीमा शुल्क पर आयात / निर्यात को मंजूरी देने के लिए आवश्यक।')}</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-blue-600 mr-1.5 font-bold">•</span>
              <span>{t('Mandatory for banks when sending or receiving foreign currency.', 'विदेशी मुद्रा भेजते या प्राप्त करते समय बैंकों के लिए अनिवार्य।')}</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-blue-600 mr-1.5 font-bold">•</span>
              <span>{t('Prerequisite for applying for export promotions or MEIS / DBK schemes.', 'निर्यात प्रोत्साहन या MEIS / DBK योजनाओं के लिए आवेदन करने के लिए पूर्वापेक्षा।')}</span>
            </li>
          </ul>
        </div>

        {/* Benefits Grid list */}
        <div className="bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest border-b border-emerald-50 pb-2 flex items-center gap-2">
            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-5 border border-emerald-250 text-emerald-805 font-mono">BENEFITS</span>
            {t('Commercial & Strategic Benefits', 'व्यावसायिक और रणनीतिक लाभ')}
          </h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-slate-800">{t('Legal Market Penetration', 'कानूनी बाजार में प्रवेश')}</h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                  {t('Secures direct access to supply custom ports and export items globally without regulatory blockages.', 'नियामक रुकावटों के बिना वैश्विक स्तर पर सीमा शुल्क बंदरगाहों और निर्यात वस्तुओं की आपूर्ति करने के लिए सीधे प्रवेश प्रदान करता है।')}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-slate-800">{t('Claim Government Incentives', 'सरकारी प्रोत्साहन का दावा')}</h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                  {t('Exporters holding a valid IEC can unlock duty drawbacks, SEIS/MEIS credits, tax refunds, and DGFT marketing funds.', 'एक वैध IEC रखने वाले निर्यातक शुल्क वापसी (duty drawback), टैक्स रिफंड और DGFT विपणन कोष अनलॉक कर सकते हैं।')}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-slate-800">{t('Zero Compliances', 'शून्य अनुपालन (Zero Compliance)')}</h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                  {t('Unlike GST returns, IEC requires zero ongoing tax filings or periodic returns. Once retrieved, require only yearly clicks.', 'जीएसटी रिटर्न के विपरीत, इसमें किसी चल रहे कर फाइलिंग या आवधिक रिटर्न की आवश्यकता नहीं होती। एक बार प्राप्त करने के बाद, केवल वार्षिक अपडेट जरूरी है।')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* REQUIRED DOCUMENTS SECTION */}
      <div className="bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-805 uppercase tracking-wider flex items-center gap-2">
          <FileText className="w-5 h-5 text-[#1d4ed8]" />
          {t('Statutory Registration Document Checklist', 'वैधानिक पंजीकरण दस्तावेज़ चेकलिस्ट')}
        </h3>
        <p className="text-xs text-slate-500">
          {t('Keep the following digital, self-attested documents ready before logging into the DGFT application portal:', 'DGFT आवेदन पोर्टल पर लॉग इन करने से पहले निम्नलिखित डिजिटल, स्व-सत्यापित दस्तावेजों को तैयार रखें:')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
          {[
            { tag: '01', title: t('PAN Card Index', 'पैन कार्ड इंडेक्स'), desc: t('Individual PAN card (proprietorship) or corporate entity PAN card copy.', 'व्यक्तिगत पैन कार्ड (स्वामित्व) या कॉर्पोरेट इकाई पैन कार्ड की प्रति।') },
            { tag: '02', title: t('ID Proofs', 'पहचान के प्रमाण'), desc: t('Aadhaar card, Passport, Voter ID, or registered corporate incorporation codes.', 'आधार कार्ड, पासपोर्ट, वोटर आईडी, या पंजीकृत कॉर्पोरेट निगमन कोड।') },
            { tag: '03', title: t('Financial Proof', 'वित्तीय सबूत'), desc: t('Cancelled bank cheque holding printed name, or authorized bank certificates.', 'प्रिंटेड नाम वाला रद्द बैंक चेक, या अधिकृत बैंक प्रमाणपत्र।') },
            { tag: '04', title: t('Utility Address', 'उपयोगिता पता'), desc: t('Electricity bills, lease agreement deeds, or property documents for trade address proof.', 'व्यावसायिक पते के प्रमाण के लिए बिजली बिल, लीज डीड या संपत्ति के दस्तावेज।') }
          ].map((item, id) => (
            <div key={id} className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
              <span className="font-mono text-xs font-bold text-[#1d4ed8]">{item.tag}</span>
              <h5 className="font-bold text-slate-800 text-xs">{item.title}</h5>
              <p className="text-[11px] text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* REGISTRATION TIMELINE PROCESS */}
      <div className="bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-805 uppercase tracking-wider flex items-center gap-2">
          <Settings className="w-5 h-5 text-emerald-600" />
          {t('Step-by-Step Interactive Registration Pipeline', 'चरण-दर-चरण इंटरैक्टिव पंजीकरण पाइपलाइन')}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative pt-2">
          {registrationSteps.map((step, idx) => (
            <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-150 relative space-y-2 flex flex-col justify-between">
              <div>
                <span className="w-6 h-6 rounded-full bg-[#1d4ed8] text-white flex items-center justify-center font-bold font-mono text-xs">
                  {step.num}
                </span>
                <h4 className="font-bold text-slate-800 text-xs mt-2">
                  {language === 'hi' ? step.titleHI : step.titleEN}
                </h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                  {language === 'hi' ? step.descHI : step.descEN}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* EXPANDABLE COMMON QUESTIONS */}
      <div className="bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-805 uppercase tracking-wider flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-[#1d4ed8]" />
          {t('Frequently Asked Questions (IEC)', 'अक्सर पूछे जाने वाले प्रश्न (IEC)')}
        </h3>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpened = expandedFaq === faq.id;
            return (
              <div key={idx} className="border border-slate-200 rounded-lg overflow-hidden">
                <button
                  id={`iec-faq-trigger-${faq.id}`}
                  onClick={() => setExpandedFaq(isOpened ? null : faq.id)}
                  className="w-full text-left p-4 bg-slate-50 hover:bg-slate-100 flex justify-between items-center transition cursor-pointer"
                >
                  <span className="font-semibold text-xs text-slate-800 font-sans">
                    Q{faq.id}. {language === 'hi' ? faq.qHI : faq.qEN}
                  </span>
                  {isOpened ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                </button>
                {isOpened && (
                  <div className="p-4 bg-white border-t border-slate-150 text-xs text-slate-600 leading-relaxed font-sans">
                    {language === 'hi' ? faq.aHI : faq.aEN}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
