// app/sitemap.ts

import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vitacabanas.com.br';

  const pages = ['', '/about'];

  const locales = ['pt', 'en'];
  
  const defaultLocale = 'pt';

  const urls: MetadataRoute.Sitemap = [];

  locales.forEach(locale => {
    pages.forEach(page => {
      const isDefaultLocale = locale === defaultLocale;
      const path = isDefaultLocale ? page : `/${locale}${page}`;
      const url = `${baseUrl}${path === '' ? '/' : path}`;

      urls.push({
        url: url,
        lastModified: new Date(),
      });
    });
  });

  return urls;
}