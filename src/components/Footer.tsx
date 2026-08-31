import React from 'react';
import { Droplets, Phone, MessageSquare, Instagram, Facebook, MapPin, Heart, Shield } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { PageTab } from '../types';
import { BUSINESS_INFO } from '../data/mockData';

interface FooterProps {
  onSelectTab: (tab: PageTab) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenBooking }) => {
  return (
    <footer className="w-full bg-[#0B2347] text-white pt-14 pb-20 md:pb-12 border-t border-slate-800 relative overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#12A9E8]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#2E8B20]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo size="lg" variant="light" />
            <p className="text-white/75 text-xs sm:text-sm leading-relaxed max-w-sm">
              Premier mobile car wash and auto detailing throughout Los Angeles, California. Showroom finish with 50%–70% water savings using biodegradable chemistry.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] flex items-center justify-center transition-colors"
                title="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#12A9E8]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-white/80 font-medium">
              <li>
                <button
                  onClick={() => {
                    onSelectTab('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#2E8B20] transition-colors"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectTab('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#2E8B20] transition-colors"
                >
                  Services & Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectTab('gallery');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#2E8B20] transition-colors"
                >
                  Before & After Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectTab('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#2E8B20] transition-colors"
                >
                  Eco-Mission & Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectTab('faq');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#2E8B20] transition-colors"
                >
                  FAQs
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectTab('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#2E8B20] transition-colors"
                >
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Service Areas */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#22C55E]">
              Mobile Coverage
            </h4>
            <ul className="space-y-1.5 text-xs text-white/70">
              <li>Downtown Los Angeles</li>
              <li>Beverly Hills & Century City</li>
              <li>Santa Monica & West LA</li>
              <li>Pasadena & Glendale</li>
              <li>San Fernando Valley</li>
              <li>Torrance & South Bay</li>
            </ul>
          </div>

          {/* Col 5: Contact & Book */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-2 text-white font-bold hover:text-[#12A9E8] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#12A9E8]" />
                <span>{BUSINESS_INFO.phoneFormatted}</span>
              </a>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#25D366] font-bold hover:underline"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp: {BUSINESS_INFO.phone}</span>
              </a>
              <div className="flex items-start gap-2 text-white/70 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#2E8B20] flex-shrink-0 mt-0.5" />
                <span>Los Angeles, California (Mobile on-site service)</span>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full mt-3 bg-[#2E8B20] hover:bg-[#27781B] text-white py-2.5 rounded-full text-xs font-black uppercase tracking-wider shadow-md transition-all text-center"
            >
              Book Mobile Detail
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/50">
          <p>© {new Date().getFullYear()} Divine EcoWash. All Rights Reserved. Mobile Auto Detailing in Los Angeles.</p>
          <div className="flex items-center gap-4">
            <span className="text-[#22C55E] font-bold flex items-center gap-1">
              <Droplets className="w-3 h-3" />
              100% Eco-Friendly Waterless & Low-Water Technology
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
