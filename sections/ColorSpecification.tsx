
import React from 'react';
// Added missing 'Search' import to fix the error on line 128
import { Droplet, Palette, CheckCircle2, Zap, Info, ShieldCheck, Search } from 'lucide-react';

interface Props {
  isDarkMode: boolean;
}

const ColorSpecification: React.FC<Props> = ({ isDarkMode }) => {
  const brandColors = [
    { name: 'Brand Primary', hex: '#0066FF', desc: '高亮蓝 - 核心主色', usage: '主按钮、选中状态、关键图标、Logo', contrast: '5.89:1 (AA)' },
    { name: 'Brand Hover', hex: '#0052CC', desc: '深电蓝 - 按下状态', usage: '按钮的按下 (Pressed) 状态', contrast: '6.5:1' },
    { name: 'Brand Surface', hex: '#F0F7FF', desc: '极淡蓝 - 次级背景', usage: '次级按钮、选中卡片底色、Tag 背景', contrast: '1.1:1' },
  ];

  const functionalColors = [
    { name: 'Price / Highlight', hex: '#FF3B30', desc: '价格红', usage: '突出金额、冷暖对撞' },
    { name: 'Error / Alert', hex: '#FF4D4F', desc: '错误红', usage: '表单报错、删除警示' },
    { name: 'Success / Safe', hex: '#00C853', desc: '安卓绿', usage: '审核通过、保障生效' },
    { name: 'Warning / Tips', hex: '#FAAD14', desc: '警示黄', usage: '待补材、Excel数据异常' },
  ];

  const neutralColors = [
    { name: 'Text Main', hex: '#111827', usage: '一级标题' },
    { name: 'Text Body', hex: '#4B5563', usage: '正文' },
    { name: 'Text Sub', hex: '#9CA3AF', usage: '辅助信息' },
    { name: 'Border', hex: '#E5E7EB', usage: '分割线' },
    { name: 'Background', hex: '#F5F7FA', usage: '全局页面背景 (冷灰底)' },
    { name: 'Surface', hex: '#FFFFFF', usage: '卡片/弹窗背景' },
  ];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-32">
      <div className="text-center px-4">
        <h2 className="text-3xl font-extrabold mb-2 tracking-tight text-[#111827]">剧组保视觉色彩规范 v2.0</h2>
        <p className="text-[#4B5563] text-sm italic">“高饱和、高穿透、电光动感”</p>
      </div>

      {/* --- 1. Primary Palette --- */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-[#0066FF] pl-3">
          <h3 className="font-bold text-lg text-[#111827]">1. 品牌主色系 (Primary)</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {brandColors.map((color) => (
            <div key={color.name} className={`flex items-center p-5 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100 shadow-sm'}`}>
              <div className="w-16 h-16 rounded-xl shrink-0 shadow-[0_4px_12px_rgba(0,102,255,0.2)]" style={{ backgroundColor: color.hex }}></div>
              <div className="ml-5 flex-1">
                <div className="flex justify-between items-baseline">
                  <h4 className="font-bold text-sm text-[#111827]">{color.name}</h4>
                  <code className="text-[10px] font-mono font-bold text-[#0066FF]">{color.hex}</code>
                </div>
                <p className="text-xs text-[#4B5563] mt-1">{color.desc}</p>
                <div className="mt-3">
                    <span className="text-[9px] px-2 py-0.5 bg-[#F0F7FF] text-[#0066FF] font-bold rounded uppercase tracking-wider">{color.usage}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 bg-[#F0F7FF] rounded-2xl border border-[#0066FF]/10 space-y-2">
            <div className="flex items-center gap-2 text-[#0066FF]">
                <ShieldCheck size={16} />
                <span className="text-xs font-bold">设计原则：点缀原则</span>
            </div>
            <p className="text-[11px] text-[#4B5563] leading-relaxed">
                #0066FF 非常抢眼，使用时应遵循“点缀原则”。不要大面积铺满屏幕（除Header外），以免产生视觉疲劳。反白文字需加粗以应对户外强光。
            </p>
        </div>
      </section>

      {/* --- 2. Functional Colors --- */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-[#FF3B30] pl-3">
          <h3 className="font-bold text-lg text-[#111827]">2. 功能色系 (Functional)</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {functionalColors.map((color) => (
            <div key={color.name} className="p-4 bg-white rounded-2xl border border-gray-100 text-center space-y-2 shadow-sm">
              <div className="w-full h-10 rounded-lg" style={{ backgroundColor: color.hex }}></div>
              <div>
                <h4 className="font-bold text-[10px] text-[#111827] uppercase">{color.name}</h4>
                <code className="text-[9px] font-mono text-slate-400 block mt-1">{color.hex}</code>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 3. Neutrals --- */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-[#111827] pl-3">
          <h3 className="font-bold text-lg text-[#111827]">3. 中性色系 (Neutral Palette)</h3>
        </div>
        <div className={`rounded-3xl border overflow-hidden ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100'}`}>
          <div className="divide-y divide-gray-50">
            {neutralColors.map((color) => (
              <div key={color.name} className="flex items-center p-4">
                <div className="w-10 h-10 rounded-lg border border-gray-100" style={{ backgroundColor: color.hex }}></div>
                <div className="ml-4 flex-1 flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-xs text-[#111827]">{color.name}</h4>
                    <p className="text-[10px] text-[#9CA3AF]">{color.usage}</p>
                  </div>
                  <code className="text-[10px] font-mono text-[#4B5563]">{color.hex}</code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. Component Application Examples --- */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-[#0066FF] pl-3">
          <h3 className="font-bold text-lg text-[#111827]">4. 关键组件配色示例</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Header Example */}
            <div className="p-8 rounded-[2rem] bg-gradient-to-b from-[#0066FF] to-[#0057D9] text-white shadow-xl">
                <p className="text-[10px] font-bold opacity-60 uppercase tracking-widest mb-2">Dashboard Header</p>
                <div className="flex justify-between items-end">
                    <div>
                        <h4 className="text-sm opacity-80">当前保障剧组</h4>
                        <p className="text-3xl font-black">3 <span className="text-sm font-normal">个</span></p>
                    </div>
                    <div className="w-32 h-8 bg-white/20 border border-white/30 rounded-full flex items-center px-3 gap-2">
                        <Search size={12} />
                        <span className="text-[10px]">搜索剧组...</span>
                    </div>
                </div>
            </div>

            {/* Button & Shadow Example */}
            <div className="p-8 rounded-[2rem] bg-white border border-gray-100 flex flex-col items-center justify-center space-y-4">
                <p className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest">Primary Button Shadow</p>
                <button className="h-[52px] px-10 bg-[#0066FF] text-white font-bold rounded-xl shadow-[0_8px_20px_rgba(0,102,255,0.3)]">
                    立即投保
                </button>
                <p className="text-[10px] text-[#4B5563] text-center">使用同色系弥散投影 (Glow Shadow)<br/>营造出“电光感”</p>
            </div>
        </div>
      </section>

      {/* --- 5. Developer CSS --- */}
      <section className="space-y-6">
        <div className={`p-8 rounded-[2rem] bg-[#111827] text-white shadow-2xl relative overflow-hidden`}>
            <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                    <Zap className="text-[#0066FF]" size={24} />
                    <h3 className="text-lg font-bold">CSS 变量交付代码 v2.0</h3>
                </div>
                <div className="bg-black/40 rounded-2xl p-6 border border-white/5 font-mono text-[10px] leading-relaxed text-blue-100/60 overflow-x-auto no-scrollbar">
{`:root {
  /* --- Brand Colors --- */
  --color-primary: #0066FF;
  --color-primary-hover: #0052CC;
  --color-primary-surface: #F0F7FF;
  --gradient-primary: linear-gradient(180deg, #0066FF 0%, #0057D9 100%);
  
  /* --- Functional Colors --- */
  --color-price: #FF3B30;
  --color-error: #FF4D4F;
  --color-success: #00C853;
  --color-warning: #FAAD14;

  /* --- Neutrals --- */
  --text-main: #111827;
  --text-body: #4B5563;
  --text-sub: #9CA3AF;
  --border-color: #E5E7EB;
  --bg-page: #F5F7FA;
  --bg-card: #FFFFFF;

  /* --- Shadows --- */
  --shadow-primary: 0 8px 20px -4px rgba(0, 102, 255, 0.4);
}`}
                </div>
            </div>
        </div>
      </section>

      <footer className="text-center py-6 border-t border-dashed border-slate-200">
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">
          Cinema Professional Color System v2.0
        </p>
      </footer>
    </div>
  );
};

export default ColorSpecification;
