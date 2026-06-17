"use client";

import { createElement } from "react";
import { motion } from "framer-motion";
import { Course } from "@/types/course";
import { getCourseIcon } from "@/lib/icons";
import { ProgressBar } from "@/components/ui/ProgressBar";

interface CourseCardProps {
  course: Course;
  index: number;
}

const accents = [
  {
    mesh: "from-cyan-400/28 via-sky-400/8 to-emerald-400/16",
    border: "border-cyan-200/18",
    icon: "bg-cyan-400/14 text-cyan-100 ring-cyan-300/28",
    progress: "from-cyan-300 via-sky-300 to-emerald-300",
    shadow: "hover:shadow-cyan-500/20",
  },
  {
    mesh: "from-violet-400/26 via-fuchsia-400/8 to-sky-400/16",
    border: "border-violet-200/18",
    icon: "bg-violet-400/14 text-violet-100 ring-violet-300/28",
    progress: "from-violet-300 via-fuchsia-300 to-sky-300",
    shadow: "hover:shadow-violet-500/20",
  },
  {
    mesh: "from-rose-400/24 via-orange-300/8 to-amber-300/18",
    border: "border-rose-200/18",
    icon: "bg-rose-400/14 text-rose-100 ring-rose-300/28",
    progress: "from-rose-300 via-orange-300 to-amber-200",
    shadow: "hover:shadow-rose-500/20",
  },
  {
    mesh: "from-lime-300/22 via-emerald-300/8 to-cyan-300/16",
    border: "border-lime-200/18",
    icon: "bg-lime-300/14 text-lime-100 ring-lime-200/28",
    progress: "from-lime-200 via-emerald-300 to-cyan-300",
    shadow: "hover:shadow-lime-500/20",
  },
];

export function CourseCard({ course, index }: CourseCardProps) {
  const iconComponent = getCourseIcon(course.icon_name);
  const accent = accents[index % accents.length];

  return (
    <motion.article
      className={`group relative min-h-52 overflow-hidden rounded-2xl border ${accent.border} bg-white/[0.05] p-4 shadow-2xl shadow-black/25 backdrop-blur ${accent.shadow}`}
      variants={{
        hidden: { opacity: 0, y: 18 },
        show: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 300, damping: 24 },
        },
      }}
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <span
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent.mesh} opacity-80 transition-opacity duration-300 group-hover:opacity-100`}
      />
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-10 size-28 rounded-full bg-white/10 blur-2xl"
        animate={{
          opacity: [0.25, 0.55, 0.25],
          x: [0, 28, 0],
          y: [0, -18, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          delay: index * 0.18,
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <span className="pointer-events-none absolute -right-10 -top-12 size-32 rounded-full bg-white/10 blur-3xl" />
      <span className="pointer-events-none absolute inset-0 opacity-[0.13] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:18px_18px]" />

      <div className="relative flex h-full flex-col justify-between gap-5">
        <header className="flex items-start justify-between gap-4">
          <motion.span
            className={`grid size-11 place-items-center rounded-xl ring-1 ${accent.icon}`}
            animate={{ y: [0, -2, 0] }}
            transition={{
              delay: index * 0.12,
              duration: 2.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {createElement(iconComponent, { "aria-hidden": true, size: 20 })}
          </motion.span>
          <span className="rounded-full border border-white/10 bg-black/25 px-2.5 py-1 text-xs font-medium text-white/70">
            {course.progress}% done
          </span>
        </header>

        <section aria-label={`${course.title} progress`} className="space-y-4">
          <div className="space-y-2">
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-white/42">
              Active course
            </p>
            <h2 className="text-balance text-lg font-semibold text-white">
              {course.title}
            </h2>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-white/55">
              <span>Progress</span>
              <span>{course.progress}%</span>
            </div>
            <ProgressBar colorClassName={accent.progress} value={course.progress} />
          </div>
        </section>
      </div>
    </motion.article>
  );
}
