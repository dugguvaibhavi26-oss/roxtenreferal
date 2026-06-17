import { ScrollSection } from "@/components/animations/ScrollSection";
import { RevealText } from "@/components/animations/RevealText";

export const ProjectWorkflow = () => {
  const steps = [
    { num: "01", title: "Discovery", desc: "Understanding the client needs and defining the custom scope." },
    { num: "02", title: "Strategy", desc: "Architecting the technical solution and roadmap." },
    { num: "03", title: "Design", desc: "Crafting premium user interfaces and experiences." },
    { num: "04", title: "Development", desc: "Rigorous engineering and building the product." },
    { num: "05", title: "Launch", desc: "Smooth deployment and final quality assurance." },
    { num: "06", title: "Post-Launch", desc: "Ongoing maintenance and dedicated support." },
  ];

  return (
    <section className="py-32 relative bg-black/40" id="workflow">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <RevealText>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Simple. Transparent. Scalable.</h2>
          </RevealText>
          <RevealText delay={0.1}>
            <p className="text-lg text-muted-foreground">Our structured workflow ensures enterprise quality delivery.</p>
          </RevealText>
        </div>

        <div className="relative max-w-4xl mx-auto pl-8 md:pl-0">
          {/* Timeline Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block"></div>
          <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 md:hidden"></div>
          
          <div className="space-y-12 relative">
            {steps.map((step, i) => (
              <ScrollSection key={i} className="relative z-10">
                <div className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2 w-full hidden md:block"></div>
                  
                  {/* Circle Marker */}
                  <div className={`absolute left-[-28px] md:left-1/2 md:-ml-[28px] w-14 h-14 rounded-full bg-background border border-white/20 flex items-center justify-center font-heading font-bold text-white shadow-[0_0_15px_rgba(255,255,255,0.05)] z-20`}>
                    {step.num}
                  </div>
                  
                  <div className={`md:w-1/2 w-full ${i % 2 !== 0 ? 'md:text-right md:pr-16' : 'md:pl-16'}`}>
                    <div className="glass-card p-8 rounded-2xl relative group overflow-hidden border-t border-t-white/10">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <h3 className="text-2xl font-heading font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
