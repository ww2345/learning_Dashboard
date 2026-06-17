"use client";

import { motion } from "framer-motion";
import { GitCommitHorizontal, TrendingUp } from "lucide-react";
import { activityCells } from "@/constants/dashboard";

const intensityClasses = [
  "bg-white/[0.04]",
  "bg-[#0e4429]",
  "bg-[#006d32]",
  "bg-[#26a641]",
  "bg-[#39d353] shadow-[0_0_12px_rgba(57,211,83,0.28)]",
];

export function ActivityTile() {
  const activeCells = activityCells.filter((cell) => cell > 0).length;
  const peakLevel = Math.max(...activityCells);

  return (
    <motion.article
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(13,17,23,0.98),rgba(9,14,20,0.92))] p-4 shadow-2xl shadow-black/35 backdrop-blur md:col-span-2"
      variants={{
        hidden: { opacity: 0, y: 18 },
        show: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 300, damping: 24 },
        },
      }}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_14%,rgba(57,211,83,0.12),transparent_28%),radial-gradient(circle_at_86%_88%,rgba(34,197,94,0.1),transparent_30%)]" />
      <span className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <header className="shrink-0 space-y-3 md:max-w-[18rem]">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-emerald-100/90">
            <GitCommitHorizontal aria-hidden="true" size={14} />
            Activity
          </div>
          <div className="space-y-1">
            <h2 className="text-xl font-semibold text-white">Learning rhythm</h2>
            <p className="text-sm leading-6 text-white/52">
              A compact overview of recent study consistency.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <section className="relative overflow-hidden rounded-xl border border-emerald-300/15 bg-emerald-300/10 px-3 py-2 text-emerald-50">
              <motion.span
                aria-hidden="true"
                className="absolute inset-0 bg-emerald-200/10"
                animate={{ opacity: [0.15, 0.5, 0.15], scale: [1, 1.12, 1] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative flex items-center gap-2">
                <TrendingUp aria-hidden="true" size={16} />
                <span className="text-sm font-semibold">+18%</span>
              </div>
            </section>

            <div className="text-[0.68rem] uppercase tracking-[0.18em] text-white/38">
              <p>{activeCells} active cells</p>
              <p>Peak level {peakLevel}</p>
            </div>
          </div>
        </header>

        <section className="w-full shrink-0 md:w-auto">
          <div className="mb-2 flex items-center justify-between text-[0.62rem] uppercase tracking-[0.16em] text-white/30">
            <span>Recent weeks</span>
            <span>Today</span>
          </div>

          <div className="w-fit max-w-full rounded-2xl border border-white/6 bg-black/18 p-3">
            <section
              aria-label="Ten week contribution graph"
              className="grid w-fit grid-flow-col grid-rows-7 gap-1.5"
            >
              {activityCells.map((intensity, index) => (
                <motion.span
                  aria-hidden="true"
                  className={`size-3 rounded-[3px] ${intensityClasses[intensity]}`}
                  key={`${intensity}-${index}`}
                  initial={{ opacity: 0, scale: 0.75 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.22 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 22,
                    delay: index * 0.008,
                  }}
                />
              ))}
            </section>
          </div>

          <footer className="mt-3 flex items-center justify-between gap-3 text-[0.65rem] uppercase tracking-[0.16em] text-white/34">
            <span>Less</span>
            <div className="flex items-center gap-1.5">
              {intensityClasses.map((intensityClass, index) => (
                <span
                  aria-hidden="true"
                  className={`size-2.5 rounded-[2px] ${intensityClass}`}
                  key={`${intensityClass}-${index}`}
                />
              ))}
            </div>
            <span>More</span>
          </footer>
        </section>
      </div>
    </motion.article>
  );
}
