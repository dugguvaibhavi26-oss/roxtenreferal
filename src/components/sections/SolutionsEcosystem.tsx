import { ScrollSection } from "@/components/animations/ScrollSection";

export const SolutionsEcosystem = () => {
  const categories = [
    {
      title: "Website Solutions",
      solutions: ["Digital Launchpad", "Brand & Build", "Local Business Kickstart", "Service Business", "Portfolio Sites", "Corporate Sites", "Landing Pages"]
    },
    {
      title: "eCommerce Solutions",
      solutions: ["Shopify Launch", "WooCommerce Power", "Subscriptions", "Marketplaces", "Growth Bundle"]
    },
    {
      title: "Lead Generation",
      solutions: ["Lead Machine", "Ad Campaign Ready", "Webinar Pack", "Full Funnel", "Local Generator"]
    },
    {
      title: "Enterprise Solutions",
      solutions: ["Portal Suite", "CRM & Automation", "LMS Complete", "Vendor Platform", "Healthcare Suite"]
    },
    {
      title: "AI & Automation",
      solutions: ["Customer Success", "Lead Qualifier", "Full Stack", "Smart Website", "White-Label Starter"]
    }
  ];

  return (
    <section className="py-32 relative" id="solutions">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Everything Your Clients Need</h2>
          <p className="text-lg text-muted-foreground">Comprehensive technology solutions delivered under your brand.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, i) => (
            <ScrollSection key={i} className="h-full">
              <div className="glass-card p-8 h-full flex flex-col group hover:border-[#00ffcc]/50 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-24 h-24 bg-[#00ffcc]/20 blur-[40px] rounded-full"></div>
                </div>
                
                <h3 className="text-2xl font-heading font-bold mb-8 text-white group-hover:text-[#00ffcc] transition-colors relative z-10">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                  {category.solutions.map((solution, idx) => (
                    <div key={idx} className="bg-white/[0.03] hover:bg-white/[0.08] transition-colors px-4 py-2 rounded-full border border-white/10 text-sm text-white/80">
                      {solution}
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto pt-6 border-t border-white/10 relative z-10 flex items-center justify-between">
                  <span className="text-xs font-mono text-[#00ffcc] uppercase tracking-wider bg-[#00ffcc]/10 px-3 py-1 rounded-full border border-[#00ffcc]/20">
                    Custom Scope
                  </span>
                  <svg className="w-5 h-5 text-white/30 group-hover:text-[#00ffcc] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </ScrollSection>
          ))}
        </div>
      </div>
    </section>
  );
};
