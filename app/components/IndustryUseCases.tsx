"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const industries = ["Healthcare", "E-commerce", "Logistics", "Real Estate"];

const useCases = {
  Healthcare: [
    {
      title: "Patient Appointment Management",
      description:
        "Automate 80% of routine appointment scheduling, cancellations, and medication reminders without manual intervention.",
      color: "border-primary",
    },
    {
      title: "HIPAA Compliant Protocols",
      description:
        "Security-first architecture ensuring all voice data is encrypted and handled according to the strictest medical standards.",
      color: "border-secondary",
    },
    {
      title: "Instant Triage Support",
      description:
        "Intelligently route urgent cases to human specialists while handling common inquiries through AI voice interaction.",
      color: "border-tertiary",
    },
  ],
  "E-commerce": [
    {
      title: "Order Tracking Automation",
      description:
        "Instantly provide customers with real-time order status, shipping updates, and delivery estimates.",
      color: "border-primary",
    },
    {
      title: "Product Recommendations",
      description:
        "AI-powered suggestions based on customer preferences, browsing history, and purchase patterns.",
      color: "border-secondary",
    },
    {
      title: "Return & Refund Processing",
      description:
        "Streamline return requests, generate shipping labels, and process refunds automatically.",
      color: "border-tertiary",
    },
  ],
  Logistics: [
    {
      title: "Fleet Management Updates",
      description:
        "Real-time coordination with drivers, automated route optimization, and delivery confirmations.",
      color: "border-primary",
    },
    {
      title: "Warehouse Inventory Queries",
      description:
        "Instant stock level checks, reorder alerts, and supplier coordination through voice commands.",
      color: "border-secondary",
    },
    {
      title: "Customs & Documentation",
      description:
        "Automated assistance with shipping documentation, customs clearance, and regulatory compliance.",
      color: "border-tertiary",
    },
  ],
  "Real Estate": [
    {
      title: "Property Inquiry Handling",
      description:
        "Answer questions about listings, schedule viewings, and provide detailed property information 24/7.",
      color: "border-primary",
    },
    {
      title: "Lead Qualification",
      description:
        "Automatically screen potential buyers and renters, collecting key information and preferences.",
      color: "border-secondary",
    },
    {
      title: "Virtual Property Tours",
      description:
        "Guide prospects through property features, amenities, and neighborhood details via voice.",
      color: "border-tertiary",
    },
  ],
};

export default function IndustryUseCases() {
  const [activeIndustry, setActiveIndustry] = useState("Healthcare");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16"
        >
          <div className="max-w-xl">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">
              Tailored for Your Vertical
            </h2>
            <p className="text-on-surface-variant">
              Our agents come pre-trained on industry-specific terminology and
              compliance requirements.
            </p>
          </div>
          <div className="flex gap-2 p-1.5 bg-surface-container-low rounded-xl">
            {industries.map((industry) => (
              <motion.button
                key={industry}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveIndustry(industry)}
                className={`px-6 py-2 rounded-lg font-bold text-sm transition-all ${
                  activeIndustry === industry
                    ? "bg-white shadow-sm text-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {industry}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            key={activeIndustry}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl overflow-hidden shadow-xl aspect-video relative group"
          >
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAV5y8-bL9IFVxXymsB3Dwzn2IaCxJJxrfGxun4-1SlRHZYIKNQwL2Zz-AKLXk2xo89dl9WTOnrUgz4mvXBL5mY9-ZH9MhSWwPLGsR8XH8CmFOPy55498KaElEdgourlLruoETK0SylSPagKV4DgjybbKDSKrcfNqiHdQZ3eA2AhXAHZlThjnosG7PG3skt2jRGHymDQUri5O6EcUqlFoIE7Rc7nW7yimOot6V92n0lRWXJdMS6Talef4yJZoGOC6Djlw4p1wzktGI"
              alt={activeIndustry}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
          </motion.div>

          <motion.div
            key={`${activeIndustry}-content`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {useCases[activeIndustry as keyof typeof useCases].map(
              (useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className={`p-6 rounded-2xl bg-surface-container-low border-l-4 ${useCase.color} cursor-pointer`}
                >
                  <h4 className="font-headline font-bold text-xl mb-2">
                    {useCase.title}
                  </h4>
                  <p className="text-on-surface-variant text-sm">
                    {useCase.description}
                  </p>
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}