'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const heroSlides = [
  {
    id: 1,
    label: "Spring Edit",
    title: "Playful layers for little originals.",
    description: "Soft cotton sets, easy fits, and color-rich essentials designed for comfort from playground mornings to family evenings.",
    detail: "New season arrivals with airy fabrics and cheerful tones.",
    bgGradient: "from-[#f8dcc7] via-[#f4e9d6] to-[#f7f7f2]",
    accent: "PKR 1,000 off selected pre-book styles",
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 2,
    label: "Mini Occasionwear",
    title: "Dressed-up pieces that still let them move.",
    description: "Charming dresses, polished polos, and cozy layers made with parent-friendly comfort and kid-approved freedom.",
    detail: "Best-selling looks for birthdays, brunches, and weekend photos.",
    bgGradient: "from-[#d9edf4] via-[#f3f8fb] to-[#f9f4ec]",
    accent: "Free gift wrap on celebration looks this week",
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 3,
    label: "Everyday Essentials",
    title: "Built for repeat wear, endless play, and real life.",
    description: "From soft rompers to easy tees, our wardrobe staples are made to wash well, pair easily, and keep up with busy kids.",
    detail: "Bundle picks loved by parents who want less fuss and more wear.",
    bgGradient: "from-[#dff3e4] via-[#fff6ec] to-[#ffe0cc]",
    accent: "Buy 2 everyday favorites, get 1 at 30% off",
    image: "/images/hero-kid.jpg",
  }
];

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <section className="app-shell mb-8 mt-4 md:mb-12 md:mt-6">
      <div className={`section-frame relative overflow-hidden rounded-[40px] bg-gradient-to-br ${slide.bgGradient} px-5 py-6 transition-colors duration-1000 md:px-8 md:py-8`}>
        <div className="pointer-events-none absolute inset-0 soft-grid opacity-25" />
        <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-white/30 blur-3xl" />
        <div className="absolute right-0 top-10 h-48 w-48 rounded-full bg-[var(--color-brand-coral)]/20 blur-3xl" />

        <AnimatePresence mode="popLayout">
          <motion.div
            key={`slide-${currentSlide}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="relative z-20 grid min-h-[34rem] items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="flex flex-col items-start justify-center px-2 md:px-4 lg:px-6">
              <span className="eyebrow">
                <Sparkles size={14} />
                {slide.label}
              </span>
              <h1 className="display-title mt-6 max-w-xl text-5xl text-[var(--color-brand-ink)] md:text-7xl">
                {slide.title}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-[var(--color-brand-muted)] md:text-lg">
                {slide.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" className="bg-[var(--color-brand-ink)] text-white" asChild>
                  <Link href="/shop">
                    Shop The Drop
                    <ArrowRight size={16} />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/collections">Explore Collections</Link>
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="rounded-full border border-[var(--color-brand-line)] bg-white/85 px-4 py-2 text-sm font-semibold text-[var(--color-brand-ink)]">
                  {slide.accent}
                </div>
                <div className="rounded-full border border-[var(--color-brand-line)] bg-[var(--color-brand-cream)]/85 px-4 py-2 text-sm font-semibold text-[var(--color-brand-muted)]">
                  {slide.detail}
                </div>
              </div>
            </div>

            <div className="relative mx-auto flex w-full max-w-[34rem] items-end justify-center lg:h-full">
              <div className="absolute left-2 top-4 hidden rounded-[26px] bg-white/85 p-4 shadow-[var(--shadow-card)] md:block">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand-muted)]">
                  Parent Favorite
                </p>
                <p className="mt-1 text-sm font-semibold text-[var(--color-brand-ink)]">
                  Thoughtful fits. Easy styling.
                </p>
              </div>

              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[34px] border border-white/70 bg-white/50 p-3 shadow-[var(--shadow-soft)]">
                <div className="relative h-full w-full overflow-hidden rounded-[26px]">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="absolute -bottom-2 right-4 rounded-[28px] bg-[var(--color-brand-ink)] px-5 py-4 text-white shadow-[var(--shadow-card)] md:bottom-8 md:right-[-1rem]">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/60">
                  AkidZ Promise
                </p>
                <p className="mt-1 text-sm font-semibold">
                  Soft fabrics and fuss-free fits
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="relative z-20 mt-6 flex items-center justify-between gap-4 px-2 md:px-4">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-brand-muted)]">
            Curated for toddlers and kids
          </p>
          <div className="flex gap-2">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-10 bg-[var(--color-brand-ink)]' : 'w-2 bg-[var(--color-brand-ink)]/25'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
