"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function FloatingWidget() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
      className="fixed bottom-8 right-8 z-50"
    >
      <motion.button
        whileHover={{ scale: 1.1, rotate: 3 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-2xl w-16 h-16 flex items-center justify-center shadow-[0_20px_40px_rgba(19,27,46,0.1)] relative group"
      >
        <motion.div
          animate={
            isHovered
              ? { scale: [1, 1.1, 1] }
              : { scale: 1 }
          }
          transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
          className="bg-blue-600 text-white rounded-full p-4"
        >
          <span className="material-symbols-outlined">keyboard_voice</span>
        </motion.div>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-full right-0 mb-4 w-48 bg-white p-4 rounded-xl shadow-xl"
            >
              <div className="font-headline text-xs font-bold uppercase tracking-widest text-blue-600 mb-1">
                AI Voice Agent
              </div>
              <div className="text-[10px] text-slate-500">
                Speak to our architect
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.div>
  );
}