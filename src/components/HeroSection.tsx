import { personalInfo } from "@/lib/data";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { assetPath } from "@/lib/basePath";

export default function HeroSection() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-4 py-12">
      <div className="mx-auto grid max-w-4xl items-center gap-10 md:grid-cols-2 md:gap-12">
        {/* Photo — shows first on mobile */}
        <div className="flex justify-center md:order-2 md:justify-end">
          <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-foreground/10 shadow-xl sm:h-64 sm:w-64 md:h-80 md:w-80">
            <Image
              src={assetPath("/profile.jpg?v=2")}
              alt={`Photo of ${personalInfo.name}`}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Text */}
        <div className="text-center md:order-1 md:text-left">
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>
          <p className="mt-4 text-base text-foreground/70 sm:mt-6 sm:text-lg">
            {personalInfo.headline}
          </p>
          <a
            href="#projects"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-105"
          >
            View My Projects
            <ArrowDown size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
