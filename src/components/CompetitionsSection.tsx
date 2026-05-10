import { competitions } from "@/lib/data";
import { Trophy, CheckCircle, Clock } from "lucide-react";

export default function CompetitionsSection() {
  return (
    <section id="competitions" className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
      <h2 className="text-3xl font-bold tracking-tight">Competitions</h2>
      <p className="mt-2 text-foreground/60">
        Challenges I&apos;m currently competing in.
      </p>
      <div className="mt-8 space-y-6">
        {competitions.map((comp) => (
          <div
            key={comp.title}
            className="rounded-xl border border-foreground/10 p-6 transition-colors hover:bg-foreground/5"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <Trophy size={22} className="shrink-0 text-yellow-500" />
                <h3 className="text-lg font-semibold">{comp.title}</h3>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-600">
                <Clock size={10} />
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
      </div>
    </section>
  );
}
