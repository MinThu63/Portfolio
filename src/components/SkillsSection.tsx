"use client";

import { useState } from "react";
import { skills } from "@/lib/data";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function SkillsSection() {
  const [showAll, setShowAll] = useState(false);

  const featuredSkills = skills.filter((s) => s.featured);
  const technicalSkills = skills.filter((s) => s.type === "technical");
  const softSkills = skills.filter((s) => s.type === "soft");
  const technicalCategories = [...new Set(technicalSkills.map((s) => s.category))];
  const softCategories = [...new Set(softSkills.map((s) => s.category))];

  return (
    <section id="skills" className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
      <h2 className="text-3xl font-bold tracking-tight">Skills</h2>

      {/* Featured — flat list */}
      <div className="mt-6 flex flex-wrap gap-2">
        {featuredSkills.map((skill) => (
          <span
            key={skill.name}
            className="rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1.5 text-sm font-medium transition-colors hover:bg-blue-600/10 hover:text-blue-600"
          >
            {skill.name}
          </span>
        ))}
      </div>

      {/* Expanded — categorized */}
      {showAll && (
        <div className="mt-10 space-y-10">
          <div>
            <h3 className="text-xl font-semibold">Technical Skills</h3>
            <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {technicalCategories.map((category) => (
                <div key={category}>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/50">
                    {category}
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {technicalSkills
                      .filter((s) => s.category === category)
                      .map((skill) => (
                        <span
                          key={skill.name}
                          className="rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1.5 text-xs font-medium transition-colors hover:bg-blue-600/10 hover:text-blue-600"
                        >
                          {skill.name}
                        </span>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Soft Skills</h3>
            <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {softCategories.map((category) => (
                <div key={category}>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/50">
                    {category}
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {softSkills
                      .filter((s) => s.category === category)
                      .map((skill) => (
                        <span
                          key={skill.name}
                          className="rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1.5 text-xs font-medium transition-colors hover:bg-green-600/10 hover:text-green-600"
                        >
                          {skill.name}
                        </span>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Toggle */}
      <div className="mt-8 text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-foreground/5"
        >
          {showAll ? "Show less" : "Show more"}
          {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>
    </section>
  );
}
