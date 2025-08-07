// app/[locale]/layout.tsx

import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import {Provider} from '@/components/ui/provider';
import Navbar from '@/components/Navbar';

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale: locale,
  }));
}

// The layout must be async to fetch messages
export default async function LocaleLayout({
  children,
  params: { locale } // Destructure locale directly from params
}: {
  children: React.ReactNode;
  params: { locale: string }; // Update the type to be a plain object
}) {
  // 1. This is still required to enable static rendering
  setRequestLocale(locale);

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // 2. Fetch messages for the current locale
  let messages;
  try {
    messages = await getMessages();
  } catch (error) {
    // This can happen if you don't have message files for a locale.
    // It's a good practice to handle this gracefully.
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <Provider>
          {/* 3. Pass the fetched messages to the provider */}
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Navbar />
            {children}
          </NextIntlClientProvider>
        </Provider>
      </body>
    </html>
  );
}