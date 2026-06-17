"use client";
import { LifeBuoy, MessageSquare, PhoneCall } from "lucide-react";

export const Helpdesk = () => {
  const supportChannels = [
    {
      icon: MessageSquare,
      title: "Priority Live Chat",
      description: "Get instant answers from our partner success team right in your dashboard.",
    },
    {
      icon: PhoneCall,
      title: "Dedicated Manager",
      description: "Gold and Platinum partners get direct line access to a dedicated success manager.",
    },
    {
      icon: LifeBuoy,
      title: "Technical Support",
      description: "Direct access to our engineering team for complex project scoping and technical questions.",
    }
  ];

  return (
    <section className="py-24 relative bg-[#050505] border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-black mb-4 uppercase tracking-tight text-white">Partner Helpdesk</h2>
          <p className="text-white/50 max-w-2xl mx-auto">We don't just give you a link and disappear. Our team is here to help you close deals, scope projects, and succeed.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {supportChannels.map((channel, i) => (
            <div key={i} className="glass-card p-8 border-white/5 hover:border-white/20 transition-colors group">
               <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                 <channel.icon className="text-white/80 w-6 h-6" />
               </div>
               <h3 className="text-xl font-bold text-white mb-3">{channel.title}</h3>
               <p className="text-white/60 text-sm leading-relaxed">{channel.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
