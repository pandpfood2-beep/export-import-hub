import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Archive, BarChart, FileCheck, Package, LayoutGrid, Search } from 'lucide-react';
import { finalProductsData as productDatabase } from '../data/products_expanded';

// Normalise category strings to one of the 8 canonical categories
export function getCanonicalCategory(cat: string): string {
  const c = cat.toLowerCase();
  if (['spices', 'chilli', 'cumin', 'coriander'].includes(c) || c.startsWith('spices_derived_')) {
    return 'spices';
  }
  if (['fruits', 'mango', 'pomegranate', 'grapes'].includes(c)) {
    return 'fruits';
  }
  if (['vegetables', 'onion'].includes(c)) {
    return 'vegetables';
  }
  if (['dairy'].includes(c)) {
    return 'dairy';
  }
  if (['textiles'].includes(c)) {
    return 'textiles';
  }
  if (['engineering'].includes(c)) {
    return 'engineering';
  }
  if (['handicrafts'].includes(c)) {
    return 'handicrafts';
  }
  if (['agro_products', 'rice'].includes(c)) {
    return 'agro_products';
  }
  return 'spices';
}

export function ExportProductLibrary() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('spices');
  const [selectedProductIndex, setSelectedProductIndex] = useState<number>(0);

  const categoriesList = [
    { code: 'spices', labelEN: 'Spices', labelHI: 'मसाले' },
    { code: 'fruits', labelEN: 'Fruits', labelHI: 'फल' },
    { code: 'vegetables', labelEN: 'Vegetables', labelHI: 'सब्जियां' },
    { code: 'dairy', labelEN: 'Dairy', labelHI: 'डेयरी' },
    { code: 'textiles', labelEN: 'Textiles', labelHI: 'कपड़े और वस्त्र' },
    { code: 'engineering', labelEN: 'Engineering Goods', labelHI: 'इंजीनियरिंग सामान' },
    { code: 'handicrafts', labelEN: 'Handicrafts', labelHI: 'हस्तशिल्प' },
    { code: 'agro_products', labelEN: 'Agro Products', labelHI: 'कृषि उत्पाद' }
  ];

  // Filter products by canonical category
  const productsInActiveCategory = useMemo(() => {
    return productDatabase.filter(p => getCanonicalCategory(p.category) === activeCategory);
  }, [activeCategory]);

  const selectedProduct = useMemo(() => {
    return productsInActiveCategory[selectedProductIndex] || productsInActiveCategory[0] || productDatabase[0];
  }, [productsInActiveCategory, selectedProductIndex]);

  const handleCategoryChange = (categoryCode: string) => {
    setActiveCategory(categoryCode);
    setSelectedProductIndex(0);
  };

  const renderProductIndicator = (cat: string) => {
    let bgColor = 'bg-amber-950/25 border-amber-900';
    let label = 'Spices';
    let icon = '🌶️';
    let sublabel = 'HS 0904';
    
    switch (cat) {
      case 'spices':
        bgColor = 'bg-amber-950 border-amber-800 text-amber-300';
        label = language === 'hi' ? 'मसाले' : 'Spices';
        icon = '🌶️';
        sublabel = 'HS 0904 - 0910';
        break;
      case 'fruits':
        bgColor = 'bg-red-950 border-red-800 text-red-100';
        label = language === 'hi' ? 'फल' : 'Fruits';
        icon = '🍎';
        sublabel = 'HS 0804 - 0810';
        break;
      case 'vegetables':
        bgColor = 'bg-emerald-950 border-emerald-800 text-emerald-300';
        label = language === 'hi' ? 'सब्जियां' : 'Vegetables';
        icon = '🥦';
        sublabel = 'HS 0701 - 0709';
        break;
      case 'dairy':
        bgColor = 'bg-sky-950 border-sky-800 text-sky-200';
        label = language === 'hi' ? 'डेयरी' : 'Dairy';
        icon = '🥛';
        sublabel = 'HS 0401 - 0406';
        break;
      case 'textiles':
        bgColor = 'bg-indigo-950 border-indigo-800 text-indigo-200';
        label = language === 'hi' ? 'वस्त्र' : 'Textiles';
        icon = '🧶';
        sublabel = 'HS 5201 - 6217';
        break;
      case 'engineering':
        bgColor = 'bg-slate-950 border-slate-800 text-slate-300';
        label = language === 'hi' ? 'इंजीनियरिंग' : 'Engineering';
        icon = '⚙️';
        sublabel = 'HS 7201 - 8487';
        break;
      case 'handicrafts':
        bgColor = 'bg-violet-950 border-violet-800 text-violet-300';
        label = language === 'hi' ? 'हस्तशिल्प' : 'Handicrafts';
        icon = '🏺';
        sublabel = 'HS 4421 / 7419';
        break;
      case 'agro_products':
        bgColor = 'bg-teal-950 border-teal-800 text-teal-300';
        label = language === 'hi' ? 'कृषि' : 'Agro Products';
        icon = '🌾';
        sublabel = 'HS 1006 / 0901';
        break;
    }

    return (
      <div className={`w-full h-full ${bgColor} border flex flex-col justify-between p-4 font-mono rounded-lg relative overflow-hidden select-none`}>
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:10px_10px]"></div>
        <div className="relative z-10 flex justify-between items-center text-[9px] font-bold tracking-widest uppercase">
          <span>CLASSIFIED NODE</span>
          <span className="opacity-75">{sublabel}</span>
        </div>
        <div className="relative z-10 text-3xl my-auto text-center">{icon}</div>
        <div className="relative z-10 font-sans font-bold text-sm text-center tracking-tight leading-none truncate">{label}</div>
      </div>
    );
  };

  return (
    <div id="export-product-library-root" className="space-y-6">
      {/* Search Header Banner */}
      <div className="bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl md:text-2xl font-bold font-display text-slate-900 flex items-center gap-2">
            <Archive className="w-6 h-6 text-[#1d4ed8]" />
            {t('Export Product Library & HSN Dictionary', 'निर्यात उत्पाद पुस्तकालय और एचएसएन डिक्शनरी')}
          </h2>
          <p className="text-xs text-slate-500 leading-relaxed max-w-3xl">
            {t(
              'Explore HS code classifications, mandatory packing methodologies, target importing economies, APEDA requirements, and profitable growth opportunities across 8 major product categories.',
              '8 प्रमुख उत्पाद श्रेणियों में एचएस कोड वर्गीकरण, अनिवार्य पैकिंग पद्धतियों, लक्ष्य आयातित अर्थव्यवस्थाओं, APEDA आवश्यकताओं और लाभदायक अवसरों का अन्वेषण करें।'
            )}
          </p>
        </div>

        {/* Categories Tab Grid */}
        <div className="space-y-1.5 pt-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
            {t('1. Select Department:', '1. विभाग चुनें:')}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {categoriesList.map((cat) => (
              <button
                id={`cat-btn-${cat.code}`}
                key={cat.code}
                onClick={() => handleCategoryChange(cat.code)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-[6px] border transition cursor-pointer ${
                  activeCategory === cat.code
                    ? 'bg-[#1d4ed8] text-white border-[#1d4ed8] shadow-sm font-bold'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-[#e2e8f0]'
                }`}
              >
                {t(cat.labelEN, cat.labelHI)}
              </button>
            ))}
          </div>
        </div>

        {/* Specific Products List within selected Category */}
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-150 space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
            {t('2. Select Specific Product Spec Sheet:', '2. विशिष्ट उत्पाद विशिष्टता पत्रक चुनें:')}
          </span>
          <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto pr-1">
            {productsInActiveCategory.map((prod, idx) => (
              <button
                id={`prod-btn-${prod.hsCode}-${idx}`}
                key={`${prod.hsCode}-${idx}`}
                onClick={() => setSelectedProductIndex(idx)}
                className={`px-2.5 py-1.5 text-xs font-medium rounded-md border transition cursor-pointer ${
                  selectedProductIndex === idx
                    ? 'bg-blue-50 text-[#1d4ed8] border-blue-300 font-semibold shadow-xs'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {t(prod.categoryEN, prod.categoryHI)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Information Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left main detail block */}
        <div className="lg:col-span-8 bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-slate-150">
            <div className="space-y-0.5">
              <span className="text-[10px] bg-blue-50 text-[#1d4ed8] font-bold font-mono px-2 py-0.5 rounded-sm uppercase tracking-wider">
                {t('Sourcing Classification Target', 'सोर्सिंग वर्गीकरण लक्ष्य')}
              </span>
              <h3 className="text-lg font-bold font-display text-slate-800">
                {t(selectedProduct.categoryEN, selectedProduct.categoryHI)} - {t('Trade Profile', 'व्यापार प्रोफ़ाइल')}
              </h3>
            </div>
            
            <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-[6px] border border-slate-200">
              <span className="font-mono text-xs font-bold text-[#1d4ed8]">{t('HS Code', 'एचएस कोड')}: {selectedProduct.hsCode}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
            <div className="md:col-span-4 relative h-32 rounded-lg overflow-hidden">
              {renderProductIndicator(getCanonicalCategory(selectedProduct.category))}
            </div>
            <div className="md:col-span-8 text-xs text-slate-600 leading-relaxed space-y-2">
              <span className="font-bold text-slate-800 block text-xs">{t('Scientific & Practical Overview:', 'वैज्ञानिक और व्यावहारिक अवलोकन:')}</span>
              <p className="italic">"{t(selectedProduct.overviewEN, selectedProduct.overviewHI)}"</p>
            </div>
          </div>

          {/* HS Details Box */}
          <div className="p-4 bg-blue-50/40 border border-blue-150 rounded-lg space-y-1.5">
            <h4 className="text-xs font-bold text-blue-900 flex items-center gap-1.5">
              <Search className="w-4 h-4" /> {t('Harmonized System (HS) Details', 'हार्मोनाइज्ड सिस्टम (HS) विवरण')}
            </h4>
            <div className="text-xs text-slate-600 leading-relaxed font-sans">
              <p className="font-semibold text-slate-800"><span className="text-blue-700">{t('Applicable Range:', 'लागू सीमा:')}</span> HSN {selectedProduct.hsCode}</p>
              <p className="mt-1">{t(selectedProduct.hsnMeaningEN, selectedProduct.hsnMeaningHI)}</p>
            </div>
          </div>

          {/* Opportunities and Packing Guidance */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="space-y-3 bg-[#fafafa] p-4 rounded-lg border border-slate-200">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                <Package className="w-4 h-4 text-[#1d4ed8]" /> {t('Mandatory Packaging Requirements', 'अनिवार्य पैकेजिंग आवश्यकताएं')}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t(selectedProduct.packingEN, selectedProduct.packingHI)}
              </p>
            </div>

            <div className="space-y-3 bg-[#fafafa] p-4 rounded-lg border border-slate-200">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                <BarChart className="w-4 h-4 text-emerald-600" /> {t('Export Opportunities', 'निर्यात के अवसर')}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t(selectedProduct.oppsEN, selectedProduct.oppsHI)}
              </p>
            </div>
          </div>
        </div>

        {/* Right column lists */}
        <div className="lg:col-span-4 bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm space-y-5">
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <FileCheck className="w-4 h-4 text-[#1d4ed8]" /> {t('Specific Mandatory Export Documents', 'विशिष्ट अनिवार्य निर्यात दस्तावेज')}
            </h4>
            <ul className="space-y-2 bg-slate-50 p-3.5 rounded-lg border border-slate-150">
              {(language === 'hi' ? selectedProduct.docsHI : selectedProduct.docsEN).map((doc, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                  <span className="text-emerald-600 font-bold font-mono">✓</span>
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <LayoutGrid className="w-4 h-4 text-violet-600" /> {t('Major Demanding Countries', 'प्रमुख मांग वाले देश')}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {(language === 'hi' ? selectedProduct.importersHI : selectedProduct.importersEN).map((country, idx) => (
                <span key={idx} className="text-xs px-2.5 py-1 rounded-sm bg-slate-100 border border-slate-200 font-medium text-slate-700">
                  {country}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
