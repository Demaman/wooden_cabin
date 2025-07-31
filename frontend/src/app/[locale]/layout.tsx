// frontend/src/app/[locale]/layout.tsx

import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing'; // Assuming your routing config is here
import { Provider } from '@/components/ui/provider'
import Navbar from '@/components/Navbar';

// 1. ADD THIS FUNCTION: generateStaticParams
export async function generateStaticParams() {
  // Return an array of all supported locales from your routing config
  // For example, if routing.locales is ['en', 'pt'], this will generate:
  // [{ locale: 'en' }, { locale: 'pt' }]
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
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
 
  // You might need to load messages here or in a separate file if NextIntlClientProvider expects it
  // Example (replace with your actual message loading logic if different):
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default; // Adjust path as needed
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <Provider>
          {/* Pass the messages to NextIntlClientProvider */}
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Navbar />
              {children}
            </NextIntlClientProvider>
        </Provider>
      </body>
    </html>
  );
}