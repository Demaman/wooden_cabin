import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import {Provider} from '@/components/ui/provider';
import Navbar from '@/components/Navbar';
import { unstable_setRequestLocale } from 'next-intl/server';

// This function is crucial for static export with dynamic routes
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
  // REVERTING the type back to a Promise
  params: Promise<{locale: string}>;
}) {
  // AWAITING the params to get the locale
  const {locale} = await params;
  unstable_setRequestLocale(locale);

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Load the translation messages for the current locale
  // let messages;
  // try {
  //   // This will work after you fix tsconfig.json
  //   messages = (await import(`../../messages/${locale}.json`)).default;
  // } catch (error) {
  //   notFound();
  // }

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