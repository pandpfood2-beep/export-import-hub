import React, { useState, useMemo } from 'react';
import {
  Menu, X, Search, Globe, ChevronRight, BookOpen, Ship, HelpCircle,
  FileText, Landmark, ShieldAlert, Award, Compass, ArrowRight, CheckCircle,
  ClipboardList, Mail
} from 'lucide-react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

// Import sub components
import { Dashboard } from './components/Dashboard';
import { CoreBasics } from './components/CoreBasics';
import { IncotermsSection } from './components/IncotermsSection';
import { DocumentationCenter } from './components/DocumentationCenter';
import { PaymentsSection } from './components/PaymentsSection';
import { CustomsAndCHAs } from './components/CustomsAndCHAs';
import { LogisticsSection } from './components/LogisticsSection';
import { SourcingAndMarketing } from './components/SourcingAndMarketing';
import { RiskAndGovtSupport } from './components/RiskAndGovtSupport';
import { ChecklistsSection } from './components/ChecklistsSection';
import { FAQCenter } from './components/FAQCenter';
import { GlossarySection } from './components/GlossarySection';
import { HSCodeClassification } from './components/HSCodeClassification';

// Import newly added comprehensive modules
import { ExportCountryGuide } from './components/ExportCountryGuide';
import { ExportProductLibrary } from './components/ExportProductLibrary';
import { IECCompleteGuide } from './components/IECCompleteGuide';
import { ExportCostCenter } from './components/ExportCostCenter';
import { ContainerKnowledgeCenter } from './components/ContainerKnowledgeCenter';
import { BankingForexGuide } from './components/BankingForexGuide';
import { ExportProcessFlow } from './components/ExportProcessFlow';
import { DownloadCenter } from './components/DownloadCenter';
import { SecondaryPages } from './components/SecondaryPages';

// Import static data directly for unified search calculations
import { faqsData } from './data/faqs_expanded';
import { incotermsData } from './data/incoterms';
import { documentsData } from './data/documents';
import { paymentsData } from './data/payments';
import { glossaryData } from './data/glossary';

function AppContent() {
  const { t, language, setLanguage } = useLanguage();
  const [activeNavCode, setActiveNavCode] = useState<string>('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [globalSearchQuery, setGlobalSearchQuery] = useState<string>('');
  const [showSearchResults, setShowSearchResults] = useState<boolean>(false);

  // Grouped Sidebar configuration mapping holding reactive bilingual translations
  const navigationGroups = [
    {
      group: t('INTRODUCTION', 'प्रस्तावना'),
      items: [
        { code: 'dashboard', label: t('Home Dashboard', 'मुख्य डैशबोर्ड'), icon: <Globe className="w-4 h-4" /> }
      ]
    },
    {
      group: t('ACADEMIC CORE', 'अकादमिक कोर ज्ञान'),
      items: [
        { code: 'basics', label: t('Trade Basics', 'व्यापार की मूल बातें'), icon: <BookOpen className="w-4 h-4" /> },
        { code: 'incoterms', label: t('Incoterms 2020', 'इंकोटर्म्स 2020'), icon: <Ship className="w-4 h-4" /> },
        { code: 'documents', label: t('Documentation', 'आवश्यक दस्तावेज'), icon: <FileText className="w-4 h-4" /> },
        { code: 'payments', label: t('Payment & Finance', 'भुगतान और वित्त'), icon: <Landmark className="w-4 h-4" /> },
        { code: 'banking_forex', label: t('Banking & Forex', 'बैंकिंग और फॉरेक्स'), icon: <Landmark className="w-4 h-4" /> }
      ]
    },
    {
      group: t('BORDERS & FREIGHT', 'सीमा शुल्क और माल ढुलाई'),
      items: [
        { code: 'customs', label: t('Customs & CHA', 'सीमा शुल्क और CHA'), icon: <Award className="w-4 h-4" /> },
        { code: 'logistics', label: t('Freight & Logistics', 'माल ढुलाई और रसद'), icon: <Compass className="w-4 h-4" /> },
        { code: 'hscode', label: t('HS Classification', 'एचएस वर्गीकरण'), icon: <FileText className="w-4 h-4" /> },
        { code: 'container', label: t('Container Specs', 'कंटेनर विनिर्देश'), icon: <Ship className="w-4 h-4" /> }
      ]
    },
    {
      group: t('GLOBAL STRATEGIES', 'वैश्विक व्यापार रणनीतियां'),
      items: [
        { code: 'sourcing', label: t('Sourcing & Marketing', 'सोर्सिंग और वैश्विक विपणन'), icon: <Search className="w-4 h-4" /> },
        { code: 'riskgovt', label: t('Incentives & Risk', 'प्रोत्साहन और जोखिम प्रबंधन'), icon: <ShieldAlert className="w-4 h-4" /> },
        { code: 'country_guide', label: t('Country Hub', 'देश निर्यात गाइड'), icon: <Globe className="w-4 h-4" /> },
        { code: 'product_lib', label: t('Product Library', 'उत्पाद निर्यात पुस्तकालय'), icon: <BookOpen className="w-4 h-4" /> },
        { code: 'iec_guide', label: t('IEC Registration', 'आईईसी (IEC) पंजीकरण'), icon: <Award className="w-4 h-4" /> },
        { code: 'cost_center', label: t('Pricing Center', 'लागत और मूल्य निर्धारण'), icon: <Landmark className="w-4 h-4" /> },
        { code: 'process_flow', label: t('Export Process', '9-चरण निर्यात चरण'), icon: <Compass className="w-4 h-4" /> }
      ]
    },
    {
      group: t('INTERACTIVES & Q&A', 'इंटरैक्टिव और सवाल'),
      items: [
        { code: 'checklists', label: t('Action Checklists', 'व्यापारिक चेकलिस्ट'), icon: <ClipboardList className="w-4 h-4" /> },
        { code: 'faqs', label: t('Search 101 FAQs', 'सामान्य सवाल FAQs'), icon: <HelpCircle className="w-4 h-4" /> },
        { code: 'glossary', label: t('Term Dictionary', 'शब्दावली शब्दकोश'), icon: <BookOpen className="w-4 h-4" /> },
        { code: 'downloads', label: t('Reference Center', 'डाउनलोड और संदर्भ'), icon: <FileText className="w-4 h-4" /> }
      ]
    },
    {
      group: t('ABOUT & LEGAL', 'परिचय और नीति नियम'),
      items: [
        { code: 'about', label: t('About Hub', 'हब के बारे में'), icon: <Award className="w-4 h-4" /> },
        { code: 'contact', label: t('Contact & Support', 'संपर्क और सहायता'), icon: <Mail className="w-4 h-4" /> },
        { code: 'privacy', label: t('Privacy Policy', 'गोपनीयता नीति'), icon: <ShieldAlert className="w-4 h-4" /> },
        { code: 'terms', label: t('Terms & Conditions', 'नियम और शर्तें'), icon: <FileText className="w-4 h-4" /> },
        { code: 'disclaimer', label: t('Legal Disclaimer', 'कानूनी अस्वीकरण'), icon: <HelpCircle className="w-4 h-4" /> }
      ]
    }
  ];

  // Helper trigger navigation
  const handleNav = (code: string) => {
    setActiveNavCode(code);
    setMobileMenuOpen(false);
    setGlobalSearchQuery('');
    setShowSearchResults(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Dynamic Unified Global Search calculations compiling all sections
  const searchResults = useMemo(() => {
    if (!globalSearchQuery.trim()) return [];
    const q = globalSearchQuery.toLowerCase();
    const results: { title: string; subtitle: string; targetTab: string; type: string }[] = [];

    // Search Country targets
    const countries = ['india', 'united states', 'germany', 'united arab emirates', 'uae', 'united kingdom', 'uk', 'canada', 'australia', 'singapore'];
    countries.forEach(country => {
      if (country.includes(q)) {
        results.push({
          title: country.toUpperCase(),
          subtitle: 'Detailed customs overview, popular ports, trade tips and bilateral opportunities.',
          targetTab: 'country_guide',
          type: 'Country Profile'
        });
      }
    });

    // Search Products categories
    const products = ['spices', 'fruits', 'vegetables', 'dairy products', 'textiles', 'engineering goods', 'handicrafts', 'agricultural products'];
    products.forEach(prod => {
      if (prod.includes(q)) {
        results.push({
          title: prod.toUpperCase(),
          subtitle: 'Product HS Code classifications, export opportunities, and specialized packing packaging guidelines.',
          targetTab: 'product_lib',
          type: 'Product Library'
        });
      }
    });

    // Custom sections matches
    if ('iec registration'.includes(q) || 'importer exporter code'.includes(q)) {
      results.push({ title: 'IEC Complete Instruction Guide', subtitle: 'What is IEC, register steps, mandatory documents and lifetime benefits.', targetTab: 'iec_guide', type: 'Official Guides' });
    }
    if ('pricing cost calculator fob cif freight'.includes(q)) {
      results.push({ title: 'Pricing & Cost Knowledge Simulator', subtitle: 'Inland freights, custom clearance, marine insurance and hidden cost blackholes.', targetTab: 'cost_center', type: 'Financial Tool' });
    }
    if ('shipping container GP HC reefer dimensions payload volume'.includes(q)) {
      results.push({ title: 'Shipping Container specifications', subtitle: 'Dimensions, capacity, usage and suitable items for 20FT, 40FT cargo containers.', targetTab: 'container', type: 'Logistics Spec' });
    }
    if ('swift telegram payments letter of credit currency hedge exchange'.includes(q)) {
      results.push({ title: 'Banking, payments & Forex Guide', subtitle: 'SWIFT transfers, TT wiring rules and Letter of Credit (LC) conditions.', targetTab: 'banking_forex', type: 'Trade Finance' });
    }
    if ('export import process flow 9-step pipeline'.includes(q)) {
      results.push({ title: '9-Step Interactive Export journey', subtitle: 'Product choosing, target market research, shipping bill filing and cash settlements.', targetTab: 'process_flow', type: 'Workflow Pipeline' });
    }

    // Search Incoterms static entries
    incotermsData.forEach(item => {
      if (item.code.toLowerCase().includes(q) || item.name.toLowerCase().includes(q) || item.meaning.toLowerCase().includes(q)) {
        results.push({ title: `${item.code} - ${item.name}`, subtitle: item.meaning, targetTab: 'incoterms', type: 'Incoterm Rule' });
      }
    });

    // Search Documents properties
    documentsData.forEach(doc => {
      if (doc.name.toLowerCase().includes(q) || doc.purpose.toLowerCase().includes(q)) {
        results.push({ title: doc.name, subtitle: doc.purpose, targetTab: 'documents', type: 'Certificate' });
      }
    });

    // Search Payments definitions
    paymentsData.forEach(pay => {
      if (pay.term.toLowerCase().includes(q) || pay.fullName.toLowerCase().includes(q) || pay.description.toLowerCase().includes(q)) {
        results.push({ title: pay.term, subtitle: pay.fullName, targetTab: 'payments', type: 'Finance' });
      }
    });

    // Search FAQs definitions
    faqsData.forEach(faq => {
      if (faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q)) {
        results.push({ title: faq.question, subtitle: faq.answer, targetTab: 'faqs', type: 'FAQ Answer' });
      }
    });

    // Search Glossary keywords
    glossaryData.forEach(gloss => {
      if (gloss.term.toLowerCase().includes(q) || gloss.definition.toLowerCase().includes(q)) {
        results.push({ title: gloss.term, subtitle: gloss.definition, targetTab: 'glossary', type: 'Glossary Word' });
      }
    });

    return results.slice(0, 10); // caps to top 10 unique results
  }, [globalSearchQuery]);

  // View renderer factory registering all components
  const renderActiveComponent = () => {
    switch (activeNavCode) {
      case 'dashboard':
        return <Dashboard onNavigate={handleNav} />;
      case 'basics':
        return <CoreBasics />;
      case 'incoterms':
        return <IncotermsSection />;
      case 'documents':
        return <DocumentationCenter />;
      case 'payments':
        return <PaymentsSection />;
      case 'banking_forex':
        return <BankingForexGuide />;
      case 'customs':
        return <CustomsAndCHAs />;
      case 'logistics':
        return <LogisticsSection />;
      case 'hscode':
        return <HSCodeClassification />;
      case 'container':
        return <ContainerKnowledgeCenter />;
      case 'sourcing':
        return <SourcingAndMarketing />;
      case 'riskgovt':
        return <RiskAndGovtSupport />;
      case 'country_guide':
        return <ExportCountryGuide />;
      case 'product_lib':
        return <ExportProductLibrary />;
      case 'iec_guide':
        return <IECCompleteGuide />;
      case 'cost_center':
        return <ExportCostCenter />;
      case 'process_flow':
        return <ExportProcessFlow />;
      case 'checklists':
        return <ChecklistsSection />;
      case 'faqs':
        return <FAQCenter />;
      case 'glossary':
        return <GlossarySection />;
      case 'downloads':
        return <DownloadCenter />;
      case 'about':
        return <SecondaryPages pageType="about" />;
      case 'contact':
        return <SecondaryPages pageType="contact" />;
      case 'privacy':
        return <SecondaryPages pageType="privacy" />;
      case 'terms':
        return <SecondaryPages pageType="terms" />;
      case 'disclaimer':
        return <SecondaryPages pageType="disclaimer" />;
      default:
        return <Dashboard onNavigate={handleNav} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans select-none pb-12">
      {/* Dynamic Global Top Banner */}
      <header className="no-print sticky top-0 z-50 bg-[#0f172a] text-white px-6 py-4 shadow-md flex items-center justify-between border-b border-slate-800 h-16">
        <div className="flex items-center gap-3">
          {/* Mobile hamburger icon */}
          <button
            id="mobile-hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-md hover:bg-slate-800 text-slate-300 transition shrink-0 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          
          <div onClick={() => handleNav('dashboard')} className="flex items-center gap-2.5 cursor-pointer">
            <span className="w-8 h-8 rounded-[4px] bg-[#1d4ed8] text-white font-display font-black flex items-center justify-center tracking-tighter text-sm shadow-inner">
              EIH
            </span>
            <div className="space-y-0 text-left shrink-0">
              <span className="font-bold font-display text-sm tracking-tight leading-none block">Export Import Hub</span>
              <span className="text-[9px] text-blue-400 font-mono tracking-wider block uppercase leading-none mt-0.5">{t('Global Trade Library', 'वैश्विक व्यापार पुस्तकालय')}</span>
            </div>
          </div>
        </div>

        {/* Global Instant Search Bar */}
        <div className="relative w-40 sm:w-60 md:w-80 font-sans mx-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-slate-400" />
            <input
              id="top-global-search"
              type="text"
              placeholder={t('Search trade profiles, LCs, FOB...', 'व्यापार नियम, LC, देश, FOB खोजें...')}
              value={globalSearchQuery}
              onChange={(e) => {
                setGlobalSearchQuery(e.target.value);
                setShowSearchResults(true);
              }}
              onFocus={() => setShowSearchResults(true)}
              className="w-full bg-[#1e293b] pr-3.5 pl-8 py-1.5 text-xs text-white placeholder-slate-400 border border-slate-700 rounded-[4px] outline-none focus:ring-1 focus:ring-blue-500 transition"
            />
          </div>

          {/* Search Result Overlay Box */}
          {showSearchResults && globalSearchQuery && (
            <div className="absolute top-full right-0 left-0 mt-2 bg-white rounded-lg shadow-2xl border border-slate-200 overflow-hidden text-slate-800 text-xs z-50">
              <div className="p-2 border-b border-slate-100 bg-slate-50 flex justify-between items-center text-[10px] text-slate-400 font-semibold font-sans">
                <span>{t('Unified Search Results Matching:', 'खोज मिलान परिणाम:')}</span>
                <button
                  id="search-clear-trigger"
                  onClick={() => {
                    setGlobalSearchQuery('');
                    setShowSearchResults(false);
                  }}
                  className="hover:text-slate-700 font-bold"
                >
                  X
                </button>
              </div>

              <div className="divide-y divide-slate-100 max-h-80 overflow-y-auto">
                {searchResults.length > 0 ? (
                  searchResults.map((res, index) => (
                    <button
                      id={`search-res-item-${index}`}
                      key={index}
                      onClick={() => handleNav(res.targetTab)}
                      className="w-full text-left p-3 hover:bg-slate-50 flex justify-between items-start gap-4 transition cursor-pointer"
                    >
                      <div className="space-y-0.5 max-w-[85%]">
                        <span className="text-[8px] font-mono font-bold text-blue-800 uppercase bg-blue-50 px-1.5 py-0.5 rounded-sm">
                          {res.type}
                        </span>
                        <h5 className="font-semibold text-slate-800 text-xs pt-1">{res.title}</h5>
                        <p className="text-[10px] text-slate-550 truncate leading-snug">{res.subtitle}</p>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 mt-1 shrink-0" />
                    </button>
                  ))
                ) : (
                  <div className="p-4 text-center text-slate-400 italic">
                    {t('No results match. Try "FOB", "India", or "Customs".', 'कोई परिणाम नहीं मिला। "FOB", "India" या "Customs" खोजें।')}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Dynamic Language Switcher + Desk text */}
        <div className="flex items-center gap-4">
          {/* Flag Toggle Switches */}
          <div className="flex gap-1 p-0.5 bg-slate-800 rounded border border-slate-700">
            <button
              id="lang-toggle-en"
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 rounded text-[10px] font-bold font-mono transition cursor-pointer ${
                language === 'en' ? 'bg-[#182ed8] text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              id="lang-toggle-hi"
              onClick={() => setLanguage('hi')}
              className={`px-2 py-1 rounded text-[10px] font-bold font-mono transition cursor-pointer ${
                language === 'hi' ? 'bg-[#182ed8] text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              हिन्दी
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 text-[9px] font-mono text-slate-400 uppercase tracking-widest border-l border-slate-700 pl-4">
            <span>{t('ACADEMIC ACCESS ONLY', 'केवल शैक्षणिक उपयोग')}</span>
          </div>
        </div>
      </header>

      {/* Main Container Layout */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row gap-6 items-start">
        
        {/* Sidebar Frame - Hidden on small mobile systems unless matching hamburger toggler */}
        <aside className={`no-print shrink-0 w-[230px] border border-slate-200 bg-white rounded-lg p-3.5 shadow-sm space-y-5 md:sticky md:top-22 ${
          mobileMenuOpen ? 'fixed inset-y-0 left-0 z-40 w-72 block shadow-2xl border-r h-full' : 'hidden md:block'
        }`}>
          {/* Mobile close sidebar panel indicator */}
          <div className="flex justify-between items-center md:hidden border-b border-slate-100 pb-3">
            <span className="font-mono text-xs font-bold text-blue-800 tracking-wider">EIH LIBRARY</span>
            <button
              id="mobile-close-menu"
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-5 overflow-y-auto max-h-[80vh] pr-1">
            {navigationGroups.map((group, grpIdx) => (
              <div key={grpIdx} className="space-y-1 text-left">
                <span className="text-[9px] font-mono font-bold text-slate-400 tracking-wider block px-2 uppercase">
                  {group.group}
                </span>
                <div className="space-y-0.5">
                  {group.items.map((item, itemIdx) => {
                    const isSelected = activeNavCode === item.code;
                    return (
                      <button
                        id={`sidebar-link-${item.code}`}
                        key={itemIdx}
                        onClick={() => handleNav(item.code)}
                        className={`w-full text-left text-[11px] font-bold px-2 py-1.5 rounded-[4px] transition duration-100 flex items-center gap-2 cursor-pointer ${
                          isSelected
                            ? 'bg-blue-50 text-blue-902 font-bold shadow-2xs border-l-2 border-blue-600'
                            : 'text-slate-650 hover:bg-slate-100 hover:text-slate-900'
                        }`}
                      >
                        <span className={isSelected ? 'text-[#1d4ed8]' : 'text-slate-400'}>
                          {item.icon}
                        </span>
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-100 pt-3 text-center">
            <div className="text-[9px] text-slate-400 font-mono">
              EIH Library v2.0
            </div>
            <div className="text-[8px] text-slate-400 font-sans mt-0.5 bg-slate-50 py-1 rounded border">
              {t('Zero signups & ads', 'कोई साइनअप या विज्ञापन नहीं')}
            </div>
          </div>
        </aside>

        {/* Content Container Canvas */}
        <main className="flex-1 w-full min-w-0">
          <div className="animate-fade-in">
            {renderActiveComponent()}
          </div>
        </main>
      </div>

      {/* Global Bottom Footer note */}
      <footer className="no-print mt-12 border-t border-slate-200 py-6 text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p className="font-display font-bold text-slate-600">Export Import Hub &middot; {t('The Comprehensive Educational Library Matrix', 'व्यापक शैक्षणिक पुस्तकालय सूचकांक')}</p>
          <p className="text-[10px] leading-relaxed max-w-xl mx-auto text-slate-400 font-sans">
            {t(
              'Disclaimer: The materials provided in this digital catalog are strictly for academic, structured training, and generalized reference. Verify port forms, custom tax duties, and logistics bills with certified local Customs Brokers.',
              'अस्वीकरण: इस डिजिटल निर्देशिका में प्रदान की गई सामग्री केवल शैक्षणिक, संरचित प्रशिक्षण और संदर्भ के लिए है। लोडिंग से पहले स्थानीय सीमा शुल्क दलालों (CHA) के साथ नियमों को सत्यापित करें।'
            )}
          </p>
          <p className="pt-2 font-mono text-[9px] text-slate-400">
            {t('Powered by React 19 &middot; Offline ready localStorage &middot; 100% Client privacy compliant', 'रिएक्ट 19 द्वारा संचालित &middot; ऑफ़लाइन तैयार स्थानीय स्टोरेज &middot; 100% गोपनीयता अनुपालन')}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
