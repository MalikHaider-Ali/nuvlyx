"use client";

import { motion } from "framer-motion";

const footerLinks = {
  Solutions: ["Customer Support", "Sales Development", "Voice Analytics"],
  Company: ["About Us", "Case Studies", "Careers"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer className="bg-white w-full pt-16 pb-8 font-body text-sm leading-relaxed">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-lg font-bold text-blue-600 mb-4 block font-headline">
            nuvlyx
          </span>
          <p className="text-blue-500 max-w-[200px]">
            Architecting the future of voice-first enterprise communication.
          </p>
        </motion.div>

        {Object.entries(footerLinks).map(([category, links], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
            className="space-y-4"
          >
            <h5 className="font-bold text-blue-700">
              {category}
            </h5>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <motion.a
                    whileHover={{ x: 2 }}
                    href="#"
                    className="text-blue-500 hover:text-blue-700 underline-offset-4 hover:underline transition-all ease-in-out duration-200"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-7xl mx-auto px-8 pt-16 mt-16 border-t border-blue-100 flex flex-col sm:flex-row justify-between items-center gap-4"
      >
        <p className="text-blue-500">
          © 2024 nuvlyx AI. All rights reserved.
        </p>
        <div className="flex gap-6">
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            href="#"
            className="text-blue-500 hover:text-blue-700 transition-colors"
          >
            <span className="material-symbols-outlined">language</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            href="#"
            className="text-blue-500 hover:text-blue-700 transition-colors"
          >
            <span className="material-symbols-outlined">group</span>
          </motion.a>
        </div>
      </motion.div>
    </footer>
  );
}