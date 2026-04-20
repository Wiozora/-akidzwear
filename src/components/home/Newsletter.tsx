import { Button } from "@/components/ui";

export const Newsletter = () => {
  return (
    <section className="app-shell py-12 md:py-16">
      <div className="section-frame rounded-[40px] p-6 md:p-8">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <span className="eyebrow">Stay In The Loop</span>
            <h2 className="display-title mt-5 text-4xl text-[var(--color-brand-ink)] md:text-5xl">
              Join the AkidZ family
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-[var(--color-brand-muted)]">
              Be first to hear about new drops, limited offers, and styling ideas for playful everyday dressing.
            </p>
          </div>

          <div className="rounded-[30px] bg-[var(--color-brand-cream)] p-5 md:p-6">
            <form className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email address"
                className="min-w-0 flex-grow rounded-full border border-[var(--color-brand-line)] bg-white px-6 py-4 text-[var(--color-brand-ink)] focus:border-[var(--color-brand-coral)]/40 focus:outline-none"
                required
              />
              <Button type="button" size="lg" className="shrink-0">
                Subscribe
              </Button>
            </form>
            <p className="mt-4 text-sm text-[var(--color-brand-muted)]">
              One thoughtful email at a time. No clutter, just updates worth opening.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
