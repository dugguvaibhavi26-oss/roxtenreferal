import { ScrollSection } from "@/components/animations/ScrollSection";

export const ReferralHowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Get Your Unique Link",
      description: "Sign up for the dashboard and get your unique referral link instantly."
    },
    {
      step: "02",
      title: "Share With Your Network",
      description: "Share your link with agencies, consultants, or business owners who need digital solutions."
    },
    {
      step: "03",
      title: "We Close & Execute",
      description: "When they submit a project, our team handles the sales, scoping, and enterprise-grade execution."
    },
    {
      step: "04",
      title: "You Get Paid",
      description: "Earn a 15% commission on the lifetime value of the client. Track everything in your dashboard."
    }
  ];

  return (
    <section className="py-32 relative" id="how-it-works">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">How It Works</h2>
          <p className="text-lg text-muted-foreground">Four simple steps to recurring revenue.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, i) => (
            <ScrollSection key={i} className="h-full">
              <div className="glass-card p-8 h-full flex flex-col relative overflow-hidden group hover:border-[#00ffcc]/30 transition-all duration-300">
                <div className="text-5xl font-mono font-bold text-white/5 mb-6 group-hover:text-[#00ffcc]/10 transition-colors">
                  {item.step}
                </div>
                <h3 className="text-xl font-heading font-bold mb-4 text-white group-hover:text-[#00ffcc] transition-colors">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </ScrollSection>
          ))}
        </div>
      </div>
    </section>
  );
};
