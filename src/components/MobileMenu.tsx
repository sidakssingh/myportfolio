"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const routes = [
  { href: "/about", label: "about" },
  { href: "/experience", label: "experience" },
  { href: "/projects", label: "projects" },
  { href: "/leadership", label: "leadership" },
  { href: "/awards", label: "awards" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-ivory"
        >
          <div className="flex justify-end px-6 pt-6">
            <button
              onClick={onClose}
              className="text-secondary hover:text-primary transition-colors"
              aria-label="Close menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center gap-8 pt-20">
            {routes.map((route) => {
              const isActive =
                pathname === route.href ||
                (route.href === "/about" && pathname === "/");
              return (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={onClose}
                  className={`font-serif text-2xl transition-colors duration-200 ${
                    isActive
                      ? "text-primary underline underline-offset-4"
                      : "text-secondary hover:text-accent"
                  }`}
                >
                  {route.label}
                </Link>
              );
            })}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
