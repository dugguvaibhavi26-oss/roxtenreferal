import { ScrollSection } from "@/components/animations/ScrollSection";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const PartnershipPrograms = () => {
  const programs = [
    {
      slug: "white-label",
      title: "White-Label Partner Program",
      perfectFor: "Agencies that want complete execution support.",
      features: [
        "White-label delivery", "NDA protection", "Dedicated project manager", 
        "Priority support", "Custom project fulfillment", "Agency ownership of clients"
      ],
      cta: "Explore White-Label Program"
    },
    {
      slug: "referral",
      title: "Referral Partner Program",
      perfectFor: "Consultants, freelancers and agencies.",
      features: [
        "Refer projects", "Earn recurring commissions", "Simple referral process", 
        "Dedicated partner support", "Long-term revenue opportunities"
      ],
      cta: "Explore Referral Program"
    },
    {
      slug: "strategic-growth",
      title: "Strategic Growth Partner Program",
      perfectFor: "Growing agencies with recurring project volume.",
      features: [
        "Dedicated team access", "Priority development queue", "Faster turnaround", 
        "Monthly strategy calls", "Co-growth opportunities"
      ],
      cta: "Explore Strategic Growth"
    },
    {
      slug: "technology-partner",
      title: "Technology Partner Program",
      perfectFor: "Marketing, SEO and branding agencies.",
      features: [
        "Technical execution", "Full-stack development", "Automation services", 
        "AI implementation", "Custom software development"
      ],
      cta: "Explore Technology Partner"
    }
  ];

  return (
    <section className="py-32 relative" id="programs">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Partnership Programs</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the model that fits your agency's goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {programs.map((program, i) => (
            <ScrollSection key={i} className="h-full">
              <Link href={`/programs/${program.slug}`} className="block h-full outline-none">
                <div className="glass-card flex flex-col h-full border-t border-t-white/10 hover:border-t-[#00ffcc]/50 transition-all duration-300 p-8 md:p-10 group relative overflow-hidden">
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#00ffcc]/10 blur-[50px] rounded-full group-hover:bg-[#00ffcc]/20 transition-colors"></div>
                  
                  <div className="mb-8 relative z-10">
                    <h3 className="text-3xl font-heading font-bold mb-4 text-white group-hover:text-[#00ffcc] transition-colors">{program.title}</h3>
                    <p className="text-sm font-mono text-[#00ffcc] uppercase tracking-wider bg-[#00ffcc]/10 inline-block px-3 py-1 rounded-full border border-[#00ffcc]/20">
                      Perfect For: {program.perfectFor}
                    </p>
                  </div>
                  
                  <div className="flex-1 relative z-10">
                    <ul className="space-y-4 mb-10">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground group-hover:text-white/80 transition-colors">
                          <CheckCircle2 className="w-6 h-6 text-[#00ffcc] shrink-0" />
                          <span className="text-lg">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="relative z-10 mt-auto">
                    <Button className="w-full btn-primary h-14 text-lg">
                      {program.cta}
                    </Button>
                  </div>
                </div>
              </Link>
            </ScrollSection>
          ))}
        </div>
      </div>
    </section>
  );
};
