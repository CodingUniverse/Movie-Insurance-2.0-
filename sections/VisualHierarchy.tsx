
import React, { useState } from 'react';
import Button from '../components/Button';
import { Lock, FileText, ChevronRight, Zap } from 'lucide-react';

interface Props {
  isDarkMode: boolean;
}

const VisualHierarchy: React.FC<Props> = ({ isDarkMode }) => {
  const [btnLoading, setBtnLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleLevel4Click = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      <div className="text-center px-4">
        <h2 className="text-3xl font-black mb-2 tracking-tight text-[#111827]">视觉等级体系 (Hierarchy)</h2>
        <p className="text-[#4B5563] text-sm font-medium italic">通过色彩权重引导用户心智，降低剧组现场决策负担。</p>
      </div>

      {/* Hierarchy Levels */}
      <div className="grid grid-cols-1 gap-8">
        {/* Level 1 */}
        <div className={`p-8 rounded-[2rem] border transition-colors ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-[#E5E7EB] shadow-sm'}`}>
          <div className="flex justify-between items-start mb-6">
            <div className="space-y-1">
              <span className="px-2 py-1 bg-[#F0F7FF] text-[#0066FF] text-[10px] font-black rounded uppercase tracking-wider">Level 1: 核心</span>
              <h3 className="font-bold text-xl text-[#111827]">核心行动点 (Primary)</h3>
            </div>
            <div className="text-[10px] font-mono font-bold text-[#9CA3AF]">H: 56px | RADIUS: 16px</div>
          </div>
          <p className="text-sm text-[#4B5563] mb-8 font-medium">必须点击的关键路径：支付、确认、提交申请。</p>
          <div className="flex flex-col gap-4">
            <Button 
                variant="primary" 
                size="full" 
                className="rounded-2xl"
                loading={btnLoading} 
                onClick={() => { setBtnLoading(true); setTimeout(() => setBtnLoading(false), 2000); }}
                icon={<Lock size={18} />}
            >
              确认并支付保费
            </Button>
          </div>
        </div>

        {/* Level 2 & 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`p-8 rounded-[2rem] border transition-colors ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-[#E5E7EB] shadow-sm'}`}>
            <span className="px-2 py-1 bg-sky-100 text-sky-700 text-[10px] font-black rounded uppercase tracking-widest">Level 2</span>
            <h3 className="font-bold text-lg mt-3 mb-2 text-[#111827]">次级行动点</h3>
            <p className="text-xs text-[#4B5563] mb-6 font-medium">修改资料、查看明细、保存草稿。</p>
            <Button variant="secondary" size="full" className="rounded-xl h-12">保存当前进度</Button>
          </div>
          <div className={`p-8 rounded-[2rem] border transition-colors ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-[#E5E7EB] shadow-sm'}`}>
            <span className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-black rounded uppercase tracking-widest">Level 3</span>
            <h3 className="font-bold text-lg mt-3 mb-2 text-[#111827]">辅助/幽灵按钮</h3>
            <p className="text-xs text-[#4B5563] mb-6 font-medium">阅读须知、跳过、返回首页。</p>
            <div className="flex flex-col gap-3">
              <button className="text-[#0066FF] text-sm font-bold flex items-center justify-center gap-1 hover:underline underline-offset-4">
                阅读《剧组人员投保须知》 <ChevronRight size={14} />
              </button>
              <Button variant="ghost" size="small" className="text-xs font-bold">暂不投保，跳过此步</Button>
            </div>
          </div>
        </div>

        {/* Level 4: Interactive Disabled State */}
        <div className={`p-8 rounded-[2rem] border transition-colors ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-[#E5E7EB] shadow-sm'}`}>
          <div className="flex items-center justify-between mb-6">
             <div className="flex flex-col gap-1">
              <span className="px-2 py-1 bg-[#FFF1F0] text-[#FF4D4F] w-fit text-[10px] font-black rounded uppercase tracking-widest">Level 4: 防错</span>
              <h3 className="font-bold text-xl text-[#111827]">智能禁用态 (Soft-Disabled)</h3>
             </div>
             <div className="w-14 h-14 bg-[#F0F7FF] rounded-2xl flex items-center justify-center text-[#0066FF] animate-pulse">
                <Zap size={24} fill="currentColor" />
             </div>
          </div>
          <p className="text-sm text-[#4B5563] mb-8 font-medium leading-relaxed">
            高级交互策略：不要使用完全置灰的“死按钮”。保持 40% 透明度并允许点击，点击后通过 Toast 反馈告知缺少的步骤。
          </p>
          <div className="relative">
            <Button 
                variant="primary" 
                size="full" 
                className="opacity-30 rounded-2xl grayscale"
                onClick={handleLevel4Click}
            >
              下一步：名单导入
            </Button>
            
            {showToast && (
              <div className="absolute top-[-60px] left-1/2 -translate-x-1/2 bg-[#111827]/90 backdrop-blur-md text-white text-xs font-bold px-6 py-3 rounded-full shadow-2xl animate-in slide-in-from-bottom-4 whitespace-nowrap border border-white/10">
                请先完善“公司证件号码” 👆
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualHierarchy;
