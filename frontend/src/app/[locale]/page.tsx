// This file is likely located at app/[locale]/page.tsx
'use client';

import { useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/react';
import HeroCarousel from '@/components/HeroCarousel';
import CabinsSection from '@/components/CabinSection';
import FeaturedEvents from '@/components/FeaturedEvents';

export default function HomePage() {
  const t = useTranslations('HomePage');
  const cabinSectionRef = useRef<HTMLDivElement>(null);
  const locationSectionRef = useRef<HTMLDivElement>(null);

  // THIS IS THE FIX 👇
  // We tell the function that the ref's .current property can be HTMLDivElement OR null.
  const handleScrollToSection = (targetRef: React.RefObject<HTMLDivElement>) => {
    const navbarElement = document.getElementById('main-navbar');
    
    if (targetRef.current && navbarElement) {
      const navbarHeight = navbarElement.offsetHeight;
      const targetPosition = targetRef.current.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = targetPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    } else if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.substring(1); 
      if (id === 'cabins') {
        setTimeout(() => handleScrollToSection(cabinSectionRef), 100);
      }
    }
  }, []);

  return (
    <Box>
      <HeroCarousel onScrollToCabins={() => handleScrollToSection(cabinSectionRef)} />
      
      <FeaturedEvents />

      <CabinsSection ref={cabinSectionRef} />

      {/* <LocationSection ref={locationSectionRef} /> */}

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