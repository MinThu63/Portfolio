import { FileDown } from "lucide-react";

export default function DocumentsSection() {
  return (
    <section id="documents" className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
      <h2 className="text-3xl font-bold tracking-tight">Documents</h2>
      <p className="mt-2 text-foreground/60">
        Download my resume below.
      </p>
      <div className="mt-6">
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-3 rounded-xl border border-foreground/10 p-5 transition-colors hover:bg-foreground/5"
        >
          <FileDown size={24} className="shrink-0 text-blue-600" />
          <div>
            <h3 className="font-semibold">Resume</h3>
            <p className="mt-0.5 text-sm text-foreground/50">
              Download as PDF
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}
