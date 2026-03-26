import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Grid2X2,
  Layers,
  Sparkles,
} from "lucide-react";

export default function PortfolioHero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-32 pb-20"
    >
      <div className="pointer-events-none absolute -left-28 top-10 h-64 w-64 rounded-full bg-[var(--primary)]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[var(--accent)]/15 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-56 w-56 -translate-x-1/2 rounded-full bg-[var(--primary)]/5 blur-3xl" />

      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <span className="mb-4 block text-sm font-bold uppercase tracking-wider text-[var(--accent)]">
              Build Scale With The Right Team
            </span>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-[var(--primary)] md:text-5xl lg:text-6xl">
              Trusted Filipino talent, proven by real campaign results
            </h1>
            <p className="mb-6 max-w-2xl text-lg leading-relaxed text-[var(--foreground-light)] md:text-xl">
              Advanced Virtual Staff Philippines connects growth-focused
              businesses with highly trained Filipino professionals. This page
              is a quick visual proof library of what our team delivers.
            </p>

            <div className="mb-8 grid gap-3 sm:grid-cols-2">
              {[
                "Recruitment, training, onboarding, and support",
                "Aligned with Western business standards",
                "Designed for long-term, scalable operations",
                "Transparent proof across SEO, ads, and brand assets",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 rounded-xl border border-[var(--border-light)] bg-[var(--background-alt)] px-3 py-2 text-sm text-[var(--foreground)]"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-light)]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/booking" className="btn-primary">
                Book a Free Call
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="#work"
                className="inline-flex items-center justify-center rounded-full border-2 border-[var(--primary)] px-6 py-3 font-semibold text-[var(--primary)] transition hover:bg-[var(--primary)] hover:text-white"
              >
                View the Library
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-[var(--border-light)] bg-[var(--background-alt)] p-6 shadow-xl md:p-8">
              <div className="flex items-center gap-4">
                <Image
                  src="/logo.jpeg"
                  alt="Advanced Virtual Staff logo"
                  width={72}
                  height={72}
                  className="rounded-2xl border border-[var(--border-light)]"
                />
                <div>
                  <p className="text-xs uppercase tracking-widest text-[var(--muted)]">
                    Advanced Virtual Staff Philippines
                  </p>
                  <h2 className="mt-1 text-2xl font-bold text-[var(--primary)]">
                    Company Snapshot
                  </h2>
                  <p className="text-sm text-[var(--foreground-light)]">
                    Recruitment + Training + Ongoing Support
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4">
                <div className="rounded-2xl border border-[var(--border-light)] bg-white p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)]">
                      <Layers className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--primary)]">
                        What This Page Covers
                      </p>
                      <p className="text-xs text-[var(--muted)]">
                        Proof assets across campaigns and operations
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-[var(--border-light)] bg-white p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                        <Grid2X2 className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[var(--primary)]">
                          Category Filters
                        </p>
                        <p className="text-xs text-[var(--muted)]">
                          Search and browse by campaign type
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-[var(--border-light)] bg-white p-4">
                    <p className="text-xs uppercase tracking-widest text-[var(--muted)]">
                      Included Proof
                    </p>
                    <p className="mt-2 text-sm font-semibold text-[var(--primary)]">
                      Branding • Ads • SEO • Social
                    </p>
                    <p className="text-xs text-[var(--muted)]">
                      Built for quick client review
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
