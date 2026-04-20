'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { Button } from '@/components/ui';
import { ShoppingCart, Heart } from 'lucide-react';

interface ProductCardProps {
    product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
    const { addToCart } = useCart();
    const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();

    const wishlisted = isInWishlist(product.id);
    const discountPercent = product.originalPrice
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : null;

    return (
        <div className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-[var(--color-brand-line)] bg-white/92 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-hover)]">
            <Link href={`/product/${product.id}`} className="relative block aspect-[4/5] overflow-hidden bg-[var(--color-brand-cream)]">
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {product.category && (
                    <div className="absolute left-4 top-4 rounded-full bg-white/88 px-3 py-1 text-xs font-semibold text-[var(--color-brand-ink)] backdrop-blur-md">
                        {product.category}
                    </div>
                )}
                {product.badge && (
                    <span className={`absolute right-4 top-4 rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wide shadow-sm ${product.badge === 'SALE' ? 'bg-red-500 text-white' :
                            product.badge === 'NEW' ? 'bg-[var(--color-brand-blue)] text-[var(--color-brand-ink)]' :
                                'bg-orange-400 text-white'
                        }`}>
                        {product.badge}
                    </span>
                )}
            </Link>

            <div className="flex flex-grow flex-col p-5">
                <Link href={`/product/${product.id}`}>
                    <h3 className="mb-1 line-clamp-1 text-lg font-semibold text-[var(--color-brand-ink)] transition-colors hover:text-[var(--color-brand-coral)]">{product.name}</h3>
                </Link>
                <p className="mb-4 line-clamp-2 pb-2 text-sm text-[var(--color-brand-muted)]">{product.description}</p>

                <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-[var(--color-brand-ink)]">
                            PKR {product.price.toLocaleString()}
                        </span>
                        {product.originalPrice && (
                            <span className="text-sm text-[var(--color-brand-muted)]/60 line-through">
                                {product.originalPrice.toLocaleString()}
                            </span>
                        )}
                        {discountPercent && (
                            <span className="rounded-full bg-red-50 px-1.5 py-0.5 text-[10px] font-bold text-red-500">
                                -{discountPercent}%
                            </span>
                        )}
                    </div>
                    <div className="flex items-center gap-1.5">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                if (wishlisted) {
                                    removeFromWishlist(product.id);
                                } else {
                                    addToWishlist(product.id);
                                }
                            }}
                            className={`flex h-9 w-9 items-center justify-center rounded-full transition-all ${wishlisted
                                    ? 'bg-red-50 text-red-500'
                                    : 'bg-[var(--color-brand-cream)] text-[var(--color-brand-muted)] hover:bg-red-50 hover:text-red-400'
                                }`}
                            aria-label="Toggle wishlist"
                        >
                            <Heart size={16} className={wishlisted ? 'fill-red-500' : ''} />
                        </button>
                        <Button
                            size="sm"
                            variant="primary"
                            className="flex h-9 w-9 items-center justify-center !px-0 bg-[var(--color-brand-mint)] text-[var(--color-brand-ink)] hover:bg-[var(--color-brand-mint)]/90"
                            onClick={() => addToCart(product)}
                            aria-label="Add to cart"
                        >
                            <ShoppingCart size={16} />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
