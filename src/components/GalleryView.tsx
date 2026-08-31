import React, { useState } from 'react';
import { Sparkles, Filter, CheckCircle2, ArrowRight, ShieldCheck, Droplets } from 'lucide-react';
import { BEFORE_AFTER_GALLERY } from '../data/mockData';
import { BeforeAfterSlider } from './BeforeAfterSlider';

interface GalleryViewProps {
  onOpenBooking: () => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({ onOpenBooking }) => {
  const [filter, setFilter] = useState<'all' | 'exterior' | 'interior' | 'paint'>('all');

  const filteredItems = filter === 'all'
    ? BEFORE_AFTER_GALLERY
    : BEFORE_AFTER_GALLERY.filter((item) => item.category === filter);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 space-y-10 pb-16">
      {/* Header */}
      <div className="bg-[#0B2347] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-lg border border-slate-800 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="max-w-2xl relative z-10">
          <span className="px-3.5 py-1.5 bg-[#2E8B20] text-white text-xs font-black uppercase tracking-widest rounded-full inline-block mb-3">
            100% Real Client Results
          </span>
          <h1 className="text-3xl sm:text-5xl font-black leading-tight">
            Before & After <span className="text-[#12A9E8]">Gallery</span>
          </h1>
          <p className="text-white/80 text-sm sm:text-base mt-2">
            Slide and compare transformations across windshields, console buttons, velour floor mats, paint gloss, and exterior trim.
          </p>
        </div>

        <div className="relative z-10 flex-shrink-0">
          <button
            onClick={onOpenBooking}
            className="bg-[#2E8B20] hover:bg-[#27781B] text-white px-7 py-3.5 rounded-full font-black uppercase text-xs sm:text-sm tracking-wider shadow-lg shadow-[#2E8B20]/30 transition-all hover:scale-105"
          >
            Get Similar Results
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-3 rounded-2xl border border-[#E8F8FC] shadow-sm">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-[#12A9E8] ml-2" />
          <span className="text-xs font-black uppercase tracking-wider text-[#0B2347]/60">
            Filter Gallery:
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {(['all', 'exterior', 'interior', 'paint'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                filter === cat
                  ? 'bg-[#0B2347] text-white shadow-sm'
                  : 'bg-[#F5F7F8] text-[#0B2347]/70 hover:bg-[#EEF8EA] hover:text-[#2E8B20]'
              }`}
            >
              {cat === 'all' ? 'All Transformations' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid of Before-After Sliders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredItems.map((item) => (
          <div key={item.id} className="relative">
            <BeforeAfterSlider item={item} onOpenBooking={onOpenBooking} />
          </div>
        ))}
      </div>

      {/* Bottom Guarantee Banner */}
      <div className="bg-[#EEF8EA] rounded-3xl p-6 sm:p-8 border border-[#2E8B20]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#2E8B20] text-white flex items-center justify-center flex-shrink-0 shadow-md">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-black text-[#0B2347]">
              The Divine EcoWash Satisfaction Promise
            </h3>
            <p className="text-xs text-[#0B2347]/70 mt-0.5">
              If any area does not meet your high standards, our mobile technician will touch it up on the spot until it is perfect.
            </p>
          </div>
        </div>

        <button
          onClick={onOpenBooking}
          className="bg-[#0B2347] hover:bg-[#12A9E8] text-white px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider whitespace-nowrap transition-colors"
        >
          Book Your Detail
        </button>
      </div>
    </div>
  );
};
