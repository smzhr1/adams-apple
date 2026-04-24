import { Link, useParams } from "react-router-dom";
import { ArrowRight, Check, Phone, Mail, Globe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccreditationStrip from "@/components/AccreditationStrip";
import ServiceAreas from "@/components/ServiceAreas";
import CTASection from "@/components/CTASection";
import GuesstimatorPreview from "@/components/GuesstimatorPreview";
import GoogleReviews from "@/components/GoogleReviews";
import HeroPhotoCarousel from "@/components/HeroPhotoCarousel";
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
        {/* HERO — desktop: split panel + photo. Mobile: stacked text, then photo */}
        <section className="relative overflow-hidden bg-card lg:min-h-[88vh] lg:flex lg:items-center">
          {/* DESKTOP photo (right side, absolute) */}
          <div className="hidden lg:block absolute inset-y-0 right-0 w-[58%]">
            <HeroPhotoCarousel
              images={service.heroImages?.length ? service.heroImages : [service.heroImage]}
              alt={service.title}
              variant="background"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-card via-card/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-card to-transparent" />
          </div>

          {/* DESKTOP left panel */}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-1/2 bg-card" aria-hidden="true" />
          <div className="hidden lg:block absolute inset-y-0 left-1/2 w-[14%] bg-gradient-to-r from-card to-transparent pointer-events-none" aria-hidden="true" />

          <div className="container mx-auto px-4 relative z-10 pt-[96px] pb-10 md:pt-[120px] md:pb-14 lg:py-24">
            <div className="max-w-2xl space-y-6 lg:space-y-7 animate-fade-in">
              <div className="flex items-center gap-3">
                <span className="block w-10 h-px bg-secondary" aria-hidden="true" />
                <p className="text-secondary font-bold uppercase tracking-[0.25em] text-xs">
                  {service.heroEyebrow}
                </p>
              </div>

              <h1 className="text-foreground leading-[1.05] text-[34px] sm:text-[40px] md:text-5xl lg:text-[length:var(--text-hero)]">
                {service.heroHeadline.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="text-secondary">
                  {service.heroHeadline.split(" ").slice(-1)}
                </span>
              </h1>

              <p
                className="text-foreground/85 font-semibold"
                style={{ fontSize: "var(--text-lg)", lineHeight: 1.5 }}
              >
                {service.heroTagline}
              </p>

              {/* MOBILE-only photo carousel — placed between tagline and supporting copy for prominence */}
              <div className="lg:hidden">
                <HeroPhotoCarousel
                  images={service.heroImages?.length ? service.heroImages : [service.heroImage]}
                  alt={service.title}
                  variant="mobile-peek"
                />
              </div>

              <p
                className="text-muted-foreground max-w-xl"
                style={{ fontSize: "var(--text-md)", lineHeight: 1.65 }}
              >
                {service.heroSubhead}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button
                  variant="cta"
                  size="xl"
                  className="uppercase tracking-wider text-[15px] font-bold"
                  asChild
                >
                  <a href="/#estimate">Schedule an Estimate</a>
                </Button>
                <Button variant="outline" size="xl" asChild className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                  <a href="tel:5129128733" className="flex items-center gap-2">
                    <Phone className="w-5 h-5" /> 512-912-8733
                  </a>
                </Button>
              </div>

              {/* Stats bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
                {[
                  { value: "15+", label: "Years in Business" },
                  { value: "2,500+", label: "Happy Customers" },
                  { value: "5.0★", label: "Google Rating" },
                  { value: "ISA", label: "Certified Arborists" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-xl md:text-2xl font-heading font-bold text-secondary leading-none">
                      {stat.value}
                    </p>
                    <p className="text-muted-foreground text-xs mt-1.5">
                      {stat.label}
                    </p>
                  </div>
                ))}
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
            {service.offerings.length === 1 ? (
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3
                    className="font-heading font-bold text-foreground mb-4"
                    style={{ fontSize: "var(--text-xl)" }}
                  >
                    {service.offerings[0].title}
                  </h3>
                  <p
                    className="text-muted-foreground leading-relaxed mb-6"
                    style={{ fontSize: "var(--text-md)" }}
                  >
                    {service.offerings[0].body}
                  </p>
                  {service.offerings[0].cta && (
                    <a
                      href={service.offerings[0].cta!.href}
                      className="inline-flex items-center gap-1.5 text-primary font-semibold hover:underline"
                    >
                      {service.offerings[0].cta!.label}{" "}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg order-first lg:order-last">
                  <img
                    src={service.offerings[0].image}
                    alt={service.offerings[0].title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            ) : (
              <div
                className={`grid gap-6 ${
                  service.offerings.length === 2
                    ? "md:grid-cols-2"
                    : service.offerings.length === 4
                    ? "md:grid-cols-2 lg:grid-cols-4"
                    : "md:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {service.offerings.map((offering) => (
                  <article
                    key={offering.title}
                    className="bg-card border border-border rounded-2xl overflow-hidden flex flex-col"
                  >
                    <div className={`overflow-hidden ${service.offerings.length === 2 ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
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
            )}
          </div>
        </section>

        {/* TREE REMOVAL GUESSTIMATOR */}
        {service.showGuesstimator && <GuesstimatorPreview />}

        {/* INCLUDED WITH EVERY — alternate to muted when no GUESStimator separates it from offerings */}
        <section className={`py-20 ${service.showGuesstimator ? "bg-background" : "bg-muted"}`}>
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

        {/* WHY CHOOSE US */}
        <section className="py-20 bg-muted">
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

        {/* GOOGLE REVIEWS */}
        <GoogleReviews />

        {/* PARTNERSHIPS */}
        {service.partnerships && (
          <section className="py-20 bg-muted">
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
                    className="bg-background border border-border rounded-2xl p-6 flex flex-col"
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
