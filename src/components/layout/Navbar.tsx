'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { ShoppingBag, Menu, X, Heart, Search, ArrowRight } from 'lucide-react';

const navItems = [
    { href: '/', label: 'Home' },
    { href: '/shop', label: 'Shop' },
    { href: '/collections', label: 'Collections' },
    { href: '/about', label: 'Our Story' },
    { href: '/contact', label: 'Contact' },
];

export const Navbar = () => {
    const { cartCount } = useCart();
    const { wishlistCount } = useWishlist();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            <div className="app-shell pt-3">
                <div className={`hidden items-center justify-between rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-muted)] md:flex ${isScrolled ? 'border-white/60 bg-white/85 shadow-[var(--shadow-card)] backdrop-blur-xl' : 'border-[var(--color-brand-line)] bg-white/60 backdrop-blur-md'}`}>
                    <span>Soft on skin, strong for play</span>
                    <span className="flex items-center gap-2">
                        Free delivery over PKR 5,000
                        <ArrowRight size={14} />
                    </span>
                </div>

                <div className={`mt-3 rounded-[28px] border px-4 py-4 transition-all duration-300 md:px-6 ${isScrolled ? 'border-white/70 bg-white/92 shadow-[var(--shadow-soft)] backdrop-blur-xl' : 'border-[var(--color-brand-line)] bg-white/74 shadow-[var(--shadow-card)] backdrop-blur-lg'}`}>
                    <div className="flex items-center justify-between gap-4">
                        <Link href="/" className="flex shrink-0 items-center" aria-label="AkidZ Wear home">
                            <Image
                                src="/logo.png"
                                alt="AkidZ Wear"
                                width={1816}
                                height={1192}
                                priority
                                className="h-14 w-auto object-contain md:h-16"
                            />
                        </Link>

                        <nav className="hidden items-center gap-2 rounded-full border border-[var(--color-brand-line)] bg-[var(--color-brand-cream)]/85 px-3 py-2 md:flex">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="rounded-full px-4 py-2 text-sm font-semibold text-[var(--color-brand-muted)] transition-colors hover:bg-white hover:text-[var(--color-brand-ink)]"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>

                        <div className="flex items-center gap-2">
                            <Link
                                href="/shop"
                                className="hidden rounded-full border border-[var(--color-brand-line)] bg-white/75 p-2.5 text-[var(--color-brand-ink)] transition-colors hover:bg-white md:inline-flex"
                                aria-label="Search products"
                            >
                                <Search size={18} />
                            </Link>

                            <Link
                                href="/shop"
                                className="relative inline-flex rounded-full border border-[var(--color-brand-line)] bg-white/75 p-2.5 text-[var(--color-brand-ink)] transition-colors hover:bg-white"
                                aria-label="Wishlist"
                            >
                                <Heart size={18} />
                                {wishlistCount > 0 && (
                                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-brand-coral)] text-[10px] font-bold text-white">
                                        {wishlistCount}
                                    </span>
                                )}
                            </Link>

                            <Link
                                href="/cart"
                                className="relative inline-flex rounded-full border border-[var(--color-brand-line)] bg-[var(--color-brand-ink)] p-2.5 text-white transition-colors hover:bg-[#1f1a16]"
                                aria-label="Shopping cart"
                            >
                                <ShoppingBag size={18} />
                                {cartCount > 0 && (
                                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-brand-peach)] text-[10px] font-bold text-[var(--color-brand-ink)]">
                                        {cartCount}
                                    </span>
                                )}
                            </Link>

                            <Link
                                href="/shop"
                                className="hidden items-center gap-2 rounded-full bg-[var(--color-brand-peach)] px-4 py-2.5 text-sm font-bold text-[var(--color-brand-ink)] transition-all hover:-translate-y-0.5 hover:opacity-90 md:inline-flex"
                            >
                                Shop New
                                <ArrowRight size={16} />
                            </Link>

                            <button
                                className="inline-flex rounded-full border border-[var(--color-brand-line)] bg-white/75 p-2.5 text-[var(--color-brand-ink)] md:hidden"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                aria-expanded={mobileMenuOpen}
                                aria-label="Toggle menu"
                            >
                                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>
                        </div>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <div className="mt-3 rounded-[28px] border border-[var(--color-brand-line)] bg-white/92 p-4 shadow-[var(--shadow-soft)] backdrop-blur-xl md:hidden">
                        <div className="mb-4 rounded-[22px] bg-[var(--color-brand-cream)] p-4">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand-muted)]">
                                New Season
                            </p>
                            <p className="mt-2 text-base font-semibold text-[var(--color-brand-ink)]">
                                Breezy sets, tiny layers, and everyday favorites are live now.
                            </p>
                        </div>

                        <nav className="flex flex-col gap-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="rounded-2xl px-4 py-3 text-sm font-semibold text-[var(--color-brand-ink)] transition-colors hover:bg-[var(--color-brand-cream)]"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};
