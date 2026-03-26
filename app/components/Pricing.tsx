"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const plans = [
  {
    name: "Starter",
    price: "$499",
    period: "/mo",
    description: "Perfect for getting started",
    features: [
      { text: "1,000 Minutes Included", included: true },
      { text: "2 AI Agents", included: true },
      { text: "Email Support", included: true },
      { text: "Custom Voice Models", included: false },
    ],
    buttonText: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: "$1,299",
    period: "/mo",
    description: "Best for growing teams",
    features: [
      { text: "5,000 Minutes Included", included: true },
      { text: "Unlimited AI Agents", included: true },
      { text: "CRM Integrations", included: true },
      { text: "Custom Voice Cloning", included: true },
    ],
    buttonText: "Try Pro Now",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations",
    features: [
      { text: "Unlimited Minutes", included: true },
      { text: "Dedicated Success Manager", included: true },
      { text: "On-Premise Deployment", included: true },
      { text: "SLA Guarantees", included: true },
    ],
    buttonText: "Contact Sales",
    popular: false,
  },
];

function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 text-lg">
            Pay for the value you get. No hidden fees or surprise overages.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative rounded-2xl flex flex-col transition-all duration-300 ${
                plan.popular
                  ? "bg-[#121f2b] text-white shadow-2xl scale-105 ring-2 ring-blue-400 ring-offset-2"
                  : "bg-white text-gray-900 shadow-lg border border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-amber-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                  MOST POPULAR
                </div>
              )}

              <div className="p-8 flex flex-col h-full">
                {/* Plan Name */}
                <div className="mb-4">
                  <h3 className={`text-xl font-bold ${
                    plan.popular ? "text-white" : "text-gray-900"
                  }`}>
                    {plan.name}
                  </h3>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className={`font-headline font-bold ${
                    plan.popular ? "text-5xl text-white" : "text-5xl text-gray-900"
                  }`}>
                    {plan.price}
                    {plan.period && (
                      <span className={`text-lg font-normal ml-1 ${
                        plan.popular ? "text-gray-300" : "text-gray-500"
                      }`}>
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      className={`flex items-center gap-3 text-sm ${
                        !feature.included && !plan.popular
                          ? "text-gray-400"
                          : plan.popular && !feature.included
                          ? "text-gray-400"
                          : plan.popular
                          ? "text-gray-200"
                          : "text-gray-600"
                      }`}
                    >
                      <span className="text-lg">
                        {feature.included ? "✓" : "✗"}
                      </span>
                      {feature.text}
                    </motion.li>
                  ))}
                </ul>

                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
                      : plan.name === "Starter"
                      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
                      : "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
                  }`}
                >
                  {plan.buttonText}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;