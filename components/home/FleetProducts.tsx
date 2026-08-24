'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fleetProducts } from '@/lib/data';
import { ArrowUpRight, Box, Maximize2, Weight } from 'lucide-react';

const specMeta = [
  { key: 'capacity' as const, label: 'Capacity', Icon: Box },
  { key: 'dimensions' as const, label: 'Dimensions', Icon: Maximize2 },
  { key: 'temperature' as const, label: 'Body Type', Icon: Weight },
];

export default function FleetProducts() {
  return (
    <section id="fleet" className="scroll-mt-24 bg-surface-muted py-12 md:py-16">
      <div className="section-container">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="section-label mb-2 justify-center">Our Fleet</p>
          <h2 className="text-2xl font-semibold tracking-tight text-text-dark md:text-3xl lg:text-4xl">
            Tonnage Fleet Built for Every Lane
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-text-body md:text-base">
            20 ft and 32 ft tonnage trucks maintained for safety, reliability, and timely deliveries.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          {fleetProducts.map((product, idx) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_32px_rgba(26,26,46,0.07)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_44px_rgba(26,26,46,0.12)]"
            >
              <div className="relative h-48 overflow-hidden sm:h-52">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                  {product.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col px-5 pb-5 pt-5">
                <h3 className="mb-4 text-lg font-semibold leading-snug text-text-dark">
                  {product.name}
                </h3>

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
                          {product.specs[key]}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/fleet/${product.id}`}
                  className="mt-auto inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-primary py-3 text-sm font-semibold text-white transition hover:bg-[var(--primary-dark)]"
                >
                  View Details
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
