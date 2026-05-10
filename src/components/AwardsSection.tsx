import { academicAwards } from "@/lib/data";
import { Trophy } from "lucide-react";
import Image from "next/image";
import { assetPath } from "@/lib/basePath";

export default function AwardsSection() {
  return (
    <section id="awards" className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
      <h2 className="text-3xl font-bold tracking-tight">Awards</h2>
      <p className="mt-2 text-foreground/60">
        Academic awards and recognitions received.
      </p>
      <div className="mt-8 space-y-6">
        {academicAwards.map((award, i) => (
          <div
            key={`${award.title}-${i}`}
            className="flex flex-col gap-4 rounded-xl border border-foreground/10 p-5 transition-colors hover:bg-foreground/5 sm:flex-row sm:items-start"
          >
            {award.image && (
              <a
                href={assetPath(award.image)}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block h-32 w-full shrink-0 overflow-hidden rounded-lg bg-foreground/5 cursor-zoom-in sm:w-48"
              >
                <Image
                  src={assetPath(award.image)}
                  alt={award.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </a>
            )}
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <Trophy size={18} className="text-yellow-500" />
                <h3 className="font-semibold">{award.title}</h3>
              </div>
              <p className="mt-1 text-sm text-foreground/50">
                {award.issuer} &middot; {award.date}
              </p>
              <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                {award.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
