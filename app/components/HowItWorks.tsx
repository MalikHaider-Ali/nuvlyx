"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    icon: "tune",
    title: "Configure",
    description:
      "Define your agent's persona, tone of voice, and specific goals using our intuitive no-code dashboard.",
    color: "bg-blue-100",
    textColor: "text-blue-600",
    shadow: "shadow-blue-200/50",
    stepNumber: "1",
  },
  {
    icon: "school",
    title: "Train",
    description:
      "Upload your knowledge base, FAQs, and scripts. Our AI learns your brand logic in minutes.",
    color: "bg-blue-100",
    textColor: "text-blue-600",
    shadow: "shadow-blue-200/50",
    stepNumber: "2",
  },
  {
    icon: "rocket_launch",
    title: "Launch",
    description:
      "Connect your phone lines and start handling calls. Scale up or down instantly. Your agent goes live in 48 hours.",
    color: "bg-blue-100",
    textColor: "text-blue-600",
    shadow: "shadow-blue-200/50",
    stepNumber: "3",
  },
];

function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Launch Your First Agent in 2 Days
          </h2>
          <p className="text-gray-600 text-lg">
            Three simple steps to transition from traditional call centers to
            AI-powered efficiency.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-blue-200 z-0"
            style={{ transformOrigin: "left" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`w-24 h-24 rounded-full ${step.color} ${step.textColor} flex items-center justify-center mx-auto mb-8 shadow-lg ${step.shadow}`}
                >
                  <span className="material-symbols-outlined text-4xl">
                    {step.icon}
                  </span>
                </motion.div>
                <h3 className="font-headline font-bold text-2xl mb-4 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;