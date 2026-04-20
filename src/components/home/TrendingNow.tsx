import Link from "next/link";
import { ProductCard } from "@/components/product";
import { Product } from "@/types";

interface TrendingNowProps {
  products: Product[];
}

export const TrendingNow = ({ products }: TrendingNowProps) => {
  return (
    <section className="app-shell py-12 md:py-16">
      <div className="section-frame rounded-[40px] px-5 py-8 md:px-8 md:py-10">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand-muted)]">Best Sellers</p>
            <h2 className="display-title mt-3 text-4xl text-[var(--color-brand-ink)] md:text-5xl">Trending right now</h2>
            <p className="mt-4 text-base leading-7 text-[var(--color-brand-muted)] md:text-lg">
              Discover the styles parents keep reordering and kids keep reaching for first.
            </p>
          </div>
          <Link href="/shop" className="pill-link border border-[var(--color-brand-line)] bg-white/80 text-[var(--color-brand-ink)] hover:-translate-y-0.5 hover:bg-white">
            View All Products
            <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
