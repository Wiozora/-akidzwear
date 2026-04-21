import type { Metadata } from 'next';
import { Fraunces, Outfit } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { WishlistProvider } from '@/context/WishlistContext';
import { Navbar, Footer } from '@/components/layout';
import { FloatingWhatsApp } from '@/components/ui';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://wear.vercel.app'),
  title: 'AkidZ Wear | Playful Premium Clothing For Little Originals',
  description: 'Thoughtful clothing for toddlers and kids with soft fabrics, playful colors, and everyday comfort.',
  keywords: ['kidswear Pakistan', 'toddler clothes', 'kids clothing', 'AkidZ Wear', 'baby clothes'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'AkidZ Wear | Playful Premium Clothing For Little Originals',
    description: 'Soft, colorful clothing for toddlers and kids with parent-friendly comfort.',
    url: '/',
    siteName: 'AkidZ Wear',
    images: [
      {
        url: '/logo.png',
        width: 1816,
        height: 1192,
        alt: 'AkidZ Wear logo',
      },
    ],
    locale: 'en_PK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AkidZ Wear | Playful Premium Clothing For Little Originals',
    description: 'Soft, colorful clothing for toddlers and kids with parent-friendly comfort.',
    images: ['/logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${outfit.variable} ${fraunces.variable} min-h-screen font-sans antialiased`}>
        <CartProvider>
          <WishlistProvider>
            <div className="relative isolate flex min-h-screen flex-col overflow-x-clip">
              <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
                <div className="soft-grid absolute inset-x-0 top-0 h-[32rem] opacity-40" />
                <div className="absolute left-[-8rem] top-28 h-72 w-72 rounded-full bg-[var(--color-brand-peach)]/32 blur-3xl" />
                <div className="absolute right-[-6rem] top-40 h-64 w-64 rounded-full bg-[var(--color-brand-blue)]/24 blur-3xl" />
                <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[var(--color-brand-mint)]/28 blur-3xl" />
              </div>
              <Navbar />
              <main className="flex-grow pt-32 md:pt-36">
                {children}
              </main>
              <Footer />
              <FloatingWhatsApp />
            </div>
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
