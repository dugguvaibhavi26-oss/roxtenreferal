import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#000000] py-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 blur-[100px] rounded-full"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="font-logo font-bold text-2xl tracking-[0.2em] text-white uppercase">ROXTEN</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              The premier referral program for agencies and consultants. Earn massive recurring revenue by referring clients to our enterprise execution team.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-white">Program</h4>
            <ul className="space-y-4">
              <li><Link href="/#how-it-works" className="text-muted-foreground hover:text-white transition-colors text-sm">How It Works</Link></li>
              <li><Link href="/#faq" className="text-muted-foreground hover:text-white transition-colors text-sm">FAQ</Link></li>
              <li><Link href="/login" className="text-muted-foreground hover:text-white transition-colors text-sm">Partner Login</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="/privacy" className="text-muted-foreground hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-white transition-colors text-sm">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Roxten Studios. All rights reserved.
          </p>
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full bg-white/20"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
