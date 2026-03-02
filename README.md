<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Tripwire AI Academy

Practical AI training platform for executives and practitioners — from strategic literacy to operational mastery.

**Live:** [tripwire-ai-academy-new.vercel.app](https://tripwire-ai-academy-new.vercel.app/)

## Curriculum

### Tier 1: Foundational (Required)
| Code | Module | Duration |
|------|--------|----------|
| F1 | AI Demystified — The Executive Mental Model | 2 hours |
| F2 | AI Risk & Governance Essentials | 1.5 hours |
| F3 | The AI-Ready Organization | 1.5 hours |

### Tier 2: Implementation (Hands-on)
| Code | Module | Duration |
|------|--------|----------|
| I1 | Prompt Engineering for Business Impact | 3 hours |
| I2 | Agentic Workspaces — Hands-On Setup | 4 hours |
| I3 | Generative AI Tools for Content & Analysis | 3 hours |
| I4 | Synthetic Media — AI Images, Video & Audio | 3 hours |
| I5 | AI Operations — Workflow Automation | 4 hours |
| I6 | AI Security — Practical Controls | 2 hours |

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 4
- **Auth & DB:** Supabase (Auth + Postgres)
- **Hosting:** Vercel
- **PWA:** next-pwa

## Run Locally

**Prerequisites:** Node.js 18+

1. Install dependencies: `npm install`
2. Copy `.env.example` to `.env.local` and fill in your Supabase + Gemini keys
3. Run the app: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/                    # Next.js App Router pages
  courses/              # Course catalog + detail pages
  dashboard/            # Authenticated user dashboard
  login/                # Auth page
  auth/callback/        # OAuth callback
src/
  components/           # React components
    layout/             # Nav, Footer, Sidebar, etc.
    CourseCard.tsx       # Reusable course card
  data/courses.ts       # Course catalog data (single source of truth)
  lib/supabase/         # Supabase client helpers
  styles/               # Global CSS + theme
supabase/migrations/    # Database schema
```

## License

© Tripwire Digital Ltd. All rights reserved.
