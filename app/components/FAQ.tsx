"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const faqs = [
  {
    question: "Does the AI really sound human?",
    answer:
      "Yes. We utilize advanced neural text-to-speech models that capture emotional nuances, breathing, and natural pauses to ensure a life-like experience.",
  },
  {
    question: "Can it handle complex multi-step tasks?",
    answer:
      "Absolutely. Our AI agents can manage complex workflows, remember context throughout conversations, and execute multi-step processes seamlessly.",
  },
  {
    question: "Is my customer data secure?",
    answer:
      "Security is our top priority. All data is encrypted end-to-end, stored in SOC 2 compliant data centers, and we maintain strict GDPR and HIPAA compliance.",
  },
  {
    question: "How many languages are supported?",
    answer:
      "We support 40+ languages and dialects, with natural pronunciation and cultural context awareness for each market.",
  },
  {
    question: "Can I integrate it with my CRM?",
    answer:
      "Yes. We offer native integrations with Salesforce, HubSpot, Zendesk, and most major CRM platforms. Custom integrations are available for enterprise clients.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-surface">
      <div className="max-w-3xl mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="font-headline text-3xl font-bold mb-12 text-center"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="bg-surface-container-low rounded-2xl overflow-hidden"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center group"
                whileHover={{ backgroundColor: "rgba(234, 237, 255, 0.5)" }}
              >
                <span className="font-bold">{faq.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="material-symbols-outlined text-outline"
                >
                  expand_more
                </motion.span>
              </motion.button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-6 text-on-surface-variant text-sm">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}