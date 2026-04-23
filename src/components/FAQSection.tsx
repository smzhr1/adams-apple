import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How much does tree removal cost in Austin, TX?",
    a: "Tree removal in Austin typically ranges from $300 to $3,000 or more depending on tree size, location, complexity, and whether a city permit is required. Use our free Tree Removal Guesstimator for an instant range on your specific tree, or call us for a free on-site estimate.",
  },
  {
    q: "Do I need a permit to remove a tree in Austin?",
    a: "Yes, if the tree is a Heritage Tree — meaning it is 19 inches or more in diameter measured at 4.5 feet from the ground, and is a protected species such as a live oak, cedar elm, pecan, or bald cypress. Trees over 24 inches in diameter face additional restrictions. Adam's Apple handles the permit application and arborist documentation for you.",
  },
  {
    q: "When is it safe to trim oak trees in Austin?",
    a: "July through January is the safe pruning window for oak trees in Austin. The city and Texas A&M Forest Service recommend against pruning oaks from February 1 through June 30 when nitidulid beetles are active and can spread oak wilt fungus through fresh cuts. Emergency storm damage is exempt but requires immediate wound sealing.",
  },
  {
    q: "What is oak wilt and is it common in Austin?",
    a: "Oak wilt is a fatal fungal disease that spreads through root grafts and sap beetles. It is extremely common in Austin, particularly in South Austin neighborhoods like Shady Hollow, Circle C, and the live oak belts throughout Travis County. Early treatment with propiconazole trunk injections can save infected trees if caught before the disease has progressed. Contact us for a free assessment if you suspect oak wilt on your property.",
  },
  {
    q: "How quickly can you respond to a tree emergency in Austin?",
    a: "For tree emergencies in Austin — fallen trees, storm damage, hazardous limbs over structures — we aim to have an arborist on-site within one to three hours. Call 512-912-8733 directly for the fastest response. We serve all Austin neighborhoods and can assist with insurance documentation and damage reports.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
          <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-3">
            Frequently Asked Questions
          </p>
          <p className="text-muted-foreground text-lg">
            For other questions or to schedule, call or text us at{" "}
            <a href="tel:5129128733" className="text-primary font-semibold hover:underline">512-912-8733</a>{" "}
            or email{" "}
            <a href="mailto:info@adamsappletreeservice.com" className="text-primary font-semibold hover:underline">
              info@adamsappletreeservice.com
            </a>.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`faq-${idx}`}
              className="bg-background border border-border rounded-xl px-6"
            >
              <AccordionTrigger className="text-foreground font-bold text-left text-base hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-8">
          <a href="/faqs" className="text-primary font-semibold hover:underline text-lg">
            See All FAQs →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
