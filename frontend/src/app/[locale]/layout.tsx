// app/[locale]/layout.tsx

import {NextIntlClientProvider, hasLocale} from 'next-intl';
// Import getMessages and setRequestLocale
import {getMessages, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import {Provider} from '@/components/ui/provider';
import Navbar from '@/components/Navbar';
// Import the 'use' hook from React
import { use } from 'react';

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale: locale,
  }));
}

// The layout must be async
export default async function LocaleLayout({
  children,
  params, // Keep params as a Promise, as expected by Next.js 15
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // This is the correct type
}) {
  // Use React.use to correctly unwrap the promise
  const { locale } = use(params);

  // This is still required to enable static rendering for next-intl
  setRequestLocale(locale);

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Fetch the translation messages for the current locale on the server
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <Provider>
          {/* Pass the fetched messages to the client provider */}
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Navbar />
            {children}
          </NextIntlClientProvider>
        </Provider>
      </body>
    </html>
  );
}