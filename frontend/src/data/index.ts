import { Property, Testimonial } from '@/types';

export const properties: Property[] = [
  {
    id: 1,
    name: 'Pine Ridge Cabin',
    description: 'Cozy 2-bedroom cabin with mountain views and a wood-burning fireplace.',
    imageUrl: '/images/cabin1.jpg',
    pricePerNight: 120,
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 1,
    sqFt: 800,
    amenities: [
      'Wood-burning fireplace',
      'Fully equipped kitchen',
      'High-speed WiFi',
      'Mountain views',
      'Outdoor deck',
      'BBQ grill'
    ],
    features: ['Mountain View', 'Pet Friendly', 'Fireplace'],
    location: 'Forest Hills'
  },
  {
    id: 2,
    name: 'Aspen View Cabin',
    description: 'Spacious 3-bedroom cabin with panoramic views and a hot tub.',
    imageUrl: '/images/cabin2.jpg',
    pricePerNight: 180,
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 2,
    sqFt: 1200,
    amenities: [
      'Hot tub',
      'Panoramic mountain views',
      'Fully equipped kitchen',
      'High-speed WiFi',
      'Large deck',
      'Fire pit'
    ],
    features: ['Hot Tub', 'Mountain View', 'Large Groups'],
    location: 'Mountain Peak'
  },
  {
    id: 3,
    name: 'Bear Creek Cabin',
    description: 'Romantic 1-bedroom cabin with creek access and private deck.',
    imageUrl: '/images/cabin3.jpg',
    pricePerNight: 95,
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    sqFt: 600,
    amenities: [
      'Creek access',
      'Private deck',
      'Cozy fireplace',
      'Kitchenette',
      'High-speed WiFi',
      'Romantic setting'
    ],
    features: ['Waterfront', 'Romantic', 'Fireplace'],
    location: 'Bear Creek'
  },
  {
    id: 4,
    name: 'Riverside Cabin',
    description: 'Charming cabin next to a flowing river with a private deck. Perfect for couples looking for a romantic getaway in nature.',
    imageUrl: '/images/cabin4.jpg',
    pricePerNight: 135,
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    sqFt: 650,
    amenities: [
      'River views',
      'Private deck',
      'King-sized bed',
      'Soaking tub',
      'Kitchenette',
      'High-speed WiFi'
    ],
    features: ['Waterfront', 'Romantic', 'Luxury'],
    location: 'River Valley'
  },
  {
    id: 5,
    name: "Trail Runner's Haven",
    description: "Located right on the Mons Ultra Trail route, this cabin is the perfect base for training or race day. Featuring recovery facilities and trail maps.",
    imageUrl: '/images/cabin5.jpg',
    pricePerNight: 150,
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    sqFt: 900,
    amenities: [
      'Trail maps',
      'Recovery tools',
      'Gear storage',
      'Trail access',
      'Outdoor shower',
      'Fully equipped kitchen'
    ],
    features: ['Trail Access', 'Adventure', 'Outdoor'],
    location: 'Trail Head'
  },
  {
    id: 6,
    name: 'Hilltop Panorama',
    description: 'Luxury cabin on the hilltop with panoramic views of the valley. Spacious deck, hot tub, and premium amenities for a comfortable stay.',
    imageUrl: '/images/cabin6.jpg',
    pricePerNight: 210,
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 2,
    sqFt: 1400,
    amenities: [
      'Hot tub',
      'Panoramic views',
      'Gourmet kitchen',
      'Smart home features',
      'Premium linens',
      'Large deck'
    ],
    features: ['Luxury', 'Hot Tub', 'Mountain View'],
    location: 'Mountain Peak'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah J.',
    image: '/images/testimonials/person1.jpg',
    date: 'July 2023',
    rating: 5,
    text: 'The Pine Ridge Cabin was absolutely perfect! Cozy, clean, and with stunning views. We\'ll definitely be back!'
  },
  {
    id: 2,
    name: 'Michael T.',
    image: '/images/testimonials/person2.jpg',
    date: 'May 2023',
    rating: 5,
    text: 'The hot tub at Aspen View Cabin was amazing after a day of hiking. The cabin had everything we needed and more.'
  },
  {
    id: 3,
    name: 'Emily & David',
    image: '/images/testimonials/person3.jpg',
    date: 'February 2023',
    rating: 5,
    text: 'Bear Creek Cabin was the perfect romantic getaway. Falling asleep to the sound of the creek was magical.'
  },
  {
    id: 4,
    name: 'Jessica W.',
    image: '/images/testimonials/person4.jpg',
    date: 'April 2023',
    rating: 4,
    text: 'We loved our stay at the Riverside Cabin. The views were spectacular and the cabin was beautifully decorated.'
  },
  {
    id: 5,
    name: 'Robert K.',
    image: '/images/testimonials/person5.jpg',
    date: 'June 2023',
    rating: 5,
    text: 'The Trail Runner\'s Haven was perfect for our marathon training weekend. The recovery tools were a nice touch!'
  }
];