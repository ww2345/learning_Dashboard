"use client";

import { motion } from "framer-motion";
import { Course } from "@/types/course";
import { ActivityTile } from "@/components/dashboard/ActivityTile";
import { CourseCard } from "@/components/dashboard/CourseCard";
import { HeroTile } from "@/components/dashboard/HeroTile";

interface BentoGridProps {
  courses: Course[];
  errorMessage: string | null;
}

const fallbackCourses: Course[] = [
  {
    id: "fallback-react",
    title: "Advanced React Patterns",
    progress: 75,
    icon_name: "BrainCircuit",
    created_at: "2026-01-01T00:00:00.000Z",
  },
  {
    id: "fallback-systems",
    title: "Systems Thinking for Product UI",
    progress: 62,
    icon_name: "Network",
    created_at: "2026-01-02T00:00:00.000Z",
  },
  {
    id: "fallback-data",
    title: "Supabase Data Workflows",
    progress: 48,
    icon_name: "Database",
    created_at: "2026-01-03T00:00:00.000Z",
  },
];

export function BentoGrid({ courses, errorMessage }: BentoGridProps) {
  const visibleCourses = courses.length > 0 ? courses : fallbackCourses;

  return (
    <section aria-labelledby="dashboard-title" className="space-y-8">
      <header className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-100/55">
            Student dashboard
          </p>
          <h1 id="dashboard-title" className="mt-2 text-2xl font-semibold text-white md:text-3xl">
            Next-gen learning cockpit
          </h1>
        </div>
        {errorMessage && (
          <p className="max-w-md rounded-xl border border-amber-300/20 bg-amber-300/10 px-4 py-3 text-sm text-amber-100">
            {errorMessage} Showing prototype course tiles.
          </p>
        )}
      </header>

      <motion.section
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
        variants={{
          hidden: { opacity: 1 },
          show: {
            opacity: 1,
            transition: {
              delayChildren: 0.08,
              staggerChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        animate="show"
        aria-label="Learning dashboard widgets"
      >
        <HeroTile />
        {visibleCourses.map((course, index) => (
          <CourseCard course={course} index={index} key={course.id} />
        ))}
        <ActivityTile />
      </motion.section>
    </section>
  );
}
