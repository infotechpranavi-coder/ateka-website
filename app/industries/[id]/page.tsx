import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import CTABanner from '@/components/home/CTABanner';
import DetailSplitLayout from '@/components/listing/DetailSplitLayout';
import { serviceCategories } from '@/lib/data';
import { getDetailCtaImage } from '@/lib/cta-images';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

interface IndustryDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  return serviceCategories.map((category) => ({ id: category.id }));
}

export default async function IndustryDetailPage({ params }: IndustryDetailPageProps) {
  const { id } = await params;
  const industry = serviceCategories.find((item) => item.id === id);

  if (!industry) {
    notFound();
  }

  const related = serviceCategories.filter((item) => item.id !== industry.id).slice(0, 3);

  return (
    <DetailSplitLayout
      header={
        <PageHeader
          title={industry.title}
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Industries', href: '/industries' },
            { label: industry.title, href: '#' },
          ]}
        />
      }
      left={
        <>
          <div className="relative h-52 overflow-hidden rounded-2xl bg-gray-200 sm:h-72 md:h-[420px]">
            <Image src={industry.image} alt={industry.title} fill className="object-cover" priority />
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/[0.04] md:p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Industry
            </p>
            <h2 className="mb-4 text-2xl font-semibold text-text-dark md:text-3xl">{industry.title}</h2>
            <p className="mb-8 text-base leading-relaxed text-text-body md:text-lg">
              {industry.overview}
            </p>

            <h3 className="mb-4 text-xl font-semibold text-text-dark">What You Get</h3>
            <ul className="space-y-3">
              {industry.features.map((feature) => (
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
            <h3 className="mb-3 text-lg font-semibold text-text-dark">Need This Solution?</h3>
            <p className="mb-5 text-sm text-text-body">
              Talk to our team to plan road freight movement for this industry.
            </p>
            <Link href="/contact" className="btn-primary block text-center">
              Enquire Now
            </Link>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/[0.04]">
            <h3 className="mb-4 text-lg font-semibold text-text-dark">Related Industries</h3>
            <div className="space-y-3">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={`/industries/${item.id}`}
                  className="flex items-center justify-between gap-2 text-text-dark transition-colors hover:text-primary"
                >
                  <span className="font-semibold">{item.title}</span>
                  <ArrowRight size={16} />
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/industries"
            className="inline-flex items-center gap-2 font-semibold text-primary transition-opacity hover:opacity-70"
          >
            <ArrowLeft size={18} />
            Back to Industries
          </Link>
        </>
      }
      footer={
        <CTABanner
          eyebrow="Industry solutions"
          heading="Ready to move cargo for this sector? Enquire with our team."
          buttonLabel="Enquire Now"
          imageSrc={getDetailCtaImage(industry.id, 4)}
        />
      }
    />
  );
}
