
import React from 'react';
import { Droplet, ShieldCheck, Search, Zap, CheckCircle2 } from 'lucide-react';

interface Props {
  isDarkMode: boolean;
}

const ColorSpecification: React.FC<Props> = ({ isDarkMode }) => {
  const brandColors = [
    { name: 'Brand Primary', hex: '#0066FF', desc: 'Electric Blue - 高亮蓝', usage: '核心主色、主按钮、选中态、Logo' },
    { name: 'Brand Surface', hex: '#F0F7FF', desc: 'Soft Sky - 极淡蓝', usage: '次级按钮底色、卡片背景强调' },
    { name: 'Brand Dark', hex: '#0052CC', desc: 'Deep Electric - 深电蓝', usage: 'Hover / Pressed 态' },
  ];

  const functionalColors = [
    { name: 'Alert / Price', hex: '#FF3B30', desc: 'Warning Red - 价格红', usage: '金额突出、危险阻断、报错' },
    { name: 'Success', hex: '#00C853', desc: 'Safety Green - 承保绿', usage: '保障生效、审核通过、正确反馈' },
    { name: 'Warning', hex: '#FAAD14', desc: 'Action Gold - 警示黄', usage: '待补材、异常数据、离线提示' },
  ];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-32">
      <div className="text-center px-4">
        <h2 className="text-3xl font-black mb-2 tracking-tight text-[#111827]">视觉色彩规范 v2.0</h2>
        <p className="text-[#4B5563] text-sm italic font-medium">“高饱和、高穿透、符合剧组环境的电感美学”</p>
      </div>

      <section className="space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-[#0066FF] pl-4">
          <h3 className="font-bold text-lg text-[#111827]">1. 核心品牌色 (Primary Palette)</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {brandColors.map((color) => (
            <div key={color.name} className={`flex items-center p-6 rounded-[2rem] border transition-all ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-[#E5E7EB] shadow-sm'}`}>
              <div className="w-20 h-20 rounded-2xl shrink-0 shadow-[0_8px_20px_rgba(0,102,255,0.25)]" style={{ backgroundColor: color.hex }}></div>
              <div className="ml-6 flex-1">
                <div className="flex justify-between items-baseline">
                  <h4 className="font-black text-sm text-[#111827]">{color.name}</h4>
                  <code className="text-[10px] font-mono font-bold text-[#0066FF] uppercase">{color.hex}</code>
                </div>
                <p className="text-xs text-[#4B5563] mt-2 font-medium">{color.desc}</p>
                <div className="mt-3">
                    <span className="text-[9px] px-2 py-0.5 bg-[#F0F7FF] text-[#0066FF] font-black rounded uppercase tracking-widest">{color.usage}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-[#FF3B30] pl-4">
          <h3 className="font-bold text-lg text-[#111827]">2. 功能与反馈色 (Feedback)</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {functionalColors.map((color) => (
            <div key={color.name} className="p-6 bg-white rounded-[2rem] border border-[#E5E7EB] text-center space-y-3 shadow-sm">
              <div className="w-full h-12 rounded-xl shadow-inner" style={{ backgroundColor: color.hex }}></div>
              <div>
                <h4 className="font-black text-[11px] text-[#111827] uppercase tracking-widest">{color.name}</h4>
                <p className="text-[10px] text-[#4B5563] font-medium mt-1">{color.usage}</p>
                <code className="text-[9px] font-mono font-bold text-slate-300 block mt-2">{color.hex}</code>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className={`p-10 rounded-[2.5rem] bg-[#111827] text-white shadow-2xl relative overflow-hidden`}>
            <div className="relative z-10 space-y-8">
                <div className="flex items-center gap-3">
                    <Zap className="text-[#0066FF]" size={28} />
                    <h3 className="text-xl font-black tracking-tight">视觉平衡原则 (Contrast Ratio)</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                        <div className="h-14 bg-[#0066FF] text-white flex items-center justify-center font-black rounded-2xl">WHITE ON BLUE (Pass)</div>
                        <p className="text-[11px] text-blue-100/60 leading-relaxed font-bold">
                          在户外强光下，反白文字必须使用 Semibold 以上字重，以抵消视觉光晕导致的文字变细。
                        </p>
                    </div>
                    <div className="space-y-3">
                        <div className="h-14 bg-white text-[#111827] border-2 border-[#111827] flex items-center justify-center font-black rounded-2xl">BLACK ON WHITE (Pass)</div>
                        <p className="text-[11px] text-blue-100/60 leading-relaxed font-bold">
                          中性文字避免使用纯黑 (#000)，推荐使用含有蓝/灰调的深灰 (#111827)，使画面层次更高级。
                        </p>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#0066FF]/10 blur-[120px] rounded-full"></div>
        </div>
      </section>

      <footer className="text-center py-6 border-t border-dashed border-[#E5E7EB]">
        <p className="text-[10px] text-[#9CA3AF] font-bold uppercase tracking-[0.2em]">
          Cinema Professional Color System v2.0
        </p>
      </footer>
    </div>
  );
};

export default ColorSpecification;
