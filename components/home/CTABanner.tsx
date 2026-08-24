'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { contact } from '@/lib/contact';

interface CTABannerProps {
  heading?: string;
  imageSrc?: string;
  buttonLabel?: string;
  eyebrow?: string;
}

export default function CTABanner({
  heading = 'Need reliable road freight? Talk to Ateka Logistics and move your cargo with confidence.',
  imageSrc = '/images/stock/cta-warehouse.jpg',
  buttonLabel = 'Enquire Now',
  eyebrow = 'Get in touch',
}: CTABannerProps) {
  return (
    <section className="bg-white py-6 md:py-8">
      <div className="section-container">
        <div className="relative overflow-hidden rounded-2xl bg-dark-navy shadow-[0_12px_36px_rgba(26,26,46,0.18)]">
          <Image
            src={imageSrc}
            alt="Road freight logistics"
            fill
            className="object-cover object-center md:object-right"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, #0A1628 0%, rgba(10,22,40,0.94) 48%, rgba(10,22,40,0.5) 100%)',
            }}
          />

          <div
            className="relative flex flex-col items-start justify-between gap-5 px-5 py-6 sm:px-8 sm:py-8 md:flex-row md:items-center md:gap-10 lg:px-10 lg:py-9"
          >
            <div className="max-w-xl">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                {eyebrow}
              </p>
              <h2 className="text-base font-semibold leading-snug text-white sm:text-xl md:text-[1.4rem]">
                {heading}
              </h2>
            </div>

            <div className="flex w-full shrink-0 flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-5">
              <a href={`tel:${contact.primaryPhone.tel}`} className="text-sm text-white/85">
                Call Us:{' '}
                <span className="font-semibold text-primary">+91 {contact.primaryPhone.display}</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[var(--primary-dark)]"
              >
                <Phone size={14} />
                {buttonLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
