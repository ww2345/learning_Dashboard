"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  value: number;
  colorClassName?: string;
}

export function ProgressBar({
  value,
  colorClassName = "from-cyan-300 via-emerald-300 to-lime-200",
}: ProgressBarProps) {
  const boundedValue = Math.min(Math.max(value, 0), 100);

  return (
    <div
      className="relative h-2.5 overflow-hidden rounded-full bg-black/30 ring-1 ring-white/10"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={boundedValue}
    >
      <motion.span
        className={`absolute inset-y-0 left-0 overflow-hidden w-full origin-left rounded-full bg-gradient-to-r ${colorClassName} shadow-[0_0_22px_rgba(103,232,249,0.35)]`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: boundedValue / 100 }}
        transition={{ type: "spring", stiffness: 120, damping: 22 }}
      >
        <motion.span
          aria-hidden="true"
          className="absolute inset-y-0 w-10 bg-white/45"
          initial={{ x: "-120%", opacity: 0 }}
          animate={{ x: "260%", opacity: [0, 0.8, 0] }}
          transition={{
            delay: 0.6,
            duration: 1.8,
            repeat: Infinity,
            repeatDelay: 1.4,
            ease: "easeInOut",
          }}
        />
      </motion.span>
    </div>
  );
}
