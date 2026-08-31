import React, { useState } from 'react';
import { Phone, MessageSquare, Menu, X, Calendar, Droplets } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { PageTab } from '../types';
import { BUSINESS_INFO } from '../data/mockData';

interface HeaderProps {
  activeTab: PageTab;
  onSelectTab: (tab: PageTab) => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onSelectTab,
  onOpenBooking
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services & Pricing' },
    { id: 'gallery', label: 'Before & After' },
    { id: 'about', label: 'Eco-Mission' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (tab: PageTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-4 z-50 w-full max-w-7xl mx-auto px-4 sm:px-6 mb-6">
      <div className="bg-white/95 backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-sm border border-[#E8F8FC] flex items-center justify-between transition-all">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#12A9E8] rounded-lg"
        >
          <BrandLogo size="md" />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs uppercase font-extrabold tracking-widest text-[#0B2347]/70">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-1.5 transition-colors hover:text-[#2E8B20] focus:outline-none ${
                  isActive ? 'text-[#12A9E8] font-black' : ''
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 inset-x-0 h-0.5 bg-[#12A9E8] rounded-full"></span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Header Right CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Quick Call / WhatsApp */}
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-bold text-[#0B2347] bg-[#F5F7F8] hover:bg-[#E8F8FC] transition-colors border border-slate-200/60"
            title="Call Divine EcoWash"
          >
            <Phone className="w-3.5 h-3.5 text-[#12A9E8]" />
            <span>{BUSINESS_INFO.phone}</span>
          </a>

          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#128C7E] transition-colors border border-[#25D366]/30"
            title="Chat on WhatsApp"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366]" />
          </a>

          {/* Book Button */}
          <button
            onClick={onOpenBooking}
            className="bg-[#2E8B20] hover:bg-[#27781B] text-white px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider shadow-md shadow-[#2E8B20]/25 transition-all hover:scale-[1.02] active:scale-95 flex items-center gap-1.5"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book a Detail</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#0B2347] rounded-xl hover:bg-slate-100 transition-colors focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 bg-white rounded-2xl shadow-xl border border-[#E8F8FC] p-5 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B2347]/50">Navigation</span>
            <div className="flex items-center gap-1 text-[11px] font-bold text-[#2E8B20] bg-[#EEF8EA] px-2 py-0.5 rounded-full">
              <Droplets className="w-3 h-3 text-[#12A9E8]" />
              <span>Mobile Detailing in LA</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-3.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors ${
                    isActive
                      ? 'bg-[#12A9E8] text-white'
                      : 'bg-[#F5F7F8] text-[#0B2347] hover:bg-[#EEF8EA] hover:text-[#2E8B20]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-[#2E8B20] text-white py-3 rounded-xl text-xs font-black uppercase tracking-wider shadow-md text-center flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Mobile Detail Now</span>
            </button>

            <div className="flex gap-2">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex-1 bg-[#F5F7F8] text-[#0B2347] py-2.5 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-2 border border-slate-200"
              >
                <Phone className="w-3.5 h-3.5 text-[#12A9E8]" />
                <span>Call (323) 921-1494</span>
              </a>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-4 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
