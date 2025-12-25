
import React, { useState } from 'react';
import { 
  ShieldCheck, 
  PenTool, 
  CheckCircle2, 
  Download, 
  Share2, 
  FileText, 
  X,
  Zap,
  Info,
  Shield,
  Layout
} from 'lucide-react';
import Button from '../components/Button';

interface Props {
  isDarkMode: boolean;
}

const ConfirmationExperience: React.FC<Props> = ({ isDarkMode }) => {
  const [isSigned, setIsSigned] = useState(false);
  const [hasReadTerms, setHasReadTerms] = useState(false);
  const [showSignatureModal, setShowSignatureModal] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  const handleSign = () => {
    setIsSigned(true);
    setShowSignatureModal(false);
  };

  const handlePay = () => {
    if (isSigned && hasReadTerms) {
      setIsPaid(true);
    }
  };

  if (isPaid) {
    return (
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center animate-in zoom-in-95 duration-500 min-h-[600px]">
            <div className="relative mb-8">
                <div className="w-32 h-32 bg-[#F0F7FF] text-[#0066FF] rounded-full flex items-center justify-center relative overflow-hidden">
                    <CheckCircle2 size={72} strokeWidth={2} />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 border border-[#E5E7EB] shadow-lg">
                    <ShieldCheck className="text-[#00C853]" size={28} />
                </div>
            </div>
            <h3 className="text-2xl font-black mb-3 tracking-tight text-[#111827]">支付成功！保障已生效</h3>
            <p className="text-sm text-[#4B5563] leading-relaxed mb-12 max-w-xs mx-auto font-medium">
                您的电子保单已同步发送至邮箱。<br/>
                剧组 128 位人员已处于全面保障中。
            </p>
            
            <div className="w-full space-y-4 max-w-sm px-4">
              <Button variant="highlight" size="full" className="rounded-2xl" icon={<Download size={18}/>}>下载电子保单</Button>
              <Button variant="secondary" size="full" icon={<Share2 size={18}/>} className="border-2 border-[#0066FF] rounded-2xl">
                生成分享海报
              </Button>
            </div>
        </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-32">
      <div className="text-center px-4">
        <h2 className="text-3xl font-black mb-2 tracking-tight text-[#111827]">投保确认单</h2>
        <p className="text-[#4B5563] text-sm italic font-medium">“数字化扁平报告，极致信息对比”</p>
      </div>

      {/* --- Digital Panel (Flat Design) --- */}
      <div className="max-w-sm mx-auto px-4">
        <div className={`border-2 border-[#111827] rounded-[2rem] overflow-hidden ${isDarkMode ? 'bg-slate-800' : 'bg-white shadow-2xl'}`}>
            {/* Header: Electric Blue */}
            <div className="p-8 bg-[#0066FF] text-white">
                <div className="flex items-center gap-2 mb-3">
                    <Shield size={16} fill="white" />
                    <span className="text-[10px] font-black tracking-[0.2em] uppercase opacity-80">Official Report</span>
                </div>
                <h3 className="text-2xl font-black leading-tight tracking-tight">雇主责任险确认单</h3>
                <p className="text-[10px] mt-2 font-mono font-bold opacity-60">ID: CREW-2025-01-A128</p>
            </div>

            {/* Breakdown Section */}
            <div className="p-8 space-y-8">
                <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-[#E5E7EB] pb-3">
                        <span className="text-xs text-[#9CA3AF] font-bold">保障项目</span>
                        <span className="text-sm font-black text-[#111827]">《流浪地球3》制片组</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-[#E5E7EB] pb-3">
                        <span className="text-xs text-[#9CA3AF] font-bold">保障周期</span>
                        <span className="text-sm font-black text-[#111827]">2025.10.01 - 2026.01.01</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-xs text-[#9CA3AF] font-bold">被保人数</span>
                        <span className="text-sm font-black text-[#111827]">128 人</span>
                    </div>
                </div>

                <div className="p-6 bg-[#F5F7FA] rounded-2xl space-y-2 border border-[#E5E7EB]">
                    <div className="flex justify-between items-center text-[10px] font-black text-[#9CA3AF] uppercase">
                        <span>保费总额计算</span>
                        <span>150.00 × 128</span>
                    </div>
                    <div className="flex justify-between items-baseline">
                        <span className="text-sm font-black text-[#111827]">应付总金额</span>
                        <span className="text-3xl font-black text-[#FF3B30] tracking-tighter" style={{fontFamily: 'DIN Alternate, sans-serif'}}>¥19,200.00</span>
                    </div>
                </div>

                <div className="p-5 border-2 border-dashed border-[#E5E7EB] rounded-2xl flex gap-3 items-start bg-[#FFF7E6]/30">
                    <Info size={16} className="text-[#FAAD14] shrink-0 mt-0.5" />
                    <p className="text-[11px] text-[#4B5563] leading-relaxed font-medium">
                        扩展承保24小时猝死及5米以上持证高空作业风险。支付完成后次日生效。
                    </p>
                </div>

                {/* Signature: v2.0 Style */}
                <div 
                    onClick={() => setShowSignatureModal(true)}
                    className={`h-36 border-2 rounded-[1.5rem] flex flex-col items-center justify-center transition-all cursor-pointer ${
                        isSigned 
                        ? 'border-[#0066FF] bg-[#F0F7FF]/30' 
                        : 'border-[#E5E7EB] bg-[#F5F7FA]'
                    }`}
                >
                    {isSigned ? (
                        <div className="flex flex-col items-center animate-in zoom-in-95 duration-500">
                            <span className="signature-text text-4xl">张智勇</span>
                            <div className="flex items-center gap-1.5 mt-3">
                                <CheckCircle2 size={12} className="text-[#00C853]" />
                                <span className="text-[9px] text-[#00C853] font-black uppercase tracking-widest">Digital E-Signature</span>
                            </div>
                        </div>
                    ) : (
                        <>
                            <PenTool size={28} className="text-[#D1D5DB] mb-3" />
                            <span className="text-xs text-[#9CA3AF] font-bold">点击此处进行手写签名确认</span>
                        </>
                    )}
                </div>
            </div>
        </div>
      </div>

      {/* Control Area */}
      <div className="max-w-sm mx-auto px-6 space-y-6 pt-4">
        <div className="flex items-start gap-4">
            <button 
                onClick={() => setHasReadTerms(!hasReadTerms)}
                className={`mt-1 w-7 h-7 rounded-xl border-2 flex-shrink-0 flex items-center justify-center transition-all ${
                    hasReadTerms ? 'bg-[#0066FF] border-[#0066FF]' : 'bg-white border-[#E5E7EB]'
                }`}
            >
                {hasReadTerms && <CheckCircle2 size={18} className="text-white" strokeWidth={3} />}
            </button>
            <p className="text-[12px] text-[#4B5563] leading-relaxed font-medium">
                我已阅读并完全知晓 <span className="text-[#0066FF] font-black underline underline-offset-2">《保险条款》</span> 及 <span className="text-[#0066FF] font-black underline underline-offset-2">《投保须知》</span> 中的全部免责事项。
            </p>
        </div>

        <Button 
            variant="primary" 
            size="full" 
            disabled={!isSigned || !hasReadTerms}
            className={`rounded-2xl h-[64px] text-lg shadow-[0_12px_24px_rgba(0,102,255,0.3)] ${!isSigned || !hasReadTerms ? 'grayscale opacity-30' : ''}`}
            onClick={handlePay}
            icon={<Zap size={20} fill="white" />}
        >
            确认并立即支付
        </Button>
        
        <div className="flex flex-col items-center gap-2 opacity-40">
            <div className="flex items-center gap-1.5 text-[10px] font-black text-[#9CA3AF] uppercase tracking-widest">
                <ShieldCheck size={14} className="text-[#00C853]" />
                <span>PICC 承保 · 高压环境可靠性验证</span>
            </div>
        </div>
      </div>

      {/* Signature Modal */}
      {showSignatureModal && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col animate-in slide-in-from-bottom-full duration-500">
            <div className="flex items-center justify-between p-8 border-b-2 border-[#111827]">
                <div className="flex flex-col">
                    <span className="text-xl font-black uppercase text-[#111827]">Digital Signature</span>
                    <span className="text-[11px] text-[#9CA3AF] font-bold">请保持签名清晰、端正</span>
                </div>
                <button onClick={() => setShowSignatureModal(false)} className="p-3 bg-[#F5F7FA] rounded-full text-[#111827]">
                    <X size={24}/>
                </button>
            </div>
            
            <div className="flex-1 bg-[#F5F7FA] p-8 flex items-center justify-center">
                <div className="w-full h-full bg-white border-4 border-[#111827] rounded-[2rem] relative flex items-center justify-center shadow-inner overflow-hidden">
                    <div className="absolute bottom-[35%] left-10 right-10 border-b-2 border-[#F5F7FA]"></div>
                    <div className="signature-text opacity-5 scale-[4]">签名区域</div>
                </div>
            </div>

            <div className="p-8 pb-12 grid grid-cols-2 gap-4 bg-white border-t border-[#E5E7EB]">
                <Button variant="secondary" className="rounded-2xl h-14" size="full" onClick={() => {}}>清除</Button>
                <Button variant="primary" className="rounded-2xl h-14" size="full" onClick={handleSign}>确认签名</Button>
            </div>
        </div>
      )}
    </div>
  );
};

export default ConfirmationExperience;
