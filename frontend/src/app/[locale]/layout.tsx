// src/app/[locale]/layout.tsx

import {NextIntlClientProvider, hasLocale} from 'next-intl';
// Import getTranslations for metadata
import {getMessages, getTranslations, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import {Provider} from '@/components/ui/provider';
import Navbar from '@/components/Navbar';
import { use } from 'react';
import type { Metadata } from 'next';

// This function tells Next.js which locales to build statically
export function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale: locale,
  }));
}

// This new function generates metadata for each locale
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  // Use getTranslations to load the messages for the given locale
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);

  setRequestLocale(locale);

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <Provider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Navbar />
            {children}
          </NextIntlClientProvider>
        </Provider>
      </body>
    </html>
  );
}