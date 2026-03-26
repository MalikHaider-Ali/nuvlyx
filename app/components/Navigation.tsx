"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : "shadow-[0_20px_40px_rgba(19,27,46,0.04)]"
      } bg-white/70 backdrop-blur-xl`}
    >
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xl font-bold tracking-tighter text-blue-800 font-headline"
        >
          nuvlyx
        </motion.div>
        
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-800 text-white px-6 py-2.5 rounded-lg font-headline font-bold text-sm hover:bg-blue-700 transition-colors duration-200"
        >
          Book Demo
        </motion.button>
      </div>
    </motion.nav>
  );
}

export default Navigation;