'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CartItem, Product } from '@/types';

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Product, options?: { quantity?: number; selectedSize?: string }) => void;
    removeFromCart: (cartKey: string) => void;
    updateQuantity: (cartKey: string, quantity: number) => void;
    clearCart: () => void;
    cartTotal: number;
    cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>(() => {
        if (typeof window === 'undefined') {
            return [];
        }

        const savedCart = localStorage.getItem('akidz_cart');
        if (!savedCart) {
            return [];
        }

        try {
            return JSON.parse(savedCart);
        } catch {
            console.error('Failed to parse cart');
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('akidz_cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product: Product, options?: { quantity?: number; selectedSize?: string }) => {
        const selectedSize = options?.selectedSize;
        const quantity = Math.max(1, options?.quantity ?? 1);
        const cartKey = selectedSize ? `${product.id}-${selectedSize}` : product.id;

        setCart((prev) => {
            const existing = prev.find((item) => (item.cartKey ?? item.id) === cartKey);
            if (existing) {
                return prev.map((item) =>
                    (item.cartKey ?? item.id) === cartKey ? { ...item, quantity: item.quantity + quantity } : item
                );
            }
            return [...prev, { ...product, cartKey, quantity, selectedSize }];
        });
    };

    const removeFromCart = (cartKey: string) => {
        setCart((prev) => prev.filter((item) => (item.cartKey ?? item.id) !== cartKey));
    };

    const updateQuantity = (cartKey: string, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(cartKey);
            return;
        }
        setCart((prev) =>
            prev.map((item) => ((item.cartKey ?? item.id) === cartKey ? { ...item, quantity } : item))
        );
    };

    const clearCart = () => setCart([]);

    const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
