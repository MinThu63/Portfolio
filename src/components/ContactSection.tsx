import { Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
      <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
      <p className="mt-2 text-foreground/60">
        Feel free to reach out through any of the links below.
      </p>
      <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-3">
        <a
          href="mailto:24036948@myrp.edu.sg"
          className="flex items-center gap-3 rounded-xl border border-foreground/10 p-4 transition-colors hover:bg-foreground/5"
        >
          <Mail size={20} className="shrink-0 text-blue-600" />
          <div className="min-w-0">
            <p className="text-sm font-semibold">Email</p>
            <p className="text-xs text-foreground/60 truncate">24036948@myrp.edu.sg</p>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/kyaw-min-thu-087692338/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl border border-foreground/10 p-4 transition-colors hover:bg-foreground/5"
        >
          <span className="shrink-0 text-blue-600 text-lg font-bold">in</span>
          <div className="min-w-0">
            <p className="text-sm font-semibold">LinkedIn</p>
            <p className="text-xs text-foreground/60 truncate">kyaw-min-thu</p>
          </div>
        </a>
        <a
          href="https://github.com/MinThu63"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl border border-foreground/10 p-4 transition-colors hover:bg-foreground/5"
        >
          <span className="shrink-0 text-blue-600 text-lg font-bold">&lt;/&gt;</span>
          <div className="min-w-0">
            <p className="text-sm font-semibold">GitHub</p>
            <p className="text-xs text-foreground/60 truncate">MinThu63</p>
          </div>
        </a>
      </div>
    </section>
  );
}
