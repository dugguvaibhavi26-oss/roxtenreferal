"use client";
import { Mail, MessageSquare, Phone, ChevronDown, Ticket } from "lucide-react";
import { useState } from "react";
import { RoxtenBot } from "@/components/chat/RoxtenBot";

const faqs = [
  {
    q: "How do I track my referral payouts?",
    a: "You can track all your payouts in the 'Payouts' section. Once a client makes a payment to us, your commission status will update to 'processing payment' and you will receive the funds in your registered bank account."
  },
  {
    q: "Can I change my registered bank account?",
    a: "Yes, you can add, edit, or delete bank accounts and UPI IDs directly from the Payouts tab in your dashboard."
  },
  {
    q: "What happens if a deal is canceled?",
    a: "If a referred client decides not to proceed with the project before signing, the status will change to 'deal canceled' and no commission will be generated."
  },
  {
    q: "How long does it take for a ticket to be resolved?",
    a: "Our partner success team typically responds to all support tickets within 24 hours during standard business days."
  }
];

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="p-8 md:p-12 max-w-5xl mx-auto space-y-12">
      <div>
        <h1 className="text-3xl font-heading font-black tracking-[-0.04em] uppercase mb-2">Help & Support</h1>
        <p className="text-white/60">We are here to help you with any questions or issues.</p>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card p-8 border-white/10 flex flex-col items-center text-center hover:border-white/20 transition-all hover:scale-[1.02]">
          <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 mb-4">
            <Mail size={24} className="text-white" />
          </div>
          <h3 className="font-bold mb-2">Email Us</h3>
          <p className="text-sm text-white/60 mb-4">Drop us an email and we will get back to you within 24 hours.</p>
          <a href="mailto:support@roxtenstudios.in" className="text-white font-medium hover:underline">support@roxtenstudios.in</a>
        </div>

        <div className="glass-card p-8 border-white/10 flex flex-col items-center text-center hover:border-white/20 transition-all hover:scale-[1.02]">
          <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 mb-4">
            <MessageSquare size={24} className="text-white" />
          </div>
          <h3 className="font-bold mb-2">Live Chat</h3>
          <p className="text-sm text-white/60 mb-4">Chat with our partner success team directly.</p>
          <button onClick={() => setIsChatOpen(true)} className="bg-white text-black font-semibold px-6 py-2 rounded-full hover:scale-[1.02] transition-transform">Start Chat</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Raise a Ticket */}
        <div className="glass-card p-8 border-white/10 h-max">
          <div className="flex items-center gap-3 mb-6">
            <Ticket className="text-white/80" size={24} />
            <h2 className="text-xl font-heading font-bold">Raise a Ticket</h2>
          </div>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white/60 mb-2">Issue Category</label>
              <select className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 appearance-none">
                <option>Payout Issue</option>
                <option>Referral Tracking</option>
                <option>Account Settings</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-white/60 mb-2">Subject</label>
              <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30" placeholder="Brief description of the issue" />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/60 mb-2">Detailed Description</label>
              <textarea rows={5} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 resize-none" placeholder="Provide as much detail as possible..."></textarea>
            </div>
            <button type="button" className="bg-white text-black font-semibold px-8 py-3 rounded-full hover:scale-[1.02] transition-transform w-full">Submit Ticket</button>
          </form>
        </div>

        {/* FAQs */}
        <div>
          <h2 className="text-xl font-heading font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="glass-card border-white/10 overflow-hidden transition-all duration-300"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-bold pr-4">{faq.q}</span>
                  <ChevronDown 
                    className={`shrink-0 transition-transform duration-300 ${openFaq === index ? "rotate-180 text-white" : "text-white/40"}`} 
                    size={20} 
                  />
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-white/60 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <RoxtenBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
}
