import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';
import { contact } from '@/lib/contact';

const reasons = [
  'Reliable 27-vehicle tonnage fleet',
  'Focus on safe, on-time deliveries',
  'Dedicated operations coordination',
  'Trusted by leading logistics companies',
];

export default function PageSidebar() {
  return (
    <div className="space-y-5">
      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/[0.04]">
        <h3 className="mb-5 text-lg font-semibold text-text-dark">Need Help?</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <Phone className="mt-1 flex-shrink-0 text-primary" size={20} />
            <div>
              <p className="text-sm font-semibold text-gray-600">Call Us</p>
              <div className="space-y-1">
                {contact.phones.map((phone) => (
                  <a
                    key={phone.tel}
                    href={`tel:${phone.tel}`}
                    className="block font-bold text-primary hover:underline"
                  >
                    +91 {phone.display}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="mt-1 flex-shrink-0 text-primary" size={20} />
            <div>
              <p className="text-sm font-semibold text-gray-600">Email Us</p>
              <a
                href={`mailto:${contact.email}`}
                className="break-all font-bold text-primary hover:underline"
              >
                {contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/[0.04]">
        <h4 className="mb-3 text-lg font-semibold text-text-dark">Why Choose Us?</h4>
        <ul className="space-y-2.5 text-sm text-text-body">
          {reasons.map((reason) => (
            <li key={reason} className="flex items-start gap-2.5">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>{reason}</span>
            </li>
          ))}
        </ul>
        <Link href="/contact" className="btn-primary mt-5 flex w-full items-center justify-center">
          Enquire Now
        </Link>
      </div>
    </div>
  );
}
