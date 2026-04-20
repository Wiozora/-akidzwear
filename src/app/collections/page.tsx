import { products } from "@/lib/data";
import { ProductCard } from "@/components/product";
import Image from "next/image";
import { PageHeader } from "@/components/layout";
export default function CollectionsPage() {
    const toddlerProducts = products.filter(p => p.category === 'Toddler');
    const kidsProducts = products.filter(p => p.category === 'Kids');

    return (
        <div className="flex flex-col min-h-screen pb-20">
            {/* Header */}
            <PageHeader
                title="Collections"
                description="Discover thoughtfully curated clothing arranged by age and style."
                backgroundImage="https://images.unsplash.com/photo-1608746200372-b84291ea2087?auto=format&fit=crop&q=80&w=1200"
                themeColorClass="bg-[var(--color-brand-peach)]/50"
            />

            {/* Toddlers Section */}
            <section className="py-16 md:py-24 border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-12 mb-12 items-center">
                        <div className="w-full md:w-1/3">
                            <div className="relative h-[300px] w-full rounded-[32px] overflow-hidden shadow-lg">
                                <Image
                                    src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800"
                                    alt="Toddler Collection"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-2/3">
                            <h2 className="text-3xl font-black text-gray-900 mb-4">Toddler Collection (1-3Y)</h2>
                            <p className="text-gray-600 mb-8 text-lg">Soft, gentle fabrics designed for maximum comfort and pure cuteness during those early active years.</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {toddlerProducts.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Kids Section */}
            <section className="py-16 md:py-24 bg-gray-50/50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row-reverse gap-12 mb-12 items-center">
                        <div className="w-full md:w-1/3">
                            <div className="relative h-[300px] w-full rounded-[32px] overflow-hidden shadow-lg">
                                <Image
                                    src="https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&q=80&w=800"
                                    alt="Kids Collection"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-2/3">
                            <h2 className="text-3xl font-black text-gray-900 mb-4">Kids Collection (4-12Y)</h2>
                            <p className="text-gray-600 mb-8 text-lg">Durable, stylish, and playful everyday wear crafted to withstand every adventure.</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {kidsProducts.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
