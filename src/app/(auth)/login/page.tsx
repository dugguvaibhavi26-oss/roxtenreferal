"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/animations/AuroraBackground";
import { useEffect } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Basic redirect if logged in
    const checkAuth = async () => {
      const { auth } = await import('@/lib/firebase');
      const { onAuthStateChanged } = await import('firebase/auth');
      onAuthStateChanged(auth, (user) => {
        if (user) {
          router.replace("/dashboard");
        }
      });
    };
    checkAuth();
  }, [router]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate auth logic
    console.log("Logging in...", email);
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-background">
      <AuroraBackground />
      <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />
      
      <div className="container max-w-md mx-auto px-6 relative z-10 pt-20">
        <div className="text-center mb-10">
          <Link href="/" className="inline-block mb-8">
            <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center mx-auto">
              <div className="w-5 h-5 bg-black rounded-sm"></div>
            </div>
          </Link>
          <h1 className="text-3xl font-heading font-bold mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Log in to your partner dashboard</p>
        </div>

        <div className="glass-card p-8 border-[#00ffcc]/30">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">Email</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00ffcc] focus:bg-white/10 transition-colors" 
                placeholder="you@agency.com" 
                required
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-white/80">Password</label>
                <Link href="#" className="text-xs text-[#00ffcc] hover:underline">Forgot password?</Link>
              </div>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00ffcc] focus:bg-white/10 transition-colors" 
                placeholder="••••••••" 
                required
              />
            </div>
            
            <Button type="submit" className="w-full btn-primary h-12 text-md mt-4">
              Sign In
            </Button>
          </form>
          
          <div className="mt-6 text-center text-sm text-muted-foreground">
            Don't have an account? <Link href="/register" className="text-[#00ffcc] hover:underline">Apply here</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
