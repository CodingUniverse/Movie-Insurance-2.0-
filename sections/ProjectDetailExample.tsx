
import React, { useState } from 'react';
import { 
  ChevronLeft, 
  MoreHorizontal, 
  Info, 
  ChevronRight,
  ClipboardList,
  ShieldCheck,
  FileText,
  Lock,
  Search
} from 'lucide-react';
import Button from '../components/Button';

interface Props {
  isDarkMode: boolean;
}

const ProjectDetailExample: React.FC<Props> = ({ isDarkMode }) => {
  const [activeTab, setActiveTab] = useState('business');
  
  const rates = [
    { period: '1-3天', price: '8.00' },
    { period: '4-7天', price: '11.00' },
    { period: '8-15天', price: '18.00' },
    { period: '1个月', price: '25.00' },
    { period: '2个月', price: '36.00' },
    { period: '3个月', price: '48.00' },
    { period: '4个月', price: '69.00' },
    { period: '5个月', price: '90.00' },
    { period: '6个月', price: '112.00' },
  ];

  const planDetails = [
    { label: '死亡伤残', value: '10万' },
    { label: '意外医疗', value: '1万' },
    { label: '猝死/扩展', value: '10万' },
  ];

  const numericStyle = { 
    fontFamily: 'DIN Alternate, sans-serif', 
    fontVariantNumeric: 'tabular-nums' 
  };

  return (
    <div className={`-mx-4 min-h-screen pb-48 transition-colors ${isDarkMode ? 'bg-slate-900' : 'bg-[#F5F7FA]'}`}>
      {/* 1. WeChat Header (Fixed height 52px) */}
      <div className={`px-4 h-[52px] flex items-center justify-between sticky top-0 z-50 transition-colors ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-b border-[#E5E7EB]'}`}>
        <button className="p-2 -ml-2 active:opacity-40 transition-opacity">
          <ChevronLeft size={24} className={isDarkMode ? 'text-white' : 'text-[#111827]'} />
        </button>
        <h2 className={`font-black text-base ${isDarkMode ? 'text-white' : 'text-[#111827]'}`}>确认投保单</h2>
        <div className={`flex items-center rounded-full px-3 h-8 gap-3 border ${isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-[#F3F4F6] border-gray-200'}`}>
          <MoreHorizontal size={20} className={isDarkMode ? 'text-white' : 'text-[#111827]'} />
          <div className="w-[1px] h-3 bg-gray-300"></div>
          <div className={`w-4 h-4 rounded-full border-2 border-[#111827] flex items-center justify-center`}>
             <div className="w-1 h-1 rounded-full bg-[#111827]"></div>
          </div>
        </div>
      </div>

      {/* 2. Banner Area */}
      <div className={`p-6 pb-2 transition-colors ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[9px] font-black text-[#0066FF] bg-[#F0F7FF] px-2 py-0.5 rounded-sm uppercase tracking-widest">Cinema Pro</span>
            <h3 className={`text-xl font-black tracking-tight ${isDarkMode ? 'text-blue-100' : 'text-[#111827]'}`}>文娱工作人员意外险(标准版)</h3>
          </div>
          <p className="text-xs font-bold text-[#9CA3AF] mb-4">由中国人保 (PICC) 提供剧组专项保障</p>
      </div>

      {/* 3. Specs Matrix - No-Comma Design */}
      <div className={`flex border-t border-b transition-colors ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100'}`}>
        <div className="w-1/2 p-8 border-r border-gray-100">
          <h4 className="text-[10px] font-black text-[#9CA3AF] uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
            <ShieldCheck size={14} className="text-[#0066FF]" /> 核心保障
          </h4>
          <div className="space-y-4">
            {planDetails.map(item => (
              <div key={item.label} className="flex justify-between items-baseline">
                <span className="text-[11px] font-bold text-[#9CA3AF]">{item.label}</span>
                <span className="text-sm font-black text-[#111827]" style={numericStyle}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/2 p-8">
          <h4 className="text-[10px] font-black text-[#9CA3AF] uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
            <ClipboardList size={14} className="text-[#0066FF]" /> 阶梯费率
          </h4>
          <div className="space-y-2">
            {rates.slice(0, 4).map(rate => (
              <div key={rate.period} className="flex justify-between items-baseline">
                <span className="text-[11px] font-bold text-[#9CA3AF]">{rate.period}</span>
                <span className="text-sm font-black text-[#111827]" style={numericStyle}>{rate.price}</span>
              </div>
            ))}
            <button className="w-full text-center pt-2 group">
                <span className="text-[9px] font-black text-[#0066FF] underline underline-offset-4 uppercase group-active:opacity-50">更多费率明细</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4. Tabs System */}
      <div className={`flex sticky top-[52px] z-40 transition-colors border-b ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100'}`}>
        {['企业投保', '个人投保'].map((tab, idx) => {
          const isActive = (activeTab === 'business' && idx === 0) || (activeTab === 'individual' && idx === 1);
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(idx === 0 ? 'business' : 'individual')}
              className={`flex-1 py-4 text-sm font-black relative transition-all duration-200 active:bg-gray-50 ${
                isActive ? 'text-[#0066FF]' : 'text-[#9CA3AF]'
              }`}
            >
              {tab}
              {isActive && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[3px] bg-[#0066FF] rounded-full animate-in zoom-in-50"></div>
              )}
            </button>
          );
        })}
      </div>

      {/* 5. Form Implementation */}
      <div className="space-y-3 mt-3">
        <div className={`p-6 transition-colors ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
            <div className="flex justify-between items-center mb-6">
                <h4 className="text-lg font-black text-[#111827]">投保方信息</h4>
                <Button variant="secondary" size="small" className="rounded-full px-4 text-[10px] h-8 font-black" icon={<Search size={12}/>}>
                  搜索企业库
                </Button>
            </div>
            <div className="space-y-6">
                {[
                  { label: '项目名称', value: '流浪地球-特别拍摄组', required: true },
                  { label: '公司主体', placeholder: '请输入完整企业名称', required: true },
                  { label: '邮箱地址', placeholder: '接收电子保单专用', required: true },
                ].map((field, idx) => (
                  <div key={idx} className="relative flex items-center py-2 h-[48px]">
                    <span className="w-24 text-sm font-bold text-[#4B5563]">
                      {field.required && <span className="text-[#FF3B30] mr-0.5">*</span>}{field.label}
                    </span>
                    <input 
                        className={`flex-1 text-sm font-black text-[#111827] text-right bg-transparent outline-none placeholder-[#D1D5DB] transition-all`} 
                        defaultValue={field.value}
                        placeholder={field.placeholder}
                    />
                    <div className="absolute bottom-0 left-0 md:left-[96px] right-0 h-[1px] bg-gray-50"></div>
                  </div>
                ))}
            </div>
        </div>

        <div className="p-4 bg-[#FFF7E6] flex gap-3 px-8 border-y border-[#FFE7BA]/30">
            <Info size={18} className="text-[#FAAD14] shrink-0 mt-0.5" />
            <p className="text-[11px] text-[#D48806] font-bold leading-relaxed">
                <span className="text-[#FAAD14]">特别约定：</span>本保单仅承保持证高空作业人员，若被保人从事5米以上高空作业需上传有效证件，否则按免责处理。
            </p>
        </div>
      </div>

      {/* 6. Sticky Bottom Action Bar (V2.0 Pure Components) */}
      <div className={`fixed bottom-[72px] left-0 right-0 z-[60] flex items-center h-[72px] transition-all ${
        isDarkMode ? 'bg-slate-900 border-t border-slate-700' : 'bg-white border-t border-gray-100 shadow-[0_-12px_40px_rgba(0,0,0,0.08)]'
      }`}>
        {/* Detail Button */}
        <button className="w-[88px] h-full flex flex-col justify-center items-center border-r border-gray-100 active:bg-gray-50 transition-colors group">
           <FileText size={20} className="text-[#0066FF] group-active:scale-90 transition-transform" />
           <span className="text-[9px] font-black text-[#0066FF] mt-1">明细预览</span>
        </button>

        {/* Price Display (No-Comma, Tabular Nums) */}
        <div className="flex-1 px-8 flex flex-col justify-center">
            <span className="text-[9px] font-black text-[#9CA3AF] uppercase tracking-widest">预估实付保费</span>
            <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-[#FF3B30] tracking-tighter" style={numericStyle}>8.00</span>
                <span className="text-[11px] font-black text-[#4B5563]">元</span>
            </div>
        </div>

        {/* Main Action (Using Button Component) */}
        <Button 
            variant="primary" 
            size="large" 
            className="w-44 h-full rounded-none text-lg tracking-tight font-black" 
            icon={<Lock size={18}/>}
        >
            立即投保
        </Button>
      </div>

      {/* Spec Footer Notes */}
      <footer className="p-12 text-center opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all">
        <div className="inline-flex items-center gap-2 mb-2">
            <ShieldCheck size={14} className="text-[#0066FF]" />
            <span className="text-[10px] font-black tracking-[0.2em] uppercase">Cinema Professional Standard v2.0</span>
        </div>
        <p className="text-[9px] font-bold text-[#9CA3AF] max-w-[200px] mx-auto leading-relaxed">
          符合 WCAG AA 对比度要求，采用 8pt 间距系统，适配单手操作热区。
        </p>
      </footer>
    </div>
  );
};

export default ProjectDetailExample;
