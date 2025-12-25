
import React, { useState, useRef } from 'react';
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
                <div className="w-32 h-32 bg-green-50 text-[#00B365] rounded-full flex items-center justify-center relative overflow-hidden">
                    <CheckCircle2 size={72} strokeWidth={2} />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 border border-gray-100">
                    <ShieldCheck className="text-[#004E92]" size={28} />
                </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 tracking-tight">支付成功！保障已即刻生效</h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-12 max-w-xs mx-auto">
                您的电子保单已同步发送至邮箱。<br/>
                剧组 128 位老师已处于全面保障中。
            </p>
            
            <div className="w-full space-y-4 max-w-sm px-4">
              <Button variant="highlight" size="full" icon={<Download size={18}/>}>下载电子保单</Button>
              <Button variant="secondary" size="full" icon={<Share2 size={18}/>} className="border-2 border-[#0052D9]">
                生成分享海报
              </Button>
            </div>
        </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-32">
      <div className="text-center px-4">
        <h2 className="text-2xl font-bold mb-2">投保确认单</h2>
        <p className="text-slate-500 text-sm italic">“数字化扁平报告，极致信息对比”</p>
      </div>

      {/* --- Digital Panel (Flat Design) --- */}
      <div className="max-w-sm mx-auto px-4">
        <div className={`border-2 border-slate-900 rounded-3xl overflow-hidden ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
            {/* Header: Solid Color Background */}
            <div className="p-6 bg-[#004E92] text-white">
                <div className="flex items-center gap-2 mb-2">
                    <Shield size={16} />
                    <span className="text-[10px] font-bold tracking-widest uppercase opacity-80">Official Insurance Report</span>
                </div>
                <h3 className="text-xl font-bold leading-tight">雇主责任险投保确认单</h3>
                <p className="text-[10px] mt-1 font-mono opacity-60">ID: CREW-2024-0899-A1</p>
            </div>

            {/* Breakdown Section */}
            <div className="p-6 space-y-6">
                <div className="space-y-4">
                    <div className="flex justify-between items-center border-b pb-2">
                        <span className="text-xs text-slate-400 font-bold">保障项目</span>
                        <span className="text-sm font-bold text-slate-800">《流浪地球3》制片组</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                        <span className="text-xs text-slate-400 font-bold">保障周期</span>
                        <span className="text-sm font-bold text-slate-800">2024.10.01 - 2025.01.01</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-xs text-slate-400 font-bold">被保人数</span>
                        <span className="text-sm font-bold text-slate-800">128 人</span>
                    </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl space-y-2">
                    <div className="flex justify-between items-center text-[10px] font-bold text-slate-400">
                        <span>保费总额计算</span>
                        <span>150 × 128</span>
                    </div>
                    <div className="flex justify-between items-baseline">
                        <span className="text-sm font-bold text-slate-800">应付总金额</span>
                        <span className="text-3xl font-bold text-[#D32F2F] font-mono tracking-tighter">¥19,200.00</span>
                    </div>
                </div>

                <div className="p-4 border-2 border-dashed border-gray-200 rounded-xl space-y-2">
                    <div className="flex items-center gap-1.5 text-slate-800">
                        <Info size={14} />
                        <span className="text-xs font-bold">特别告知：</span>
                    </div>
                    <p className="text-[10px] text-slate-500 leading-relaxed">
                        扩展承保24小时猝死及5米以上持证高空作业风险。支付完成后次日 00:00 生效。
                    </p>
                </div>

                {/* Signature: Flat Interaction */}
                <div 
                    onClick={() => setShowSignatureModal(true)}
                    className={`h-32 border-2 rounded-2xl flex flex-col items-center justify-center transition-all cursor-pointer ${
                        isSigned 
                        ? 'border-[#004E92] bg-blue-50/20' 
                        : 'border-gray-200 bg-gray-50'
                    }`}
                >
                    {isSigned ? (
                        <div className="flex flex-col items-center animate-in zoom-in-95 duration-500">
                            <span className="signature-text">张智勇</span>
                            <div className="flex items-center gap-1.5 mt-2">
                                <CheckCircle2 size={10} className="text-[#00B365]" />
                                <span className="text-[8px] text-[#00B365] font-bold uppercase tracking-widest">Digital E-Signature Verified</span>
                            </div>
                        </div>
                    ) : (
                        <>
                            <PenTool size={24} className="text-slate-300 mb-2" />
                            <span className="text-xs text-slate-400 font-bold">点击此处进行手写签名确认</span>
                        </>
                    )}
                </div>
            </div>
        </div>
      </div>

      {/* Control Area */}
      <div className="max-w-sm mx-auto px-6 space-y-6 pt-4">
        <div className="flex items-start gap-3">
            <button 
                onClick={() => setHasReadTerms(!hasReadTerms)}
                className={`mt-0.5 w-6 h-6 rounded border-2 flex-shrink-0 flex items-center justify-center transition-all ${
                    hasReadTerms ? 'bg-[#004E92] border-[#004E92]' : 'bg-white border-gray-200'
                }`}
            >
                {hasReadTerms && <CheckCircle2 size={16} className="text-white" strokeWidth={3} />}
            </button>
            <p className="text-[11px] text-slate-500 leading-relaxed">
                我已阅读并完全知晓 <span className="text-[#004E92] font-bold underline">《保险条款》</span> 及 <span className="text-[#004E92] font-bold underline">《投保须知》</span> 中的全部免责事项与理赔流程。
            </p>
        </div>

        <Button 
            variant="highlight" 
            size="full" 
            disabled={!isSigned || !hasReadTerms}
            className={`rounded-xl h-[60px] ${!isSigned || !hasReadTerms ? 'grayscale opacity-30' : ''}`}
            onClick={handlePay}
            icon={<Zap size={18} fill="currentColor" />}
        >
            确认并立即支付
        </Button>
        
        <div className="flex flex-col items-center gap-2 opacity-40">
            <div className="flex items-center gap-1.5 text-[9px] font-bold">
                <ShieldCheck size={14} className="text-[#00B365]" />
                <span>PICC人保财险承保 · 高对比度扁平化系统 v1.0</span>
            </div>
        </div>
      </div>

      {/* Signature Modal */}
      {showSignatureModal && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col animate-in slide-in-from-bottom-full duration-500">
            <div className="flex items-center justify-between p-6 border-b-2 border-black">
                <div className="flex flex-col">
                    <span className="text-lg font-bold uppercase">Digital Signature</span>
                    <span className="text-[10px] text-slate-400">请保持签名清晰、端正</span>
                </div>
                <button onClick={() => setShowSignatureModal(false)} className="p-2 bg-slate-100 rounded-full">
                    <X size={20}/>
                </button>
            </div>
            
            <div className="flex-1 bg-slate-50 p-6 flex items-center justify-center">
                <div className="w-full h-full bg-white border-4 border-black relative flex items-center justify-center">
                    <div className="absolute bottom-[30%] left-10 right-10 border-b-2 border-gray-100"></div>
                    <div className="signature-text opacity-5 scale-[3]">签名区域</div>
                </div>
            </div>

            <div className="p-8 grid grid-cols-2 gap-4 bg-white border-t-2 border-black">
                <Button variant="secondary" size="full" onClick={() => {}}>清除</Button>
                <Button variant="primary" size="full" onClick={handleSign}>确认签名</Button>
            </div>
        </div>
      )}
    </div>
  );
};

export default ConfirmationExperience;
