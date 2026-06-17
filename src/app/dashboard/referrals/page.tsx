"use client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Referrals() {
  const referrals = [
    { id: 1, client: "Acme Corp", date: "Jun 12, 2026", status: "payment finished", value: "₹12,00,000", commission: "₹1,80,000" },
    { id: 2, client: "Global Industries", date: "Jun 08, 2026", status: "deal processing", value: "₹45,00,000", commission: "₹6,75,000 (Est)" },
    { id: 3, client: "Stark Ltd", date: "May 28, 2026", status: "deal canceled", value: "₹8,00,000", commission: "₹0" },
    { id: 4, client: "Nexus Retail", date: "May 15, 2026", status: "deal confirmed", value: "₹8,50,000", commission: "₹1,27,500 (Est)" },
    { id: 5, client: "Alpha Inc", date: "May 02, 2026", status: "building", value: "₹20,00,000", commission: "₹3,00,000 (Est)" },
    { id: 6, client: "Beta Corp", date: "Apr 20, 2026", status: "deal finished", value: "₹15,00,000", commission: "₹2,25,000" },
    { id: 7, client: "Gamma LLC", date: "Apr 10, 2026", status: "processing payment", value: "₹30,00,000", commission: "₹4,50,000" },
  ];

  return (
    <div className="p-8 md:p-12 max-w-6xl mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl font-heading font-bold mb-2">My Referrals</h1>
        <p className="text-muted-foreground mb-4">Track the status of your submitted referrals and their corresponding commissions.</p>
        <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-xl text-yellow-500 flex gap-3 items-start">
          <div className="mt-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </div>
          <div>
            <strong>Note:</strong> Referral amounts will only be paid out after the client successfully completes their payment to Roxten Studios.
          </div>
        </div>
      </div>

      <div className="glass-card border-white/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.02]">
                <th className="p-5 font-medium text-muted-foreground text-sm">Client Name</th>
                <th className="p-5 font-medium text-muted-foreground text-sm">Date Submitted</th>
                <th className="p-5 font-medium text-muted-foreground text-sm">Status</th>
                <th className="p-5 font-medium text-muted-foreground text-sm">Project Value</th>
                <th className="p-5 font-medium text-muted-foreground text-sm">Your Commission</th>
              </tr>
            </thead>
            <tbody>
              {referrals.map((ref) => (
                <tr key={ref.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                  <td className="p-5 font-medium text-white">{ref.client}</td>
                  <td className="p-5 text-muted-foreground text-sm">{ref.date}</td>
                  <td className="p-5">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono tracking-wide border
                      ${ref.status === 'payment finished' ? 'bg-white/10 text-white font-bold border-white/40' : 
                        ref.status === 'deal canceled' ? 'bg-red-500/10 text-red-500 border-red-500/20' : 
                        ref.status === 'deal processing' || ref.status === 'building' || ref.status === 'processing payment' ? 'bg-white/5 text-white/60 border-white/10' :
                        'bg-white/[0.08] text-white/90 border-white/20'}`}>
                      {ref.status}
                    </span>
                  </td>
                  <td className="p-5 text-white/90">{ref.value}</td>
                  <td className="p-5 text-white font-medium">{ref.commission}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
