import { Link, useParams } from "react-router-dom";
import { ArrowRight, Check, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccreditationStrip from "@/components/AccreditationStrip";
import ServiceAreas from "@/components/ServiceAreas";
import CTASection from "@/components/CTASection";
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
                <h1 className="font-heading font-bold text-secondary-foreground mb-6">
                  {service.heroHeadline}
                </h1>
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

        {/* PROCESS */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg order-2 lg:order-1">
                <img
                  src={service.process.image}
                  alt={`How our ${service.title.toLowerCase()} process works`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="order-1 lg:order-2">
                <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-3">
                  Our Process
                </p>
                <h2 className="font-heading font-bold text-foreground mb-8">
                  How Our {service.title} Service Works
                </h2>
                <ol className="space-y-6">
                  {service.process.steps.map((step, idx) => (
                    <li key={step.title} className="flex gap-4">
                      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <div>
                        <h3
                          className="font-heading font-bold text-foreground mb-1"
                          style={{ fontSize: "var(--text-lg)" }}
                        >
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
                <Button variant="cta" size="lg" className="mt-8" asChild>
                  <a href="/#estimate">Get a Free Estimate</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US BAND */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="font-heading font-bold text-secondary-foreground text-center mb-12 max-w-3xl mx-auto">
              {service.whyChoose.headline}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {service.whyChoose.points.map((point) => (
                <div key={point.title}>
                  <h3
                    className="font-heading font-bold text-accent mb-2"
                    style={{ fontSize: "var(--text-lg)" }}
                  >
                    {point.title}
                  </h3>
                  <p className="text-secondary-foreground/85 leading-relaxed">
                    {point.body}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="cta" size="xl" asChild>
                <a href="/#estimate">Get a Free Quote</a>
              </Button>
            </div>
          </div>
        </section>

        {/* INCLUDED WITH EVERY */}
        <section className="py-20 bg-background">
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
        <section className="py-20 bg-muted">
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
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-10">
              <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-3">
                Common Questions
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
                  className="bg-card border border-border rounded-xl px-6"
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
