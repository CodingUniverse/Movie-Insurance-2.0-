
import React, { useState } from 'react';
import { 
  ChevronLeft, 
  MoreHorizontal, 
  Search, 
  Info, 
  CheckCircle2, 
  ChevronRight,
  ClipboardList,
  Mail,
  Zap,
  ShieldCheck,
  FileText
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
    { label: '猝死', value: '10万' },
  ];

  return (
    <div className={`-mx-4 min-h-screen pb-40 transition-colors ${isDarkMode ? 'bg-slate-900' : 'bg-[#F5F7FA]'}`}>
      {/* 1. WeChat Header */}
      <div className={`px-4 py-3 flex items-center justify-between sticky top-0 z-50 transition-colors ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-b border-[#E5E7EB]'}`}>
        <ChevronLeft size={24} className={isDarkMode ? 'text-white' : 'text-[#111827]'} />
        <h2 className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-[#111827]'}`}>投保</h2>
        <div className="flex items-center gap-2">
           <div className={`flex items-center rounded-full px-3 py-1 gap-3 ${isDarkMode ? 'bg-slate-700' : 'bg-[#F3F4F6]'}`}>
              <MoreHorizontal size={20} className={isDarkMode ? 'text-white' : 'text-[#111827]'} />
              <div className="w-[1px] h-4 bg-gray-300"></div>
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${isDarkMode ? 'border-white' : 'border-[#111827]'}`}>
                 <div className={`w-1.5 h-1.5 rounded-full ${isDarkMode ? 'bg-white' : 'bg-[#111827]'}`}></div>
              </div>
           </div>
        </div>
      </div>

      {/* 2. Product Name Banner */}
      <div className={`p-4 transition-colors ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
        <div className="flex justify-between items-center px-1">
          <h3 className={`text-base font-bold ${isDarkMode ? 'text-blue-100' : 'text-[#4B5563]'}`}>文娱工作人员意外险(标准版)</h3>
          <span className="text-[#FAAD14] font-black text-sm">方案A</span>
        </div>
      </div>

      {/* 3. Coverage & Rates Grid */}
      <div className={`mt-2 flex transition-colors ${isDarkMode ? 'bg-slate-800' : 'bg-white border-t border-b border-gray-100'}`}>
        {/* Left: Plan */}
        <div className="w-1/2 p-6 border-r border-gray-100">
          <h4 className="text-sm font-black text-[#111827] mb-4 flex items-center gap-2">
            <ShieldCheck size={16} className="text-[#0066FF]" /> 保险方案
          </h4>
          <div className="space-y-4">
            {planDetails.map(item => (
              <div key={item.label} className="flex justify-between text-[13px] font-medium">
                <span className="text-[#9CA3AF]">{item.label}</span>
                <span className="text-[#111827] font-black" style={{ fontFamily: 'DIN Alternate' }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Right: Rates */}
        <div className="w-1/2 p-6">
          <h4 className="text-sm font-black text-[#111827] mb-4 flex items-center gap-2">
            <ClipboardList size={16} className="text-[#0066FF]" /> 保险费率
          </h4>
          <div className="space-y-2">
            {rates.map(rate => (
              <div key={rate.period} className="flex justify-between text-[13px]">
                <span className="text-[#9CA3AF] font-medium">{rate.period}</span>
                <span className="text-[#111827] font-black" style={{ fontFamily: 'DIN Alternate' }}>{rate.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Notice Banner */}
      <div className="p-3 bg-[#FFF7E6] flex items-center gap-2 px-6">
        <Info size={14} className="text-[#FAAD14] shrink-0" />
        <p className="text-[11px] text-[#FAAD14] font-bold">个人投保发票仅开给个人，若需要公司发票请用公司投保</p>
      </div>

      {/* 5. Tabs */}
      <div className={`flex bg-white transition-colors border-b ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'border-gray-100'}`}>
        {['企业', '个人'].map((tab, idx) => (
          <button
            key={tab}
            onClick={() => setActiveTab(idx === 0 ? 'business' : 'individual')}
            className={`flex-1 py-4 text-sm font-black relative ${
              (activeTab === 'business' && idx === 0) || (activeTab === 'individual' && idx === 1)
                ? 'text-[#111827]'
                : 'text-[#9CA3AF]'
            }`}
          >
            {tab}
            {((activeTab === 'business' && idx === 0) || (activeTab === 'individual' && idx === 1)) && (
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[3px] bg-[#0066FF] rounded-full"></div>
            )}
          </button>
        ))}
      </div>

      {/* 6. Form Sections */}
      <div className="space-y-2 mt-2">
        {/* Applicant Info */}
        <div className={`p-4 py-2 transition-colors ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
            <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-black text-[#111827]">投保人信息</h4>
                <button className="bg-[#0066FF] text-white text-[11px] px-4 py-1.5 rounded-full font-black">搜索公司</button>
            </div>
            <div className="space-y-4">
                {[
                  { label: '项目名称', value: '那咋', required: true },
                  { label: '公司名称', placeholder: '请填写公司名称', required: true },
                  { label: '统一代码', placeholder: '请填写统一代码', required: true },
                ].map(field => (
                  <div key={field.label} className="flex items-center py-2 border-b border-gray-50 last:border-none">
                    <span className="w-24 text-sm font-medium text-[#4B5563]">
                      {field.required && <span className="text-[#FF3B30] mr-0.5">*</span>}{field.label}
                    </span>
                    <input 
                        type="text" 
                        defaultValue={field.value} 
                        placeholder={field.placeholder}
                        className="flex-1 text-sm font-bold text-[#111827] text-right bg-transparent outline-none placeholder-[#D1D5DB]" 
                    />
                  </div>
                ))}
            </div>
        </div>

        {/* Contact Info */}
        <div className={`p-4 py-6 transition-colors ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
            <h4 className="text-lg font-black text-[#111827] mb-4">联系人信息</h4>
            <div className="space-y-4">
                {[
                  { label: '姓名', value: 'Chris', required: true },
                  { label: '邮箱', value: 'hhj.1020@163.com', required: true },
                ].map(field => (
                  <div key={field.label} className="flex items-center py-2 border-b border-gray-50 last:border-none">
                    <span className="w-24 text-sm font-medium text-[#4B5563]">
                      {field.required && <span className="text-[#FF3B30] mr-0.5">*</span>}{field.label}
                    </span>
                    <input 
                        type="text" 
                        defaultValue={field.value} 
                        className="flex-1 text-sm font-bold text-[#111827] text-right bg-transparent outline-none" 
                    />
                  </div>
                ))}
            </div>
        </div>
      </div>

      {/* 7. Bottom Sticky Bar */}
      <div className={`fixed bottom-[72px] left-0 right-0 z-[60] flex items-center transition-all ${
        isDarkMode ? 'bg-slate-900 border-t border-slate-700' : 'bg-white border-t border-gray-100 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]'
      }`}>
        <button className="flex flex-col items-center justify-center px-6 py-2 border-r border-gray-50 group active:bg-gray-50">
           <FileText size={20} className="text-[#0066FF] mb-1 group-active:scale-90 transition-transform" />
           <span className="text-[10px] font-black text-[#0066FF]">修改方案</span>
        </button>
        <div className="flex-1 px-6 flex items-baseline justify-center gap-1">
            <span className="text-2xl font-black text-[#FF3B30]" style={{ fontFamily: 'DIN Alternate' }}>8.00</span>
            <span className="text-xs font-bold text-[#4B5563]">元</span>
        </div>
        <button className="w-40 h-[64px] bg-[#0066FF] text-white font-black text-base flex items-center justify-center active:bg-[#0052CC] transition-colors">
            立即投保
        </button>
      </div>

      {/* Spec Footer */}
      <div className="p-8 mt-12 bg-white/50 border-t border-dashed border-[#E5E7EB]">
        <h4 className="font-black text-xs text-[#0066FF] uppercase tracking-[0.2em] mb-4">投保详情页设计规范 (v2.0)</h4>
        <ul className="space-y-3 text-[11px] text-[#4B5563] font-bold leading-relaxed">
            <li className="flex gap-2 items-start">
                <div className="w-1.5 h-1.5 bg-[#0066FF] rounded-full mt-1.5 shrink-0"></div>
                <span>**无分位符数字**：金额 112.00 采用 <span className="text-[#FF3B30] underline">112.00</span>，摒弃千分位逗号，减少财务核对干扰。</span>
            </li>
            <li className="flex gap-2 items-start">
                <div className="w-1.5 h-1.5 bg-[#0066FF] rounded-full mt-1.5 shrink-0"></div>
                <span>**高对比度方案指示**：方案名称 (方案A) 采用高饱和橙色 (#FAAD14)，确保投保重点不被忽视。</span>
            </li>
            <li className="flex gap-2 items-start">
                <div className="w-1.5 h-1.5 bg-[#0066FF] rounded-full mt-1.5 shrink-0"></div>
                <span>**WeChat 原生感**：底部操作栏由 [功能按钮] [价格回显] [主Action] 三段组成，符合微信小程序用户直觉。</span>
            </li>
        </ul>
      </div>

      <footer className="text-center py-6">
        <p className="text-[10px] text-[#9CA3AF] font-bold uppercase tracking-[0.2em]">
          Cinema Insurance Detail Standard v2.0
        </p>
      </footer>
    </div>
  );
};

export default ProjectDetailExample;
