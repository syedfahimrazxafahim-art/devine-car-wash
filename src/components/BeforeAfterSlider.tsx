import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, CheckCircle2, XCircle, ArrowLeftRight, Maximize2, X, Eye } from 'lucide-react';
import { BeforeAfterItem } from '../types';

interface BeforeAfterSliderProps {
  item: BeforeAfterItem;
  className?: string;
  onOpenBooking?: () => void;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  item,
  className = '',
  onOpenBooking
}) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'interactive' | 'full'>('full');
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const width = rect.width;
      const percentage = Math.max(5, Math.min(95, (x / width) * 100));
      setSliderPosition(percentage);
    },
    []
  );

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) handleMove(e.touches[0].clientX);
  };

  return (
    <>
      <div className={`flex flex-col bg-white rounded-3xl p-5 border border-[#E8F8FC] shadow-sm hover:shadow-md transition-all ${className}`}>
        {/* Top Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-[#EEF8EA] text-[#2E8B20] font-black text-xs rounded-full uppercase tracking-wider">
              {item.vehicle}
            </span>
            <span className="px-2.5 py-0.5 bg-[#E8F8FC] text-[#12A9E8] font-bold text-[11px] rounded-full uppercase">
              {item.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode(viewMode === 'full' ? 'interactive' : 'full')}
              className="px-2.5 py-1 text-xs font-bold text-[#0B2347]/70 hover:text-[#12A9E8] bg-[#F5F7F8] hover:bg-[#E8F8FC] rounded-lg transition-colors flex items-center gap-1"
              title="Toggle interactive lens compare"
            >
              <ArrowLeftRight className="w-3 h-3 text-[#12A9E8]" />
              <span>{viewMode === 'full' ? 'Compare Slider' : 'Full Graphic'}</span>
            </button>

            <button
              onClick={() => setLightboxOpen(true)}
              className="p-1.5 text-[#0B2347]/60 hover:text-[#0B2347] bg-[#F5F7F8] hover:bg-slate-200 rounded-lg transition-colors"
              title="Expand image in high definition"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <h3 className="text-lg font-black text-[#0B2347] mb-2">{item.title}</h3>

        {/* Real Image & Interactive Container */}
        <div
          ref={containerRef}
          id={`slider-${item.id}`}
          onMouseMove={viewMode === 'interactive' ? handleMouseMove : undefined}
          onMouseUp={viewMode === 'interactive' ? handleMouseUp : undefined}
          onMouseLeave={viewMode === 'interactive' ? handleMouseUp : undefined}
          onTouchMove={viewMode === 'interactive' ? handleTouchMove : undefined}
          className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden select-none border border-[#E8F8FC] bg-[#0E1E38] group cursor-pointer"
          onClick={() => {
            if (!isDragging && viewMode === 'full') setLightboxOpen(true);
          }}
        >
          {/* PRIMARY IMAGE ASSET */}
          <div className="w-full h-full relative flex items-center justify-center bg-black/90">
            <img
              src={item.imageUrl}
              alt={item.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.01]"
            />

            {/* Click to Zoom indicator overlay on hover */}
            {viewMode === 'full' && (
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-4 py-2 rounded-full bg-[#0B2347]/90 text-white text-xs font-bold backdrop-blur-sm flex items-center gap-1.5 shadow-lg">
                  <Eye className="w-3.5 h-3.5 text-[#12A9E8]" />
                  Click to View Full Resolution
                </span>
              </div>
            )}
          </div>

          {/* Interactive Split View Overlay if switched */}
          {viewMode === 'interactive' && (
            <>
              {/* After label */}
              <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 px-3 py-1.5 bg-[#2E8B20] text-white rounded-full text-[11px] font-black uppercase tracking-wider shadow-md">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>AFTER (DIVINE ECOWASH)</span>
              </div>

              {/* Before Overlay Slice */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden bg-black/40 backdrop-grayscale border-r-2 border-white"
                style={{ width: `${sliderPosition}%` }}
              >
                <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 px-3 py-1.5 bg-[#12A9E8] text-white rounded-full text-[11px] font-black uppercase tracking-wider shadow-md">
                  <XCircle className="w-3.5 h-3.5" />
                  <span>BEFORE DETAIL</span>
                </div>
              </div>

              {/* Divider Handle */}
              <div
                className="absolute inset-y-0 w-1 bg-white shadow-2xl cursor-ew-resize z-20 flex items-center justify-center -ml-0.5"
                style={{ left: `${sliderPosition}%` }}
                onMouseDown={handleMouseDown}
              >
                <div className="w-8 h-8 rounded-full bg-white text-[#0B2347] shadow-xl border-2 border-[#12A9E8] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform">
                  <ArrowLeftRight className="w-4 h-4 text-[#12A9E8]" />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Accent Tag Banner */}
        {item.accentText && (
          <div className="mt-3 px-3 py-1.5 bg-[#EEF8EA] rounded-xl text-[#2E8B20] text-xs font-black flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#12A9E8] flex-shrink-0" />
            <span>{item.accentText}</span>
          </div>
        )}

        {/* Description & Impact */}
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3 border-t border-[#F5F7F8] text-xs">
          <div className="p-2.5 rounded-xl bg-[#F5F7F8]">
            <span className="font-bold text-[#0B2347]/60 block mb-0.5 uppercase tracking-wider text-[10px]">
              Before Condition
            </span>
            <p className="text-[#0B2347]/80 line-clamp-2">{item.beforeDescription}</p>
          </div>
          <div className="p-2.5 rounded-xl bg-[#EEF8EA]">
            <span className="font-bold text-[#2E8B20] block mb-0.5 uppercase tracking-wider text-[10px]">
              Divine EcoWash Result
            </span>
            <p className="text-[#0B2347]/80 line-clamp-2">{item.afterDescription}</p>
          </div>
        </div>
      </div>

      {/* High Definition Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center shadow-lg transition-colors"
            aria-label="Close image preview"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col animate-in zoom-in-95 duration-200">
            <div className="p-4 sm:p-5 bg-slate-950 flex items-center justify-between border-b border-slate-800">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-[#22C55E]">
                  {item.vehicle} • {item.category.toUpperCase()}
                </span>
                <h3 className="text-white text-base sm:text-lg font-black">{item.title}</h3>
              </div>
              {onOpenBooking && (
                <button
                  onClick={() => {
                    setLightboxOpen(false);
                    onOpenBooking();
                  }}
                  className="bg-[#2E8B20] text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider hover:bg-[#27781B] transition-colors"
                >
                  Book This Detail
                </button>
              )}
            </div>

            <div className="relative bg-black flex items-center justify-center max-h-[75vh] p-2 overflow-auto">
              <img
                src={item.imageUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] w-auto object-contain rounded-xl"
              />
            </div>

            <div className="p-4 bg-slate-950 text-xs text-slate-300 border-t border-slate-800 flex flex-col sm:flex-row justify-between gap-2">
              <span>{item.description}</span>
              <span className="text-[#22C55E] font-bold whitespace-nowrap">
                {item.accentText || '100% Real Client Transformation'}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

