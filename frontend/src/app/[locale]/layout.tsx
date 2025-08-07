// app/[locale]/layout.tsx

import {NextIntlClientProvider, hasLocale} from 'next-intl';
// Add this import
import {setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import {Provider} from '@/components/ui/provider';
import Navbar from '@/components/Navbar';
import {use} from 'react';

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale: locale,
  }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await use(params);

  // Add this line right after getting the locale
  setRequestLocale(locale);

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <Provider>
          <NextIntlClientProvider locale={locale}>
            <Navbar />
            {children}
          </NextIntlClientProvider>
        </Provider>
      </body>
    </html>
  );
}