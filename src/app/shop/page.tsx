'use client';

import { useState, useMemo } from 'react';
import { products } from '@/lib/data';
import { ProductCard } from '@/components/product';
import { Breadcrumbs } from '@/components/ui';
import { Search, SlidersHorizontal } from 'lucide-react';
import { PageHeader } from "@/components/layout";

const categories = ['All', 'Toddler', 'Kids', 'Accessories'];
const sortOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' },
    { label: 'Newest First', value: 'newest' },
];

export default function ShopPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');
    const [sortBy, setSortBy] = useState('default');

    const filteredProducts = useMemo(() => {
        let result = [...products];

        // Search filter
        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase();
            result = result.filter(
                (p) =>
                    p.name.toLowerCase().includes(q) ||
                    p.description.toLowerCase().includes(q) ||
                    p.category.toLowerCase().includes(q)
            );
        }

        // Category filter
        if (activeCategory !== 'All') {
            result = result.filter((p) => p.category === activeCategory);
        }

        // Sort
        switch (sortBy) {
            case 'price-asc':
                result.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                result.sort((a, b) => b.price - a.price);
                break;
            case 'newest':
                result.reverse();
                break;
            default:
                break;
        }

        return result;
    }, [searchQuery, activeCategory, sortBy]);

    return (
        <div className="flex flex-col min-h-screen pb-20 bg-gray-50/30">
            {/* Header */}
            <PageHeader
                title="Shop All"
                description="Browse our complete collection of premium and comfortable clothing for your little ones."
                backgroundImage="https://images.unsplash.com/photo-1627487143514-de0bfea44d73?auto=format&fit=crop&q=80&w=1200"
                themeColorClass="bg-[var(--color-brand-mint)]/50"
            />

            <section className="py-8 md:py-12">
                <div className="container mx-auto px-4">
                    {/* Breadcrumbs */}
                    <div className="mb-8">
                        <Breadcrumbs items={[
                            { label: 'Home', href: '/' },
                            { label: 'Shop' },
                        ]} />
                    </div>

                    {/* Search & Filters Bar */}
                    <div className="flex flex-col md:flex-row gap-4 mb-10">
                        {/* Search */}
                        <div className="relative flex-1 max-w-md">
                            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[var(--color-brand-blue)] focus:outline-none transition-colors text-sm bg-white"
                            />
                        </div>

                        {/* Category Filters */}
                        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${activeCategory === cat
                                            ? 'bg-gray-900 text-white shadow-md'
                                            : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Sort */}
                        <div className="relative">
                            <SlidersHorizontal size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="appearance-none pl-9 pr-8 py-3 rounded-xl border-2 border-gray-200 focus:border-[var(--color-brand-blue)] focus:outline-none transition-colors text-sm bg-white font-medium text-gray-700 cursor-pointer"
                            >
                                {sortOptions.map((opt) => (
                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Results Count */}
                    <p className="text-sm text-gray-400 mb-6">
                        Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                        {activeCategory !== 'All' && ` in ${activeCategory}`}
                        {searchQuery && ` matching "${searchQuery}"`}
                    </p>

                    {/* Products Grid */}
                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {filteredProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-2xl font-bold text-gray-300 mb-2">No products found</p>
                            <p className="text-sm text-gray-400">Try adjusting your search or filter</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
