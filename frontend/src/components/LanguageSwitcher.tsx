'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Button, Flex, Text } from '@chakra-ui/react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: 'en' | 'pt') => {
    // Remove current locale from pathname and add new one
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    const newPath = `/${newLocale}${pathWithoutLocale || ''}`;
    router.push(newPath);
  };

  return (
    <Flex align="center" gap={2}>
      <Button
        size="sm"
        variant={locale === 'en' ? 'solid' : 'ghost'}
        colorScheme={locale === 'en' ? 'green' : 'gray'}
        onClick={() => switchLanguage('en')}
        minW="auto"
        px={3}
        py={1}
        fontSize="sm"
        fontWeight="medium"
      >
        EN
      </Button>
      
      <Text color="gray.400" fontSize="sm">|</Text>
      
      <Button
        size="sm"
        variant={locale === 'pt' ? 'solid' : 'ghost'}
        colorScheme={locale === 'pt' ? 'green' : 'gray'}
        onClick={() => switchLanguage('pt')}
        minW="auto"
        px={3}
        py={1}
        fontSize="sm"
        fontWeight="medium"
      >
        PT
      </Button>
    </Flex>
  );
}