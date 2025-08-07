
import type { Metadata } from 'next'; // Optional: for global metadata

import './globals.css';
import {Provider} from '@/components/ui/provider';
export const metadata: Metadata = {
  title: 'Vita Cabanas',
  description: 'Your beautiful life in the mountains of Nova Trento SC',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR"> {/* Set your default language here, or 'en' */}
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}