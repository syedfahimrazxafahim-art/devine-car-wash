import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare, Phone, Sparkles } from 'lucide-react';
import { FAQS, BUSINESS_INFO } from '../data/mockData';

interface FaqViewProps {
  onOpenBooking: () => void;
}

export const FaqView: React.FC<FaqViewProps> = ({ onOpenBooking }) => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = activeCategory === 'all'
    ? FAQS
    : FAQS.filter((f) => f.category === activeCategory);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 space-y-8 pb-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="px-3.5 py-1 bg-[#EEF8EA] text-[#2E8B20] text-xs font-black uppercase tracking-widest rounded-full">
          Frequently Asked Questions
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-[#0B2347] mt-2">
          Everything You Need to Know
        </h1>
        <p className="text-xs sm:text-sm text-[#0B2347]/70 mt-1">
          Have questions about our water-saving process, mobile scheduling, or payment options?
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap justify-center gap-2">
        {[
          { id: 'all', label: 'All Questions' },
          { id: 'mobile', label: 'Mobile & Service Area' },
          { id: 'eco', label: 'Water Savings & Eco Tech' },
          { id: 'services', label: 'Services & Duration' },
          { id: 'pricing', label: 'Payment & Pricing' }
        ].map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeCategory === cat.id
                ? 'bg-[#0B2347] text-white shadow-sm'
                : 'bg-white text-[#0B2347]/70 border border-[#E8F8FC] hover:bg-[#EEF8EA] hover:text-[#2E8B20]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.map((faq) => {
          const isOpen = openIds.includes(faq.id);
          return (
            <div
              key={faq.id}
              className={`rounded-2xl border transition-all overflow-hidden ${
                isOpen
                  ? 'bg-white border-[#12A9E8]/40 shadow-sm'
                  : 'bg-white/80 border-[#E8F8FC] hover:border-slate-300'
              }`}
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="font-extrabold text-sm sm:text-base text-[#0B2347]">
                  {faq.question}
                </span>
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform ${
                    isOpen ? 'bg-[#12A9E8] text-white rotate-180' : 'bg-[#F5F7F8] text-[#0B2347]'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-[#0B2347]/75 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in-50 duration-150">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Still Have Questions Box */}
      <div className="bg-[#0B2347] text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md border border-slate-800">
        <div>
          <h4 className="text-xl font-black">Still have a specific question?</h4>
          <p className="text-white/80 text-xs sm:text-sm mt-1">
            Our Los Angeles mobile detailing team is ready to help 7 days a week.
          </p>
        </div>

        <div className="flex gap-3 w-full sm:w-auto">
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-black uppercase tracking-wider rounded-full flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Ask on WhatsApp</span>
          </a>

          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="flex-1 sm:flex-none px-5 py-2.5 bg-white text-[#0B2347] hover:bg-slate-100 text-xs font-black uppercase tracking-wider rounded-full flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#12A9E8]" />
            <span>Call Us</span>
          </a>
        </div>
      </div>
    </div>
  );
};
