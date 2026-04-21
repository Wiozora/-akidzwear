'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { products } from '@/lib/data';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { ProductCard } from '@/components/product';
import { Button } from '@/components/ui';
import { Breadcrumbs } from '@/components/ui';
import { ShoppingCart, Heart, Star, Minus, Plus, Truck, RotateCcw, Shield, Ruler, MessageCircle, CheckCircle2 } from 'lucide-react';

export default function ProductDetailPage() {
    const params = useParams();
    const product = products.find((p) => p.id === params.id);
    const { addToCart } = useCart();
    const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();

    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [quantity, setQuantity] = useState(1);
    const [sizeError, setSizeError] = useState(false);

    if (!product) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
                <h1 className="text-3xl font-black text-gray-900 mb-4">Product Not Found</h1>
                <p className="text-gray-500 mb-8">Sorry, the product you&apos;re looking for doesn&apos;t exist.</p>
                <Button variant="primary" className="rounded-full px-8">
                    <Link href="/shop">Back to Shop</Link>
                </Button>
            </div>
        );
    }

    const images = product.images && product.images.length > 0 ? product.images : [product.imageUrl];
    const wishlisted = isInWishlist(product.id);
    const avgRating = product.reviews && product.reviews.length > 0
        ? (product.reviews.reduce((sum, r) => sum + r.rating, 0) / product.reviews.length).toFixed(1)
        : null;
    const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
    const discountPercent = product.originalPrice
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : null;

    const handleAddToCart = () => {
        if (product.sizes?.length && !selectedSize) {
            setSizeError(true);
            return;
        }

        addToCart(product, {
            quantity,
            selectedSize: selectedSize ?? undefined,
        });
    };

    return (
        <div className="flex flex-col min-h-screen pb-20">
            {/* Breadcrumbs */}
            <div className="container mx-auto px-4 pt-6">
                <Breadcrumbs items={[
                    { label: 'Home', href: '/' },
                    { label: 'Shop', href: '/shop' },
                    { label: product.name },
                ]} />
            </div>

            {/* Product Section */}
            <section className="py-8 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
                        {/* Image Gallery */}
                        <div className="flex flex-col-reverse md:flex-row gap-4">
                            {/* Thumbnails */}
                            {images.length > 1 && (
                                <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto md:max-h-[600px] scrollbar-hide">
                                    {images.map((img, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setSelectedImage(idx)}
                                            className={`relative w-16 h-20 md:w-20 md:h-24 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${selectedImage === idx ? 'border-gray-900 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'}`}
                                        >
                                            <Image src={img} alt={`View ${idx + 1}`} fill className="object-cover" />
                                        </button>
                                    ))}
                                </div>
                            )}
                            {/* Main Image */}
                            <div className="relative flex-1 aspect-[4/5] rounded-[32px] overflow-hidden bg-gray-50 shadow-[var(--shadow-soft)]">
                                <Image
                                    src={images[selectedImage]}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                {product.badge && (
                                    <span className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-md ${product.badge === 'SALE' ? 'bg-red-500 text-white' :
                                            product.badge === 'NEW' ? 'bg-[var(--color-brand-blue)] text-gray-800' :
                                                'bg-orange-400 text-white'
                                        }`}>
                                        {product.badge}
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className="flex flex-col">
                            <span className="text-sm font-semibold text-[var(--color-brand-blue)] uppercase tracking-widest mb-2">
                                {product.category}
                            </span>
                            <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight">
                                {product.name}
                            </h1>

                            {/* Rating */}
                            {avgRating && (
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="flex items-center gap-0.5">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} size={16} className={`${star <= Math.round(Number(avgRating)) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}`} />
                                        ))}
                                    </div>
                                    <span className="text-sm font-semibold text-gray-700">{avgRating}</span>
                                    <span className="text-sm text-gray-400">({product.reviews?.length} reviews)</span>
                                </div>
                            )}

                            {/* Price */}
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-3xl font-black text-gray-900">
                                    PKR {product.price.toLocaleString()}
                                </span>
                                {product.originalPrice && (
                                    <>
                                        <span className="text-lg text-gray-400 line-through">
                                            PKR {product.originalPrice.toLocaleString()}
                                        </span>
                                        <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-full">
                                            -{discountPercent}%
                                        </span>
                                    </>
                                )}
                            </div>

                            <p className="text-gray-600 text-base leading-relaxed mb-8">
                                {product.description}
                            </p>

                            <div className="mb-8 grid gap-3 sm:grid-cols-2">
                                <div className="rounded-2xl border border-[var(--color-brand-line)] bg-white/80 p-4">
                                    <div className="flex items-center gap-2 text-sm font-black text-gray-900">
                                        <CheckCircle2 size={18} className="text-[var(--color-brand-mint)]" />
                                        Soft everyday fabric
                                    </div>
                                    <p className="mt-2 text-sm leading-6 text-gray-500">Gentle feel for active kids, school days, outings, and repeat wear.</p>
                                </div>
                                <div className="rounded-2xl border border-[var(--color-brand-line)] bg-white/80 p-4">
                                    <div className="flex items-center gap-2 text-sm font-black text-gray-900">
                                        <MessageCircle size={18} className="text-green-600" />
                                        WhatsApp order support
                                    </div>
                                    <p className="mt-2 text-sm leading-6 text-gray-500">Need size help? Message us before checkout and we will guide you.</p>
                                </div>
                            </div>

                            {/* Size Selector */}
                            {product.sizes && product.sizes.length > 0 && (
                                <div className="mb-8">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-sm font-bold text-gray-900 uppercase tracking-wide">Select Size</span>
                                        <Link href="/size-guide" className="text-xs text-[var(--color-brand-blue)] hover:underline font-medium">Size Guide</Link>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {product.sizes.map((size) => (
                                            <button
                                                key={size}
                                                onClick={() => {
                                                    setSelectedSize(size);
                                                    setSizeError(false);
                                                }}
                                                className={`px-4 py-2.5 rounded-xl text-sm font-semibold border-2 transition-all ${selectedSize === size
                                                        ? 'border-gray-900 bg-gray-900 text-white shadow-md'
                                                        : 'border-gray-200 text-gray-700 hover:border-gray-400'
                                                    }`}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                    {sizeError && (
                                        <p className="mt-3 text-sm font-semibold text-red-500">Please select a size before adding this item.</p>
                                    )}
                                </div>
                            )}

                            {/* Quantity */}
                            <div className="mb-8">
                                <span className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3 block">Quantity</span>
                                <div className="inline-flex items-center border-2 border-gray-200 rounded-xl overflow-hidden">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="p-3 hover:bg-gray-50 transition-colors"
                                    >
                                        <Minus size={16} />
                                    </button>
                                    <span className="px-6 py-3 font-bold text-gray-900 min-w-[60px] text-center">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="p-3 hover:bg-gray-50 transition-colors"
                                    >
                                        <Plus size={16} />
                                    </button>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-3 mb-8">
                                <Button
                                    size="lg"
                                    variant="primary"
                                    className="flex-1 rounded-full py-4 text-base font-bold bg-gray-900 hover:bg-gray-800 text-white flex items-center justify-center gap-2"
                                    onClick={handleAddToCart}
                                >
                                    <ShoppingCart size={20} />
                                    Add to Cart
                                </Button>
                                <button
                                    onClick={() => wishlisted ? removeFromWishlist(product.id) : addToWishlist(product.id)}
                                    className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all ${wishlisted
                                            ? 'border-red-400 bg-red-50 text-red-500'
                                            : 'border-gray-200 text-gray-400 hover:border-gray-300 hover:text-red-400'
                                        }`}
                                    aria-label="Toggle Wishlist"
                                >
                                    <Heart size={22} className={wishlisted ? 'fill-red-500' : ''} />
                                </button>
                            </div>

                            {/* Features */}
                            <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-8">
                                <div className="flex flex-col items-center text-center gap-2">
                                    <Truck size={20} className="text-[var(--color-brand-blue)]" />
                                    <span className="text-xs font-semibold text-gray-600">Free Delivery</span>
                                </div>
                                <div className="flex flex-col items-center text-center gap-2">
                                    <RotateCcw size={20} className="text-[var(--color-brand-mint)]" />
                                    <span className="text-xs font-semibold text-gray-600">14-Day Returns</span>
                                </div>
                                <div className="flex flex-col items-center text-center gap-2">
                                    <Shield size={20} className="text-[var(--color-brand-peach)]" />
                                    <span className="text-xs font-semibold text-gray-600">COD Available</span>
                                </div>
                            </div>

                            <div className="mt-8 rounded-[28px] bg-[var(--color-brand-cream)] p-5">
                                <h2 className="flex items-center gap-2 text-sm font-black uppercase tracking-wide text-gray-900">
                                    <Ruler size={18} />
                                    Fit, Care & Delivery
                                </h2>
                                <div className="mt-4 grid gap-3 text-sm leading-6 text-gray-600">
                                    <p><strong className="text-gray-900">Fit:</strong> True to age for most kids. Choose one size up if your child is between sizes.</p>
                                    <p><strong className="text-gray-900">Care:</strong> Wash gently in cold water and dry inside out to keep colors fresh.</p>
                                    <p><strong className="text-gray-900">Delivery:</strong> Orders are packed for doorstep delivery, with WhatsApp confirmation before dispatch.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            {product.reviews && product.reviews.length > 0 && (
                <section className="py-16 bg-gray-50/50 border-t border-gray-100">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-10 tracking-tight">
                            Customer Reviews ({product.reviews.length})
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
                            {product.reviews.map((review) => (
                                <div key={review.id} className="bg-white rounded-2xl p-6 shadow-[var(--shadow-soft)] border border-gray-100">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-brand-blue)] to-[var(--color-brand-mint)] flex items-center justify-center text-white font-bold text-sm">
                                            {review.author.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900 text-sm">{review.author}</p>
                                            <p className="text-xs text-gray-400">{new Date(review.date).toLocaleDateString('en-PK', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-0.5 mb-3">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} size={14} className={`${star <= review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}`} />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed">{review.comment}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Related Products */}
            {relatedProducts.length > 0 && (
                <section className="py-16 border-t border-gray-100">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-10 tracking-tight">
                            You May Also Like
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {relatedProducts.map((p) => (
                                <ProductCard key={p.id} product={p} />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
