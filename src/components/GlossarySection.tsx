import React, { useState, useMemo } from 'react';
import { glossaryData } from '../data/glossary';
import { BookOpen, Search, Command, RefreshCw } from 'lucide-react';

export function GlossarySection() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedLetter, setSelectedLetter] = useState<string>('All');

  const categories = ['All', 'Trade', 'Logistics', 'Shipping', 'Customs', 'Banking'];

  const alphabet = ['All', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'W'];

  const filteredTerms = useMemo(() => {
    return glossaryData.filter(item => {
      const matchCat = selectedCategory === 'All' || item.category === selectedCategory;
      const matchLetter = selectedLetter === 'All' || item.term.charAt(0).toUpperCase() === selectedLetter;
      const q = searchQuery.toLowerCase();
      const matchSearch = item.term.toLowerCase().includes(q) || item.definition.toLowerCase().includes(q);
      return matchCat && matchLetter && matchSearch;
    });
  }, [searchQuery, selectedCategory, selectedLetter]);

  return (
    <div className="space-y-6 bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm">
      {/* Title */}
      <div className="space-y-1">
        <h2 className="text-xl md:text-2xl font-bold font-display text-slate-900 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-[#1d4ed8]" /> International Trade Glossary &amp; Dictionary
        </h2>
        <p className="text-[11px] text-slate-500 leading-relaxed max-w-2xl">
          Quickly search and master confusing operational terminology used on shipping docks, banks, custom ports, and freight forwarder quote sheets.
        </p>
      </div>

      {/* Inputs block: Search inputs */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center no-print">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
          <input
            id="glossary-search-input"
            type="text"
            placeholder="Search glossary definitions (e.g., Demurrage, LC)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 border border-slate-202 text-slate-800 rounded-[6px] pl-9 pr-4 py-2 text-xs focus:ring-1 focus:ring-blue-500 outline-none transition"
          />
        </div>

        {/* Categories togglers */}
        <div className="flex flex-wrap gap-1 bg-slate-50 border border-slate-150 p-1 rounded-lg shrink-0">
          {categories.map((cat) => (
            <button
              id={`glossary-cat-btn-${cat}`}
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-[6px] text-xs font-semibold cursor-pointer transition ${
                selectedCategory === cat ? 'bg-[#1d4ed8] text-white shadow-xs font-bold' : 'text-slate-650 hover:text-slate-900 hover:bg-[#e2e8f0]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Alphabet Quick select indexes */}
      <div className="flex flex-wrap gap-1 border-b border-t border-slate-100 py-3.5 no-print items-center">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mr-2 block shrink-0">INDEX BY A-Z:</span>
        <div className="flex flex-wrap gap-1">
          {alphabet.map((letter) => (
            <button
              id={`idx-letter-${letter}`}
              key={letter}
              onClick={() => setSelectedLetter(letter)}
              className={`w-7 h-7 rounded-md text-xs font-mono font-bold flex items-center justify-center cursor-pointer transition ${
                selectedLetter === letter
                  ? 'bg-[#1d4ed8] text-white shadow-3xs'
                  : 'bg-slate-50 text-slate-655 hover:bg-slate-100'
              }`}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>

      {/* Grid rendering dictionary cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
        {filteredTerms.length > 0 ? (
          filteredTerms.map((term, index) => (
            <div key={index} className="p-5 rounded-2xl bg-slate-50/50 border border-slate-150 hover:border-slate-300 hover:shadow-2xs transition flex flex-col justify-between space-y-4">
              <div className="space-y-1.5">
                <span className="text-[9px] font-mono font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded uppercase">
                  {term.category} Term
                </span>
                <h4 className="font-bold text-slate-800 text-sm font-display pt-1">{term.term}</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">{term.definition}</p>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-300 space-y-2">
            <span className="text-3xl">📘</span>
            <p className="font-bold text-slate-700 text-sm">No Definitions Found</p>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">Try typing another query or reset the alphabet indexes above to All.</p>
          </div>
        )}
      </div>
    </div>
  );
}
