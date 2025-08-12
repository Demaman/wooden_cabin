// components/ImageLightbox.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Box, IconButton } from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { X } from 'lucide-react';

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  startIndex?: number;
}

const ImageLightbox = ({ isOpen, onClose, images, startIndex = 0 }: ImageLightboxProps) => {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  // Reset index when the lightbox is opened with new images
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(startIndex);
    }
  }, [isOpen, startIndex]);

  // Prevent background scroll when modal is open (from your BookingModal)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key to close (from your BookingModal)
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);
  
  // Return null if not open or no images
  if (!isOpen || !images || images.length === 0) {
    return null;
  }

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  // Handle backdrop click to close (from your BookingModal)
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    // 1. The Modal Backdrop/Overlay
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      bg="blackAlpha.800" // Slightly darker for better focus
      zIndex={2000} // Higher zIndex to be on top of other modals if needed
      display="flex"
      alignItems="center"
      justifyContent="center"
      onClick={handleBackdropClick}
    >
      {/* 2. The Content Wrapper - prevents click propagation */}
      <Box
        position="relative"
        w="90vw"
        h="90vh"
        onClick={(e) => e.stopPropagation()} // Stop clicks inside from closing the modal
      >
        {/* Close Button */}
        <IconButton
          aria-label="Close lightbox"
          onClick={onClose}
          position="absolute"
          top={-2}
          right={-2}
          zIndex={10}
          colorScheme="whiteAlpha"
          variant="ghost"
          size="lg"
        >
          <X size={32} color="white" />
        </IconButton>

        {/* Current Image Display */}
        <Image
          src={images[currentIndex]}
          alt={`Cabin view ${currentIndex + 1}`}
          fill
          style={{ objectFit: 'contain' }}
          sizes="100vw"
        />

        {/* Previous Button */}
        <IconButton
          aria-label="Previous image"
          onClick={goToPrevious}
          position="absolute"
          left={{ base: 2, md: 4 }}
          top="50%"
          transform="translateY(-50%)"
          colorScheme="blackAlpha"
          size="lg"
          >
          <FaChevronLeft />
        </IconButton>

        {/* Next Button */}
        <IconButton
          aria-label="Next image"
          onClick={goToNext}
          position="absolute"
          right={{ base: 2, md: 4 }}
          top="50%"
          transform="translateY(-50%)"
          colorScheme="blackAlpha"
          size="lg"
          >
          <FaChevronRight />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ImageLightbox;