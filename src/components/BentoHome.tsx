import React, { useState } from 'react';
import {
  Sparkles,
  Droplets,
  ShieldCheck,
  MapPin,
  Star,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Phone,
  MessageSquare,
  Clock,
  Car,
  Award,
  Zap,
  TrendingUp
} from 'lucide-react';
import { PageTab } from '../types';
import { BUSINESS_INFO, SERVICE_PACKAGES, BEFORE_AFTER_GALLERY, TESTIMONIALS } from '../data/mockData';
import { BeforeAfterSlider } from './BeforeAfterSlider';

interface BentoHomeProps {
  onNavigate: (tab: PageTab) => void;
  onOpenBooking: (packageId?: string) => void;
}

export const BentoHome: React.FC<BentoHomeProps> = ({ onNavigate, onOpenBooking }) => {
  const [selectedGalleryIdx, setSelectedGalleryIdx] = useState(0);
  const [calcWashCount, setCalcWashCount] = useState<number>(12); // washes per year

  // Calculate annual water saved based on user input
  const traditionalWaterGallons = calcWashCount * 110;
  const ecoWashWaterGallons = calcWashCount * 4;
  const waterSavedTotal = traditionalWaterGallons - ecoWashWaterGallons;

  const featuredBeforeAfter = BEFORE_AFTER_GALLERY[selectedGalleryIdx] || BEFORE_AFTER_GALLERY[0];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 space-y-8 pb-12">
      {/* 1. PRIMARY BENTO GRID (Hero + Fast Pillars) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6">
        
        {/* HERO BENTO CARD (Col 8) */}
        <div className="md:col-span-12 lg:col-span-8 relative rounded-3xl overflow-hidden bg-[#0B2347] text-white p-6 sm:p-10 flex flex-col justify-between min-h-[440px] shadow-xl group border border-slate-800">
          {/* Subtle Ambient Gradients & Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0B2347] via-[#0B2347]/90 to-[#12A9E8]/30 z-10"></div>
          <div className="absolute right-[-10%] top-[10%] w-[80%] h-[80%] bg-[#12A9E8]/15 rounded-full blur-[110px] pointer-events-none"></div>
          <div className="absolute left-[10%] bottom-[-10%] w-[60%] h-[60%] bg-[#2E8B20]/15 rounded-full blur-[90px] pointer-events-none"></div>

          {/* Top Tag & Location Badge */}
          <div className="relative z-20 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1.5 bg-[#2E8B20] text-white rounded-full text-xs font-black uppercase tracking-widest shadow-md">
                Premier Mobile Detailing
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold text-cyan-200">
                <MapPin className="w-3 h-3 text-[#12A9E8]" />
                Los Angeles, CA
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30">
              <Droplets className="w-3.5 h-3.5" />
              <span>We Save 50%–70% Water</span>
            </div>
          </div>

          {/* Core Hero Headline & Copy */}
          <div className="relative z-20 my-auto py-6 max-w-2xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-4">
              Premium Car Care. <br />
              <span className="text-[#12A9E8] drop-shadow-sm">Eco-Friendly</span>{' '}
              <span className="text-[#22C55E]">Cleaning.</span>
            </h1>
            <p className="text-white/85 text-base sm:text-lg font-normal leading-relaxed max-w-xl">
              Professional mobile car detailing with a cleaner approach to your vehicle and the Los Angeles environment. We come directly to your home or office.
            </p>
          </div>

          {/* Action CTAs & Fast Phone */}
          <div className="relative z-20 flex flex-wrap items-center gap-3.5 pt-2">
            <button
              onClick={() => onOpenBooking()}
              className="bg-[#2E8B20] hover:bg-[#27781B] text-white px-7 py-3.5 rounded-full font-black uppercase text-xs sm:text-sm tracking-wider shadow-lg shadow-[#2E8B20]/30 transition-all hover:scale-[1.02] active:scale-95 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Detail</span>
            </button>

            <button
              onClick={() => onNavigate('services')}
              className="bg-white hover:bg-slate-100 text-[#0B2347] px-7 py-3.5 rounded-full font-extrabold uppercase text-xs sm:text-sm tracking-wider transition-all hover:scale-[1.02] active:scale-95 shadow-md flex items-center gap-2"
            >
              <span>View Packages</span>
              <ArrowRight className="w-4 h-4 text-[#12A9E8]" />
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="sm:ml-auto inline-flex items-center gap-2 px-4 py-3 rounded-full text-xs font-bold text-white/90 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#12A9E8]" />
              <span>{BUSINESS_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>

        {/* SERVICES SNAPSHOT BENTO CARD (Col 4, Top) */}
        <div className="md:col-span-6 lg:col-span-4 bg-white rounded-3xl p-6 border border-[#E8F8FC] shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-7 bg-[#2E8B20] rounded-full"></div>
                <h2 className="text-lg font-black uppercase tracking-tight text-[#0B2347]">
                  Detailing Packages
                </h2>
              </div>
              <button
                onClick={() => onNavigate('services')}
                className="text-xs font-bold text-[#12A9E8] hover:text-[#0B2347] flex items-center gap-1 transition-colors"
              >
                <span>View All</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-2.5">
              {SERVICE_PACKAGES.slice(0, 3).map((pkg) => (
                <div
                  key={pkg.id}
                  onClick={() => onOpenBooking(pkg.id)}
                  className="flex items-center justify-between p-3.5 bg-[#F5F7F8] hover:bg-[#EEF8EA] rounded-2xl border border-transparent hover:border-[#2E8B20]/30 transition-all cursor-pointer group"
                >
                  <div className="pr-2">
                    <div className="flex items-center gap-1.5">
                      <p className="font-extrabold text-sm text-[#0B2347] group-hover:text-[#2E8B20] transition-colors">
                        {pkg.name}
                      </p>
                      {pkg.popular && (
                        <span className="bg-[#2E8B20] text-white text-[9px] font-black px-1.5 py-0.5 rounded-full uppercase">
                          Best
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-[#0B2347]/60 line-clamp-1">
                      {pkg.tagline}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-[#2E8B20] font-black text-sm block">
                      ${pkg.pricing.sedan}+
                    </span>
                    <span className="text-[10px] text-[#0B2347]/50 font-medium">
                      {pkg.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#0B2347]/70">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2E8B20]" />
              100% Scratch-Free Guarantee
            </span>
            <button
              onClick={() => onNavigate('services')}
              className="font-bold text-[#12A9E8] hover:underline"
            >
              Full Menu
            </button>
          </div>
        </div>

        {/* WATER SAVING & ECO-TECH BENTO CARD (Col 4, Bottom Left) */}
        <div className="md:col-span-6 lg:col-span-4 bg-[#EEF8EA] rounded-3xl p-6 flex flex-col justify-between border border-[#2E8B20]/20 shadow-sm relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="p-2 bg-[#2E8B20] text-white rounded-xl shadow-sm">
                <Droplets className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-lg font-black text-[#2E8B20] uppercase tracking-tight leading-tight">
                  Water Saving Tech
                </h3>
                <span className="text-xs text-[#2E8B20]/75 font-semibold">Eco-Conscious Chemistry</span>
              </div>
            </div>
            <p className="text-[#0B2347]/80 text-xs sm:text-sm leading-relaxed mt-2">
              Our plant-derived biodegradable polymers encapsulate and lift road grime safely without flooding storm drains with harsh chemicals.
            </p>
          </div>

          {/* Interactive Eco Calculator snippet */}
          <div className="relative z-10 mt-4 p-3.5 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#2E8B20]/20">
            <div className="flex justify-between items-center text-xs mb-1.5">
              <span className="font-bold text-[#0B2347]">Water Conservation Impact:</span>
              <span className="font-black text-[#2E8B20] text-sm">~{waterSavedTotal} Gal Saved</span>
            </div>
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden flex">
              <div className="bg-[#2E8B20] h-full w-[85%]"></div>
              <div className="bg-[#12A9E8] h-full w-[15%]"></div>
            </div>
            <div className="flex justify-between text-[10px] text-[#0B2347]/60 font-semibold mt-1">
              <span>Standard Wash: ~{traditionalWaterGallons} gal</span>
              <span className="text-[#2E8B20]">Divine Wash: ~{ecoWashWaterGallons} gal</span>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between mt-4 pt-2">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-[#0B2347] text-white text-[11px] font-black flex items-center justify-center shadow">
                450k+
              </div>
              <div className="text-[11px] font-bold text-[#0B2347]">
                Gallons of Water <br />
                <span className="text-[#2E8B20]">Saved in LA</span>
              </div>
            </div>
            <button
              onClick={() => onNavigate('about')}
              className="text-xs font-black text-[#2E8B20] hover:text-[#0B2347] flex items-center gap-1 uppercase"
            >
              <span>Our Mission</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* SATISFACTION & REPUTATION BENTO CARD (Col 4) */}
        <div className="md:col-span-6 lg:col-span-4 bg-white rounded-3xl p-6 border border-[#E8F8FC] shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-4xl font-black text-[#0B2347] tracking-tight">4.9/5</p>
              <div className="flex gap-1 text-[#12A9E8] my-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#12A9E8]" />
                ))}
              </div>
              <p className="text-xs font-black uppercase text-[#0B2347]/50 tracking-wider">
                Client Satisfaction in LA
              </p>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-[#EEF8EA] border border-[#2E8B20]/20 flex items-center justify-center text-[#2E8B20]">
              <Award className="w-7 h-7" />
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="my-3 p-3 bg-[#F5F7F8] rounded-2xl border-l-4 border-[#12A9E8]">
            <p className="text-xs text-[#0B2347]/80 italic line-clamp-2">
              "{TESTIMONIALS[0].review}"
            </p>
            <p className="text-[11px] font-bold text-[#0B2347] mt-1">
              — {TESTIMONIALS[0].name}, <span className="text-[#12A9E8]">{TESTIMONIALS[0].location}</span>
            </p>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs font-bold text-[#0B2347]/70">
            <span>3,800+ Vehicles Detailed</span>
            <span className="text-[#2E8B20] font-black">99.4% Five-Star</span>
          </div>
        </div>

        {/* LOS ANGELES MOBILE COVERAGE BENTO CARD (Col 4) */}
        <div className="md:col-span-6 lg:col-span-4 bg-[#12A9E8] rounded-3xl p-6 text-white flex flex-col justify-between shadow-md relative overflow-hidden">
          <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
          
          <div className="flex items-start gap-3">
            <div className="w-11 h-11 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white flex-shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-cyan-100 block">
                Mobile Convenience
              </span>
              <h3 className="text-xl font-black uppercase tracking-tight">We Come To You!</h3>
            </div>
          </div>

          <p className="text-white/90 text-xs sm:text-sm mt-3 leading-relaxed">
            Fully self-contained mobile detailing units with our own filtered water & power. Serving Downtown LA, Beverly Hills, Santa Monica, Pasadena & beyond.
          </p>

          <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between">
            <span className="text-xs font-bold text-cyan-100">Zero Water Hookup Needed</span>
            <button
              onClick={() => onNavigate('contact')}
              className="px-3.5 py-1.5 bg-white text-[#0B2347] rounded-full text-xs font-black uppercase tracking-wider hover:bg-cyan-50 transition-colors shadow"
            >
              Coverage Map
            </button>
          </div>
        </div>
      </div>

      {/* 2. INTERACTIVE BEFORE & AFTER SHOWCASE BENTO SECTION */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8F8FC] shadow-sm">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-[#EEF8EA] text-[#2E8B20] text-xs font-black rounded-full uppercase tracking-wider">
                Real Customer Transformations
              </span>
              <span className="text-xs text-[#0B2347]/50 font-bold">• 100% Authentic Work</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0B2347] tracking-tight">
              Shine You Can See. <span className="text-[#12A9E8]">Results You Love.</span>
            </h2>
            <p className="text-[#0B2347]/70 text-sm max-w-2xl mt-1">
              Explore real before-and-after results from Divine EcoWash mobile details across Los Angeles, including deep stain extraction, paint clarity, and interior rejuvenation.
            </p>
          </div>

          {/* Category Switcher Tabs */}
          <div className="flex flex-wrap gap-2">
            {BEFORE_AFTER_GALLERY.slice(0, 4).map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setSelectedGalleryIdx(idx)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedGalleryIdx === idx
                    ? 'bg-[#0B2347] text-white shadow-md'
                    : 'bg-[#F5F7F8] text-[#0B2347]/70 hover:bg-[#EEF8EA] hover:text-[#2E8B20]'
                }`}
              >
                {item.title.split(' ')[0]} {item.title.split(' ')[1]}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Slider */}
        <BeforeAfterSlider item={featuredBeforeAfter} onOpenBooking={() => onOpenBooking()} />

        {/* 4 Mini Cards Grid beneath slider */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
          {BEFORE_AFTER_GALLERY.slice(0, 4).map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedGalleryIdx(idx)}
              className={`p-3 rounded-2xl border transition-all cursor-pointer ${
                selectedGalleryIdx === idx
                  ? 'border-[#12A9E8] bg-[#E8F8FC]/50 shadow-sm'
                  : 'border-slate-200 bg-[#F5F7F8] hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between text-[11px] mb-1">
                <span className="font-bold text-[#0B2347] truncate">{item.vehicle}</span>
                <span className="text-[#2E8B20] font-black text-[10px] uppercase">
                  {item.category}
                </span>
              </div>
              <p className="text-[11px] text-[#0B2347]/60 line-clamp-1">{item.title}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => onNavigate('gallery')}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider text-[#12A9E8] bg-[#E8F8FC] hover:bg-[#12A9E8] hover:text-white transition-all shadow-sm"
          >
            <span>View Full Before & After Gallery (8+ Showcases)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 3. FAST BOOKING & SOCIAL ACTION BENTO ROW */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Instant Booking Banner (Col 8) */}
        <div className="md:col-span-8 bg-gradient-to-r from-[#0B2347] to-[#0A3275] rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg border border-slate-700">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-cyan-200 text-xs font-bold mb-2">
              <Zap className="w-3.5 h-3.5 text-[#12A9E8]" />
              Same-Day / Next-Day Mobile Detailing Available
            </div>
            <h3 className="text-2xl sm:text-3xl font-black">
              Ready for a Showroom Finish?
            </h3>
            <p className="text-white/80 text-xs sm:text-sm mt-1 max-w-md">
              Book online in 60 seconds or message us on WhatsApp with your vehicle make and location.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              onClick={() => onOpenBooking()}
              className="bg-[#2E8B20] hover:bg-[#27781B] text-white px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider shadow-md text-center transition-all whitespace-nowrap"
            >
              Book Your Detail
            </button>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-3 rounded-full text-xs font-black uppercase tracking-wider shadow-md text-center flex items-center justify-center gap-2 whitespace-nowrap transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* Social Quick Links (Col 4) */}
        <div className="md:col-span-4 grid grid-cols-2 gap-3">
          <a
            href={BUSINESS_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#F77737] rounded-3xl p-4 text-white flex flex-col justify-between shadow-sm hover:opacity-95 transition-opacity"
          >
            <div className="flex justify-between items-start">
              <span className="text-xs font-black uppercase tracking-wider">Instagram</span>
              <ArrowRight className="w-4 h-4" />
            </div>
            <div className="mt-4">
              <p className="text-sm font-extrabold">{BUSINESS_INFO.instagramHandle}</p>
              <p className="text-[10px] text-white/80">Daily detailing videos & stories</p>
            </div>
          </a>

          <a
            href={BUSINESS_INFO.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1877F2] rounded-3xl p-4 text-white flex flex-col justify-between shadow-sm hover:opacity-95 transition-opacity"
          >
            <div className="flex justify-between items-start">
              <span className="text-xs font-black uppercase tracking-wider">Facebook</span>
              <ArrowRight className="w-4 h-4" />
            </div>
            <div className="mt-4">
              <p className="text-sm font-extrabold">Divine EcoWash</p>
              <p className="text-[10px] text-white/80">Community reviews & specials</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
