export default function TermsPage() {
  return (
    <div className="p-8 md:p-12 max-w-4xl mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl font-heading font-bold mb-2">Terms & Conditions</h1>
        <p className="text-muted-foreground">Last updated: June 17, 2026</p>
      </div>

      <div className="glass-card p-8 md:p-12 border-white/10 prose prose-invert max-w-none">
        <h2 className="text-xl font-bold mb-4 mt-0">1. Partnership Agreement</h2>
        <p className="text-muted-foreground mb-6">
          By joining the Roxten Studios Partner Program, you agree to these terms and conditions. The program is designed to reward agencies and consultants for referring clients to Roxten Studios.
        </p>

        <h2 className="text-xl font-bold mb-4">2. Referral Process and Attribution</h2>
        <p className="text-muted-foreground mb-6">
          A referral is considered valid when a new client signs a contract with Roxten Studios through your unique referral link or direct introduction. Self-referrals or referrals of existing Roxten Studios clients do not qualify for commission.
        </p>

        <h2 className="text-xl font-bold mb-4">3. Commission and Payouts</h2>
        <p className="text-muted-foreground mb-4">
          Commissions are calculated as a percentage of the total project value, excluding taxes and third-party expenses. 
        </p>
        <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-xl text-yellow-500 mb-6">
          <strong>Important:</strong> Referral commissions are only processed and paid out <em>after</em> Roxten Studios has received full or partial payment from the referred client. Payouts match the client's payment schedule.
        </div>

        <h2 className="text-xl font-bold mb-4">4. Payment Methods</h2>
        <p className="text-muted-foreground mb-6">
          You must maintain valid bank details in your Payouts settings to receive commissions. We process payments via bank transfer to the account specified in your dashboard. You are responsible for any taxes associated with receiving commission payouts.
        </p>

        <h2 className="text-xl font-bold mb-4">5. Confidentiality</h2>
        <p className="text-muted-foreground mb-6">
          As a partner, you may have access to confidential information regarding Roxten Studios' pricing, processes, and client details. You agree to maintain strict confidentiality and not disclose this information to third parties.
        </p>

        <h2 className="text-xl font-bold mb-4">6. Termination</h2>
        <p className="text-muted-foreground mb-6">
          Either party may terminate this partnership agreement at any time with a 30-day written notice. Any pending commissions for valid referrals made prior to termination will be honored according to the standard payout schedule.
        </p>
      </div>
    </div>
  );
}
