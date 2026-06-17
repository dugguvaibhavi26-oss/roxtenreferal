import { Button } from "@/components/ui/button";

export const ContactEnquiry = () => {
  return (
    <section className="py-32 relative bg-black/40" id="contact">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Contact Us Enquiry</h2>
          <p className="text-lg text-muted-foreground">Get in touch to discuss a tailored partnership for your agency.</p>
        </div>
        
        <div className="glass-card p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#00ffcc]/10 blur-[60px] rounded-full pointer-events-none"></div>
          
          <form className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Full Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#00ffcc] focus:bg-white/10 transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Agency Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#00ffcc] focus:bg-white/10 transition-colors" placeholder="Acme Digital" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">Email Address</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#00ffcc] focus:bg-white/10 transition-colors" placeholder="john@acme.com" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">Message</label>
              <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#00ffcc] focus:bg-white/10 transition-colors resize-none" placeholder="Tell us about your agency and your current needs..."></textarea>
            </div>
            
            <Button type="button" className="w-full btn-primary h-14 text-lg mt-8">
              Submit Enquiry
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
