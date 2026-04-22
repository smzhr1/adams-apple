import { Link, useParams } from "react-router-dom";
import { ArrowRight, Check, Phone, Mail, Globe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccreditationStrip from "@/components/AccreditationStrip";
import ServiceAreas from "@/components/ServiceAreas";
import CTASection from "@/components/CTASection";
import GuesstimatorPreview from "@/components/GuesstimatorPreview";
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
        <section className="relative bg-primary overflow-hidden pt-24 md:pt-28">
          {/* Decorative organic pattern */}
          <div
            className="absolute inset-0 opacity-[0.12] pointer-events-none"
            aria-hidden="true"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'><g fill='none' stroke='white' stroke-width='1.2' stroke-linecap='round'><path d='M20 80 Q50 40 80 80 T140 80'/><path d='M30 110 Q60 80 90 110 T150 110'/><path d='M10 50 Q40 20 70 50 T130 50'/><circle cx='40' cy='80' r='2'/><circle cx='110' cy='80' r='2'/><circle cx='75' cy='110' r='2'/></g></svg>\")",
              backgroundSize: "320px 320px",
            }}
          />
          {/* Soft radial highlight */}
          <div
            className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(circle, hsl(var(--accent) / 0.18) 0%, transparent 70%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background/40 pointer-events-none" />

          <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <p className="inline-block bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/25 text-primary-foreground font-bold uppercase tracking-[0.2em] text-xs px-3 py-1.5 rounded-full mb-5">
                  {service.heroEyebrow}
                </p>
                <h1 className="font-heading font-bold text-primary-foreground mb-4">
                  {service.heroHeadline}
                </h1>
                <p
                  className="text-accent font-semibold mb-6"
                  style={{ fontSize: "var(--text-lg)" }}
                >
                  {service.heroTagline}
                </p>
                <p
                  className="text-primary-foreground/90 mb-8 leading-relaxed"
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
              <div className="relative">
                {/* Decorative offset frame */}
                <div
                  className="absolute -inset-3 md:-inset-4 rounded-3xl border-2 border-accent/60 -z-10"
                  aria-hidden="true"
                />
                <div
                  className="absolute -bottom-5 -left-5 w-24 h-24 rounded-2xl bg-accent/30 -z-10"
                  aria-hidden="true"
                />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[5/4]">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    width={1200}
                    height={960}
                  />
                </div>
                {/* Floating trust badge */}
                <div className="hidden md:flex absolute -bottom-6 -right-4 bg-background rounded-xl shadow-xl px-5 py-3 items-center gap-3 max-w-[220px]">
                  <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-foreground text-sm leading-tight">
                      ISA Certified
                    </p>
                    <p className="text-muted-foreground text-xs leading-tight">
                      Arborists on staff
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AccreditationStrip />

        {/* OFFERINGS */}
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
                    <p className="text-muted-foreground leading-relaxed flex-1">
                      {offering.body}
                    </p>
                    {offering.cta && (
                      <a
                        href={offering.cta.href}
                        className="inline-flex items-center gap-1.5 text-primary font-semibold mt-4 hover:underline"
                      >
                        {offering.cta.label} <ArrowRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TREE REMOVAL GUESSTIMATOR */}
        {service.showGuesstimator && <GuesstimatorPreview />}

        {/* WHY CHOOSE US */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-10">
              <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-3">
                What Sets Us Apart
              </p>
              <h2 className="font-heading font-bold text-foreground">
                {service.whyChoose.headline}
              </h2>
            </div>
            <div className="space-y-5">
              {service.whyChoose.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-muted-foreground leading-relaxed"
                  style={{ fontSize: "var(--text-md)" }}
                >
                  {p}
                </p>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button variant="cta" size="xl" asChild>
                <a href="/#estimate">Get a Free Estimate</a>
              </Button>
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

        {/* PARTNERSHIPS */}
        {service.partnerships && (
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-12">
                <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-3">
                  Partnerships
                </p>
                <h2 className="font-heading font-bold text-foreground mb-4">
                  {service.partnerships.headline}
                </h2>
                {service.partnerships.intro && (
                  <p
                    className="text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                    style={{ fontSize: "var(--text-md)" }}
                  >
                    {service.partnerships.intro}
                  </p>
                )}
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {service.partnerships.partners.map((p) => (
                  <div
                    key={p.title}
                    className="bg-card border border-border rounded-2xl p-6 flex flex-col"
                  >
                    <h3
                      className="font-heading font-bold text-primary mb-3"
                      style={{ fontSize: "var(--text-lg)" }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed flex-1">
                      {p.body}
                    </p>
                    {p.contact && (
                      <div className="mt-5 pt-5 border-t border-border space-y-2 text-sm">
                        {p.contact.phone && (
                          <a
                            href={`tel:${p.contact.phone.replace(/[^0-9]/g, "")}`}
                            className="flex items-center gap-2 text-foreground hover:text-primary"
                          >
                            <Phone className="w-4 h-4" /> {p.contact.phone}
                          </a>
                        )}
                        {p.contact.email && (
                          <a
                            href={`mailto:${p.contact.email}`}
                            className="flex items-center gap-2 text-foreground hover:text-primary break-all"
                          >
                            <Mail className="w-4 h-4 flex-shrink-0" /> {p.contact.email}
                          </a>
                        )}
                        {p.contact.website && (
                          <a
                            href={p.contact.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-foreground hover:text-primary break-all"
                          >
                            <Globe className="w-4 h-4 flex-shrink-0" />
                            {p.contact.website.replace(/^https?:\/\//, "")}
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {service.partnerships.disclaimer && (
                <p className="text-center text-muted-foreground text-sm mt-10 max-w-2xl mx-auto italic">
                  {service.partnerships.disclaimer}
                </p>
              )}
            </div>
          </section>
        )}

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
                Frequently Asked Questions
              </p>
              <h2 className="font-heading font-bold text-foreground mb-4">
                {service.title} FAQs
              </h2>
              <p className="text-muted-foreground text-lg">
                Please reach us at{" "}
                <a
                  href="mailto:info@adamsappletreeservice.com"
                  className="text-primary font-semibold hover:underline"
                >
                  info@adamsappletreeservice.com
                </a>{" "}
                if you cannot find an answer to your question.
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

        {/* BLOG CALLOUT */}
        {service.blogCallout && (
          <section className="py-20 bg-muted">
            <div className="container mx-auto px-4 max-w-3xl text-center">
              <h2 className="font-heading font-bold text-foreground mb-6">
                {service.blogCallout.headline}
              </h2>
              <div className="space-y-4 mb-8">
                {service.blogCallout.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-muted-foreground leading-relaxed"
                    style={{ fontSize: "var(--text-md)" }}
                  >
                    {p}
                  </p>
                ))}
              </div>
              <Button variant="cta" size="xl" asChild>
                <Link to={service.blogCallout.ctaHref}>
                  {service.blogCallout.ctaLabel}
                </Link>
              </Button>
            </div>
          </section>
        )}

        <ServiceAreas />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default ServicePage;
