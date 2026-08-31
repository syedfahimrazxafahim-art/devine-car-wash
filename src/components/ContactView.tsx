import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageSquare,
  Mail,
  Instagram,
  Facebook,
  Clock,
  Send,
  CheckCircle2,
  Calendar,
  Sparkles
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

interface ContactViewProps {
  onOpenBooking: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onOpenBooking }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 space-y-10 pb-16">
      {/* Header */}
      <div className="bg-[#0B2347] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-lg border border-slate-800">
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#12A9E8]/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 max-w-2xl">
          <span className="px-3.5 py-1.5 bg-[#2E8B20] text-white text-xs font-black uppercase tracking-widest rounded-full">
            Get in Touch • Los Angeles Mobile Service
          </span>
          <h1 className="text-3xl sm:text-5xl font-black mt-4 leading-tight">
            Contact <span className="text-[#12A9E8]">Divine EcoWash</span>
          </h1>
          <p className="text-white/80 text-sm sm:text-base mt-2">
            Have questions or need a custom fleet / luxury detailing quote? Reach out via WhatsApp, phone, or message form below.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Contact Information & Channels (Col 5) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8F8FC] shadow-sm space-y-6">
            <h3 className="text-xl font-black text-[#0B2347]">Direct Channels</h3>

            {/* Phone / WhatsApp */}
            <div className="space-y-4">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#F5F7F8] hover:bg-[#EEF8EA] transition-all border border-slate-200/60 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0B2347] text-[#12A9E8] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#0B2347]/50 uppercase tracking-wider block">
                    Call / Text Us
                  </span>
                  <span className="text-base font-black text-[#0B2347] group-hover:text-[#2E8B20] transition-colors">
                    {BUSINESS_INFO.phoneFormatted}
                  </span>
                </div>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-all border border-[#25D366]/30 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#128C7E] uppercase tracking-wider block">
                    Instant WhatsApp Chat
                  </span>
                  <span className="text-base font-black text-[#0B2347]">
                    {BUSINESS_INFO.phoneFormatted}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#F5F7F8] border border-slate-200/60">
                <div className="w-12 h-12 rounded-xl bg-[#12A9E8] text-white flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#0B2347]/50 uppercase tracking-wider block">
                    Mobile Headquarters
                  </span>
                  <span className="text-sm font-black text-[#0B2347]">
                    {BUSINESS_INFO.city}
                  </span>
                  <span className="text-[11px] text-[#0B2347]/60 block mt-0.5">
                    We Come Directly to Your Location
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#F5F7F8] border border-slate-200/60">
                <div className="w-12 h-12 rounded-xl bg-[#2E8B20] text-white flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#0B2347]/50 uppercase tracking-wider block">
                    Operating Hours
                  </span>
                  <span className="text-xs font-bold text-[#0B2347]">
                    {BUSINESS_INFO.workingHours}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-4 border-t border-slate-100">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B2347]/60 block mb-3">
                Follow Us Online:
              </span>
              <div className="flex gap-3">
                <a
                  href={BUSINESS_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 rounded-2xl bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white font-bold text-xs flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <Instagram className="w-4 h-4" />
                  <span>{BUSINESS_INFO.instagramHandle}</span>
                </a>

                <a
                  href={BUSINESS_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 rounded-2xl bg-[#1877F2] text-white font-bold text-xs flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <Facebook className="w-4 h-4" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form & Coverage List (Col 7) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8F8FC] shadow-sm">
            <div className="mb-6">
              <span className="text-xs font-black uppercase tracking-wider text-[#2E8B20]">
                Send a Message
              </span>
              <h3 className="text-2xl font-black text-[#0B2347] mt-1">
                Ask Us Anything or Request a Custom Quote
              </h3>
            </div>

            {formSubmitted ? (
              <div className="p-8 bg-[#EEF8EA] rounded-2xl border border-[#2E8B20]/30 text-center space-y-4 animate-in fade-in duration-200">
                <div className="w-12 h-12 bg-[#2E8B20] text-white rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-black text-[#0B2347]">Message Sent Successfully!</h4>
                <p className="text-xs sm:text-sm text-[#0B2347]/75 max-w-sm mx-auto">
                  Thank you, <strong>{contactForm.name}</strong>. A Divine EcoWash representative will contact you via phone or email shortly.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setContactForm({ name: '', phone: '', email: '', location: '', message: '' });
                  }}
                  className="px-5 py-2 bg-[#0B2347] text-white text-xs font-bold rounded-full"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-extrabold text-[#0B2347] block mb-1">
                      Your Name:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. David Chen"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F7F8] border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#12A9E8]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-extrabold text-[#0B2347] block mb-1">
                      Phone Number:
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 323-555-0144"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F7F8] border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#12A9E8]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-extrabold text-[#0B2347] block mb-1">
                      Email Address:
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. david@example.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F7F8] border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#12A9E8]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-extrabold text-[#0B2347] block mb-1">
                      Location / City in LA:
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Santa Monica / Pasadena"
                      value={contactForm.location}
                      onChange={(e) => setContactForm({ ...contactForm, location: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F7F8] border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#12A9E8]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-extrabold text-[#0B2347] block mb-1">
                    Your Message / Fleet Inquiry:
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your vehicle make, desired services, or special scheduling requests..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F7F8] border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#12A9E8]"
                  ></textarea>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] text-[#0B2347]/50">
                    We typically reply in under 15 minutes.
                  </span>
                  <button
                    type="submit"
                    className="px-7 py-3.5 bg-[#2E8B20] hover:bg-[#27781B] text-white rounded-full text-xs font-black uppercase tracking-wider shadow-md flex items-center gap-2 transition-all hover:scale-105"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Service Area Coverage Neighborhoods */}
          <div className="bg-[#F5F7F8] rounded-3xl p-6 border border-slate-200/80">
            <h4 className="text-sm font-black uppercase tracking-wider text-[#0B2347] mb-3 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#12A9E8]" />
              Los Angeles Mobile Service Neighborhoods:
            </h4>
            <div className="flex flex-wrap gap-2">
              {BUSINESS_INFO.serviceAreas.map((area, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-white text-[#0B2347] text-xs font-bold rounded-full border border-slate-200 shadow-xs"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
