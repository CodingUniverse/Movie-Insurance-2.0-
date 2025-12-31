
import React from 'react';
import { 
  Type, 
  Zap, 
  ShieldCheck, 
  AlertCircle, 
  ArrowRight, 
  XCircle, 
  CheckCircle2,
  MessageSquareQuote,
  Scale,
  Target
} from 'lucide-react';

interface Props {
  isDarkMode: boolean;
}

const CopywritingSpecification: React.FC<Props> = ({ isDarkMode }) => {
  const principles = [
    {
      title: '极简且精确 (Minimal)',
      desc: '剧组现场节奏极快，拒绝客套话。能用2个字说清，绝不用4个字。',
      icon: <Zap className="text-amber-500" />
    },
    {
      title: '结果导向 (Impact)',
      desc: '告知用户“做了会得到什么”，而不是“正在操作什么”。',
      icon: <Target className="text-[#0066FF]" />
    },
    {
      title: '去责备化 (Blameless)',
      desc: '出错时，永远是引导不够。不指责用户“错/非法”，而提供建设性方案。',
      icon: <Scale className="text-emerald-500" />
    }
  ];

  const comparisons = [
    {
      type: '按钮 (Button)',
      bad: '请您点击这里支付',
      good: '立即支付',
      reason: '剔除动作描述，直接执行目的。'
    },
    {
      type: '报错 (Error)',
      bad: '身份证号非法！',
      good: '证件号有误，请核实最后一位',
      reason: '柔化负面词汇，告知具体修复点。'
    },
    {
      type: '状态 (Status)',
      bad: '数据上传中',
      good: '正在同步 128 名人员...',
      reason: '告知具体进度，量化用户心理预期。'
    },
    {
      type: '空态 (Empty)',
      bad: '暂无数据',
      good: '暂无在保项目，点击下方立即创建',
      reason: '现状描述 + 明确的下一步行动指引。'
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-32">
      <div className="text-center px-4">
        <h2 className="text-3xl font-black mb-2 tracking-tight text-[#111827]">文案设计规范 v2.0</h2>
        <p className="text-[#4B5563] text-sm italic font-medium">“法律契约的翻译官，高压环境的镇定剂”</p>
      </div>

      {/* 1. Core Principles */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-[#0066FF] pl-4">
          <h3 className="font-bold text-lg text-[#111827]">1. 文案核心原则 (Principles)</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((p, idx) => (
            <div key={idx} className={`p-8 rounded-[2rem] border transition-colors ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-[#E5E7EB] shadow-sm'}`}>
              <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center mb-6">
                {p.icon}
              </div>
              <h4 className="font-black text-sm text-[#111827] mb-3">{p.title}</h4>
              <p className="text-[11px] text-[#4B5563] font-bold leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Formatting Standards */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-[#FF3B30] pl-4">
          <h3 className="font-bold text-lg text-[#111827]">2. 数据格式规范 (Formatting)</h3>
        </div>
        <div className={`rounded-[2.5rem] border overflow-hidden ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-[#E5E7EB]'}`}>
          <div className="p-8 space-y-6">
            <div className="flex justify-between items-center border-b pb-4">
              <span className="text-sm font-bold text-[#4B5563]">金额 (Currency)</span>
              <div className="text-right">
                <code className="text-lg font-black text-[#FF3B30] font-mono">¥19200.00</code>
                <p className="text-[10px] text-[#9CA3AF] font-bold mt-1">无逗号，保留两位，DIN 字体</p>
              </div>
            </div>
            <div className="flex justify-between items-center border-b pb-4">
              <span className="text-sm font-bold text-[#4B5563]">日期 (Date)</span>
              <div className="text-right">
                <code className="text-sm font-black text-[#111827] font-mono italic">2025.12.31</code>
                <p className="text-[10px] text-[#9CA3AF] font-bold mt-1">点分隔，比横杠更省空间且现代</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-[#4B5563]">脱敏 (Masking)</span>
              <div className="text-right">
                <code className="text-sm font-black text-[#111827] font-mono">320102 ****** 1234</code>
                <p className="text-[10px] text-[#9CA3AF] font-bold mt-1">6-8-4 结构，中间8位强制遮蔽</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Dos & Don'ts */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-emerald-500 pl-4">
          <h3 className="font-bold text-lg text-[#111827]">3. 交互对照表 (Dos & Don'ts)</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {comparisons.map((c, idx) => (
            <div key={idx} className={`p-8 rounded-[2rem] border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-[#E5E7EB] shadow-sm'}`}>
              <h4 className="text-[10px] font-black text-[#0066FF] uppercase tracking-[0.2em] mb-6">{c.type}</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-red-50 text-red-600 rounded-2xl border border-red-100">
                  <XCircle size={18} className="shrink-0" />
                  <span className="text-sm font-bold">{c.bad}</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-emerald-50 text-emerald-700 rounded-2xl border border-emerald-100">
                  <CheckCircle2 size={18} className="shrink-0" />
                  <span className="text-sm font-black">{c.good}</span>
                </div>
                <p className="text-[10px] text-[#9CA3AF] font-bold pt-2 italic">“ {c.reason} ”</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Industry Context */}
      <section className="space-y-6">
        <div className={`p-10 rounded-[2.5rem] bg-[#111827] text-white shadow-2xl relative overflow-hidden`}>
            <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                    <MessageSquareQuote className="text-[#0066FF]" size={28} />
                    <h3 className="text-xl font-black tracking-tight italic uppercase">行业黑话对照 (Jargon Handling)</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: '批增', desc: '新增人员' },
                    { label: '批减', desc: '人员退保' },
                    { label: '批改', desc: '信息更正' },
                    { label: '报案', desc: '理赔申请' }
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center group hover:bg-[#0066FF] transition-colors cursor-default">
                       <p className="text-sm font-black mb-1">{item.label}</p>
                       <p className="text-[9px] font-bold opacity-40 uppercase tracking-widest">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-blue-100/40 leading-relaxed font-bold">
                  * 提示：在针对制片人/财务的专业后台中，保留“批增/批减”等行业术语以显专业；在面向剧组个人的端侧，使用“新增/退保”等直觉词汇。
                </p>
            </div>
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#0066FF]/10 blur-[120px] rounded-full"></div>
        </div>
      </section>

      {/* 5. Summary Checksheet - Constant Reference */}
      <section className={`p-10 rounded-[2.5rem] border-4 border-dashed border-[#E5E7EB] ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-[#FAFBFC]'}`}>
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="space-y-6 flex-1">
                <h4 className="text-xl font-black text-[#111827] flex items-center gap-3">
                    <ShieldCheck size={28} className="text-[#0066FF]" />
                    文案自检清单 (QA Checklist)
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {[
                     '按钮：是否遵循“动词+名词”？(例：确认支付)',
                     '标点：标题和按钮结尾是否已经剔除句号？',
                     '反馈：报错是否提供了“如何解决”的方案？',
                     '金额：DIN 字体是否已强制生效？',
                     '称呼：全量交互中是否已剔除“您/请”等冗余词？'
                   ].map((text, i) => (
                     <div key={i} className="flex gap-3 text-xs font-bold text-[#4B5563] leading-relaxed">
                        <span className="text-[#0066FF] shrink-0">{i+1}.</span>
                        {text}
                     </div>
                   ))}
                </div>
            </div>
            <div className="w-full md:w-64 p-6 bg-white rounded-3xl border shadow-sm">
                <p className="text-[10px] font-black text-[#9CA3AF] uppercase tracking-widest mb-4">设计者便签</p>
                <p className="text-[11px] text-[#4B5563] font-bold leading-relaxed italic">
                  “把复杂的保险术语‘人话化’，把冷漠的系统报错‘甚至化’。我们不仅是在做工具，更是在给压力下的剧组人员提供情绪支点。”
                </p>
            </div>
        </div>
      </section>

      <footer className="text-center py-6 border-t border-dashed border-[#E5E7EB]">
        <p className="text-[10px] text-[#9CA3AF] font-bold uppercase tracking-[0.2em]">
          Cinema UX Writing Standard v2.0
        </p>
      </footer>
    </div>
  );
};

export default CopywritingSpecification;
