// app/sitemap.ts

import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vitacabanas.com.br';

  // The pages on your site
  const pages = ['', '/about']; 
  
  // Your supported languages
  const locales = ['pt', 'en'];

  const urls = locales.flatMap((locale) => {
    return pages.map((page) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
    }));
  });

  return urls;
}