import Link from "next/link";
import { ProductCard } from "@/components/product";
import { Button } from "@/components/ui";
import { Product } from "@/types";

interface EverydayFavoritesProps {
  products: Product[];
}

export const EverydayFavorites = ({ products }: EverydayFavoritesProps) => {
  return (
    <section className="app-shell py-12 md:py-16">
      <div className="overflow-hidden rounded-[40px] bg-[var(--color-brand-ink)] px-5 py-8 text-white shadow-[var(--shadow-soft)] md:px-8 md:py-10">
        <div className="mb-16 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/55">Built For Repeat Wear</p>
          <h2 className="display-title mt-4 text-4xl md:text-5xl">Everyday favorites</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/72 md:text-lg">
            Reliable wardrobe staples for busy mornings, after-school plans, and the million outfit repeats kids insist on.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="secondary" className="text-base" asChild>
            <Link href="/shop">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
