import React from 'react';

interface PageHeaderProps {
    title: string;
    description: string;
    backgroundImage: string;
    themeColorClass?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ 
    title, 
    description, 
    backgroundImage,
    themeColorClass = "bg-[var(--color-brand-peach)]/50"
}) => {
    return (
        <section className={`relative py-20 md:py-32 ${themeColorClass}`}>
            <div 
                className="absolute inset-0 z-0 bg-cover bg-center" 
                style={{ backgroundImage: `url('${backgroundImage}')` }}
            />
            <div className="absolute inset-0 bg-white/40 z-0 backdrop-blur-[2px]" />
            <div className="container mx-auto px-4 text-center relative z-10">
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight text-shadow-sm">
                    {title}
                </h1>
                <p className="text-lg text-gray-900 font-semibold max-w-2xl mx-auto text-shadow-sm">
                    {description}
                </p>
            </div>
        </section>
    );
};
