'use client';

import { useState } from 'react';
import { Breadcrumbs } from '@/components/ui';
import { ChevronDown } from 'lucide-react';

const faqData = [
    {
        category: 'Ordering',
        questions: [
            {
                q: 'How do I place an order?',
                a: 'Browse our collection, add items to your cart, and click "Order via WhatsApp" to send your order directly. Our team will confirm your order and guide you through the payment process.',
            },
            {
                q: 'Can I modify or cancel my order?',
                a: 'Yes! You can modify or cancel your order within 2 hours of placing it. Simply message us on WhatsApp with your order details.',
            },
            {
                q: 'What payment methods do you accept?',
                a: 'We accept Bank Transfer, JazzCash, EasyPaisa, and Cash on Delivery (COD) within Karachi.',
            },
        ],
    },
    {
        category: 'Shipping',
        questions: [
            {
                q: 'How long does delivery take?',
                a: 'Orders within Karachi are delivered in 2-3 business days. For the rest of Pakistan, delivery takes 3-5 business days.',
            },
            {
                q: 'Is shipping free?',
                a: 'Yes! We offer free shipping on all orders above PKR 5,000. For orders below PKR 5,000, a flat shipping fee of PKR 250 applies.',
            },
            {
                q: 'Do you ship internationally?',
                a: 'Currently, we only ship within Pakistan. International shipping is coming soon!',
            },
        ],
    },
    {
        category: 'Returns & Exchanges',
        questions: [
            {
                q: 'What is your return policy?',
                a: 'We offer a 14-day return policy. Items must be unworn, unwashed, and in original condition with tags attached. Sale items are final sale and cannot be returned.',
            },
            {
                q: 'How do I initiate a return?',
                a: 'Contact us via WhatsApp or email with your order details and reason for return. We will guide you through the process and arrange a pickup.',
            },
            {
                q: 'Can I exchange for a different size?',
                a: 'Absolutely! We offer free size exchanges within 14 days of delivery. Contact us and we will arrange the swap.',
            },
        ],
    },
    {
        category: 'Products',
        questions: [
            {
                q: 'What materials are used in your clothing?',
                a: 'We primarily use 100% organic cotton and cotton blends. All our fabrics are certified safe for children, hypoallergenic, and free from harmful chemicals.',
            },
            {
                q: 'How do I find the right size?',
                a: 'Check our detailed Size Guide page for measurements by age group. If you are still unsure, message us on WhatsApp and we will help!',
            },
            {
                q: 'Are your clothes machine washable?',
                a: 'Yes, all our garments are machine washable. We recommend washing in cold water and tumble drying on low to maintain the quality and colors.',
            },
        ],
    },
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<string | null>(null);

    const toggleQuestion = (key: string) => {
        setOpenIndex(openIndex === key ? null : key);
    };

    return (
        <div className="flex flex-col min-h-screen pb-20">
            {/* Header */}
            <section className="bg-[var(--color-brand-mint)]/20 py-16 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Everything you need to know about AkidZ Wear
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 max-w-3xl">
                    {/* Breadcrumbs */}
                    <div className="mb-10">
                        <Breadcrumbs items={[
                            { label: 'Home', href: '/' },
                            { label: 'FAQ' },
                        ]} />
                    </div>

                    {faqData.map((section, sIdx) => (
                        <div key={sIdx} className="mb-10">
                            <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-[var(--color-brand-blue)]/20 flex items-center justify-center text-sm font-bold text-gray-700">
                                    {sIdx + 1}
                                </span>
                                {section.category}
                            </h2>
                            <div className="space-y-3">
                                {section.questions.map((item, qIdx) => {
                                    const key = `${sIdx}-${qIdx}`;
                                    const isOpen = openIndex === key;
                                    return (
                                        <div key={qIdx} className="bg-white rounded-xl border border-gray-100 shadow-[var(--shadow-soft)] overflow-hidden">
                                            <button
                                                onClick={() => toggleQuestion(key)}
                                                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50/50 transition-colors"
                                            >
                                                <span className="font-semibold text-gray-900 text-sm md:text-base pr-4">{item.q}</span>
                                                <ChevronDown
                                                    size={18}
                                                    className={`text-gray-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                                                />
                                            </button>
                                            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-60' : 'max-h-0'}`}>
                                                <p className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">
                                                    {item.a}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}

                    {/* Still need help? */}
                    <div className="mt-12 bg-[var(--color-brand-peach)]/20 rounded-2xl p-8 text-center">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Still have questions?</h3>
                        <p className="text-gray-600 text-sm mb-6">Our team is here to help! Reach out to us anytime.</p>
                        <a
                            href="https://wa.me/923000000000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-green-700 transition-colors"
                        >
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
