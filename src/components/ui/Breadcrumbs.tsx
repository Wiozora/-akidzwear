import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
    return (
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm">
            {items.map((item, idx) => (
                <span key={idx} className="flex items-center gap-1.5">
                    {idx > 0 && <ChevronRight size={14} className="text-gray-300" />}
                    {item.href ? (
                        <Link
                            href={item.href}
                            className="text-gray-400 hover:text-[var(--color-brand-blue)] transition-colors font-medium"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-gray-700 font-semibold">{item.label}</span>
                    )}
                </span>
            ))}
        </nav>
    );
};
