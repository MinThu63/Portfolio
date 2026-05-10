import { certifications, academicAwards } from "@/lib/data";
import { ArrowLeft, CheckCircle, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/basePath";

export const metadata = {
  title: "Certifications & Awards — Kyaw Min Thu",
};

export default function CertificationsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
      >
        <ArrowLeft size={16} />
        Back to Home
      </Link>

      <h1 className="mt-8 text-3xl font-bold tracking-tight">
        Certifications & Awards
      </h1>
      <p className="mt-2 text-foreground/60">
        A complete list of my professional certifications, credentials, and awards. Click any image to view full size.
      </p>

      {/* Certifications */}
      <h2 className="mt-10 text-xl font-semibold">Certifications</h2>
      <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className="flex flex-col overflow-hidden rounded-xl border border-foreground/10 transition-colors hover:bg-foreground/5"
          >
            {cert.image && (
              <a
                href={assetPath(cert.image)}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block h-48 w-full bg-foreground/5 cursor-zoom-in"
              >
                <Image
                  src={assetPath(cert.image)}
                  alt={cert.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </a>
            )}
            <div className="flex flex-1 flex-col gap-2 p-5">
              <h3 className="font-semibold leading-tight">{cert.title}</h3>
              <p className="text-sm text-foreground/50">
                {cert.issuer} &middot; {cert.date}
              </p>
              <ul className="mt-2 space-y-1.5">
                {cert.skillsAcquired.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-start gap-2 text-sm text-foreground/60"
                  >
                    <CheckCircle size={12} className="mt-0.5 shrink-0 text-green-500" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Awards */}
      <h2 className="mt-16 text-xl font-semibold">Awards</h2>
      <div className="mt-4 space-y-3">
        {academicAwards.map((award, i) => (
          <div
            key={`${award.title}-${i}`}
            className="flex items-start gap-3 rounded-xl border border-foreground/10 p-5 transition-colors hover:bg-foreground/5"
          >
            <Trophy size={20} className="mt-0.5 shrink-0 text-yellow-500" />
            <div>
              <p className="font-semibold">{award.title}</p>
              <p className="text-sm text-foreground/50">
                {award.issuer} &middot; {award.date}
              </p>
              <p className="mt-1 text-sm text-foreground/60">{award.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
