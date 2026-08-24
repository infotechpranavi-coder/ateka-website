import { esteemedClients } from '@/lib/data';

export default function ClientsStrip() {
  return (
    <section className="border-y border-black/[0.04] bg-white py-10 md:py-12">
      <div className="section-container">
        <p className="section-label mb-3 justify-center">Esteemed Clients</p>
        <h2 className="mb-8 text-center text-2xl font-semibold tracking-tight text-text-dark md:text-3xl">
          Trusted by leading organisations
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {esteemedClients.map((client) => (
            <div
              key={client}
              className="rounded-xl border border-black/[0.06] bg-surface-muted px-4 py-4 text-center text-sm font-semibold text-text-dark"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
