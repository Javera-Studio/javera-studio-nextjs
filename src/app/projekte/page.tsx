import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { SiteFooter } from "@/components/SiteFooter";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Webdesign-Projekte für Beauty Studios",
  description:
    "Echte Webdesign-Projekte und ausgewählte Designkonzepte von Javera Studio für Kosmetikstudios, Nailartists und Beauty-Unternehmen.",
  alternates: { canonical: "https://www.javera-studio.at/projekte" },
};

const concepts = [
  { title: "PURE SKIN Studio", category: "Kosmetikstudio", image: "/demo-pure-skin.png", url: "https://demo-pure-skin-studio-launch.vercel.app" },
  { title: "Nail Atelier", category: "Nagelstudio", image: "/demo-nail-atelier.png", url: "https://demo-nailatelier.vercel.app" },
  { title: "Ivory Bridal Studio", category: "Bridal Stylistin", image: "/demo-ivorystudio.png", url: "https://demo-ivorybridalstudio.vercel.app" },
  { title: "LUMEA Laser Clinic", category: "Beauty Klinik", image: "/demo-lumea.png", url: "https://demo-lumea-laser-clinic.vercel.app" },
  { title: "Lumis Klinik", category: "Beauty Klinik", image: "/demo-lumis-klinik.png", url: "https://demo-lumis-klinik.vercel.app" },
  { title: "Salon Noir", category: "Friseursalon", image: "/demo-salon-noir.png", url: "https://demo-noir-vision.vercel.app" },
];

export default function ProjectsPage() {
  return (
    <main className="bg-background text-ink">
      <Navbar />
      <section className="border-b border-border/60 bg-cream px-6 pb-16 pt-40 md:pb-24 md:pt-48">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Projekte &amp; Case Studies</p>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[1.05] md:text-7xl">Websites, die zur Qualität des Studios passen.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Echte Kundenprojekte mit Ausgangslage, Designentscheidungen und umgesetzten Lösungen – transparent und ohne erfundene Erfolgszahlen.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 md:mb-14">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Echte Kundenprojekte</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Von der Ausgangslage zur passenden Lösung</h2>
          </div>
          <div className="grid gap-7 md:grid-cols-3">
            {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-cream px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl md:mb-14">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Weitere Designrichtungen</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Ausgewählte Showcase-Konzepte</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Diese Entwürfe zeigen unterschiedliche Stilrichtungen. Sie sind bewusst als Konzepte gekennzeichnet und keine Kundenreferenzen.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {concepts.map((concept) => (
              <article key={concept.title} className="rounded-3xl border border-border/60 bg-background p-5">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-peach-soft">
                  <span className="absolute right-3 top-3 z-10 rounded-full border border-border/50 bg-background/90 px-3 py-1 text-[10px] uppercase tracking-wider text-ink">Showcase</span>
                  <Image src={concept.image} alt={`${concept.title} Designkonzept`} width={600} height={375} className="h-full w-full object-contain" />
                </div>
                <p className="mt-5 text-xs uppercase tracking-wider text-muted-foreground">{concept.category}</p>
                <h3 className="mt-2 font-serif text-2xl">{concept.title}</h3>
                <a href={concept.url} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex border-b border-ink/30 pb-1 text-sm font-medium hover:border-ink">Demo ansehen →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 text-center md:py-24">
        <div className="mx-auto max-w-3xl rounded-3xl bg-mint-soft px-6 py-12 md:px-12">
          <h2 className="font-serif text-4xl md:text-5xl">Wie könnte dein Studio online wirken?</h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">Ich zeige dir mit einer unverbindlichen Vorschau, welches Potenzial in deinem Auftritt steckt.</p>
          <Link href="/#schreib-mir" className="mt-8 inline-flex rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground transition hover:bg-mauve">Kostenlose Vorschau anfragen</Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
