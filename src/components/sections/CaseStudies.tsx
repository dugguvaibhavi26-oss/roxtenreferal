import { ScrollSection } from "@/components/animations/ScrollSection";
import { Card, CardContent } from "@/components/ui/card";

export const CaseStudies = () => {
  const cases = [
    {
      agency: "Global SEO Agency",
      challenge: "Needed a scalable way to deliver 15+ local business websites per month without hiring more developers.",
      solution: "Roxten Studios became their invisible dev team, creating a standardized high-performance pipeline using Next.js.",
      outcome: "Agency increased profit margins by 40% and successfully scaled to 30+ sites per month.",
      tags: ["Local Business", "Scale"]
    },
    {
      agency: "Boutique Branding Firm",
      challenge: "Designed a complex animated SaaS website for a major client but lacked the technical team to build it.",
      solution: "We executed the design flawlessly using React, Framer Motion, and GSAP under strict NDA.",
      outcome: "Firm won a design award and secured a ₹90L retainer with the client.",
      tags: ["SaaS Website", "Animations"]
    }
  ];

  return (
    <section className="py-32" id="case-studies">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Execution Success</h2>
          <p className="text-lg text-muted-foreground">Real outcomes for our partner agencies.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cases.map((study, i) => (
            <ScrollSection key={i}>
              <Card className="glass-card border-white/10 h-full overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex gap-2 mb-6">
                    {study.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-white/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">The Challenge</h4>
                      <p className="text-white/80">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-2">The Solution</h4>
                      <p className="text-white/80">{study.solution}</p>
                    </div>
                    <div className="p-5 bg-white/5 rounded-lg border border-white/10 mt-4 relative overflow-hidden">
                      <div className="absolute inset-0 bg-green-500/5"></div>
                      <h4 className="text-sm font-bold text-green-400 uppercase tracking-wider mb-2 relative z-10">The Outcome</h4>
                      <p className="text-white font-medium relative z-10">{study.outcome}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollSection>
          ))}
        </div>
      </div>
    </section>
  );
};
