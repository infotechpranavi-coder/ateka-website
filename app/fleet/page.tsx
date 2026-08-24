import PageHeader from '@/components/PageHeader';
import FleetCard from '@/components/cards/FleetCard';
import PageSidebar from '@/components/listing/PageSidebar';
import CTABanner from '@/components/home/CTABanner';
import { fleetProducts } from '@/lib/data';

export default function FleetPage() {
  return (
    <>
      <PageHeader title="Our Fleet" />

      <section className="section-padding bg-surface-muted">
        <div className="section-container">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {fleetProducts.map((product) => (
                  <FleetCard key={product.id} {...product} />
                ))}
              </div>
            </div>

            <PageSidebar />
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Fleet solutions"
        heading="Need a dedicated vehicle or FTL capacity on a fixed lane? We’ll size the right truck."
        buttonLabel="Enquire Now"
        imageSrc="/images/stock/cta-truck.jpg"
      />
    </>
  );
}
