import { ScrollSection } from "@/components/animations/ScrollSection";

export const TechnologyStack = () => {
  const stack = [
    { name: "Next.js", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "TypeScript", category: "Language" },
    { name: "Node.js", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Supabase", category: "Backend" },
    { name: "Firebase", category: "Backend" },
    { name: "OpenAI", category: "AI" },
    { name: "Shopify", category: "eCommerce" },
    { name: "WooCommerce", category: "eCommerce" },
    { name: "Stripe", category: "Payments" },
    { name: "TailwindCSS", category: "Styling" },
  ];

  return (
    <section className="py-32 bg-black/40 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-heading font-bold mb-6">Enterprise Technology Ecosystem</h2>
        <p className="text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
          We build with the modern, scalable stack trusted by the world's best companies.
        </p>

        <ScrollSection>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {stack.map((tech, i) => (
              <div 
                key={i} 
                className="px-6 py-4 glass-card rounded-xl hover:bg-white/10 hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-default group border border-white/5"
              >
                <div className="text-lg font-bold font-heading text-white/80 group-hover:text-white transition-colors">
                  {tech.name}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-blue-400 mt-1 transition-colors">
                  {tech.category}
                </div>
              </div>
            ))}
          </div>
        </ScrollSection>
      </div>
    </section>
  );
};
