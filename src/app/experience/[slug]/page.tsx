import type { Metadata } from "next";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BackgroundEffects } from "@/components/portfolio/background-effects";
import { GalleryCollage } from "@/components/portfolio/gallery-collage";
import { StackMarquee } from "@/components/portfolio/stack-marquee";
import { experience } from "@/data/portfolio";

type ExperiencePageProps = {
  params: Promise<{ slug: string }>;
};

function getExperienceBySlug(slug: string) {
  return experience.find((item) => item.slug === slug);
}

export async function generateStaticParams() {
  return experience.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata(props: ExperiencePageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const item = getExperienceBySlug(slug);
  if (!item) return { title: "Experience Not Found" };
  return {
    title: `${item.company} | ${item.role} | Cao Thanh Binh`,
    description: item.highlight,
  };
}

export default async function ExperienceDetailPage(props: ExperiencePageProps) {
  const { slug } = await props.params;
  const item = getExperienceBySlug(slug);
  if (!item) notFound();

  const gallery = item.gallery ?? [];

  return (
    <BackgroundEffects>
      <main className="relative z-10 mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 pb-24 pt-10 sm:px-6 md:px-10">
        <Link
          href="/#experience"
          className="inline-flex w-fit items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to experience
        </Link>

        {gallery.length > 0 && <GalleryCollage gallery={gallery} company={item.company} layout={item.galleryLayout} />}

        {/* Card 1: identity + description */}
        <article className="glass-card rounded-3xl p-6 md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex min-w-0 items-center gap-3">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                <Image src={item.logo} alt={`${item.company} logo`} fill sizes="48px" className="object-cover" />
              </div>
              <div className="min-w-0">
                <h1 className="truncate text-2xl font-bold text-slate-900 md:text-3xl">{item.company}</h1>
                <p className="text-sm font-medium text-blue-600 md:text-base">{item.role}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-blue-600">
                {item.period}
              </span>
              {item.projectUrl && (
                <a
                  href={item.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  <ExternalLink className="h-3 w-3" />
                  Visit project
                </a>
              )}
            </div>
          </div>

          <p className="mt-5 text-base leading-relaxed text-slate-600">{item.description}</p>
        </article>

        {/* Card 2: key contributions */}
        <article className="glass-card rounded-3xl p-6 md:p-8">
          <h2 className="text-base font-bold text-slate-900">Key contributions</h2>
          <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-slate-600">
            {item.responsibilities.map((responsibility) => (
              <li key={responsibility} className="flex gap-2">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </article>

        {/* Tech stack — full-width scrolling marquee */}
        <div>
          <p className="mb-1 px-1 text-xs font-bold uppercase tracking-[0.14em] text-slate-400">Tech stack</p>
          <StackMarquee tags={item.stack} />
        </div>
      </main>
    </BackgroundEffects>
  );
}
