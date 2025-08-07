'use client';

import { useTranslations } from 'next-intl';
import { Box, Text, Heading, SimpleGrid, Button } from '@chakra-ui/react';
import fs from 'node:fs/promises';
import path from 'node:path';
import { getPlaiceholder } from 'plaiceholder';
import HeroCarousel from '@/components/HeroCarousel';
import CabinsSection from '@/components/CabinSection';


export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <Box>
      {/* Hero Section */}
      <HeroCarousel />
      
      {/* Featured Event Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="6xl" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" color="blue.800" mb={4}>
            {t('featuredEvent.title')}
          </Heading>
          <Text fontSize="lg" mb={6} color="gray.700">
            {t('featuredEvent.description')}
          </Text>
          <Button 
            colorScheme="blue" 
            size="lg"
            _hover={{ transform: 'scale(1.05)' }}
            transition="all 0.3s"
          >
            {t('featuredEvent.cta')}
          </Button>
        </Box>
      </Box>

      {/* Cabins Section with Booking Modal */}
      <CabinsSection />

      {/* Features Section */}
      <Box py={16} bg="gray.100">
        <Box maxW="6xl" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} color="gray.800">
            {t('features.title')}
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
            <Box p={6}>
              <Text fontSize="4xl" mb={4}>🏔️</Text>
              <Heading as="h3" size="md" mb={2}>
                {t('features.mountainViews.title')}
              </Heading>
              <Text color="gray.600">
                {t('features.mountainViews.description')}
              </Text>
            </Box>
            <Box p={6}>
              <Text fontSize="4xl" mb={4}>🔥</Text>
              <Heading as="h3" size="md" mb={2}>
                {t('features.cozyFireplaces.title')}
              </Heading>
              <Text color="gray.600">
                {t('features.cozyFireplaces.description')}
              </Text>
            </Box>
            <Box p={6}>
              <Text fontSize="4xl" mb={4}>🏃‍♂️</Text>
              <Heading as="h3" size="md" mb={2}>
                {t('features.trailAccess.title')}
              </Heading>
              <Text color="gray.600">
                {t('features.trailAccess.description')}
              </Text>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
}