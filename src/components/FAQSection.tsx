import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How much does tree trimming or tree removal cost?",
    a: "Pricing depends on the size, species, location, and condition of your tree. We provide free on-site estimates so you get an accurate quote — no vague ranges. Call or text 512-912-8733 to schedule yours.",
  },
  {
    q: "Why should I trim my trees?",
    a: "Regular trimming removes dead or diseased branches, improves structure, reduces storm damage risk, and keeps your trees looking great. It also promotes healthy growth and can extend the life of your trees.",
  },
  {
    q: "How often should I trim my trees?",
    a: "Most trees benefit from pruning every 2–3 years, though fast-growing species or trees near structures may need annual attention. Our arborists can recommend the right schedule during a free site visit.",
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
            If you have other questions or are ready to schedule, please call or text us at{" "}
            <a href="tel:5129128733" className="text-primary font-semibold hover:underline">512-912-8733</a>{" "}
            or email us at{" "}
            <a href="mailto:info@adamsappletreeservice.com" className="text-primary font-semibold hover:underline">
              info@adamsappletreeservice.com
            </a>
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
