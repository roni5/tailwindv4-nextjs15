// app/page.tsx
export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 antialiased">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.15),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(236,72,153,0.12),_transparent_55%)]" />

        <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-10 px-6 pb-24 pt-28 lg:flex-row lg:items-center lg:pt-32">
          {/* Left: copy */}
          <div className="max-w-2xl space-y-8">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-sky-300/80">
              Ultra 2025 design system
            </p>

            <h1 className="bg-gradient-to-br from-sky-100 via-white to-pink-200 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
              The greatest landing page
              <span className="block text-sky-300/80">of all time.</span>
            </h1>

            <p className="text-base leading-relaxed text-slate-300/90 sm:text-lg">
              Opinionated typography, cinematic white space, and motion‑driven micro‑interactions.
              Designed for founders shipping in 2025, not 2015.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-sky-400 via-sky-300 to-pink-400 px-7 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_60px_rgba(56,189,248,0.45)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_24px_80px_rgba(236,72,153,0.55)]"
              >
                <span className="relative z-10">Get early access</span>
                <span className="relative z-10 text-xs uppercase tracking-wide text-slate-900/80">
                  in 90 seconds
                </span>
                <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <span className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent mix-blend-screen" />
                </span>
              </button>

              <button
                className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/40 px-6 py-3 text-sm font-medium text-slate-100/90 backdrop-blur-sm transition-colors hover:border-slate-500 hover:bg-slate-900/70"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Watch 2‑minute preview
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400/80">
              <span>No credit card • Ship in days, not months</span>
              <span className="hidden h-3 w-px bg-slate-700 sm:inline-block" />
              <span className="inline-flex items-center gap-1">
                <span className="inline-flex -space-x-1.5">
                  <span className="h-5 w-5 rounded-full border border-slate-900 bg-slate-700/80" />
                  <span className="h-5 w-5 rounded-full border border-slate-900 bg-slate-500/80" />
                  <span className="h-5 w-5 rounded-full border border-slate-900 bg-sky-400/80" />
                </span>
                Loved by product teams
              </span>
            </div>
          </div>

          {/* Right: card */}
          <div className="relative w-full max-w-md self-stretch lg:self-auto">
            <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-b from-sky-400/40 via-sky-400/0 to-pink-500/40 opacity-60 blur-2xl" />

            <div className="group relative h-full rounded-3xl border border-slate-800/80 bg-slate-900/80 p-6 shadow-[0_18px_80px_rgba(15,23,42,0.9)] backdrop-blur">
              <header className="mb-6 flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-400">
                    Live preview
                  </p>
                  <p className="text-sm text-slate-200/90">
                    Typography‑first layout in motion.
                  </p>
                </div>
                <div className="inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-[10px] font-medium text-slate-300">
                  2025
                  <span className="h-1.5 w-6 rounded-full bg-gradient-to-r from-sky-400 to-pink-400" />
                </div>
              </header>

              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-5">
                {/* “fake layout” */}
                <div className="mb-6 space-y-2">
                  <div className="h-2 w-16 rounded-full bg-slate-700/90" />
                  <div className="h-4 w-40 rounded-full bg-gradient-to-r from-sky-400 via-sky-300 to-pink-400" />
                  <div className="h-3 w-24 rounded-full bg-slate-700/90" />
                </div>
                <div className="mb-4 space-y-2">
                  <div className="h-2.5 w-full max-w-[90%] rounded-full bg-slate-800" />
                  <div className="h-2.5 w-full max-w-[70%] rounded-full bg-slate-800" />
                  <div className="h-2.5 w-full max-w-[82%] rounded-full bg-slate-800" />
                </div>
                <div className="flex gap-3">
                  <div className="h-8 flex-1 rounded-xl bg-gradient-to-r from-sky-500/80 to-cyan-400/80 transition-transform duration-200 group-hover:-translate-y-0.5" />
                  <div className="h-8 flex-1 rounded-xl bg-slate-800/90 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:delay-75" />
                </div>

                {/* subtle spotlight */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(56,189,248,0.22),transparent_60%),radial-gradient(circle_at_90%_120%,rgba(236,72,153,0.25),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <footer className="mt-5 flex items-center justify-between text-[11px] text-slate-400">
                <span>Hover to feel the motion.</span>
                <span className="inline-flex items-center gap-1 text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Live
                </span>
              </footer>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-slate-800/80 bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6 text-xs text-slate-500">
          <p className="font-medium uppercase tracking-[0.22em] text-slate-400">
            Trusted by teams shipping bold products
          </p>
          <div className="flex flex-wrap gap-5 text-[11px] text-slate-500">
            <span className="uppercase tracking-[0.2em]">Studio Zero</span>
            <span className="uppercase tracking-[0.2em]">Hyperlane</span>
            <span className="uppercase tracking-[0.2em]">Northwind</span>
            <span className="uppercase tracking-[0.2em]">Evergreen</span>
          </div>
        </div>
      </section>

      {/* Zig‑zag sections */}
      <section className="mx-auto max-w-6xl space-y-24 px-6 py-24 lg:py-32">
        {/* Row 1 */}
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-center">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-300/80">
              Type first
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Typography that feels like a product, not a template.
            </h2>
            <p className="text-sm leading-relaxed text-slate-300/90 sm:text-base">
              Use comfortable line‑height, tight heading tracking, and consistent size steps.
              Keep hero copy under ~3 lines and limit any paragraph to ~70 characters width.
            </p>
            <ul className="space-y-2 text-sm text-slate-300/90">
              <li className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
          </li>
          <li className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
            
      </li>
    </ul>
          </div >

    <div className="relative">
      <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr from-sky-500/20 via-sky-400/0 to-pink-400/20 blur-3xl" />
      <div className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/80 p-6 transition-transform duration-200 hover:-translate-y-1 hover:border-sky-500/60">
        <div className="mb-5 flex items-center justify-between text-xs text-slate-400">
          <span>Readable layout</span>
          <span className="rounded-full bg-slate-800/80 px-3 py-1 text-[10px] text-slate-300">
            16px / 1.7rem / 72ch
          </span>
        </div>
        <article className="prose prose-invert prose-sm prose-headings:tracking-tight prose-headings:text-slate-50 prose-p:text-slate-300/90 prose-p:leading-relaxed prose-a:text-sky-300/90">
          <h3>Design with rhythm, not noise.</h3>
          <p>
            Great landings don&apos;t use more fonts; they use fewer, with deliberate scale and spacing.
            Keep every block aligned to your vertical rhythm and let whitespace do the hard work.
          </p>
        </article>
      </div>
    </div>
        </div >

    {/* Row 2 (reverse) */ }
    < div className = "grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-center" >
          <div className="relative order-2 lg:order-1">
            <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tl from-sky-500/20 via-sky-400/0 to-pink-400/20 blur-3xl" />
            <div className="group relative overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6">
              <div className="mb-4 flex items-center justify-between text-xs text-slate-400">
                <span>Hover micro‑interactions</span>
                <span className="rounded-full bg-slate-900/80 px-3 py-1 text-[10px] text-slate-300">
                  120ms / ease‑out
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {["Gradients", "Depth", "Focus"].map((label, i) => (
                  <button
                    key={label}
                    className="group/card relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/80 px-4 py-4 text-left text-xs text-slate-200/90 transition-all duration-200 hover:-translate-y-1 hover:border-sky-400/80 hover:bg-slate-900"
                    style={{ transitionDelay: `${i * 40}ms` }}
                  >
                    <span className="mb-2 inline-flex items-center gap-2 text-[11px] font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-sky-400 to-pink-400" />
                      {label}
                    </span>
                    <span className="block text-[11px] text-slate-400">
                      Subtle hover transforms, soft glows, and layered backgrounds keep things feeling alive.
                    </span>
                    <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover/card:opacity-100">
                      <span className="absolute inset-0 bg-gradient-to-br from-sky-500/15 via-transparent to-pink-500/25" />
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 space-y-5 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-300/80">
              White space + zig‑zag
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Guide the eye with contrast and rhythm.
            </h2>
            <p className="text-sm leading-relaxed text-slate-300/90 sm:text-base">
              Alternate blocks left‑right, but keep type scale and spacing consistent.
              Use contrast between dense and empty areas so the scroll feels cinematic, not chaotic.
            </p>
            <ul className="space-y-2 text-sm text-slate-300/90">
              <li>Use a single max‑width container and align headings to the same left edge.</li>
              <li>Limit paragraph width to ~70 characters for optimal readability.</li>
            </ul >
          </div >
        </div >
      </section >

    {/* Closing CTA */ }
    < section className = "border-t border-slate-800/80 bg-slate-950/95" >
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 py-16 text-center">
        <h2 className="bg-gradient-to-r from-sky-300 via-white to-pink-300 bg-clip-text text-2xl font-semibold tracking-tight text-transparent sm:text-3xl">
          Ready to ship the greatest landing page of all time?
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-300/90 sm:text-base">
          Start from a typography‑first foundation, layer in motion only where it adds clarity,
          and let your white space say what gradients can&apos;t.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400 px-7 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_70px_rgba(56,189,248,0.6)] transition-transform duration-200 hover:-translate-y-0.5">
            Launch my GOAT landing
          </button>
          <button className="text-xs font-medium uppercase tracking-[0.22em] text-slate-400 hover:text-slate-200">
            Or explore the design system
          </button>
        </div>
      </div>
      </section >
    </main >
  );
}
