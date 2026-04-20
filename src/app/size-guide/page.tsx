import { Breadcrumbs } from '@/components/ui';

export default function SizeGuidePage() {
    return (
        <div className="flex flex-col min-h-screen pb-20">
            {/* Header */}
            <section className="bg-[var(--color-brand-blue)]/20 py-16 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
                        Size Guide
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Find the perfect fit for your little ones
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 max-w-4xl">
                    {/* Breadcrumbs */}
                    <div className="mb-10">
                        <Breadcrumbs items={[
                            { label: 'Home', href: '/' },
                            { label: 'Size Guide' },
                        ]} />
                    </div>

                    {/* How to Measure */}
                    <div className="bg-[var(--color-brand-mint)]/10 rounded-2xl p-6 md:p-8 mb-12">
                        <h2 className="text-xl font-black text-gray-900 mb-4">📏 How to Measure</h2>
                        <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">Chest</h4>
                                <p>Measure around the fullest part of the chest, keeping the tape snug but not tight.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">Height</h4>
                                <p>Measure from the top of the head to the bottom of the feet while standing straight.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">Waist</h4>
                                <p>Measure around the natural waistline, at the narrowest point of the torso.</p>
                            </div>
                        </div>
                    </div>

                    {/* Toddler Sizes */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-black text-gray-900 mb-6">👶 Toddler Sizes (0-3 Years)</h2>
                        <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-[var(--shadow-soft)]">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="px-6 py-4 text-left font-bold text-gray-900">Size</th>
                                        <th className="px-6 py-4 text-left font-bold text-gray-900">Age</th>
                                        <th className="px-6 py-4 text-left font-bold text-gray-900">Height (cm)</th>
                                        <th className="px-6 py-4 text-left font-bold text-gray-900">Chest (cm)</th>
                                        <th className="px-6 py-4 text-left font-bold text-gray-900">Waist (cm)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50/50"><td className="px-6 py-3 font-medium">0-6M</td><td className="px-6 py-3 text-gray-600">0-6 months</td><td className="px-6 py-3 text-gray-600">56-68</td><td className="px-6 py-3 text-gray-600">40-44</td><td className="px-6 py-3 text-gray-600">40-44</td></tr>
                                    <tr className="hover:bg-gray-50/50"><td className="px-6 py-3 font-medium">6-12M</td><td className="px-6 py-3 text-gray-600">6-12 months</td><td className="px-6 py-3 text-gray-600">68-80</td><td className="px-6 py-3 text-gray-600">44-48</td><td className="px-6 py-3 text-gray-600">44-48</td></tr>
                                    <tr className="hover:bg-gray-50/50"><td className="px-6 py-3 font-medium">1-2Y</td><td className="px-6 py-3 text-gray-600">1-2 years</td><td className="px-6 py-3 text-gray-600">80-92</td><td className="px-6 py-3 text-gray-600">48-52</td><td className="px-6 py-3 text-gray-600">48-50</td></tr>
                                    <tr className="hover:bg-gray-50/50"><td className="px-6 py-3 font-medium">2-3Y</td><td className="px-6 py-3 text-gray-600">2-3 years</td><td className="px-6 py-3 text-gray-600">92-98</td><td className="px-6 py-3 text-gray-600">52-54</td><td className="px-6 py-3 text-gray-600">50-52</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Kids Sizes */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-black text-gray-900 mb-6">👧 Kids Sizes (3-12 Years)</h2>
                        <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-[var(--shadow-soft)]">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="px-6 py-4 text-left font-bold text-gray-900">Size</th>
                                        <th className="px-6 py-4 text-left font-bold text-gray-900">Age</th>
                                        <th className="px-6 py-4 text-left font-bold text-gray-900">Height (cm)</th>
                                        <th className="px-6 py-4 text-left font-bold text-gray-900">Chest (cm)</th>
                                        <th className="px-6 py-4 text-left font-bold text-gray-900">Waist (cm)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50/50"><td className="px-6 py-3 font-medium">3-4Y</td><td className="px-6 py-3 text-gray-600">3-4 years</td><td className="px-6 py-3 text-gray-600">98-104</td><td className="px-6 py-3 text-gray-600">54-56</td><td className="px-6 py-3 text-gray-600">52-54</td></tr>
                                    <tr className="hover:bg-gray-50/50"><td className="px-6 py-3 font-medium">5-6Y</td><td className="px-6 py-3 text-gray-600">5-6 years</td><td className="px-6 py-3 text-gray-600">104-116</td><td className="px-6 py-3 text-gray-600">56-60</td><td className="px-6 py-3 text-gray-600">54-56</td></tr>
                                    <tr className="hover:bg-gray-50/50"><td className="px-6 py-3 font-medium">7-8Y</td><td className="px-6 py-3 text-gray-600">7-8 years</td><td className="px-6 py-3 text-gray-600">116-128</td><td className="px-6 py-3 text-gray-600">60-64</td><td className="px-6 py-3 text-gray-600">56-58</td></tr>
                                    <tr className="hover:bg-gray-50/50"><td className="px-6 py-3 font-medium">9-10Y</td><td className="px-6 py-3 text-gray-600">9-10 years</td><td className="px-6 py-3 text-gray-600">128-140</td><td className="px-6 py-3 text-gray-600">64-68</td><td className="px-6 py-3 text-gray-600">58-62</td></tr>
                                    <tr className="hover:bg-gray-50/50"><td className="px-6 py-3 font-medium">11-12Y</td><td className="px-6 py-3 text-gray-600">11-12 years</td><td className="px-6 py-3 text-gray-600">140-152</td><td className="px-6 py-3 text-gray-600">68-72</td><td className="px-6 py-3 text-gray-600">62-66</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Shoe Sizes */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-black text-gray-900 mb-6">👟 Shoe Sizes</h2>
                        <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-[var(--shadow-soft)]">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="px-6 py-4 text-left font-bold text-gray-900">Size (PK/US)</th>
                                        <th className="px-6 py-4 text-left font-bold text-gray-900">Age</th>
                                        <th className="px-6 py-4 text-left font-bold text-gray-900">Foot Length (cm)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50/50"><td className="px-6 py-3 font-medium">5</td><td className="px-6 py-3 text-gray-600">1-2 years</td><td className="px-6 py-3 text-gray-600">12.5</td></tr>
                                    <tr className="hover:bg-gray-50/50"><td className="px-6 py-3 font-medium">6</td><td className="px-6 py-3 text-gray-600">2-3 years</td><td className="px-6 py-3 text-gray-600">13.5</td></tr>
                                    <tr className="hover:bg-gray-50/50"><td className="px-6 py-3 font-medium">7</td><td className="px-6 py-3 text-gray-600">3-4 years</td><td className="px-6 py-3 text-gray-600">14.5</td></tr>
                                    <tr className="hover:bg-gray-50/50"><td className="px-6 py-3 font-medium">8</td><td className="px-6 py-3 text-gray-600">4-5 years</td><td className="px-6 py-3 text-gray-600">15.5</td></tr>
                                    <tr className="hover:bg-gray-50/50"><td className="px-6 py-3 font-medium">9</td><td className="px-6 py-3 text-gray-600">5-7 years</td><td className="px-6 py-3 text-gray-600">16.5</td></tr>
                                    <tr className="hover:bg-gray-50/50"><td className="px-6 py-3 font-medium">10</td><td className="px-6 py-3 text-gray-600">7-9 years</td><td className="px-6 py-3 text-gray-600">17.5</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Tip */}
                    <div className="bg-[var(--color-brand-peach)]/20 rounded-2xl p-6 md:p-8 text-center">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">💡 Tip</h3>
                        <p className="text-sm text-gray-600">
                            If your child is between sizes, we recommend going one size up for a more comfortable fit and room to grow!
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
