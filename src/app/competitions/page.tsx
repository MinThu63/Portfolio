"use client";

import { useState } from "react";
import { competitions } from "@/lib/data";
import { ArrowLeft, Trophy, CheckCircle, Clock, CircleCheck } from "lucide-react";
import Link from "next/link";

const filters = ["All", "In Progress", "Completed"] as const;
type Filter = (typeof filters)[number];

export default function CompetitionsPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filtered =
    activeFilter === "All"
      ? competitions
      : competitions.filter((c) => c.status === activeFilter);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
      >
        <ArrowLeft size={16} />
        Back to Home
      </Link>

      <h1 className="mt-8 text-3xl font-bold tracking-tight">All Competitions</h1>
      <p className="mt-2 text-foreground/60">
        A complete list of competitions I&apos;ve participated in.
      </p>

      {/* Filter tabs */}
      <div className="mt-6 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeFilter === filter
                ? "bg-foreground text-background"
                : "border border-foreground/20 text-foreground/70 hover:bg-foreground/5"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-8 space-y-6">
        {filtered.map((comp) => (
          <div
            key={comp.title}
            className="rounded-xl border border-foreground/10 p-6 transition-colors hover:bg-foreground/5"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <Trophy size={22} className="shrink-0 text-yellow-500" />
                <h3 className="text-lg font-semibold">{comp.title}</h3>
              </div>
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                  comp.status === "Completed"
                    ? "bg-blue-500/10 text-blue-600"
                    : "bg-green-500/10 text-green-600"
                }`}
              >
                {comp.status === "Completed" ? (
                  <CircleCheck size={10} />
                ) : (
                  <Clock size={10} />
                )}
                {comp.status}
              </span>
            </div>
            <p className="mt-1 text-sm text-foreground/50">
              {comp.organiser} &middot; {comp.timeline}
            </p>
            <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
              {comp.description}
            </p>
            <ul className="mt-4 space-y-1.5">
              {comp.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-2 text-sm text-foreground/60"
                >
                  <CheckCircle size={12} className="mt-0.5 shrink-0 text-green-500" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {filtered.length === 0 && (
          <p className="text-center text-foreground/50">
            No competitions in this category yet.
          </p>
        )}
      </div>
    </div>
  );
}
