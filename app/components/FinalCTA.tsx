"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-24 px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto rounded-[3rem] bg-gradient-to-br from-blue-600 to-blue-800 p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0 aura-visualizer"
        />

        <div className="relative z-10 max-w-2xl mx-auto space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-headline text-4xl md:text-6xl font-bold leading-tight"
          >
            Ready to Transform Your Customer Experience?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-blue-100 text-lg"
          >
            Join 500+ forward-thinking companies scaling their operations with
            nuvlyx.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-10 py-5 rounded-xl font-headline font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              Book Your Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-xl font-headline font-bold text-lg hover:bg-white/20 transition-colors"
            >
              View Documentation
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default FinalCTA;