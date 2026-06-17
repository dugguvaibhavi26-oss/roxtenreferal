"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export const FloatingCommissions = () => {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -400]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-[15%] left-[5%] md:left-[15%] glass border border-white/10 p-4 rounded-xl backdrop-blur-md opacity-60 flex-col gap-1 w-48 shadow-[0_0_30px_rgba(255,255,255,0.05)] hidden sm:flex"
        animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="text-emerald-400 font-mono font-bold">+₹12,000</div>
        <div className="text-xs text-white/50 uppercase tracking-widest">Ecommerce Store</div>
      </motion.div>

      <motion.div 
        style={{ y: y2 }}
        className="absolute top-[50%] right-[5%] md:right-[15%] glass border border-white/10 p-4 rounded-xl backdrop-blur-md opacity-40 flex-col gap-1 w-48 shadow-[0_0_30px_rgba(255,255,255,0.05)] hidden sm:flex"
        animate={{ y: [0, 30, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="text-emerald-400 font-mono font-bold">+₹8,500</div>
        <div className="text-xs text-white/50 uppercase tracking-widest">Business Website</div>
      </motion.div>

      <motion.div 
        style={{ y: y3 }}
        className="absolute top-[75%] left-[10%] md:left-[25%] glass border border-white/10 p-4 rounded-xl backdrop-blur-md opacity-50 flex flex-col gap-1 w-48 shadow-[0_0_30px_rgba(255,255,255,0.05)] hidden sm:flex"
        animate={{ y: [0, -15, 0], rotate: [0, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <div className="text-emerald-400 font-mono font-bold">+₹5,000</div>
        <div className="text-xs text-white/50 uppercase tracking-widest">Landing Page</div>
      </motion.div>
    </div>
  );
};
