"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Cookies from "js-cookie";

export const ReferralTracker = () => {
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const ref = searchParams.get("ref");
    if (ref) {
      Cookies.set("roxten_ref", ref, { expires: 30 });
      console.log("Referral code saved:", ref);
    }
  }, [searchParams]);

  return null;
};
