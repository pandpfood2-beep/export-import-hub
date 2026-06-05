import React, { useState, useMemo } from 'react';
import { faqsData } from '../data/faqs_expanded';
import { HelpCircle, ChevronRight, Search, FileText, CheckCircle, Tag, Layers } from 'lucide-react';

export function FAQCenter() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<number | null>(1); // default expand first FAQ

  const categories = ['All', 'Basics', 'Incoterms', 'Documents', 'Payments', 'Customs', 'Logistics', 'Sourcing', 'Risk & Legal'];

  const categoryIcons: Record<string, string> = {
    'All': '📔',
    'Basics': '🧩',
    'Incoterms': '🚢',
    'Documents': '📄',
    'Payments': '💰',
    'Customs': '🛂',
    'Logistics': '📦',
    'Sourcing': '🔍',
    'Risk & Legal': '⚖️'
  };

  const handleToggle = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filteredFaqs = useMemo(() => {
    return faqsData.filter(item => {
      const matchCat = selectedCategory === 'All' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase();
      const matchSearch = item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="space-y-6 bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm">
      {/* Title */}
      <div className="space-y-1">
        <h2 className="text-xl md:text-2xl font-bold font-display text-slate-900 flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-[#1d4ed8] shrink-0" /> Standard Trade Q&amp;A Archive
        </h2>
        <p className="text-[11px] text-slate-500 leading-relaxed max-w-2xl">
          Search our comprehensive database featuring exactly 505 verified Export-Import FAQs answering key questions on trade legalities, financial instruments, port bookings, customs, and global freight.
        </p>
      </div>

      {/* Dynamic Search Input & Counts */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between no-print">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
          <input
            id="faq-search-input"
            type="text"
            placeholder="Search FAQs (e.g. LC, FOB, customs, certificate)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 border border-slate-202 text-slate-800 rounded-[6px] pl-9 pr-4 py-2 text-xs focus:ring-1 focus:ring-blue-500 outline-none transition"
          />
        </div>
        
        <div className="text-xs text-slate-500 shrink-0 font-mono">
          Showing <span className="font-bold text-slate-900">{filteredFaqs.length}</span> of 505 standard FAQs
        </div>
      </div>

      {/* Categories chips selection */}
      <div className="flex flex-wrap gap-1.5 no-print">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              id={`faq-cat-badge-${cat}`}
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setExpandedId(null);
              }}
              className={`px-3 py-1.5 rounded-[6px] border text-xs font-semibold cursor-pointer transition flex items-center gap-1.5 ${
                isSelected
                  ? 'bg-[#1d4ed8] border-[#1d4ed8] text-white shadow-xs font-bold'
                  : 'bg-slate-50 border-slate-200 text-slate-650 hover:bg-[#e2e8f0]'
              }`}
            >
              <span>{categoryIcons[cat] || '🏷️'}</span>
              <span>{cat}</span>
            </button>
          );
        })}
      </div>

      {/* Accordion List Renders */}
      <div className="space-y-3.5 pt-2">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((item, idx) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition duration-200 overflow-hidden ${
                  isExpanded ? 'bg-slate-50 border-slate-300 shadow-xs' : 'bg-white border-slate-150 hover:border-slate-250'
                }`}
              >
                <button
                  id={`faq-accordion-trigger-${item.id}`}
                  onClick={() => handleToggle(item.id)}
                  className="w-full text-left p-4 md:p-5 flex justify-between items-center gap-4 cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-[10px] font-mono font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md shrink-0 mt-0.5">
                      Q#{item.id}
                    </span>
                    <h4 className="font-bold text-slate-800 text-sm font-display leading-tight">{item.question}</h4>
                  </div>
                  <ChevronRight className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${isExpanded ? 'rotate-95 text-slate-700' : ''}`} />
                </button>
                
                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 border-t border-slate-200 animate-fade-in">
                    <div className="flex flex-wrap gap-1.5 pb-2.5 text-[9px] font-mono font-bold uppercase text-slate-400">
                      <span>Category: {item.category}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans font-normal pt-2 border-t border-slate-100/50">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-305 space-y-2">
            <span className="text-3xl">🔍</span>
            <p className="font-bold text-slate-700 text-sm">No Matching FAQs Found</p>
            <p className="text-xs text-slate-505 max-w-sm mx-auto">Try typing a simplified query like "LC", "FOB", or reset your category badge above.</p>
          </div>
        )}
      </div>
    </div>
  );
}
