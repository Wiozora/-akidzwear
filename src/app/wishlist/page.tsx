'use client';

import Link from 'next/link';
import { Heart, ArrowRight } from 'lucide-react';
import { products } from '@/lib/data';
import { useWishlist } from '@/context/WishlistContext';
import { ProductCard } from '@/components/product';
import { Breadcrumbs, Button } from '@/components/ui';

export default function WishlistPage() {
    const { wishlist } = useWishlist();
    const wishlistProducts = products.filter((product) => wishlist.includes(product.id));

    return (
        <div className="flex min-h-screen flex-col pb-20">
            <div className="container mx-auto px-4 pt-6">
                <Breadcrumbs items={[
                    { label: 'Home', href: '/' },
                    { label: 'Wishlist' },
                ]} />
            </div>

            <section className="py-8 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                        <div>
                            <span className="eyebrow">Saved Favorites</span>
                            <h1 className="display-title mt-5 text-4xl text-[var(--color-brand-ink)] md:text-6xl">
                                Your wishlist
                            </h1>
                            <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-brand-muted)]">
                                Keep the pieces you love in one place, then add them to cart when you are ready.
                            </p>
                        </div>

                        {wishlistProducts.length > 0 && (
                            <Link href="/shop" className="pill-link border border-[var(--color-brand-line)] bg-white/80 text-[var(--color-brand-ink)] hover:-translate-y-0.5 hover:bg-white">
                                Continue Shopping
                                <ArrowRight size={18} />
                            </Link>
                        )}
                    </div>

                    {wishlistProducts.length > 0 ? (
                        <>
                            <p className="mb-6 text-sm font-semibold text-[var(--color-brand-muted)]">
                                {wishlistProducts.length} saved {wishlistProducts.length === 1 ? 'item' : 'items'}
                            </p>
                            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                                {wishlistProducts.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="section-frame flex flex-col items-center rounded-[34px] px-6 py-16 text-center">
                            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-brand-cream)] text-[var(--color-brand-coral)]">
                                <Heart size={34} />
                            </div>
                            <h2 className="text-2xl font-black text-[var(--color-brand-ink)]">No favorites yet</h2>
                            <p className="mt-3 max-w-md text-sm leading-6 text-[var(--color-brand-muted)]">
                                Tap the heart on any product to save it here for later.
                            </p>
                            <Button variant="primary" size="lg" className="mt-8 rounded-full px-8 bg-[var(--color-brand-ink)] text-white" asChild>
                                <Link href="/shop">
                                    Start Browsing
                                    <ArrowRight size={18} />
                                </Link>
                            </Button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
