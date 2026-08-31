export type PageTab = 'home' | 'services' | 'gallery' | 'about' | 'booking' | 'faq' | 'contact';

export type VehicleSize = 'sedan' | 'suv' | 'truck' | 'luxury';

export interface ServicePackage {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  popular?: boolean;
  pricing: {
    sedan: number;
    suv: number;
    truck: number;
    luxury: number;
  };
  duration: string;
  waterSaved: string;
  description: string;
  features: string[];
  recommendedFor: string;
}

export interface ServiceAddon {
  id: string;
  name: string;
  price: number;
  description: string;
  iconName: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: 'exterior' | 'interior' | 'paint' | 'wheels';
  vehicle: string;
  description: string;
  beforeDescription: string;
  afterDescription: string;
  imageUrl: string;
  beforeVisualType?: 'windshield' | 'console' | 'mirror' | 'mats' | 'prius_interior' | 'rear_suv' | 'blue_hood' | 'luxury_suv';
  accentText?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  vehicle: string;
  rating: number;
  date: string;
  review: string;
  service: string;
  verified: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'services' | 'eco' | 'mobile' | 'pricing';
}

export interface BookingFormData {
  vehicleType: VehicleSize;
  vehicleMakeModel: string;
  vehicleYear: string;
  packageId: string;
  selectedAddons: string[];
  serviceDate: string;
  serviceTime: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  address: string;
  city: string;
  notes: string;
}
