"use client";
import { useState } from "react";
import { Copy, CheckCircle2, TrendingUp, Users, DollarSign, Award, Target } from "lucide-react";

export default function DashboardOverview() {
  const [copied, setCopied] = useState(false);
  const referralLink = "https://roxten.com/?ref=RXT-8F39A";

  // Mock Data
  const totalReferrals = 12;

  // Tier Gamification Logic
  let currentTier = "Silver";
  let currentCommission = "10%";
  let nextTier = "Gold";
  let nextThreshold = 4;
  let progress = 0;
  let badgeGradient = "from-slate-400 to-slate-500";
  let badgeGlow = "shadow-[0_0_30px_rgba(148,163,184,0.3)]";

  if (totalReferrals >= 10) {
    currentTier = "Platinum";
    currentCommission = "20%";
    nextTier = "Max Tier";
    progress = 100;
    badgeGradient = "from-indigo-400 via-purple-400 to-pink-400";
    badgeGlow = "shadow-[0_0_40px_rgba(167,139,250,0.4)]";
  } else if (totalReferrals >= 4) {
    currentTier = "Gold";
    currentCommission = "15%";
    nextTier = "Platinum";
    nextThreshold = 10;
    progress = ((totalReferrals - 3) / 7) * 100; // 4 to 10
    badgeGradient = "from-amber-200 to-yellow-600";
    badgeGlow = "shadow-[0_0_30px_rgba(251,191,36,0.3)]";
  } else {
    currentTier = "Silver";
    currentCommission = "10%";
    nextTier = "Gold";
    nextThreshold = 4;
    progress = (totalReferrals / 4) * 100;
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-8 md:p-12 max-w-4xl mx-auto">
      
      {/* Header & Gamification Badge */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
        <div>
          <h1 className="text-3xl font-heading font-bold mb-2 text-white">Welcome back, John!</h1>
          <p className="text-white/50">Here is what's happening with your referrals today.</p>
        </div>

        {/* 3D Badge Display */}
        <div className={`relative p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-6 ${badgeGlow} transition-shadow duration-500`}>
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none" />
          
          <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${badgeGradient} flex items-center justify-center shadow-inner border border-white/20 relative z-10`}>
            <Award className="w-8 h-8 text-white drop-shadow-md" />
          </div>
          
          <div className="relative z-10 pr-4">
            <div className="text-xs font-mono tracking-widest text-white/50 uppercase mb-1">Current Tier</div>
            <div className="text-2xl font-black font-heading text-white tracking-tight">{currentTier}</div>
            <div className="text-sm font-medium text-emerald-400 mt-1">{currentCommission} Commission Rate</div>
          </div>
        </div>
      </div>

      {/* Progress Bar Section (Hidden if Max Tier) */}
      {currentTier !== "Platinum" && (
        <div className="mb-12 p-6 rounded-xl border border-white/10 bg-white/[0.02]">
          <div className="flex justify-between items-end mb-4">
            <div>
              <div className="text-sm text-white/70 mb-1">Progress to <span className="font-bold text-white">{nextTier}</span></div>
              <div className="text-xs text-white/40">{nextThreshold - totalReferrals} more referral{nextThreshold - totalReferrals !== 1 ? 's' : ''} needed to unlock higher commissions!</div>
            </div>
            <Target className="w-5 h-5 text-white/30" />
          </div>
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
            <div 
              className={`h-full bg-gradient-to-r ${badgeGradient} rounded-full transition-all duration-1000 ease-out`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Referral Link */}
      <div className="mb-10 border-b border-white/10 pb-10">
        <h2 className="text-lg font-heading font-bold mb-4 text-white">Your Unique Referral Link</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="bg-black border border-white/20 rounded-lg px-4 py-3 flex-1 font-mono text-white/80 truncate text-sm flex items-center">
            {referralLink}
          </div>
          <button 
            onClick={handleCopy}
            className="btn-primary px-6 flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm"
          >
            {copied ? <CheckCircle2 size={16} /> : <Copy size={16} />}
            {copied ? "Copied" : "Copy Link"}
          </button>
        </div>
      </div>

      {/* KPIs as a sleek list */}
      <div>
        <h2 className="text-lg font-heading font-bold mb-6 text-white">Performance Overview</h2>
        
        <div className="flex flex-col gap-0 border border-white/10 rounded-xl overflow-hidden bg-white/[0.02]">
          
          <div className="flex items-center justify-between p-6 border-b border-white/5 hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-4">
               <Users className="text-white/40 w-5 h-5" />
               <div className="font-medium text-white/90">Total Referrals</div>
            </div>
            <div className="flex items-center gap-6">
               <div className="hidden sm:flex text-sm text-emerald-400 items-center gap-1">
                 <TrendingUp className="w-3 h-3" /> +3 this month
               </div>
               <div className="text-xl font-bold font-mono text-white">{totalReferrals}</div>
            </div>
          </div>

          <div className="flex items-center justify-between p-6 border-b border-white/5 hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-4">
               <CheckCircle2 className="text-white/40 w-5 h-5" />
               <div className="font-medium text-white/90">Active Deals</div>
            </div>
            <div className="flex items-center gap-6">
               <div className="hidden sm:flex text-sm text-white/40 items-center gap-1">
                 2 in development
               </div>
               <div className="text-xl font-bold font-mono text-white">4</div>
            </div>
          </div>

          <div className="flex items-center justify-between p-6 hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-4">
               <DollarSign className="text-white/40 w-5 h-5" />
               <div className="font-medium text-white/90">Total Earned</div>
            </div>
            <div className="flex items-center gap-6">
               <div className="hidden sm:flex text-sm text-emerald-400 items-center gap-1">
                 <TrendingUp className="w-3 h-3" /> +₹4,20,000 pending
               </div>
               <div className="text-xl font-bold font-mono text-white">₹24,50,000</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
