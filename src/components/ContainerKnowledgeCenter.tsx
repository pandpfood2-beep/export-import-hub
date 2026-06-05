import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Ship, ToggleLeft, Layers, Compass, HelpCircle } from 'lucide-react';

interface ContainerSpec {
  id: string;
  nameEN: string;
  nameHI: string;
  dimsExtEN: string;
  dimsExtHI: string;
  dimsIntEN: string;
  dimsIntHI: string;
  payloadEN: string;
  payloadHI: string;
  volumeEN: string;
  volumeHI: string;
  usageEN: string;
  usageHI: string;
  productsEN: string[];
  productsHI: string[];
}

const containerSpecs: ContainerSpec[] = [
  {
    id: '20ft',
    nameEN: '20FT General Purpose Container',
    nameHI: '20 फीट सामान्य प्रयोजन कंटेनर (GP)',
    dimsExtEN: '20\' x 8\' x 8\'6" (6.06m x 2.44m x 2.59m)',
    dimsExtHI: '20 फीट x 8 फीट x 8 फीट 6 इंच (6.06मी x 2.44मी x 2.59मी)',
    dimsIntEN: '19\'4" x 7\'8" x 7\'10" (5.90m x 2.35m x 2.39m)',
    dimsIntHI: '19 फीट 4 इंच x 7 फीट 8 इंच x 7 फीट 10 इंच (5.90मी x 2.35मी x 2.39मी)',
    payloadEN: '25,000 kg (55,116 lbs)',
    payloadHI: '25,000 किलोग्राम (55,116 पाउंड)',
    volumeEN: '33.2 cbm (1,172 cubic feet)',
    volumeHI: '33.2 घन मीटर (1,172 घन फीट)',
    usageEN: 'Standard marine workhorse designed to transport high-weight dry cargo materials.',
    usageHI: 'अत्यधिक वजन वाले सूखे सामानों के परिवहन के लिए डिज़ाइन किया गया मानक समुद्री कंटेनर।',
    productsEN: ['Grain bags', 'Spice bags', 'Copper cathodes', 'Handicraft cartons', 'Cement'],
    productsHI: ['अनाज के बोरे', 'मसाले के पैकेट', 'तांबे के कैथोड', 'हस्तशिल्प डिब्बे', 'सीमेंट']
  },
  {
    id: '40ft',
    nameEN: '40FT General Purpose Container',
    nameHI: '40 फीट सामान्य प्रयोजन कंटेनर (GP)',
    dimsExtEN: '40\' x 8\' x 8\'6" (12.19m x 2.44m x 2.59m)',
    dimsExtHI: '40 फीट x 8 फीट x 8 फीट 6 इंच (12.19मी x 2.44मी x 2.59मी)',
    dimsIntEN: '39\'5" x 7\'8" x 7\'10" (12.03m x 2.35m x 2.39m)',
    dimsIntHI: '39 फीट 5 इंच x 7 फीट 8 इंच x 7 फीट 10 इंच (12.03मी x 2.35मी x 2.39मी)',
    payloadEN: '27,600 kg (60,847 lbs)',
    payloadHI: '27,600 किलोग्राम (60,847 पाउंड)',
    volumeEN: '67.7 cbm (2,389 cubic feet)',
    volumeHI: '67.7 घन मीटर (2,389 घन फीट)',
    usageEN: 'Designed to maximize volume. Best fit for lightweight but voluminous commercial consignments.',
    usageHI: 'आयतन (वॉल्यूम) को अधिकतम करने के लिए डिज़ाइन किया गया। हल्के लेकिन भारी मात्रा में होने वाले वाणिज्यिक खेपों के लिए सर्वोत्तम।',
    productsEN: ['Textiles & Clothes', 'Furniture crates', 'Retail consumer electronics', 'Plastic toys', 'Automotive body panels'],
    productsHI: ['कपड़े और वस्त्र', 'फर्नीचर के बक्से', 'उपभोक्ता इलेक्ट्रॉनिक्स', 'प्लास्टिक के खिलौने', 'ऑटोमोटिव बॉडी पैनल']
  },
  {
    id: 'hc',
    nameEN: '40FT High Cube Container',
    nameHI: '40 फीट हाई क्यूब कंटेनर (HC)',
    dimsExtEN: '40\' x 8\' x 9\'6" (12.19m x 2.44m x 2.89m)',
    dimsExtHI: '40 फीट x 8 फीट x 9 फीट 6 इंच (12.19मी x 2.44मी x 2.89मी)',
    dimsIntEN: '39\'5" x 7\'8" x 8\'10" (12.03m x 2.35m x 2.69m)',
    dimsIntHI: '39 फीट 5 इंच x 7 फीट 8 इंच x 8 फीट 10 इंच (12.03मी x 2.35मी x 2.69मी)',
    payloadEN: '28,200 kg (62,170 lbs)',
    payloadHI: '28,200 किलोग्राम (62,170 पाउंड)',
    volumeEN: '76.2 cbm (2,694 cubic feet)',
    volumeHI: '76.2 घन मीटर (2,694 घन फीट)',
    usageEN: 'Gives an extra 1 foot of vertical clearance. Perfect for oversized cargo heights or taller stacks.',
    usageHI: 'अतिरिक्त 1 फीट की ऊर्ध्वाधर निकासी प्रदान करता है। ऊंचे कार्गो आकारों या लंबे स्टैक के लिए बिल्कुल सही।',
    productsEN: ['Industrial air ventilators', 'Lightweight machines', 'Tall wood carvings', 'Heavy foam packs'],
    productsHI: ['औद्योगिक एयर वेंटिलेटर', 'हल्की मशीनें', 'लंबी लकड़ी की नक्काशी', 'भारी फोम पैक']
  },
  {
    id: 'reefer',
    nameEN: 'Reefer Container (Refrigerated)',
    nameHI: 'रीफर कंटेनर (रेफ्रिजरेटेड)',
    dimsExtEN: '40\' x 8\' x 8\'6" (with active cooling units)',
    dimsExtHI: '40 फीट x 8 फीट x 8 फीट 6 इंच (सक्रिय कूलिंग यूनिट के साथ)',
    dimsIntEN: '37\'11" x 7\'6" x 7\'4" (insulated inner lining limits space)',
    dimsIntHI: '37 फीट 11 इंच x 7 फीट 6 इंच x 7 फीट 4 इंच (आंतरिक इंसुलेटेड परत के कारण सीमित स्थान)',
    payloadEN: '26,000 kg (temperature regulated)',
    payloadHI: '26,000 किलोग्राम (तापमान नियंत्रित)',
    volumeEN: '59.3 cbm (2,094 cubic feet)',
    volumeHI: '59.3 घन मीटर (2,094 घन फीट)',
    usageEN: 'Active portable refrigerator holding calibrated temperatures between -35°C and +30°C.',
    usageHI: 'सक्रिय पोर्टेबल रेफ्रिजरेटर जो -35°C और +30°C के बीच सटीक तापमान बनाए रखता है।',
    productsEN: ['Fresh Mangoes & Grapes', 'Frozen Seafood', 'Pre-mixed dairy serums', 'Pharmaceutical vaccines'],
    productsHI: ['ताजे आम और अंगूर', 'जमे हुए समुद्री भोजन', 'दूध और डेयरी मिश्रण', 'फार्मास्युटिकल टीके (वैक्सीन)']
  },
  {
    id: 'opentop',
    nameEN: 'Open Top Container',
    nameHI: 'ओपन टॉप कंटेनर (Open Top)',
    dimsExtEN: '20\' x 8\' x 8\'6" (removable roof tarpaulin)',
    dimsExtHI: '20 फीट x 8 फीट x 8 फीट 6 इंच (हटने योग्य छत तिरपाल शामिल)',
    dimsIntEN: '19\'4" x 7\'8" x 7\'8" (completely clear top gate)',
    dimsIntHI: '19 फीट 4 इंच x 7 फीट 8 इंच x 7 फीट 8 इंच (पूरी तरह से खुला शीर्ष)',
    payloadEN: '24,800 kg',
    payloadHI: '24,800 किलोग्राम',
    volumeEN: '32.5 cbm',
    volumeHI: '32.5 घन मीटर',
    usageEN: 'Fitted with a removable tarpaulin canvas roof. Allows top loading of extremely tall cargo via overhead factory cranes.',
    usageHI: 'निकासी योग्य तिरपाल कैनवास की छत से सुसज्जित। ओवरहेड क्रेन के माध्यम से बेहद लंबे कार्गो की आसान लोडिंग की अनुमति देता है।',
    productsEN: ['Oversized boiler motors', 'Raw timber trunks', 'Scrap steel rolls', 'Long metal pylons'],
    productsHI: ['अति-बड़े बॉयलर मोटर', 'कच्ची लकड़ी के लट्ठे', 'स्क्रैप स्टील रोल', 'लंबे धातु के खंभे']
  },
  {
    id: 'flatrack',
    nameEN: 'Flat Rack Container',
    nameHI: 'फ्लैट रैक कंटेनर (Flat Rack)',
    dimsExtEN: '40\' x 8\' x 8\'6" (no rigid side walls)',
    dimsExtHI: '40 फीट x 8 फीट x 8 फीट 6 इंच (कठोर बाजू की दीवारें नहीं होती हैं)',
    dimsIntEN: '38\'10" x 7\'11" x 6\'5" (collapsible bulkheads)',
    dimsIntHI: '38 फीट 10 इंच x 7 फीट 11 इंच x 6 फीट 5 इंच (बंधनेवाला साइड ढांचा)',
    payloadEN: '39,000 kg (highly reinforced platform base)',
    payloadHI: '39,000 किलोग्राम (बेहद मजबूत प्लेटफार्म बेस)',
    volumeEN: 'Not Applicable (open structure)',
    volumeHI: 'लागू नहीं (खुली संरचना)',
    usageEN: 'Possesses collapsible end walls and no side walls. Made purely for heavy, wide, or tall industrial machinery structures.',
    usageHI: 'इसमें बाजू की दीवारें और छत नहीं होती है। यह विशेष रूप से भारी, चौड़ी या लंबी औद्योगिक मशीनरी के लिए बनाया गया है।',
    productsEN: ['Agricultural Harvesters', 'Construction Excavators', 'Wind turbine blades', 'Yachts'],
    productsHI: ['कृषि कंबाइन हार्वेस्टर', 'भारी निर्माण उत्खनन मशीन', 'पवन टरबाइन पंख', 'नौकाएं (Yacht)']
  }
];

export function ContainerKnowledgeCenter() {
  const { t } = useLanguage();
  const [selectedContId, setSelectedContId] = useState<string>('20ft');

  const selectedContainer = containerSpecs.find(c => c.id === selectedContId) || containerSpecs[0];

  return (
    <div id="container-knowledge-center" className="space-y-6">
      {/* Header card */}
      <div className="bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm space-y-3 text-left">
        <h2 className="text-xl md:text-2xl font-bold font-display text-slate-900 flex items-center gap-2">
          <Ship className="w-6 h-6 text-[#1d4ed8]" />
          {t('Shipping Container Logistics & Specifications directory', 'शिपिंग कंटेनर रसद और विशिष्टता निर्देशिका')}
        </h2>
        <p className="text-xs text-slate-500 leading-relaxed max-w-3xl">
          {t(
            'Master shipping container metrics. Explore standard internal heights, pay-weight caps, volumetric conversions (CBM), and proper selection strategies between dry vans, temperature regulated reefers, open tops, and flat racks.',
            'शिपिंग कंटेनर मेट्रिक्स में महारत हासिल करें। सूखे वैन, तापमान नियंत्रित रीफर्स, ओपन टॉप और फ्लैट रैक के बीच आंतरिक ऊंचाई, भुगतान-वजन सीमा, और सही चयन रणनीतियों का पता लगाएं।'
          )}
        </p>

        {/* Categories selector Buttons */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {containerSpecs.map((c) => (
            <button
              id={`cont-spec-btn-${c.id}`}
              key={c.id}
              onClick={() => setSelectedContId(c.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-[6px] border transition cursor-pointer ${
                selectedContId === c.id
                  ? 'bg-[#1d4ed8] text-white border-[#1d4ed8] shadow-xs'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-[#e2e8f0]'
              }`}
            >
              {t(c.nameEN.split(' ')[0] + ' ' + c.nameEN.split(' ')[1], c.nameHI.split(' ')[0] + ' ' + (c.nameHI.split(' ')[1] || 'GP'))}
            </button>
          ))}
        </div>
      </div>

      {/* Structured details display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Specification details */}
        <div className="lg:col-span-8 bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm space-y-5">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-150 text-left">
            <Layers className="w-6 h-6 text-[#1d4ed8]" />
            <div>
              <h3 className="text-lg font-bold font-display text-slate-800">
                {t(selectedContainer.nameEN, selectedContainer.nameHI)}
              </h3>
              <p className="text-[10px] text-[#1d4ed8] font-mono tracking-wider uppercase">
                {t('ISO Standard Marine Box Specification', 'आईएसओ मानक समुद्री बॉक्स विशिष्टता')}
              </p>
            </div>
          </div>

          <div className="space-y-2 text-left bg-slate-50 p-4 rounded-lg border border-slate-100">
            <span className="font-bold text-xs text-slate-700 block">{t('Operational Purpose & Utility:', 'परिचालन उद्देश्य और उपयोगिता:')}</span>
            <p className="text-xs text-slate-650 leading-relaxed italic">
              "{t(selectedContainer.usageEN, selectedContainer.usageHI)}"
            </p>
          </div>

          {/* Metric Specifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="p-3 bg-blue-50/40 rounded-lg space-y-1">
              <span className="text-[9px] font-mono text-[#1d4ed8] font-bold block uppercase tracking-widest">{t('EXTERNAL DIMENSIONS', 'बाहरी आयाम')}</span>
              <p className="font-mono font-bold text-slate-700 text-xs">{t(selectedContainer.dimsExtEN, selectedContainer.dimsExtHI)}</p>
            </div>

            <div className="p-3 bg-blue-50/40 rounded-lg space-y-1">
              <span className="text-[9px] font-mono text-[#1d4ed8] font-bold block uppercase tracking-widest">{t('INTERNAL DIMENSIONS', 'आंतरिक आयाम')}</span>
              <p className="font-mono font-bold text-slate-700 text-xs">{t(selectedContainer.dimsIntEN, selectedContainer.dimsIntHI)}</p>
            </div>

            <div className="p-3 bg-emerald-50/30 rounded-lg space-y-1">
              <span className="text-[9px] font-mono text-emerald-705 font-bold block uppercase tracking-widest">{t('MAX PAYLOAD CAPACITY', 'अधिकतम पेलोड क्षमता')}</span>
              <p className="font-mono font-bold text-slate-700 text-xs">{t(selectedContainer.payloadEN, selectedContainer.payloadHI)}</p>
            </div>

            <div className="p-3 bg-amber-50/30 rounded-lg space-y-1">
              <span className="text-[9px] font-mono text-amber-705 font-bold block uppercase tracking-widest">{t('INTERNAL VOLUMETRIC SPACE', 'आंतरिक आयतन (वॉल्यूम)')}</span>
              <p className="font-mono font-bold text-slate-700 text-xs">{t(selectedContainer.volumeEN, selectedContainer.volumeHI)}</p>
            </div>
          </div>
        </div>

        {/* Right column: suitable products */}
        <div className="lg:col-span-4 bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm space-y-4 text-left">
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-705 uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-100 pb-2">
              <Compass className="w-4 h-4 text-emerald-600" />
              {t('Highly Suitable Products', 'अत्यंत उपयुक्त उत्पाद')}
            </h4>
            <p className="text-[11px] text-slate-500">
              {t('Ideal consignment profiles carrying maximum stack and loading safety indices:', 'अधिकतम स्टैक और सुरक्षा सूचकांकों के साथ आदर्श शिपमेंट उत्पाद:')}
            </p>
            <ul className="space-y-1.5 pt-1">
              {(t === undefined ? [] : (t('en', 'hi') === 'hi' ? selectedContainer.productsHI : selectedContainer.productsEN)).map((prod, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs text-slate-750 font-sans">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full shrink-0"></span>
                  <span>{prod}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-3 border border-amber-200 bg-amber-50/40 rounded-lg space-y-1">
            <h5 className="font-bold text-amber-900 text-[11px] uppercase tracking-wider flex items-center gap-1">
              <HelpCircle className="w-3.5 h-3.5 shrink-0" />
              {t('CBM Estimation Tip', 'CBM आकलन युक्ति')}
            </h5>
            <p className="text-[10px] text-amber-950 leading-relaxed font-sans">
              {t(
                'Always plan container storage utilizing approximately 85% of theoretical cubic volume (CBM) limits, allowing for pallet spacing and forklift handling.',
                'हमेशा पैलेट रिक्ति और फ़ोर्कलिफ्ट हैंडलिंग के लिए लगभग 85% व्यावहारिक स्तर पर CBM उपयोग की योजना बनाएं।'
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
