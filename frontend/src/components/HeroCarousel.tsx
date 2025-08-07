'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { Box, Heading, Text, Button, IconButton } from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

// Define the images for your carousel
const images = [
  '/images/views/hero-background.jpg',
  '/images/views/DeckViewWithPool.jpg',
  '/images/views/MoonligthView.jpg',
  '/images/views/MountainHorizontalView.jpg',
  '/images/views/PoolView.jpg',
  '/images/views/SunDawn.jpg',
];

export default function HeroCarousel() {
  const t = useTranslations('HomePage.hero');

  // 1. Initialize the carousel with options (loop) and plugins (autoplay)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  // 2. Create functions to control navigation
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <Box
      h="100vh"
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden" // Hide overflowing slides
      ref={emblaRef} // Attach the carousel ref here
    >
      {/* 3. Create the carousel slide container */}
      <Box display="flex" h="100%">
        {images.map((src, index) => (
          <Box
            key={index}
            flex="0 0 100%" // Each slide takes the full width
            position="relative"
            h="100%"
          >
            <Image
              src={src}
              alt={`Mountain landscape view ${index + 1}`}
              fill
              style={{ objectFit: 'cover' }}
              priority={index === 0} // Prioritize the first image for LCP
            />
          </Box>
        ))}
      </Box>
      
      {/* Dark overlay for better text readability */}
      <Box
        position="absolute"
        inset={0}
        bg="blackAlpha.500" // Increased opacity slightly for better contrast
        zIndex={1}
      />
      
      {/* Hero Content (positioned absolutely on top) */}
      <Box 
        textAlign="center" 
        color="white" 
        px={4} 
        position="absolute" // Changed from 'relative'
        zIndex={2}
        maxW="4xl"
      >
        <Heading 
          as="h1" 
          size={{ base: '2xl', md: '4xl' }} 
          fontWeight="bold" 
          mb={4}
          textShadow="2px 2px 4px rgba(0,0,0,0.3)"
        >
          {t('title')}
        </Heading>
        
        <Text 
          fontSize={{ base: 'xl', md: '2xl' }} 
          mb={8}
          textShadow="1px 1px 2px rgba(0,0,0,0.3)"
          maxW="2xl"
          mx="auto"
        >
          {t('subtitle')}
        </Text>
        
        <Link href="#cabins">
          <Button
            size="lg"
            colorScheme="green"
            variant="solid"
            rounded="full"
            px={8}
            py={6}
            fontSize="lg"
            fontWeight="semibold"
            _hover={{ 
              transform: 'scale(1.05)',
              shadow: 'xl'
            }}
            _active={{ transform: 'scale(0.98)' }}
            transition="all 0.3s ease"
            shadow="lg"
          >
            {t('cta')}
          </Button>
        </Link>
      </Box>

      {/* 4. Add Navigation Buttons */}
      <IconButton
        aria-label="Previous slide"
        onClick={scrollPrev}
        position="absolute"
        left={{ base: 4, md: 8 }}
        zIndex={2}
        variant="solid"
        colorScheme="blackAlpha"
      />
        <FaChevronLeft />
      <IconButton />
      <IconButton
        aria-label="Next slide"
        onClick={scrollNext}
        position="absolute"
        right={{ base: 4, md: 8 }}
        zIndex={2}
        variant="solid"
        colorScheme="blackAlpha"
      />
        <FaChevronRight />
      <IconButton/>
    </Box>
  );
}