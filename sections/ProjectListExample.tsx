
import React, { useState } from 'react';
import { 
  ChevronLeft, 
  MoreHorizontal, 
  Search, 
  Plus, 
  ChevronRight, 
  Calendar, 
  CreditCard, 
  Users, 
  ShieldCheck,
  LayoutGrid,
  Clock,
  ArrowRight
} from 'lucide-react';

interface Props {
  isDarkMode: boolean;
}

const ProjectListExample: React.FC<Props> = ({ isDarkMode }) => {
  const [searchValue, setSearchValue] = useState('');

  const projects = [
    {
      id: 1,
      title: '测试20251225',
      plan: '方案A',
      startDate: '2025.12.26 00:00',
      endDate: '2025.12.26 23:59',
      totalDays: 1,
      currentDay: 0,
      amount: 20,
      usedAmount: 0,
      pendingAudits: 0,
      insuredCount: 0,
      createdAt: '2025.12.25'
    },
    {
      id: 2,
      title: '小鹏汇天陆地航母工信部拍摄',
      plan: '方案A',
      startDate: '2025.12.25 00:00',
      endDate: '2025.12.25 23:59',
      totalDays: 1,
      currentDay: 1,
      amount: 20,
      usedAmount: 18,
      pendingAudits: 0,
      insuredCount: 9,
      createdAt: '2025.12.24'
    }
  ];

  const numericStyle = { 
    fontFamily: 'DIN Alternate, sans-serif', 
    fontVariantNumeric: 'tabular-nums' 
  };

  return (
    <div className={`-mx-4 min-h-screen transition-colors ${isDarkMode ? 'bg-slate-900' : 'bg-[#F5F7FA]'}`}>
      {/* 1. WeChat Style Header */}
      <div className={`px-4 py-3 flex items-center justify-between sticky top-0 z-50 transition-colors ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-b border-[#E5E7EB]'}`}>
        <ChevronLeft size={24} className={isDarkMode ? 'text-white' : 'text-[#111827]'} />
        <h2 className={`font-black text-lg ${isDarkMode ? 'text-white' : 'text-[#111827]'}`}>我的项目</h2>
        <div className="flex items-center gap-2">
           <div className={`flex items-center rounded-full px-3 py-1 gap-3 ${isDarkMode ? 'bg-slate-700' : 'bg-[#F3F4F6]'}`}>
              <MoreHorizontal size={20} className={isDarkMode ? 'text-white' : 'text-[#111827]'} />
              <div className="w-[1px] h-4 bg-gray-300"></div>
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${isDarkMode ? 'border-white' : 'border-[#111827]'}`}>
                 <div className={`w-1.5 h-1.5 rounded-full ${isDarkMode ? 'bg-white' : 'bg-[#111827]'}`}></div>
              </div>
           </div>
        </div>
      </div>

      <div className="p-4 space-y-4 pb-32">
        {/* 2. Page Header with Action */}
        <div className="flex justify-between items-end px-1 pb-2">
            <div>
                <p className="text-[10px] font-black text-[#0066FF] uppercase tracking-[0.2em] mb-1">Total {projects.length} Projects</p>
                <h3 className={`text-2xl font-black ${isDarkMode ? 'text-white' : 'text-[#111827]'}`}>项目看板</h3>
            </div>
            <button className="bg-[#0066FF] text-white p-3 rounded-2xl shadow-lg shadow-blue-200">
                <Plus size={20} strokeWidth={3} />
            </button>
        </div>

        {/* 3. Optimized Project Cards */}
        <div className="space-y-3">
          {projects.map(project => (
            <div 
              key={project.id}
              className={`rounded-[1.5rem] border overflow-hidden active:scale-[0.98] transition-all duration-200 ${
                isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-[#E5E7EB] shadow-sm'
              }`}
            >
              <div className="p-5">
                {/* Header Row: Title & Tag */}
                <div className="flex justify-between items-start mb-4">
                  <div className="space-y-1 max-w-[70%]">
                    <h4 className={`text-base font-black truncate ${isDarkMode ? 'text-white' : 'text-[#111827]'}`}>
                        {project.title}
                    </h4>
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black text-[#0066FF] bg-[#F0F7FF] px-1.5 py-0.5 rounded-sm uppercase">{project.plan}</span>
                        <span className={`text-[10px] font-bold ${isDarkMode ? 'text-slate-400' : 'text-[#9CA3AF]'}`}>创建于 {project.createdAt}</span>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center text-[#9CA3AF]">
                    <ChevronRight size={18} />
                  </div>
                </div>

                {/* Metrics Grid: 3 Columns for High Density */}
                <div className={`grid grid-cols-3 gap-2 p-3 rounded-2xl mb-4 ${isDarkMode ? 'bg-slate-900/50' : 'bg-[#F8FAFC]'}`}>
                    <div className="text-center border-r border-gray-100">
                        <p className="text-[9px] font-black text-[#9CA3AF] uppercase mb-1">保障中</p>
                        <p className="text-lg font-black text-[#00C853]" style={numericStyle}>{project.insuredCount}<span className="text-[10px] ml-0.5">人</span></p>
                    </div>
                    <div className="text-center border-r border-gray-100">
                        <p className="text-[9px] font-black text-[#9CA3AF] uppercase mb-1">项目进度</p>
                        <p className={`text-lg font-black ${isDarkMode ? 'text-white' : 'text-[#111827]'}`} style={numericStyle}>
                            {project.currentDay}<span className="text-[10px] text-[#9CA3AF] font-bold mx-0.5">/</span>{project.totalDays}<span className="text-[10px] ml-0.5">天</span>
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="text-[9px] font-black text-[#9CA3AF] uppercase mb-1">实付金额</p>
                        <p className="text-lg font-black text-[#FF3B30]" style={numericStyle}>{project.amount}</p>
                    </div>
                </div>

                {/* Date Range: Compact Linear Style */}
                <div className="space-y-2">
                    <div className="flex items-center gap-3 text-[11px] font-bold">
                        <div className="flex items-center gap-1.5 text-[#9CA3AF] shrink-0">
                            <Clock size={12} />
                            <span>保障期限</span>
                        </div>
                        <div className={`flex items-center gap-1.5 ${isDarkMode ? 'text-slate-300' : 'text-[#4B5563]'}`} style={numericStyle}>
                            <span>{project.startDate}</span>
                            <ArrowRight size={10} className="text-gray-300" />
                            <span>{project.endDate}</span>
                        </div>
                    </div>
                    
                    {/* Secondary Metrics */}
                    {project.pendingAudits > 0 && (
                        <div className="flex items-center gap-2 text-[10px] font-black text-[#FAAD14] bg-[#FFFBE6] px-2 py-0.5 rounded-sm w-fit">
                            <Clock size={10} />
                            <span>有 {project.pendingAudits} 名人员等待审核中</span>
                        </div>
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Optimized Design System Summary Footer */}
      <div className="p-8 border-t border-dashed border-[#E5E7EB] mt-8 bg-white/40">
        <div className="flex items-center gap-2 mb-4">
            <LayoutGrid size={16} className="text-[#0066FF]" />
            <h4 className="font-black text-xs text-[#0066FF] uppercase tracking-[0.2em]">列表密度规范 v2.1</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
                { label: '指标三列化', desc: '将核心数字横向并列展示，单张卡片高度降低约 35%。' },
                { label: 'DIN 字体强制', desc: '所有金额、人数、日期强制使用 tabular-nums 属性，确保纵向对齐感。' },
                { label: '移除背景嵌套', desc: '减少嵌套的色块背景，利用边距和中性分割线建立视觉层级。' },
                { label: '日期扁平化', desc: '去除秒数，采用点号分隔，缩减水平宽度，适配小屏设备。' }
            ].map((spec, i) => (
                <div key={i} className="space-y-1">
                    <p className="text-[11px] font-black text-[#111827]">{spec.label}</p>
                    <p className="text-[10px] text-[#9CA3AF] font-bold leading-relaxed">{spec.desc}</p>
                </div>
            ))}
        </div>
      </div>

      <footer className="text-center py-10 opacity-30 grayscale">
        <p className="text-[10px] text-[#9CA3AF] font-bold uppercase tracking-[0.2em]">
          Cinema Project Dashboard v2.1 (Optimized)
        </p>
      </footer>
    </div>
  );
};

export default ProjectListExample;
