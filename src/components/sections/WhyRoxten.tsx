import { ScrollSection } from "@/components/animations/ScrollSection";
import { RevealText } from "@/components/animations/RevealText";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ghost, Users, Shield, Zap, TrendingUp, Handshake } from "lucide-react";

export const WhyRoxten = () => {
  const reasons = [
    {
      title: "White Label Execution",
      description: "We remain completely behind the scenes. Your clients never know we exist.",
      icon: <Ghost className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Dedicated Delivery Team",
      description: "Designers, developers, QA, and automation specialists at your disposal.",
      icon: <Users className="w-6 h-6 text-purple-400" />
    },
    {
      title: "Unlimited Scalability",
      description: "Take on more clients and larger projects without hiring a single employee.",
      icon: <TrendingUp className="w-6 h-6 text-green-400" />
    },
    {
      title: "Enterprise Quality",
      description: "Built using modern technologies and rigorous engineering best practices.",
      icon: <Shield className="w-6 h-6 text-red-400" />
    },
    {
      title: "Faster Delivery",
      description: "Structured workflows and an experienced team guarantee quick turnarounds.",
      icon: <Zap className="w-6 h-6 text-yellow-400" />
    },
    {
      title: "Long-Term Partnership",
      description: "Designed strictly for agency growth. We win when your agency wins.",
      icon: <Handshake className="w-6 h-6 text-pink-400" />
    }
  ];

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <RevealText>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Your Agency's <span className="text-gradient-accent">Invisible Technology Department</span>
            </h2>
          </RevealText>
          <RevealText delay={0.1}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to deliver enterprise-grade digital products without the overhead of an in-house engineering team.
            </p>
          </RevealText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <ScrollSection key={i}>
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-md overflow-hidden relative group h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                    {reason.icon}
                  </div>
                  <CardTitle className="text-xl font-heading">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{reason.description}</p>
                </CardContent>
              </Card>
            </ScrollSection>
          ))}
        </div>
      </div>
    </section>
  );
};
