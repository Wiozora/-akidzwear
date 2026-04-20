'use client';

import { products } from "@/lib/data";
import { 
  HeroSlider, 
  CategoryRow, 
  FeaturesBanner, 
  TrendingNow, 
  CategoryTeaser, 
  EverydayFavorites, 
  Newsletter 
} from "@/components/home";

export default function Home() {
  const newArrivals = products.slice(0, 4);
  const topPicks = products.slice(4, 12);
  const highlights = [
    { value: "120+", label: "Looks in rotation" },
    { value: "48h", label: "Fast dispatch window" },
    { value: "4.9/5", label: "Parent-loved comfort" },
  ];

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden pb-20">
      <HeroSlider />
      <section className="app-shell mb-8 md:mb-12">
        <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
          <div className="section-frame rounded-[32px] p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand-muted)]">
              Designed For Real Families
            </p>
            <h2 className="display-title mt-4 text-3xl text-[var(--color-brand-ink)] md:text-5xl">
              A brighter, softer wardrobe for little personalities.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--color-brand-muted)] md:text-lg">
              AkidZ Wear blends premium comfort with playful styling so everyday outfits feel considered, easy, and special without trying too hard.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1">
            {highlights.map((item) => (
              <div key={item.label} className="section-frame rounded-[28px] p-5">
                <p className="display-title text-4xl text-[var(--color-brand-coral)]">{item.value}</p>
                <p className="mt-2 text-sm font-semibold text-[var(--color-brand-ink)]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CategoryRow />
      <FeaturesBanner />
      <TrendingNow products={newArrivals} />
      <CategoryTeaser />
      <EverydayFavorites products={topPicks} />
      <Newsletter />
    </div>
  );
}
