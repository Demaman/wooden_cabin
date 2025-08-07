// src/app/[locale]/layout.tsx

import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {getMessages, getTranslations, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import {Provider} from '@/components/ui/provider';
import Navbar from '@/components/Navbar';
import { use } from 'react';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale: locale,
  }));
}

// This function generates metadata for each locale
export async function generateMetadata({
  params, // Keep params as a top-level prop
}: {
  params: Promise<{ locale: string }>; // FIX: Type params as a Promise to match the layout
}): Promise<Metadata> {
  // Await the promise to get the resolved locale
  const { locale } = await params;
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
  params: Promise<{ locale: string }>; // This is correct for Next.js 15
}) {
  const { locale } = use(params);

  // This is correct and necessary for static rendering
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