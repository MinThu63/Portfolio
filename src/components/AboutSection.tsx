import { personalInfo } from "@/lib/data";
import { Sparkles, Mail } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
      <h2 className="text-3xl font-bold tracking-tight">About Me</h2>

      <p className="mt-6 text-base text-foreground/80 leading-relaxed sm:text-lg">
        {personalInfo.bio}
      </p>

      {personalInfo.journey && (
        <p className="mt-4 text-sm text-foreground/70 leading-relaxed sm:text-base">
          {personalInfo.journey}
        </p>
      )}

      {personalInfo.focus && (
        <p className="mt-4 text-sm text-foreground/70 leading-relaxed sm:text-base">
          {personalInfo.focus}
        </p>
      )}

      {personalInfo.approach && (
        <p className="mt-4 text-sm text-foreground/70 leading-relaxed sm:text-base">
          {personalInfo.approach}
        </p>
      )}

      {personalInfo.personal && (
        <p className="mt-4 text-sm text-foreground/60 italic sm:text-base">
          {personalInfo.personal}
        </p>
      )}

      <div className="mt-6 inline-flex items-start gap-2 rounded-lg bg-blue-600/10 px-4 py-2 text-sm text-blue-600">
        <Sparkles size={16} className="mt-0.5 shrink-0" />
        <span>
          <span className="font-medium">Currently:</span> {personalInfo.currentlyLearning}
        </span>
      </div>

      {personalInfo.cta && (
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
          <p className="text-sm text-foreground/60">{personalInfo.cta}</p>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:scale-105 w-fit"
          >
            <Mail size={14} />
            Contact
          </a>
        </div>
      )}
    </section>
  );
}
