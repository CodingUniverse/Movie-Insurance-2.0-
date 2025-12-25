
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
  LayoutGrid
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
      startDate: '2025-12-26 00:00:00',
      endDate: '2025-12-26 23:59:59',
      totalDays: 1,
      currentDay: 0,
      amount: 20,
      usedAmount: 0,
      pendingAudits: 0,
      insuredCount: 0,
      createdAt: '2025-12-25'
    },
    {
      id: 2,
      title: '小鹏汇天陆地航母工信部拍摄',
      plan: '方案A',
      startDate: '2025-12-25 00:00:00',
      endDate: '2025-12-25 23:59:59',
      totalDays: 1,
      currentDay: 1,
      amount: 20,
      usedAmount: 18,
      pendingAudits: 0,
      insuredCount: 9,
      createdAt: '2025-12-24'
    }
  ];

  return (
    <div className={`-mx-4 min-h-screen transition-colors ${isDarkMode ? 'bg-slate-900' : 'bg-[#F5F7FA]'}`}>
      {/* WeChat Style Navbar */}
      <div className={`px-4 py-3 flex items-center justify-between sticky top-0 z-50 transition-colors ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-b border-[#E5E7EB]'}`}>
        <ChevronLeft size={24} className={isDarkMode ? 'text-white' : 'text-[#111827]'} />
        <h2 className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-[#111827]'}`}>我的项目</h2>
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

      <div className="p-4 space-y-6 pb-32">
        {/* Search & Actions */}
        <div className="flex justify-between items-center px-1">
            <div className="flex items-center gap-2">
                <LayoutGrid size={20} className="text-[#0066FF]" />
                <h3 className={`text-xl font-black ${isDarkMode ? 'text-white' : 'text-[#111827]'}`}>项目列表</h3>
            </div>
            <button className="text-[#0066FF] text-sm font-black underline decoration-2 underline-offset-4 flex items-center gap-1">
                创建项目
            </button>
        </div>

        {/* Project Cards */}
        <div className="space-y-4">
          {projects.map(project => (
            <div 
              key={project.id}
              className={`rounded-[2rem] border transition-all ${
                isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-[#E5E7EB] shadow-sm'
              }`}
            >
              {/* Card Header */}
              <div className={`p-6 border-b border-dashed ${isDarkMode ? 'border-slate-700' : 'border-[#F0F0F0]'}`}>
                <div className="flex justify-between items-start">
                  <h4 className={`text-lg font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-[#111827]'}`}>
                    {project.title}
                  </h4>
                  <div className="bg-[#F0F7FF] text-[#0066FF] p-2 rounded-xl">
                    <ShieldCheck size={18} />
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-1 gap-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-[#9CA3AF]">保障方案：</span>
                    <span className="text-sm font-black text-[#0066FF] flex items-center">
                        {project.plan} <ChevronRight size={14} />
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-[#9CA3AF]">生效时间：</span>
                    <span className={`text-sm font-mono font-bold ${isDarkMode ? 'text-slate-300' : 'text-[#4B5563]'}`} style={{ fontFamily: 'DIN Alternate, sans-serif' }}>
                        {project.startDate}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-[#9CA3AF]">结束时间：</span>
                    <span className={`text-sm font-mono font-bold ${isDarkMode ? 'text-slate-300' : 'text-[#4B5563]'}`} style={{ fontFamily: 'DIN Alternate, sans-serif' }}>
                        {project.endDate}
                    </span>
                  </div>

                  <div className="pt-2 grid grid-cols-2 gap-4">
                    <div className={`p-4 rounded-2xl ${isDarkMode ? 'bg-slate-900/50' : 'bg-gray-50'}`}>
                        <p className="text-[10px] text-[#9CA3AF] font-black uppercase mb-1">合计天数</p>
                        <p className={`text-lg font-black ${isDarkMode ? 'text-white' : 'text-[#111827]'}`}>
                          <span style={{ fontFamily: 'DIN Alternate' }}>{project.totalDays}</span>
                          <span className="text-xs ml-1 opacity-60">天</span>
                          <span className="text-[10px] ml-2 text-[#9CA3AF] font-bold">(当前为第{project.currentDay}天)</span>
                        </p>
                    </div>
                    <div className={`p-4 rounded-2xl ${isDarkMode ? 'bg-slate-900/50' : 'bg-gray-50'}`}>
                        <p className="text-[10px] text-[#9CA3AF] font-black uppercase mb-1">支付金额</p>
                        <p className="text-lg font-black text-[#FF3B30]">
                          <span style={{ fontFamily: 'DIN Alternate' }}>{project.amount}</span>
                          <span className="text-[10px] ml-2 text-[#9CA3AF] font-bold">(已使用{project.usedAmount})</span>
                        </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <span className="text-[11px] font-bold text-[#9CA3AF]">待审核人数：</span>
                        <span className={`text-base font-black ${isDarkMode ? 'text-white' : 'text-[#111827]'}`}>
                            <span style={{ fontFamily: 'DIN Alternate' }}>{project.pendingAudits}</span> 人
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[11px] font-bold text-[#9CA3AF]">当前保障人数：</span>
                        <span className="text-base font-black text-[#00C853]">
                            <span style={{ fontFamily: 'DIN Alternate' }}>{project.insuredCount}</span> 人
                        </span>
                    </div>
                  </div>
                </div>

                {/* Footer Timestamp */}
                <div className="pt-4 flex justify-end">
                    <p className="text-[11px] text-[#D1D5DB] font-bold">
                        创建于 <span style={{ fontFamily: 'DIN Alternate' }}>{project.createdAt}</span>
                    </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Design System Summary Overlay */}
      <div className="p-8 border-t border-dashed border-[#E5E7EB] mt-12 bg-white/50">
        <h4 className="font-black text-sm text-[#0066FF] uppercase tracking-[0.2em] mb-4">项目列表交互规范</h4>
        <ul className="space-y-3 text-xs text-[#4B5563] font-bold leading-relaxed">
            <li className="flex gap-2 items-start">
                <div className="w-1.5 h-1.5 bg-[#0066FF] rounded-full mt-1.5 shrink-0"></div>
                <span>**数值无逗号**：支付金额 20,000 优化为 <span className="font-mono text-[#FF3B30] underline">20000</span> (DIN字体)，减少视觉噪音。</span>
            </li>
            <li className="flex gap-2 items-start">
                <div className="w-1.5 h-1.5 bg-[#0066FF] rounded-full mt-1.5 shrink-0"></div>
                <span>**卡片分级**：标题区使用粗体大号字，属性区使用 50% 灰色 Label + 100% 墨黑 Value。</span>
            </li>
            <li className="flex gap-2 items-start">
                <div className="w-1.5 h-1.5 bg-[#0066FF] rounded-full mt-1.5 shrink-0"></div>
                <span>**色彩语义**：金额采用“价格红”，保障人数采用“安全绿”，交互链接采用“高亮蓝”。</span>
            </li>
        </ul>
      </div>

      <footer className="text-center py-6">
        <p className="text-[10px] text-[#9CA3AF] font-bold uppercase tracking-[0.2em]">
          Cinema Project Dashboard v2.0
        </p>
      </footer>
    </div>
  );
};

export default ProjectListExample;
