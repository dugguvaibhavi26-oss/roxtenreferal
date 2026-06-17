"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const ReferralHowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    {
      step: "01",
      title: "Get Your Unique Link",
      description: "Sign up for the dashboard and get your unique referral link instantly."
    },
    {
      step: "02",
      title: "Share With Your Network",
      description: "Share your link with agencies, consultants, or business owners who need digital solutions."
    },
    {
      step: "03",
      title: "We Close & Execute",
      description: "When they submit a project, our team handles the sales, scoping, and enterprise-grade execution."
    },
    {
      step: "04",
      title: "You Get Paid",
      description: "Earn up to a 20% commission on the lifetime value of the client. Unlock higher tiers as you refer more."
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden" id="how-it-works" ref={containerRef}>
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-heading font-black mb-4 uppercase tracking-tight text-white">How It Works</h2>
          <p className="text-lg text-white/50 tracking-widest uppercase font-mono text-sm">Four simple steps to recurring revenue.</p>
        </div>

        <div className="relative">
          {/* Background Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2"></div>
          
          {/* Animated Foreground Timeline Line */}
          <motion.div 
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-white origin-top -translate-x-1/2 shadow-[0_0_15px_rgba(255,255,255,0.5)]"
            style={{ scaleY: lineHeight }}
          />

          <div className="space-y-24">
            {steps.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className={`relative flex items-center md:justify-between flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-black border-2 border-white -translate-x-1/2 shadow-[0_0_10px_rgba(255,255,255,0.8)] z-10" />

                  {/* Spacer for alternate sides on desktop */}
                  <div className="hidden md:block w-[45%]" />

                  {/* Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="w-full md:w-[45%] pl-16 md:pl-0"
                  >
                    <div className="glass-card p-8 hover:border-white/30 transition-all duration-300 relative group overflow-hidden">
                      {/* Subtle hover gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <h3 className="text-xl font-heading font-bold mb-3 text-white relative z-10">{item.title}</h3>
                      <p className="text-white/60 leading-relaxed relative z-10 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
