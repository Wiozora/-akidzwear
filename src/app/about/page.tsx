import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen pb-20 bg-white">
            {/* Header */}
            <section className="relative py-20 md:py-32 bg-[var(--color-brand-blue)]/50">
                <div 
                    className="absolute inset-0 z-0 bg-cover bg-center" 
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=1200')" }}
                />
                <div className="absolute inset-0 bg-white/70 z-0 backdrop-blur-sm" />
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
                        About Akid<span className="text-[var(--color-brand-blue)]">Z</span> Wear
                    </h1>
                    <p className="text-lg text-gray-800 font-medium max-w-2xl mx-auto">
                        Our story, our mission, and why we do what we do.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[500px] rounded-[40px] overflow-hidden shadow-[var(--shadow-hover)]">
                            <Image
                                src="https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&q=80&w=1000"
                                alt="Happy child"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-black text-gray-900 mb-6">Built out of Love for the Little Ones</h2>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                AkidZ Wear was founded by parents who struggled to find clothing that was simultaneously stylish, practical, and gentle on sensitive skin. We realized there was a gap in the market for premium toddlers and kids apparel that didn&apos;t compromise on durability.
                            </p>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                Every piece in our collection is carefully crafted to ensure it withstands the endless energy of childhood, while keeping your kids looking their absolute best. From playtime to parties, we&apos;ve got you covered.
                            </p>

                            <div className="grid grid-cols-2 gap-6 mt-10">
                                <div className="bg-[var(--color-brand-mint)]/10 p-6 rounded-2xl">
                                    <h3 className="font-bold text-xl text-gray-900 mb-2">100% Organic</h3>
                                    <p className="text-sm text-gray-600">We source only the finest, softest organic cotton for our garments.</p>
                                </div>
                                <div className="bg-[var(--color-brand-peach)]/10 p-6 rounded-2xl">
                                    <h3 className="font-bold text-xl text-gray-900 mb-2">Ethical</h3>
                                    <p className="text-sm text-gray-600">Produced fairly, safely, and transparently by experienced craftspeople.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-gray-50/50">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h2 className="text-3xl font-black text-gray-900 mb-12">Our Core Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-2xl font-bold text-[var(--color-brand-blue)] mb-4">1</div>
                            <h4 className="text-xl font-bold mb-2">Comfort First</h4>
                            <p className="text-gray-500 text-sm">No itchy tags. No stiff fabrics. Just pure softness.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-2xl font-bold text-[var(--color-brand-mint)] mb-4">2</div>
                            <h4 className="text-xl font-bold mb-2">Play-Ready</h4>
                            <p className="text-gray-500 text-sm">Clothes meant to be worn, washed, and loved repeatedly.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-2xl font-bold text-[var(--color-brand-peach)] mb-4">3</div>
                            <h4 className="text-xl font-bold mb-2">Aesthetic</h4>
                            <p className="text-gray-500 text-sm">Modern styling with beautiful color palettes and cuts.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
