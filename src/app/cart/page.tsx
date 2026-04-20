'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { formatWhatsAppMessage } from '@/lib/whatsapp';
import { Button } from '@/components/ui';
import { Breadcrumbs } from '@/components/ui';
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';

export default function CartPage() {
    const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

    const shippingCost = cartTotal >= 5000 ? 0 : 250;
    const totalWithShipping = cartTotal + shippingCost;

    return (
        <div className="flex flex-col min-h-screen pb-20">
            {/* Breadcrumbs */}
            <div className="container mx-auto px-4 pt-6">
                <Breadcrumbs items={[
                    { label: 'Home', href: '/' },
                    { label: 'Cart' },
                ]} />
            </div>

            <section className="py-8 md:py-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-10 tracking-tight">
                        Shopping Cart
                    </h1>

                    {cart.length === 0 ? (
                        /* Empty Cart */
                        <div className="flex flex-col items-center justify-center py-20 text-center">
                            <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                                <ShoppingBag size={40} className="text-gray-300" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">Your cart is empty</h2>
                            <p className="text-gray-500 mb-8 max-w-md">
                                Looks like you haven&apos;t added any items yet. Explore our collection and find something special for your little ones!
                            </p>
                            <Button variant="primary" size="lg" className="rounded-full px-8 py-4 bg-gray-900 text-white hover:bg-gray-800">
                                <Link href="/shop" className="flex items-center gap-2">
                                    Continue Shopping <ArrowRight size={18} />
                                </Link>
                            </Button>
                        </div>
                    ) : (
                        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                            {/* Cart Items */}
                            <div className="lg:col-span-2 space-y-4">
                                {cart.map((item) => (
                                    <div key={item.id} className="bg-white rounded-2xl p-4 md:p-6 shadow-[var(--shadow-soft)] border border-gray-100 flex gap-4 md:gap-6">
                                        {/* Image */}
                                        <Link href={`/product/${item.id}`} className="relative w-24 h-28 md:w-32 md:h-36 rounded-xl overflow-hidden flex-shrink-0 bg-gray-50">
                                            <Image src={item.imageUrl} alt={item.name} fill className="object-cover" />
                                        </Link>

                                        {/* Info */}
                                        <div className="flex-1 flex flex-col">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <Link href={`/product/${item.id}`} className="text-base md:text-lg font-semibold text-gray-900 hover:text-[var(--color-brand-blue)] transition-colors">
                                                        {item.name}
                                                    </Link>
                                                    <p className="text-sm text-gray-400 mt-0.5">{item.category}</p>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="p-2 text-gray-300 hover:text-red-500 transition-colors"
                                                    aria-label="Remove item"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>

                                            <div className="mt-auto flex items-center justify-between pt-4">
                                                {/* Quantity Controls */}
                                                <div className="inline-flex items-center border border-gray-200 rounded-lg overflow-hidden">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="p-2 hover:bg-gray-50 transition-colors"
                                                    >
                                                        <Minus size={14} />
                                                    </button>
                                                    <span className="px-4 py-2 font-semibold text-sm text-gray-900">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="p-2 hover:bg-gray-50 transition-colors"
                                                    >
                                                        <Plus size={14} />
                                                    </button>
                                                </div>

                                                {/* Price */}
                                                <span className="text-lg font-bold text-gray-900">
                                                    PKR {(item.price * item.quantity).toLocaleString()}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {/* Clear Cart */}
                                <button
                                    onClick={clearCart}
                                    className="text-sm text-gray-400 hover:text-red-500 font-medium transition-colors mt-4"
                                >
                                    Clear entire cart
                                </button>
                            </div>

                            {/* Order Summary */}
                            <div className="lg:col-span-1">
                                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-[var(--shadow-soft)] border border-gray-100 sticky top-28">
                                    <h2 className="text-xl font-black text-gray-900 mb-6">Order Summary</h2>

                                    <div className="space-y-4 mb-6">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500">Subtotal</span>
                                            <span className="font-semibold text-gray-900">PKR {cartTotal.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500">Shipping</span>
                                            <span className="font-semibold text-gray-900">
                                                {shippingCost === 0 ? (
                                                    <span className="text-green-600">FREE</span>
                                                ) : (
                                                    `PKR ${shippingCost}`
                                                )}
                                            </span>
                                        </div>
                                        {shippingCost > 0 && (
                                            <p className="text-xs text-gray-400">Free shipping on orders over PKR 5,000</p>
                                        )}
                                    </div>

                                    <div className="border-t border-gray-100 pt-4 mb-6">
                                        <div className="flex justify-between">
                                            <span className="text-lg font-bold text-gray-900">Total</span>
                                            <span className="text-lg font-black text-gray-900">PKR {totalWithShipping.toLocaleString()}</span>
                                        </div>
                                    </div>

                                    <Link
                                        href={formatWhatsAppMessage(cart)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full block"
                                    >
                                        <Button
                                            size="lg"
                                            variant="primary"
                                            className="w-full rounded-full py-4 text-base font-bold bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2"
                                        >
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.61.609l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.34 0-4.512-.768-6.262-2.065l-.438-.335-2.546.854.854-2.546-.335-.438A9.96 9.96 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" /></svg>
                                            Order via WhatsApp
                                        </Button>
                                    </Link>

                                    <Link href="/shop" className="block text-center text-sm text-gray-500 hover:text-[var(--color-brand-blue)] font-medium mt-4 transition-colors">
                                        ← Continue Shopping
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
