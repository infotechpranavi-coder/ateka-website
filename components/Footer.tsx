import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';
import WorldMapOverlay from '@/components/WorldMapOverlay';
import { contact } from '@/lib/contact';
import BrandMark from '@/components/BrandMark';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Fleet', href: '/fleet' },
  { label: 'Contact', href: '/contact' },
];

const serviceLinks = [
  { label: 'FTL Transportation', href: '/services/1' },
  { label: 'Dedicated Vehicles', href: '/services/3' },
  { label: 'E-commerce Support', href: '/services/4' },
  { label: 'Express Deliveries', href: '/services/6' },
  { label: 'Fleet Solutions', href: '/fleet' },
];

const socials = [
  { Icon: Linkedin, label: 'LinkedIn' },
  { Icon: Facebook, label: 'Facebook' },
  { Icon: Twitter, label: 'Twitter' },
];

export default function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden bg-dark-navy text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-[#061018] via-dark-navy to-[#0C2A5A]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl" />
      <WorldMapOverlay className="opacity-[0.22]" showMarkers centered />

      <div className="section-container relative py-10 pb-24 md:py-12 md:pb-12">
        <div className="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <BrandMark size="footer" variant="light" />
            </div>
            <p className="mb-5 max-w-xs text-sm leading-relaxed text-white/65">
              Road freight transportation and logistics solutions across India.
            </p>
            <div className="flex gap-2.5">
              {socials.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white transition hover:border-primary hover:bg-primary"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              Explore
            </h4>
            <p className="mb-4 text-base font-semibold text-white">Quick Links</p>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              What we do
            </h4>
            <p className="mb-4 text-base font-semibold text-white">Services</p>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-sm text-white/65 transition hover:text-white"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              Reach us
            </h4>
            <p className="mb-4 text-base font-semibold text-white">Contact</p>
            <div className="space-y-3.5">
              <div className="flex gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                <p className="text-sm leading-relaxed text-white/65">{contact.address.short}</p>
              </div>
              <div className="flex gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-primary" />
                <div className="space-y-0.5">
                  {contact.phones.map((phone) => (
                    <a
                      key={phone.tel}
                      href={`tel:${phone.tel}`}
                      className="block text-sm text-white/65 transition hover:text-white"
                    >
                      +91 {phone.display}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-primary" />
                <a
                  href={`mailto:${contact.email}`}
                  className="break-all text-sm text-white/65 transition hover:text-white"
                >
                  {contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-5 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/45">
            &copy; {new Date().getFullYear()} Ateka Logistics. All rights reserved.
          </p>
          <p className="text-xs text-white/40">Pan-India · Road Freight · FTL & Dedicated Fleet</p>
        </div>
      </div>
    </footer>
  );
}
