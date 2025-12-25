
import React, { useState, useRef, useEffect } from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  Info, 
  X, 
  Trash2, 
  ArrowRight, 
  FileText, 
  HelpCircle, 
  RotateCcw,
  Loader2,
  Bell,
  ChevronRight,
  Zap,
  Smartphone,
  Eye
} from 'lucide-react';
import Button from '../components/Button';

interface Props {
  isDarkMode: boolean;
}

type ModalType = 'danger' | 'legal' | 'edit' | 'error' | 'success-toast' | 'loading-hud' | 'text-only' | null;

const ModalSpecification: React.FC<Props> = ({ isDarkMode }) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [legalRead, setLegalRead] = useState(false);
  const [loadingText, setLoadingText] = useState('正在提交订单...');
  const legalContentRef = useRef<HTMLDivElement>(null);

  // Loading text cycle
  useEffect(() => {
    if (activeModal === 'loading-hud') {
      const texts = ['正在提交订单...', '正在生成电子契约...', '即将完成...'];
      let i = 0;
      const interval = setInterval(() => {
        i = (i + 1) % texts.length;
        setLoadingText(texts[i]);
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [activeModal]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    if (scrollHeight - scrollTop - clientHeight < 20) {
      setLegalRead(true);
    }
  };

  const closeModals = () => {
    setActiveModal(null);
    setLegalRead(false);
  };

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-32">
      <div className="text-center px-4">
        <h2 className="text-3xl font-extrabold mb-2 tracking-tight text-[#111827]">剧组保弹窗与模态系统 v2.0</h2>
        <p className="text-[#4B5563] text-sm italic">“高亮蓝视觉，极简层级，决策零干扰”</p>
      </div>

      {/* --- Demo Trigger Area --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className={`p-8 rounded-[2rem] border flex flex-col justify-between space-y-6 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-[#E5E7EB] shadow-sm'}`}>
            <div className="flex items-center gap-2 text-[#FF4D4F]">
                <AlertTriangle size={20} />
                <h4 className="font-bold text-base uppercase tracking-wider text-[#111827]">01. 强阻断中央弹窗</h4>
            </div>
            <p className="text-xs text-[#9CA3AF] leading-relaxed">用于极高权重的决策，如删除人员、数据熔断，采用 300px 固定宽。</p>
            <div className="flex gap-3">
                <Button variant="danger" size="small" className="flex-1 rounded-xl" onClick={() => setActiveModal('danger')}>危险操作</Button>
                <Button variant="tertiary" size="small" className="flex-1 rounded-xl" onClick={() => setActiveModal('text-only')}>无图标确认</Button>
            </div>
        </div>

        <div className={`p-8 rounded-[2rem] border flex flex-col justify-between space-y-6 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-[#E5E7EB] shadow-sm'}`}>
            <div className="flex items-center gap-2 text-[#0066FF]">
                <FileText size={20} />
                <h4 className="font-bold text-base uppercase tracking-wider text-[#111827]">02. 任务流底部抽屉</h4>
            </div>
            <p className="text-xs text-[#9CA3AF] leading-relaxed">用于上下文延伸、长文本阅读。顶部 20px 圆角与实体抓手。</p>
            <div className="flex gap-3">
                <Button variant="secondary" size="small" className="flex-1 rounded-xl" onClick={() => setActiveModal('legal')}>条款阅读</Button>
                <Button variant="secondary" size="small" className="flex-1 rounded-xl" onClick={() => setActiveModal('edit')}>表单修改</Button>
            </div>
        </div>

        <div className={`p-8 rounded-[2rem] border flex flex-col justify-between space-y-6 md:col-span-2 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-[#E5E7EB] shadow-sm'}`}>
            <div className="flex items-center gap-2 text-[#00C853]">
                <Bell size={20} />
                <h4 className="font-bold text-base uppercase tracking-wider text-[#111827]">03. 轻反馈提示 (Toasts / HUD)</h4>
            </div>
            <p className="text-xs text-[#9CA3AF] leading-relaxed">墨黑半透明风格，配合 Q 弹上浮动画，不干扰主交互路径。</p>
            <div className="flex gap-4">
                <Button variant="ghost" size="small" className="flex-1 bg-[#F5F7FA] rounded-xl font-bold" onClick={() => setActiveModal('success-toast')}>成功吐司</Button>
                <Button variant="ghost" size="small" className="flex-1 bg-[#F5F7FA] rounded-xl font-bold" onClick={() => setActiveModal('loading-hud')}>智能加载 HUD</Button>
            </div>
        </div>
      </section>

      {/* --- MODAL RENDERING LOGIC --- */}
      
      {/* Level 1: Standard Danger Modal (300px) */}
      {activeModal === 'danger' && (
        <div className="fixed inset-0 z-[900] flex items-center justify-center p-6 bg-[#111827]/60 backdrop-blur-md animate-in fade-in duration-300">
            <div className="w-[300px] bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] animate-in zoom-in-95 duration-200 overflow-hidden text-center p-8">
                <div className="w-12 h-12 bg-[#FFF1F0] text-[#FF4D4F] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trash2 size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#111827]">确认移除该人员？</h3>
                <p className="text-sm text-[#4B5563] mt-3 leading-relaxed">
                    移除后，张大伟 (1101...) 将不再享受保险保障，此操作不可撤销。
                </p>
                <div className="flex gap-3 mt-8">
                    <Button variant="secondary" size="small" className="flex-1 h-11 bg-[#F5F7FA] border-none text-[#9CA3AF]" onClick={closeModals}>先不删</Button>
                    <Button variant="danger" size="small" className="flex-1 h-11" onClick={closeModals}>确认移除</Button>
                </div>
            </div>
        </div>
      )}

      {/* Level 1: Text-Only Confirm (Focus on Spacing) */}
      {activeModal === 'text-only' && (
        <div className="fixed inset-0 z-[900] flex items-center justify-center p-6 bg-[#111827]/60 backdrop-blur-md animate-in fade-in duration-300">
            <div className="w-[300px] bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] animate-in zoom-in-95 duration-200 overflow-hidden p-8 pt-[32px]">
                <h3 className="text-lg font-bold text-[#111827] text-center mb-4">确认提交核保？</h3>
                <p className="text-sm text-[#4B5563] leading-relaxed text-center">
                    提交后将无法修改被保人信息，请确认名单无误。
                </p>
                <div className="flex gap-3 mt-8">
                    <Button variant="secondary" size="small" className="flex-1 h-11 bg-[#F0F7FF] border-none text-[#0066FF]" onClick={closeModals}>再看看</Button>
                    <Button variant="primary" size="small" className="flex-1 h-11" onClick={closeModals}>确认提交</Button>
                </div>
            </div>
        </div>
      )}

      {/* Level 2: Bottom Sheet (Legal / Content) */}
      {activeModal === 'legal' && (
        <div className="fixed inset-0 z-[900] bg-[#111827]/60 backdrop-blur-md flex items-end justify-center animate-in fade-in duration-300">
            <div className="w-full max-w-lg h-[80vh] bg-white rounded-t-[20px] flex flex-col animate-in slide-in-from-bottom-full duration-500 shadow-2xl overflow-hidden">
                {/* Drag Handle */}
                <div className="w-full h-8 flex items-center justify-center pt-2">
                    <div className="w-9 h-1 bg-[#E5E7EB] rounded-full"></div>
                </div>
                {/* Header (56px) */}
                <div className="h-[56px] px-6 border-b flex items-center justify-between shrink-0">
                    <button onClick={closeModals} className="text-base text-[#9CA3AF] font-medium">取消</button>
                    <h3 className="text-base font-bold text-[#111827]">保险条款与告知</h3>
                    <div className="w-8"></div>
                </div>
                {/* Content */}
                <div 
                    ref={legalContentRef}
                    onScroll={handleScroll}
                    className="flex-1 overflow-y-auto p-8 space-y-6 no-scrollbar"
                >
                    <div className="space-y-4">
                        <div className="h-6 w-1/3 bg-[#F5F7FA] rounded"></div>
                        <p className="text-sm text-[#4B5563] leading-relaxed text-left">
                            为了保障您的合法权益，请在确认支付前务必仔细阅读以下全部内容。
                            剧组保险具有特定的行业生效逻辑与免责声明，请特别关注高空作业及猝死扩展条款。
                        </p>
                        <div className="h-40 w-full bg-[#F5F7FA] rounded-2xl border border-[#E5E7EB]"></div>
                        <div className="h-4 w-5/6 bg-[#F5F7FA] rounded"></div>
                        <div className="h-4 w-full bg-[#F5F7FA] rounded"></div>
                        <div className="h-32 w-full bg-[#F5F7FA] rounded-2xl border border-[#E5E7EB]"></div>
                        <p className="text-center text-[10px] text-[#9CA3AF] font-bold uppercase tracking-[0.2em] pt-8">
                            {legalRead ? "已阅读到底部" : "请继续向下滑动阅读"}
                        </p>
                    </div>
                </div>
                {/* Footer Action */}
                <div className="p-8 border-t bg-[#F5F7FA]/50 shrink-0">
                    <Button 
                        variant="primary" 
                        size="full" 
                        disabled={!legalRead}
                        className={`rounded-2xl shadow-[#0066FF]/30 transition-all ${!legalRead ? 'opacity-40 grayscale scale-95' : 'animate-bounce'}`}
                        onClick={closeModals}
                    >
                        我已阅读并知晓相关风险
                    </Button>
                </div>
            </div>
        </div>
      )}

      {/* Level 2: Edit Sheet */}
      {activeModal === 'edit' && (
        <div className="fixed inset-0 z-[900] bg-[#111827]/60 backdrop-blur-md flex items-end justify-center animate-in fade-in duration-300">
            <div className="w-full max-w-lg h-[50vh] bg-white rounded-t-[20px] flex flex-col animate-in slide-in-from-bottom-full duration-300 shadow-2xl">
                {/* Drag Handle */}
                <div className="w-full h-8 flex items-center justify-center pt-2">
                    <div className="w-9 h-1 bg-[#E5E7EB] rounded-full"></div>
                </div>
                <div className="h-[56px] px-6 border-b flex items-center justify-between">
                    <button onClick={closeModals} className="text-sm font-medium text-[#9CA3AF]">取消</button>
                    <h3 className="text-base font-bold text-[#111827]">修改保障人数</h3>
                    <button onClick={closeModals} className="text-sm font-bold text-[#0066FF]">确定</button>
                </div>
                <div className="p-8 space-y-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest">当前预计参保人数</label>
                        <div className="h-[56px] bg-[#F5F7FA] rounded-xl flex items-center px-5 justify-between">
                            <span className="text-lg font-black text-[#111827]">128 人</span>
                            <div className="flex gap-4">
                               <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-[#9CA3AF]">-</button>
                               <button className="w-8 h-8 rounded-full bg-[#0066FF] flex items-center justify-center shadow-md text-white">+</button>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 bg-[#FFF7E6] rounded-2xl flex gap-3 items-start border border-[#FFE7BA]">
                        <HelpCircle size={18} className="text-[#FAAD14] shrink-0" />
                        <p className="text-[11px] text-[#D48806] leading-relaxed font-bold">
                            人数变动将实时影响预计充值总额。
                        </p>
                    </div>
                </div>
            </div>
        </div>
      )}

      {/* Level 3: Success Toast (Glass Style) */}
      {activeModal === 'success-toast' && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center pointer-events-none p-6">
            <div className="bg-[#111827]/90 backdrop-blur-xl rounded-2xl px-10 py-8 flex flex-col items-center gap-4 shadow-2xl animate-in zoom-in-90 fade-in duration-200">
                <div className="w-16 h-16 bg-[#00C853]/10 text-[#00C853] rounded-full flex items-center justify-center animate-bounce">
                    <CheckCircle2 size={40} />
                </div>
                <span className="font-bold text-white text-lg">保存成功</span>
                {setTimeout(closeModals, 2000) && null}
            </div>
        </div>
      )}

      {/* Level 3: Loading HUD */}
      {activeModal === 'loading-hud' && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-white/20 backdrop-blur-[2px]">
            <div className="bg-[#111827]/95 backdrop-blur-2xl rounded-[2.5rem] p-12 flex flex-col items-center gap-8 shadow-2xl animate-in fade-in duration-300">
                <Loader2 className="text-[#0066FF] animate-spin" size={56} strokeWidth={3} />
                <div className="text-center">
                    <p className="text-white font-bold text-lg transition-all duration-300">{loadingText}</p>
                    <p className="text-[9px] text-white/30 uppercase tracking-[0.3em] mt-3 font-black">Contract Generating</p>
                </div>
                <button onClick={closeModals} className="absolute bottom-6 text-[9px] text-white/20 underline font-black">MANUAL_DONE</button>
            </div>
        </div>
      )}

      {/* --- DESIGN CHECKLIST --- */}
      <section className="p-8 rounded-[2rem] border-2 border-dashed border-[#0066FF]/20 bg-[#F0F7FF]/30 space-y-6">
        <h4 className="font-bold text-lg text-[#111827] flex items-center gap-3">
            <Zap size={24} className="text-[#0066FF]" fill="currentColor" />
            设计交付检查清单 (验收标准)
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
                <h5 className="text-xs font-black text-[#0066FF] uppercase tracking-widest border-b pb-1">物理动效规范</h5>
                <ul className="space-y-2 text-xs text-[#4B5563] font-bold">
                    <li className="flex gap-2 items-start"><div className="w-1 h-1 bg-[#0066FF] rounded-full mt-1.5 shrink-0"></div>弹窗: scale(0.9) {'->'} 1.05 {'->'} 1.0</li>
                    <li className="flex gap-2 items-start"><div className="w-1 h-1 bg-[#0066FF] rounded-full mt-1.5 shrink-0"></div>抽屉: slide-up + 极速滑入 + 弹性减速</li>
                    <li className="flex gap-2 items-start"><div className="w-1 h-1 bg-[#0066FF] rounded-full mt-1.5 shrink-0"></div>吐司: y-axis offset +30px 顺滑浮现</li>
                </ul>
            </div>
            <div className="space-y-4">
                <h5 className="text-xs font-black text-[#0066FF] uppercase tracking-widest border-b pb-1">交互安全性</h5>
                <ul className="space-y-2 text-xs text-[#4B5563] font-bold">
                    <li className="flex gap-2 items-start"><div className="w-1 h-1 bg-[#0066FF] rounded-full mt-1.5 shrink-0"></div>防误触: 关键操作按钮前 0.5s 强制禁用</li>
                    <li className="flex gap-2 items-start"><div className="w-1 h-1 bg-[#0066FF] rounded-full mt-1.5 shrink-0"></div>触感反馈: 错误 Heavy, 成功 Light 震动</li>
                    <li className="flex gap-2 items-start"><div className="w-1 h-1 bg-[#0066FF] rounded-full mt-1.5 shrink-0"></div>信息补偿: 必须告知“为什么失败”及“怎么重试”</li>
                </ul>
            </div>
        </div>
      </section>

      <footer className="text-center py-6 border-t border-dashed border-[#E5E7EB]">
        <p className="text-[10px] text-[#9CA3AF] font-bold uppercase tracking-[0.2em]">
          CrewInsure Modal System v2.0 (Electric Blue)
        </p>
      </footer>
    </div>
  );
};

export default ModalSpecification;
