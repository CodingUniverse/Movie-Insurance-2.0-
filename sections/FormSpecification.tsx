
import React, { useState } from 'react';
import { 
  AlertCircle, 
  ShieldCheck,
  Camera,
  Search,
  ChevronRight,
  XCircle,
  Zap,
  Smartphone,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import Button from '../components/Button';

interface Props {
  isDarkMode: boolean;
}

const FormSpecification: React.FC<Props> = ({ isDarkMode }) => {
  const [focusId, setFocusId] = useState<string | null>(null);
  const [values, setValues] = useState({
    company: '北京光影时代传媒',
    code: '91110105MA00...',
    phone: '',
    vcode: '',
    amount: '12800'
  });

  const handleFocus = (id: string) => setFocusId(id);
  const handleBlur = () => setFocusId(null);

  // Constants for responsive sizing
  const labelWidth = "w-[90px] md:w-[105px]";

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-32">
      <div className="text-center px-4">
        <h2 className="text-3xl font-extrabold mb-2 tracking-tight text-[#111827]">剧组保表单设计规范 v2.0</h2>
        <p className="text-[#4B5563] text-sm italic">“线性美学，极致反馈，高效输入”</p>
      </div>

      {/* --- 1. Basic Anatomy --- */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-[#0066FF] pl-3">
          <h3 className="font-bold text-lg text-[#111827]">1. 基础构造与交互态 (Anatomy & States)</h3>
        </div>
        
        <div className={`rounded-3xl border overflow-hidden ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-[#E5E7EB] shadow-sm'}`}>
          {/* Active / Focus State */}
          <div className={`relative flex items-center h-[56px] px-4 transition-colors duration-300 ${focusId === 'company' ? 'bg-[#F0F7FF]' : ''}`}>
             <label className={`${labelWidth} shrink-0 text-base font-medium text-[#111827] truncate mr-2`}>公司名称</label>
             <input 
                type="text" 
                className="flex-1 min-w-0 bg-transparent border-none outline-none text-base font-medium text-[#111827] placeholder-[#D1D5DB]"
                value={values.company}
                onFocus={() => handleFocus('company')}
                onBlur={handleBlur}
                onChange={(e) => setValues({...values, company: e.target.value})}
             />
             {focusId === 'company' && <XCircle size={16} className="text-[#9CA3AF] shrink-0 ml-2" />}
             <div className={`absolute bottom-0 left-0 md:left-[105px] right-0 transition-all duration-300 ${focusId === 'company' ? 'h-[2px] bg-[#0066FF]' : 'h-[1px] bg-[#E5E7EB]'}`}></div>
          </div>

          {/* Error State */}
          <div className="relative group">
            <div className={`relative flex items-center h-[56px] px-4 bg-white`}>
               <label className={`${labelWidth} shrink-0 text-base font-medium text-[#FF4D4F] truncate mr-2`}>证件号码</label>
               <input 
                  type="idcard" 
                  className="flex-1 min-w-0 bg-transparent border-none outline-none text-base font-bold text-[#FF4D4F]"
                  value={values.code}
                  readOnly
               />
               <AlertCircle size={18} className="text-[#FF4D4F] shrink-0" />
               <div className="absolute bottom-0 left-0 md:left-[105px] right-0 h-[2px] bg-[#FF4D4F]"></div>
            </div>
            <div className="px-4 py-1.5 bg-[#FFF1F0] md:ml-[105px] animate-in slide-in-from-top-1">
                <p className="text-[11px] font-bold text-[#FF4D4F]">! 格式错误：校验码不匹配</p>
            </div>
          </div>

          {/* Normal State */}
          <div className={`relative flex items-center h-[56px] px-4 bg-white`}>
             <label className={`${labelWidth} shrink-0 text-base font-medium text-[#111827] truncate mr-2`}>联系电话</label>
             <input 
                type="number" 
                className="flex-1 min-w-0 bg-transparent border-none outline-none text-base text-[#111827] placeholder-[#D1D5DB]"
                placeholder="请输入手机号"
             />
             <div className="absolute bottom-0 left-0 md:left-[105px] right-0 h-[1px] bg-[#E5E7EB]"></div>
          </div>

          {/* Disabled State */}
          <div className={`relative flex items-center h-[56px] px-4 bg-gray-50/50`}>
             <label className={`${labelWidth} shrink-0 text-base font-medium text-[#9CA3AF] truncate mr-2`}>投保方案</label>
             <span className="flex-1 min-w-0 text-base text-[#9CA3AF] truncate">标准方案 (50万)</span>
             <div className="absolute bottom-0 left-0 md:left-[105px] right-0 h-[1px] border-b border-dashed border-[#E5E7EB]"></div>
          </div>
        </div>
      </section>

      {/* --- 2. Specialized Variants --- */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-amber-500 pl-3">
          <h3 className="font-bold text-lg text-[#111827]">2. 业务变体规范 (Variants)</h3>
        </div>

        <div className={`rounded-3xl border overflow-hidden ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-[#E5E7EB] shadow-sm'}`}>
          {/* V-Code Field */}
          <div className={`relative flex items-center h-[56px] px-4 transition-colors ${focusId === 'vcode' ? 'bg-[#F0F7FF]' : ''}`}>
             <label className={`${labelWidth} shrink-0 text-base font-medium text-[#111827] truncate mr-2`}>验证码</label>
             <input 
                type="number" 
                className="flex-1 min-w-0 bg-transparent border-none outline-none text-base text-[#111827] placeholder-[#D1D5DB]"
                placeholder="6位数字"
                onFocus={() => handleFocus('vcode')}
                onBlur={handleBlur}
             />
             <div className="h-4 w-[1px] bg-[#E5E7EB] mx-3 shrink-0"></div>
             <button className="text-[#0066FF] text-[13px] md:text-sm font-bold whitespace-nowrap shrink-0">获取验证码</button>
             <div className={`absolute bottom-0 left-0 md:left-[105px] right-0 transition-all ${focusId === 'vcode' ? 'h-[2px] bg-[#0066FF]' : 'h-[1px] bg-[#E5E7EB]'}`}></div>
          </div>

          {/* Currency Input - DIN Font */}
          <div className={`relative flex items-center h-[72px] px-4 bg-white`}>
             <label className={`${labelWidth} shrink-0 text-base font-medium text-[#111827] truncate mr-2`}>总保额</label>
             <div className="flex-1 min-w-0 flex items-baseline gap-1 overflow-hidden">
                <span className="text-xl font-bold text-[#111827] shrink-0">¥</span>
                <input 
                    type="digit" 
                    className="flex-1 min-w-0 bg-transparent border-none outline-none text-2xl md:text-3xl font-black text-[#0066FF] tracking-tighter"
                    value={values.amount}
                    onChange={(e) => setValues({...values, amount: e.target.value})}
                    style={{ fontFamily: 'DIN Alternate, Roboto Condensed, Impact, sans-serif' }}
                />
             </div>
             <div className="absolute bottom-0 left-0 md:left-[105px] right-0 h-[1px] bg-[#E5E7EB]"></div>
          </div>

          {/* Picker / Action Sheet */}
          <div className={`relative flex items-center h-[56px] px-4 bg-white active:bg-gray-50`}>
             <label className={`${labelWidth} shrink-0 text-base font-medium text-[#111827] truncate mr-2`}>工种选择</label>
             <span className="flex-1 min-w-0 text-base text-[#D1D5DB] truncate">请选择工种</span>
             <ChevronRight size={18} className="text-[#D1D5DB] shrink-0" />
             <div className="absolute bottom-0 left-0 md:left-[105px] right-0 h-[1px] bg-[#E5E7EB]"></div>
          </div>

          {/* Date Picker */}
          <div className={`relative flex items-center h-[56px] px-4 bg-white active:bg-gray-50`}>
             <label className={`${labelWidth} shrink-0 text-base font-medium text-[#111827] truncate mr-2`}>起保日期</label>
             <span className="flex-1 min-w-0 text-base font-bold text-[#111827] font-mono truncate">2023-12-25</span>
             <Calendar size={18} className="text-[#0066FF] shrink-0" />
             <div className="absolute bottom-0 left-0 md:left-[105px] right-0 h-[1px] bg-[#E5E7EB]"></div>
          </div>
        </div>
      </section>

      {/* --- 3. Keyboard & Strategy --- */}
      <section className="space-y-6">
        <div className="p-8 bg-[#111827] text-white rounded-[2rem] shadow-xl overflow-hidden relative">
            <div className="relative z-10 space-y-8">
                <div className="flex items-center gap-3">
                    <Smartphone className="text-[#0066FF]" size={24} />
                    <h3 className="text-lg font-bold">键盘与性能优化 (Keyboard UX)</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-[#0066FF] font-bold text-xs uppercase tracking-widest">
                            <Zap size={14} /> 自动避让策略
                        </div>
                        <p className="text-[11px] text-blue-100/60 leading-relaxed font-medium">
                            点击下半屏输入框时，页面自动上滚，确保光标与键盘顶部保持至少 20px 缓冲带。
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-[#0066FF] font-bold text-xs uppercase tracking-widest">
                            <CheckCircle2 size={14} /> 键盘类型映射
                        </div>
                        <p className="text-[11px] text-blue-100/60 leading-relaxed font-medium">
                            手机号 (number)、身份证 (idcard)、金额 (digit)。正确配置 `confirm-type="next"` 实现流畅连填。
                        </p>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0066FF]/10 blur-[100px] rounded-full"></div>
        </div>
      </section>

      <footer className="text-center py-6 border-t border-dashed border-[#E5E7EB]">
        <p className="text-[10px] text-[#9CA3AF] font-bold uppercase tracking-[0.2em]">
          CrewInsure Form System v2.0 (Electric Blue)
        </p>
      </footer>
    </div>
  );
};

export default FormSpecification;
