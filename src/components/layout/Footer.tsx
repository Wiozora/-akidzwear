import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
    const shopLinks = [
        { href: '/shop', label: 'All Products' },
        { href: '/collections', label: 'Toddler Edit' },
        { href: '/collections', label: 'Kids Edit' },
        { href: '/shop', label: 'New Arrivals' },
    ];

    const supportLinks = [
        { href: '/faq', label: 'FAQs' },
        { href: '/shipping', label: 'Shipping & Returns' },
        { href: '/size-guide', label: 'Size Guide' },
        { href: '/contact', label: 'Contact Us' },
    ];

    return (
        <footer className="pb-8 pt-24">
            <div className="app-shell">
                <div className="section-frame overflow-hidden rounded-[40px] bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(255,248,239,0.9))] px-6 py-8 md:px-10 md:py-10">
                    <div className="grid gap-8 border-b border-[var(--color-brand-line)] pb-10 md:grid-cols-[1.35fr_0.9fr]">
                        <div>
                            <span className="eyebrow">Little Originals Club</span>
                            <h2 className="display-title mt-5 max-w-xl text-4xl text-[var(--color-brand-ink)] md:text-5xl">
                                Clothes that feel gentle, look playful, and survive real kid energy.
                            </h2>
                            <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--color-brand-muted)] md:text-lg">
                                AkidZ Wear brings together soft cottons, easy silhouettes, and cheerful color stories for families who want comfort without boring basics.
                            </p>
                        </div>

                        <div className="rounded-[30px] bg-[var(--color-brand-ink)] p-6 text-white shadow-[var(--shadow-card)]">
                            <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/60">
                                Visit or Reach Out
                            </p>
                            <div className="mt-5 space-y-4 text-sm leading-6 text-white/85">
                                <p>Karachi, Pakistan</p>
                                <p>support@akidzwear.com</p>
                                <p>+92 300 0000000</p>
                            </div>
                            <div className="mt-6 flex gap-3">
                                <a href="#" className="rounded-full border border-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] transition-colors hover:bg-white hover:text-[var(--color-brand-ink)]" aria-label="Instagram">IG</a>
                                <a href="#" className="rounded-full border border-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] transition-colors hover:bg-white hover:text-[var(--color-brand-ink)]" aria-label="Facebook">FB</a>
                                <a href="#" className="rounded-full border border-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] transition-colors hover:bg-white hover:text-[var(--color-brand-ink)]" aria-label="WhatsApp">WA</a>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-10 py-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
                        <div>
                            <Link href="/" className="inline-flex items-center" aria-label="AkidZ Wear home">
                                <Image
                                    src="/logo.png"
                                    alt="AkidZ Wear"
                                    width={1816}
                                    height={1192}
                                    className="h-40 w-auto object-contain"
                                />
                            </Link>
                            <p className="mt-5 max-w-md text-sm leading-7 text-[var(--color-brand-muted)]">
                                Premium toddler and kidswear designed for movement, softness, and a little extra charm in everyday dressing.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-brand-ink)]">Shop</h4>
                            <ul className="mt-5 space-y-3">
                                {shopLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href} className="text-sm text-[var(--color-brand-muted)] transition-colors hover:text-[var(--color-brand-ink)]">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-brand-ink)]">Support</h4>
                            <ul className="mt-5 space-y-3">
                                {supportLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href} className="text-sm text-[var(--color-brand-muted)] transition-colors hover:text-[var(--color-brand-ink)]">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 border-t border-[var(--color-brand-line)] pt-6 text-sm text-[var(--color-brand-muted)] md:flex-row md:items-center md:justify-between">
                        <p>&copy; {new Date().getFullYear()} AkidZ Wear. All rights reserved.</p>
                        <div className="flex gap-5">
                            <Link href="#" className="transition-colors hover:text-[var(--color-brand-ink)]">Privacy Policy</Link>
                            <Link href="#" className="transition-colors hover:text-[var(--color-brand-ink)]">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
