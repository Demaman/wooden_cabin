// components/CabinSection.tsx
'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import PropertyCard from './PropertyCard';
import BookingModal from './BookingModal';
import ImageLightbox from './ImageLightbox';

// Define Property type with an array for images
export interface Property {
  id: number;
  name: string;
  description: string;
  imageUrls: string[];
  pricePerNight: number;
  maxGuests: number;
  sqFt: number;
}

const SHARED_CABIN_IMAGES = [
  "/images/cabins/cabin-1.jpg",
  "/images/cabins/cabin-1-table.jpg",
  "/images/cabins/CabinDoorOpened.jpg",
  "/images/cabins/CabinFromDoor.jpg",
  "/images/cabins/CabinSide.jpg",
  "/images/cabins/CabinTransversal.jpg"
];

const CabinsSection = () => {
  // State for Booking Modal
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // State for Image Lightbox
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  
  const t = useTranslations('HomePage.cabins');
  const cabinData = useTranslations('CabinData');

  // 2. Define properties using the shared image constant.
  const properties: Property[] = [
    {
      id: 1,
      name: cabinData('cabin1.name'),
      description: cabinData('cabin1.description'),
      imageUrls: SHARED_CABIN_IMAGES, // Use the shared array
      pricePerNight: Number(cabinData('cabin1.price')),
      maxGuests: 2,
      sqFt: 25
    },
    {
      id: 2,
      name: cabinData('cabin2.name'),
      description: cabinData('cabin2.description'),
      imageUrls: SHARED_CABIN_IMAGES, // Use the shared array
      pricePerNight: Number(cabinData('cabin2.price')),
      maxGuests: 2,
      sqFt: 25
    },
    {
      id: 3,
      name: cabinData('cabin3.name'),
      description: cabinData('cabin3.description'),
      imageUrls: SHARED_CABIN_IMAGES, // Use the shared array
      pricePerNight: Number(cabinData('cabin3.price')),
      maxGuests: 2,
      sqFt: 25
    },
  ];

  const handleBookNow = (property: Property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const handleImageClick = (property: Property) => {
    setLightboxImages(property.imageUrls);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setLightboxImages([]);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProperty(null);
  };

  return (
    <Box as="section" id="cabins" py={16} bg="gray.50" scrollMarginTop="300px">
      <Box maxW="6xl" mx="auto" px={4}>
        <Heading 
          as="h2" 
          size="xl" 
          textAlign="center" 
          mb={12} 
          color="gray.800"
        >
          {t('title')}
        </Heading>
        
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
          {properties.map(property => (
            <PropertyCard
              key={property.id}
              property={property}
              onBookNow={handleBookNow}
              onImageClick={handleImageClick}
            />
          ))}
        </SimpleGrid>
      </Box>
      
      {selectedProperty && (
        <BookingModal
          isOpen={isModalOpen}
          onClose={closeModal}
          property={selectedProperty}
        />
      )}
      
      <ImageLightbox
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        images={lightboxImages}
      />
    </Box>
  );
};

export default CabinsSection;