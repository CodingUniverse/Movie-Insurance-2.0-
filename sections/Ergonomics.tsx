
import React from 'react';
import { MousePointer2, Smartphone, Zap } from 'lucide-react';

const Ergonomics: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      <section>
        <div className="flex items-center gap-3 mb-4 border-l-4 border-[#0066FF] pl-4">
          <Smartphone className="text-[#0066FF]" />
          <h2 className="text-2xl font-black text-[#111827]">拇指热区原则 (The Thumb Zone)</h2>
        </div>
        <p className="text-[#4B5563] mb-8 leading-relaxed font-medium">
          针对 Max/Ultra 等大屏手机，核心操作必须下沉至底部，确保单手可及性。
        </p>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          {/* Mock Phone View */}
          <div className="relative w-[300px] h-[600px] bg-slate-900 rounded-[3.5rem] p-3 border-[8px] border-slate-800 shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-20"></div>
            <div className="w-full h-full bg-white rounded-[2.8rem] overflow-hidden relative">
              {/* Hot zone visualization */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0066FF]/10 via-blue-50/5 to-transparent"></div>
              
              {/* Content area */}
              <div className="p-6 space-y-4">
                <div className="h-4 w-32 bg-gray-100 rounded-full"></div>
                <div className="h-28 w-full bg-gray-50 rounded-[1.5rem] border border-dashed border-gray-200"></div>
                <div className="h-4 w-24 bg-gray-100 rounded-full"></div>
                <div className="h-24 w-full bg-gray-50 rounded-[1.5rem] border border-dashed border-gray-200"></div>
              </div>

              {/* Thumb reachable area overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-[65%] bg-[#0066FF]/5 rounded-t-[50%] border-t-2 border-[#0066FF]/20 flex items-start justify-center pt-10">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#0066FF]/20 animate-ping absolute"></div>
                  <MousePointer2 className="text-[#0066FF] relative z-10" />
                  <span className="text-[10px] font-black text-[#0066FF] mt-3 uppercase tracking-widest">Safe Touch Zone</span>
                </div>
              </div>

              {/* Sticky Bottom Bar Mock */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-white/80 backdrop-blur-md border-t p-4 flex gap-3 items-center">
                <div className="flex flex-col flex-1 min-w-0">
                    <span className="text-[9px] text-gray-400 font-bold uppercase">预估保费</span>
                    <span className="text-[#0066FF] font-black text-lg truncate">¥5,280.00</span>
                </div>
                <div className="bg-[#0066FF] h-12 w-32 rounded-2xl flex items-center justify-center text-white text-xs font-black shadow-[0_8px_16px_rgba(0,102,255,0.3)] active:scale-95 transition-all">
                  立即投保
                </div>
              </div>
              {/* Home Indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gray-200 rounded-full"></div>
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <div className="bg-white p-8 rounded-[2rem] border border-[#E5E7EB] shadow-sm space-y-3">
              <h4 className="font-bold text-[#111827] flex items-center gap-2">
                <div className="w-1.5 h-6 bg-[#0066FF] rounded-full"></div> 1. 底部悬浮策略
              </h4>
              <p className="text-sm text-[#4B5563] font-medium leading-relaxed">强行动点必须固定在底部 15% 的高频操作区，对抗单手操作时的重心不稳。</p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] border border-[#E5E7EB] shadow-sm space-y-3">
              <h4 className="font-bold text-[#111827] flex items-center gap-2">
                <div className="w-1.5 h-6 bg-[#FAAD14] rounded-full"></div> 2. 触控热区外扩
              </h4>
              <p className="text-sm text-[#4B5563] font-medium leading-relaxed">视觉高度 48px，但响应区域 60px。针对剧组颠簸、走动环境下的精确度补偿。</p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] border border-[#E5E7EB] shadow-sm space-y-3">
              <h4 className="font-bold text-[#111827] flex items-center gap-2">
                <div className="w-1.5 h-6 bg-[#00C853] rounded-full"></div> 3. 黄金比例布局
              </h4>
              <p className="text-sm text-[#4B5563] font-medium leading-relaxed">单一流程使用 100% 宽度按钮；复合场景采用 4:6 分布，将业务权重引导至右手区。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ergonomics;
