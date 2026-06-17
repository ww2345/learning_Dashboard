"use client";

import { createElement } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { navigationItems } from "@/constants/navigation";
import { navigationIcons } from "@/lib/icons";

export function Sidebar() {
  const [activeItem, setActiveItem] = useState(navigationItems[0].label);
  const [collapsed, setCollapsed] = useState(false);
  const toggleIcon = collapsed ? navigationIcons.PanelLeftOpen : navigationIcons.PanelLeftClose;

  return (
    <>
      <aside
        className={`fixed inset-y-4 left-4 z-30 hidden rounded-2xl border border-white/10 bg-[#0b0d12]/85 p-3 shadow-2xl shadow-black/30 backdrop-blur-xl transition-[width] duration-300 md:flex md:w-20 md:flex-col ${collapsed ? "lg:w-20" : "lg:w-64"}`}
      >
        <header className="mb-8 flex items-center justify-between gap-3 px-1">
          <section className="flex min-w-0 items-center gap-3">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-cyan-300/10 text-cyan-100 ring-1 ring-cyan-200/20">
              {createElement(navigationIcons.Activity, { "aria-hidden": true, size: 22 })}
            </span>
            <div className={`hidden min-w-0 ${collapsed ? "lg:hidden" : "lg:block"}`}>
              <p className="truncate text-sm font-semibold text-white">LearnOS</p>
              <p className="truncate text-xs text-white/40">Student cockpit</p>
            </div>
          </section>

          <button
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            className={`hidden size-9 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-white/60 transition-colors hover:text-white ${collapsed ? "lg:hidden" : "lg:grid"}`}
            onClick={() => setCollapsed(true)}
            type="button"
          >
            <navigationIcons.PanelLeftClose aria-hidden="true" size={17} />
          </button>
        </header>

        <nav aria-label="Primary navigation" className="flex flex-1 flex-col gap-2">
          {navigationItems.map((item) => {
            const iconComponent = item.icon;
            const isActive = activeItem === item.label;

            return (
              <button
                className="relative flex h-12 items-center gap-3 overflow-hidden rounded-xl px-3 text-left text-sm text-white/58 transition-colors hover:text-white"
                key={item.label}
                onClick={() => setActiveItem(item.label)}
                type="button"
              >
                {isActive && (
                  <motion.span
                    className="absolute inset-0 rounded-xl bg-white/[0.08] ring-1 ring-white/10"
                    layoutId="desktop-nav-active"
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  />
                )}
                {createElement(iconComponent, {
                  "aria-hidden": true,
                  className: "relative shrink-0",
                  size: 20,
                })}
                <span className={`relative hidden truncate ${collapsed ? "lg:hidden" : "lg:block"}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        <button
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className={`mt-4 hidden h-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/60 transition-colors hover:text-white ${collapsed ? "lg:flex" : "lg:hidden"}`}
          onClick={() => setCollapsed(false)}
          type="button"
        >
          {createElement(toggleIcon, { "aria-hidden": true, size: 18 })}
        </button>
      </aside>

      <nav
        aria-label="Mobile navigation"
        className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-5 gap-1 rounded-2xl border border-white/10 bg-[#0b0d12]/90 p-2 shadow-2xl shadow-black/40 backdrop-blur-xl md:hidden"
      >
        {navigationItems.map((item) => {
          const iconComponent = item.icon;
          const isActive = activeItem === item.label;

          return (
            <button
              aria-label={item.label}
              className="relative grid h-12 place-items-center rounded-xl text-white/60"
              key={item.label}
              onClick={() => setActiveItem(item.label)}
              type="button"
            >
              {isActive && (
                <motion.span
                  className="absolute inset-0 rounded-xl bg-white/[0.08] ring-1 ring-white/10"
                  layoutId="mobile-nav-active"
                  transition={{ type: "spring", stiffness: 420, damping: 32 }}
                />
              )}
              {createElement(iconComponent, {
                "aria-hidden": true,
                className: "relative",
                size: 20,
              })}
            </button>
          );
        })}
      </nav>
    </>
  );
}
