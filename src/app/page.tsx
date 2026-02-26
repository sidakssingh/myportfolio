"use client";

import { motion } from "framer-motion";

const definitions = [
  "a builder obsessed with making complex systems work, from power grid microservices to protein folding architectures.",
  "an electrical and computer engineering student at princeton, studying at the intersection of math, computation, and finance.",
  "believes the best way to understand something is to build it. always looking for the next hard problem.",
];

export default function Home() {
  return (
    <div className="absolute inset-0 flex items-center px-10 md:px-16">
      <div className="max-w-[36rem]">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="font-serif text-[2.75rem] md:text-[3rem] leading-tight text-primary"
        >
          sidak·singh
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-[0.75rem] text-tertiary font-sans mt-2"
        >
          /s&#618;&#712;d&#593;&#720;k s&#618;&#331;/
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.22 }}
          className="text-[0.9375rem] text-secondary font-serif mt-4"
        >
          noun, proper
        </motion.p>

        <div className="mt-5 flex flex-col gap-3.5">
          {definitions.map((def, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: 0.3 + i * 0.1,
                ease: "easeOut",
              }}
              className="flex gap-3"
            >
              <span className="text-[0.9375rem] text-tertiary font-serif shrink-0 w-4 text-right">
                {i + 1}.
              </span>
              <p className="text-[0.9375rem] leading-relaxed text-secondary font-serif">
                {def}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
