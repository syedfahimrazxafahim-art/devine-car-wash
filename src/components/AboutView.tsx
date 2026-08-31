import React from 'react';
import { Droplets, Leaf, Shield, Award, Heart, CheckCircle2, MapPin, Sparkles, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

interface AboutViewProps {
  onOpenBooking: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenBooking }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 space-y-10 pb-16">
      {/* Hero */}
      <div className="bg-[#0B2347] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-lg border border-slate-800">
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#2E8B20]/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 max-w-2xl">
          <span className="px-3.5 py-1.5 bg-[#2E8B20] text-white text-xs font-black uppercase tracking-widest rounded-full">
            Our Sustainable Mission
          </span>
          <h1 className="text-3xl sm:text-5xl font-black mt-4 leading-tight">
            Clean Smarter. <br />
            <span className="text-[#22C55E]">Drive Greener.</span>
          </h1>
          <p className="text-white/80 text-sm sm:text-base mt-3 leading-relaxed">
            Divine EcoWash was born in Los Angeles with a simple yet ambitious goal: deliver the highest caliber of luxury automotive detailing while protecting California's precious water resources.
          </p>
        </div>
      </div>

      {/* 3 Core Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-3xl p-7 border border-[#E8F8FC] shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#EEF8EA] text-[#2E8B20] flex items-center justify-center mb-4">
              <Droplets className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-[#0B2347]">50%–70% Water Saved</h3>
            <p className="text-xs sm:text-sm text-[#0B2347]/75 mt-2 leading-relaxed">
              Standard car washes waste up to 140 gallons of potable water per vehicle. We use advanced high-lubricity polymer formulas that consume less than 5 gallons with zero toxic runoff.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-[#2E8B20] flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" />
            <span>Over 450,000 Gallons Saved</span>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-7 border border-[#E8F8FC] shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#E8F8FC] text-[#12A9E8] flex items-center justify-center mb-4">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-[#0B2347]">100% Biodegradable</h3>
            <p className="text-xs sm:text-sm text-[#0B2347]/75 mt-2 leading-relaxed">
              Our cleaning agents, leather conditioners, and spot extractors are plant-derived, phosphate-free, and non-corrosive. Safe for your family, pets, and the local watershed.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-[#12A9E8] flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" />
            <span>Non-Toxic Interior Sanitation</span>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-7 border border-[#E8F8FC] shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#0B2347] text-white flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-[#22C55E]" />
            </div>
            <h3 className="text-xl font-black text-[#0B2347]">Scratch-Free Science</h3>
            <p className="text-xs sm:text-sm text-[#0B2347]/75 mt-2 leading-relaxed">
              Rather than scraping dirt across paint, our polymeric surfactants encapsulate dirt particles in microscopic lubricating capsules, gently lifting them into deep-pile microfiber.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-[#0B2347] flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#2E8B20]" />
            <span>Flawless Showroom Reflection</span>
          </div>
        </div>
      </div>

      {/* Comparison: Traditional vs Divine EcoWash */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8F8FC] shadow-sm">
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-xs font-black uppercase tracking-widest text-[#12A9E8]">
            The Environmental Choice
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0B2347] mt-1">
            Traditional Car Wash vs. Divine EcoWash
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Traditional */}
          <div className="p-6 rounded-2xl bg-rose-50/60 border border-rose-200">
            <span className="text-xs font-black uppercase tracking-wider text-rose-600 block mb-1">
              Conventional Tunnel & Driveway Wash
            </span>
            <h4 className="text-lg font-black text-slate-800 mb-4">High Water, High Risk</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-black">✕</span>
                <span>Wastes 80 to 140+ gallons of clean water per wash</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-black">✕</span>
                <span>Automated spinning brushes cause microscopic swirl marks & clear coat hazing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-black">✕</span>
                <span>Harsh chemical runoff enters storm drains and drains into Santa Monica Bay</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-black">✕</span>
                <span>Requires waiting in long car wash lines</span>
              </li>
            </ul>
          </div>

          {/* Divine EcoWash */}
          <div className="p-6 rounded-2xl bg-[#EEF8EA] border border-[#2E8B20]/30">
            <span className="text-xs font-black uppercase tracking-wider text-[#2E8B20] block mb-1">
              The Divine EcoWash Approach
            </span>
            <h4 className="text-lg font-black text-[#0B2347] mb-4">Pure Precision & Conservation</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-[#0B2347]/90 font-medium">
              <li className="flex items-start gap-2">
                <span className="text-[#2E8B20] font-black">✓</span>
                <span>Uses as little as 2–5 gallons per vehicle (50–70%+ savings)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2E8B20] font-black">✓</span>
                <span>Ultra-plush 500+ GSM microfiber towels ensure zero swirl marks or marring</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2E8B20] font-black">✓</span>
                <span>Zero toxic runoff — 100% biodegradable and compliant with California EPA guidelines</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2E8B20] font-black">✓</span>
                <span>Mobile convenience: we detail while you work, relax, or spend time with family</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Van & Service Radius */}
      <div className="bg-[#0B2347] rounded-3xl p-6 sm:p-10 text-white shadow-xl border border-slate-800 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-cyan-200 text-xs font-bold mb-3">
              <MapPin className="w-3.5 h-3.5 text-[#12A9E8]" />
              Greater Los Angeles Service Coverage
            </div>
            <h3 className="text-2xl sm:text-3xl font-black">
              Self-Contained Mobile Detailing In LA
            </h3>
            <p className="text-white/80 text-xs sm:text-sm mt-2 max-w-xl leading-relaxed">
              Equipped with filtered spot-free water, quiet onboard power, steam sanitizers, and high-lift fabric extractors. We service your home driveway, executive garage, or workplace.
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {['Downtown LA', 'Beverly Hills', 'Santa Monica', 'Pasadena', 'Culver City', 'Glendale', 'South Bay'].map((loc) => (
                <span key={loc} className="px-2.5 py-1 bg-white/10 rounded-lg text-xs font-semibold text-slate-200">
                  {loc}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <button
                onClick={onOpenBooking}
                className="bg-[#2E8B20] hover:bg-[#27781B] text-white px-7 py-3.5 rounded-full text-xs font-black uppercase tracking-wider shadow-lg whitespace-nowrap"
              >
                Book Mobile Detail
              </button>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="bg-white/10 hover:bg-white/20 text-white px-5 py-3.5 rounded-full text-xs font-bold flex items-center justify-center gap-2 whitespace-nowrap border border-white/20"
              >
                <Phone className="w-4 h-4 text-[#12A9E8]" />
                <span>Call (323) 921-1494</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-700 bg-black/60">
              <img
                src="https://res.cloudinary.com/fzobzdco/image/upload/v1788211429/8.jpg"
                alt="Range Rover Luxury Detail Divine EcoWash"
                referrerPolicy="no-referrer"
                className="w-full h-44 object-cover object-center"
              />
              <div className="absolute bottom-0 inset-x-0 bg-black/70 p-1.5 text-center text-[10px] font-bold text-white">
                Luxury SUV Detailing
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-700 bg-black/60">
              <img
                src="https://res.cloudinary.com/fzobzdco/image/upload/v1788211434/6.jpg"
                alt="Eco-Wash Kia Niro Hybrid Divine EcoWash"
                referrerPolicy="no-referrer"
                className="w-full h-44 object-cover object-center"
              />
              <div className="absolute bottom-0 inset-x-0 bg-black/70 p-1.5 text-center text-[10px] font-bold text-[#22C55E]">
                Save 50%–70% Water
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
