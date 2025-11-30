"use client";

import { useEffect } from "react";
import Link from "next/link";
import "./scrolling.css";

const sections = [
  {
    id: "about-us",
    title: "About Codeco.tech",
    content:
      "Codeco.tech designs and ships interfaces that feel one release ahead. The focus is simple: strong typography, thoughtful motion, and experiences that stay fast as your ambitions grow.",
  },
  {
    id: "what-we-do",
    title: "What we craft",
    content:
      "From landing pages to full product surfaces, Codeco.tech pairs Next.js, Tailwind v4, and modern design systems to create frontends that stay flexible under real-world complexity.",
  },
  {
    id: "expertise",
    title: "Deep product expertise",
    content:
      "With years across SaaS, internal tools, and growth surfaces, the team treats each interface as a system, not a one-off screen. That means consistent patterns, durable foundations, and details that compound over time.",
  },
  {
    id: "solutions-technology",
    title: "Architecture & technology",
    content:
      "Codeco.tech leans on the current stack—Next.js 15, React 19, Tailwind v4, and modern cloud tooling—to ship interfaces that are both visually sharp and operationally reliable.",
  },
  {
    id: "expert-support",
    title: "Long-term support",
    content:
      "Beyond launch, Codeco.tech helps teams iterate with confidence: structured changelogs, design tokens, and small-but-meaningful updates that keep the product feeling current.",
  },
];

export default function AboutPage() {
  useEffect(() => {
    // Plain JS for text splitting animation
    const headings = document.querySelectorAll<HTMLElement>("[data-splitting]");
    for (const h of headings) {
      const text = h.textContent || "";
      h.textContent = "";
      for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const span = document.createElement("span");
        span.className = "char";
        span.style.setProperty("--char-index", i.toString());
        span.textContent = char;
        h.appendChild(span);
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const state = entry.isIntersecting ? "" : "out";
          entry.target.setAttribute("data-scroll", state);
        }
      },
      { threshold: 0.15 }
    );

    for (const h of headings) observer.observe(h);

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950/90">
        {/* gradient field */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(56,189,248,0.2),transparent_60%),radial-gradient(circle_at_80%_110%,rgba(236,72,153,0.18),transparent_60%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 pb-20 pt-24 sm:px-6 md:pb-28 md:pt-32 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 px-4 py-1.5 text-xs text-slate-200/90 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-400" />
            </span>
            <span className="uppercase tracking-[0.24em] text-slate-300">
              About Codeco.tech
            </span>
          </div>

          <h1 className="mb-5 max-w-4xl text-center text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block">Interfaces that feel</span>
            <span className="bg-gradient-to-r from-sky-300 via-white to-pink-300 bg-clip-text text-transparent">
              one release ahead.
            </span>
          </h1>

          <p className="max-w-2xl text-center text-sm text-slate-300/90 sm:text-base">
            This page pulls back the curtain on how Codeco.tech thinks about
            product, typography, and motion—and why the details matter when
            you&apos;re shipping fast.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:px-8 lg:py-32">
        <div className="space-y-20 md:space-y-28 lg:space-y-32">
          {sections.map((section, index) => (
            <article key={section.id ?? section.title} className="relative">
              {/* Section index */}
              <div className="pointer-events-none absolute -left-3 top-0 select-none text-6xl font-semibold text-slate-800/40 md:-left-10 md:text-8xl">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Heading with splitting animation */}
              <h2
                data-splitting
                className="mb-6 text-center text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl md:mb-8 md:text-4xl"
              >
                {section.title}
              </h2>

              {/* Content card */}
              <div className="relative group">
                <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-sky-500/20 via-sky-400/0 to-pink-500/25 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative rounded-3xl border border-slate-800/80 bg-slate-950/80 px-6 py-7 text-center shadow-[0_18px_80px_rgba(15,23,42,0.9)] backdrop-blur-md sm:px-8 sm:py-9 md:px-10 md:py-10">
                  <p className="mx-auto max-w-3xl text-sm leading-relaxed text-slate-300/90 sm:text-base md:leading-relaxed">
                    {section.content}
                  </p>
                  <div className="mt-7 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-sky-400/80 to-transparent" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Stats */}
        <section className="mt-24 md:mt-28 lg:mt-32">
          <div className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/90 shadow-[0_18px_80px_rgba(15,23,42,0.95)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(56,189,248,0.25),transparent_60%),radial-gradient(circle_at_85%_110%,rgba(236,72,153,0.25),transparent_60%)]" />
            <div className="relative px-8 py-12 sm:px-10 sm:py-14 md:px-14 md:py-16">
              <h3 className="mb-10 text-center text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl md:mb-12 md:text-3xl">
                Product work, backed by real numbers.
              </h3>
              <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3 md:gap-12">
                {[
                  { value: "500+", label: "Interfaces shipped" },
                  { value: "98%", label: "Long-term client retention" },
                  { value: "24/7", label: "Support availability" },
                ].map((stat) => (
                  <div key={stat.label} className="group">
                    <div className="mb-2 text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl md:text-6xl">
                      <span className="bg-gradient-to-br from-sky-300 via-white to-pink-300 bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-110">
                        {stat.value}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300/90 sm:text-sm">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 text-center md:mt-28 lg:mt-32">
          <div className="inline-block">
            <div className="pointer-events-none absolute -inset-3 mx-auto rounded-2xl bg-gradient-to-r from-sky-500 via-cyan-300 to-pink-500 opacity-40 blur-2xl" />
            <div className="relative inline-flex flex-col items-center rounded-2xl border border-slate-800/80 bg-slate-950/90 px-8 py-7 shadow-[0_16px_70px_rgba(15,23,42,0.95)] backdrop-blur-md sm:px-10 sm:py-8 md:flex-row md:gap-6 md:px-12">
              <div className="mb-4 md:mb-0 md:text-left">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">
                  Next steps
                </p>
                <h4 className="mt-2 text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
                  Ready to design the next release of your product?
                </h4>
                <p className="mt-1.5 max-w-md text-xs text-slate-300/90 sm:text-sm">
                  Share your roadmap, and see how a typography‑first, motion‑aware
                  approach can clarify what you ship next.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:flex-row md:items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400 px-6 py-2.5 text-xs font-semibold text-slate-950 shadow-[0_16px_55px_rgba(56,189,248,0.6)] transition-transform duration-150 hover:-translate-y-0.5 md:text-sm"
                >
                  Start a project
                </Link>
                <Link
                  href="/summary"
                  className="text-xs font-medium text-slate-300/90 underline-offset-4 hover:text-slate-50 hover:underline"
                >
                  Browse the summary guide
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* CSS custom property for animated borders if you still use them in scrolling.css */}
      <style>{`
        @property --border-angle {
          inherits: false;
          initial-value: 0deg;
          syntax: '<angle>';
        }
        @keyframes rotate-border {
          to {
            --border-angle: 360deg;
          }
        }
      `}</style>
    </main>
  );
}
