import React, { useState, useEffect } from 'react';
import { exportChecklistGroups, docChecklistGroups } from '../data/resources';
import { CheckSquare, Square, RefreshCcw, Printer, ClipboardCheck, ArrowRight } from 'lucide-react';

export function ChecklistsSection() {
  const [activeChecklist, setActiveChecklist] = useState<'export' | 'docs'>('export');
  
  // States holding checked item IDs
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const stored = localStorage.getItem('exim_checklist_state');
      if (stored) {
        setCheckedItems(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Error loading checklist state from local storage', e);
    }
  }, []);

  const toggleItem = (id: string) => {
    const updated = { ...checkedItems, [id]: !checkedItems[id] };
    setCheckedItems(updated);
    try {
      localStorage.setItem('exim_checklist_state', JSON.stringify(updated));
    } catch (e) {
      console.error('Error saving checklist state', e);
    }
  };

  const clearAll = () => {
    setCheckedItems({});
    try {
      localStorage.setItem('exim_checklist_state', '{}');
    } catch (e) {
      console.error('Error cleaning checklists', e);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // Calculations for progress bar
  const currentGroups = activeChecklist === 'export' ? exportChecklistGroups : docChecklistGroups;
  const allCurrentIds = currentGroups.flatMap(grp => grp.items.map(item => item.id));
  const totalItems = allCurrentIds.length;
  const completedCount = allCurrentIds.filter(id => checkedItems[id]).length;
  const progressPercent = totalItems > 0 ? Math.round((completedCount / totalItems) * 100) : 0;

  return (
    <div className="space-y-6 bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm print-area">
      {/* Header row */}
      <div className="flex flex-wrap justify-between items-start gap-4 border-b border-slate-200 pb-5 no-print">
        <div className="space-y-1">
          <h2 className="text-xl md:text-2xl font-bold font-display text-slate-900 flex items-center gap-2">
            <ClipboardCheck className="w-6 h-6 text-[#1d4ed8] shrink-0" /> Interactive Trade Checklists
          </h2>
          <p className="text-[11px] text-slate-500 leading-relaxed max-w-2xl">
            Check off key steps in your export setup or verify standard mandatory documents prior to shipping. Your selections are automatically saved on your web browser.
          </p>
        </div>

        {/* Action button triggers */}
        <div className="flex gap-2 flex-wrap text-xs font-semibold">
          <button
            id="checklist-btn-clear"
            onClick={clearAll}
            className="px-3.5 py-1.5 rounded-[6px] bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200 transition flex items-center gap-1 cursor-pointer"
          >
            <RefreshCcw className="w-3.5 h-3.5" /> Clear All Checks
          </button>
          <button
            id="checklist-btn-print"
            onClick={handlePrint}
            className="px-3.5 py-1.5 rounded-[6px] bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200 transition flex items-center gap-1 cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" /> Print Checklist
          </button>
        </div>
      </div>

      {/* Checklist Toggles and Progress Bar */}
      <div className="space-y-4 no-print">
        <div className="flex gap-1 p-1 bg-slate-50 rounded-lg border border-slate-150 w-fit">
          <button
            id="btn-checklist-export"
            onClick={() => setActiveChecklist('export')}
            className={`px-3 py-1.5 rounded-[6px] text-xs font-semibold cursor-pointer transition ${
              activeChecklist === 'export' ? 'bg-[#1d4ed8] text-white shadow-xs font-bold' : 'text-slate-650 hover:text-slate-900 hover:bg-[#e2e8f0]'
            }`}
          >
            Export Journey Checklist
          </button>
          <button
            id="btn-checklist-docs"
            onClick={() => setActiveChecklist('docs')}
            className={`px-3 py-1.5 rounded-[6px] text-xs font-semibold cursor-pointer transition ${
              activeChecklist === 'docs' ? 'bg-[#1d4ed8] text-white shadow-xs font-bold' : 'text-slate-650 hover:text-slate-900 hover:bg-[#e2e8f0]'
            }`}
          >
            Documentation Checklist
          </button>
        </div>

        {/* Progress gauge bar */}
        <div className="p-4 bg-slate-50 border border-slate-150 rounded-lg space-y-2">
          <div className="flex justify-between items-center text-xs font-sans">
            <span className="font-bold text-slate-705">Journey Progress Completion Rank</span>
            <span className="font-mono font-bold text-[#1d4ed8]">{progressPercent}% ({completedCount} / {totalItems} Done)</span>
          </div>
          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full bg-[#1d4ed8] transition-all duration-300" style={{ width: `${progressPercent}%` }}></div>
          </div>
        </div>
      </div>

      {/* Checked Items list mapped */}
      <div className="space-y-8 pt-2">
        {currentGroups.map((group, gIdx) => (
          <div key={gIdx} className="space-y-4">
            <h3 className="font-bold text-slate-800 text-base font-display border-l-4 border-slate-900 pl-3 uppercase tracking-wide">
              {group.title}
            </h3>
            
            <div className="grid grid-cols-1 gap-3.5">
              {group.items.map((item) => {
                const isChecked = !!checkedItems[item.id];
                return (
                  <button
                    id={`checkbox-row-${item.id}`}
                    key={item.id}
                    onClick={() => toggleItem(item.id)}
                    className={`w-full text-left p-4 rounded-xl border transition flex items-start gap-4 hover:border-slate-350 cursor-pointer ${
                      isChecked
                        ? 'bg-slate-50 border-slate-200 text-slate-500 line-through decoration-slate-300'
                        : 'bg-white border-slate-200 text-slate-800'
                    }`}
                  >
                    <div className="mt-0.5 shrink-0 select-none">
                      {isChecked ? (
                        <CheckSquare className="w-4.5 h-4.5 text-slate-900" />
                      ) : (
                        <Square className="w-4.5 h-4.5 text-slate-400" />
                      )}
                    </div>
                    <span className="text-xs leading-relaxed font-sans">{item.text}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
