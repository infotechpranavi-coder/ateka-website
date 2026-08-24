'use client';

import { motion } from 'framer-motion';
import { Clock, MapPinned, ShieldCheck, Headphones } from 'lucide-react';
import WorldMapOverlay from '@/components/WorldMapOverlay';

const stats = [
  {
    icon: Clock,
    value: '27',
    label: 'Vehicle Fleet',
  },
  {
    icon: MapPinned,
    value: 'Pan-India',
    label: 'Road Coverage',
  },
  {
    icon: ShieldCheck,
    value: 'On-time',
    label: 'Safe Deliveries',
  },
  {
    icon: Headphones,
    value: 'Dedicated',
    label: 'Operations Team',
  },
];

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-dark-navy">
      <div className="absolute inset-0 bg-gradient-to-r from-[#061018] via-dark-navy to-[#0C2A5A]" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-primary/15 blur-3xl" />
      <WorldMapOverlay className="opacity-[0.22]" showMarkers />

      <div className="section-container relative py-8 md:py-10">
        <div className="grid grid-cols-2 divide-y divide-white/10 md:grid-cols-4 md:divide-x md:divide-y-0">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="flex items-center gap-3 px-3 py-4 sm:gap-4 sm:px-6 md:flex-col md:items-center md:px-4 md:text-center lg:flex-row lg:items-center lg:text-left"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                <stat.icon size={20} strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-xl font-bold tracking-tight text-white md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.08em] text-white/55 sm:text-xs sm:tracking-[0.12em]">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
