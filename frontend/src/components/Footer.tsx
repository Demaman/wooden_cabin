import Link from 'next/link';
import { Box, Flex, Text } from '@chakra-ui/react';
import { FaHome, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="gray.900" color="white" py={8}>
      <Box maxW="6xl" mx="auto" px={4}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
        >
          <Box mb={{ base: 6, md: 0 }}>
            <Flex align="center" mb={2}>
              <Box color="green.400" mr={2}>
                <FaHome size={32} />
              </Box>
              <Text fontSize="lg" fontWeight="semibold">
                Mountain Wood Cabins
              </Text>
            </Flex>
            <Text color="gray.400" mb={4}>
              Rustic retreats in nature's embrace
            </Text>
            
            <Box>
              <Text fontSize="sm" fontWeight="semibold" mb={2} textTransform="uppercase">
                Follow Us
              </Text>
              <Flex gap={4}>
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Box
                    color="gray.400"
                    _hover={{ color: 'white' }}
                    transition="color 0.3s"
                    cursor="pointer"
                  >
                    <FaFacebook size={24} />
                  </Box>
                </Link>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Box
                    color="gray.400"
                    _hover={{ color: 'white' }}
                    transition="color 0.3s"
                    cursor="pointer"
                  >
                    <FaInstagram size={24} />
                  </Box>
                </Link>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Box
                    color="gray.400"
                    _hover={{ color: 'white' }}
                    transition="color 0.3s"
                    cursor="pointer"
                  >
                    <FaTwitter size={24} />
                  </Box>
                </Link>
              </Flex>
            </Box>
          </Box>
          
          <Flex direction="column" align={{ base: 'center', md: 'flex-end' }}>
            <Text color="gray.400" mb={4}>
              © {new Date().getFullYear()} Mountain Wood Cabins. All rights reserved.
            </Text>
            <Flex gap={6}>
              <Link href="/privacy">
                <Text
                  color="gray.400"
                  _hover={{ color: 'white' }}
                  transition="color 0.3s"
                  cursor="pointer"
                >
                  Privacy Policy
                </Text>
              </Link>
              <Link href="/terms">
                <Text
                  color="gray.400"
                  _hover={{ color: 'white' }}
                  transition="color 0.3s"
                  cursor="pointer"
                >
                  Terms of Service
                </Text>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;