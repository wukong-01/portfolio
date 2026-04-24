import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BackgroundEffects } from "@/components/portfolio/background-effects";
import { TagList } from "@/components/portfolio/tag-list";
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

  return (
    <BackgroundEffects>
      <main className="relative z-10 mx-auto flex w-full max-w-4xl flex-col gap-8 px-4 pb-24 pt-10 sm:px-6 md:px-10">
        <Link
          href="/#experience"
          className="inline-flex w-fit items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to experience
        </Link>

        <article className="glass-card rounded-3xl p-6 md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                <Image src={item.logo} alt={`${item.company} logo`} fill sizes="48px" className="object-cover" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">{item.company}</h1>
                <p className="text-sm font-medium text-blue-600 md:text-base">{item.role}</p>
              </div>
            </div>
            <p className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-blue-600">
              {item.period}
            </p>
          </div>

          <p className="mt-6 text-base leading-relaxed text-slate-600">{item.description}</p>

          <div className="mt-6 space-y-3">
            <h2 className="text-base font-bold text-slate-900">Key contributions</h2>
            <ul className="space-y-2 text-sm leading-relaxed text-slate-600">
              {item.responsibilities.map((responsibility) => (
                <li key={responsibility} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="text-base font-bold text-slate-900">Tech stack</h2>
            <TagList tags={item.stack} />
          </div>
        </article>
      </main>
    </BackgroundEffects>
  );
}
