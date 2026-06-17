"use client";

import { motion } from "framer-motion";
import { Flame, Sparkles, Target } from "lucide-react";
import { dashboardStats, learnerProfile } from "@/constants/dashboard";

const flameSparks = [
  { x: -9, y: -16, delay: 0 },
  { x: 12, y: -18, delay: 0.4 },
  { x: 2, y: -26, delay: 0.8 },
];

export function HeroTile() {
  return (
    <motion.article
      className="group relative min-h-60 overflow-hidden rounded-2xl border border-cyan-200/15 bg-[linear-gradient(135deg,rgba(8,16,24,0.96),rgba(28,20,40,0.82))] p-5 shadow-2xl shadow-cyan-950/30 backdrop-blur md:col-span-2"
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
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(34,211,238,0.28),transparent_30%),radial-gradient(circle_at_82%_24%,rgba(244,114,182,0.18),transparent_30%),radial-gradient(circle_at_55%_90%,rgba(52,211,153,0.16),transparent_35%)] transition-opacity duration-300 group-hover:opacity-90" />
      <span className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:44px_44px]" />

      <div className="relative flex h-full flex-col justify-between gap-5">
        <header className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-medium text-cyan-100">
              <Sparkles aria-hidden="true" size={14} />
              Neural learning path online
            </span>
            <div className="space-y-3">
              <h1 className="text-balance text-3xl font-semibold tracking-normal text-white md:text-4xl">
                Welcome back, {learnerProfile.name}
              </h1>
              <p className="max-w-2xl text-sm leading-6 text-white/62">
                Your dashboard is synced with live course progress, weekly momentum, and today&apos;s next best study action.
              </p>
            </div>
          </div>

          <section
            aria-label="Daily learning streak"
            className="relative w-fit overflow-hidden rounded-2xl border border-orange-300/30 bg-orange-300/14 p-3 text-orange-50 shadow-[0_0_36px_rgba(251,146,60,0.16)]"
          >
            <motion.span
              aria-hidden="true"
              className="absolute inset-0 rounded-2xl bg-orange-300/10"
              animate={{ opacity: [0.35, 0.75, 0.35], scale: [1, 1.08, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="flex items-center gap-3">
              <motion.span
                className="relative grid size-11 place-items-center rounded-xl bg-gradient-to-br from-yellow-200/25 via-orange-300/25 to-rose-400/20 text-yellow-100 ring-1 ring-orange-200/30 shadow-[0_0_30px_rgba(251,191,36,0.38)]"
                animate={{ y: [0, -5, 0], scale: [1, 1.08, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.span
                  aria-hidden="true"
                  className="absolute size-8 rounded-full bg-orange-300/25"
                  animate={{ opacity: [0.25, 0.65, 0.25], scale: [0.8, 1.35, 0.8] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                />
                {flameSparks.map((spark) => (
                  <motion.span
                    aria-hidden="true"
                    className="absolute size-1.5 rounded-full bg-yellow-100"
                    key={`${spark.x}-${spark.y}`}
                    animate={{
                      opacity: [0, 0.9, 0],
                      x: [0, spark.x],
                      y: [0, spark.y],
                      scale: [0.5, 1, 0.45],
                    }}
                    transition={{
                      delay: spark.delay,
                      duration: 1.8,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                ))}
                <Flame aria-hidden="true" className="relative" size={23} />
              </motion.span>
              <div>
                <p className="text-2xl font-semibold leading-none">
                  {learnerProfile.streakDays}
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-orange-100/60">
                  day streak
                </p>
              </div>
            </div>
          </section>
        </header>

        <section className="grid gap-3 sm:grid-cols-3" aria-label="Learning metrics">
          {dashboardStats.map((stat) => (
            <motion.article
              className="rounded-xl border border-white/10 bg-black/20 p-3"
              key={stat.label}
              whileHover={{ y: -3, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <p className="text-xl font-semibold text-white">{stat.value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/40">
                {stat.label}
              </p>
            </motion.article>
          ))}
        </section>

        <section
          aria-label="Weekly goal"
          className="flex items-center gap-3 text-sm text-white/70"
        >
          <Target aria-hidden="true" className="text-emerald-200" size={18} />
          <span>{learnerProfile.weeklyGoal}% of this week&apos;s learning goal is complete.</span>
        </section>
      </div>
    </motion.article>
  );
}
