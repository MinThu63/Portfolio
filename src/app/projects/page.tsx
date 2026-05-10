"use client";

import { useState } from "react";
import { projects, projectCategories, type ProjectCategory } from "@/lib/data";
import { ArrowLeft, ExternalLink, Users, Globe, Lightbulb, Route } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<
    "All" | ProjectCategory
  >("All");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
      >
        <ArrowLeft size={16} />
        Back to Home
      </Link>

      <h1 className="mt-8 text-3xl font-bold tracking-tight">All Projects</h1>
      <p className="mt-2 text-foreground/60">
        A complete collection of my projects. Click any card to see the development process and reflections.
      </p>

      {/* Category filter tabs */}
      <div className="mt-8 flex flex-wrap gap-2">
        {["All", ...projectCategories].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat as "All" | ProjectCategory)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeCategory === cat
                ? "bg-foreground text-background"
                : "border border-foreground/20 text-foreground/70 hover:bg-foreground/5"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => {
          const isExpanded = expandedProject === project.title;
          return (
            <div
              key={project.title}
              className={`group flex flex-col rounded-xl border border-foreground/10 p-5 transition-all hover:shadow-lg hover:shadow-foreground/5 ${
                isExpanded ? "sm:col-span-2 lg:col-span-3" : "hover:-translate-y-1"
              }`}
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="inline-block rounded-full bg-blue-600/10 px-3 py-0.5 text-xs font-medium text-blue-600">
                  {project.category}
                </span>
                {project.inProgress && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-semibold text-green-600">
                    In Progress
                  </span>
                )}
                {project.team && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-600">
                    <Users size={10} />
                    Team
                  </span>
                )}
                {project.school && (
                  <span className="inline-block rounded-full bg-purple-500/10 px-2.5 py-0.5 text-xs font-medium text-purple-600">
                    School
                  </span>
                )}
              </div>
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">
                {project.description}
              </p>

              {/* Team role */}
              {project.team && project.teamRole && isExpanded && (
                <div className="mt-4 rounded-lg bg-amber-500/5 border border-amber-500/10 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">
                    My Role
                  </p>
                  <p className="mt-1 text-sm text-foreground/70">
                    {project.teamRole}
                  </p>
                </div>
              )}

              {/* Process & What I Learned (expanded) */}
              {isExpanded && (
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {project.process && (
                    <div className="rounded-lg border border-foreground/10 p-4">
                      <div className="flex items-center gap-2 text-sm font-semibold">
                        <Route size={14} className="text-blue-600" />
                        Process & Iteration
                      </div>
                      <p className="mt-2 text-sm text-foreground/60 leading-relaxed">
                        {project.process}
                      </p>
                    </div>
                  )}
                  {project.whatILearned && (
                    <div className="rounded-lg border border-foreground/10 p-4">
                      <div className="flex items-center gap-2 text-sm font-semibold">
                        <Lightbulb size={14} className="text-yellow-500" />
                        What I Learned
                      </div>
                      <p className="mt-2 text-sm text-foreground/60 leading-relaxed">
                        {project.whatILearned}
                      </p>
                    </div>
                  )}
                </div>
              )}

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-foreground/5 px-3 py-1 text-xs font-medium text-foreground/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 transition-colors hover:text-blue-500"
                  >
                    Source Code <ExternalLink size={14} />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-green-600 transition-colors hover:text-green-500"
                  >
                    Live Demo <Globe size={14} />
                  </a>
                )}
                {(project.process || project.whatILearned) && (
                  <button
                    onClick={() =>
                      setExpandedProject(isExpanded ? null : project.title)
                    }
                    className="ml-auto text-sm font-medium text-foreground/50 transition-colors hover:text-foreground"
                  >
                    {isExpanded ? "Show less" : "Show process →"}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-foreground/50">
          No projects in this category yet.
        </p>
      )}
    </div>
  );
}
