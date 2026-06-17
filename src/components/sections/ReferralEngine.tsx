"use client";
import { motion } from "framer-motion";

export const ReferralEngine = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden flex flex-col items-center justify-center min-h-[80vh] border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_60%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center mb-24">
        <h2 className="text-4xl md:text-6xl font-heading font-black mb-6 text-white tracking-tighter uppercase">The Referral Engine</h2>
        <p className="text-white/50 max-w-2xl mx-auto font-mono text-xs md:text-sm tracking-widest uppercase">Systemized Revenue Generation</p>
      </div>

      <div className="relative w-full max-w-6xl mx-auto h-auto md:h-[200px] flex items-center justify-center mt-12">
        {/* Desktop Connection Lines */}
        <div className="absolute inset-0 w-full h-full pointer-events-none hidden md:block">
          <div className="absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-white/10 -translate-y-1/2" />
          <motion.div 
            className="absolute top-1/2 left-[10%] w-[80%] h-[2px] bg-gradient-to-r from-transparent via-white to-transparent -translate-y-1/2 origin-left"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            style={{ filter: "drop-shadow(0 0 8px rgba(255,255,255,0.8))" }}
          />
        </div>

        {/* Mobile Connection Lines */}
        <div className="absolute inset-0 w-full h-full pointer-events-none md:hidden flex justify-center">
          <div className="absolute top-[10%] bottom-[10%] w-[2px] bg-white/10" />
          <motion.div 
            className="absolute top-[10%] h-[80%] w-[2px] bg-gradient-to-b from-transparent via-white to-transparent origin-top"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            style={{ filter: "drop-shadow(0 0 8px rgba(255,255,255,0.8))" }}
          />
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-16 md:gap-0 relative z-10 px-4 md:px-12">
          {[
            { step: "Lead", icon: "01", active: true },
            { step: "Project", icon: "02", active: false },
            { step: "Delivery", icon: "03", active: false },
            { step: "Commission", icon: "04", active: true },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-6 group">
              <motion.div 
                className={`w-24 h-24 rounded-full flex items-center justify-center border-2 glass backdrop-blur-xl transition-all duration-500
                  ${item.active ? 'border-white bg-white/10 shadow-[0_0_40px_rgba(255,255,255,0.15)]' : 'border-white/10 bg-black/80 group-hover:border-white/30'}`}
                animate={{ rotate: item.active ? 360 : 0 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className={`w-16 h-16 rounded-full border border-dashed flex items-center justify-center font-mono font-bold text-xl
                  ${item.active ? 'border-white/50 text-white' : 'border-white/20 text-white/40 group-hover:text-white/80'}`}>
                  <motion.div animate={{ rotate: item.active ? -360 : 0 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                    {item.icon}
                  </motion.div>
                </div>
              </motion.div>
              <div className={`font-heading font-black text-xl uppercase tracking-widest ${item.active ? 'text-white' : 'text-white/50 group-hover:text-white/80'} transition-colors`}>
                {item.step}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
