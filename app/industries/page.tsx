import PageHeader from '@/components/PageHeader';
import IndustryCard from '@/components/cards/IndustryCard';
import PageSidebar from '@/components/listing/PageSidebar';
import CTABanner from '@/components/home/CTABanner';
import { serviceCategories } from '@/lib/data';

export default function IndustriesPage() {
  return (
    <>
      <PageHeader title="Industries We Serve" />

      <section className="section-padding bg-surface-muted">
        <div className="section-container">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {serviceCategories.map((category, idx) => (
                  <IndustryCard
                    key={category.id}
                    {...category}
                    number={String(idx + 1).padStart(2, '0')}
                  />
                ))}
              </div>
            </div>

            <PageSidebar />
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Industry solutions"
        heading="Need a transportation plan for your sector? Talk to our operations team."
        buttonLabel="Enquire Now"
      />
    </>
  );
}
