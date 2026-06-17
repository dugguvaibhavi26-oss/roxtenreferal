"use client";
import { ScrollSection } from "@/components/animations/ScrollSection";
import { motion } from "framer-motion";

const technologies = [
  "Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", 
  "Supabase", "Shopify", "OpenAI", "TailwindCSS", "Framer"
];

export const TrustMarquee = () => {
  return (
    <ScrollSection className="py-24 border-y border-white/5 bg-black/20 backdrop-blur-sm overflow-hidden flex flex-col">
      <div className="container mx-auto px-6 mb-12 text-center">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
          Trusted By Growing Agencies & Businesses
        </p>
      </div>
      
      <div className="flex relative w-full overflow-hidden">
        <motion.div 
          className="flex gap-16 items-center whitespace-nowrap pl-16"
          animate={{ x: [0, -1035] }} // Adjust based on content width
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          {[...technologies, ...technologies, ...technologies].map((tech, i) => (
            <span key={i} className="text-2xl font-heading font-bold text-white/30 hover:text-white transition-colors cursor-default">
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </ScrollSection>
  );
};
