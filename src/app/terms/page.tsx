import { Breadcrumbs } from '@/components/ui';

export default function TermsPage() {
    return (
        <div className="min-h-screen pb-20">
            <div className="container mx-auto px-4 pt-6">
                <Breadcrumbs items={[
                    { label: 'Home', href: '/' },
                    { label: 'Terms of Service' },
                ]} />
            </div>

            <section className="py-8 md:py-16">
                <div className="container mx-auto max-w-3xl px-4">
                    <span className="eyebrow">Terms</span>
                    <h1 className="display-title mt-5 text-4xl text-[var(--color-brand-ink)] md:text-6xl">
                        Terms of Service
                    </h1>
                    <div className="mt-8 space-y-6 rounded-[32px] border border-[var(--color-brand-line)] bg-white/82 p-6 text-sm leading-7 text-[var(--color-brand-muted)] shadow-[var(--shadow-soft)] md:p-8">
                        <p>By placing an order with AkidZ Wear, you agree to provide accurate sizing, delivery, and contact details so we can confirm and fulfill your order.</p>
                        <p>Product colors may vary slightly by screen. We aim to describe sizing, fabric, and availability clearly before dispatch.</p>
                        <p>Returns or exchanges are handled according to the shipping and returns policy, provided items are unused and returned in original condition.</p>
                        <p>For order help, delivery questions, or size guidance, contact us before checkout so we can support you properly.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
