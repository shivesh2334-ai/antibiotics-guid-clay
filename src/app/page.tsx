"use client";

import { useMemo, useState } from "react";
import { chapters, searchChapters } from "@/data/guidelines";
import RegimenTable from "@/components/RegimenTable";
import DoseTable from "@/components/DoseTable";

export default function Home() {
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState(chapters[0]?.id ?? "");

  const results = useMemo(() => searchChapters(query), [query]);
  const isSearching = query.trim().length > 0;
  const matchCount = useMemo(
    () => results.reduce((count, chapter) => count + chapter.conditions.length, 0),
    [results],
  );

  const active = isSearching
    ? results
    : chapters.filter((c) => c.id === activeId);

  return (
    <div className="min-h-screen">
      <header className="border-b border-rule bg-teal-900 text-paper">
        <div className="max-w-6xl mx-auto px-5 py-7">
          <p className="text-xs tracking-wide text-teal-100/70 mb-2">
            EMC Digitals · Clinical Reference
          </p>
          <h1 className="font-serif text-2xl sm:text-3xl leading-tight">
            Antimicrobial Use in Common Syndromes
          </h1>
          <p className="text-sm text-teal-100/80 mt-2 max-w-2xl">
            Empiric and directed antibiotic therapy, curated from the ICMR
            Treatment Guidelines for Antimicrobial Use in Common Syndromes,
            2nd Edition (2019).
          </p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-5 py-6 flex flex-col md:flex-row gap-8">
        <aside className="md:w-64 shrink-0">
          <label htmlFor="guide-search" className="block mb-4">
            <span className="sr-only">Search syndromes, organisms or drugs</span>
            <input
              id="guide-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search syndrome, organism, drug…"
              className="w-full border border-rule rounded-sm px-3 py-2 text-sm bg-white focus:border-teal-500"
            />
          </label>

          <nav
            className={`flex md:flex-col gap-1 overflow-x-auto md:overflow-visible pb-2 md:pb-0 ${
              isSearching ? "opacity-40 pointer-events-none" : ""
            }`}
          >
            {chapters.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveId(c.id)}
                aria-current={c.id === activeId ? "page" : undefined}
                className={`text-left whitespace-nowrap md:whitespace-normal shrink-0 px-3 py-2 rounded-sm text-sm transition-colors ${
                  c.id === activeId
                    ? "bg-teal-700 text-white"
                    : "hover:bg-teal-50 text-ink/80"
                }`}
              >
                <span className="text-xs text-ink/40 mr-1.5">{c.number}.</span>
                {c.title}
              </button>
            ))}
          </nav>
        </aside>

        <main className="flex-1 min-w-0">
          {isSearching && (
            <p className="text-sm text-ink/60 mb-4">
              {matchCount} matching condition{matchCount === 1 ? "" : "s"} for
              &ldquo;{query}&rdquo;
            </p>
          )}

          {active.length === 0 && (
            <p className="text-sm text-ink/60">No matches. Try a different term.</p>
          )}

          {active.map((chapter) => (
            <section key={chapter.id} className="mb-10">
              <div className="mb-4">
                <h2 className="font-serif text-xl text-ink">
                  {chapter.number}. {chapter.title}
                </h2>
                <p className="text-sm text-ink/60 mt-1">{chapter.summary}</p>
                <p className="text-xs text-ink/40 mt-1">
                  ICMR Guidelines 2019, {chapter.pageRef}
                </p>
              </div>

              <div className="bg-white/70 border border-rule rounded-sm px-5 py-2">
                {chapter.conditions.map((cond) => (
                  <RegimenTable key={cond.name} condition={cond} />
                ))}
              </div>

              {!isSearching && <DoseTable doses={chapter.doses} />}
            </section>
          ))}
        </main>
      </div>

      <footer className="border-t border-rule">
        <div className="max-w-6xl mx-auto px-5 py-6 text-xs text-ink/50 leading-relaxed">
          <p>
            Source: ICMR (Indian Council of Medical Research), &ldquo;Treatment
            Guidelines for Antimicrobial Use in Common Syndromes&rdquo;, 2nd
            Edition, 2019, New Delhi.
          </p>
          <p className="mt-1">
            This is a reference aid for qualified clinicians and is not a
            substitute for clinical judgement, local antibiograms, or
            institutional antimicrobial stewardship policy. Always confirm
            doses against current prescribing information, renal/hepatic
            function, pregnancy status, and local resistance patterns before
            treating a patient.
          </p>
        </div>
      </footer>
    </div>
  );
}
