# Antimicrobial Use Guide

A searchable, mobile-friendly clinical reference for empiric and directed
antibiotic therapy, built from the **ICMR Treatment Guidelines for
Antimicrobial Use in Common Syndromes, 2nd Edition (2019)** (Indian Council
of Medical Research, New Delhi).

Covers 10 syndrome groups: acute fever & tropical infections, sepsis,
respiratory tract infections & CAP, intra-abdominal infections/SBP/diarrhea,
skin & soft tissue infections, bone & joint infections, CNS infections,
urinary tract infections, hospital-acquired infections (SSI prophylaxis,
CLABSI, HAP/VAP, CA-UTI), pelvic/obstetric infections, and infective
endocarditis — with organism-directed regimens, durations, and standard
adult dosing tables.

**This is a reference aid for qualified clinicians, not a substitute for
clinical judgement, local antibiograms, or institutional antimicrobial
stewardship policy.** Always confirm doses against current prescribing
information and the patient's renal/hepatic function, pregnancy status, and
local resistance patterns.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- No backend/database — all guideline data is bundled as static TypeScript
  (`src/data/guidelines.ts`), so the app is fully static and fast.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploying

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: ICMR antimicrobial use guide"
git branch -M main
git remote add origin https://github.com/shivesh2334-ai/antibiotic-guide.git
git push -u origin main
```

(If you're working from the GitHub web UI or Working Copy on iPad instead:
create a new repository named `antibiotic-guide` under your account, then
upload/commit this project's files there.)

### 2. Deploy to Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import the
   `antibiotic-guide` GitHub repository.
2. Framework preset: **Next.js** (auto-detected). No environment variables
   are required.
3. Deploy. `vercel.json` pins the deployment to the Mumbai region (`bom1`).
4. Every push to `main` will auto-deploy.

## Updating the content

All guideline content lives in `src/data/guidelines.ts` as a typed array of
chapters → conditions → regimens, plus a standard-dose table per chapter.
Edit that file to add syndromes, correct a dose, or extend coverage (e.g.
the immunocompromised-host chapter, which is summarized only lightly here) —
no other file needs to change for content updates.

## Source

ICMR. *Treatment Guidelines for Antimicrobial Use in Common Syndromes*, 2nd
edition. New Delhi: Indian Council of Medical Research; 2019.
