import { Link, useParams } from "react-router-dom";
import { ArrowRight, Check, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccreditationStrip from "@/components/AccreditationStrip";
import ServiceAreas from "@/components/ServiceAreas";
import CTASection from "@/components/CTASection";
import EstimateCalculator from "@/components/EstimateCalculator";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { services } from "@/data/services";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? services[slug] : null;

  if (!service) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-heading font-bold text-foreground">
            Service not found
          </h1>
          <p className="text-muted-foreground mt-4">
            The service page you're looking for is coming soon.
          </p>
          <Button variant="cta" size="xl" className="mt-8" asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* HERO */}
        <section className="relative bg-secondary overflow-hidden">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <p className="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-4">
                  {service.heroEyebrow}
                </p>
                <h1 className="font-heading font-bold text-secondary-foreground mb-4">
                  {service.heroHeadline}
                </h1>
                <p
                  className="text-accent font-semibold mb-6"
                  style={{ fontSize: "var(--text-lg)" }}
                >
                  {service.heroTagline}
                </p>
                <p
                  className="text-secondary-foreground/85 mb-8 leading-relaxed"
                  style={{ fontSize: "var(--text-md)" }}
                >
                  {service.heroSubhead}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="cta" size="xl" asChild>
                    <a href="/#estimate">Schedule an Estimate</a>
                  </Button>
                  <Button variant="heroOutline" size="xl" asChild>
                    <a href="tel:5129128733" className="flex items-center gap-2">
                      <Phone className="w-5 h-5" /> 512-912-8733
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[5/4]">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  width={1200}
                  height={900}
                />
              </div>
            </div>
          </div>
        </section>

        <AccreditationStrip />

        {/* OFFERINGS — what's included under this service */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-3">
                What We Offer
              </p>
              <h2 className="font-heading font-bold text-foreground">
                {service.title} Services for Your Property
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.offerings.map((offering) => (
                <article
                  key={offering.title}
                  className="bg-card border border-border rounded-2xl overflow-hidden flex flex-col"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={offering.image}
                      alt={offering.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3
                      className="font-heading font-bold text-foreground mb-3"
                      style={{ fontSize: "var(--text-lg)" }}
                    >
                      {offering.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {offering.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TREE REMOVAL GUESSTIMATOR — unique to this page */}
        {service.showGuesstimator && (
          <section className="py-20 bg-secondary">
            <div className="container mx-auto px-4">
              <div className="text-center mb-10 max-w-2xl mx-auto">
                <p className="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-3">
                  Instant Ballpark
                </p>
                <h2 className="font-heading font-bold text-secondary-foreground mb-4">
                  {service.guesstimatorHeadline}
                </h2>
                <p className="text-secondary-foreground/85 leading-relaxed">
                  {service.guesstimatorSubhead}
                </p>
              </div>
              <div className="-mt-2">
                <EstimateCalculator />
              </div>
            </div>
          </section>
        )}

        {/* WHY CHOOSE US BAND */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-3">
                What Sets Us Apart
              </p>
              <h2 className="font-heading font-bold text-foreground mb-6">
                {service.whyChoose.headline}
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto" style={{ fontSize: "var(--text-md)" }}>
                {service.whyChoose.intro}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {service.whyChoose.points.map((point) => (
                <div key={point.title} className="bg-card border border-border rounded-2xl p-6">
                  <h3
                    className="font-heading font-bold text-primary mb-2"
                    style={{ fontSize: "var(--text-lg)" }}
                  >
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {point.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INCLUDED WITH EVERY */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
                <img
                  src={service.included.image}
                  alt={service.included.headline}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <h2 className="font-heading font-bold text-foreground mb-6">
                  {service.included.headline}
                </h2>
                <ul className="space-y-3 mb-8">
                  {service.included.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4" />
                      </span>
                      <span
                        className="text-foreground"
                        style={{ fontSize: "var(--text-base)" }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button variant="cta" size="lg" asChild>
                  <a href="/#estimate">Schedule My Estimate</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* RELATED SERVICES */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-3">
                More Services
              </p>
              <h2 className="font-heading font-bold text-foreground">
                Other Ways We Care For Your Trees
              </h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {service.related.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/services/${rel.slug}`}
                  className="group flex flex-col bg-secondary rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3
                      className="font-heading font-semibold text-secondary-foreground inline-flex items-center gap-1.5"
                      style={{ fontSize: "var(--text-base)" }}
                    >
                      {rel.title}
                      <ArrowRight className="w-3.5 h-3.5 text-accent" />
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-10">
              <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-3">
                Frequently Asked Questions
              </p>
              <h2 className="font-heading font-bold text-foreground mb-4">
                {service.title} FAQs
              </h2>
              <p className="text-muted-foreground text-lg">
                Still have questions? Call or text us at{" "}
                <a
                  href="tel:5129128733"
                  className="text-primary font-semibold hover:underline"
                >
                  512-912-8733
                </a>
                .
              </p>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {service.faqs.map((faq, idx) => (
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
          </div>
        </section>

        <ServiceAreas />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default ServicePage;
