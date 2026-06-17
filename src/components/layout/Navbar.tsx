"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, LogIn } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname?.startsWith("/dashboard")) {
    return null;
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/60 backdrop-blur-xl border-b border-white/10 py-4" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between max-w-7xl">
        
        {/* Mobile Header */}
        <div className="flex md:hidden items-center justify-between w-full z-50">
          <button className="p-2 text-white -ml-2" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center group">
              <span className="font-logo font-bold text-lg tracking-[0.2em] text-white uppercase transition-transform group-hover:scale-105">ROXTEN</span>
            </Link>
            
            <Link href="/login" className="p-2 text-white -mr-2 flex items-center">
              <LogIn size={24} />
            </Link>
          </div>
        </div>

        {/* Desktop Header */}
        <Link href="/" className="hidden md:flex items-center gap-2 group z-50">
          <span className="font-logo font-bold text-xl tracking-[0.2em] text-white uppercase transition-transform group-hover:scale-105">ROXTEN</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#how-it-works" className="text-sm font-medium text-white/80 hover:text-white transition-colors">How It Works</Link>
          <Link href="/#faq" className="text-sm font-medium text-white/80 hover:text-white transition-colors">FAQ</Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost" className="text-white hover:text-white hover:bg-white/5 flex items-center gap-2">
              <LogIn className="w-4 h-4" />
              Login
            </Button>
          </Link>
          <Link href="/register">
            <Button className="btn-primary">
              Become A Partner
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-3xl transition-transform duration-300 ease-in-out flex flex-col items-center justify-center gap-8 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <Link href="/#how-it-works" onClick={toggleMobileMenu} className="text-xl font-medium text-white/80 hover:text-white transition-colors">How It Works</Link>
        <Link href="/#faq" onClick={toggleMobileMenu} className="text-xl font-medium text-white/80 hover:text-white transition-colors">FAQ</Link>
        <Link href="/login" onClick={toggleMobileMenu} className="text-xl font-medium text-white/80 hover:text-white transition-colors">Partner Login</Link>
        <Link href="/register" onClick={toggleMobileMenu} className="mt-4">
          <Button className="btn-primary w-full text-lg py-6 px-8">
            Become A Partner
          </Button>
        </Link>
      </div>
    </header>
  );
}
