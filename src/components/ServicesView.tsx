import React, { useState } from 'react';
import { Check, Sparkles, Clock, Droplets, Shield, ArrowRight, Car, HelpCircle } from 'lucide-react';
import { VehicleSize } from '../types';
import { SERVICE_PACKAGES, SERVICE_ADDONS } from '../data/mockData';

interface ServicesViewProps {
  onOpenBooking: (packageId?: string, selectedAddons?: string[], vehicleSize?: VehicleSize) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onOpenBooking }) => {
  const [vehicleSize, setVehicleSize] = useState<VehicleSize>('sedan');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const vehicleOptions: { id: VehicleSize; label: string; description: string }[] = [
    { id: 'sedan', label: 'Coupe / Sedan', description: 'Civic, Camry, Model 3, C-Class, Porsche 911' },
    { id: 'suv', label: 'Crossover / Mid SUV', description: 'RAV4, Model Y, BMW X3/X5, Macan, Q5' },
    { id: 'truck', label: 'Truck / Large SUV', description: 'F-150, Tahoe, Escalade, Model X, Minivan' },
    { id: 'luxury', label: 'Exotic / Luxury', description: 'Bentley, Rolls-Royce, Ferrari, G-Wagon, Maybach' }
  ];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculateAddonsTotal = () => {
    return selectedAddons.reduce((sum, addonId) => {
      const addon = SERVICE_ADDONS.find((a) => a.id === addonId);
      return sum + (addon ? addon.price : 0);
    }, 0);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 space-y-10 pb-16">
      {/* Header Banner */}
      <div className="bg-[#0B2347] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-lg border border-slate-800">
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#12A9E8]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 max-w-2xl">
          <span className="px-3.5 py-1.5 bg-[#2E8B20] text-white text-xs font-black uppercase tracking-widest rounded-full">
            Transparent Pricing • Mobile Service
          </span>
          <h1 className="text-3xl sm:text-5xl font-black mt-4 leading-tight">
            Eco-Friendly <span className="text-[#12A9E8]">Detailing Packages</span>
          </h1>
          <p className="text-white/80 text-sm sm:text-base mt-3 leading-relaxed">
            Every Divine EcoWash package uses biodegradable formulas and high-efficiency microfiber technology. We come to your home or workplace anywhere in Los Angeles.
          </p>
        </div>

        {/* Vehicle Size Selector Bar */}
        <div className="relative z-10 mt-8 pt-6 border-t border-white/10">
          <label className="text-xs font-black uppercase tracking-wider text-cyan-200 block mb-3">
            Select Your Vehicle Class for Accurate Pricing:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {vehicleOptions.map((opt) => {
              const isSelected = vehicleSize === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setVehicleSize(opt.id)}
                  className={`p-3.5 rounded-2xl text-left transition-all border ${
                    isSelected
                      ? 'bg-white text-[#0B2347] border-white shadow-lg scale-[1.02]'
                      : 'bg-white/10 text-white/90 border-white/15 hover:bg-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-black uppercase tracking-wider">{opt.label}</span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-[#2E8B20]"></span>
                    )}
                  </div>
                  <p className="text-[10px] opacity-75 line-clamp-1">{opt.description}</p>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Packages Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICE_PACKAGES.map((pkg) => {
          const price = pkg.pricing[vehicleSize];
          return (
            <div
              key={pkg.id}
              className={`rounded-3xl p-6 flex flex-col justify-between transition-all border ${
                pkg.popular
                  ? 'bg-white border-[#2E8B20] shadow-xl ring-2 ring-[#2E8B20]/20 relative'
                  : 'bg-white border-[#E8F8FC] shadow-sm hover:shadow-md'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-[#2E8B20] text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-md">
                  Most Popular in LA
                </div>
              )}

              <div>
                {/* Header */}
                <div className="mb-4">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#12A9E8] block">
                    {pkg.badge}
                  </span>
                  <h3 className="text-xl font-black text-[#0B2347] mt-1">{pkg.name}</h3>
                  <p className="text-xs text-[#0B2347]/70 mt-1">{pkg.tagline}</p>
                </div>

                {/* Price Display */}
                <div className="my-5 p-4 bg-[#F5F7F8] rounded-2xl border border-slate-100 flex items-baseline justify-between">
                  <div>
                    <span className="text-3xl font-black text-[#0B2347]">${price}</span>
                    <span className="text-xs text-[#0B2347]/50 font-bold ml-1">/ detail</span>
                  </div>
                  <div className="text-right text-[11px] text-[#0B2347]/60 font-semibold">
                    <span className="flex items-center justify-end gap-1">
                      <Clock className="w-3 h-3 text-[#12A9E8]" />
                      {pkg.duration}
                    </span>
                    <span className="flex items-center justify-end gap-1 text-[#2E8B20] font-bold mt-0.5">
                      <Droplets className="w-3 h-3" />
                      {pkg.waterSaved}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2.5 my-5">
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#0B2347]/50 block">
                    Included Services:
                  </span>
                  {pkg.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#0B2347]/80">
                      <div className="w-4 h-4 rounded-full bg-[#EEF8EA] text-[#2E8B20] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100 mt-4">
                <button
                  onClick={() => onOpenBooking(pkg.id, selectedAddons, vehicleSize)}
                  className={`w-full py-3 rounded-full text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${
                    pkg.popular
                      ? 'bg-[#2E8B20] hover:bg-[#27781B] text-white shadow-md shadow-[#2E8B20]/25'
                      : 'bg-[#0B2347] hover:bg-[#12A9E8] text-white'
                  }`}
                >
                  <span>Select & Book</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add-ons & Custom Enhancements Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8F8FC] shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-[#2E8B20]">
              Custom Enhancements
            </span>
            <h2 className="text-2xl font-black text-[#0B2347] mt-1">Specialty Add-On Services</h2>
            <p className="text-xs sm:text-sm text-[#0B2347]/70">
              Customize your detail package with targeted restorative treatments.
            </p>
          </div>

          {selectedAddons.length > 0 && (
            <div className="px-4 py-2 bg-[#EEF8EA] rounded-2xl border border-[#2E8B20]/30 text-right">
              <span className="text-xs font-bold text-[#0B2347]/70 block">
                {selectedAddons.length} Add-on(s) selected:
              </span>
              <span className="text-base font-black text-[#2E8B20]">+${calculateAddonsTotal()}</span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICE_ADDONS.map((addon) => {
            const isChecked = selectedAddons.includes(addon.id);
            return (
              <div
                key={addon.id}
                onClick={() => toggleAddon(addon.id)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                  isChecked
                    ? 'border-[#2E8B20] bg-[#EEF8EA]/50 shadow-sm'
                    : 'border-slate-200 bg-[#F5F7F8] hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-sm text-[#0B2347]">{addon.name}</span>
                  </div>
                  <p className="text-xs text-[#0B2347]/65 mt-1">{addon.description}</p>
                </div>

                <div className="text-right flex-shrink-0">
                  <span className="text-sm font-black text-[#2E8B20] block">+${addon.price}</span>
                  <div
                    className={`w-5 h-5 rounded-md border flex items-center justify-center mt-2 ml-auto ${
                      isChecked
                        ? 'bg-[#2E8B20] border-[#2E8B20] text-white'
                        : 'border-slate-300 bg-white'
                    }`}
                  >
                    {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
