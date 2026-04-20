import { Breadcrumbs } from '@/components/ui';
import { Truck, RotateCcw, Clock, ShieldCheck } from 'lucide-react';

export default function ShippingPage() {
    return (
        <div className="flex flex-col min-h-screen pb-20">
            {/* Header */}
            <section className="bg-[var(--color-brand-blue)]/20 py-16 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
                        Shipping & Returns
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Fast delivery, easy returns — because happy parents matter!
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 max-w-4xl">
                    {/* Breadcrumbs */}
                    <div className="mb-10">
                        <Breadcrumbs items={[
                            { label: 'Home', href: '/' },
                            { label: 'Shipping & Returns' },
                        ]} />
                    </div>

                    {/* Quick Info Cards */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                        <div className="bg-white rounded-2xl p-6 shadow-[var(--shadow-soft)] border border-gray-100 text-center">
                            <Truck size={28} className="text-[var(--color-brand-blue)] mx-auto mb-3" />
                            <h4 className="font-bold text-gray-900 text-sm mb-1">Free Shipping</h4>
                            <p className="text-xs text-gray-500">On orders over PKR 5,000</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-[var(--shadow-soft)] border border-gray-100 text-center">
                            <Clock size={28} className="text-[var(--color-brand-mint)] mx-auto mb-3" />
                            <h4 className="font-bold text-gray-900 text-sm mb-1">Fast Delivery</h4>
                            <p className="text-xs text-gray-500">2-5 business days</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-[var(--shadow-soft)] border border-gray-100 text-center">
                            <RotateCcw size={28} className="text-orange-400 mx-auto mb-3" />
                            <h4 className="font-bold text-gray-900 text-sm mb-1">Easy Returns</h4>
                            <p className="text-xs text-gray-500">14-day return policy</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-[var(--shadow-soft)] border border-gray-100 text-center">
                            <ShieldCheck size={28} className="text-green-500 mx-auto mb-3" />
                            <h4 className="font-bold text-gray-900 text-sm mb-1">Quality Guarantee</h4>
                            <p className="text-xs text-gray-500">100% satisfaction</p>
                        </div>
                    </div>

                    {/* Shipping Policy */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-black text-gray-900 mb-6">📦 Shipping Policy</h2>
                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-[var(--shadow-soft)] border border-gray-100 space-y-6">
                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">Delivery Charges</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> <strong>Free shipping</strong> on all orders above PKR 5,000</li>
                                    <li className="flex items-start gap-2"><span className="text-gray-400 mt-0.5">•</span> Flat rate of <strong>PKR 250</strong> for orders below PKR 5,000</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">Delivery Time</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-start gap-2"><span className="text-gray-400 mt-0.5">•</span> <strong>Karachi:</strong> 2-3 business days</li>
                                    <li className="flex items-start gap-2"><span className="text-gray-400 mt-0.5">•</span> <strong>Rest of Pakistan:</strong> 3-5 business days</li>
                                    <li className="flex items-start gap-2"><span className="text-gray-400 mt-0.5">•</span> <strong>Remote areas:</strong> 5-7 business days</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">Tracking</h3>
                                <p className="text-sm text-gray-600">
                                    Once your order is shipped, you will receive a tracking number via WhatsApp/SMS. You can use this to track your package in real-time.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Returns & Exchange */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-black text-gray-900 mb-6">🔄 Returns & Exchanges</h2>
                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-[var(--shadow-soft)] border border-gray-100 space-y-6">
                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">Return Policy</h3>
                                <p className="text-sm text-gray-600 mb-3">
                                    We want you to be completely happy with your purchase. If something does not work out, here is what you need to know:
                                </p>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Returns accepted within <strong>14 days</strong> of delivery</li>
                                    <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Items must be <strong>unworn, unwashed</strong>, with tags attached</li>
                                    <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Free size exchanges (subject to availability)</li>
                                    <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span> Sale items are <strong>final sale</strong> and cannot be returned</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">How to Return</h3>
                                <ol className="space-y-2 text-sm text-gray-600 list-decimal list-inside">
                                    <li>Contact us via WhatsApp or email with your order details</li>
                                    <li>Our team will confirm eligibility and provide instructions</li>
                                    <li>Pack the item securely in original packaging</li>
                                    <li>We will arrange a courier pickup from your address</li>
                                    <li>Refund will be processed within 5-7 business days after inspection</li>
                                </ol>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">Refund Methods</h3>
                                <p className="text-sm text-gray-600">
                                    Refunds will be issued to the original payment method (Bank Transfer, JazzCash, or EasyPaisa). COD orders will be refunded via bank transfer.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="bg-[var(--color-brand-mint)]/10 rounded-2xl p-6 md:p-8 text-center">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Need Help?</h3>
                        <p className="text-sm text-gray-600 mb-4">Our support team is available to assist you with any shipping or return queries.</p>
                        <a
                            href="https://wa.me/923000000000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-green-700 transition-colors"
                        >
                            Contact Support
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
