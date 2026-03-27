"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "50+", label: "Early Adopters" },
  { value: "100K+", label: "Calls Processed" },
  { value: "90%+", label: "Satisfaction" },
  { value: "<300ms", label: "Response Time" },
];

function SocialProof() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-[#121f2b]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative space-y-3"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="text-4xl md:text-5xl font-headline font-bold text-blue-400"
              >
                {stat.value}
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="text-sm font-semibold text-gray-400 tracking-wider"
              >
                {stat.label}
              </motion.div>
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-12 bg-blue-800"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SocialProof;