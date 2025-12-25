
import React, { useState } from 'react';
import { ChevronLeft, MoreHorizontal, ShieldCheck, Check, Building, Camera, Zap, Info, Headphones, Users } from 'lucide-react';
import Button from '../components/Button';

interface Props {
  isDarkMode: boolean;
}

const ProjectOptimizedExample: React.FC<Props> = ({ isDarkMode }) => {
  const [selectedPlanId, setSelectedPlanId] = useState('B');
  const [personCount, setPersonCount] = useState(10);

  const plans = [
    { id: 'A', name: '经济方案', limit: '10万', price: 2 },
    { id: 'B', name: '标准方案', limit: '50万', price: 10, isHot: true },
    { id: 'C', name: '尊享方案', limit: '100万', price: 20 },
  ];

  return (
    <div className="-mx-4 min-h-screen pb-40 bg-white">
      {/* Nav */}
      <div className="px-4 py-4 flex items-center justify-between border-b-4 border-black bg-white sticky top-0 z-50">
        <div className="flex items-center gap-3">
            <ChevronLeft size={28} strokeWidth={3} />
            <h2 className="font-black text-xl tracking-tight uppercase">New Project</h2>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 bg-[#00A34D] text-white">
            <ShieldCheck size={16} strokeWidth={3} />
            <span className="text-[10px] font-black uppercase tracking-widest">Verified</span>
        </div>
      </div>

      <div className="p-6 space-y-10">
        {/* Step 1: Product Selection */}
        <section className="space-y-4">
            <p className="text-[10px] font-black text-[#0052D9] uppercase tracking-[0.2em] border-l-4 border-[#0052D9] pl-2">01. Benefit Selection</p>
            <div className="space-y-3">
                {plans.map(plan => (
                    <div 
                        key={plan.id}
                        onClick={() => setSelectedPlanId(plan.id)}
                        className={`p-5 border-4 transition-all flex items-center justify-between cursor-pointer ${
                            selectedPlanId === plan.id 
                            ? 'border-[#0052D9] bg-[#F0F5FF]' 
                            : 'border-black bg-white'
                        }`}
                    >
                        <div className="flex items-center gap-4">
                            <div className={`w-6 h-6 border-4 flex items-center justify-center ${selectedPlanId === plan.id ? 'border-[#0052D9] bg-[#0052D9]' : 'border-black'}`}>
                                {selectedPlanId === plan.id && <Check size={14} className="text-white" strokeWidth={5} />}
                            </div>
                            <div>
                                <h4 className="font-black text-base">{plan.name} ({plan.limit})</h4>
                                {plan.isHot && <span className="text-[9px] font-black text-[#0052D9] uppercase tracking-widest underline underline-offset-2">Highly Recommended</span>}
                            </div>
                        </div>
                        <div className="text-right">
                            <p className={`text-2xl font-black ${selectedPlanId === plan.id ? 'text-[#0052D9]' : 'text-black'}`}>¥{plan.price}</p>
                            <p className="text-[9px] font-bold text-[#4D4D4D]">/P/D</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Step 2: Policyholder Form */}
        <section className="space-y-4">
            <div className="flex justify-between items-center">
                <p className="text-[10px] font-black text-[#0052D9] uppercase tracking-[0.2em] border-l-4 border-[#0052D9] pl-2">02. Policyholder Info</p>
                <button className="flex items-center gap-1 px-3 py-1 bg-black text-white text-[9px] font-black uppercase">
                    <Building size={12} />
                    Select History
                </button>
            </div>

            <div className="border-4 border-black p-6 space-y-8 bg-white">
                <div className="relative group">
                    <label className="text-[10px] font-black text-[#4D4D4D] uppercase block mb-1">Company Name</label>
                    <div className="flex items-center gap-3">
                        <input 
                            type="text" 
                            placeholder="Type to search..."
                            className="flex-1 bg-transparent border-none outline-none text-lg font-black text-black placeholder:text-gray-100"
                        />
                        <button className="w-10 h-10 bg-[#0052D9] text-white flex items-center justify-center">
                            <Camera size={20} strokeWidth={3} />
                        </button>
                    </div>
                    <div className="h-1 bg-black w-full mt-2"></div>
                </div>

                <div className="relative">
                    <label className="text-[10px] font-black text-[#4D4D4D] uppercase block mb-4">Insured Person Count</label>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6">
                            <button 
                                onClick={() => setPersonCount(Math.max(1, personCount - 1))}
                                className="w-12 h-12 border-4 border-black font-black text-2xl flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                            >-</button>
                            <span className="text-4xl font-black font-mono">{personCount}</span>
                            <button 
                                onClick={() => setPersonCount(personCount + 1)}
                                className="w-12 h-12 bg-black text-white font-black text-2xl flex items-center justify-center"
                            >+</button>
                        </div>
                        <div className="hidden md:flex items-center gap-2 text-[10px] font-black text-[#00A34D]">
                            <Users size={16} />
                            MEDIUM CREW
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-4 bg-black text-white flex gap-4">
                <Info size={24} className="text-[#0052D9] shrink-0" strokeWidth={3} />
                <p className="text-[10px] font-bold leading-relaxed opacity-80 uppercase tracking-wider">
                    Next step: Import personnel list. Support Excel/WeChat file detection for maximum efficiency.
                </p>
            </div>
        </section>
      </div>

      {/* Floating Action Console */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-6 border-t-4 border-black bg-white flex items-center justify-between gap-6">
        <div className="flex flex-col">
            <span className="text-[9px] font-black text-white bg-[#D32F2F] px-2 py-0.5 w-fit uppercase tracking-widest mb-1">Estimated Total</span>
            <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-[#D32F2F] tracking-tighter">¥{(10 * personCount).toFixed(2)}</span>
                <span className="text-[11px] font-black text-[#4D4D4D]">/D</span>
            </div>
        </div>
        
        <Button 
            variant="primary" 
            size="full" 
            className="flex-1 h-[72px] text-xl uppercase tracking-tighter"
        >
            Confirm & Pay
        </Button>
      </div>
    </div>
  );
};

export default ProjectOptimizedExample;
