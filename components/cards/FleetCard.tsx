import Image from 'next/image';
import Link from 'next/link';
import { FleetProduct } from '@/lib/types';
import { ArrowUpRight, Box, Maximize2, Weight } from 'lucide-react';

const specMeta = [
  { key: 'capacity' as const, label: 'Capacity', Icon: Box },
  { key: 'dimensions' as const, label: 'Dimensions', Icon: Maximize2 },
  { key: 'temperature' as const, label: 'Body Type', Icon: Weight },
];

export default function FleetCard({ id, name, image, category, specs }: FleetProduct) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_32px_rgba(26,26,46,0.07)] ring-1 ring-black/[0.04] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(26,26,46,0.1)]">
      <div className="relative h-44 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
          {category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-4 text-lg font-semibold leading-snug text-text-dark">{name}</h3>
        <ul className="mb-5 space-y-3 rounded-xl bg-surface-muted p-4">
          {specMeta.map(({ key, label, Icon }) => (
            <li key={key} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-primary shadow-sm">
                <Icon className="h-4 w-4" strokeWidth={1.75} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-text-light">
                  {label}
                </p>
                <p className="mt-0.5 text-sm font-semibold leading-snug text-text-dark">
                  {specs[key]}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <Link
          href={`/fleet/${id}`}
          className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
        >
          View Details
          <ArrowUpRight size={15} />
        </Link>
      </div>
    </article>
  );
}
