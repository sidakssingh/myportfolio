"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function TransitionContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div style={{ perspective: "1400px" }} className="absolute inset-0">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          style={{ transformOrigin: "50% 0%" }}
          className="absolute inset-0"
          initial={{ rotateX: -75, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: 60, opacity: 0 }}
          transition={{
            rotateX: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
            opacity: { duration: 0.22 },
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
