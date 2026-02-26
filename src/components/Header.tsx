"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import TimeDisplay from "./TimeDisplay";
import { motion, AnimatePresence } from "framer-motion";

const routes = [
  { href: "/", label: "about" },
  { href: "/experience", label: "experiences" },
  { href: "/projects", label: "projects" },
  { href: "/leadership", label: "leadership" },
  { href: "/awards", label: "awards" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentTab =
    routes.find((r) =>
      r.href === "/"
        ? pathname === "/"
        : pathname === r.href || pathname.startsWith(r.href + "/")
    ) ?? routes[0];

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="w-full px-10 pt-7 flex items-center justify-between relative z-50">
      {/* Timer — non-clickable */}
      <span className="font-sans text-[0.78rem] text-secondary tabular-nums select-none">
        <TimeDisplay />
      </span>

      {/* Dropdown nav */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setOpen((v) => !v)}
          className="font-serif text-[0.85rem] text-secondary hover:text-primary transition-colors flex items-center gap-1.5"
          aria-expanded={open}
        >
          <span>{currentTab.label}</span>
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.18 }}
            className="inline-block text-[0.70rem] leading-none"
          >
            ↓
          </motion.span>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, scaleY: 0, transformOrigin: "top" }}
              animate={{ opacity: 1, scaleY: 1 }}
              exit={{ opacity: 0, scaleY: 0 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="absolute right-0 top-full mt-2 flex flex-col gap-0.5 bg-[#0C0C0B] border border-[#4A4744]/30 py-3 px-5 min-w-[130px]"
              style={{ transformOrigin: "top right" }}
            >
              {routes.map((route) => {
                const isActive =
                  route.href === "/"
                    ? pathname === "/"
                    : pathname === route.href ||
                      pathname.startsWith(route.href + "/");
                return (
                  <Link
                    key={route.href}
                    href={route.href}
                    onClick={() => setOpen(false)}
                    className={`font-serif text-[0.85rem] py-0.5 transition-colors ${
                      isActive
                        ? "text-primary"
                        : "text-secondary hover:text-primary"
                    }`}
                  >
                    {route.label}
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
