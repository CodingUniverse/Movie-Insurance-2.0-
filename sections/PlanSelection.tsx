
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Check, Zap, ShieldCheck, Info } from 'lucide-react';
import Button from '../components/Button';

interface Props {
  isDarkMode: boolean;
}

const PlanSelection: React.FC<Props> = ({ isDarkMode }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [expandedPlan, setExpandedPlan] = useState<number | null>(null);

  const plans = [
    { id: 0, name: '经济方案 (50万)', price: 80, tag: '基础保障', limit: '50万', medical: '5万', subsidy: '100元' },
    { id: 1, name: '标准方案 (80万)', price: 120, tag: '剧组首选', limit: '80万', medical: '8万', subsidy: '150元', isHot: true },
    { id: 2, name: '尊享方案 (100万)', price: 180, tag: '全能顶配', limit: '100万', medical: '10万', subsidy: '200元' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-40">
      <div className="text-center px-4">
        <h2 className="text-3xl font-black mb-2 tracking-tight text-[#111827]">投保方案选择 v2.0</h2>
        <p className="text-[#4B5563] text-sm font-medium italic">“去阴影、强轮廓、高饱和反馈”</p>
      </div>

      {/* 1. Segmented Control Tabs */}
      <div className={`flex p-1.5 rounded-2xl transition-all border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-gray-100 border-[#E5E7EB]'}`}>
        {['雇主责任险', '团体意外险'].map((tab, idx) => (
          <button
            key={tab}
            onClick={() => setActiveTab(idx)}
            className={`flex-1 py-3 text-sm font-black rounded-xl transition-all duration-300 ${
              activeTab === idx 
                ? 'bg-[#0066FF] text-white shadow-lg shadow-[#0066FF]/20' 
                : 'text-[#9CA3AF] hover:text-[#4B5563]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 2. Flat Aesthetic Plan Cards */}
      <div className="space-y-4">
        {plans.map((plan) => (
          <div 
            key={plan.id}
            onClick={() => setSelectedPlan(plan.id)}
            className={`relative rounded-[2rem] overflow-hidden transition-all duration-300 border-2 ${
              selectedPlan === plan.id 
                ? 'border-[#0066FF] bg-white shadow-xl shadow-[#0066FF]/5' 
                : isDarkMode ? 'border-slate-700 bg-slate-800' : 'border-[#E5E7EB] bg-white'
            }`}
          >
            {/* Active Corner Indicator */}
            {selectedPlan === plan.id && (
               <div className="absolute top-0 right-0 w-12 h-12 bg-[#0066FF] flex items-center justify-center rounded-bl-3xl animate-in zoom-in-50">
                  <Check size={24} className="text-white" strokeWidth={4} />
               </div>
            )}

            <div className="p-8">
              <div className="flex justify-between items-start">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <h3 className={`font-black text-xl tracking-tight ${selectedPlan === plan.id ? 'text-[#0066FF]' : 'text-[#111827]'}`}>
                        {plan.name}
                    </h3>
                    {plan.isHot && (
                      <span className="bg-[#FF3B30] text-white text-[9px] px-2 py-0.5 rounded font-black uppercase tracking-widest animate-pulse">Hot</span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <span className="bg-[#F0F7FF] text-[#0066FF] text-[10px] px-3 py-1 rounded-full font-black uppercase tracking-tight border border-[#0066FF]/10">{plan.tag}</span>
                    <span className="bg-[#F3F4F6] text-[#9CA3AF] text-[10px] px-3 py-1 rounded-full font-black uppercase tracking-tight">含猝死扩展</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`font-black text-3xl tracking-tighter ${selectedPlan === plan.id ? 'text-[#FF3B30]' : 'text-[#D1D5DB]'}`} style={{ fontFamily: 'DIN Alternate, sans-serif' }}>
                    <span className="text-sm mr-0.5">¥</span>{plan.price}
                  </div>
                  <div className="text-[10px] text-[#9CA3AF] font-bold uppercase tracking-widest mt-1">/人/期</div>
                </div>
              </div>

              {/* High Contrast Parameter Grid */}
              <div className={`mt-8 grid grid-cols-2 gap-4 border-t-2 pt-6 ${selectedPlan === plan.id ? 'border-[#F0F7FF]' : 'border-gray-50'}`}>
                <div className="space-y-1">
                   <p className="text-[10px] text-[#9CA3AF] font-black uppercase tracking-widest">身故伤残限额</p>
                   <p className={`text-lg font-black ${selectedPlan === plan.id ? 'text-[#111827]' : 'text-[#9CA3AF]'}`}>{plan.limit}</p>
                </div>
                <div className="space-y-1 border-l-2 border-gray-50 pl-4">
                   <p className="text-[10px] text-[#9CA3AF] font-black uppercase tracking-widest">意外医疗补偿</p>
                   <p className={`text-lg font-black ${selectedPlan === plan.id ? 'text-[#111827]' : 'text-[#9CA3AF]'}`}>{plan.medical}</p>
                </div>
              </div>

              {/* Expandable Section */}
              {expandedPlan === plan.id && (
                <div className="mt-6 pt-6 border-t border-dashed border-gray-100 animate-in slide-in-from-top-2 duration-300">
                    <div className="bg-[#F9FAFB] p-5 rounded-2xl space-y-4">
                        <div className="flex justify-between items-center text-[11px] font-bold">
                            <span className="text-[#9CA3AF]">住院津贴标准</span>
                            <span className="text-[#111827]">{plan.subsidy}</span>
                        </div>
                        <div className="flex justify-between items-center text-[11px] font-bold">
                            <span className="text-[#9CA3AF]">免赔额设定</span>
                            <span className="text-[#111827]">100元免赔/100%赔付</span>
                        </div>
                        <div className="flex justify-between items-center text-[11px] font-bold">
                            <span className="text-[#9CA3AF]">高空作业限制</span>
                            <span className="text-[#00C853]">不限高度 (含证)</span>
                        </div>
                    </div>
                </div>
              )}
            </div>

            {/* Smart Accordion Trigger */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setExpandedPlan(expandedPlan === plan.id ? null : plan.id);
              }}
              className={`w-full py-4 flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all ${
                selectedPlan === plan.id 
                    ? 'bg-[#0066FF] text-white' 
                    : 'bg-gray-50 text-[#9CA3AF] hover:bg-gray-100'
              }`}
            >
              {expandedPlan === plan.id ? '隐藏保障明细' : '查看完整保障方案'}
              {expandedPlan === plan.id ? <ChevronUp size={14}/> : <ChevronDown size={14}/>}
            </button>
          </div>
        ))}
      </div>

      {/* 3. Sticky Bottom Bar v2.0 */}
      <div className={`fixed bottom-[72px] left-0 right-0 z-[60] p-6 pb-8 flex items-center justify-between border-t transition-all ${
        isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-black shadow-[0_-12px_40px_rgba(0,0,0,0.1)]'
      }`}>
        <div className="flex flex-col min-w-0">
          <p className="text-[10px] font-black text-[#9CA3AF] uppercase tracking-[0.1em] mb-1">已选：{plans[selectedPlan].name}</p>
          <div className="flex items-baseline gap-1">
            <span className="text-[#FF3B30] font-black text-4xl tracking-tighter" style={{ fontFamily: 'DIN Alternate, sans-serif' }}>
                ¥{(plans[selectedPlan].price * 128).toLocaleString()}
            </span>
            <span className="text-[11px] font-black text-[#111827]">元起 (128人)</span>
          </div>
        </div>
        <Button variant="primary" size="medium" className="px-10 rounded-2xl h-[60px] shadow-[#0066FF]/30 text-lg">
          下一步：导入名单
        </Button>
      </div>

      {/* Info Notice */}
      <div className="p-6 border-2 border-dashed border-[#E5E7EB] rounded-[2rem] flex gap-4 items-start bg-gray-50/50">
          <Info size={24} className="text-[#0066FF] shrink-0" />
          <p className="text-xs text-[#4B5563] leading-relaxed font-medium">
             <strong className="text-[#111827]">特别提示：</strong> 以上方案均已扩展承保24小时猝死、扩展承保5米以上高空作业、扩展承保法律诉讼费用。
          </p>
      </div>

      <footer className="text-center py-6 border-t border-dashed border-[#E5E7EB]">
        <p className="text-[10px] text-[#9CA3AF] font-bold uppercase tracking-[0.2em]">
          Cinema Plan Selection System v2.0
        </p>
      </footer>
    </div>
  );
};

export default PlanSelection;
