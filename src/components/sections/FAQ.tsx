import { ScrollSection } from "@/components/animations/ScrollSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      q: "How much commission do I earn?",
      a: "You earn a massive 15% recurring commission on the lifetime value of every client you refer to us."
    },
    {
      q: "When do I get paid?",
      a: "Commissions are paid out monthly, securely directly to your bank account, automatically generated through your dashboard."
    },
    {
      q: "Do I need to manage the client?",
      a: "Absolutely not. You refer the client, and we handle the sales calls, scoping, execution, and lifetime support."
    },
    {
      q: "How are leads tracked to me?",
      a: "When a user clicks your unique referral link, we place a 30-day tracking cookie in their browser. If they submit a project, our database immediately links them to your partner account."
    }
  ];

  return (
    <section className="py-32 relative" id="faq">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">Everything you need to know about the referral program.</p>
        </div>

        <ScrollSection>
          <Accordion className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem value={`faq-${i}`} key={i} className="glass-card px-6 rounded-lg border-none data-[state=open]:bg-white/10 transition-colors">
                <AccordionTrigger className="text-left font-medium hover:no-underline py-6">
                  <span className="text-lg">{faq.q}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollSection>
      </div>
    </section>
  );
};
