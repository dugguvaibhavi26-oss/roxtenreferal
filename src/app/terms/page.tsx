import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Roxten Studios",
  description: "Terms and Conditions for Roxten Studios.",
};

export default function TermsConditionsPage() {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-heading font-black tracking-tight mb-8">Terms & Conditions</h1>
      
      <div className="glass-card p-8 md:p-12 border-white/10 text-white/80 space-y-8 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
          <p>
            By accessing our website and participating in the Roxten Studios Partnership Program, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these terms, you must not use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">2. Partnership Program Eligibility</h2>
          <p>
            The Partnership Program is open to agencies, consultants, and individuals capable of referring qualified leads for digital product development, SaaS, and web transformation projects. Roxten Studios reserves the right to accept or reject any partner application at our sole discretion.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">3. Referral Validity & Commissions</h2>
          <p>
            A referral is only considered valid if it results in a signed contract and a successfully processed client payment. Partners earn a tiered commission (10% to 20%) based on their referral volume. Commissions are strictly disbursed <strong>after</strong> Roxten Studios receives the corresponding payment from the client.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
          <p>
            All content, designs, architecture, and code produced by Roxten Studios remain our intellectual property until full payment is received from the client, at which point rights are transferred as specified in individual client contracts.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h2>
          <p>
            Roxten Studios shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your participation in the partnership program or use of our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">6. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will notify active partners of any material changes via their dashboard or email. Continued participation in the program constitutes acceptance of the modified terms.
          </p>
        </section>

        <div className="pt-8 border-t border-white/10 text-sm text-white/40">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </div>
      </div>
    </div>
  );
}
