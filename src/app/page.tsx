import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { HeroVideo } from "@/components/HeroVideo";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { ScrollRevealInit } from "@/components/ScrollRevealInit";
import { SiteFooter } from "@/components/SiteFooter";
import { Testimonials } from "@/components/Testimonials";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Javera Studio — Webdesign für Beauty Studios in Wien",
  description: "Individuelle Websites, Branding und Grafik für Kosmetikstudios und Beauty Studios in Wien und Österreich – professionell, persönlich und ohne Bindung.",
  alternates: { canonical: "https://www.javera-studio.at/" },
  openGraph: {
    title: "Javera Studio — Webdesign für Beauty Studios in Wien",
    description: "Individuelle Websites und visuelle Auftritte für Beauty Studios – professionell, persönlich und ohne Bindung.",
    url: "https://www.javera-studio.at/",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const benefits = [
  "Ein professioneller erster Eindruck auf Smartphone und Desktop",
  "Klare Wege zu Anfrage oder Terminbuchung",
  "Mehr Sichtbarkeit durch eine saubere SEO-Grundstruktur",
  "Ein Markenbild, das Website, Social Media und Print verbindet",
];

const services = [
  { number: "01", title: "Webdesign", text: "Individuelle One-Pager und mehrseitige Websites – mobil optimiert, klar aufgebaut und passend zu deinem Studio." },
  { number: "02", title: "Branding & Grafik", text: "Logo, Preislisten, Gutscheine und Printdesign für einen professionellen und wiedererkennbaren Gesamtauftritt." },
  { number: "03", title: "Social Media Design", text: "Editierbare Posts, Stories und Highlight-Cover, die deine Marke auch auf Instagram konsistent weiterführen." },
  { number: "04", title: "Online-Präsenz Analyse", text: "Ein konkreter Blick auf Website, Google-Profil, Sichtbarkeit und Buchungswege – inklusive priorisiertem Optimierungsplan." },
];

const steps = [
  { n: "01", title: "Kennenlernen", text: "Du erzählst mir kurz von deinem Studio, deinem Angebot und deinem Ziel." },
  { n: "02", title: "Vorschau", text: "Du siehst eine erste Designrichtung, bevor du dich für die Zusammenarbeit entscheidest." },
  { n: "03", title: "Umsetzung", text: "Wir stimmen Inhalte und Details ab. Ich übernehme Design, Struktur und Technik." },
  { n: "04", title: "Launch", text: "Deine Website geht live und du behältst die Kontrolle über Domain und Hosting." },
];

const faqs = [
  { q: "Wie lange dauert es, bis meine Website fertig ist?", a: "Ein One-Pager ist meist in 5–7 Tagen umsetzbar, umfangreichere Websites in etwa 10–14 Tagen. Entscheidend ist auch, wie schnell wir Inhalte und Korrekturen abstimmen." },
  { q: "Brauche ich eigene Texte oder Bilder?", a: "Nein. Ich unterstütze dich bei Struktur und Texten. Eigene hochwertige Bilder sind ideal; falls sie noch fehlen, finden wir gemeinsam eine passende Lösung." },
  { q: "Ist meine Website auch für Handys optimiert?", a: "Ja. Jede Website wird für Smartphone, Tablet und Desktop gestaltet und geprüft." },
  { q: "Hilfst du bei Domain, Hosting und Buchungssystem?", a: "Ja. Ich unterstütze dich bei der Einrichtung und Anbindung. Domain und Hosting laufen auf deinen Namen, damit du unabhängig bleibst." },
  { q: "Wird meine Website bei Google gefunden?", a: "Jede Website erhält eine solide technische und inhaltliche SEO-Grundoptimierung. Sichtbarkeit entwickelt sich darüber hinaus abhängig von Wettbewerb, Standort und laufenden Signalen." },
  { q: "Was kostet die erste Vorschau?", a: "Die erste Vorschau ist kostenlos und unverbindlich. Erst wenn du dich für die Zusammenarbeit entscheidest, wird die vereinbarte Anzahlung fällig." },
];

function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F8F5F2] text-primary-foreground">
      <HeroVideo />
      <div className="absolute inset-0 bg-[rgba(28,13,7,0.45)]" aria-hidden />
      <div className="relative z-10 mx-auto max-w-4xl px-6 pb-24 pt-36 text-center md:pb-32 md:pt-44">
        <div className="hero-subtitle mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/80"><span className="h-px w-8 bg-white/50" />Webdesign für Beauty Studios</div>
        <h1 className="hero-headline font-serif text-5xl leading-[1.05] text-white md:text-6xl lg:text-7xl">Die Qualität deines Studios. <em className="text-white/75">Auch online spürbar.</em></h1>
        <p className="hero-subtitle mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85">Individuelle Websites und visuelle Auftritte für Kosmetik, Nails, Lashes, Brows, PMU und Beauty Academies.</p>
        <div className="hero-cta mt-8 flex flex-wrap justify-center gap-3">
          <a href="#schreib-mir" className="rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground transition-all hover:scale-[1.02] hover:bg-mauve hover:shadow-md">Kostenlose Webseiten-Vorschau</a>
          <Link href="/projekte" className="rounded-full border border-white/40 px-7 py-3.5 font-medium text-white transition hover:bg-white hover:text-ink">Projekte ansehen</Link>
        </div>
        <p className="hero-cta mt-6 text-sm text-white/80">Unverbindlich · Antwort in 24h · keine langfristige Bindung</p>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  return (
    <section id="projekte" className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Echte Kundenprojekte</p>
            <h2 className="reveal mt-4 font-serif text-4xl leading-tight text-ink md:text-5xl">Aus Ideen werden Auftritte, die wirklich passen.</h2>
          </div>
          <Link href="/projekte" className="inline-flex w-fit items-center gap-2 border-b border-ink/30 pb-1 text-sm font-medium text-ink transition hover:border-ink">Alle Projekte &amp; Case Studies <span aria-hidden>→</span></Link>
        </div>
        <div className="grid gap-7 md:grid-cols-3">
          {projects.map((project, index) => <div key={project.slug} className={`reveal-card reveal-stagger-${index + 1}`}><ProjectCard project={project} /></div>)}
        </div>
      </div>
    </section>
  );
}

function WhyWebsite() {
  return (
    <section className="bg-cream px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.05fr_1fr] md:gap-20">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Vom Profil zur eigenen Präsenz</p>
          <h2 className="reveal mt-4 font-serif text-4xl leading-tight text-ink md:text-5xl">Instagram zeigt Ausschnitte. Deine Website schafft Vertrauen.</h2>
          <p className="reveal reveal-delay mt-6 text-lg leading-relaxed text-muted-foreground">Interessentinnen wollen Leistungen, Preise, Atmosphäre und Buchungsmöglichkeiten schnell verstehen. Eine klare Website führt sie durch genau diese Entscheidung – und macht dich auch außerhalb von Social Media auffindbar.</p>
        </div>
        <ul className="divide-y divide-border/70 border-y border-border/70">
          {benefits.map((benefit, index) => <li key={benefit} className={`reveal reveal-stagger-${index + 1} flex gap-5 py-5`}><span className="font-serif text-2xl text-mauve/70">0{index + 1}</span><span className="pt-1 text-lg text-ink">{benefit}</span></li>)}
        </ul>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="leistungen" className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Leistungen</p>
          <h2 className="reveal mt-4 font-serif text-4xl leading-tight text-ink md:text-5xl">Ein stimmiger Auftritt statt einzelner Puzzleteile.</h2>
          <p className="reveal reveal-delay mt-5 text-lg leading-relaxed text-muted-foreground">Du buchst nur, was dein Studio wirklich braucht. Gestaltung und Qualität bleiben unabhängig vom Umfang gleich.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((service, index) => (
            <article key={service.title} className={`reveal-card reveal-stagger-${(index % 4) + 1} rounded-3xl border border-border/60 p-7 md:p-9`}>
              <span className="font-serif text-3xl text-mauve/60">{service.number}</span><h3 className="mt-5 font-serif text-3xl text-ink">{service.title}</h3><p className="mt-4 leading-relaxed text-muted-foreground">{service.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/preise" className="rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground transition hover:bg-mauve">Pakete &amp; Preise ansehen</Link>
          <a href="#schreib-mir" className="rounded-full border border-ink/20 px-7 py-3.5 font-medium text-ink transition hover:bg-cream">Kostenlose Vorschau anfragen</a>
        </div>
      </div>
    </section>
  );
}

function Ownership() {
  return (
    <section className="bg-mint-soft px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-20">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Ohne Abhängigkeit</p>
          <h2 className="reveal mt-4 font-serif text-4xl leading-tight text-ink md:text-5xl">Deine Website. Deine Kontrolle.</h2>
          <p className="reveal reveal-delay mt-6 text-lg leading-relaxed text-muted-foreground">Domain und Hosting laufen auf deinen Namen. Es gibt kein verpflichtendes Wartungsabo und keinen Baukasten, an den du dauerhaft gebunden bist. Du kannst Unterstützung dazubuchen – musst aber nicht.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {["Domain auf deinen Namen", "Kein Pflicht-Abo", "Persönliche Ansprechpartnerin", "Unterstützung nach Bedarf"].map((item) => <div key={item} className="rounded-2xl border border-ink/10 bg-background/70 p-5"><span className="mr-3 text-mauve">✓</span>{item}</div>)}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Zusammenarbeit</p>
        <h2 className="reveal mt-4 max-w-2xl font-serif text-4xl leading-tight text-ink md:text-5xl">Klarer Ablauf, persönliche Begleitung.</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => <article key={step.n} className={`reveal-card reveal-stagger-${index + 1} rounded-3xl border border-border/60 p-7`}><span className="font-serif text-4xl text-muted-foreground/60">{step.n}</span><h3 className="mt-6 font-serif text-2xl">{step.title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{step.text}</p></article>)}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-cream px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-20">
        <div className="relative">
          <div className="reveal aspect-[4/5] overflow-hidden rounded-3xl"><Image src="/portrait.png" alt="Jagoda, Webdesignerin und Gründerin von Javera Studio" width={1024} height={1280} className="h-full w-full object-cover" /></div>
          <div aria-hidden className="absolute -bottom-5 -left-5 -z-10 h-full w-full rounded-3xl bg-peach-soft" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Persönlich für dich da</p>
          <h2 className="reveal mt-4 font-serif text-4xl leading-tight text-ink md:text-5xl">Ich bin Jagoda.</h2>
          <div className="reveal reveal-delay mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>Als Webdesignerin und Grafikerin aus Wien spezialisiere ich mich auf Beauty Studios, die ihre Qualität auch online sichtbar machen möchten.</p>
            <p>Mein IT-Hintergrund hilft mir, Ästhetik mit Struktur und Funktion zu verbinden. Du arbeitest direkt mit mir – ohne anonymes Team und ohne komplizierte Technik-Sprache.</p>
          </div>
          <a href="#schreib-mir" className="mt-8 inline-flex rounded-full border border-ink/20 px-7 py-3.5 font-medium transition hover:bg-background">Projekt besprechen</a>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">Häufige Fragen</p>
        <h2 className="reveal mt-4 text-center font-serif text-4xl leading-tight text-ink md:text-5xl">Was du vor dem Start wissen möchtest.</h2>
        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => <details key={faq.q} className={`reveal reveal-stagger-${(index % 6) + 1} group rounded-2xl border border-border/60 bg-background p-6 open:shadow-sm`}><summary className="flex cursor-pointer list-none items-center justify-between gap-6"><span className="font-serif text-lg text-ink md:text-xl">{faq.q}</span><span aria-hidden className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-ink/20 transition-transform group-open:rotate-45">+</span></summary><p className="mt-4 leading-relaxed text-muted-foreground">{faq.a}</p></details>)}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-peach-soft px-6 py-16 text-center md:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Unverbindlich starten</p>
        <h2 className="reveal mt-4 font-serif text-4xl leading-tight text-ink md:text-6xl">Sieh zuerst, wie deine neue Website wirken könnte.</h2>
        <p className="reveal reveal-delay mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">Schick mir eine kurze Anfrage. Ich melde mich persönlich und erstelle eine erste passende Designrichtung für dein Studio.</p>
        <a href="#schreib-mir" className="reveal mt-8 inline-flex rounded-full bg-primary px-8 py-4 font-medium text-primary-foreground transition hover:bg-mauve">Kostenlose Webseiten-Vorschau</a>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="bg-background text-ink">
      <ScrollRevealInit />
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <WhyWebsite />
      <Services />
      <Ownership />
      <Process />
      <Testimonials />
      <About />
      <FAQ />
      <FinalCTA />
      <ContactForm />
      <SiteFooter />
    </main>
  );
}
