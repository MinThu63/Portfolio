import { certifications } from "@/lib/data";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CertificationsSection() {
  const featured = certifications.filter((c) => c.featured);

  return (
    <section id="certifications" className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
      <h2 className="text-3xl font-bold tracking-tight">Certifications & Awards</h2>

      {/* Certifications */}
      {featured.length > 0 && (
        <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((cert) => (
            <div
              key={cert.title}
              className="flex flex-col overflow-hidden rounded-xl border border-foreground/10 transition-colors hover:bg-foreground/5"
            >
              {cert.image && (
                <a
                  href={cert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block h-40 w-full bg-foreground/5 cursor-zoom-in"
                >
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </a>
              )}
              <div className="flex flex-1 flex-col gap-2 p-4">
                <h3 className="text-sm font-semibold leading-tight">{cert.title}</h3>
                <p className="text-xs text-foreground/50">
                  {cert.issuer} &middot; {cert.date}
                </p>
                <ul className="mt-auto space-y-1">
                  {cert.skillsAcquired.slice(0, 3).map((skill) => (
                    <li
                      key={skill}
                      className="flex items-start gap-1.5 text-xs text-foreground/60"
                    >
                      <CheckCircle size={10} className="mt-0.5 shrink-0 text-green-500" />
                      {skill}
                    </li>
                  ))}
                  {cert.skillsAcquired.length > 3 && (
                    <li className="text-xs text-foreground/40">
                      +{cert.skillsAcquired.length - 3} more
                    </li>
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Awards */}
      <div className="mt-8 text-center">
        <Link
          href="/certifications"
          className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-foreground/5"
        >
          View All Certifications & Awards
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
