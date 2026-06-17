import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Roxten Studios",
  description: "Privacy Policy for Roxten Studios Partnership Program.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-heading font-black tracking-tight mb-8">Privacy Policy</h1>
      
      <div className="glass-card p-8 md:p-12 border-white/10 text-white/80 space-y-8 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
          <p>
            When you register for the Roxten Studios Partnership Program, we collect certain personal information, including but not limited to your name, email address, company details, phone number, and banking/UPI details for payout processing.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
          <p>
            The information we collect is used to:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Create and manage your partner account.</li>
            <li>Track referrals and project statuses.</li>
            <li>Process and distribute commission payouts securely.</li>
            <li>Communicate with you regarding updates, support tickets, and program changes.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
          <p>
            We implement advanced security measures to maintain the safety of your personal information. Your banking and payment details are encrypted and securely stored. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your explicit consent, except as required to process your payouts.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">4. Cookies</h2>
          <p>
            Our dashboard uses cookies to maintain your session and save your preferences for future visits. You can choose to disable cookies through your browser settings, though this may affect the functionality of the dashboard.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
          <p>
            If you have any questions regarding this Privacy Policy, you may contact our data protection officer at <a href="mailto:privacy@roxtenstudios.in" className="text-white font-medium hover:underline">privacy@roxtenstudios.in</a> or raise a ticket in the Help & Support section of your dashboard.
          </p>
        </section>

        <div className="pt-8 border-t border-white/10 text-sm text-white/40">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </div>
      </div>
    </div>
  );
}
