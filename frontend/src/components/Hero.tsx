'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

export default function Hero() {
  const t = useTranslations('HomePage.hero');

  return (
    <Box
      h="100vh"
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {/* Background Image */}
      <Image
        src="/images/hero/hero-background.jpg"
        alt="Mountain landscape with wooden cabins"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
      
      {/* Dark overlay for better text readability */}
      <Box
        position="absolute"
        inset={0}
        bg="blackAlpha.400"
        zIndex={1}
      />
      
      {/* Hero Content */}
      <Box 
        textAlign="center" 
        color="white" 
        px={4} 
        position="relative" 
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
    </Box>
  );
}