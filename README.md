# Next-Gen Learning Dashboard

A high-fidelity student dashboard prototype for the frontend intern challenge. It uses Next.js App Router, Supabase, Tailwind CSS, Framer Motion, and Lucide React.

## Features

- Dark-only Bento dashboard with a collapsible desktop sidebar, icon-only tablet navigation, and mobile bottom navigation.
- Server Component data fetching from Supabase for dynamic course tiles.
- Framer Motion staggered page entry, spring hover states, animated progress bars, and sidebar `layoutId` highlights.
- Skeleton loading route and graceful fallback UI if Supabase is unavailable.
- Semantic component structure using `main`, `aside`, `nav`, `section`, `article`, `header`, and `footer`.

## Tech Stack

- Next.js 16 App Router
- React 19
- Supabase PostgreSQL
- Tailwind CSS 4
- Framer Motion
- Lucide React

## Environment

Create `.env.local` from `.env.example`:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

The Supabase URL must be the project base URL. Do not include `/rest/v1`.

## Supabase Setup

Run the SQL in `supabase/seed.sql` inside the Supabase SQL editor. It creates the `courses` table, enables read access for the anon key, and inserts mock challenge data.

Expected course icon names include `BrainCircuit`, `Code2`, `Database`, `Rocket`, `Network`, `Cpu`, `Palette`, and `BookOpen`.

## Architecture Notes

`src/app/page.tsx` stays as a Server Component and calls `connection()` so course data is read at request time instead of being frozen during build prerendering. The Supabase query lives in `src/actions/courses.ts`, which returns a typed `CoursesResult` with either live courses or a friendly error message.

Animated UI is isolated in client components under `src/components/dashboard`. Server data is passed as serializable props into `BentoGrid`, while Framer Motion handles staggered tile entry, hover transforms, spring progress bars, and navigation highlight transitions.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`

## Validate

```bash
npm run lint
npm run build
```
##Deployed Link 
```
https://learning-dashboard-ishant3.vercel.app/
```
