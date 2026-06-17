import { ContactEnquiry } from "@/components/sections/ContactEnquiry";
import { AuroraBackground } from "@/components/animations/AuroraBackground";
import { notFound } from "next/navigation";

const programsData = {
  "white-label": {
    title: "White-Label Partner Program",
    description: "Complete execution support behind the scenes. Your clients never know we exist.",
    details: "Our white-label program is designed for agencies that want to scale without the overhead of hiring. We operate strictly under your brand, communicating via your email addresses if needed, and delivering enterprise-grade products."
  },
  "referral": {
    title: "Referral Partner Program",
    description: "Refer projects and earn recurring commissions for the lifetime of the project.",
    details: "Perfect for consultants or freelancers. Simply refer clients to us, and we handle the execution, communication, and management while you earn."
  },
  "strategic-growth": {
    title: "Strategic Growth Partner Program",
    description: "For growing agencies with recurring project volume requiring dedicated teams.",
    details: "Get priority development queue access, faster turnarounds, and monthly strategy calls to align our technical execution with your business growth."
  },
  "technology-partner": {
    title: "Technology Partner Program",
    description: "We act as your complete technical arm for SEO, marketing, and branding agencies.",
    details: "Focus on your core competencies while we handle full-stack development, complex automation, and custom software builds for your clients."
  }
};

export default async function ProgramDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const program = programsData[resolvedParams.slug as keyof typeof programsData];
  
  if (!program) {
    notFound();
  }

  return (
    <>
      <div className="pt-32 pb-16 relative flex-1">
        <AuroraBackground />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="mb-16">
            <span className="text-[#00ffcc] font-mono uppercase tracking-widest text-sm mb-6 block bg-[#00ffcc]/10 w-max px-4 py-2 rounded-full border border-[#00ffcc]/20">Program Details</span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 text-white">{program.title}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              {program.description}
            </p>
          </div>
          
          <div className="glass-card p-10 md:p-16 mb-20 border-t-2 border-[#00ffcc]/50">
            <h2 className="text-3xl font-heading font-bold mb-6 text-white">How It Works</h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              {program.details}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h4 className="text-[#00ffcc] font-bold mb-2">Step 1</h4>
                <p className="text-sm text-white/70">Onboarding & Alignment</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h4 className="text-[#00ffcc] font-bold mb-2">Step 2</h4>
                <p className="text-sm text-white/70">Seamless Execution</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h4 className="text-[#00ffcc] font-bold mb-2">Step 3</h4>
                <p className="text-sm text-white/70">Delivery & Growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ContactEnquiry />
    </>
  );
}
