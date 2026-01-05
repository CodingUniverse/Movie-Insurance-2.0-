
import React, { useState } from 'react';
import { 
  X, 
  Check, 
  Trash2, 
  Info, 
  ChevronRight, 
  ShieldCheck, 
  Zap, 
  Layout, 
  Lock, 
  ShoppingCart, 
  Users, 
  PlusCircle,
  HelpCircle
} from 'lucide-react';
import Button from '../components/Button';

interface Props {
  isDarkMode: boolean;
}

type SheetType = 'action' | 'composite' | 'secure' | 'form' | null;

const BottomSheetSpecification: React.FC<Props> = ({ isDarkMode }) => {
  const [activeSheet, setActiveSheet] = useState<SheetType>(null);
  const [selectedSpec, setSelectedSpec] = useState('80万');

  const closeSheet = () => setActiveSheet(null);

  const numericStyle = { 
    fontFamily: 'DIN Alternate, sans-serif', 
    fontVariantNumeric: 'tabular-nums' 
  };

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-32">
      <div className="text-center px-4">
        <h2 className="text-3xl font-extrabold mb-2 tracking-tight text-[#111827]">底部模态弹层 (Bottom Sheet)</h2>
        <p className="text-[#4B5563] text-sm italic font-medium">“微信原生美学，单手高效决策，业务流转中枢”</p>
      </div>

      {/* --- 1. Design Philosophy --- */}
      <section className="bg-[#0066FF] rounded-[2rem] p-8 text-white relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <h3 className="text-xl font-black italic">为什么它是“微信绝对主流”？</h3>
          <p className="text-xs leading-relaxed opacity-90 font-bold">
            1. **拇指热区**：自然下沉至屏幕底部 60%，操作成本最低。<br/>
            2. **沉浸式上下文**：不破坏主页面逻辑，作为主流程的“深度插件”。<br/>
            3. **安全心理**：上滑出现的物理直觉，比全屏跳转更具安全感。
          </p>
        </div>
        <div className="absolute top-[-20px] right-[-20px] w-48 h-48 bg-white opacity-10 rounded-full blur-3xl"></div>
      </section>

      {/* --- 2. Interactive Scenarios --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Scenario 1: Action */}
        <div className={`p-6 rounded-[2rem] border flex flex-col justify-between ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-[#E5E7EB] shadow-sm'}`}>
          <div className="space-y-3">
            <span className="text-[10px] font-black text-[#0066FF] bg-[#F0F7FF] px-2 py-0.5 rounded-sm uppercase tracking-widest">场景 1: 轻量操作</span>
            <h4 className="font-bold text-[#111827]">人员删除 / 状态变更</h4>
            <p className="text-[11px] text-[#9CA3AF] leading-relaxed">适用于单点决策。顶部“取消”为弱操作，底部为核心行动点。</p>
          </div>
          <Button variant="secondary" size="small" className="mt-6 rounded-xl" onClick={() => setActiveSheet('action')}>演示轻量弹层</Button>
        </div>

        {/* Scenario 2: Composite */}
        <div className={`p-6 rounded-[2rem] border flex flex-col justify-between ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-[#E5E7EB] shadow-sm'}`}>
          <div className="space-y-3">
            <span className="text-[10px] font-black text-[#0066FF] bg-[#F0F7FF] px-2 py-0.5 rounded-sm uppercase tracking-widest">场景 2: 复合配置</span>
            <h4 className="font-bold text-[#111827]">保额选规格 (SKU)</h4>
            <p className="text-[11px] text-[#9CA3AF] leading-relaxed">投保前的高频微调。包含价格反馈、规格选择及主按钮。</p>
          </div>
          <Button variant="secondary" size="small" className="mt-6 rounded-xl" onClick={() => setActiveSheet('composite')}>演示复合配置</Button>
        </div>

        {/* Scenario 3: Secure */}
        <div className={`p-6 rounded-[2rem] border flex flex-col justify-between ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-[#E5E7EB] shadow-sm'}`}>
          <div className="space-y-3">
            <span className="text-[10px] font-black text-[#FF3B30] bg-red-50 px-2 py-0.5 rounded-sm uppercase tracking-widest">场景 3: 支付/支付</span>
            <h4 className="font-bold text-[#111827]">全模态签约确认</h4>
            <p className="text-[11px] text-[#9CA3AF] leading-relaxed">强制决策，点击遮罩不关闭。最大化降低误触风险。</p>
          </div>
          <Button variant="danger" size="small" className="mt-6 rounded-xl" onClick={() => setActiveSheet('secure')}>演示高风险弹层</Button>
        </div>

        {/* Scenario 4: Form */}
        <div className={`p-6 rounded-[2rem] border flex flex-col justify-between ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-[#E5E7EB] shadow-sm'}`}>
          <div className="space-y-3">
            <span className="text-[10px] font-black text-[#00C853] bg-green-50 px-2 py-0.5 rounded-sm uppercase tracking-widest">场景 4: 表单填入</span>
            <h4 className="font-bold text-[#111827]">人员资料快速修正</h4>
            <p className="text-[11px] text-[#9CA3AF] leading-relaxed">拇指舒适区的表单填写。保存按钮置顶，操作极致顺滑。</p>
          </div>
          <Button variant="secondary" size="small" className="mt-6 rounded-xl" onClick={() => setActiveSheet('form')}>演示表单弹层</Button>
        </div>
      </div>

      {/* --- SHEET RENDERING --- */}

      {/* 1. Action Sheet (Lightweight) */}
      {activeSheet === 'action' && (
        <div className="fixed inset-0 z-[900] bg-black/60 backdrop-blur-sm flex items-end animate-in fade-in duration-300" onClick={closeSheet}>
            <div className="w-full bg-white rounded-t-[2rem] animate-in slide-in-from-bottom-full duration-300" onClick={e => e.stopPropagation()}>
                <div className="p-4 flex flex-col text-center">
                    <button onClick={closeSheet} className="w-full py-4 text-base font-bold text-[#9CA3AF] border-b border-gray-50">取消操作</button>
                    <button className="w-full py-5 text-lg font-black text-[#FF3B30] active:bg-red-50">删除该保单项目</button>
                </div>
                <div className="h-8 w-full bg-[#F5F7FA] md:hidden"></div>
            </div>
        </div>
      )}

      {/* 2. Composite Sheet (SKU Style) */}
      {activeSheet === 'composite' && (
        <div className="fixed inset-0 z-[900] bg-black/60 backdrop-blur-sm flex items-end animate-in fade-in duration-300" onClick={closeSheet}>
            <div className="w-full bg-white rounded-t-[2rem] animate-in slide-in-from-bottom-full duration-300 overflow-hidden" onClick={e => e.stopPropagation()}>
                {/* Header with Close */}
                <div className="p-6 flex justify-between items-start border-b border-gray-50">
                    <div className="flex gap-4">
                        <div className="w-20 h-20 bg-[#F0F7FF] rounded-xl flex items-center justify-center text-[#0066FF]">
                            <ShieldCheck size={40} />
                        </div>
                        <div className="space-y-1">
                            <p className="text-xl font-black text-[#FF3B30]" style={numericStyle}>¥120.00 <span className="text-[10px] text-[#9CA3AF]">/人</span></p>
                            <p className="text-[10px] font-bold text-[#9CA3AF]">已选：标准版 ({selectedSpec})</p>
                        </div>
                    </div>
                    <button onClick={closeSheet} className="p-2 bg-gray-50 rounded-full text-[#9CA3AF]"><X size={20}/></button>
                </div>
                {/* Specs Selection */}
                <div className="p-6 space-y-6">
                    <div className="space-y-3">
                        <h5 className="text-[10px] font-black text-[#9CA3AF] uppercase tracking-widest">保障额度限制</h5>
                        <div className="flex flex-wrap gap-2">
                            {['50万', '80万', '100万'].map(s => (
                                <button 
                                    key={s} 
                                    onClick={() => setSelectedSpec(s)}
                                    className={`px-6 py-2.5 rounded-xl text-xs font-black border-2 transition-all ${
                                        selectedSpec === s ? 'bg-[#0066FF] border-[#0066FF] text-white shadow-lg' : 'bg-gray-50 border-transparent text-[#4B5563]'
                                    }`}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-3">
                        <h5 className="text-[10px] font-black text-[#9CA3AF] uppercase tracking-widest">保障期限</h5>
                        <div className="flex gap-2">
                            <span className="px-6 py-2.5 rounded-xl text-xs font-black bg-[#F0F7FF] border-2 border-[#0066FF] text-[#0066FF]">按月投保</span>
                            <span className="px-6 py-2.5 rounded-xl text-xs font-black bg-gray-50 text-[#9CA3AF]">按日投保 (不可选)</span>
                        </div>
                    </div>
                </div>
                {/* Final Action */}
                <div className="p-6 pt-2 border-t border-gray-50">
                    <Button variant="primary" size="full" className="rounded-2xl h-[60px]" onClick={closeSheet}>确定并继续</Button>
                </div>
                <div className="h-8 w-full bg-white md:hidden"></div>
            </div>
        </div>
      )}

      {/* 3. Secure Sheet (Full Modal / Payment) */}
      {activeSheet === 'secure' && (
        <div className="fixed inset-0 z-[900] bg-black/70 backdrop-blur-md flex items-end animate-in fade-in duration-300">
            <div className="w-full bg-white rounded-t-[2rem] animate-in slide-in-from-bottom-full duration-500" onClick={e => e.stopPropagation()}>
                <div className="p-8 space-y-8">
                    <div className="text-center space-y-2">
                        <div className="w-16 h-16 bg-[#F0F7FF] text-[#0066FF] rounded-full flex items-center justify-center mx-auto mb-4">
                            <Lock size={32} />
                        </div>
                        <h3 className="text-xl font-black text-[#111827]">签署保单契约</h3>
                        <p className="text-xs text-[#9CA3AF] font-bold">您正在为 128 名人员签署 2025 年度保障契约</p>
                    </div>
                    
                    <div className="bg-[#F5F7FA] rounded-2xl p-6 space-y-4">
                        <div className="flex justify-between items-center text-xs">
                            <span className="text-[#9CA3AF] font-bold">签约公司</span>
                            <span className="text-[#111827] font-black">北京光影时代传媒有限公司</span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                            <span className="text-[#9CA3AF] font-bold">保费金额</span>
                            <span className="text-lg font-black text-[#FF3B30]" style={numericStyle}>¥19,200.00</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <Button variant="danger" size="full" className="rounded-2xl h-[60px]" onClick={closeSheet}>确认支付并签约</Button>
                        <button onClick={closeSheet} className="w-full text-xs font-black text-[#9CA3AF] py-2 uppercase tracking-widest">返回修改信息</button>
                    </div>
                </div>
                <div className="h-8 w-full bg-white md:hidden"></div>
            </div>
        </div>
      )}

      {/* 4. Form Sheet (Quick Edit) */}
      {activeSheet === 'form' && (
        <div className="fixed inset-0 z-[900] bg-black/60 backdrop-blur-sm flex items-end animate-in fade-in duration-300" onClick={closeSheet}>
            <div className="w-full bg-white rounded-t-[2rem] animate-in slide-in-from-bottom-full duration-300" onClick={e => e.stopPropagation()}>
                {/* Top Action Header */}
                <div className="h-14 px-6 border-b border-gray-50 flex items-center justify-between">
                    <button onClick={closeSheet} className="text-sm font-bold text-[#9CA3AF]">取消</button>
                    <h3 className="text-base font-black text-[#111827]">人员信息补全</h3>
                    <button onClick={closeSheet} className="text-sm font-black text-[#00C853]">保存</button>
                </div>
                {/* Form Body */}
                <div className="p-6 space-y-6">
                    <div className="relative border-b border-gray-100 py-3">
                        <label className="text-[10px] font-black text-[#9CA3AF] uppercase mb-1 block tracking-widest">姓名 (不可修改)</label>
                        <input type="text" className="w-full bg-transparent font-black text-lg text-[#111827] opacity-40 outline-none" value="张建国" readOnly />
                    </div>
                    <div className="relative border-b border-[#0066FF] py-3">
                        <label className="text-[10px] font-black text-[#0066FF] uppercase mb-1 block tracking-widest">身份证号</label>
                        <input type="text" className="w-full bg-transparent font-black text-lg text-[#111827] outline-none" defaultValue="32010219901010..." />
                        <div className="absolute right-0 bottom-3 text-[#00C853]">
                            <ShieldCheck size={18} />
                        </div>
                    </div>
                    <div className="flex gap-4 pt-4">
                        <div className="flex-1 p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-3">
                            <PlusCircle size={20} className="text-[#9CA3AF]" />
                            <span className="text-xs font-bold text-[#4B5563]">批量填充工种</span>
                        </div>
                    </div>
                </div>
                {/* Fake Keyboard Spacing */}
                <div className="h-40 bg-gray-50/50 flex flex-col items-center justify-center">
                    <span className="text-[9px] font-black text-[#9CA3AF] uppercase tracking-widest">键盘模拟占用区</span>
                </div>
                <div className="h-8 w-full bg-white md:hidden"></div>
            </div>
        </div>
      )}

      {/* --- 3. Best Practices Checksheet --- */}
      <section className="p-8 rounded-[2rem] border-2 border-dashed border-[#E5E7EB] space-y-6">
        <h4 className="font-black text-lg flex items-center gap-3">
          <Zap size={24} className="text-[#0066FF]" />
          剧组业务适配自检 (Best Practices)
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
                <h5 className="text-xs font-black text-[#0066FF] uppercase tracking-widest border-b pb-1">操作层级与体验</h5>
                <ul className="space-y-3 text-xs text-[#4B5563] font-bold">
                    <li className="flex gap-2 items-start"><Check size={14} className="text-[#00C853] shrink-0 mt-0.5" /> 遮罩不透明度统一为 0.6 (常规) / 0.7 (高风险)。</li>
                    <li className="flex gap-2 items-start"><Check size={14} className="text-[#00C853] shrink-0 mt-0.5" /> 弹层顶部 24px 圆角，象征“纸张堆叠”的物理逻辑。</li>
                    <li className="flex gap-2 items-start"><Check size={14} className="text-[#00C853] shrink-0 mt-0.5" /> 内部滚动区域在接近底部时，主按钮需固定（Sticky）。</li>
                </ul>
            </div>
            <div className="space-y-4">
                <h5 className="text-xs font-black text-[#FF3B30] uppercase tracking-widest border-b pb-1">剧组特定交互</h5>
                <ul className="space-y-3 text-xs text-[#4B5563] font-bold">
                    <li className="flex gap-2 items-start"><HelpCircle size={14} className="text-[#0066FF] shrink-0 mt-0.5" /> 批增/批减操作采用「托盘型」弹层，高度不应超过 40%。</li>
                    <li className="flex gap-2 items-start"><HelpCircle size={14} className="text-[#0066FF] shrink-0 mt-0.5" /> OCR 修正结果在弹层内回显，对比原文更清晰。</li>
                    <li className="flex gap-2 items-start"><HelpCircle size={14} className="text-[#0066FF] shrink-0 mt-0.5" /> 支付成功后的“下载保单”应通过底部弹层展示多种分享路径。</li>
                </ul>
            </div>
        </div>
      </section>

      <footer className="text-center py-6 border-t border-dashed border-[#E5E7EB]">
        <p className="text-[10px] text-[#9CA3AF] font-bold uppercase tracking-[0.2em]">
          Cinema Professional Bottom Sheet System v2.0
        </p>
      </footer>
    </div>
  );
};

export default BottomSheetSpecification;
