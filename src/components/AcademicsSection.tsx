import { academicRecords, cGPA } from "@/lib/data";
import { GraduationCap, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export default function AcademicsSection() {
  const distinctions = academicRecords.filter((m) => m.grade === "DIST");

  return (
    <section id="academics" className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
      <h2 className="text-3xl font-bold tracking-tight">Academic Record</h2>
      <p className="mt-2 text-foreground/60">
        Unofficial Statement of Results — Republic Polytechnic
      </p>

      <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-blue-600/10 px-4 py-2 text-sm font-medium text-blue-600">
        <GraduationCap size={16} />
        Cumulative GPA: {cGPA.toFixed(2)} / 4.00
      </div>

      {/* Featured: Distinction modules */}
      <h3 className="mt-8 flex items-center gap-2 text-lg font-semibold">
        <Star size={18} className="text-yellow-500" />
        Distinction Modules
      </h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {distinctions.map((mod) => (
          <div
            key={mod.code}
            className="flex items-center gap-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4"
          >
            <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-bold text-yellow-600">
              DIST
            </span>
            <div>
              <p className="font-semibold">{mod.name}</p>
              <p className="text-sm text-foreground/50">
                {mod.code} &middot; AY{mod.academicYear} Sem {mod.semester}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/academics"
          className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-foreground/5"
        >
          View Full Transcript
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
