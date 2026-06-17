"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";

import { Hero } from "@/components/sections/Hero";
import { ReferralHowItWorks } from "@/components/sections/ReferralHowItWorks";
import { Helpdesk } from "@/components/sections/Helpdesk";
import { AboutRoxten } from "@/components/sections/AboutRoxten";
import { ReferralEngine } from "@/components/sections/ReferralEngine";
import { FAQ } from "@/components/sections/FAQ";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.replace("/dashboard");
      } else {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return <div className="min-h-screen bg-black flex items-center justify-center pointer-events-none" />;
  }

  return (
    <>
      <Hero />
      <ReferralHowItWorks />
      <Helpdesk />
      <AboutRoxten />
      <ReferralEngine />
      <FAQ />
      <Footer />
    </>
  );
}
