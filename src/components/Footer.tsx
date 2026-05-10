import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="mt-auto border-t border-foreground/10 bg-background"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 sm:flex-row sm:justify-between sm:px-6">
        <p className="text-sm text-foreground/50">
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/MinThu63"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kyaw-min-thu-087692338/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
