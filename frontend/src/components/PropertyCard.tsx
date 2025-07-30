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
import { Property } from './CabinSection';

interface PropertyCardProps {
  property: Property;
  onBookNow: (property: Property) => void;
}

const PropertyCard = ({ property, onBookNow }: PropertyCardProps) => {
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
      {/* Property Image */}
      <Box h={64} position="relative">
        <Image
          src={property.imageUrl}
          alt={property.name}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Box>
      
      {/* Property Content */}
      <Box p={6}>
        <Heading as="h3" size="md" mb={2} color="gray.800">
          {property.name}
        </Heading>
        
        <Text color="gray.600" mb={4}>
          {property.description}
        </Text>
        
        {/* Property Details */}
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
        
        {/* Price and Actions */}
        <Flex justify="space-between" align="center" flexWrap="wrap" gap={2}>
          <Box>
            <Text fontSize="xl" fontWeight="bold" color="green.700">
              ${property.pricePerNight}/{t('night')+" "+t('money')}
            </Text>
          </Box>
          
          <HStack gap={2}>
            <Link href={`/properties/${property.id}`}>
              <Button
                variant="outline"
                colorScheme="green"
                size="sm"
                _hover={{ bg: 'green.50' }}
              >
                {t('details')}
              </Button>
            </Link>
            
            <Button
              colorScheme="green"
              size="sm"
              onClick={() => onBookNow(property)}
              _hover={{ transform: 'scale(1.05)' }}
              transition="all 0.2s"
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