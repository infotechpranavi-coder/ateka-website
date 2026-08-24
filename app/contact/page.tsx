import PageHeader from '@/components/PageHeader';
import ContactForm from '@/components/forms/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { contact } from '@/lib/contact';

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact Us" />

      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-text-dark md:mb-8 md:text-3xl">Get in Touch</h2>
              <div className="space-y-6">
                {/* Contact person */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="mb-1 font-bold text-text-dark">Contact Person</p>
                    <p className="leading-relaxed text-text-body">{contact.person}</p>
                    <p className="mt-1 text-sm text-text-body">{contact.address.full}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="mb-1 font-bold text-text-dark">Phone</p>
                    <div className="space-y-1">
                      {contact.phones.map((phone) => (
                        <a
                          key={phone.tel}
                          href={`tel:${phone.tel}`}
                          className="block text-text-body transition-colors hover:text-primary"
                        >
                          +91 {phone.display}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Email */}
                <a href={`mailto:${contact.email}`} className="group flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-opacity group-hover:opacity-80">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="mb-1 font-bold text-text-dark">Email</p>
                    <p className="text-text-body transition-colors group-hover:text-primary">
                      {contact.email}
                    </p>
                  </div>
                </a>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="mb-1 font-bold text-text-dark">Business Hours</p>
                    <p className="text-text-body">{contact.hours}</p>
                  </div>
                </div>
              </div>

              {/* Quick Tips */}
              <div className="mt-12 bg-light-gray rounded-lg p-6">
                <h3 className="font-bold text-text-dark mb-4">Quick Tips</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Provide detailed shipment information for accurate quotes</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Mention your preferred pickup and delivery dates</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Include any special handling requirements</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl bg-white p-5 shadow-[0_12px_36px_rgba(26,26,46,0.08)] sm:p-8 md:p-10">
                <h2 className="mb-2 text-2xl font-bold text-text-dark md:text-3xl">Send us a Message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {contact.mapEmbedUrl ? (
      <section className="bg-light-gray px-4 py-10 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-3 text-center text-2xl font-bold text-text-dark md:text-3xl">Our Location</h2>
          <p className="mb-3 text-center text-text-body">{contact.address.short}</p>
          <p className="mb-6 text-center">
            <a
              href={contact.mapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              <MapPin size={15} />
              Open in Google Maps
            </a>
          </p>
          <div className="relative h-72 w-full overflow-hidden rounded-2xl bg-gray-200 shadow-sm ring-1 ring-black/5 md:h-[28rem]">
            <iframe
              src={contact.mapEmbedUrl}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Ateka Logistics"
            />
          </div>
        </div>
      </section>
      ) : null}
    </>
  );
}
