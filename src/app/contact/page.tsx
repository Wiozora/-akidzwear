'use client';

import { useState } from 'react';
import { Breadcrumbs } from '@/components/ui';
import { Button } from '@/components/ui';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you could send the form data to an API
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    };

    return (
        <div className="flex flex-col min-h-screen pb-20">
            {/* Header */}
            <section className="bg-[var(--color-brand-peach)]/20 py-16 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
                        Contact Us
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Have a question or need help? We&apos;d love to hear from you!
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    {/* Breadcrumbs */}
                    <div className="mb-10">
                        <Breadcrumbs items={[
                            { label: 'Home', href: '/' },
                            { label: 'Contact Us' },
                        ]} />
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                        {/* Contact Info Cards */}
                        <div className="space-y-6">
                            <div className="bg-white rounded-2xl p-6 shadow-[var(--shadow-soft)] border border-gray-100">
                                <div className="w-12 h-12 rounded-full bg-[var(--color-brand-blue)]/20 flex items-center justify-center mb-4">
                                    <Mail size={20} className="text-[var(--color-brand-blue)]" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
                                <p className="text-sm text-gray-500">support@akidzwear.com</p>
                            </div>

                            <div className="bg-white rounded-2xl p-6 shadow-[var(--shadow-soft)] border border-gray-100">
                                <div className="w-12 h-12 rounded-full bg-[var(--color-brand-mint)]/20 flex items-center justify-center mb-4">
                                    <Phone size={20} className="text-green-600" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
                                <p className="text-sm text-gray-500">+92 300 0000000</p>
                            </div>

                            <div className="bg-white rounded-2xl p-6 shadow-[var(--shadow-soft)] border border-gray-100">
                                <div className="w-12 h-12 rounded-full bg-[var(--color-brand-peach)]/20 flex items-center justify-center mb-4">
                                    <MapPin size={20} className="text-orange-500" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-1">Visit Us</h3>
                                <p className="text-sm text-gray-500">Karachi, Pakistan</p>
                            </div>

                            <div className="bg-white rounded-2xl p-6 shadow-[var(--shadow-soft)] border border-gray-100">
                                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                                    <MessageCircle size={20} className="text-green-600" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-1">WhatsApp</h3>
                                <a href="https://wa.me/923000000000" target="_blank" rel="noopener noreferrer" className="text-sm text-green-600 hover:underline font-medium">
                                    Chat with Us →
                                </a>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="md:col-span-2">
                            <div className="bg-white rounded-2xl p-6 md:p-10 shadow-[var(--shadow-soft)] border border-gray-100">
                                <h2 className="text-2xl font-black text-gray-900 mb-8">Send Us a Message</h2>

                                {submitted && (
                                    <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 text-green-700 text-sm font-medium">
                                        ✅ Your message has been sent! We&apos;ll get back to you soon.
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                                            <input
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[var(--color-brand-blue)] focus:outline-none transition-colors text-sm"
                                                placeholder="Your name"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                            <input
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[var(--color-brand-blue)] focus:outline-none transition-colors text-sm"
                                                placeholder="you@example.com"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                                            <input
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[var(--color-brand-blue)] focus:outline-none transition-colors text-sm"
                                                placeholder="+92 300 1234567"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                                            <select
                                                value={formData.subject}
                                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[var(--color-brand-blue)] focus:outline-none transition-colors text-sm bg-white"
                                                required
                                            >
                                                <option value="">Select a topic</option>
                                                <option value="order">Order Inquiry</option>
                                                <option value="returns">Returns & Exchange</option>
                                                <option value="sizing">Sizing Help</option>
                                                <option value="wholesale">Wholesale Inquiry</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                                        <textarea
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[var(--color-brand-blue)] focus:outline-none transition-colors text-sm"
                                            rows={5}
                                            placeholder="Tell us how we can help..."
                                            required
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        variant="primary"
                                        className="rounded-full px-10 py-4 bg-gray-900 hover:bg-gray-800 text-white font-bold text-base"
                                    >
                                        Send Message
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
