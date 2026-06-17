import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { RevealText } from "@/components/animations/RevealText";
import { AuroraBackground } from "@/components/animations/AuroraBackground";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden">
      <AuroraBackground />
      <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-8 backdrop-blur-md animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-[#00ffcc] animate-pulse"></span>
          <span className="text-sm font-medium tracking-wide text-white">The Roxten Referral Program</span>
        </div>

        <div className="max-w-5xl mx-auto">
          <RevealText className="text-6xl md:text-8xl font-heading font-extrabold tracking-tight mb-8 text-white">
            Refer Clients. Earn Recurring Revenue.
          </RevealText>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Send us leads. We close the deal, execute the project, and pay you massive commissions for the lifetime of the client.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
            <Link href="/register">
              <Button className="w-full sm:w-auto h-14 px-8 text-lg btn-primary group">
                Start Earning Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg glass-panel hover:bg-white/5 border-white/10 text-white">
                Partner Login
              </Button>
            </Link>
          </div>

          {/* Stats / Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-10 border-t border-white/10 animate-fade-in-up delay-500">
            {[
              { label: "Commission", value: "15%" },
              { label: "Partner Earnings", value: "₹15Cr+" },
              { label: "Active Partners", value: "150+" },
              { label: "Payouts", value: "Monthly" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-3xl font-heading font-bold text-white mb-1">{stat.value}</span>
                <span className="text-sm text-[#00ffcc]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
