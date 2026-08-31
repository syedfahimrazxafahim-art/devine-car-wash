import React from 'react';
import { X } from 'lucide-react';
import { VehicleSize } from '../types';
import { BookingView } from './BookingView';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackageId?: string;
  initialAddons?: string[];
  initialVehicleSize?: VehicleSize;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialPackageId,
  initialAddons,
  initialVehicleSize
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0B2347]/70 backdrop-blur-sm flex items-start justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-[#F5F7F8] rounded-3xl shadow-2xl border border-slate-200 my-6 overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#0B2347] shadow-md flex items-center justify-center transition-colors focus:outline-none"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-4 sm:p-8">
          <BookingView
            initialPackageId={initialPackageId}
            initialAddons={initialAddons}
            initialVehicleSize={initialVehicleSize}
            onBookingComplete={() => {
              // Keep view or allow review
            }}
          />
        </div>
      </div>
    </div>
  );
};
