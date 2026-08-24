'use client';

import { motion } from 'framer-motion';
import { Package, Truck, BarChart3, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Package,
    number: '01',
    title: 'Order Placement',
    description: 'Share shipment details, cargo type, and delivery timeline.',
  },
  {
    icon: Truck,
    number: '02',
    title: 'Pickup & Loading',
    description: 'Our team collects and loads cargo with professional handling and safety checks.',
  },
  {
    icon: BarChart3,
    number: '03',
    title: 'Live Tracking',
    description: 'Track vehicle location in real time throughout transit.',
  },
  {
    icon: CheckCircle,
    number: '04',
    title: 'Safe Delivery',
    description: 'Goods delivered on schedule, within spec, with full documentation.',
  },
];

export default function WorkProcess() {
  return (
    <section className="bg-light-gray py-10 md:py-14">
      <div className="section-container">
        <div className="mx-auto mb-8 max-w-2xl text-center md:mb-10">
          <p className="section-label mb-2 justify-center">Work Process</p>
          <h2 className="text-2xl font-semibold tracking-tight text-text-dark md:text-3xl lg:text-4xl">
            How We Deliver Excellence
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-text-body md:text-base">
            A four-step process built for reliability, transparency, and on-time handover.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          <div className="pointer-events-none absolute left-[10%] right-[10%] top-10 hidden h-px bg-primary/20 lg:block" />

          {steps.map((step, idx) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl bg-white p-5 ring-1 ring-black/[0.04] transition duration-300 hover:-translate-y-1.5 hover:bg-primary hover:shadow-[0_18px_40px_rgba(26,86,196,0.28)] hover:ring-primary"
            >
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 transition group-hover:bg-white/10" />

              <div className="relative mb-4 flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white transition duration-300 group-hover:bg-white group-hover:text-primary">
                  <step.icon size={22} strokeWidth={1.75} />
                </span>
                <span className="text-sm font-bold tracking-[0.16em] text-primary/70 transition group-hover:text-white/80">
                  {step.number}
                </span>
              </div>
              <h3 className="relative mb-1.5 text-base font-semibold text-text-dark transition group-hover:text-white">
                {step.title}
              </h3>
              <p className="relative text-sm leading-relaxed text-text-body transition group-hover:text-white/85">
                {step.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
