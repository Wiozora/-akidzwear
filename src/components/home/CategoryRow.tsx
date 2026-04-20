import Image from "next/image";
import Link from "next/link";

export const CategoryRow = () => {
  const categories = [
    {
      name: "Toddlers",
      note: "Soft starters",
      img: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=300",
    },
    {
      name: "New Launch",
      note: "Fresh this week",
      img: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&q=80&w=300",
    },
    {
      name: "Best Offers",
      note: "Value picks",
      img: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&q=80&w=300",
    },
    {
      name: "Kids",
      note: "Easy movers",
      img: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&q=80&w=300",
    },
    {
      name: "Accessories",
      note: "Finishing touch",
      img: "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&q=80&w=300",
    },
  ];

  return (
    <section className="app-shell mb-8 md:mb-12">
      <div className="section-frame rounded-[32px] px-4 py-5 md:px-6">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand-muted)]">
              Browse By Mood
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[var(--color-brand-ink)]">
              Quick ways into the collection
            </h2>
          </div>
          <Link href="/collections" className="hidden text-sm font-bold text-[var(--color-brand-muted)] md:inline-flex">
            See all edits
          </Link>
        </div>

        <div className="scrollbar-hide flex gap-4 overflow-x-auto pb-2 snap-x">
          {categories.map((cat) => (
            <Link href="/collections" key={cat.name} className="group min-w-[12rem] snap-start rounded-[26px] border border-[var(--color-brand-line)] bg-white/85 p-3 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:bg-white md:min-w-[13rem]">
              <div className="relative mb-4 aspect-[5/4] overflow-hidden rounded-[22px]">
                <Image src={cat.img} alt={cat.name} fill sizes="220px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-muted)]">
                {cat.note}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-[var(--color-brand-ink)]">{cat.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
