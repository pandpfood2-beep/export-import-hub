import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Award, Mail, MapPin, CheckCircle, Info, Shield, HelpCircle, FileText } from 'lucide-react';

interface SecondaryPagesProps {
  pageType: 'about' | 'contact' | 'privacy' | 'terms' | 'disclaimer';
}

export function SecondaryPages({ pageType }: SecondaryPagesProps) {
  const { t } = useLanguage();

  // Contact form states
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMsg, setUserMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !userEmail || !userMsg) return;
    setSuccessMsg(
      t(
        'Thank you! Your feedback has been received. Our team will contact you back shortly.',
        'धन्यवाद! आपकी बहुमूल्य प्रतिक्रिया प्राप्त हो गई है। हमारी टीम जल्द ही आपसे संपर्क करेगी।'
      )
    );
    setUserName('');
    setUserEmail('');
    setUserMsg('');
    setTimeout(() => setSuccessMsg(''), 5000);
  };

  return (
    <div id="secondary-pages-root" className="bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm space-y-6 text-left">
      {pageType === 'about' && (
        <div className="space-y-6">
          <div className="border-b border-slate-150 pb-4">
            <h2 className="text-xl md:text-2xl font-bold font-display text-slate-900 flex items-center gap-2">
              <Award className="w-6 h-6 text-[#1d4ed8]" />
              {t('About Export Import Hub', 'एक्सपोर्ट इम्पोर्ट हब के बारे में')}
            </h2>
            <p className="text-[11px] text-[#1d4ed8] font-mono tracking-widest uppercase mt-0.5">
              {t('Empowering International Trade Education', 'अंतरराष्ट्रीय व्यापार शिक्षा को सशक्त बनाना')}
            </p>
          </div>

          <div className="space-y-4 text-xs text-slate-650 leading-relaxed font-sans">
            <p>
              <strong>{t('Export Import Hub', 'एक्सपोर्ट इम्पोर्ट हब')}</strong> {t(
                'is an educational knowledge portal created to help exporters, importers, students, logistics professionals, and international traders understand global trade, export-import processes, documentation, logistics, customs, payment systems, and international business practices.',
                'एक शैक्षणिक ज्ञान पोर्टल है जिसे निर्यातकों, आयातकों, छात्रों, रसद पेशेवरों और अंतरराष्ट्रीय व्यापारियों को वैश्विक व्यापार, आयात-निर्यात प्रक्रियाओं, दस्तावेज़ीकरण, रसद, सीमा शुल्क, भुगतान प्रणालियों और अंतरराष्ट्रीय व्यावसायिक प्रथाओं को समझने में मदद करने के लिए बनाया गया है।'
              )}
            </p>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
              <h4 className="font-bold text-slate-800 text-xs flex items-center gap-1.5 uppercase tracking-wider">
                <Info className="w-4 h-4 text-[#1d4ed8]" />
                {t('Our Mission', 'हमारा उद्देश्य / मिशन')}
              </h4>
              <p className="italic">
                "{t(
                  'To simplify export-import knowledge and make international trade education accessible to everyone.',
                  'आयात-निर्यात ज्ञान को सरल बनाना और अंतरराष्ट्रीय व्यापार शिक्षा को सभी के लिए सुलभ बनाना।'
                )}"
              </p>
            </div>

            <p>
              {t(
                'We cover comprehensive real-world modules such as Incoterms 2020 definitions, Customs clearances, HS cargo classifications, sourcing indices, currency hedge mechanisms, and freight dimensions. Every element is built strictly to elevate academic execution and trade entrepreneurship.',
                'हम विभिन्न व्यावहारिक मॉड्यूल कवर करते हैं जैसे इंकोटर्म्स 2020 परिभाषाएं, सीमा शुल्क निकासी, एचएस कार्गो वर्गीकरण, सोर्सिंग इंडेक्स, मुद्रा हेज मैकेनिज्म, और माल ढुलाई आयाम। प्रत्येक तत्व केवल शैक्षणिक निष्पादन और व्यावसायिक उद्यमशीलता बढ़ाने के लिए बनाया गया है।'
              )}
            </p>
          </div>
        </div>
      )}

      {pageType === 'contact' && (
        <div className="space-y-6 animate-fade-in">
          <div className="border-b border-slate-150 pb-4">
            <h2 className="text-xl md:text-2xl font-bold font-display text-slate-900 flex items-center gap-2">
              <Mail className="w-6 h-6 text-[#1d4ed8]" />
              {t('Contact & Support Center', 'संपर्क और सहायता केंद्र')}
            </h2>
            <p className="text-[11px] text-slate-500 mt-0.5">
              {t('Get in touch with us for educational guidance, clarifications, or technical help.', 'शैक्षणिक मार्गदर्शन, स्पष्टीकरण या तकनीकी सहायता के लिए हमसे संपर्क करें।')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Side: Contact Information */}
            <div className="space-y-4 text-xs text-slate-650">
              <h3 className="font-bold text-slate-800 text-xs uppercase tracking-wider">{t('Contact Information', 'संपर्क सूचना')}</h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-150">
                  <Mail className="w-4 h-4 text-[#1d4ed8]" />
                  <div>
                    <span className="font-semibold block text-slate-700">{t('Direct Support Email', 'प्रत्यक्ष ईमेल')}</span>
                    <a href="mailto:pandpfood2@gmail.com" className="text-[#1d4ed8] hover:underline font-bold">pandpfood2@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-150">
                  <MapPin className="w-4 h-4 text-rose-500" />
                  <div>
                    <span className="font-semibold block text-slate-700">{t('Global Library Headquarters', 'वैश्विक मुख्यालय कार्यालय')}</span>
                    <span className="text-slate-600">Mumbai Port Area, Maharashtra, India</span>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-blue-50/50 rounded-lg border border-blue-150">
                <h4 className="font-bold text-blue-905 uppercase tracking-wider text-[11px] flex items-center gap-1">
                  <Info className="w-3.5 h-3.5" /> {t('Support Hours', 'सहायता समय')}
                </h4>
                <p className="text-[10px] text-slate-600 mt-1 leading-normal">
                  {t('Our dedicated academic help desk is active Monday through Saturday between 09:00 AM and 06:00 PM IST.', 'हमारा शैक्षणिक हेल्प डेस्क सोमवार से शनिवार सुबह 09:00 बजे से शाम 06:00 बजे (IST) के बीच काम करता है।')}
                </p>
              </div>
            </div>

            {/* Right Side: Stateful Feedback Form */}
            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
              <h3 className="font-bold text-slate-800 text-xs uppercase tracking-wider pb-3 border-b border-slate-200 block mb-4">
                {t('Exporters Inquiry & Feedback Form', 'पूछताछ और प्रतिक्रिया प्रपत्र')}
              </h3>

              {successMsg && (
                <div className="p-3 bg-emerald-50 border border-emerald-350 text-emerald-800 rounded-md text-xs font-semibold mb-4 leading-relaxed">
                  {successMsg}
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-3">
                {/* Field 1 */}
                <div className="space-y-1 text-left">
                  <label className="text-[10px] text-slate-500 block font-semibold">{t('Your Full Name', 'आपका पूरा नाम')}</label>
                  <input
                    id="contact-form-name"
                    type="text"
                    required
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full bg-white border border-slate-250 text-slate-800 rounded-[4px] px-2.5 py-1.5 text-xs outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="e.g. Rahul Sharma"
                  />
                </div>

                {/* Field 2 */}
                <div className="space-y-1 text-left">
                  <label className="text-[10px] text-slate-500 block font-semibold">{t('Your Email Address', 'आपका ईमेल पता')}</label>
                  <input
                    id="contact-form-email"
                    type="email"
                    required
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    className="w-full bg-white border border-slate-250 text-slate-800 rounded-[4px] px-2.5 py-1.5 text-xs outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="e.g. rahul@example.com"
                  />
                </div>

                {/* Field 3 */}
                <div className="space-y-1 text-left">
                  <label className="text-[10px] text-slate-500 block font-semibold">{t('Message Details', 'संदेश विवरण')}</label>
                  <textarea
                    id="contact-form-msg"
                    required
                    value={userMsg}
                    onChange={(e) => setUserMsg(e.target.value)}
                    rows={4}
                    className="w-full bg-white border border-slate-250 text-slate-800 rounded-[4px] px-2.5 py-1.5 text-xs outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder={t('Share your trade queries or feedback...', 'अपने व्यापार से संबंधित प्रश्न या सुझाव यहाँ साझा करें...')}
                  />
                </div>

                {/* Submit button */}
                <button
                  id="contact-form-submit-btn"
                  type="submit"
                  className="w-full py-2 bg-[#1d4ed8] hover:bg-blue-750 text-white font-semibold rounded-[4px] text-xs transition cursor-pointer"
                >
                  {t('Send Secure Inquiry', 'सुरक्षित संदेश भेजें')}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {pageType === 'privacy' && (
        <div className="space-y-6">
          <div className="border-b border-slate-150 pb-4">
            <h2 className="text-xl md:text-2xl font-bold font-display text-[#1e293b] flex items-center gap-2">
              <Shield className="w-6 h-6 text-[#1d4ed8]" />
              {t('Privacy Policy Guidelines', 'गोपनीयता नीति (Privacy Policy)')}
            </h2>
            <p className="text-[10px] text-slate-400 font-mono tracking-widest uppercase mt-0.5">
              {t('Academic Privacy Standards Compliant', 'शैक्षणिक गोपनीयता मानकों के अनुरूप')}
            </p>
          </div>

          <div className="space-y-4 text-xs text-slate-650 leading-relaxed font-sans">
            <p>
              {t(
                'At Export Import Hub, we prioritize the absolute security of our digital readers. This Privacy Policy documents our structures regarding data collection, cookies and security practices.',
                'एक्सपोर्ट इम्पोर्ट हब में, हम अपने पाठकों की पूर्ण सुरक्षा को प्राथमिकता देते हैं। यह गोपनीयता नीति डेटा एकत्र करने, कुकीज़ और सुरक्षा प्रथाओं से संबंधित नियमों का दस्तावेजीकरण करती है।'
              )}
            </p>

            <h4 className="font-bold text-slate-800 text-xs">{t('1. Information Collection', '1. सूचना संग्रह')}</h4>
            <p>
              {t(
                'We operate an completely open-access academic dictionary. We do not require any mandatory user signup, credit card logs, or registration accounts. Any submission on our email feedback forms is processed strictly under consent indices and never shared with third party networks.',
                'हम पूरी तरह से ओपन-एक्सेस शैक्षणिक प्रणाली संचालित करते हैं। हमें किसी भी उपयोगकर्ता साइनअप, क्रेडिट कार्ड लॉग, या पंजीकरण खातों की आवश्यकता नहीं होती है। ईमेल फीडबैक रूपों पर प्रस्तुत किए गए प्रश्न हमारी टीम तक सीमित हैं।'
              )}
            </p>

            <h4 className="font-bold text-slate-800 text-xs">{t('2. Cookies Usage', '2. कुकीज़ का उपयोग')}</h4>
            <p>
              {t(
                'We employ standard client-side browser localStorage arrays strictly to persist user selected UI settings (such as chosen languages or action checks progress). We do not run persistent cross-platform tracking cookies.',
                'हम उपयोगकर्ता सेटिंग्स (जैसे चयनित भाषा या एक्शन चेक प्रगति) को बनाए रखने के लिए मानक क्लाइंट-साइड स्थानीय स्टोरेज (localStorage) का उपयोग करते हैं। हम तृतीय-पक्ष विज्ञापनों के लिए आपका डेटा ट्रैक नहीं करते।'
              )}
            </p>

            <h4 className="font-bold text-slate-800 text-xs">{t('3. Data Protection Rights', '3. डेटा सुरक्षा अधिकार')}</h4>
            <p>
              {t(
                'Users hold total ownership of their localized data on our site. Clearing browser cache completely resets all checked checkboxes and custom language triggers instantly.',
                'हमारे पाठकों का उनके स्थानीय डेटा पर पूर्ण स्वामित्व है। ब्राउज़र कैश साफ़ करने से चेकलिस्ट के सभी बक्से और चुनी गई सेटिंग्स तुरंत साफ़ हो जाती हैं।'
              )}
            </p>
          </div>
        </div>
      )}

      {pageType === 'terms' && (
        <div className="space-y-6">
          <div className="border-b border-slate-150 pb-4">
            <h2 className="text-xl md:text-2xl font-bold font-display text-slate-900 flex items-center gap-2">
              <FileText className="w-6 h-6 text-[#1d4ed8]" />
              {t('Terms & Conditions Guidelines', 'नियम और शर्तें (Terms & Conditions)')}
            </h2>
            <p className="text-[10px] text-slate-400 font-mono tracking-widest uppercase mt-0.5">
              {t('Educational Terms of Service', 'शैक्षणिक सेवा की शर्तें')}
            </p>
          </div>

          <div className="space-y-4 text-xs text-slate-650 leading-relaxed font-sans">
            <p>
              {t(
                'Welcome to Export Import Hub. By accessing our educational portals, you agree to comply strictly with the terms outlined beneath:',
                'एक्सपोर्ट इम्पोर्ट हब में आपका स्वागत है। हमारे शैक्षणिक संसाधनों और पोर्टलों तक पहुँचने से, आप नीचे दिए गए नियमों का पालन करने की सहमति देते हैं:'
              )}
            </p>

            <h4 className="font-bold text-slate-800 text-xs">{t('1. Website Usage Rules', '1. वेबसाइट उपयोग के नियम')}</h4>
            <p>
              {t(
                'All elements and visual modules provided herein are intended for academic, training, and research reference. Users are forbidden from deploying automated scraper networks or attacking port servers.',
                'यहाँ उपलब्ध सभी संसाधन और दृश्य मॉड्यूल शैक्षणिक, संरचित प्रशिक्षण और अनुसंधान संदर्भ के लिए हैं। उपयोगकर्ताओं को ऑटोमेटेड स्क्रैपर चलाने की सख्त मनाही है।'
              )}
            </p>

            <h4 className="font-bold text-slate-800 text-xs">{t('2. Educational Disclaimer', '2. शैक्षणिक अस्वीकरण (Disclaimer)')}</h4>
            <p>
              {t(
                'These sheets do not constitute registered legal advice, customs brokerage mandates, or certified maritime shipping contracts. All freight rates, custom schedules, and code structures must be verified with certified local terminal offices.',
                'ये पत्रक पंजीकृत कानूनी सलाह, सीमा शुल्क दलाली जनादेश, या प्रमाणित समुद्री शिपिंग अनुबंधों का गठन नहीं करते हैं। सभी माल ढुलाई दरों, सीमा शुल्क अनुसूचियों और कोड संरचनाओं को स्थानीय कार्यालयों के साथ सत्यापित किया जाना चाहिए।'
              )}
            </p>

            <h4 className="font-bold text-slate-800 text-xs">{t('3. Content Ownership', '3. सामग्री स्वामित्व (Content Policy)')}</h4>
            <p>
              {t(
                'The structured content, translations database, and custom visual checklists are owned by Export Import Hub. Re-publishing structural contents on commercial domains without clear written credit is strictly prohibited.',
                'संरचित सामग्री, अनुवाद डेटाबेस और कस्टम विज़ुअल चेकलिस्ट का स्वामित्व एक्सपोर्ट इम्पोर्ट हब के पास है। लिखित श्रेय के बिना वाणिज्यिक डोमेन पर सामग्री पुनः प्रकाशित करना प्रतिबंधित है।'
              )}
            </p>
          </div>
        </div>
      )}

      {pageType === 'disclaimer' && (
        <div className="space-y-6">
          <div className="border-b border-slate-150 pb-4">
            <h2 className="text-xl md:text-2xl font-bold font-display text-slate-900 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-amber-600 animate-pulse" />
              {t('Official Educational Disclaimer', 'आधिकारिक शैक्षणिक अस्वीकरण (Disclaimer)')}
            </h2>
            <p className="text-[10px] text-slate-400 font-mono tracking-widest uppercase mt-0.5">
              {t('Compliance Reading Mandatory', 'अनुपालन पठन अनिवार्य')}
            </p>
          </div>

          <div className="space-y-4 text-xs text-slate-650 leading-relaxed font-sans">
            <div className="p-4 bg-amber-50 border border-amber-250 rounded-lg space-y-2">
              <h4 className="font-bold text-amber-900 text-xs flex items-center gap-1.5 uppercase tracking-wider">
                💡 {t('Critical Notice', 'महत्वपूर्ण सूचना')}
              </h4>
              <p className="text-amber-950 font-bold leading-relaxed">
                {t(
                  'This website of Export Import Hub is intended for educational and informational purposes only.',
                  'एक्सपोर्ट इम्पोर्ट हब की यह वेबसाइट केवल शैक्षणिक और सूचनात्मक उद्देश्यों के लिए है।'
                )}
              </p>
            </div>

            <p>
              {t(
                'Users should verify export-import regulations, customs requirements, and legal obligations with official authorities before conducting business transactions.',
                'उपयोगकर्ताओं को व्यावसायिक लेनदेन करने से पहले आधिकारिक प्राधिकरणों के साथ निर्यात-आयात नियमों, सीमा शुल्क आवश्यकताओं और कानूनी दायित्वों की पुष्टि करनी चाहिए।'
              )}
            </p>

            <p>
              {t(
                'Any financial models, logistics estimators, CBM calculators, or country guides listed herein are mock setups and should never act as concrete baseline figures for shipping bids. Export Import Hub bears no liability for monetary losses or boundary delays under any commercial trade operations.',
                'यहाँ सूचीबद्ध कोई भी वित्तीय मॉडल, रसद अनुमानक, CBM कैलकुलेटर, या देश मार्गदर्शिकाएँ केवल सिमुलेशन हैं और इन्हें शिपिंग बोलियों के लिए सटीक आधार नहीं मानना चाहिए। किसी भी वाणिज्यिक संचालन के तहत होने वाले नुकसान के लिए यह वेबसाइट उत्तरदायी नहीं है।'
              )}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
