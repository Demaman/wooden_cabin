'use client';

import Image from 'next/image';
// import Link from 'next/link'; // 1. We no longer need this
import { useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { Box, Heading, Text, Button, IconButton } from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const images = [
  '/images/views/hero-background.jpg',
  '/images/views/DeckViewWithPool.jpg',
  '/images/views/MoonligthView.jpg',
  '/images/views/MountainHorizontalView.jpg',
  '/images/views/PoolView.jpg',
  '/images/views/SunDawn.jpg',
];

interface HeroCarouselProps {
  onScrollToCabins: () => void;
}

export default function HeroCarousel({ onScrollToCabins }: HeroCarouselProps) {
  const t = useTranslations('HomePage.hero');

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);


  return (
    <Box position="relative" h="100vh">
      {/* ... (Carousel viewport code is unchanged) ... */}
      <Box h="100%" overflow="hidden" ref={emblaRef}>
        <Box display="flex" h="100%">
          {images.map((src, index) => (
            <Box key={index} flex="0 0 100%" position="relative" h="100%">
              <Image
                src={src}
                alt={`Mountain landscape view ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                priority={index === 0}
              />
            </Box>
          ))}
        </Box>
      </Box>

      <Box position="absolute" inset={0} bg="blackAlpha.500" zIndex={1} />

      <Box
        position="absolute"
        inset={0}
        zIndex={2}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        color="white"
        px={4}
      >
        <Heading
          as="h1"
          size={{ base: '2xl', md: '4xl' }}
          fontWeight="bold"
          mb={4}
          textShadow="2px 2px 4px rgba(0,0,0,0.3)"
          maxW="4xl"
        >
          {t('title')}
        </Heading>

        <Text
          fontSize={{ base: 'xl', md: '2xl' }}
          mb={8}
          textShadow="1px 1px 2px rgba(0,0,0,0.3)"
          maxW="2xl"
        >
          {t('subtitle')}
        </Text>

        <Button
          onClick={onScrollToCabins}
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
            shadow: 'xl',
          }}
          transition="all 0.3s ease"
          shadow="lg"
        >
          {t('cta')}
        </Button>
      </Box>

      <IconButton
        aria-label="Previous slide"
        onClick={scrollPrev}
        position="absolute"
        left={{ base: 4, md: 8 }}
        top="50%"
        transform="translateY(-50%)"
        zIndex={2}
        colorScheme="blackAlpha"
      >
        <FaChevronLeft />
      </IconButton>
      <IconButton
        aria-label="Next slide"
        onClick={scrollNext}
        position="absolute"
        right={{ base: 4, md: 8 }}
        top="50%"
        transform="translateY(-50%)"
        zIndex={2}
        colorScheme="blackAlpha"
      >
        <FaChevronRight />
      </IconButton>
    </Box>
  );
}