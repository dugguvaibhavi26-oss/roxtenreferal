"use client";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export const AboutRoxten = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-black border-t border-white/5">
      <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="glass-panel p-10 md:p-16 text-center border-white/10 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-white/80">The Execution Engine</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-heading font-black mb-6 uppercase tracking-tight text-white">
            Who is Roxten Studios?
          </h2>
          
          <p className="text-base md:text-lg text-white/60 mb-10 max-w-3xl mx-auto leading-relaxed">
            Roxten Studios is an elite, invisible technology partner for marketing agencies and consultants. We provide enterprise-grade web development, custom software, and digital execution completely under your brand. You sell the vision, we build the reality.
          </p>

          <Link href="https://roxten.com" target="_blank" rel="noopener noreferrer">
            <button className="relative group overflow-hidden rounded-full p-[1px] inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-white/30 via-white to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full blur-sm" />
              <div className="relative h-14 px-8 flex items-center justify-center gap-2 bg-black backdrop-blur-2xl border border-white/20 rounded-full text-base font-medium text-white group-hover:bg-white/5 transition-colors duration-500">
                Visit Main Website
                <ExternalLink className="w-4 h-4 ml-1 group-hover:scale-110 transition-transform" />
              </div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
