// components/PropertyCard.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { 
  Box, 
  Heading, 
  Text, 
  Button, 
  Flex, 
  Icon,
  HStack
} from '@chakra-ui/react';
import { FaUser, FaHome } from 'react-icons/fa';
import { Property } from './CabinSection'; // This import still works

interface PropertyCardProps {
  property: Property;
  onBookNow: (property: Property) => void;
  onImageClick: (property: Property) => void; // NEW: Add prop for image click
}

const PropertyCard = ({ property, onBookNow, onImageClick }: PropertyCardProps) => {
  const t = useTranslations('HomePage.cabins');

  return (
    <Box
      bg="white"
      rounded="lg"
      overflow="hidden"
      shadow="md"
      transition="all 0.3s"
      _hover={{ 
        shadow: 'xl',
        transform: 'translateY(-4px)'
      }}
    >
      {/* Property Image - Now clickable */}
      <Box
        h={64}
        position="relative"
        onClick={() => onImageClick(property)} // NEW: Click handler
        cursor="pointer" // NEW: Add pointer cursor to indicate it's clickable
      >
        <Image
          src={property.imageUrls[0]} // CHANGED: Use first image of the array
          alt={property.name}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Box>
      
      {/* Property Content (unchanged) */}
      <Box p={6}>
        <Heading as="h3" size="md" mb={2} color="gray.800">
          {property.name}
        </Heading>
        
        <Text color="gray.600" mb={4}>
          {property.description}
        </Text>
        
        <Flex direction="column" gap={2} mb={4}>
          <HStack>
            <Icon as={FaUser} color="green.600" boxSize={4} />
            <Text fontSize="sm" color="gray.700">
              {t('sleeps')} {property.maxGuests} {t('guests')}
            </Text>
          </HStack>
          
          <HStack>
            <Icon as={FaHome} color="green.600" boxSize={4} />
            <Text fontSize="sm" color="gray.700">
              {property.sqFt} {t('sqft')}
            </Text>
          </HStack>
        </Flex>
        
        <Flex justify="space-between" align="center" flexWrap="wrap" gap={2}>
          <Box>
            <Text fontSize="xl" fontWeight="bold" color="green.700">
              ${property.pricePerNight}/{t('night')}
            </Text>
          </Box>
          
          <HStack gap={2}>
            {/* <Link href={`/properties/${property.id}`}>
              <Button
                variant="outline"
                colorScheme="green"
                size="sm"
                _hover={{ bg: 'green.50' }}
              >
                {t('details')}
              </Button>
            </Link> */}
            
            <Button
              colorScheme="green"
              size="sm"
              onClick={() => onBookNow(property)}
            >
              {t('bookNow')}
            </Button>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default PropertyCard;