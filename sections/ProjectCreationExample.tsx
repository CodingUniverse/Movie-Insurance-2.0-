
import React, { useState } from 'react';
import { 
  ChevronLeft, 
  MoreHorizontal, 
  Search, 
  Info, 
  Headphones, 
  Check, 
  ChevronRight,
  Minus,
  Plus,
  AlertCircle
} from 'lucide-react';
import Button from '../components/Button';

interface Props {
  isDarkMode: boolean;
}

const ProjectCreationExample: React.FC<Props> = ({ isDarkMode }) => {
  const [selectedPlan, setSelectedPlan] = useState('B');
  const [focusField, setFocusField] = useState<string | null>(null);
  const [days, setDays] = useState(1);
  const [people, setPeople] = useState(10);

  const plans = [
    { id: 'A', name: '方案A', death: '10万元', medical: '1万元', subsidy: '150元', maxDays: '90天', price: '2' },
    { id: 'B', name: '方案B', death: '20万元', medical: '2万元', subsidy: '300元', maxDays: '90天', price: '4' },
    { id: 'C', name: '方案C', death: '30万元', medical: '3万元', subsidy: '450元', maxDays: '90天', price: '6' },
    { id: 'D', name: '方案D', death: '50万元', medical: '5万元', subsidy: '750元', maxDays: '90天', price: '10' },
    { id: 'E', name: '方案E', death: '100万元', medical: '10万元', subsidy: '1500元', maxDays: '90天', price: '20' },
  ];

  // Global responsive label width
  const labelWidth = "w-[90px] md:w-[105px]";

  return (
    <div className={`-mx-4 min-h-screen pb-60 transition-colors ${isDarkMode ? 'bg-slate-900' : 'bg-[#F5F7FA]'}`}>
      {/* 1. WeChat Style Header */}
      <div className={`px-4 py-3 flex items-center justify-between sticky top-0 z-50 transition-colors ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-b border-[#E5E7EB]'}`}>
        <ChevronLeft size={24} className={isDarkMode ? 'text-white' : 'text-[#111827]'} />
        <h2 className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-[#111827]'}`}>创建项目</h2>
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

      {/* 2. Product Info Header - No Wrap Refinement */}
      <div className="p-4 space-y-4">
        <div className="flex justify-between items-center px-1">
            <h3 className={`text-xl font-extrabold ${isDarkMode ? 'text-white' : 'text-[#111827]'}`}>欢迎使用拍片保</h3>
            <button className="text-[#0066FF] text-sm font-bold underline decoration-2 underline-offset-4">投保记录查询</button>
        </div>
        
        <div className={`p-5 rounded-[2rem] space-y-3 border transition-all ${isDarkMode ? 'bg-slate-800 border-slate-700 shadow-none' : 'bg-white border-[#E5E7EB] shadow-sm'}`}>
            <div className="flex items-center gap-2 whitespace-nowrap overflow-x-auto no-scrollbar">
                <span className="text-sm font-bold text-[#9CA3AF] shrink-0">承保产品：</span>
                <span className={`text-sm font-bold shrink-0 ${isDarkMode ? 'text-blue-100' : 'text-[#111827]'}`}>“演艺保”演出意外伤害保险 拍片保专用版</span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap overflow-x-auto no-scrollbar">
                <span className="text-sm font-bold text-[#9CA3AF] shrink-0">承保单位：</span>
                <span className={`text-sm font-bold shrink-0 ${isDarkMode ? 'text-blue-100' : 'text-[#111827]'}`}>中国人民财产保险股份有限公司 PICC</span>
            </div>
        </div>
      </div>

      {/* 3. Plan Selection Matrix - Horizontal Scroll */}
      <div className="p-4 space-y-3">
        <h4 className={`font-black text-lg px-1 ${isDarkMode ? 'text-white' : 'text-[#111827]'}`}>方案选择</h4>
        <div className={`rounded-[2rem] overflow-hidden border transition-all ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-[#E5E7EB] shadow-sm'}`}>
          <div className="overflow-x-auto no-scrollbar">
            <table className="w-full text-center border-collapse table-fixed">
              <thead className="text-[11px] text-[#9CA3AF] font-black uppercase tracking-wider">
                <tr className={`border-b ${isDarkMode ? 'border-slate-700' : 'border-[#E5E7EB]'}`}>
                  <td className={`p-4 text-left w-[100px] shrink-0 sticky left-0 z-10 backdrop-blur-md ${isDarkMode ? 'bg-slate-800/90' : 'bg-gray-50/90'}`}>维度</td>
                  {plans.map(p => (
                    <td 
                        key={p.id} 
                        onClick={() => setSelectedPlan(p.id)}
                        className={`p-4 cursor-pointer text-xs font-black relative min-w-[100px] transition-colors ${selectedPlan === p.id ? 'text-[#0066FF] bg-[#F0F7FF]' : ''}`}
                    >
                        {p.name}
                        {selectedPlan === p.id && (
                            <div className="absolute top-0 right-0 w-7 h-7 bg-[#0066FF] rounded-bl-xl flex items-center justify-center">
                                <Check size={14} className="text-white" strokeWidth={4} />
                            </div>
                        )}
                    </td>
                  ))}
                </tr>
              </thead>
              <tbody className="text-[13px] font-bold">
                {[
                  { label: '意外身故伤残', key: 'death' },
                  { label: '意外医疗', key: 'medical' },
                  { label: '每日住院津贴', key: 'subsidy' },
                  { label: '赔付最高天数', key: 'maxDays' },
                  { label: '单日保费(元)', key: 'price', extraClass: 'text-2xl font-black' }
                ].map((row, rowIdx) => (
                  <tr key={row.key} className={`border-b last:border-none ${isDarkMode ? 'border-slate-700' : 'border-[#E5E7EB]'}`}>
                    <td className={`p-4 text-left text-[#9CA3AF] font-medium sticky left-0 z-10 backdrop-blur-md ${isDarkMode ? 'bg-slate-800/90' : 'bg-gray-50/90'}`}>
                      {row.label}
                    </td>
                    {plans.map(p => (
                      <td 
                        key={p.id} 
                        onClick={() => setSelectedPlan(p.id)} 
                        className={`p-4 cursor-pointer transition-colors ${selectedPlan === p.id ? 'text-[#0066FF] bg-[#F0F7FF]' : (isDarkMode ? 'text-slate-300' : 'text-[#4B5563]')} ${row.extraClass || ''}`}
                        style={row.key === 'price' ? { fontFamily: 'DIN Alternate, sans-serif' } : {}}
                      >
                        {(p as any)[row.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={`p-4 ${isDarkMode ? 'bg-slate-900/50' : 'bg-gray-50/50'}`}>
             <p className="text-[11px] text-[#9CA3AF] leading-relaxed">
                <span className="text-[#FF3B30] font-bold">*</span> 实际结算按参保时选定的方案为准，您可以为不同工种配置 <span className="text-[#0066FF] font-bold underline">多个差异化方案</span>。
             </p>
          </div>
        </div>
      </div>

      {/* 4. Policyholder Info - Mobile Optimized Forms */}
      <div className="p-4 space-y-3">
        <div className="flex justify-between items-center px-1">
            <h3 className={`text-lg font-black ${isDarkMode ? 'text-white' : 'text-[#111827]'}`}>投保方信息</h3>
            <button className="bg-[#0066FF] text-white text-[10px] px-4 py-1.5 rounded-full font-bold shadow-lg shadow-[#0066FF]/30">历史投保方</button>
        </div>

        <div className={`rounded-[2rem] border overflow-hidden ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-[#E5E7EB] shadow-sm'}`}>
            {/* Field: Company Name - Reduced to h-[48px] */}
            <div className={`relative flex items-center h-[48px] px-5 transition-colors ${focusField === 'comp' ? 'bg-[#F0F7FF]' : ''}`}>
                <span className={`${labelWidth} text-base font-bold shrink-0 mr-2 truncate ${isDarkMode ? 'text-white' : 'text-[#111827]'}`}>
                  <span className="text-[#FF3B30]">*</span> 公司名称
                </span>
                <input 
                    type="text" 
                    placeholder="必填，请输入名称" 
                    className={`flex-1 min-w-0 bg-transparent border-none outline-none text-base font-bold placeholder-[#D1D5DB] ${isDarkMode ? 'text-white' : 'text-[#111827]'}`} 
                    onFocus={() => setFocusField('comp')}
                    onBlur={() => setFocusField(null)}
                />
                <Search size={18} className="text-[#0066FF] shrink-0 ml-2" />
                <div className={`absolute bottom-0 left-0 md:left-[105px] right-0 transition-all ${focusField === 'comp' ? 'h-[2px] bg-[#0066FF]' : 'h-[1px] bg-[#E5E7EB]'}`}></div>
            </div>

            {/* Field: ID Type - Reduced to h-[48px] */}
            <div className={`relative flex items-center h-[48px] px-5 bg-transparent`}>
                <span className={`${labelWidth} text-base font-bold shrink-0 mr-2 truncate ${isDarkMode ? 'text-white' : 'text-[#111827]'}`}>
                  <span className="text-[#FF3B30]">*</span> 证件类型
                </span>
                <span className={`flex-1 min-w-0 text-base font-bold text-right truncate ${isDarkMode ? 'text-slate-300' : 'text-[#111827]'}`}>
                  统一社会信用代码
                </span>
                <div className="absolute bottom-0 left-0 md:left-[105px] right-0 h-[1px] bg-[#E5E7EB]"></div>
            </div>

            {/* Field: ID Code - Reduced to h-[48px] */}
            <div className={`relative flex items-center h-[48px] px-5 transition-colors ${focusField === 'code' ? 'bg-[#F0F7FF]' : ''}`}>
                <span className={`${labelWidth} text-base font-bold shrink-0 mr-2 truncate ${isDarkMode ? 'text-white' : 'text-[#111827]'}`}>
                  <span className="text-[#FF3B30]">*</span> 证件号码
                </span>
                <input 
                    type="idcard" 
                    placeholder="必填，请输入证件号" 
                    className={`flex-1 min-w-0 bg-transparent border-none outline-none text-base font-bold placeholder-[#D1D5DB] font-mono ${isDarkMode ? 'text-white' : 'text-[#111827]'}`} 
                    onFocus={() => setFocusField('code')}
                    onBlur={() => setFocusField(null)}
                />
                <div className={`absolute bottom-0 left-0 md:left-[105px] right-0 transition-all ${focusField === 'code' ? 'h-[2px] bg-[#0066FF]' : 'h-[1px] bg-[#E5E7EB]'}`}></div>
            </div>

            <div className={`p-5 flex gap-4 items-start ${isDarkMode ? 'bg-slate-900/50' : 'bg-[#F5F7FA]'}`}>
                <div className="w-5 h-5 bg-slate-400 text-white rounded-full flex items-center justify-center shrink-0">
                    <Info size={12} strokeWidth={4} />
                </div>
                <p className="text-[12px] text-[#9CA3AF] leading-relaxed font-bold">
                    请务必核实公司名称与代码是否一致，<br/>
                    <span className="text-[#FF3B30]">填写错误将导致发票无法报销。</span>
                </p>
            </div>
        </div>
      </div>

      {/* 5. Policy Info */}
      <div className="p-4 space-y-3">
        <h3 className={`text-lg font-black px-1 ${isDarkMode ? 'text-white' : 'text-[#111827]'}`}>保单基本信息</h3>
        <div className={`rounded-[2rem] border overflow-hidden ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-[#E5E7EB] shadow-sm'}`}>
            {/* Field: Project Name - Reduced to h-[48px] */}
            <div className={`relative flex items-center h-[48px] px-5 transition-colors ${focusField === 'proj' ? 'bg-[#F0F7FF]' : ''}`}>
                <span className={`${labelWidth} text-base font-bold shrink-0 mr-2 truncate ${isDarkMode ? 'text-white' : 'text-[#111827]'}`}>
                  <span className="text-[#FF3B30]">*</span> 项目名称
                </span>
                <input 
                    type="text" 
                    placeholder="请输入项目名称" 
                    className={`flex-1 min-w-0 bg-transparent border-none outline-none text-base font-bold placeholder-[#D1D5DB] ${isDarkMode ? 'text-white' : 'text-[#111827]'}`} 
                    onFocus={() => setFocusField('proj')}
                    onBlur={() => setFocusField(null)}
                />
                <div className={`absolute bottom-0 left-0 md:left-[105px] right-0 transition-all ${focusField === 'proj' ? 'h-[2px] bg-[#0066FF]' : 'h-[1px] bg-[#E5E7EB]'}`}></div>
            </div>

            {/* Field: Start Date - Reduced to h-[48px] */}
            <div className="relative flex items-center h-[48px] px-5 bg-transparent">
                <span className={`${labelWidth} text-base font-bold shrink-0 mr-2 truncate ${isDarkMode ? 'text-white' : 'text-[#111827]'}`}>
                  <span className="text-[#FF3B30]">*</span> 生效日期
                </span>
                <span className={`flex-1 min-w-0 text-base font-bold text-right truncate ${isDarkMode ? 'text-slate-300' : 'text-[#111827]'}`}>
                  2025-12-26 (次日开始)
                </span>
                <ChevronRight size={18} className="text-[#D1D5DB] ml-1 shrink-0" />
                <div className="absolute bottom-0 left-0 md:left-[105px] right-0 h-[1px] bg-[#E5E7EB]"></div>
            </div>

            {/* Field: Days Stepper - Reduced to h-[52px] */}
            <div className="relative flex items-center h-[52px] px-5 bg-transparent">
                <span className={`${labelWidth} text-base font-bold shrink-0 mr-2 truncate ${isDarkMode ? 'text-white' : 'text-[#111827]'}`}>
                  <span className="text-[#FF3B30]">*</span> 购买天数
                </span>
                <div className="flex-1 min-w-0 flex justify-end">
                    <div className={`flex items-center rounded-xl overflow-hidden h-9 border ${isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-[#F3F4F6] border-[#E5E7EB]'}`}>
                        <button onClick={() => setDays(Math.max(1, days-1))} className="w-8 flex items-center justify-center text-[#4B5563] active:bg-gray-200">
                            <Minus size={16} strokeWidth={3} />
                        </button>
                        <input className={`w-9 text-center bg-transparent font-black text-sm outline-none ${isDarkMode ? 'text-white' : 'text-[#111827]'}`} value={days} readOnly />
                        <button onClick={() => setDays(days+1)} className="w-8 flex items-center justify-center text-[#0066FF] active:bg-gray-200">
                            <Plus size={16} strokeWidth={3} />
                        </button>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 md:left-[105px] right-0 h-[1px] bg-[#E5E7EB]"></div>
            </div>

            {/* Field: People Stepper - Reduced to h-[52px] */}
            <div className="relative flex items-center h-[52px] px-5 bg-transparent">
                <span className={`${labelWidth} text-base font-bold shrink-0 mr-2 truncate ${isDarkMode ? 'text-white' : 'text-[#111827]'}`}>
                  <span className="text-[#FF3B30]">*</span> 预估人数
                </span>
                <div className="flex-1 min-w-0 flex justify-end">
                    <div className={`flex items-center rounded-xl overflow-hidden h-9 border ${isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-[#F3F4F6] border-[#E5E7EB]'}`}>
                        <button onClick={() => setPeople(Math.max(1, people-10))} className="w-8 flex items-center justify-center text-[#4B5563] active:bg-gray-200">
                            <Minus size={16} strokeWidth={3} />
                        </button>
                        <input className={`w-10 text-center bg-transparent font-black text-sm outline-none ${isDarkMode ? 'text-white' : 'text-[#111827]'}`} value={people} readOnly />
                        <button onClick={() => setPeople(people+10)} className="w-8 flex items-center justify-center text-[#0066FF] active:bg-gray-200">
                            <Plus size={16} strokeWidth={3} />
                        </button>
                    </div>
                </div>
            </div>

            <div className={`p-5 flex gap-4 items-start ${isDarkMode ? 'bg-slate-900/50' : 'bg-[#F5F7FA]'}`}>
                <AlertCircle size={20} className="text-[#9CA3AF] shrink-0" />
                <div className="space-y-1">
                    <p className="text-[12px] text-[#9CA3AF] leading-relaxed font-bold">
                        实际保费 = 单价 × 人数 × 天数。<br/>
                        <span className="text-[#FF3B30]">未到岗人员保费支持全额退还。</span>
                    </p>
                </div>
            </div>
        </div>
      </div>

      {/* 6. Sticky Bottom Bar v2.0 */}
      <div className={`fixed bottom-[72px] left-0 right-0 z-[60] p-4 pb-6 flex items-center justify-between border-t transition-all ${isDarkMode ? 'bg-slate-900 border-slate-700 shadow-none' : 'bg-white border-[#E5E7EB] shadow-[0_-12px_30px_rgba(0,0,0,0.1)]'}`}>
        <div className="flex items-center gap-3 min-w-0">
            <div className="w-11 h-11 border-2 border-[#0066FF] rounded-full flex items-center justify-center text-[#0066FF] bg-[#F0F7FF] shrink-0">
                <Headphones size={22} />
            </div>
            <div className="flex flex-col min-w-0">
                <span className="text-[9px] font-black text-[#9CA3AF] uppercase truncate tracking-tight">预计 {people} 人 x {days} 天</span>
                <div className="flex items-baseline gap-1 truncate">
                    <span className={`text-[13px] font-black shrink-0 ${isDarkMode ? 'text-white' : 'text-[#111827]'}`}>应付：</span>
                    <span className="text-xl font-black text-[#FF3B30]" style={{ fontFamily: 'DIN Alternate, sans-serif' }}>
                      {(people * days * (parseFloat(plans.find(p => p.id === selectedPlan)?.price || '2'))).toFixed(2)}
                    </span>
                    <span className={`text-[10px] font-bold shrink-0 ${isDarkMode ? 'text-slate-400' : 'text-[#111827]'}`}>元</span>
                </div>
            </div>
        </div>
        <Button variant="primary" className="px-6 h-[56px] shadow-[#0066FF]/30 text-base rounded-2xl shrink-0">确认并支付</Button>
      </div>
    </div>
  );
};

export default ProjectCreationExample;
