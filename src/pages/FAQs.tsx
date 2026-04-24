import { useEffect } from "react";
import { Phone, Mail, HelpCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Why should I hire a company with a Certified Arborist?",
    a: "The International Society of Arboriculture (ISA) certification requires a comprehensive understanding of proper pruning and removal techniques, ethics and standards on performing tree work, and determining how trees impact our local environment. Studying for and receiving the certification is a reflection that the arborist takes their work seriously and should be thinking about the long-term health of your trees and the safety of the people and property below them.",
  },
  {
    q: "How often should I have my trees trimmed?",
    a: "This really depends on your objective, budget, and the species of trees on your property. While we love to visit each client annually for inspections and assessments, we generally prune every 2–5 years. Fast growing species like hackberry or chinaberry near a roofline may require annual visits, but a well-structured live oak with proper clearance from a roof may only require intervals of 5 years between visits. We would be glad to schedule a free assessment to determine the best option for you.",
  },
  {
    q: "Should I remove this tree on my property or just trim it?",
    a: "We are always glad to help make a determination between a pruning or removal. There are many factors to consider including health of the tree, potential risk of the tree and any objects it may strike, competition with other trees or landscape, and overall aesthetic appeal. We can also ensure all local ordinances will be followed when making these determinations.",
  },
  {
    q: "Do I need a permit to remove my tree?",
    a: "If you live in the City of Austin and your tree is larger than 19\" in diameter, you will need a permit to remove. If the tree is clearly dead, diseased, or imminent for failure this will not cost additional fees. Also, if the tree is considered an invasive species, the city may also grant the permit with no additional mitigation requirements. Other cities with tree ordinances include Rollingwood, Lakeway, Westlake, Round Rock, and Cedar Park. If you live in any of these areas we are glad to confirm specific requirements of your city's ordinance prior to performing any tree work.",
  },
  {
    q: "Should I be concerned about oak wilt in my neighborhood?",
    a: "Central Texas is a hotspot for oak wilt. Our team can help determine if your property is in a higher risk area for a tree catching or spreading oak wilt. The general rule is that if there is not an active infection within 100 yards of your trees, then you are not in a high-risk zone. We still take all precautions on all oaks which include sanitizing blades and painting all wounds on each oak tree.",
  },
  {
    q: "Do you offer tree planting services?",
    a: "Yes, we offer limited tree planting services for both residential and commercial properties. We recommend smaller trees (up to 45-gallon maximum) as the root ball will be able to handle transplant shock and recover quicker than a larger tree. Our team can help you select the right tree species for your location and properly plant and care for the tree.",
  },
  {
    q: "How can I tell if my soil is healthy for my trees?",
    a: "We have a tendency to look up when we discuss trees, but so much of the health of trees is tied to the health of the soil. Arborists should consider the amount of water, available nutrients, and any potential competition (grass or shrubs) or even infections (fungus along the base or roots) that are affecting the tree. Ensuring healthy, moist soil can contribute to a long and healthy life for your tree.",
  },
  {
    q: "Do you require deposits or down payments to complete the work?",
    a: "No we do not. We like to think of ourselves more like a restaurant: we are only going to send you the bill once you are happy with the food. We want you to feel confident you are going to receive our full attention and care throughout the entire process. We even offer free return visits if you feel something was missed from the original scope of work.\n\nPlease note: this does not apply to clients with a delinquent bill or for projects greater than $7,500.",
  },
  {
    q: "Do you require sales tax?",
    a: "Yes, the state of Texas requires all tree service providers to collect sales tax on any services provided. If you have a sales tax exemption we are glad to honor the exemption and remove the tax for your work.",
    link: { label: "Link to Texas Comptroller", href: "https://comptroller.texas.gov/taxes/exempt/" },
  },
];

const FAQs = () => {
  useEffect(() => {
    document.title = "Tree Care FAQs | Adam's Apple Tree Service Austin, TX";
    const meta = document.querySelector('meta[name="description"]');
    const content =
      "Answers to common tree care questions from Austin's ISA Certified Arborists — permits, oak wilt, pruning frequency, deposits, soil health and more.";
    if (meta) meta.setAttribute("content", content);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = content;
      document.head.appendChild(m);
    }

    // FAQ JSON-LD
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
    document.head.appendChild(ld);
    return () => {
      document.head.removeChild(ld);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[hsl(110,41%,42%)]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-[hsl(48,100%,48%)] font-bold uppercase tracking-[0.2em] text-sm mb-4">
            How can we help?
          </p>
          <h1 className="font-heading font-bold text-primary-foreground text-4xl md:text-6xl mb-6 leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-primary-foreground/90 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Please reach us by phone or text at{" "}
            <a href="tel:5129128733" className="text-[hsl(48,100%,48%)] font-semibold hover:underline">
              512-912-8733
            </a>{" "}
            or email us at{" "}
            <a
              href="mailto:info@adamsappletreeservice.com"
              className="text-[hsl(48,100%,48%)] font-semibold hover:underline break-all"
            >
              info@adamsappletreeservice.com
            </a>{" "}
            if you cannot find an answer to your question.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <Button variant="cta" size="lg" className="uppercase tracking-wider font-bold" asChild>
              <a href="#estimate">
                <Phone className="w-4 h-4 mr-2" /> Schedule an Estimate
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="uppercase tracking-wider font-bold bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <a href="mailto:info@adamsappletreeservice.com">
                <Mail className="w-4 h-4 mr-2" /> Email Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <HelpCircle className="w-5 h-5 text-primary" />
            </div>
            <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm">
              {faqs.length} Common Questions
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                className="bg-muted border border-border rounded-xl px-6"
              >
                <AccordionTrigger className="text-foreground font-bold text-left text-base md:text-lg hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base whitespace-pre-line">
                  {faq.a}
                  {faq.link && (
                    <>
                      {" "}
                      <a
                        href={faq.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-semibold hover:underline"
                      >
                        {faq.link.label} →
                      </a>
                    </>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default FAQs;
