import React, { useState, useEffect } from 'react';
import { PageTab, VehicleSize } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BentoHome } from './components/BentoHome';
import { ServicesView } from './components/ServicesView';
import { GalleryView } from './components/GalleryView';
import { AboutView } from './components/AboutView';
import { BookingView } from './components/BookingView';
import { FaqView } from './components/FaqView';
import { ContactView } from './components/ContactView';
import { BookingModal } from './components/BookingModal';
import { StickyMobileBar } from './components/StickyMobileBar';

export default function App() {
  const [activeTab, setActiveTab] = useState<PageTab>('home');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [bookingPackageId, setBookingPackageId] = useState<string | undefined>('divine-signature');
  const [bookingAddons, setBookingAddons] = useState<string[]>([]);
  const [bookingVehicleSize, setBookingVehicleSize] = useState<VehicleSize>('sedan');

  // Smooth scroll to top when changing tab
  const handleSelectTab = (tab: PageTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (
    packageId?: string,
    selectedAddons?: string[],
    vehicleSize?: VehicleSize
  ) => {
    if (packageId) setBookingPackageId(packageId);
    if (selectedAddons) setBookingAddons(selectedAddons);
    if (vehicleSize) setBookingVehicleSize(vehicleSize);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F5F7F8] text-[#0B2347] flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#12A9E8] selection:text-white">
      {/* Top Banner Notice */}
      <div className="bg-[#0B2347] text-white py-1.5 px-4 text-center text-[11px] font-bold tracking-wide border-b border-slate-800">
        <span className="text-[#22C55E]">💧 Mobile Detailing Across Los Angeles</span> • 50%–70% Water Saved with Biodegradable Formulas • Call / Text{' '}
        <a href="tel:3239211494" className="underline font-black text-[#12A9E8] hover:text-white">
          (323) 921-1494
        </a>
      </div>

      {/* Global Navigation Header */}
      <Header
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Dynamic Main View */}
      <main className="flex-1 w-full">
        {activeTab === 'home' && (
          <BentoHome
            onNavigate={handleSelectTab}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {activeTab === 'services' && (
          <ServicesView onOpenBooking={handleOpenBooking} />
        )}

        {activeTab === 'gallery' && (
          <GalleryView onOpenBooking={() => handleOpenBooking()} />
        )}

        {activeTab === 'about' && (
          <AboutView onOpenBooking={() => handleOpenBooking()} />
        )}

        {activeTab === 'booking' && (
          <BookingView
            initialPackageId={bookingPackageId}
            initialAddons={bookingAddons}
            initialVehicleSize={bookingVehicleSize}
          />
        )}

        {activeTab === 'faq' && (
          <FaqView onOpenBooking={() => handleOpenBooking()} />
        )}

        {activeTab === 'contact' && (
          <ContactView onOpenBooking={() => handleOpenBooking()} />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onSelectTab={handleSelectTab}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Mobile Sticky Quick Action Bar */}
      <StickyMobileBar onOpenBooking={() => handleOpenBooking()} />

      {/* Global Booking Modal Overlay */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialPackageId={bookingPackageId}
        initialAddons={bookingAddons}
        initialVehicleSize={bookingVehicleSize}
      />
    </div>
  );
}
