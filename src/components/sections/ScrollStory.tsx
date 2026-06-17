"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Link as LinkIcon, Briefcase, IndianRupee, Banknote } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const ScrollStory = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !panelsRef.current) return;

    const panels = gsap.utils.toArray<HTMLElement>(".story-panel");
    const totalPanels = panels.length;

    const ctx = gsap.context(() => {
      gsap.to(panels, {
        xPercent: -100 * (totalPanels - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (totalPanels - 1),
          end: () => "+=" + panelsRef.current?.offsetWidth,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      title: "CONNECT",
      desc: "Join our exclusive network of elite agency partners.",
      icon: <LinkIcon className="w-16 h-16 text-white/30" />
    },
    {
      title: "REFER",
      desc: "Share your unique link with clients needing enterprise web technology.",
      icon: <ArrowRight className="w-16 h-16 text-white/30" />
    },
    {
      title: "WE BUILD",
      desc: "Our world-class team executes the project flawlessly.",
      icon: <Briefcase className="w-16 h-16 text-white/30" />
    },
    {
      title: "CLIENT PAYS",
      desc: "The client pays the invoice securely through our platform.",
      icon: <Banknote className="w-16 h-16 text-white/30" />
    },
    {
      title: "YOU EARN",
      desc: "You receive a 15% lifetime commission on every payment. Automatically.",
      icon: <IndianRupee className="w-16 h-16 text-emerald-400/80" />
    }
  ];

  return (
    <section ref={containerRef} className="h-screen w-full overflow-hidden bg-black relative flex items-center">
      {/* Background cinematic grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)] opacity-50 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-white opacity-[0.02] pointer-events-none" />

      <div ref={panelsRef} className="flex w-[500vw] h-full">
        {steps.map((step, i) => (
          <div key={i} className="story-panel w-screen h-full flex flex-col justify-center items-center relative px-6">
            
            {/* Massive Background Number */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-white/[0.015] whitespace-nowrap pointer-events-none select-none font-mono tracking-tighter">
              0{i + 1}
            </div>

            <div className="glass-card p-12 md:p-16 max-w-2xl w-full border-white/10 bg-black/40 backdrop-blur-3xl text-center relative z-10 shadow-[0_0_50px_rgba(255,255,255,0.02)] hover:shadow-[0_0_80px_rgba(255,255,255,0.06)] hover:border-white/20 transition-all duration-700">
              <div className="mb-8 flex justify-center">{step.icon}</div>
              <h2 className="text-5xl md:text-7xl font-heading font-black mb-6 text-white tracking-tighter uppercase">{step.title}</h2>
              <p className="text-xl text-white/50 leading-relaxed font-light">{step.desc}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};
