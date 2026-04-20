'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface WishlistContextType {
    wishlist: string[];
    addToWishlist: (productId: string) => void;
    removeFromWishlist: (productId: string) => void;
    isInWishlist: (productId: string) => boolean;
    wishlistCount: number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
    const [wishlist, setWishlist] = useState<string[]>(() => {
        if (typeof window === 'undefined') {
            return [];
        }

        const saved = localStorage.getItem('akidz_wishlist');
        if (!saved) {
            return [];
        }

        try {
            return JSON.parse(saved);
        } catch {
            console.error('Failed to parse wishlist');
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('akidz_wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    const addToWishlist = (productId: string) => {
        setWishlist((prev) => (prev.includes(productId) ? prev : [...prev, productId]));
    };

    const removeFromWishlist = (productId: string) => {
        setWishlist((prev) => prev.filter((id) => id !== productId));
    };

    const isInWishlist = (productId: string) => wishlist.includes(productId);

    const wishlistCount = wishlist.length;

    return (
        <WishlistContext.Provider
            value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist, wishlistCount }}
        >
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = () => {
    const context = useContext(WishlistContext);
    if (context === undefined) {
        throw new Error('useWishlist must be used within a WishlistProvider');
    }
    return context;
};
