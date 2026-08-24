import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import CTABanner from '@/components/home/CTABanner';
import { projects } from '@/lib/data';
import { ArrowLeft, ArrowRight, CalendarDays, MapPin, ShieldCheck } from 'lucide-react';

interface ProjectDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects
    .filter((item) => item.category === project.category && item.id !== project.id)
    .slice(0, 3);

  return (
    <>
      <PageHeader
        title={project.title}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Projects', href: '/projects' },
          { label: project.title, href: '#' },
        ]}
      />

      <section className="px-4 py-10 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
          <div className="space-y-8 lg:col-span-2">
            <div className="relative h-52 overflow-hidden rounded-xl bg-gray-300 sm:h-80 md:h-[420px]">
              <Image src={project.image} alt={project.title} fill className="object-cover" priority />
            </div>

            <div className="rounded-xl bg-white p-5 shadow-md sm:p-8">
              <span className="mb-4 inline-flex rounded-full bg-primary px-4 py-1 text-sm font-semibold text-white">
                {project.category}
              </span>
              <h2 className="mb-4 text-2xl font-bold text-text-dark md:text-4xl">{project.title}</h2>
              <p className="mb-8 text-base leading-relaxed text-text-body md:text-lg">{project.description}</p>

              <h3 className="text-xl font-bold text-text-dark mb-4">Project Highlights</h3>
              <ul className="space-y-3 text-text-body">
                <li className="flex items-start gap-3">
                  <CalendarDays size={18} className="text-primary mt-1 flex-shrink-0" />
                  <span>Executed with strict delivery timelines and professional handling.</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                  <span>Managed across key regional routes with on-ground coordination.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck size={18} className="text-primary mt-1 flex-shrink-0" />
                  <span>Monitored for cargo safety and compliance from pickup to handover.</span>
                </li>
              </ul>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="bg-light-gray rounded-xl p-6">
              <h3 className="text-xl font-bold text-text-dark mb-4">Start a Similar Project</h3>
              <p className="text-text-body text-sm mb-5">
                Discuss your logistics requirements and get a tailored execution plan.
              </p>
              <Link href="/contact" className="btn-primary block text-center">
                Talk to Our Team
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-text-dark mb-4">Related Projects</h3>
              <div className="space-y-4">
                {relatedProjects.length > 0 ? (
                  relatedProjects.map((item) => (
                    <Link
                      key={item.id}
                      href={`/projects/${item.id}`}
                      className="flex items-center justify-between gap-2 text-text-dark hover:text-primary transition-colors"
                    >
                      <span className="font-semibold">{item.title}</span>
                      <ArrowRight size={16} />
                    </Link>
                  ))
                ) : (
                  <p className="text-sm text-text-body">No related projects in this category yet.</p>
                )}
              </div>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-primary font-bold hover:opacity-70 transition-opacity"
            >
              <ArrowLeft size={18} />
              Back to Projects
            </Link>
          </aside>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
