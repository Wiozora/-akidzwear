import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui";

export const CategoryTeaser = () => {
  return (
    <section className="app-shell py-12 md:py-16">
      <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
        <div className="group relative min-h-[24rem] overflow-hidden rounded-[34px] border border-[var(--color-brand-line)] bg-[#dbeaf0] p-6 shadow-[var(--shadow-soft)]">
          <Image
            src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800"
            alt="Toddlers Collection"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(20,19,17,0.72)] via-[rgba(20,19,17,0.3)] to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">Ages 1-3 years</p>
            <h3 className="display-title mt-3 text-4xl text-white md:text-5xl">Toddlers</h3>
            <p className="mt-3 max-w-sm text-sm leading-6 text-white/85">
              Cloud-soft layers, easy snaps, and gentle shades made for the tiniest routines.
            </p>
            <Button variant="secondary" className="mt-6" asChild>
              <Link href="/collections">Shop Toddlers</Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="section-frame rounded-[34px] p-6 md:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand-muted)]">Mini Style Notes</p>
            <h3 className="display-title mt-3 text-3xl text-[var(--color-brand-ink)] md:text-4xl">
              Looks for family days, birthdays, and every in-between plan.
            </h3>
            <p className="mt-4 text-sm leading-7 text-[var(--color-brand-muted)]">
              Explore polished outfits that still feel easy, breathable, and wearable long after the photos are done.
            </p>
          </div>

          <div className="group relative min-h-[18rem] overflow-hidden rounded-[34px] border border-[var(--color-brand-line)] bg-[#f7e2d7] p-6 shadow-[var(--shadow-soft)]">
            <Image
              src="https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&q=80&w=800"
              alt="Kids Collection"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(20,19,17,0.78)] via-[rgba(20,19,17,0.3)] to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">Ages 4-12 years</p>
              <h3 className="display-title mt-3 text-4xl text-white">Kids</h3>
              <Button variant="outline" className="mt-5 border-white/50 bg-white/10 text-white hover:bg-white hover:text-[var(--color-brand-ink)]" asChild>
                <Link href="/collections">Shop Kids</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
