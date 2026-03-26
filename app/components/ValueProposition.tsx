"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const benefits = [
  {
    icon: "savings",
    title: "60% Cost Reduction",
    description:
      "Lower your operational overhead by automating repetitive queries with human-like precision.",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    icon: "call_split",
    title: "10,000+ Concurrent",
    description:
      "Infinite scalability without adding headcount. Every customer gets answered in under 1 second.",
    bgColor: "bg-indigo-50",
    textColor: "text-indigo-600",
  },
  {
    icon: "schedule",
    title: "24/7 Availability",
    description:
      "Global coverage across all time zones. No shifts, no breaks, just consistent excellence.",
    bgColor: "bg-cyan-50",
    textColor: "text-cyan-600",
  },
  {
    icon: "thumb_up",
    title: "99% Satisfaction",
    description:
      "Advanced NLP ensures your customers feel heard, understood, and valued every time.",
    bgColor: "bg-sky-50",
    textColor: "text-sky-600",
  },
];

function ValueProposition() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-gray-900">
            Unrivaled Scalability & Performance
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Engineering the next generation of conversational AI to handle your
            most complex enterprise workflows.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="p-8 rounded-2xl bg-white hover:shadow-lg transition-all duration-300 group cursor-pointer border border-gray-100"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`w-12 h-12 rounded-xl ${benefit.bgColor} ${benefit.textColor} flex items-center justify-center mb-6`}
              >
                <span className="material-symbols-outlined text-2xl">{benefit.icon}</span>
              </motion.div>
              <h3 className="font-headline text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ValueProposition;