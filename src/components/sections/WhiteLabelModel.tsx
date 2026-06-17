import { ScrollSection } from "@/components/animations/ScrollSection";
import { RevealText } from "@/components/animations/RevealText";
import { ArrowRight, Lock, EyeOff, FileKey } from "lucide-react";

export const WhiteLabelModel = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <RevealText>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">How The Partnership Works</h2>
          </RevealText>
          <RevealText delay={0.1}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The client never sees Roxten. We operate completely behind the scenes under your brand.
            </p>
          </RevealText>
        </div>

        <ScrollSection>
          <div className="glass-card rounded-3xl p-8 md:p-16 max-w-5xl mx-auto border-t-2 border-white/10 bg-white/[0.02]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-20 relative">
              <div className="absolute top-1/2 left-0 right-0 border-t-2 border-dashed border-white/20 hidden md:block z-0"></div>
              
              <div className="bg-background glass p-8 rounded-2xl w-full md:w-1/3 text-center relative z-10 border-white/10 hover:border-white/30 transition-colors">
                <div className="text-2xl font-bold font-heading mb-2 text-white">Roxten Studios</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Invisible Execution</div>
              </div>

              <div className="bg-background/80 backdrop-blur-xl p-8 rounded-2xl w-full md:w-1/3 text-center relative z-10 border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                <div className="text-2xl font-bold font-heading mb-2 text-blue-400">Your Agency</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Owns Relationship</div>
              </div>

              <div className="bg-background glass p-8 rounded-2xl w-full md:w-1/3 text-center relative z-10 border-white/10 hover:border-white/30 transition-colors">
                <div className="text-2xl font-bold font-heading mb-2 text-white">The Client</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Receives Product</div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Agency Owns Relationship", icon: <Lock className="w-6 h-6" /> },
                { title: "Agency Controls Pricing", icon: <ArrowRight className="w-6 h-6" /> },
                { title: "Full Confidentiality", icon: <EyeOff className="w-6 h-6" /> },
                { title: "IP Transfer Guarantee", icon: <FileKey className="w-6 h-6" /> },
              ].map((benefit, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-4 bg-white/[0.03] border border-white/5 p-6 rounded-xl hover:bg-white/[0.06] transition-colors">
                  <div className="text-white/50">{benefit.icon}</div>
                  <div className="font-medium text-sm text-white/90">{benefit.title}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollSection>
      </div>
    </section>
  );
};
