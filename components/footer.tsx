// components/footer.tsx
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 bg-background/95">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Left: brand + copy */}
        <div className="flex items-center gap-3">
          <div className="relative flex h-7 w-7 items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400 via-cyan-300 to-pink-400 opacity-70" />
            <div className="relative h-5 w-5 rounded-full bg-background" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight">
              Codeco.tech
            </span>
            <span className="text-[11px] text-muted-foreground">
              Designing interfaces that feel one release ahead.
            </span>
          </div>
        </div>

        {/* Right: nav + meta */}
        <div className="flex flex-col gap-3 text-[11px] text-muted-foreground sm:flex-row sm:items-center sm:gap-6">
          <nav className="flex flex-wrap gap-3">
            <a
              href="#features"
              className="transition-colors hover:text-foreground"
            >
              Features
            </a>
            <a
              href="#changelog"
              className="transition-colors hover:text-foreground"
            >
              Changelog
            </a>
            <a
              href="#privacy"
              className="transition-colors hover:text-foreground"
            >
              Privacy
            </a>
            <a
              href="#terms"
              className="transition-colors hover:text-foreground"
            >
              Terms
            </a>
          </nav>
          <span className="text-[11px] text-muted-foreground/80">
            © {year} Codeco.tech. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
