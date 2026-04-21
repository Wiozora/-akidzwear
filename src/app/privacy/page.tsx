import { Breadcrumbs } from '@/components/ui';

export default function PrivacyPage() {
    return (
        <div className="min-h-screen pb-20">
            <div className="container mx-auto px-4 pt-6">
                <Breadcrumbs items={[
                    { label: 'Home', href: '/' },
                    { label: 'Privacy Policy' },
                ]} />
            </div>

            <section className="py-8 md:py-16">
                <div className="container mx-auto max-w-3xl px-4">
                    <span className="eyebrow">Privacy</span>
                    <h1 className="display-title mt-5 text-4xl text-[var(--color-brand-ink)] md:text-6xl">
                        Privacy Policy
                    </h1>
                    <div className="mt-8 space-y-6 rounded-[32px] border border-[var(--color-brand-line)] bg-white/82 p-6 text-sm leading-7 text-[var(--color-brand-muted)] shadow-[var(--shadow-soft)] md:p-8">
                        <p>AkidZ Wear uses customer details only to answer questions, process orders, confirm delivery, and improve the shopping experience.</p>
                        <p>Order details shared through WhatsApp, email, or contact forms may include your name, phone number, address, selected products, sizes, and delivery notes.</p>
                        <p>We do not sell customer information. Payment and delivery information should only be shared through trusted AkidZ Wear contact channels.</p>
                        <p>For privacy questions or data updates, contact us at support@akidzwear.com.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
