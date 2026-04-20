import { ShieldCheck, Truck, RefreshCcw, Sparkles } from "lucide-react";

export const FeaturesBanner = () => {
  const features = [
    { title: 'Premium Quality', desc: 'Breathable fabrics with comfort-first stitching.', icon: Sparkles },
    { title: 'Fast Delivery', desc: 'Quick dispatch so essentials reach you sooner.', icon: Truck },
    { title: 'Easy Returns', desc: 'Stress-free exchanges for sizing and gifting.', icon: RefreshCcw },
    { title: 'Secure Payment', desc: 'Safe checkout with encrypted payment flow.', icon: ShieldCheck },
  ];

  return (
    <section className="app-shell py-10 md:py-12">
      <div className="grid gap-4 md:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div key={feature.title} className="section-frame rounded-[28px] p-5">
              <div className="mb-5 inline-flex rounded-2xl bg-[var(--color-brand-cream)] p-3 text-[var(--color-brand-coral)]">
                <Icon size={20} />
              </div>
              <h4 className="text-lg font-semibold text-[var(--color-brand-ink)]">{feature.title}</h4>
              <p className="mt-2 text-sm leading-6 text-[var(--color-brand-muted)]">{feature.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
