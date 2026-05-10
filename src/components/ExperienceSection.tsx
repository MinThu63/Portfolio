import { workExperiences } from "@/lib/data";
import { Briefcase } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
      <h2 className="text-3xl font-bold tracking-tight">Work Experience</h2>
      <div className="mt-8 space-y-6">
        {workExperiences.map((exp) => (
          <div
            key={`${exp.title}-${exp.company}`}
            className="flex items-start gap-4 rounded-xl border border-foreground/10 p-5 transition-colors hover:bg-foreground/5"
          >
            <Briefcase size={20} className="mt-1 shrink-0 text-blue-600" />
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-semibold">{exp.title}</h3>
                <span className="rounded-full bg-foreground/5 px-2.5 py-0.5 text-xs font-medium text-foreground/60">
                  {exp.type}
                </span>
              </div>
              <p className="mt-1 text-sm text-foreground/50">
                {exp.company}
              </p>
              <p className="mt-0.5 text-xs text-foreground/40">
                {exp.startDate} — {exp.endDate}
              </p>
              <p className="mt-2 text-sm text-foreground/70">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
