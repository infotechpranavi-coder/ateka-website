'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { serviceCategories } from '@/lib/data';

export default function CategoriesWeServe() {
  return (
    <section id="industries" className="scroll-mt-24 bg-surface-muted py-10 md:py-14">
      <div className="section-container">
        <div className="mx-auto mb-8 max-w-2xl text-center md:mb-10">
          <p className="section-label mb-2 justify-center">Industries</p>
          <h2 className="text-2xl font-semibold tracking-tight text-text-dark md:text-3xl lg:text-4xl">
            Categories We Serve
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-text-body md:text-base">
            Road freight support for logistics, e-commerce, express, retail, manufacturing, and corporate clients.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {serviceCategories.map((category, idx) => (
            <motion.article
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group overflow-hidden rounded-2xl bg-white shadow-[0_8px_28px_rgba(26,26,46,0.06)] ring-1 ring-black/[0.04] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(26,26,46,0.1)]"
            >
              <div className="relative h-44 overflow-hidden sm:h-48">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/35 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold tracking-wider text-white">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="px-5 py-5 text-center">
                <h3 className="text-lg font-semibold text-text-dark">{category.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-body">{category.description}</p>
                <Link
                  href={`/industries/${category.id}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary"
                >
                  View Details
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--primary-dark)]"
          >
            View All Industries
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
