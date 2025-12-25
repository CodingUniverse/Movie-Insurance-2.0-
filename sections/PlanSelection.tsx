
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Check, Crown } from 'lucide-react';
import Button from '../components/Button';

interface Props {
  isDarkMode: boolean;
}

const PlanSelection: React.FC<Props> = ({ isDarkMode }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [expandedPlan, setExpandedPlan] = useState<number | null>(null);

  const plans = [
    { id: 0, name: '经济方案 (50万)', price: 80, tag: '性价比', limit: '50万', recommended: false },
    { id: 1, name: '标准方案 (80万)', price: 120, tag: '剧组首选', limit: '80万', recommended: true },
    { id: 2, name: '尊享方案 (100万)', price: 180, tag: '顶配保障', limit: '100万', recommended: false },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">扁平高对比方案选择</h2>
        <p className="text-slate-500 text-sm italic">“去阴影、强轮廓、高饱和反馈”</p>
      </div>

      {/* 1. Flat Tabs */}
      <div className={`flex p-1 rounded-xl transition-colors ${isDarkMode ? 'bg-slate-800' : 'bg-gray-100'}`}>
        {['雇主险', '意外险'].map((tab, idx) => (
          <button
            key={tab}
            onClick={() => setActiveTab(idx)}
            className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${
              activeTab === idx 
                ? 'bg-[#004E92] text-white' 
                : 'text-slate-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 2. Flat Cards */}
      <div className="space-y-4">
        {plans.map((plan) => (
          <div 
            key={plan.id}
            onClick={() => setSelectedPlan(plan.id)}
            className={`relative rounded-2xl overflow-hidden transition-all duration-200 border-2 ${
              selectedPlan === plan.id 
                ? 'border-[#004E92] bg-white' 
                : isDarkMode ? 'border-slate-700 bg-slate-800' : 'border-gray-200 bg-white'
            }`}
          >
            {/* selection indicator: solid color corner */}
            {selectedPlan === plan.id && (
               <div className="absolute top-0 right-0 w-10 h-10 bg-[#004E92] flex items-center justify-center rounded-bl-2xl">
                  <Check size={20} className="text-white" strokeWidth={3} />
               </div>
            )}

            <div className="p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className={`font-bold text-lg ${selectedPlan === plan.id ? 'text-[#004E92]' : 'text-slate-800'}`}>{plan.name}</h3>
                    {plan.recommended && (
                      <span className="bg-[#FF9500] text-white text-[9px] px-2 py-0.5 rounded font-black uppercase">HOT</span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <span className="bg-gray-100 text-slate-500 text-[9px] px-2 py-0.5 rounded font-bold">猝死扩展</span>
                    <span className="bg-gray-100 text-slate-500 text-[9px] px-2 py-0.5 rounded font-bold">高空扩展</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`font-black text-2xl ${selectedPlan === plan.id ? 'text-[#D32F2F]' : 'text-slate-400'}`}>
                    <span className="text-sm">¥</span>{plan.price}
                  </div>
                  <div className="text-[10px] text-slate-400 font-bold">/人/期</div>
                </div>
              </div>

              <div className={`mt-6 grid grid-cols-2 gap-4 border-t-2 pt-4 ${selectedPlan === plan.id ? 'border-[#004E92]/10' : 'border-gray-50'}`}>
                <div>
                   <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">伤残保额</p>
                   <p className="text-sm font-black text-slate-700">{plan.limit}</p>
                </div>
                <div>
                   <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">医疗补偿</p>
                   <p className="text-sm font-black text-slate-700">8万元</p>
                </div>
              </div>
            </div>

            {/* Flat Accordion Trigger */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setExpandedPlan(expandedPlan === plan.id ? null : plan.id);
              }}
              className={`w-full py-3 flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest border-t-2 ${
                selectedPlan === plan.id ? 'bg-[#004E92] text-white' : 'bg-gray-50 text-slate-400 border-gray-100'
              }`}
            >
              {expandedPlan === plan.id ? 'Hide Details' : 'View Full Benefits'}
              {expandedPlan === plan.id ? <ChevronUp size={12}/> : <ChevronDown size={12}/>}
            </button>
          </div>
        ))}
      </div>

      {/* 3. Flat Footer Bar */}
      <div className={`fixed bottom-0 left-0 right-0 z-40 border-t-2 p-6 flex items-center justify-between transition-all ${
        isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-black'
      }`}>
        <div className="flex flex-col">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Selected Plan Total (128P)</p>
          <div className="flex items-baseline gap-1">
            <span className="text-[#D32F2F] font-black text-3xl tracking-tighter">¥{(plans[selectedPlan].price * 128).toLocaleString()}</span>
          </div>
        </div>
        <Button variant="primary" size="medium" className="px-10 rounded-xl h-[56px] bg-[#004E92]">
          立即投保
        </Button>
      </div>
    </div>
  );
};

export default PlanSelection;
