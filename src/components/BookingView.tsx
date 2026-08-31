import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  Car,
  CheckCircle2,
  Sparkles,
  MapPin,
  Phone,
  MessageSquare,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Check
} from 'lucide-react';
import { VehicleSize, BookingFormData } from '../types';
import { BUSINESS_INFO, SERVICE_PACKAGES, SERVICE_ADDONS } from '../data/mockData';

interface BookingViewProps {
  initialPackageId?: string;
  initialAddons?: string[];
  initialVehicleSize?: VehicleSize;
  onBookingComplete?: () => void;
}

export const BookingView: React.FC<BookingViewProps> = ({
  initialPackageId = 'divine-signature',
  initialAddons = [],
  initialVehicleSize = 'sedan',
  onBookingComplete
}) => {
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const [formData, setFormData] = useState<BookingFormData>({
    vehicleType: initialVehicleSize,
    vehicleMakeModel: '',
    vehicleYear: '',
    packageId: initialPackageId,
    selectedAddons: initialAddons,
    serviceDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    serviceTime: '10:00 AM',
    clientName: '',
    clientPhone: '',
    clientEmail: '',
    address: '',
    city: 'Los Angeles',
    notes: ''
  });

  const selectedPackage =
    SERVICE_PACKAGES.find((p) => p.id === formData.packageId) || SERVICE_PACKAGES[2];

  const basePrice = selectedPackage.pricing[formData.vehicleType];

  const addonsTotal = formData.selectedAddons.reduce((sum, addonId) => {
    const addon = SERVICE_ADDONS.find((a) => a.id === addonId);
    return sum + (addon ? addon.price : 0);
  }, 0);

  const totalPrice = basePrice + addonsTotal;

  const toggleAddon = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedAddons: prev.selectedAddons.includes(id)
        ? prev.selectedAddons.filter((item) => item !== id)
        : [...prev.selectedAddons, id]
    }));
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const generateWhatsAppMessage = () => {
    const addonNames = formData.selectedAddons
      .map((id) => SERVICE_ADDONS.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const text = `Hello Divine EcoWash! I would like to book a mobile detailing appointment:
• Vehicle: ${formData.vehicleYear || ''} ${formData.vehicleMakeModel || 'My Vehicle'} (${formData.vehicleType.toUpperCase()})
• Package: ${selectedPackage.name} ($${basePrice})
${addonNames ? `• Add-ons: ${addonNames} (+$${addonsTotal})` : ''}
• Total Est: $${totalPrice}
• Date/Time: ${formData.serviceDate} at ${formData.serviceTime}
• Location: ${formData.address || 'Address'}, ${formData.city}
• Name: ${formData.clientName || 'Client'}
• Phone: ${formData.clientPhone || 'Phone'}`;

    return encodeURIComponent(text);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (onBookingComplete) onBookingComplete();
  };

  if (submitted) {
    return (
      <div className="w-full max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#2E8B20]/30 shadow-xl text-center space-y-6 animate-in zoom-in-95 duration-200">
          <div className="w-16 h-16 bg-[#EEF8EA] text-[#2E8B20] rounded-full flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div>
            <span className="text-xs font-black uppercase tracking-widest text-[#2E8B20]">
              Booking Request Received
            </span>
            <h2 className="text-3xl font-black text-[#0B2347] mt-1">
              You're Scheduled for Divine Care!
            </h2>
            <p className="text-sm text-[#0B2347]/75 max-w-md mx-auto mt-2">
              Thank you, <strong className="text-[#0B2347]">{formData.clientName || 'valued customer'}</strong>. Our Los Angeles mobile detailing dispatch team will confirm your arrival window shortly.
            </p>
          </div>

          <div className="bg-[#F5F7F8] p-5 rounded-2xl border border-slate-200 text-left text-xs sm:text-sm space-y-2 max-w-md mx-auto">
            <div className="flex justify-between">
              <span className="text-[#0B2347]/60">Service Package:</span>
              <strong className="text-[#0B2347]">{selectedPackage.name}</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-[#0B2347]/60">Vehicle:</span>
              <strong className="text-[#0B2347]">
                {formData.vehicleYear} {formData.vehicleMakeModel} ({formData.vehicleType})
              </strong>
            </div>
            <div className="flex justify-between">
              <span className="text-[#0B2347]/60">Scheduled Date:</span>
              <strong className="text-[#0B2347]">
                {formData.serviceDate} at {formData.serviceTime}
              </strong>
            </div>
            <div className="flex justify-between">
              <span className="text-[#0B2347]/60">Service Address:</span>
              <strong className="text-[#0B2347]">{formData.address}, {formData.city}</strong>
            </div>
            <div className="flex justify-between pt-2 border-t border-slate-200 text-sm">
              <span className="font-bold text-[#0B2347]">Estimated Total:</span>
              <strong className="text-base font-black text-[#2E8B20]">${totalPrice}</strong>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <a
              href={`https://wa.me/13239211494?text=${generateWhatsAppMessage()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full text-xs font-black uppercase tracking-wider shadow-md flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Confirm Instantly on WhatsApp</span>
            </a>

            <button
              onClick={() => {
                setSubmitted(false);
                setStep(1);
              }}
              className="w-full sm:w-auto px-6 py-3 bg-[#F5F7F8] hover:bg-slate-200 text-[#0B2347] rounded-full text-xs font-bold"
            >
              Book Another Vehicle
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 space-y-8 pb-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="px-3.5 py-1 bg-[#EEF8EA] text-[#2E8B20] text-xs font-black uppercase tracking-widest rounded-full">
          Mobile Service Booking
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-[#0B2347] mt-2">
          Schedule Your <span className="text-[#12A9E8]">Divine EcoWash</span>
        </h1>
        <p className="text-xs sm:text-sm text-[#0B2347]/70 mt-1">
          Complete the quick 4-step form below or message us directly on WhatsApp at (323) 921-1494.
        </p>
      </div>

      {/* Step Indicator */}
      <div className="grid grid-cols-4 gap-2 max-w-2xl mx-auto">
        {[
          { num: 1, title: 'Vehicle' },
          { num: 2, title: 'Package' },
          { num: 3, title: 'Time & Location' },
          { num: 4, title: 'Contact' }
        ].map((s) => (
          <button
            key={s.num}
            onClick={() => setStep(s.num)}
            className={`p-2.5 rounded-2xl border text-center transition-all ${
              step === s.num
                ? 'bg-[#0B2347] text-white border-[#0B2347] shadow-sm'
                : step > s.num
                ? 'bg-[#EEF8EA] text-[#2E8B20] border-[#2E8B20]/30 font-bold'
                : 'bg-white text-[#0B2347]/50 border-slate-200'
            }`}
          >
            <span className="text-[10px] font-black uppercase block tracking-wider">Step {s.num}</span>
            <span className="text-xs font-extrabold truncate">{s.title}</span>
          </button>
        ))}
      </div>

      {/* Main Form Box + Summary Sidebar Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Form Steps Card (Col 8) */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-[#E8F8FC] shadow-sm">
          {/* STEP 1: VEHICLE */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-black text-[#0B2347]">Select Vehicle Class</h3>
                <p className="text-xs text-[#0B2347]/60">Choose the size category that matches your vehicle.</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'sedan', label: 'Coupe / Sedan', icon: Car },
                  { id: 'suv', label: 'Crossover / SUV', icon: Car },
                  { id: 'truck', label: 'Truck / Large SUV', icon: Car },
                  { id: 'luxury', label: 'Exotic / Luxury', icon: Sparkles }
                ].map((type) => {
                  const isSelected = formData.vehicleType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, vehicleType: type.id as VehicleSize })}
                      className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-2 ${
                        isSelected
                          ? 'border-[#2E8B20] bg-[#EEF8EA] text-[#0B2347] ring-2 ring-[#2E8B20]/20'
                          : 'border-slate-200 bg-[#F5F7F8] hover:border-slate-300'
                      }`}
                    >
                      <type.icon className={`w-6 h-6 ${isSelected ? 'text-[#2E8B20]' : 'text-slate-500'}`} />
                      <span className="text-xs font-extrabold">{type.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="text-xs font-extrabold text-[#0B2347] block mb-1">
                    Vehicle Year:
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 2024"
                    value={formData.vehicleYear}
                    onChange={(e) => setFormData({ ...formData, vehicleYear: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F7F8] border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#12A9E8]"
                  />
                </div>
                <div>
                  <label className="text-xs font-extrabold text-[#0B2347] block mb-1">
                    Make & Model:
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Tesla Model Y / Range Rover"
                    value={formData.vehicleMakeModel}
                    onChange={(e) => setFormData({ ...formData, vehicleMakeModel: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F7F8] border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#12A9E8]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: PACKAGE & ADDONS */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-black text-[#0B2347]">Choose Detailing Package</h3>
                <p className="text-xs text-[#0B2347]/60">Select your base service package.</p>
              </div>

              <div className="space-y-3">
                {SERVICE_PACKAGES.map((pkg) => {
                  const isSelected = formData.packageId === pkg.id;
                  const price = pkg.pricing[formData.vehicleType];
                  return (
                    <div
                      key={pkg.id}
                      onClick={() => setFormData({ ...formData, packageId: pkg.id })}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                        isSelected
                          ? 'border-[#2E8B20] bg-[#EEF8EA] shadow-sm'
                          : 'border-slate-200 bg-[#F5F7F8] hover:border-slate-300'
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-sm text-[#0B2347]">{pkg.name}</span>
                          {pkg.popular && (
                            <span className="bg-[#2E8B20] text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase">
                              Best Value
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[#0B2347]/65 mt-0.5">{pkg.tagline}</p>
                        <span className="text-[11px] font-bold text-[#12A9E8] mt-1 inline-block">
                          Duration: {pkg.duration}
                        </span>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className="text-lg font-black text-[#0B2347]">${price}</span>
                        <div
                          className={`w-5 h-5 rounded-full border flex items-center justify-center mt-1 ml-auto ${
                            isSelected
                              ? 'bg-[#2E8B20] border-[#2E8B20] text-white'
                              : 'border-slate-300 bg-white'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-black uppercase tracking-wider text-[#0B2347]/70 block mb-2">
                  Optional Add-on Treatments:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {SERVICE_ADDONS.map((addon) => {
                    const isChecked = formData.selectedAddons.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between text-xs ${
                          isChecked
                            ? 'border-[#2E8B20] bg-white ring-1 ring-[#2E8B20]'
                            : 'border-slate-200 bg-[#F5F7F8]'
                        }`}
                      >
                        <span className="font-bold text-[#0B2347]">{addon.name}</span>
                        <span className="font-black text-[#2E8B20] ml-2">+${addon.price}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: DATE & LOS ANGELES ADDRESS */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-black text-[#0B2347]">Mobile Service Location & Time</h3>
                <p className="text-xs text-[#0B2347]/60">Where and when should our mobile van arrive?</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-extrabold text-[#0B2347] block mb-1">
                    Preferred Date:
                  </label>
                  <input
                    type="date"
                    value={formData.serviceDate}
                    onChange={(e) => setFormData({ ...formData, serviceDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F7F8] border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#12A9E8]"
                  />
                </div>
                <div>
                  <label className="text-xs font-extrabold text-[#0B2347] block mb-1">
                    Preferred Time Slot:
                  </label>
                  <select
                    value={formData.serviceTime}
                    onChange={(e) => setFormData({ ...formData, serviceTime: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F7F8] border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#12A9E8]"
                  >
                    <option value="8:00 AM">8:00 AM (Early Morning)</option>
                    <option value="10:00 AM">10:00 AM (Morning)</option>
                    <option value="12:30 PM">12:30 PM (Midday)</option>
                    <option value="2:30 PM">2:30 PM (Afternoon)</option>
                    <option value="4:30 PM">4:30 PM (Late Afternoon)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div>
                  <label className="text-xs font-extrabold text-[#0B2347] block mb-1">
                    Street Address / Driveway / Office:
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 123 Wilshire Blvd, Apt 4B"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F7F8] border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#12A9E8]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-extrabold text-[#0B2347] block mb-1">City / Neighborhood:</label>
                    <input
                      type="text"
                      placeholder="e.g. Beverly Hills / Downtown LA"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F7F8] border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#12A9E8]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-extrabold text-[#0B2347] block mb-1">State:</label>
                    <input
                      type="text"
                      disabled
                      value="California (CA)"
                      className="w-full px-4 py-3 rounded-xl bg-slate-100 border border-slate-200 text-sm text-slate-500 font-bold"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: CONTACT & FINAL CONFIRMATION */}
          {step === 4 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-black text-[#0B2347]">Your Contact Information</h3>
                <p className="text-xs text-[#0B2347]/60">We will send appointment updates to this phone number.</p>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-xs font-extrabold text-[#0B2347] block mb-1">Full Name:</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Marcus Sterling"
                    value={formData.clientName}
                    onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F7F8] border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#12A9E8]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-extrabold text-[#0B2347] block mb-1">Phone / WhatsApp:</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 323-555-0199"
                      value={formData.clientPhone}
                      onChange={(e) => setFormData({ ...formData, clientPhone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F7F8] border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#12A9E8]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-extrabold text-[#0B2347] block mb-1">Email Address:</label>
                    <input
                      type="email"
                      placeholder="e.g. marcus@example.com"
                      value={formData.clientEmail}
                      onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F7F8] border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#12A9E8]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-extrabold text-[#0B2347] block mb-1">
                    Special Instructions / Gate Code / Pet Hair Notes (Optional):
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Park in visitor driveway, gate code #4412, focus extra on interior dog hair."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F7F8] border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#12A9E8]"
                  ></textarea>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Controls between steps */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-6">
            {step > 1 ? (
              <button
                type="button"
                onClick={handlePrev}
                className="px-5 py-2.5 rounded-full text-xs font-extrabold text-[#0B2347] bg-[#F5F7F8] hover:bg-slate-200 transition-colors flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            ) : (
              <div></div>
            )}

            {step < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider text-white bg-[#0B2347] hover:bg-[#12A9E8] transition-all flex items-center gap-2"
              >
                <span>Continue to Step {step + 1}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="px-7 py-3.5 rounded-full text-xs font-black uppercase tracking-wider text-white bg-[#2E8B20] hover:bg-[#27781B] shadow-lg shadow-[#2E8B20]/30 transition-all flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Confirm & Submit Booking</span>
              </button>
            )}
          </div>
        </div>

        {/* ORDER SUMMARY SIDEBAR (Col 4) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white rounded-3xl p-6 border border-[#E8F8FC] shadow-sm">
            <h4 className="text-base font-black text-[#0B2347] pb-3 border-b border-slate-100">
              Booking Summary
            </h4>

            <div className="space-y-3 py-4 text-xs">
              <div className="flex justify-between">
                <span className="text-[#0B2347]/60">Vehicle Class:</span>
                <strong className="text-[#0B2347] uppercase font-black">{formData.vehicleType}</strong>
              </div>

              <div className="flex justify-between">
                <span className="text-[#0B2347]/60">Base Package:</span>
                <strong className="text-[#0B2347]">{selectedPackage.name}</strong>
              </div>

              <div className="flex justify-between">
                <span className="text-[#0B2347]/60">Package Price:</span>
                <span className="font-bold text-[#0B2347]">${basePrice}</span>
              </div>

              {formData.selectedAddons.length > 0 && (
                <div className="pt-2 border-t border-slate-100">
                  <span className="text-[#0B2347]/60 block mb-1">Add-on Treatments:</span>
                  {formData.selectedAddons.map((id) => {
                    const addon = SERVICE_ADDONS.find((a) => a.id === id);
                    if (!addon) return null;
                    return (
                      <div key={id} className="flex justify-between text-[11px] text-[#0B2347]/80 pl-2">
                        <span>• {addon.name}</span>
                        <span className="font-bold">+${addon.price}</span>
                      </div>
                    );
                  })}
                </div>
              )}

              <div className="pt-3 border-t border-slate-100 flex justify-between items-baseline text-sm">
                <span className="font-black text-[#0B2347]">Estimated Total:</span>
                <span className="text-2xl font-black text-[#2E8B20]">${totalPrice}</span>
              </div>
            </div>

            {/* Direct WhatsApp Action */}
            <div className="pt-2 border-t border-slate-100">
              <a
                href={`https://wa.me/13239211494?text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-2xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Fast Book via WhatsApp</span>
              </a>
              <p className="text-[10px] text-center text-[#0B2347]/50 mt-1.5">
                Instant response from Los Angeles dispatch
              </p>
            </div>
          </div>

          <div className="bg-[#EEF8EA] rounded-3xl p-5 border border-[#2E8B20]/20 text-xs text-[#0B2347]/80 space-y-2">
            <div className="flex items-center gap-2 font-bold text-[#2E8B20]">
              <ShieldCheck className="w-4 h-4" />
              <span>Mobile Detailing Guarantee</span>
            </div>
            <p className="text-[11px]">
              No water or power hookup needed. We bring 100% of our own eco supplies and filtered water.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
