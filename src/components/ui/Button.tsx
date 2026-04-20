import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className = '', variant = 'primary', size = 'md', fullWidth = false, asChild = false, children, ...props }, ref) => {
        const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-brand-coral)]/40 active:scale-[0.98]';

        const variants = {
            primary: 'bg-[var(--color-brand-ink)] text-white hover:-translate-y-0.5 hover:bg-[#1f1a16] shadow-[var(--shadow-card)]',
            secondary: 'bg-[var(--color-brand-peach)] text-[var(--color-brand-ink)] hover:-translate-y-0.5 hover:opacity-90 shadow-[var(--shadow-card)]',
            outline: 'border border-[var(--color-brand-line)] bg-white/70 text-[var(--color-brand-ink)] hover:-translate-y-0.5 hover:border-[var(--color-brand-coral)]/35 hover:bg-white',
            ghost: 'bg-transparent text-[var(--color-brand-muted)] hover:bg-white/80 hover:text-[var(--color-brand-ink)]',
        };

        const sizes = {
            sm: 'px-3.5 py-2 text-sm',
            md: 'px-6 py-3 text-sm',
            lg: 'px-8 py-4 text-base',
        };

        const widthClass = fullWidth ? 'w-full' : '';
        const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`;

        if (asChild && React.isValidElement(children)) {
            const child = children as React.ReactElement<{ className?: string }>;

            return React.cloneElement(child, {
                className: [combinedClasses, child.props.className].filter(Boolean).join(' '),
            });
        }

        return (
            <button ref={ref} className={combinedClasses} {...props}>
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';
