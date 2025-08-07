'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import PropertyCard from './PropertyCard';
import BookingModal from './BookingModal';

// Define Property type
export interface Property {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  pricePerNight: number;
  maxGuests: number;
  sqFt: number;
}

const CabinsSection = () => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = useTranslations('HomePage.cabins');
  const cabinData = useTranslations('CabinData');

  // Define properties with translations
  const properties: Property[] = [
    {
      id: 1,
      name: cabinData('cabin1.name'),
      description: cabinData('cabin1.description'),
      imageUrl: "../../public/images/cabins/cabin-1.jpg",
      pricePerNight: Number(cabinData('cabin1.price')),
      maxGuests: 2,
      sqFt: 25
    },
    {
      id: 2,
      name: cabinData('cabin2.name'),
      description: cabinData('cabin2.description'),
      imageUrl: "/images/cabins/cabin-2.jpg",
      pricePerNight: Number(cabinData('cabin2.price')),
      maxGuests: 2,
      sqFt: 25
    },
    {
      id: 3,
      name: cabinData('cabin3.name'),
      description: cabinData('cabin3.description'),
      imageUrl: "/images/cabins/cabin-3.jpg",
      pricePerNight: Number(cabinData('cabin3.price')),
      maxGuests: 2,
      sqFt: 25
    },
  ];

  const handleBookNow = (property: Property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProperty(null);
  };

  return (
    <Box as="section" id="cabins" py={16} bg="white">
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
    </Box>
  );
};

export default CabinsSection;