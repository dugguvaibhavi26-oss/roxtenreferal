"use client";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { name: "Jan", referrals: 2, earned: 1500 },
  { name: "Feb", referrals: 3, earned: 2800 },
  { name: "Mar", referrals: 1, earned: 1200 },
  { name: "Apr", referrals: 4, earned: 4500 },
  { name: "May", referrals: 6, earned: 7200 },
  { name: "Jun", referrals: 5, earned: 6500 },
];

export default function Analytics() {
  return (
    <div className="p-8 md:p-12 max-w-6xl mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl font-heading font-bold mb-2">Analytics</h1>
        <p className="text-muted-foreground">Track your referral performance over time.</p>
      </div>

      <div className="glass-card p-8 border-white/10 mb-8">
        <h2 className="text-xl font-heading font-bold mb-8">Earnings Overview</h2>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorEarned" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00ffcc" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#00ffcc" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `₹${value}`} />
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#050505', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}
                itemStyle={{ color: '#00ffcc' }}
              />
              <Area type="monotone" dataKey="earned" stroke="#00ffcc" strokeWidth={3} fillOpacity={1} fill="url(#colorEarned)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
