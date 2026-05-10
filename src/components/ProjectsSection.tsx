import { projects } from "@/lib/data";
import { ExternalLink, ArrowRight, Users, Globe, Clock } from "lucide-react";
import Link from "next/link";

function ProjectCard({
  title,
  description,
  tags,
  category,
  link,
  demo,
  team,
  school,
  inProgress,
  partnerLink,
  label,
}: (typeof projects)[number]) {
  return (
    <div className="group flex flex-col rounded-xl border border-foreground/10 p-5 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-foreground/5">
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <span className="inline-block rounded-full bg-blue-600/10 px-3 py-0.5 text-xs font-medium text-blue-600">
          {category}
        </span>
        {label && (
          <span className="inline-block rounded-full bg-red-500/10 px-2.5 py-0.5 text-xs font-bold text-red-600">
            {label}
          </span>
        )}
        {inProgress && (
          <span className="inline-flex items-center gap-1 rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-semibold text-green-600">
            <Clock size={10} />
            In Progress
          </span>
        )}
        {team && (
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-600">
            <Users size={10} />
            Team
          </span>
        )}
        {school && (
          <span className="inline-block rounded-full bg-purple-500/10 px-2.5 py-0.5 text-xs font-medium text-purple-600">
            School
          </span>
        )}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 flex-1 text-sm text-foreground/70">
        {description}
        {partnerLink && (
          <>
            {" "}
            <a
              href={partnerLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              {partnerLink.name} ↗
            </a>
          </>
        )}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-foreground/5 px-3 py-1 text-xs font-medium text-foreground/70"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-4">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 transition-colors hover:text-blue-500"
          >
            {inProgress ? "Partner Website" : "Source Code"} <ExternalLink size={14} />
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-green-600 transition-colors hover:text-green-500"
          >
            Live Demo <Globe size={14} />
          </a>
        )}
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
      <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
      <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2">
        {featured.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-foreground/5"
        >
          View All Projects
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
