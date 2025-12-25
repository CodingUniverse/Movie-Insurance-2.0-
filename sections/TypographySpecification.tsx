
import React from 'react';
import { Type, Hash, AlignCenter, TextSelect, Code, CheckCircle2, AlertCircle, Info } from 'lucide-react';

interface Props {
  isDarkMode: boolean;
}

const TypographySpecification: React.FC<Props> = ({ isDarkMode }) => {
  const typeScale = [
    { role: 'Headline 1', size: '24px', weight: '700', height: '32px', usage: '大标题、结果页状态词' },
    { role: 'Headline 2', size: '20px', weight: '700', height: '28px', usage: '模块标题、弹窗标题' },
    { role: 'Title (Card)', size: '17px', weight: '600', height: '24px', usage: '方案名称、分组标题' },
    { role: 'Body (Main)', size: '16px', weight: '500', height: '24px', usage: '表单输入内容、正文内容' },
    { role: 'Body (Sub)', size: '14px', weight: '400', height: '22px', usage: '列表次要信息、条款正文' },
    { role: 'Caption', size: '12px', weight: '400', height: '18px', usage: '辅助提示、标签、底部信息' },
    { role: 'Legal/Tiny', size: '10px', weight: '400', height: '14px', usage: '版权声明、微小状态标签' },
  ];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-32">
      <div className="text-center px-4">
        <h2 className="text-3xl font-black mb-2 tracking-tight text-[#111827]">剧组保字体规范 v2.0</h2>
        <p className="text-[#4B5563] text-sm italic font-medium">“高易读性、中文数字习惯、移动端零视觉干扰”</p>
      </div>

      {/* --- 1. Font Family Stack --- */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-[#0066FF] pl-3">
          <h3 className="font-bold text-lg text-[#111827]">1. 字体家族 (Font Family)</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className={`p-6 rounded-[2rem] border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-[#E5E7EB] shadow-sm'}`}>
            <h4 className="text-[10px] font-black text-[#9CA3AF] uppercase tracking-widest mb-3">A. 中文系统字体栈</h4>
            <p className="text-xl font-bold mb-2 text-[#111827]">剧组保障 · 安全可靠</p>
            <p className="text-[11px] text-[#4B5563] leading-relaxed font-medium">
              优先调用：PingFang SC (iOS), MiSans (Android), Microsoft YaHei。<br/>
              重点：确保 16px 以下仍能清晰辨识汉字笔画，不粘连、不模糊。
            </p>
          </div>
          <div className={`p-6 rounded-[2rem] border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-[#E5E7EB] shadow-sm'}`}>
            <h4 className="text-[10px] font-black text-[#9CA3AF] uppercase tracking-widest mb-3">B. 金额与数据 (Monospace)</h4>
            <div className="font-mono text-xl tracking-tight mb-2 text-[#0066FF] font-black" style={{ fontFamily: 'DIN Alternate, sans-serif' }}>¥19200.00</div>
            <p className="text-[11px] text-[#4B5563] leading-relaxed font-medium">
              强制使用 DIN Alternate 或等宽字体。在列表中确保每一位数字严格纵向对齐，极大提升剧组财务核对效率。
            </p>
          </div>
        </div>
      </section>

      {/* --- 2. Type Scale Table --- */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-[#0066FF] pl-3">
          <h3 className="font-bold text-lg text-[#111827]">2. 字号层级 (Type Scale)</h3>
        </div>
        <div className={`rounded-[2rem] border overflow-hidden ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-[#E5E7EB]'}`}>
          <div className="overflow-x-auto no-scrollbar">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="text-[10px] text-[#9CA3AF] font-black uppercase tracking-widest bg-gray-50/50">
                <tr>
                  <th className="p-4">角色 (Role)</th>
                  <th className="p-4">字号 / 行高</th>
                  <th className="p-4">视觉演示</th>
                </tr>
              </thead>
              <tbody className="text-[12px] font-bold">
                {typeScale.map((item) => (
                  <tr key={item.role} className="border-b last:border-none border-gray-100 hover:bg-gray-50/50 transition-colors">
                    <td className="p-4">
                      <div className="text-[#111827]">{item.role}</div>
                      <div className="text-[10px] text-[#9CA3AF] mt-0.5 font-medium">{item.usage}</div>
                    </td>
                    <td className="p-4 font-mono text-[#4B5563]">
                      {item.size} / {item.height}
                    </td>
                    <td className="p-4">
                      <span style={{ fontSize: item.size, lineHeight: item.height, fontWeight: item.weight }} className="text-[#111827]">
                        剧组保2.0
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* --- 3. Numeric Typesetting for Chinese --- */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-[#FF3B30] pl-3">
          <h3 className="font-bold text-lg text-[#111827]">3. 中文数字排版规范 (Numeric System)</h3>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          {/* 金额：无千分位设计 */}
          <div className={`p-8 rounded-[2rem] border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-[#E5E7EB] shadow-sm'}`}>
            <div className="flex justify-between items-start mb-6">
                <h4 className="text-[10px] font-black text-[#9CA3AF] uppercase tracking-widest flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#FF3B30] rounded-full"></div> 净化金额 (No-Comma Currency)
                </h4>
                <span className="bg-[#FFF1F0] text-[#FF3B30] text-[9px] px-2 py-0.5 rounded font-black">MOBILE OPTIMIZED</span>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-end">
                <div className="space-y-2">
                    <div className="flex items-baseline gap-1">
                        <span className="text-sm font-black text-[#FF3B30]">¥</span>
                        <span className="text-5xl font-black tracking-tighter text-[#FF3B30]" style={{ fontFamily: 'DIN Alternate, sans-serif' }}>57600</span>
                        <span className="text-xl font-black text-[#FF3B30]">.00</span>
                    </div>
                    <p className="text-[10px] text-[#9CA3AF] font-bold">移动端去掉了千分位逗号，减少视觉碎片感，提升数字识别速度。</p>
                </div>
                <div className="h-full w-[1px] bg-gray-100 hidden md:block self-stretch"></div>
                <div className="space-y-2">
                    <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-black text-[#111827]" style={{ fontFamily: 'DIN Alternate, sans-serif' }}>5.76</span>
                        <span className="text-lg font-black text-[#111827]">万</span>
                        <span className="text-xs font-bold text-[#9CA3AF] ml-1">元</span>
                    </div>
                    <p className="text-[10px] text-[#9CA3AF] font-bold">进阶习惯：大额数字自动转换为“万”或“亿”单位，更符合中文阅读习惯。</p>
                </div>
            </div>
          </div>

          {/* 零值处理与对齐 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-8 rounded-[2rem] border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-[#E5E7EB] shadow-sm'}`}>
                <h4 className="text-[10px] font-black text-[#9CA3AF] uppercase tracking-widest mb-6">零值处理 (Zero Value)</h4>
                <div className="space-y-6">
                    <div className="flex justify-between items-center border-b border-dashed pb-3">
                        <span className="text-xs text-[#4B5563] font-bold">单项保费 (免赔额)</span>
                        <span className="text-lg font-black text-[#9CA3AF]" style={{ fontFamily: 'DIN Alternate' }}>0.00</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-dashed pb-3">
                        <span className="text-xs text-[#4B5563] font-bold">未选择项 (缺省)</span>
                        <span className="text-lg font-black text-[#E5E7EB]">—</span>
                    </div>
                    <p className="text-[10px] text-[#9CA3AF] leading-relaxed">
                        <span className="text-[#0066FF] font-black">原则：</span> 确认为0的金额需完整展示 `0.00`；非金额类的缺省值使用长划线 `—`。
                    </p>
                </div>
            </div>

            <div className={`p-8 rounded-[2rem] border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-[#E5E7EB] shadow-sm'}`}>
                <h4 className="text-[10px] font-black text-[#9CA3AF] uppercase tracking-widest mb-6">数据分段 (Grouping)</h4>
                <div className="space-y-6">
                    <div className="space-y-1">
                        <p className="text-[9px] text-[#9CA3AF] font-bold uppercase tracking-[0.2em]">Phone (3-4-4)</p>
                        <p className="text-xl font-black text-[#111827]" style={{ fontFamily: 'DIN Alternate' }}>138 0013 8000</p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-[9px] text-[#9CA3AF] font-bold uppercase tracking-[0.2em]">ID Card (6-8-4)</p>
                        <p className="text-xl font-black text-[#111827]" style={{ fontFamily: 'DIN Alternate' }}>320102 19900101 1234</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. CSS Snippets --- */}
      <section className="space-y-6">
        <div className={`p-8 rounded-[2rem] bg-[#111827] text-white shadow-2xl relative overflow-hidden`}>
            <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                    <Code className="text-[#0066FF]" size={24} />
                    <h3 className="text-lg font-black tracking-tight italic uppercase">Developer Implementation</h3>
                </div>
                <div className="bg-black/40 rounded-2xl p-6 border border-white/5 font-mono text-[10px] leading-relaxed text-blue-100/40 overflow-x-auto no-scrollbar">
{`/* 1. 无千分位格式化函数 */
const formatPrice = (val) => val.toFixed(2); // 输出: 57600.00

/* 2. 中文万位转换逻辑 */
const formatChineseUnit = (val) => {
  return val >= 10000 ? (val / 10000).toFixed(2) + '万' : val;
};

/* 3. 等宽字体对齐 CSS */
.numeric-mono {
  font-family: 'DIN Alternate', 'Courier New', monospace;
  font-variant-numeric: tabular-nums; /* 关键：强制等宽 */
  letter-spacing: -0.02em;
}`}
                </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0066FF]/5 blur-[100px] rounded-full"></div>
        </div>
      </section>

      {/* --- Checklist --- */}
      <section className={`p-8 rounded-[2rem] border-2 border-dashed border-[#E5E7EB] ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-gray-50/50'}`}>
        <h4 className="font-black text-sm mb-4 flex items-center gap-2 text-[#111827]">
            <CheckCircle2 size={18} className="text-[#00C853]" />
            中文排版自检清单 (QA Checklist)
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {[
                '金额无逗号：列表页金额是否已去掉千分位逗号？',
                '单位适配：5位及以上数字是否提供了“万”单位的缩写视图？',
                '等宽对齐：多行金额的个位、小数点是否垂直对齐？',
                '零值清晰：保费为0时，是否展示了 0.00 而非空白？',
                '输入预期：表单输入身份证时，是否自动通过空格分段？'
            ].map((text, idx) => (
                <div key={idx} className="flex gap-3 text-xs text-[#4B5563] font-bold leading-relaxed">
                    <span className="text-[#0066FF] shrink-0">{idx + 1}.</span>
                    {text}
                </div>
            ))}
        </div>
      </section>

      <footer className="text-center py-6 border-t border-dashed border-[#E5E7EB]">
        <p className="text-[10px] text-[#9CA3AF] font-bold uppercase tracking-[0.2em]">
          Cinema Professional Typography System v2.0
        </p>
      </footer>
    </div>
  );
};

export default TypographySpecification;
