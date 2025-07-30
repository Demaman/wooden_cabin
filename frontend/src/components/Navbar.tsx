'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Box, Flex, Text, HStack, IconButton } from '@chakra-ui/react';
import { FaHome, FaBars, FaTimes, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('Navigation');

  const navLinks = [
    { name: t('ourCabins'), href: '/#cabins', id: 'cabins' },
    { name: t('about'), href: '/about', id: 'about' },
    { name: t('location'), href: '/#location', id: 'location' },
  ];

  const socialLinks = [
    {
      name: 'WhatsApp',
      href: 'https://wa.me/5547997223196',
      icon: FaWhatsapp,
      color: 'green.500',
      hoverColor: 'green.600'
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/vita.bella25?igsh=bzRmcnF2aTE4enpt',
      icon: FaInstagram,
      color: 'pink.500',
      hoverColor: 'pink.600'
    }
  ];

  const isActiveLink = (href: string) => {
    if (href.startsWith('/#')) {
      return pathname === '/' || pathname.endsWith('/');
    }
    return pathname.endsWith(href);
  };

  const handleLogoClick = () => {
    setIsOpen(false);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <Box bg="white" shadow="lg" position="sticky" top={0} zIndex={50}>
      <div style={{ maxWidth: '80rem', margin: '0 auto'}}>
        <Flex minH={16} py={4} align="center" justify="space-between">
          {/* Logo */}
          <Link href="/" onClick={handleLogoClick}>
            <Flex align="center" cursor="pointer">
              <Box color="green.500" mr={2}>
                <FaHome size={32} />
              </Box>
              <Text fontSize="lg" fontWeight="semibold" color="gray.900">
                {t('brand')}
              </Text>
            </Flex>
          </Link>

          {/* Desktop Menu */}
          <Flex display={{ base: 'none', md: 'flex' }} gap={6} align="center">
            {navLinks.map((link) => (
              <Link key={link.id} href={link.href} onClick={handleLinkClick}>
                <Text
                  fontSize="md"
                  fontWeight={isActiveLink(link.href) ? 'medium' : 'normal'}
                  color={isActiveLink(link.href) ? 'green.500' : 'gray.700'}
                  _hover={{ color: 'green.500' }}
                  transition="color 0.3s"
                >
                  {link.name}
                </Text>
              </Link>
            ))}
            
            {/* Social Media Icons */}
            <HStack gap={2} ml={2}>
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <IconButton
                    key={social.name}
                    aria-label={social.name}
                    variant="ghost"
                    colorScheme="gray"
                    color={social.color}
                    _hover={{ 
                      color: social.hoverColor,
                      bg: 'gray.100',
                      transform: 'scale(1.1)'
                    }}
                    transition="all 0.3s"
                    onClick={() => handleSocialClick(social.href)}
                    size="md"
                  >
                    <IconComponent size={20} />
                  </IconButton>
                );
              })}
            </HStack>
            
            <LanguageSwitcher />
          </Flex>

          {/* Mobile menu button */}
          <Box
            display={{ base: 'block', md: 'none' }}
            onClick={() => setIsOpen(!isOpen)}
            cursor="pointer"
            p={2}
            _hover={{ bg: 'gray.100' }}
            rounded="md"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </Box>
        </Flex>

        {/* Mobile Menu */}
        {isOpen && (
          <Box pb={4} display={{ md: 'none' }} borderTopWidth={1} borderColor="gray.200">
            <Flex direction="column" gap={2} pt={4}>
              {navLinks.map((link) => (
                <Link key={link.id} href={link.href}>
                  <Text
                    py={2}
                    px={2}
                    fontSize="md"
                    fontWeight={isActiveLink(link.href) ? 'medium' : 'normal'}
                    color={isActiveLink(link.href) ? 'green.500' : 'gray.700'}
                    onClick={handleLinkClick}
                    cursor="pointer"
                    _hover={{ color: 'green.500' }}
                    transition="color 0.3s"
                  >
                    {link.name}
                  </Text>
                </Link>
              ))}
              
              {/* Mobile Social Media */}
              <Box py={2} px={2}>
                <Text fontSize="sm" color="gray.600" mb={2} fontWeight="medium">
                  {t('connect')}
                </Text>
                <HStack gap={3}>
                  {socialLinks.map((social) => (
                    <Flex
                      key={social.name}
                      align="center"
                      gap={2}
                      cursor="pointer"
                      onClick={() => handleSocialClick(social.href)}
                      _hover={{ color: social.hoverColor }}
                      transition="color 0.3s"
                      color={social.color}
                    >
                      <social.icon size={20} />
                      <Text fontSize="sm" fontWeight="medium">
                        {social.name}
                      </Text>
                    </Flex>
                  ))}
                </HStack>
              </Box>
              
              <Box py={2} px={2} borderTopWidth={1} borderColor="gray.100" mt={2}>
                <LanguageSwitcher />
              </Box>
            </Flex>
          </Box>
        )}
      </div>
    </Box>
  );
};

export default Navbar;