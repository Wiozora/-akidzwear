import type { MetadataRoute } from 'next';
import { products } from '@/lib/data';

const siteUrl = 'https://wear.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        '',
        '/shop',
        '/collections',
        '/about',
        '/contact',
        '/faq',
        '/shipping',
        '/size-guide',
        '/wishlist',
        '/privacy',
        '/terms',
    ];

    return [
        ...routes.map((route) => ({
            url: `${siteUrl}${route}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: route === '' ? 1 : 0.7,
        })),
        ...products.map((product) => ({
            url: `${siteUrl}/product/${product.id}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        })),
    ];
}
