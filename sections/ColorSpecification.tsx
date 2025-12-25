
import React from 'react';
import { Droplet, Zap, CheckCircle2, AlertCircle, Info, Layout } from 'lucide-react';

interface Props {
  isDarkMode: boolean;
}

const ColorSpecification: React.FC<Props> = ({ isDarkMode }) => {
  const brandColors = [
    { name: 'Brand Primary', hex: '#0066FF', desc: 'Electric Blue - 高亮蓝', usage: '核心主色、主按钮、选中边框、Logo' },
    { name: 'Brand Surface', hex: '#F0F7FF', desc: 'Soft Sky - 极淡蓝', usage: '次级按钮底色、卡片高亮背景、标签' },
    { name: 'Brand Dark', hex: '#0052CC', desc: 'Deep Electric - 深电蓝', usage: 'Hover / Pressed 态交互反馈' },
  ];

  const functionalColors = [
    { name: 'Alert / Price', hex: '#FF3B30', desc: 'Warning Red - 价格红', usage: '保费总额、危险操作、报错提示' },
    { name: 'Success', hex: '#00C853', desc: 'Safety Green - 承保绿', usage: '保障已生效、审核通过、正确钩选' },
    { name: 'Warning', hex: '#FAAD14', desc: 'Action Gold - 警示黄', usage: '待补材、异常数据、弱网状态' },
  ];

  const neutralColors = [
    { name: 'Ink Main', hex: '#111827', desc: 'Deep Ink - 深墨黑', usage: '一级标题、核心正文、深色背景' },
    { name: 'Gray Body', hex: '#4B5563', desc: 'Steel Gray - 钢青灰', usage: '次级描述、辅助文字、表单 Label' },
    { name: 'Border Soft', hex: '#E5E7EB', desc: 'Soft Border - 轻量边', usage: '通用分割线、卡片描边、禁用态底色' },
    { name: 'Base Background', hex: '#F5F7FA', desc: 'Cool Gray - 冷灰底', usage: '全局页面背景、非焦点容器背景' },
  ];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-32">
      <div className="text-center px-4">
        <h2 className="text-3xl font-black mb-2 tracking-tight text-[#111827]">视觉色彩规范 v2.0</h2>
        <p className="text-[#4B5563] text-sm italic font-medium">“高饱和、高穿透、符合剧组环境的电感美学”</p>
      </div>

      {/* 1. 核心品牌色 */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-[#0066FF] pl-4">
          <h3 className="font-bold text-lg text-[#111827]">1. 核心品牌色 (Primary)</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {brandColors.map((color) => (
            <div key={color.name} className={`group relative p-6 rounded-[2rem] border transition-all hover:scale-[1.02] ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-[#E5E7EB] shadow-sm'}`}>
              <div className="w-full h-24 rounded-2xl mb-4 shadow-[0_8px_20px_rgba(0,102,255,0.25)]" style={{ backgroundColor: color.hex }}></div>
              <div className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <h4 className="font-black text-sm text-[#111827]">{color.name}</h4>
                  <code className="text-[10px] font-mono font-bold text-[#0066FF] uppercase">{color.hex}</code>
                </div>
                <p className="text-[11px] text-[#4B5563] font-medium leading-relaxed">{color.desc}</p>
                <div className="pt-2">
                    <span className="text-[9px] px-2 py-0.5 bg-[#F0F7FF] text-[#0066FF] font-black rounded uppercase tracking-widest">{color.usage}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. 功能与反馈色 */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-[#FF3B30] pl-4">
          <h3 className="font-bold text-lg text-[#111827]">2. 功能与反馈色 (Feedback)</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {functionalColors.map((color) => (
            <div key={color.name} className="p-6 bg-white rounded-[2rem] border border-[#E5E7EB] space-y-4 shadow-sm transition-all hover:-translate-y-1">
              <div className="w-full h-12 rounded-xl flex items-center justify-center text-white" style={{ backgroundColor: color.hex }}>
                {color.name === 'Success' && <CheckCircle2 size={24} />}
                {color.name === 'Alert / Price' && <Zap size={24} />}
                {color.name === 'Warning' && <AlertCircle size={24} />}
              </div>
              <div className="text-center">
                <h4 className="font-black text-[11px] text-[#111827] uppercase tracking-widest">{color.name}</h4>
                <code className="text-[10px] font-mono font-bold text-slate-300 block mt-1">{color.hex}</code>
                <p className="text-[10px] text-[#4B5563] font-medium mt-2 leading-tight">{color.usage}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. 中性色体系 */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-[#4B5563] pl-4">
          <h3 className="font-bold text-lg text-[#111827]">3. 中性色矩阵 (Neutral)</h3>
        </div>
        <div className={`rounded-[2.5rem] border overflow-hidden ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-[#E5E7EB]'}`}>
           {neutralColors.map((color, idx) => (
             <div key={color.name} className={`flex items-center p-5 border-b last:border-none ${isDarkMode ? 'border-slate-700' : 'border-[#E5E7EB]'} hover:bg-gray-50/50 transition-colors`}>
                <div className="w-12 h-12 rounded-xl border border-gray-100 shrink-0" style={{ backgroundColor: color.hex }}></div>
                <div className="ml-5 flex-1 grid grid-cols-2 md:grid-cols-3 items-center">
                  <div>
                    <h4 className="font-black text-xs text-[#111827]">{color.name}</h4>
                    <code className="text-[10px] font-mono text-slate-400 font-bold">{color.hex}</code>
                  </div>
                  <p className="text-[11px] text-[#4B5563] font-medium hidden md:block">{color.desc}</p>
                  <p className="text-[10px] text-[#9CA3AF] font-bold text-right md:text-left">{color.usage}</p>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* 4. 视觉平衡演示 */}
      <section className="space-y-6">
        <div className={`p-10 rounded-[2.5rem] bg-[#111827] text-white shadow-2xl relative overflow-hidden`}>
            <div className="relative z-10 space-y-8">
                <div className="flex items-center gap-3">
                    <Layout className="text-[#0066FF]" size={28} />
                    <h3 className="text-xl font-black tracking-tight uppercase italic">Contrast & Contrast Ratio</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                        <div className="h-20 bg-[#0066FF] text-white flex flex-col items-center justify-center font-black rounded-2xl border-4 border-[#0052CC]">
                           <span className="text-lg">Aa</span>
                           <span className="text-[10px] opacity-60">Electric Blue / White</span>
                        </div>
                        <p className="text-[11px] text-blue-100/60 leading-relaxed font-bold">
                          主色对比：在户外强光致盲环境下，白字必须加粗以抵消光晕。对比度达到 4.5:1 (WCAG AA)。
                        </p>
                    </div>
                    <div className="space-y-3">
                        <div className="h-20 bg-white text-[#FF3B30] border-4 border-[#FF3B30] flex flex-col items-center justify-center font-black rounded-2xl">
                           <span className="text-lg tracking-tighter" style={{ fontFamily: 'DIN Alternate' }}>¥19,200.00</span>
                           <span className="text-[10px] opacity-60 uppercase tracking-widest">Warning Red / White</span>
                        </div>
                        <p className="text-[11px] text-blue-100/60 leading-relaxed font-bold">
                          警示平衡：红色作为价格强调色，在白色卡片上具有最高的信噪比，确保用户第一时间定位到金额。
                        </p>
                    </div>
                </div>
            </div>
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#0066FF]/10 blur-[120px] rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#FF3B30]/5 blur-[100px] rounded-full"></div>
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
