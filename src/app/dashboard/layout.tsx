"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LayoutDashboard, Users, LineChart, Settings, LogOut, CreditCard, HelpCircle, FileText, Menu, X } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navLinks = [
    { href: "/dashboard", icon: LayoutDashboard, label: "Overview" },
    { href: "/dashboard/referrals", icon: Users, label: "My Referrals" },
    { href: "/dashboard/analytics", icon: LineChart, label: "Analytics" },
    { href: "/dashboard/payouts", icon: CreditCard, label: "Payouts" },
    { href: "/dashboard/settings", icon: Settings, label: "Settings" },
    { href: "/dashboard/support", icon: HelpCircle, label: "Help & Support" },
    { href: "/dashboard/terms", icon: FileText, label: "Terms & Conditions" },
  ];

  return (
    <div className="flex h-screen bg-background">
      
      {/* Mobile Header (Visible only on md:hidden) */}
      <div className="md:hidden fixed top-0 inset-x-0 h-16 border-b border-white/10 bg-[#050505] z-40 flex items-center justify-between px-6">
        <Link href="/">
          <span className="font-logo font-bold text-lg tracking-[0.2em] text-white uppercase">ROXTEN</span>
        </Link>
        <button onClick={toggleSidebar} className="text-white p-2">
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Overlay for Mobile */}
      {isSidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/60 z-40" 
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-64 border-r border-white/10 flex flex-col bg-[#050505] transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <Link href="/">
            <span className="font-logo font-bold text-xl tracking-[0.2em] text-white uppercase">ROXTEN</span>
          </Link>
          <div className="mt-3 text-[10px] font-mono text-white/60 tracking-[0.3em] uppercase">PARTNER DASHBOARD</div>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 mt-8 overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.href}
                href={link.href} 
                onClick={() => setIsSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover:scale-[1.02] border ${
                  isActive 
                    ? "bg-white/[0.05] text-white border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.05)]" 
                    : "text-white/80 hover:text-white border-transparent hover:border-white/10 hover:bg-white/[0.02]"
                }`}
              >
                <link.icon size={20} className={isActive ? "text-white" : ""} />
                <span className="font-medium">{link.label}</span>
              </Link>
            );
          })}
        </nav>
        
        <div className="p-6 mt-auto">
          <div className="bg-white/5 rounded-xl p-4 border border-white/10 mb-4">
            <div className="text-sm font-medium">John Doe</div>
            <div className="text-xs text-white/40 truncate">john@acme.com</div>
          </div>
          <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl hover:bg-white/5 text-white/80 hover:text-white transition-colors text-left">
            <LogOut size={20} />
            <span className="font-medium">Log Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pt-16 md:pt-0 relative">
        {children}
      </main>
    </div>
  );
}
