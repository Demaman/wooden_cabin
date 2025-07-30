export interface Property {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    pricePerNight: number;
    maxGuests: number;
    bedrooms: number;
    bathrooms: number;
    sqFt: number;
    amenities: string[];
    features?: string[];
    location?: string;
  }
  
  export interface Testimonial {
    id: number;
    name: string;
    image: string;
    date: string;
    rating: number;
    text: string;
  }
  
  export interface BookingFormData {
    propertyId: number;
    propertyName: string;
    checkIn: string;
    checkOut: string;
    guests: number;
    name: string;
    phone: string;
    email: string;
    estimatedTotal: number;
  }