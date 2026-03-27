"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section ref={ref} className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col gap-6 mb-12 md:mb-16"
        >
          <div className="text-center md:text-left max-w-xl mx-auto md:mx-0">
            <h2 className="font-headline text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              Tailored for Your Vertical
            </h2>
            <p className="text-on-surface-variant text-sm md:text-base">
              Our agents come pre-trained on industry-specific terminology and
              compliance requirements.
            </p>
          </div>
          
          {/* Mobile-friendly industry selector */}
          <div className="relative">
            {/* Horizontal scroll container for mobile */}
            <div className="overflow-x-auto scrollbar-hide md:overflow-visible pb-2">
              <div className="flex gap-2 p-1.5 bg-surface-container-low rounded-xl min-w-max md:min-w-0 md:w-auto md:justify-center mx-auto">
                {industries.map((industry) => (
                  <motion.button
                    key={industry}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveIndustry(industry)}
                    className={`px-4 md:px-6 py-2 rounded-lg font-bold text-sm whitespace-nowrap transition-all ${
                      activeIndustry === industry
                        ? "bg-white shadow-sm text-primary"
                        : "text-on-surface-variant hover:text-primary"
                    }`}
                  >
                    {industry}
                  </motion.button>
                ))}
              </div>
            </div>
            {/* Gradient fade indicators for mobile */}
            {isMobile && (
              <>
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-surface to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-surface to-transparent pointer-events-none" />
              </>
            )}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            key={activeIndustry}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl aspect-video relative group"
          >
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAV5y8-bL9IFVxXymsB3Dwzn2IaCxJJxrfGxun4-1SlRHZYIKNQwL2Zz-AKLXk2xo89dl9WTOnrUgz4mvXBL5mY9-ZH9MhSWwPLGsR8XH8CmFOPy55498KaElEdgourlLruoETK0SylSPagKV4DgjybbKDSKrcfNqiHdQZ3eA2AhXAHZlThjnosG7PG3skt2jRGHymDQUri5O6EcUqlFoIE7Rc7nW7yimOot6V92n0lRWXJdMS6Talef4yJZoGOC6Djlw4p1wzktGI"
              alt={activeIndustry}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
          </motion.div>

          <motion.div
            key={`${activeIndustry}-content`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2 space-y-4 md:space-y-6 lg:space-y-8"
          >
            {useCases[activeIndustry as keyof typeof useCases].map(
              (useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: isMobile ? 0 : 5 }}
                  className={`p-4 md:p-5 lg:p-6 rounded-xl md:rounded-2xl bg-surface-container-low border-l-4 ${useCase.color} cursor-pointer hover:shadow-md transition-shadow`}
                >
                  <h4 className="font-headline font-bold text-base md:text-lg lg:text-xl mb-2">
                    {useCase.title}
                  </h4>
                  <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </div>

      {/* Add custom scrollbar hiding styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}