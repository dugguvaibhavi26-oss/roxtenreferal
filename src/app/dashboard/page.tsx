"use client";
import { useState } from "react";
import { Copy, CheckCircle2, TrendingUp, Users, DollarSign } from "lucide-react";

export default function DashboardOverview() {
  const [copied, setCopied] = useState(false);
  const referralLink = "https://roxten.com/?ref=RXT-8F39A";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-8 md:p-12 max-w-6xl mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl font-heading font-bold mb-2">Welcome back, John!</h1>
        <p className="text-muted-foreground">Here is what's happening with your referrals today.</p>
      </div>

      {/* Referral Link Card */}
      <div className="glass-card p-8 mb-10 border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full pointer-events-none"></div>
        <h2 className="text-xl font-heading font-bold mb-4 relative z-10">Your Unique Referral Link</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl relative z-10">
          Share this link with your clients or network. Any project submitted through this link will be automatically attributed to your account.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 relative z-10">
          <div className="bg-black/50 border border-white/10 rounded-xl px-4 py-4 flex-1 font-mono text-white/80 truncate">
            {referralLink}
          </div>
          <button 
            onClick={handleCopy}
            className="btn-primary px-8 flex items-center justify-center gap-2 whitespace-nowrap h-[58px]"
          >
            {copied ? <CheckCircle2 size={18} /> : <Copy size={18} />}
            {copied ? "Copied!" : "Copy Link"}
          </button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="glass-card p-6 border-white/10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
              <Users size={24} className="text-white" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Total Referrals</div>
              <div className="text-2xl font-bold">12</div>
            </div>
          </div>
          <div className="text-xs text-green-400 flex items-center gap-1">
            <TrendingUp size={14} /> +3 this month
          </div>
        </div>

        <div className="glass-card p-6 border-white/10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
              <CheckCircle2 size={24} className="text-white" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Active Deals</div>
              <div className="text-2xl font-bold">4</div>
            </div>
          </div>
          <div className="text-xs text-muted-foreground flex items-center gap-1">
            2 in development
          </div>
        </div>

        <div className="glass-card p-6 border-white/10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
              <DollarSign size={24} className="text-white" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Total Earned</div>
              <div className="text-2xl font-bold">₹24,50,000</div>
            </div>
          </div>
          <div className="text-xs text-green-400 flex items-center gap-1">
            <TrendingUp size={14} /> +₹4,20,000 pending
          </div>
        </div>
      </div>
    </div>
  );
}
