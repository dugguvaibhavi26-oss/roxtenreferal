"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ParticleGalaxy } from "@/components/effects/ParticleGalaxy";
import { FloatingCommissions } from "@/components/effects/FloatingCommissions";
import { InteractiveSpotlight } from "@/components/effects/InteractiveSpotlight";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

const MagneticWord = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    if (!ref.current) return;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.25, y: middleY * 0.25 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block cursor-default"
    >
      {children}
    </motion.div>
  );
};

export const Hero = () => {
  return (
    <>
      <InteractiveSpotlight />
      <section className="relative min-h-[100vh] flex flex-col pt-32 pb-8 overflow-hidden bg-[#000000]">
        {/* Particle Canvas Layer */}
        <ParticleGalaxy />
        
        {/* Floating Glass Commissions */}
        <FloatingCommissions />

        {/* Shadow Overlay for text readability at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 pointer-events-none z-[1]" />
        
        <div className="container mx-auto px-6 relative z-10 flex-1 flex flex-col">
          
          {/* Top Title Area */}
          <div className="flex-1 flex flex-col justify-center items-center pb-12 mix-blend-screen">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-12 backdrop-blur-md animate-fade-in hover:bg-white/5 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.05)]">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span>
              <span className="text-sm font-medium tracking-wide text-white">The Roxten Referral Program</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-black tracking-tighter text-white leading-[1.1] text-center flex flex-col gap-2">
              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
                <MagneticWord>CONNECT</MagneticWord>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}>
                <MagneticWord>REFER</MagneticWord>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}>
                <MagneticWord>REWARD</MagneticWord>
              </motion.div>
            </h1>
          </div>

          {/* Bottom Content Area */}
          <div className="mt-auto pt-8 text-center pb-8 relative z-20">
            <p className="text-base md:text-lg text-white/50 mb-12 max-w-xl mx-auto leading-relaxed animate-fade-in-up delay-700 px-4">
              Refer a client. We handle the work, and you earn a commission.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up delay-[800ms]">
              <Link href="/register">
                {/* Liquid Glass Button Concept */}
                <button className="relative group overflow-hidden rounded-full p-[1px]">
                  <span className="absolute inset-0 bg-gradient-to-r from-white/30 via-white to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full blur-sm" />
                  <div className="relative h-14 px-8 flex items-center justify-center gap-2 bg-black/80 backdrop-blur-2xl border border-white/20 rounded-full text-lg font-medium text-white group-hover:bg-white/10 transition-colors duration-500">
                    Start Earning Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              </Link>
              <Link href="/login">
                <button className="relative group h-14 px-8 flex items-center justify-center rounded-full text-lg font-medium text-white/70 hover:text-white transition-colors duration-300">
                  <span className="absolute inset-0 border border-white/10 rounded-full group-hover:scale-105 group-hover:border-white/30 transition-all duration-500" />
                  Partner Login
                </button>
              </Link>
            </div>
          </div>
          
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 bg-black py-12 md:py-24 border-t border-white/5">
        <div className="container mx-auto px-2 md:px-6">
          <div className="flex justify-between items-stretch gap-2 md:gap-12 max-w-5xl mx-auto">
            {[
              { label: "Commission", value: "Up to 20%" },
              { label: "Earn Up To", value: "₹50K+" },
              { label: "Payouts", value: "Monthly" }
            ].map((stat, i) => (
              <div key={i} className="flex-1 flex flex-col items-center justify-center py-4 px-1 md:p-8 glass-card border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 md:hover:-translate-y-2 group relative overflow-hidden rounded-lg md:rounded-2xl text-center">
                <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="text-lg sm:text-2xl md:text-5xl font-heading font-black tracking-tighter text-white mb-2 md:mb-4 relative z-10">{stat.value}</span>
                <span className="text-[7px] sm:text-[9px] md:text-xs tracking-[0.1em] md:tracking-[0.4em] font-mono uppercase text-white/40 relative z-10">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
