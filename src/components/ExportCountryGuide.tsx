import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Plane, Shield, BookOpen, AlertCircle, Anchor } from 'lucide-react';

interface CountryData {
  code: string;
  flag: string;
  nameEN: string;
  nameHI: string;
  overviewEN: string;
  overviewHI: string;
  importsEN: string[];
  importsHI: string[];
  exportsEN: string[];
  exportsHI: string[];
  customsEN: string;
  customsHI: string;
  docsEN: string[];
  docsHI: string[];
  oppsEN: string;
  oppsHI: string;
  portsEN: string[];
  portsHI: string[];
  tipsEN: string[];
  tipsHI: string[];
}

const countries: CountryData[] = [
  {
    code: 'IN',
    flag: '🇮🇳',
    nameEN: 'India',
    nameHI: 'भारत',
    overviewEN: 'One of the fastest-growing major economies globally. India is a key exporter of pharmaceuticals, refined petroleum, software services, gems, jewelry, agricultural products, and textiles.',
    overviewHI: 'विश्व स्तर पर सबसे तेजी से बढ़ती प्रमुख अर्थव्यवस्थाओं में से एक। भारत दवाओं, रिफाइंड पेट्रोलियम, सॉफ्टवेयर सेवाओं, रत्न, आभूषण, कृषि उत्पादों और वस्त्रों का एक प्रमुख निर्यातक है।',
    importsEN: ['Crude Petroleum', 'Gold & Precious Stones', 'Coal', 'Electronic Goods', 'Chemicals'],
    importsHI: ['कच्चा तेल', 'सोना और कीमती पत्थर', 'कोयला', 'इलेक्ट्रॉनिक सामान', 'रसायन'],
    exportsEN: ['Refined Petroleum', 'Software Services', 'Pharmaceuticals', 'Gems & Jewelry', 'Spices & Rice'],
    exportsHI: ['परिष्कृत पेट्रोलियम', 'सॉफ्टवेयर सेवाएं', 'फार्मास्युटिकल्स', 'रत्न और आभूषण', 'मसाले और चावल'],
    customsEN: 'Managed by CBIC under ICEGATE interface. Requires Bill of Entry (imports) or Shipping Bill (exports) along with custom duty verification via HS codes.',
    customsHI: 'ICEGATE इंटरफ़ेस के तहत CBIC द्वारा प्रबंधित। एचएस कोड के माध्यम से सीमा शुल्क सत्यापन के साथ बिल ऑफ एंट्री (आयात) या शिपिंग बिल (निर्यात) की आवश्यकता होती है।',
    docsEN: ['IEC (Import Export Code)', 'GST registration', 'Commercial Invoice', 'Packing List', 'Bill of Lading'],
    docsHI: ['आईईसी (आयात निर्यात कोड)', 'जीएसटी पंजीकरण', 'वाणिज्यिक चालान', 'पैकिंग सूची', 'लदान बिल'],
    oppsEN: 'Massive opportunities in electronics manufacture, pharmaceutical supply contracts, organic agricultural products, and handcrafted textiles.',
    oppsHI: 'इलेक्ट्रॉनिक्स निर्माण, दवा आपूर्ति अनुबंध, जैविक कृषि उत्पाद और हस्तनिर्मित वस्त्रों में भारी अवसर।',
    portsEN: ['Nhava Sheva (JNPT) - Mumbai', 'Mundra Port - Gujarat', 'Chennai Port', 'Kolkata Port'],
    portsHI: ['न्हावा शेवा (जेएनपीटी) - मुंबई', 'मुंद्रा पोर्ट - गुजरात', 'चेन्नई पोर्ट', 'कोलकाता पोर्ट'],
    tipsEN: [
      'Utilize government incentives like RoDTEP and Duty Drawback.',
      'Always verify foreign buyers using ECGC credit risk assessment policies.'
    ],
    tipsHI: [
      'RoDTEP और ड्यूटी ड्रॉबैक जैसी सरकारी नीतियों का उपयोग करें।',
      'हमेशा ECGC क्रेडिट जोखिम मूल्यांकन नीतियों का उपयोग करके विदेशी खरीदारों को सत्यापित करें।'
    ]
  },
  {
    code: 'US',
    flag: '🇺🇸',
    nameEN: 'United States',
    nameHI: 'संयुक्त राज्य अमेरिका',
    overviewEN: 'The world\'s largest consumer market. Highly regulated and demanding premium quality standards, efficient logistics networks, and strict legal compliance.',
    overviewHI: 'दुनिया का सबसे बड़ा उपभोक्ता बाजार। अत्यधिक विनियमित और प्रीमियम गुणवत्ता मानकों, कुशल रसद नेटवर्क और सख्त कानूनी अनुपालन की मांग करने वाला।',
    importsEN: ['Machinery & Electronics', 'Vehicles & Automotive Parts', 'Pharmaceuticals', 'Furniture', 'Apparel'],
    importsHI: ['मशीनरी और इलेक्ट्रॉनिक्स', 'वाहन और ऑटोमोटिव पार्ट्स', 'फार्मास्युटिकल्स', 'फर्नीचर', 'कपड़े'],
    exportsEN: ['Refined Oil & Liquefied Gas', 'Aircraft Components', 'Soybeans & Agriculture', 'Medical Equipment', 'Gold'],
    exportsHI: ['परिष्कृत तेल और तरलीकृत गैस', 'विमान घटक', 'सोयाबीन और कृषि', 'चिकित्सा उपकरण', 'सोना'],
    customsEN: 'Overseen by US Customs and Border Protection (CBP). Rigid compliance with FDA regulations for food, agricultural, and medical products is mandatory.',
    customsHI: 'अमेरिकी सीमा शुल्क और सीमा सुरक्षा (CBP) द्वारा पर्यवेक्षित। खाद्य, कृषि और चिकित्सा उत्पादों के लिए एफडीए नियमों का कड़ाई से अनुपालन अनिवार्य है।',
    docsEN: ['Customs Entry Manifest (Form 7501)', 'Customs Bond', 'Commercial Invoice', 'Bill of Lading / Airway Bill'],
    docsHI: ['सीमा शुल्क प्रविष्टि घोषणा (फॉर्म 7501)', 'सीमा शुल्क बांड', 'वाणिज्यिक चालान', 'लदान बिल / हवाई मार्ग बिल'],
    oppsEN: 'High demand for specialized engineering software, gourmet food products, organic health remedies, and sustainable construction materials.',
    oppsHI: 'विशिष्ट इंजीनियरिंग सॉफ्टवेयर, पेटू खाद्य उत्पाद, जैविक स्वास्थ्य उपचार और टिकाऊ निर्माण सामग्री की उच्च मांग।',
    portsEN: ['Port of Los Angeles (Largest)', 'Port of Newark (New York)', 'Port of Houston', 'Port of Savannah'],
    portsHI: ['लॉस एंजिल्स का बंदरगाह (सबसे बड़ा)', 'नेवार्क का बंदरगाह (न्यूयॉर्क)', 'ह्यूस्टन का बंदरगाह', 'सवाना का बंदरगाह'],
    tipsEN: [
      'Maintain explicit product ingredient sheets to prevent costly FDA border seizures.',
      'Purchase full-scale Product Liability Insurance.'
    ],
    tipsHI: [
      'एफडीए सीमा जब्ती से बचने के लिए स्पष्ट उत्पाद घटक शीट बनाए रखें।',
      'पूर्ण पैमाने पर उत्पाद दायित्व बीमा खरीदें।'
    ]
  },
  {
    code: 'DE',
    flag: '🇩🇪',
    nameEN: 'Germany',
    nameHI: 'जर्मनी',
    overviewEN: 'The industrial powerhouse of the European Union. Emphasizes strict sustainability ratings, CE labeling certificates, and highly reliable logistics schedules.',
    overviewHI: 'यूरोपीय संघ का औद्योगिक पावरहाउस। सख्त स्थिरता रेटिंग, सीई लेबलिंग प्रमाणपत्र और अत्यधिक विश्वसनीय लॉजिस्टिक्स शेड्यूल पर जोर देता है।',
    importsEN: ['Vehicles & Spares', 'Computers & Electronics', 'Pharmaceuticals', 'Chemicals', 'Metals'],
    importsHI: ['वाहन और स्पेयर पार्ट्स', 'कंप्यूटर और इलेक्ट्रॉनिक्स', 'फार्मास्युटिकल्स', 'रसायन', 'धातुओं'],
    exportsEN: ['Premium Vehicles', 'Machinery', 'Chemical Products', 'Aviation Equipment', 'Electronics'],
    exportsHI: ['प्रीमियम वाहन', 'मशीनरी', 'रासायनिक उत्पाद', 'विमानन उपकरण', 'इलेक्ट्रॉनिक्स'],
    customsEN: 'Adheres to unified EU Customs regulations. Requires absolute conformity with REACH chemical directives and CE safety markers.',
    customsHI: 'एकीकृत यूरोपीय संघ सीमा शुल्क नियमों का पालन करता है। REACH रासायनिक निर्देशों और CE सुरक्षा चिह्नों के साथ पूर्ण अनुरूपता की आवश्यकता है।',
    docsEN: ['EORI number (Economic Operators Registration)', 'Single Administrative Document (SAD)', 'CE Declaration of Conformity'],
    docsHI: ['EORI संख्या (आर्थिक ऑपरेटर पंजीकरण)', 'एकल प्रशासनिक दस्तावेज (SAD)', 'CE अनुरूपता की घोषणा'],
    oppsEN: 'Lucrative market for eco-friendly packaging solutions, green construction goods, organic spices, and customized machinery.',
    oppsHI: 'पर्यावरण के अनुकूल पैकेजिंग समाधान, हरित निर्माण सामान, जैविक मसाले और अनुकूलित मशीनरी के लिए आकर्षक बाजार।',
    portsEN: ['Port of Hamburg', 'Port of Bremen/Bremerhaven', 'Port of Wilhelmshaven'],
    portsHI: ['हैम्बर्ग का बंदरगाह', 'ब्रेमेन/ब्रेमरहेवन का बंदरगाह', 'विल्हेमशवेन का बंदरगाह'],
    tipsEN: [
      'Punctuality is critical; delay penalties in German contracts are strictly enforced.',
      'All chemical or electronic components must hold environmental safety compliance proof.'
    ],
    tipsHI: [
      'समय की पाबंदी महत्वपूर्ण है; जर्मन अनुबंधों में देरी के जुर्माने को कड़ाई से लागू किया जाता है।',
      'सभी रासायनिक या इलेक्ट्रॉनिक घटकों में पर्यावरण सुरक्षा अनुपालन प्रमाण होना चाहिए।'
    ]
  },
  {
    code: 'AE',
    flag: '🇦🇪',
    nameEN: 'United Arab Emirates (UAE)',
    nameHI: 'संयुक्त अरब अमीरात (UAE)',
    overviewEN: 'The prime trading bridge connecting Asia, Africa, and Europe. UAE features world-class customs free trade zones with minimal direct taxes.',
    overviewHI: 'एशिया, अफ्रीका और यूरोप को जोड़ने वाला प्रमुख व्यापारिक पुल। संयुक्त अरब अमीरात में न्यूनतम प्रत्यक्ष करों के साथ विश्व स्तरीय सीमा शुल्क मुक्त व्यापार क्षेत्र शामिल हैं।',
    importsEN: ['Gold & Jewelry', 'Petroleum Products', 'Broadcasting Equipment', 'Cars', 'Chemicals'],
    importsHI: ['सोना और आभूषण', 'पेट्रोलियम उत्पाद', 'प्रसारण उपकरण', 'कारें', 'रसायन'],
    exportsEN: ['Crude Oil', 'Refined Petroleum', 'Gold & Diamonds', 'Polymers', 'Re-exported Goods'],
    exportsHI: ['कच्चा तेल', 'परिष्कृत पेट्रोलियम', 'सोना और हीरे', 'पॉलिमर', 'पुनः निर्यात किया गया सामान'],
    customsEN: 'Managed by Federal Customs Authority and localized Dubai/Abu Dhabi Customs. Foodstuff shipments require Halal certifications and phytosanitary certificates.',
    customsHI: 'संघीय सीमा शुल्क प्राधिकरण और स्थानीयकृत दुबई/अबू धाबी सीमा शुल्क द्वारा प्रबंधित। खाद्य सामग्री के शिपमेंट के लिए हलाल और फाइटोसैटरी प्रमाणपत्र की आवश्यकता होती है।',
    docsEN: ['Certificate of Origin (Attested by Chamber)', 'Commercial Invoice', 'Bill of Lading', 'Halal Certification'],
    docsHI: ['उत्पत्ति का प्रमाण पत्र (चेंबर द्वारा सत्यापित)', 'वाणिज्यिक चालान', 'लदान बिल', 'हलाल प्रमाणपत्र'],
    oppsEN: 'Premium agricultural goods, processed food items, gold jewelry refining services, and high-tech electronic component distribution hubs.',
    oppsHI: 'प्रीमियम कृषि सामान, प्रसंस्कृत खाद्य पदार्थ, स्वर्ण आभूषण शोधन सेवाएं, और उच्च तकनीक इलेक्ट्रॉनिक घटक वितरण हब।',
    portsEN: ['Port of Jebel Ali (Dubai) - Largest in Middle East', 'Port of Khalifa (Abu Dhabi)'],
    portsHI: ['जेबेल अली पोर्ट (दुबई) - मध्य पूर्व में सबसे बड़ा', 'खलीफा पोर्ट (अबू धाबी)'],
    tipsEN: [
      'Leverage Free Trade Zones like JAFZA for 100% corporate ownership and zero custom duties.',
      'Ensure clear Arabic labeling on all retail consumer goods.'
    ],
    tipsHI: [
      '100% कॉर्पोरेट स्वामित्व and शून्य सीमा शुल्क के लिए JAFZA जैसे मुक्त व्यापार क्षेत्रों का लाभ उठाएं।',
      'सभी खुदरा उपभोक्ता वस्तुओं पर स्पष्ट अरबी लेबलिंग सुनिश्चित करें।'
    ]
  },
  {
    code: 'GB',
    flag: '🇬🇧',
    nameEN: 'United Kingdom',
    nameHI: 'यूनाइटेड किंगडम',
    overviewEN: 'Post-Brexit trading nation requiring a dedicated EORI number for UK imports. High standards for safety conformities and border custom checks.',
    overviewHI: 'ब्रेक्सिट के बाद का व्यापारिक देश जिसे यूके आयात के लिए एक समर्पित EORI नंबर की आवश्यकता होती है। सुरक्षा अनुरूपताओं और सीमा शुल्क जांच के लिए उच्च मानक।',
    importsEN: ['Cars', 'Gas & Refined Oil', 'Gold', 'Computers', 'Packaged Medicines'],
    importsHI: ['कारें', 'गैस और परिष्कृत तेल', 'सोना', 'कंप्यूटर', 'पैक की गई दवाएं'],
    exportsEN: ['Cars & Parts', 'Gas Turbines', 'Crude Oil', 'Gold', 'Financial & Insurance Services'],
    exportsHI: ['कारें और स्पेयर पार्ट्स', 'गैस टर्बाइन', 'कच्चा तेल', 'सोना', 'वित्तीय और बीमा सेवाएं'],
    customsEN: 'Governed by HM Revenue and Customs (HMRC). Importers must utilize the CDS (Customs Declaration Service) interface for border classifications.',
    customsHI: 'एचएम राजस्व और सीमा शुल्क (HMRC) द्वारा शासित। आयातकों को सीमा वर्गीकरण के लिए सीडीएस (सीमा शुल्क घोषणा सेवा) इंटरफेस का उपयोग करना चाहिए।',
    docsEN: ['EORI number starting with GB', 'Commercial Invoice', 'Packing List', 'UKCA conformities'],
    docsHI: ['GB से शुरू होने वाली EORI संख्या', 'वाणिज्यिक चालान', 'पैकिंग सूची', 'UKCA अनुरूपता'],
    oppsEN: 'Strong import markets for readymade garments, leather footwear, organic spices, software services, and marine transport engineering equipment.',
    oppsHI: 'तैयार परिधान, चमड़े के जूते, जैविक मसाले, सॉफ्टवेयर सेवाओं और समुद्री परिवहन इंजीनियरिंग उपकरणों के लिए मजबूत आयात बाजार।',
    portsEN: ['Port of Felixstowe', 'Port of Southampton', 'London Gateway', 'Port of Immingham'],
    portsHI: ['फेलिक्सस्टो का बंदरगाह', 'साउथेम्प्टन का बंदरगाह', 'लंदन गेटवे', 'इमिंगम का बंदरगाह'],
    tipsEN: [
      'Register for a UK EORI number immediately prior to dock container discharge.',
      'Check UK Global Tariff (UKGT) structures to assess actual customs duty percentages.'
    ],
    tipsHI: [
      'डॉक कंटेनर डिस्चार्ज से ठीक पहले यूके EORI नंबर के लिए तुरंत पंजीकरण करें।',
      'वास्तविक सीमा शुल्क प्रतिशत का आकलन करने के लिए यूके ग्लोबल टैरिफ (UKGT) संरचनाओं की जांच करें।'
    ]
  },
  {
    code: 'CA',
    flag: '🇨🇦',
    nameEN: 'Canada',
    nameHI: 'कनाडा',
    overviewEN: 'A highly affluent North American economy with extensive bilateral trade connections. Possesses strict environmental certifications and consumer packaging guidelines.',
    overviewHI: 'व्यापक द्विपक्षीय व्यापार संबंधों के साथ एक अत्यधिक समृद्ध उत्तरी अमेरिकी अर्थव्यवस्था। इसके पास सख्त पर्यावरण प्रमाणन और उपभोक्ता पैकेजिंग दिशानिर्देश हैं।',
    importsEN: ['Cars & Parts', 'Delivery Trucks', 'Refined Petroleum', 'Computers', 'Broadcasting Equipment'],
    importsHI: ['कारें और पार्ट्स', 'वितरण ट्रक', 'परिष्कृत पेट्रोलियम', 'कंप्यूटर', 'प्रसारण उपकरण'],
    exportsEN: ['Crude Petroleum', 'Cars', 'Gold', 'Coal', 'Sawn Wood'],
    exportsHI: ['कच्चा पेट्रोलियम', 'कारें', 'सोना', 'कोयला', 'कटी हुई लकड़ी'],
    customsEN: 'Overseen by Canada Border Services Agency (CBSA). Adheres to rigid SPS protocols, and chemical evaluations.',
    customsHI: 'कनाडा सीमा सेवा एजेंसी (CBSA) द्वारा पर्यवेक्षित। सख्त एसपीएस प्रोटोकॉल और रासायनिक मूल्यांकन का पालन करता है।',
    docsEN: ['Canada Customs Invoice (CCI)', 'Bill of Lading', 'Commercial Invoice', 'Phytosanitary Certificates'],
    docsHI: ['कनाडा सीमा शुल्क चालान (CCI)', 'लदान बिल', 'वाणिज्यिक चालान', 'फाइटोसैनिटरी प्रमाणपत्र'],
    oppsEN: 'Enormous potential for organic agricultural products, spices, machinery components, apparel clothing, and green technology solutions.',
    oppsHI: 'जैविक कृषि उत्पादों, मसालों, मशीनरी घटकों, परिधान कपड़ों और हरित प्रौद्योगिकी समाधानों के लिए विशाल दायरा।',
    portsEN: ['Port of Vancouver (Largest)', 'Port of Montreal', 'Port of Prince Rupert'],
    portsHI: ['वैंकूवर का बंदरगाह (सबसे बड़ा)', 'मॉन्ट्रियल का बंदरगाह', 'प्रिंस रूपर्ट का बंदरगाह'],
    tipsEN: [
      'Ensure dual-language (English and French) labels for retail consumer products to fully satisfy standards.',
      'Always obtain pre-clearance certificates via CBSA CARM tools.'
    ],
    tipsHI: [
      'मानकों को पूरी तरह से संतुष्ट करने के लिए खुदरा उपभोक्ता उत्पादों के लिए दोहरी भाषा (अंग्रेजी और फ्रेंच) लेबल सुनिश्चित करें।',
      'हमेशा CBSA CARM टूल के माध्यम से पूर्व-निकासी प्रमाणपत्र प्राप्त करें।'
    ]
  },
  {
    code: 'AU',
    flag: '🇦🇺',
    nameEN: 'Australia',
    nameHI: 'ऑस्ट्रेलिया',
    overviewEN: 'Isolated continent with extremely strict biosecurity quarantine regulations to protect native ecosystems. High per-capita purchasing power.',
    overviewHI: 'देशी पारिस्थितिकी तंत्र की रक्षा के लिए अत्यंत सख्त जैव सुरक्षा संगरोध नियमों वाला द्वीप महाद्वीप। उच्च प्रति व्यक्ति क्रय शक्ति।',
    importsEN: ['Refined Petroleum', 'Cars', 'Computers & Equipment', 'Delivery Trucks', 'Telecom Equipment'],
    importsHI: ['परिष्कृत पेट्रोलियम', 'कारें', 'कंप्यूटर और उपकरण', 'वितरण ट्रक', 'दूरसंचार उपकरण'],
    exportsEN: ['Iron Ore', 'Coal', 'Natural Gas', 'Gold', 'Wheat & Barley'],
    exportsHI: ['लौह अयस्क', 'कोयला', 'प्राकृतिक गैस', 'सोना', 'गेहूं और जौ'],
    customsEN: 'Governed by Australian Border Force (ABF). Strict Department of Agriculture, Fisheries and Forestry (DAFF) quarantine evaluations for natural goods.',
    customsHI: 'ऑस्ट्रेलियाई सीमा बल (ABF) द्वारा शासित। प्राकृतिक वस्तुओं के लिए कृषि, मत्स्य पालन और वानिकी विभाग (DAFF) द्वारा सख्त संगरोध मूल्यांकन।',
    docsEN: ['Declaration of Packing (Free of Straw/Pests)', 'Commercial Invoice', 'Phytosanitary Certificates'],
    docsHI: ['पैकिंग की घोषणा (पूस/कीटों से मुक्त)', 'वाणिज्यिक चालान', 'फाइटोसैनिटरी प्रमाणपत्र'],
    oppsEN: 'Vast scope for renewable solar equipment, fresh agricultural spices, textiles, organic foods, and metal hardware fittings.',
    oppsHI: 'नवीकरणीय सौर उपकरण, ताजे कृषि मसाले, वस्त्र, जैविक खाद्य पदार्थ और धातु हार्डवेयर फिटिंग का विशाल दायरा।',
    portsEN: ['Port of Melbourne (Largest Container)', 'Port of Sydney (Botany)', 'Port of Brisbane'],
    portsHI: ['मेलबोर्न का बंदरगाह (सबसे बड़ा कंटेनर)', 'सिडनी का बंदरगाह (बोटनी)', 'ब्रिस्बेन का बंदरगाह'],
    tipsEN: [
      'Wooden packaging must utilize certified ISPM-15 stamps or undergo fumigation to clear DAFF.',
      'Never utilize raw straw packaging material.'
    ],
    tipsHI: [
      'पकड़ी लकड़ी की पैकेजिंग में प्रमाणित ISPM-15 टिकट होने चाहिए या DAFF निकासी के लिए धूमन (fumigation) होना चाहिए।',
      'कभी भी कच्चे पुआल (straw) पैकेजिंग सामग्री का उपयोग न करें।'
    ]
  },
  {
    code: 'SG',
    flag: '🇸🇬',
    nameEN: 'Singapore',
    nameHI: 'सिंगापुर',
    overviewEN: 'The absolute financial and logistic epicenter of Southeast Asia. Boasts extremely low tariff barriers and a highly automated customs network.',
    overviewHI: 'दक्षिण पूर्व एशिया का पूर्ण वित्तीय और रसद उपरिकेंद्र। अत्यधिक कम टैरिफ बाधाएं और एक अत्यधिक स्वचालित सीमा शुल्क नेटवर्क समेटे हुए है।',
    importsEN: ['Integrated Circuits', 'Refined Petroleum', 'Gold', 'Broadcasting Equipment', 'Computers'],
    importsHI: ['एकीकृत सर्किट (IC)', 'परिष्कृत पेट्रोलियम', 'सोना', 'प्रसारण उपकरण', 'कंप्यूटर'],
    exportsEN: ['Semiconductors', 'Refined Oil', 'Chemical machinery', 'Financial services', 'Jewelry'],
    exportsHI: ['अर्धचालक (Semiconductors)', 'परिष्कृत तेल', 'रासायनिक मशीनरी', 'वित्तीय सेवाएं', 'आभूषण'],
    customsEN: 'Overseen by Singapore Customs. Operates TradeNet, the world\'s first nationwide single-window custom clearance network.',
    customsHI: 'सिंगापुर सीमा शुल्क द्वारा पर्यवेक्षित। ट्रेडनेट संचालित करता है, जो दुनिया का पहला देशव्यापी सिंगल-विंडो सीमा शुल्क निकासी नेटवर्क है।',
    docsEN: ['Customs Outward/Inward Permits via TradeNet', 'Commercial Invoice', 'Bill of Lading'],
    docsHI: ['ट्रेडनेट के माध्यम से सीमा शुल्क जावक / आवक परमिट', 'वाणिज्यिक चालान', 'लदान बिल'],
    oppsEN: 'Exceptional gateway for electronic products, high-end organic foodstuffs, cosmetics, and shipping administrative infrastructure services.',
    oppsHI: 'इलेक्ट्रॉनिक उत्पादों, उच्च गुणवत्ता वाले जैविक खाद्य पदार्थों, सौंदर्य प्रसाधनों और शिपिंग प्रशासनिक बुनियादी ढांचा सेवाओं के लिए असाधारण प्रवेश द्वार।',
    portsEN: ['Port of Singapore (World\'s busiest transshipment hub)'],
    portsHI: ['सिंगापुर का बंदरगाह (दुनिया का सबसे व्यस्त ट्रांसशिपमेंट हब)'],
    tipsEN: [
      'Singapore operates zero tariffs on virtually all global commodities except beer/wine and motor vehicles.',
      'Leverage Singapore as a regional warehouse base to serve other ASEAN countries.'
    ],
    tipsHI: [
      'सिंगापुर बीयर/शराब और मोटर वाहनों को छोड़कर व्यावहारिक रूप से सभी वैश्विक वस्तुओं पर शून्य शुल्क लगाता है।',
      'अन्य आसियान देशों की सेवा के लिए एक क्षेत्रीय गोदाम आधार के रूप में सिंगापुर का लाभ उठाएं।'
    ]
  }
];

export function ExportCountryGuide() {
  const { t, language } = useLanguage();
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>('IN');

  const selectedCountry = countries.find(c => c.code === selectedCountryCode) || countries[0];

  return (
    <div id="export-country-guide-root" className="space-y-6">
      {/* Search Header Banner */}
      <div className="bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
        <h2 className="text-xl md:text-2xl font-bold font-display text-slate-900 flex items-center gap-2">
          <Globe className="w-6 h-6 text-[#1d4ed8]" />
          {t('Global Export Country Directory', 'वैश्विक निर्यात देश निर्देशिका')}
        </h2>
        <p className="text-xs text-slate-500 leading-relaxed max-w-3xl">
          {t(
            'Explore granular economic overviews, customs requirements, document mandates, and top trade targets for the world\'s leading importing and exporting nations.',
            'दुनिया के प्रमुख आयातक और निर्यातक देशों के लिए विस्तृत आर्थिक अवलोकन, सीमा शुल्क आवश्यकताओं, दस्तावेज़ शासनादेशों और शीर्ष व्यापार लक्ष्यों का अन्वेषण करें।'
          )}
        </p>

        {/* Dynamic Select Selector Badges */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {countries.map((c) => (
            <button
              id={`country-badge-${c.code}`}
              key={c.code}
              onClick={() => setSelectedCountryCode(c.code)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-[6px] border transition cursor-pointer flex items-center gap-1 ${
                selectedCountryCode === c.code
                  ? 'bg-[#1d4ed8] text-white border-[#1d4ed8] shadow-xs'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-[#e2e8f0]'
              }`}
            >
              <span>{c.flag}</span>
              <span>{language === 'hi' ? c.nameHI : c.nameEN}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Details Structure */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Market Overview Box */}
        <div className="lg:col-span-8 bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm space-y-5">
          <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
            <span className="text-3xl">{selectedCountry.flag}</span>
            <div>
              <h3 className="text-lg font-bold font-display text-slate-800">
                {language === 'hi' ? selectedCountry.nameHI : selectedCountry.nameEN}
              </h3>
              <p className="text-[10px] text-[#1d4ed8] font-mono tracking-widest uppercase">
                {t('Trade Corridor Node', 'व्यापार गलियारा नोड')} - {selectedCountry.code}
              </p>
            </div>
          </div>

          {/* Custom Trade Flow Graphic (Replacing Image Reference) */}
          <div className="relative rounded-xl overflow-hidden h-44 bg-slate-950 border border-slate-800 flex items-center justify-between p-6 text-white">
            {/* Background Grid Accent */}
            <div className="absolute inset-0 opacity-15 pointer-events-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="country-grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="1.2" fill="#fff" opacity="0.3" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#country-grid-pattern)" />
              </svg>
            </div>

            {/* Content info layout */}
            <div className="relative z-10 space-y-2">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-blue-500/20 text-blue-400 border border-blue-500/30 font-mono text-[10px] font-bold rounded-full uppercase tracking-wider">
                {selectedCountry.code} &nbsp;&bull;&nbsp; {t('CORRIDOR PROFILE', 'गलियारा प्रोफाइल')}
              </span>
              <h4 className="text-sm md:text-lg font-bold font-display tracking-tight text-white flex items-center gap-2">
                <span>{language === 'hi' ? selectedCountry.portsHI[0] : selectedCountry.portsEN[0]}</span>
              </h4>
              <p className="text-[11px] text-slate-400 max-w-sm">
                {t('Authorized ocean carrier trade routes connecting other global ports.', 'अन्य वैश्विक बंदरगाहों को जोड़ने वाले अधिकृत समुद्री वाहक व्यापार मार्ग।')}
              </p>
            </div>

            {/* Visual Trade flow diagram inline SVG */}
            <div className="relative z-10 shrink-0 hidden md:block w-72 h-32">
              <svg viewBox="0 0 300 130" className="w-full h-full text-blue-500" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Connection lines */}
                <path d="M 20,65 L 280,65" stroke="rgba(255,255,255,0.15)" strokeWidth="4" />
                <path d="M 20,65 C 100,20 200,20 280,65" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M 20,65 C 100,110 200,110 280,65" stroke="#10b981" strokeWidth="2" strokeDasharray="3 3" />

                {/* Left/Origin Node (Factory) */}
                <g transform="translate(10, 45)">
                  <rect x="0" y="5" width="20" height="30" rx="3" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />
                  <path d="M -3,5 L 23,5" stroke="#3b82f6" strokeWidth="1.5" />
                  <circle cx="10" cy="20" r="3" fill="#3b82f6" />
                  <text x="10" y="45" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">ORIGIN</text>
                </g>

                {/* Cargo Vessel in the middle */}
                <g transform="translate(115, 30)">
                  <path d="M10,40 L60,40 L50,55 L20,55 Z" fill="#3b82f6" opacity="0.8" />
                  <rect x="22" y="25" width="10" height="15" fill="#60a5fa" />
                  <rect x="34" y="20" width="12" height="20" fill="#2563eb" />
                  <line x1="15" y1="39" x2="55" y2="39" stroke="#fff" strokeWidth="1" />
                </g>

                {/* Right/Destination Node (Port) */}
                <g transform="translate(250, 45)">
                  <polygon points="10,5 30,5 25,35 5,35" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
                  <path d="M 12,5 L -3,-5 L 15,-5 Z" fill="#10b981" />
                  <circle cx="18" cy="20" r="3" fill="#10b981" />
                  <text x="15" y="45" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">PORT</text>
                </g>
              </svg>
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 text-xs text-slate-650 leading-relaxed italic">
            "{language === 'hi' ? selectedCountry.overviewHI : selectedCountry.overviewEN}"
          </div>

          {/* Import / Export Grid lists */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3 bg-[#f8fafc] p-4 rounded-lg border border-slate-100">
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                📥 {t('Top Imported Products', 'शीर्ष आयातित उत्पाद')}
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                {(language === 'hi' ? selectedCountry.importsHI : selectedCountry.importsEN).map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-rose-500 rounded-full"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 bg-[#f8fafc] p-4 rounded-lg border border-slate-100">
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                📤 {t('Top Exported Products', 'शीर्ष निर्यातित उत्पाद')}
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                {(language === 'hi' ? selectedCountry.exportsHI : selectedCountry.exportsEN).map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Business Opportunities */}
          <div className="p-4 rounded-lg bg-blue-50/40 border border-blue-100 space-y-1">
            <h4 className="text-xs font-bold text-blue-900 flex items-center gap-1">
              💡 {t('Business Opportunities', 'व्यापारिक अवसर')}
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {language === 'hi' ? selectedCountry.oppsHI : selectedCountry.oppsEN}
            </p>
          </div>

          {/* Customs Protocols & Rules */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-[#1d4ed8]" /> {t('Customs entry and clearance protocols', 'सीमा शुल्क प्रवेश और निकासी प्रोटोकॉल')}
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {language === 'hi' ? selectedCountry.customsHI : selectedCountry.customsEN}
            </p>
          </div>
        </div>

        {/* Right Columns: Required documents & Ports */}
        <div className="lg:col-span-4 bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm space-y-5">
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-emerald-600" /> {t('Mandatory Documents', 'अनिवार्य दस्तावेज')}
            </h4>
            <ul className="space-y-2 bg-slate-50 p-3 rounded-lg border border-slate-150">
              {(language === 'hi' ? selectedCountry.docsHI : selectedCountry.docsEN).map((doc, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                  <span className="text-emerald-600 font-bold font-mono">✓</span>
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <Anchor className="w-4 h-4 text-sky-600" /> {t('Popular Trade Ports', 'लोकप्रिय व्यापार बंदरगाह')}
            </h4>
            <ul className="space-y-2 bg-slate-50 p-3 rounded-lg border border-slate-150">
              {(language === 'hi' ? selectedCountry.portsHI : selectedCountry.portsEN).map((port, idx) => (
                <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-700">
                  <span className="text-[#1d4ed8] font-bold mt-0.5">•</span>
                  <span>{port}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 bg-amber-50/40 border border-amber-200 rounded-lg space-y-2">
            <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wider flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4" /> {t('Critical Trade Tips', 'महत्वपूर्ण व्यापार युक्तियाँ')}
            </h4>
            <ul className="space-y-1.5 text-[11px] text-slate-600 leading-relaxed list-disc list-inside">
              {(language === 'hi' ? selectedCountry.tipsHI : selectedCountry.tipsEN).map((tip, idx) => (
                <li key={idx}>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
