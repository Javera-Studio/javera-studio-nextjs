import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import { getProject, projects } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};

  return {
    title: `${project.title} – Webdesign Case Study`,
    description: `${project.intro} Case Study von Javera Studio für ${project.category} in ${project.location}.`,
    alternates: { canonical: `https://www.javera-studio.at/projekte/${project.slug}` },
    openGraph: {
      title: `${project.title} – Webdesign Case Study`,
      description: project.shortResult,
      url: `https://www.javera-studio.at/projekte/${project.slug}`,
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="bg-background text-ink">
      <Navbar />
      <article>
        <header className="bg-cream px-6 pb-12 pt-40 md:pb-20 md:pt-48">
          <div className="mx-auto max-w-6xl">
            <Link href="/projekte" className="text-sm text-muted-foreground transition hover:text-ink">← Alle Projekte</Link>
            <p className="mt-10 text-xs uppercase tracking-[0.22em] text-muted-foreground">{project.category} · {project.location}</p>
            <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[1.05] md:text-7xl">{project.title}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">{project.intro}</p>
          </div>
        </header>

        <section className="px-6 py-12 md:py-20">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-peach-soft p-3 md:p-10">
            <Image src={project.image} alt={project.imageAlt} width={1600} height={1000} priority className="h-auto w-full object-contain" />
          </div>
        </section>

        <section className="px-6 py-12 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.4fr] md:gap-20">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Ausgangslage &amp; Ziel</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">Nicht größer als nötig. Genau passend.</h2>
            </div>
            <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
              <div><h3 className="font-serif text-2xl text-ink">Die Ausgangslage</h3><p className="mt-3">{project.challenge}</p></div>
              <div><h3 className="font-serif text-2xl text-ink">Das Ziel</h3><p className="mt-3">{project.goal}</p></div>
              <div><h3 className="font-serif text-2xl text-ink">Die Lösung</h3><p className="mt-3">{project.solution}</p></div>
            </div>
          </div>
        </section>

        <section className="bg-mint-soft px-6 py-14 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 md:grid-cols-2 md:gap-20">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Umgesetzt</p>
                <h2 className="mt-4 font-serif text-4xl md:text-5xl">Leistungen im Projekt</h2>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {project.services.map((service) => (
                  <li key={service} className="flex gap-3 border-b border-ink/10 py-3"><span aria-hidden>✓</span><span>{service}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Designentscheidungen</p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl md:text-5xl">Jede Entscheidung erfüllt eine Aufgabe.</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {project.decisions.map((decision, index) => (
                <div key={decision.title} className="rounded-3xl border border-border/60 p-7">
                  <span className="font-serif text-3xl text-mauve/70">0{index + 1}</span>
                  <h3 className="mt-5 font-serif text-2xl">{decision.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{decision.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-cream px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-20">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Das Ergebnis</p>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">Ein Auftritt mit einer klaren Aufgabe.</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{project.result}</p>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground transition hover:bg-mauve">Live-Website ansehen ↗</a>
            </div>
            <blockquote className="rounded-3xl bg-background p-8 shadow-sm md:p-10">
              <p className="text-sm text-mauve">★★★★★</p>
              <p className="mt-6 font-serif text-2xl leading-relaxed">„{project.testimonial.quote}“</p>
              <footer className="mt-6 text-sm text-muted-foreground">{project.testimonial.name} · {project.title}</footer>
            </blockquote>
          </div>
        </section>
      </article>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 border-b border-t border-border/60 py-10 sm:flex-row sm:items-center">
          <div><p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Nächstes Projekt</p><p className="mt-2 font-serif text-3xl">{nextProject.title}</p></div>
          <Link href={`/projekte/${nextProject.slug}`} className="inline-flex rounded-full border border-ink/20 px-6 py-3 text-sm font-medium transition hover:bg-cream">Case Study ansehen →</Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
