import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-background transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
      <Link href={`/projekte/${project.slug}`} className="block overflow-hidden bg-peach-soft" aria-label={`Case Study ${project.title} ansehen`}>
        <div className="aspect-[16/11] overflow-hidden">
          <Image
            src={project.image}
            alt={project.imageAlt}
            width={1200}
            height={825}
            className="h-full w-full object-contain p-3 transition duration-700 group-hover:scale-[1.025]"
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          {project.category} · {project.location}
        </p>
        <h3 className="mt-3 font-serif text-2xl text-ink md:text-3xl">{project.title}</h3>
        <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{project.shortResult}</p>
        <Link href={`/projekte/${project.slug}`} className="mt-6 inline-flex w-fit items-center gap-2 border-b border-ink/30 pb-1 text-sm font-medium text-ink transition hover:border-ink">
          Projekt ansehen <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}
