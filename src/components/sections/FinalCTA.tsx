import { RevealText } from "@/components/animations/RevealText";
import { AuroraBackground } from "@/components/animations/AuroraBackground";
import { Button } from "@/components/ui/button";

export const FinalCTA = () => {
  return (
    <section className="relative py-40 overflow-hidden">
      <AuroraBackground />
      <div className="absolute inset-0 bg-grid-white opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <RevealText>
          <h2 className="text-5xl md:text-7xl font-heading font-bold tracking-tight mb-8 max-w-4xl mx-auto leading-tight">
            Ready To Grow <br />
            <span className="text-gradient">Without Growing Your Team?</span>
          </h2>
        </RevealText>
        
        <RevealText delay={0.1}>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Partner with Roxten Studios and unlock enterprise-grade technology execution for your clients.
          </p>
        </RevealText>
        
        <RevealText delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-14 px-10 text-base bg-white text-black hover:bg-white/90">
              Become A Partner
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-base glass hover:bg-white/10 text-white border-white/20">
              Schedule Discovery Call
            </Button>
          </div>
        </RevealText>
      </div>
    </section>
  );
};
