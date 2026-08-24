import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import CTABanner from '@/components/home/CTABanner';
import DetailSplitLayout from '@/components/listing/DetailSplitLayout';
import { services } from '@/lib/data';
import { getDetailCtaImage } from '@/lib/cta-images';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServiceDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ id: service.id }));
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { id } = await params;
  const service = services.find((item) => item.id === id);

  if (!service) {
    notFound();
  }

  const relatedServices = services.filter((item) => item.id !== service.id).slice(0, 3);

  return (
    <DetailSplitLayout
      header={
        <PageHeader
          title={service.title}
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: service.title, href: '#' },
          ]}
        />
      }
      left={
        <>
          <div className="relative h-52 overflow-hidden rounded-2xl bg-gray-200 sm:h-72 md:h-[420px]">
            <Image src={service.image} alt={service.title} fill className="object-cover" priority />
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/[0.04] md:p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Service
            </p>
            <h2 className="mb-4 text-2xl font-semibold text-text-dark md:text-3xl">{service.title}</h2>
            <p className="mb-8 text-base leading-relaxed text-text-body md:text-lg">
              {service.description}
            </p>

            <h3 className="mb-4 text-xl font-semibold text-text-dark">What You Get</h3>
            <ul className="space-y-3">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-text-body">
                  <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      }
      right={
        <>
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/[0.04]">
            <h3 className="mb-3 text-lg font-semibold text-text-dark">Need This Service?</h3>
            <p className="mb-5 text-sm text-text-body">
              Talk to our team to plan your road freight movement.
            </p>
            <Link href="/contact" className="btn-primary block text-center">
              Enquire Now
            </Link>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/[0.04]">
            <h3 className="mb-4 text-lg font-semibold text-text-dark">Related Services</h3>
            <div className="space-y-3">
              {relatedServices.map((item) => (
                <Link
                  key={item.id}
                  href={`/services/${item.id}`}
                  className="flex items-center justify-between gap-2 text-text-dark transition-colors hover:text-primary"
                >
                  <span className="font-semibold">{item.title}</span>
                  <ArrowRight size={16} />
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-semibold text-primary transition-opacity hover:opacity-70"
          >
            <ArrowLeft size={18} />
            Back to Services
          </Link>
        </>
      }
      footer={
        <CTABanner
          eyebrow="Service solutions"
          heading="Need this service for your cargo? Talk to our operations team today."
          buttonLabel="Enquire Now"
          imageSrc={getDetailCtaImage(service.id, 2)}
        />
      }
    />
  );
}
