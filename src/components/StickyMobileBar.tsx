import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

interface StickyMobileBarProps {
  onOpenBooking: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="md:hidden fixed bottom-3 inset-x-3 z-40">
      <div className="bg-[#0B2347]/95 backdrop-blur-md rounded-2xl p-2 shadow-2xl border border-slate-700/80 flex items-center justify-between gap-2">
        {/* Call Button */}
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex-1 bg-white/10 hover:bg-white/20 active:bg-white/30 text-white py-2.5 px-2 rounded-xl text-center flex flex-col items-center justify-center gap-0.5 transition-colors"
        >
          <Phone className="w-4 h-4 text-[#12A9E8]" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da850] text-white py-2.5 px-2 rounded-xl text-center flex flex-col items-center justify-center gap-0.5 shadow-sm transition-colors"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
        </a>

        {/* Book Button */}
        <button
          onClick={onOpenBooking}
          className="flex-[2] bg-[#2E8B20] hover:bg-[#27781B] active:bg-[#226817] text-white py-2.5 px-3 rounded-xl text-center flex items-center justify-center gap-1.5 shadow-md transition-colors"
        >
          <Calendar className="w-4 h-4" />
          <span className="text-xs font-black uppercase tracking-wider whitespace-nowrap">
            Book Detail
          </span>
        </button>
      </div>
    </div>
  );
};
