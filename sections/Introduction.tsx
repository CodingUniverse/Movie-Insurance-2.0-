
import React from 'react';
import { ShieldCheck, Zap, AlertCircle } from 'lucide-react';

const Introduction: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <section className="text-center py-6 px-4">
        <h2 className="text-3xl font-black text-[#0066FF] mb-4 tracking-tight">核心设计哲学 v2.0</h2>
        <p className="text-[#4B5563] text-lg leading-relaxed max-w-2xl mx-auto font-medium">
          针对剧组极端环境，按钮不再是简单的交互入口，而是业务流转的“安全闸门”。
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: '信任 (Trust)',
            desc: '通过通透的高亮蓝与明确的反馈，消除保险业务自带的心理隔阂。',
            icon: <ShieldCheck className="text-[#0066FF]" />,
            color: 'bg-[#F0F7FF] border-[#E5E7EB]'
          },
          {
            title: '高效 (Efficiency)',
            desc: '针对单手操作、户外强光等极端场景，确保核心路径零阻碍。',
            icon: <Zap className="text-[#FAAD14]" />,
            color: 'bg-[#FFF7E6] border-[#FFE7BA]'
          },
          {
            title: '防误触 (Prevention)',
            desc: '保险契约严谨，通过触觉与视觉双重确认，规避操作风险。',
            icon: <AlertCircle className="text-[#FF4D4F]" />,
            color: 'bg-[#FFF1F0] border-[#FFD6E7]'
          }
        ].map((item, idx) => (
          <div key={idx} className={`p-8 rounded-[2rem] border transition-all hover:-translate-y-1 ${item.color} flex flex-col items-center text-center space-y-4`}>
            <div className="p-4 bg-white rounded-2xl shadow-sm">
              {item.icon}
            </div>
            <h3 className="font-bold text-lg text-[#111827]">{item.title}</h3>
            <p className="text-sm text-[#4B5563] font-medium leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#0066FF] rounded-[2rem] p-10 text-white relative overflow-hidden shadow-[0_20px_50px_rgba(0,102,255,0.3)]">
        <div className="relative z-10 space-y-6">
          <h3 className="text-2xl font-black italic opacity-90 tracking-tight">"Design for the shoot, not for the desk."</h3>
          <p className="opacity-90 text-sm md:text-base leading-relaxed font-bold">
            剧组人员可能正处在：<br/>
            - 凌晨三点的荒野（夜间昏暗视角）<br/>
            - 正午的沙漠影棚（强光致盲干扰）<br/>
            - 一手对讲机，一手手机（单手盲区交互）<br/>
            <strong className="text-white opacity-100 mt-4 block text-lg underline decoration-4 underline-offset-8">我们的设计，必须足够醒目、足够大、足够可靠。</strong>
          </p>
        </div>
        <div className="absolute top-[-20px] right-[-20px] w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10px] left-[20%] w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>
      </div>
    </div>
  );
};

export default Introduction;
