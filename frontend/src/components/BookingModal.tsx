'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import {
  Button,
  VStack,
  HStack,
  Box,
  Text,
  Input,
  Field,
  NativeSelectRoot,
  NativeSelectField,
  Textarea,
  Separator,
  createToaster,
  IconButton
} from '@chakra-ui/react';
import { X } from 'lucide-react';
import { Property } from './CabinSection';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  property: Property;
  whatsappNumber?: string;
}

const toaster = createToaster({
  placement: 'top',
});

const BookingModal = ({ 
  isOpen, 
  onClose, 
  property, 
  whatsappNumber = "1234567890"
}: BookingModalProps) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [totalNights, setTotalNights] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const t = useTranslations('BookingModal');

  // Calculate total nights and price when dates change
  useEffect(() => {
    if (checkIn && checkOut) {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);
      const timeDiff = checkOutDate.getTime() - checkInDate.getTime();
      const nights = Math.ceil(timeDiff / (1000 * 3600 * 24));
      
      if (nights > 0) {
        setTotalNights(nights);
        setTotalPrice(nights * property.pricePerNight);
      } else {
        setTotalNights(0);
        setTotalPrice(0);
      }
    }
  }, [checkIn, checkOut, property.pricePerNight]);

  // Prevent background scroll when modal is open
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

  // Get minimum date (today)
  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  // Get minimum checkout date (day after checkin)
  const getMinCheckoutDate = () => {
    if (!checkIn) return getMinDate();
    const checkInDate = new Date(checkIn);
    checkInDate.setDate(checkInDate.getDate() + 1);
    return checkInDate.toISOString().split('T')[0];
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!checkIn || !checkOut || !name || !email) {
      toaster.create({
        title: t('error'),
        description: t('fillRequired'),
        type: 'error',
        duration: 3000,
      });
      return;
    }

    if (guests > property.maxGuests) {
      toaster.create({
        title: t('error'),
        description: t('tooManyGuests', { max: property.maxGuests }),
        type: 'error',
        duration: 3000,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Create WhatsApp message
      const whatsappMessage = `🏠 *NEW BOOKING REQUEST*

*Property:* ${property.name}
*Description:* ${property.description}

📅 *Booking Details:*
• Check-in: ${formatDate(checkIn)}
• Check-out: ${formatDate(checkOut)}
• Number of nights: ${totalNights}
• Guests: ${guests}
• Total Price: $${totalPrice}

👤 *Guest Information:*
• Name: ${name}
• Email: ${email}
• Phone: ${phone || 'Not provided'}

💬 *Special Requests:*
${message || 'None'}

---
*Booking generated from website*`;

      // URL encode the message
      const encodedMessage = encodeURIComponent(whatsappMessage);
      
      // Create WhatsApp URL
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      
      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank');
      
      toaster.create({
        title: t('success'),
        description: t('whatsappRedirect'),
        type: 'success',
        duration: 4000,
      });
      
      // Reset form after a short delay
      setTimeout(() => {
        setCheckIn('');
        setCheckOut('');
        setGuests(1);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        onClose();
      }, 1000);

    } catch (error) {
      toaster.create({
        title: t('error'),
        description: t('whatsappFailed'),
        type: 'error',
        duration: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle escape key
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

  if (!isOpen) return null;

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      bg="blackAlpha.600"
      zIndex={1000}
      display="flex"
      alignItems="center"
      justifyContent="center"
      p={{ base: 2, md: 4 }}
      onClick={handleBackdropClick}
    >
      <Box
        bg="white"
        borderRadius="lg"
        boxShadow="2xl"
        w={{ base: "100%", sm: "90%", md: "80%", lg: "60%", xl: "50%" }}
        maxW="600px"
        maxH={{ base: "95vh", md: "90vh" }}
        position="relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <HStack
          justify="space-between"
          align="center"
          p={{ base: 4, md: 6 }}
          borderBottom="1px"
          borderColor="gray.200"
          bg="gray.50"
          borderTopRadius="lg"
        >
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight="bold"
            color="gray.800"
            flex={1}
            pr={4}
            // noOfLines={2}
          >
            {t('bookProperty')} - {property.name}
          </Text>
          <IconButton
            aria-label="Close modal"
            variant="ghost"
            colorScheme="gray"
            size="sm"
            onClick={onClose}
            flexShrink={0}
          >
            {<X size={20} />}
          </IconButton>
        </HStack>

        {/* Scrollable Content */}
        <Box
          overflowY="auto"
          maxH={{ base: "calc(95vh - 180px)", md: "calc(90vh - 160px)" }}
          css={{
            '&::-webkit-scrollbar': {
              width: '6px',
            },
            '&::-webkit-scrollbar-track': {
              background: '#f1f1f1',
              borderRadius: '3px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#c1c1c1',
              borderRadius: '3px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              background: '#a8a8a8',
            },
          }}
        >
          <Box p={{ base: 4, md: 6 }}>
            <form onSubmit={handleSubmit}>
              <VStack gap={{ base: 4, md: 5 }} align="stretch">
                {/* Property Info */}
                <Box p={4} bg="gray.50" rounded="md">
                  <Text fontWeight="semibold" mb={2} fontSize={{ base: "md", md: "lg" }}>
                    {property.name}
                  </Text>
                  <Text fontSize="sm" color="gray.600" mb={3}>
                    {property.description}
                  </Text>
                  <HStack justify="space-between" flexWrap="wrap" gap={2}>
                    <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold" color="green.700">
                      ${property.pricePerNight}/{t('perNight')}
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                      {t('maxGuests')}: {property.maxGuests}
                    </Text>
                  </HStack>
                </Box>

                {/* Date Selection */}
                <VStack gap={4} align="stretch">
                  <HStack gap={4} flexDirection={{ base: "column", md: "row" }}>
                    <Field.Root flex={1}>
                      <Field.Label fontSize={{ base: "sm", md: "md" }} fontWeight="medium">
                        {t('checkIn')}
                      </Field.Label>
                      <Input
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        min={getMinDate()}
                        size="lg"
                      />
                    </Field.Root>
                    
                    <Field.Root flex={1}>
                      <Field.Label fontSize={{ base: "sm", md: "md" }} fontWeight="medium">
                        {t('checkOut')}
                      </Field.Label>
                      <Input
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        min={getMinCheckoutDate()}
                        size="lg"
                      />
                    </Field.Root>
                  </HStack>
                </VStack>

                {/* Guests */}
                <Field.Root>
                  <Field.Label fontSize={{ base: "sm", md: "md" }} fontWeight="medium">
                    {t('numberOfGuests')}
                  </Field.Label>
                  <NativeSelectRoot>
                    <NativeSelectField
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      // size="lg"
                    >
                      {Array.from({ length: property.maxGuests }, (_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1} {i === 0 ? t('guest') : t('guests')}
                        </option>
                      ))}
                    </NativeSelectField>
                  </NativeSelectRoot>
                </Field.Root>

                {/* Price Summary */}
                {totalNights > 0 && (
                  <Box p={4} bg="blue.50" rounded="md" border="1px" borderColor="blue.200">
                    <VStack gap={3} align="stretch">
                      <HStack justify="space-between">
                        <Text fontSize={{ base: "sm", md: "md" }}>
                          {t('nights', { count: totalNights })}
                        </Text>
                        <Text fontSize={{ base: "sm", md: "md" }}>
                          ${property.pricePerNight} × {totalNights}
                        </Text>
                      </HStack>
                      <Separator />
                      <HStack justify="space-between">
                        <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }}>
                          {t('total')}
                        </Text>
                        <Text fontWeight="bold" fontSize={{ base: "xl", md: "2xl" }} color="green.700">
                          ${totalPrice}
                        </Text>
                      </HStack>
                    </VStack>
                  </Box>
                )}

                {/* What's Included Section */}
                <Box p={4} bg="purple.50" rounded="md" border="1px" borderColor="purple.200">
                  <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }} color="purple.800" mb={3}>
                    ✨ {t('whatsIncluded.title')}
                  </Text>
                  <VStack gap={3} align="stretch">
                    {/* Frigobar Items */}
                    <Box>
                      <Text fontWeight="semibold" fontSize="sm" color="purple.700" mb={2}>
                        🧊 {t('whatsIncluded.frigobar.title')}
                      </Text>
                      <Box pl={3}>
                        <Text fontSize="xs" color="gray.700" lineHeight="tall">
                          • {t('whatsIncluded.frigobar.item1')}<br/>
                          • {t('whatsIncluded.frigobar.item2')}<br/>
                          • {t('whatsIncluded.frigobar.item3')}<br/>
                          • {t('whatsIncluded.frigobar.item4')}<br/>
                          • {t('whatsIncluded.frigobar.item5')}
                        </Text>
                      </Box>
                    </Box>
                    
                    {/* Additional Amenities */}
                    <Box>
                      <Text fontWeight="semibold" fontSize="sm" color="purple.700" mb={2}>
                        🏠 {t('whatsIncluded.amenities.title')}
                      </Text>
                      <Box pl={3}>
                        <Text fontSize="xs" color="gray.700" lineHeight="tall">
                          • {t('whatsIncluded.amenities.item1')}<br/>
                          • {t('whatsIncluded.amenities.item2')}<br/>
                          • {t('whatsIncluded.amenities.item3')}<br/>
                          • {t('whatsIncluded.amenities.item4')}<br/>
                          • {t('whatsIncluded.amenities.item5')}
                        </Text>
                      </Box>
                    </Box>
                  </VStack>
                </Box>

                <Separator />

                {/* Contact Information */}
                <Text fontWeight="semibold" color="gray.700" fontSize={{ base: "md", md: "lg" }}>
                  {t('contactInformation')}
                </Text>

                <VStack gap={4} align="stretch">
                  <HStack gap={4} flexDirection={{ base: "column", md: "row" }}>
                    <Field.Root flex={1}>
                      <Field.Label fontSize={{ base: "sm", md: "md" }} fontWeight="medium">
                        {t('fullName')}
                      </Field.Label>
                      <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={t('enterName')}
                        size="lg"
                      />
                    </Field.Root>
                    
                    <Field.Root flex={1}>
                      <Field.Label fontSize={{ base: "sm", md: "md" }} fontWeight="medium">
                        {t('email')}
                      </Field.Label>
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t('enterEmail')}
                        size="lg"
                      />
                    </Field.Root>
                  </HStack>
                </VStack>

                <Field.Root>
                  <Field.Label fontSize={{ base: "sm", md: "md" }} fontWeight="medium">
                    {t('phone')}
                  </Field.Label>
                  <Input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t('enterPhone')}
                    size="lg"
                  />
                </Field.Root>

                <Field.Root>
                  <Field.Label fontSize={{ base: "sm", md: "md" }} fontWeight="medium">
                    {t('specialRequests')}
                  </Field.Label>
                  <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t('enterRequests')}
                    rows={3}
                    resize="vertical"
                    fontSize={{ base: "sm", md: "md" }}
                  />
                </Field.Root>

                {/* WhatsApp Info */}
                <Box p={4} bg="green.50" rounded="md" border="1px" borderColor="green.200">
                  <HStack gap={3} align="center">
                    <Text fontSize="2xl">📱</Text>
                    <Text fontSize={{ base: "sm", md: "md" }} color="green.700" lineHeight="shorter">
                      {t('whatsappInfo')}
                    </Text>
                  </HStack>
                </Box>
              </VStack>
            </form>
          </Box>
        </Box>

        {/* Footer */}
        <HStack
          justify="space-between"
          p={{ base: 4, md: 6 }}
          borderTop="1px"
          borderColor="gray.200"
          bg="gray.50"
          borderBottomRadius="lg"
          gap={3}
          flexDirection={{ base: "column", sm: "row" }}
        >
          <Button
            variant="outline"
            onClick={onClose}
            w={{ base: "full", sm: "auto" }}
            order={{ base: 2, sm: 1 }}
          >
            {t('cancel')}
          </Button>
          <Button
            colorScheme="green"
            onClick={handleSubmit}
            loading={isSubmitting}
            loadingText={t('submitting')}
            disabled={!checkIn || !checkOut || !name || !email}
            w={{ base: "full", sm: "auto" }}
            order={{ base: 1, sm: 2 }}
            size="lg"
          >
            {t('reserveViaWhatsApp')}
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default BookingModal;