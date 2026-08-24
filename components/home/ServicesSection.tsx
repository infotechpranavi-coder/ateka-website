'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { services } from '@/lib/data';
import WorldMapOverlay from '@/components/WorldMapOverlay';

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-dark-navy py-10 md:py-12">
      <div className="pointer-events-none absolute -left-24 top-0 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
      <WorldMapOverlay className="opacity-[0.16]" showMarkers />

      <div className="section-container relative">
        <div className="mx-auto mb-7 max-w-2xl text-center md:mb-8">
          <p className="section-label mb-2 justify-center text-primary-light before:bg-primary-light">What We Offer</p>
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Services We Offer
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-white/65 md:text-base">
            End-to-end road freight and logistics support across India for FTL, dedicated, and express movement.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-5">
          {services.slice(0, 4).map((service, idx) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-[0_10px_28px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.22)]"
            >
              <div className="relative h-32 overflow-hidden sm:h-36">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                />
              </div>

              <div className="flex flex-1 flex-col px-4 py-4">
                <p className="mb-1.5 text-[11px] font-semibold tracking-[0.16em] text-primary">
                  {service.number}
                </p>
                <h3 className="mb-1.5 text-[15px] font-semibold leading-snug text-text-dark">
                  {service.title}
                </h3>
                <p className="mb-3 line-clamp-2 text-sm leading-relaxed text-text-body">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.id}`}
                  className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-primary transition group-hover:gap-1.5"
                >
                  View Details
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-7 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--primary-dark)]"
          >
            View All Services
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
