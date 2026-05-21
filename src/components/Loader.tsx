"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  "INITIALIZING SYSTEM ARCHITECTURE...",
  "ESTABLISHING SECURE PROTOCOLS...",
  "MAPPING COMPONENT HEURISTICS...",
  "LOADING SCALABLE CORE SYSTEMS...",
  "OPTIMIZING RENDER LIFECYCLES...",
  "STATUS: OPTIMAL. BOOT COMPLETE."
];

export function Loader() {
  const [progress, setProgress] = useState(0);
  const [msgIndex, setMsgIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Quick progress loader
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 800);
          return 100;
        }
        const diff = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + diff, 100);
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Cycle messages based on loading phases
    const index = Math.min(Math.floor((progress / 100) * messages.length), messages.length - 1);
    setMsgIndex(index);
  }, [progress]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#09090B] select-none"
        >
          {/* Subtle Glow Orbs in Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] glow-orb" />
          <div className="absolute top-1/3 left-1/3 w-[200px] h-[200px] bg-highlight/15 rounded-full blur-[80px] glow-orb" />

          {/* Elegant Tech Terminal Border */}
          <div className="relative p-12 max-w-md w-full border border-white/5 bg-secondary/40 backdrop-blur-md rounded-2xl flex flex-col items-center gap-6">
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

            {/* Brand Logo */}
            <div className="font-heading font-black text-2xl tracking-widest text-text-primary flex items-center gap-2">
              <span className="text-primary font-bold">ESSIA</span>MAHMOUDI
            </div>

            {/* Simulated terminal lines */}
            <div className="h-6 flex items-center text-center">
              <p className="text-[10px] uppercase font-mono tracking-widest text-primary font-medium animate-pulse">
                {messages[msgIndex]}
              </p>
            </div>

            {/* Main Progress Indicator */}
            <div className="relative w-full h-[2px] bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-accent to-highlight"
              />
            </div>

            {/* Digital Percentage Counter */}
            <div className="font-heading font-light text-5xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
              {progress}<span className="text-lg text-primary ml-1">%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
