"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [isListening, setIsListening] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const logos = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB1u23wDpZlLLo5tVEu-5X99fdJc0Fer5sZGkZvVDETzTk2OFMDH_RPWsCQ0XDFDcapzjyIjkDYdW8jB48qAHMHX_d9DSoeW3ejzsJAeL7k3ScBpYTX_ALIcSxRLbxBeCv03Mnk39GN-aAIs98mHlMj8CtUwWK01VaKUCT4Bn1xN_jWUqwOUsL7BDOekEwk6HTsf9AKU-SPCLQZNb-xgc5F4cUUCa5AwtzqeBcPnXCX9UBz3E6Nii7FQiy3IYZ2y1bCs19HggpUBgs",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAxUaPo32yltBnQQs9QgvQ3PnC4iXv53oD9TWoMu8HyY-Nl8xRxPE875u2I3BZIdh-eMFEACBpr623RSYV6ZQOWPNvIIr76bxQAHp1XP895vFt-_G9Yh6u76aKJFZ1xLFgguoPCxSM-Xy5INBlAJDHU5yD504lM2dSE8gwhzs-iUe_krWlwOgRmySExbE4LTn4-6F-_JaizFUvQiFJWrErBlQueFF6atn6Riv7CMowA01OpfhQwujV3RAdxe9lwb3Ka3lcPmULWBec",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBKiS9fTas1PVGTMdsTZci1J077hu9TnP-07oFtB-rZietlt9V3fMufGR8qux8UbudRtOKSEdoGlbktnXIZfbz_hJB-EvQ3dm-BFtrzcPOF3us1F5lSs4FOx6tqSSG0W9SiB3UE7UCLuKpcHoy9LTzZEpl0aziwrdNanWkRiNZnvEjPFX5jJm8U3zPKwCFViS7QiwtgX7F-YMWAfs3flWB54pbKK-RqEaTSZBgRYNZ64Z6TFnQZ_lg0-9kxhnMHaZYs9zV6fgKxuWw",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCySlx2qUfoMkNldAjX3UlyolbZNOh9qqQjf_wXBV7i1Mibhr1uyeJPognGrTLfahsfu4R7_B-GUkUl2mivHP5TjGWFWTrp17-YoYJsklgOkjJOcsytBVW_wZHpqQlwmpVnaABmBpN9wAxtOBijDkvs8EuKOgA8dHo3Dukcl7XOWTxp4X13uMp-fe_9iYvjjpOyKxGc41hUKrCVijZ606McmDSLDBmyVVREaz1XaYAVzOSsrFXT3QJSdKq6baAENKAUe49Ofh6Yjuw",
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Animated Background Gradient */}
      <motion.div
        initial={{ opacity: 0, scale: 1.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 items-center py-12">
        {/* Left Column - Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-700 font-semibold text-xs uppercase tracking-wider"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
            </span>
            The Future of Customer Experience
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1] text-gray-900"
          >
            Transform Customer{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Conversations
            </span>{" "}
            with AI Voice Agents
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-lg md:text-xl max-w-xl leading-relaxed"
          >
            Automate 10,000+ calls simultaneously. Reduce costs by 60%. Deliver
            24/7 human-like service that never tires.
          </motion.p>

          

          {/* Trust Bar */}
          <motion.div
            variants={itemVariants}
            className="pt-12 border-t border-gray-200"
          >
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-6 font-semibold">
              Trusted by 500+ global enterprises
            </p>
            <div className="flex flex-wrap gap-8 items-center opacity-60 hover:opacity-100 transition-opacity duration-500">
              {logos.map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <Image
                    src={logo}
                    alt={`Partner ${index + 1}`}
                    width={100}
                    height={24}
                    className="h-6 w-auto object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Interactive Demo Widget */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, rotateY: -20 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          {/* Glow Effect Behind Widget */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-[2.5rem] blur-2xl" />
          
          {/* Main Widget */}
          <div className="relative backdrop-blur-xl p-10 rounded-[2.5rem] bg-gradient-to-br from-gray-900/95 via-blue-900/95 to-purple-900/95 border border-white/10 shadow-2xl text-center text-white">
            {/* Microphone Icon */}
            <div className="mb-8">
              <motion.div
                animate={
                  isListening
                    ? {
                        scale: [1, 1.05, 1],
                        boxShadow: [
                          "0 0 50px rgba(96, 165, 250, 0.4)",
                          "0 0 80px rgba(96, 165, 250, 0.6)",
                          "0 0 50px rgba(96, 165, 250, 0.4)",
                        ],
                      }
                    : { scale: 1 }
                }
                transition={{ duration: 2, repeat: Infinity }}
                className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center shadow-[0_0_50px_rgba(96,165,250,0.4)]"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={2.5} 
                  stroke="currentColor" 
                  className="w-12 h-12 text-white"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" 
                  />
                </svg>
              </motion.div>
            </div>

            {/* Waveform Visualization */}
            <div className="space-y-4 mb-8">
              <div className="h-16 flex items-center justify-center gap-1.5">
                {[4, 8, 12, 6, 10, 12, 7, 5, 9, 11, 6, 8].map((height, i) => (
                  <motion.div
                    key={i}
                    animate={
                      isListening
                        ? {
                            height: [
                              `${height * 4}px`,
                              `${height * 6}px`,
                              `${height * 4}px`,
                            ],
                          }
                        : { height: `${height * 2}px` }
                    }
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.08,
                      ease: "easeInOut",
                    }}
                    className="w-1.5 bg-gradient-to-t from-blue-400 to-cyan-300 rounded-full"
                    style={{ height: `${height * 4}px` }}
                  />
                ))}
              </div>
              <motion.p
                animate={isListening ? { opacity: [0.6, 1, 0.6] } : { opacity: 0.6 }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-blue-200 font-medium text-sm"
              >
                {isListening ? "Listening to your command..." : "Ready to start conversation"}
              </motion.p>
            </div>

            {/* Action Button */}
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsListening(!isListening)}
              className="bg-white text-gray-900 w-full py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
            >
              {isListening ? "Stop Conversation" : "Start Conversation"}
            </motion.button>

            {/* Status Indicator */}
            <div className="mt-6 flex items-center justify-center gap-2 text-gray-400 text-xs uppercase tracking-widest font-semibold">
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-emerald-400"
              />
              AI Agent Online
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}