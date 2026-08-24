import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import CTABanner from '@/components/home/CTABanner';
import DetailSplitLayout from '@/components/listing/DetailSplitLayout';
import { fleetProducts } from '@/lib/data';
import { getDetailCtaImage } from '@/lib/cta-images';
import { ArrowLeft, ArrowRight, Box, CheckCircle2, Maximize2, Weight } from 'lucide-react';

interface FleetDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

const specMeta = [
  { key: 'capacity' as const, label: 'Capacity', Icon: Box },
  { key: 'dimensions' as const, label: 'Dimensions', Icon: Maximize2 },
  { key: 'temperature' as const, label: 'Body Type', Icon: Weight },
];

export function generateStaticParams() {
  return fleetProducts.map((product) => ({ id: product.id }));
}

export default async function FleetDetailPage({ params }: FleetDetailPageProps) {
  const { id } = await params;
  const product = fleetProducts.find((item) => item.id === id);

  if (!product) {
    notFound();
  }

  const related = fleetProducts.filter((item) => item.id !== product.id).slice(0, 3);

  return (
    <DetailSplitLayout
      header={
        <PageHeader
          title={product.name}
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Fleet', href: '/fleet' },
            { label: product.name, href: '#' },
          ]}
        />
      }
      left={
        <>
          <div className="relative h-52 overflow-hidden rounded-2xl bg-gray-200 sm:h-72 md:h-[420px]">
            <Image src={product.image} alt={product.name} fill className="object-cover" priority />
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/[0.04] md:p-8">
            <span className="mb-3 inline-flex rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white">
              {product.category}
            </span>
            <h2 className="mb-4 mt-3 text-2xl font-semibold text-text-dark md:text-3xl">
              {product.name}
            </h2>
            <p className="mb-8 text-base leading-relaxed text-text-body md:text-lg">
              {product.description}
            </p>

            <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {specMeta.map(({ key, label, Icon }) => (
                <div key={key} className="rounded-xl bg-surface-muted p-4">
                  <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-white text-primary shadow-sm">
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-text-light">
                    {label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-text-dark">{product.specs[key]}</p>
                </div>
              ))}
            </div>

            <h3 className="mb-4 text-xl font-semibold text-text-dark">What You Get</h3>
            <ul className="space-y-3">
              {product.features.map((feature) => (
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
            <h3 className="mb-3 text-lg font-semibold text-text-dark">Need This Unit?</h3>
            <p className="mb-5 text-sm text-text-body">
              Talk to our fleet team to book this vehicle or size a dedicated unit for your lane.
            </p>
            <Link href="/contact" className="btn-primary block text-center">
              Enquire Now
            </Link>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/[0.04]">
            <h3 className="mb-4 text-lg font-semibold text-text-dark">Related Fleet</h3>
            <div className="space-y-3">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={`/fleet/${item.id}`}
                  className="flex items-center justify-between gap-2 text-text-dark transition-colors hover:text-primary"
                >
                  <span className="font-semibold">{item.name}</span>
                  <ArrowRight size={16} />
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/fleet"
            className="inline-flex items-center gap-2 font-semibold text-primary transition-opacity hover:opacity-70"
          >
            <ArrowLeft size={18} />
            Back to Fleet
          </Link>
        </>
      }
      footer={
        <CTABanner
          eyebrow="Fleet solutions"
          heading="Ready to book this vehicle? Enquire with our operations team."
          buttonLabel="Enquire Now"
          imageSrc={getDetailCtaImage(product.id, 0)}
        />
      }
    />
  );
}
