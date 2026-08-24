'use client';

import { motion } from 'framer-motion';
import { Globe, Truck, ShieldCheck, Handshake } from 'lucide-react';

const highlights = [
  {
    icon: Globe,
    title: 'Strong, Scalable Network',
    text: 'A dependable pan-India road network built for logistics companies, express operators, and corporate shippers.',
  },
  {
    icon: Truck,
    title: 'Reliable Fleet Availability',
    text: '27 well-maintained 20 ft and 32 ft tonnage trucks with consistent vehicle availability.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe, On-Time Deliveries',
    text: 'Trained professional drivers and operations focused on safety, reliability, and timely handover.',
  },
  {
    icon: Handshake,
    title: 'Long-Term Partnerships',
    text: 'Transparent, customer-centric service trusted by leading logistics and e-commerce companies.',
  },
];

export default function FeatureCards() {
  return (
    <section className="relative -mt-4 bg-light-gray pt-8 pb-12 sm:-mt-10 sm:pt-12 sm:pb-16 md:pb-20">
      <div className="section-container">
        <div className="mx-auto mb-8 max-w-2xl text-center md:mb-10">
          <p className="section-label mb-3 justify-center">Why Choose Ateka</p>
          <h2 className="text-2xl font-semibold tracking-tight text-text-dark md:text-4xl md:leading-tight">
            Built for trust, reliability, and value
          </h2>
          <p className="mt-3 text-base leading-relaxed text-text-body">
            Flexible transportation solutions, consistent capacity, and a customer-centric
            approach focused on long-term partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {highlights.map((item, idx) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl bg-black p-5 text-white shadow-[0_14px_32px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.32)] sm:p-6"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/10" />
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white">
                <item.icon size={20} strokeWidth={1.75} />
              </span>
              <h3 className="text-[15px] font-semibold text-white md:text-base">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/90">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
