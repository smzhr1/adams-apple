import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, MapPin, Phone, Clock, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccreditationStrip from "@/components/AccreditationStrip";
import GoogleReviews from "@/components/GoogleReviews";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { locations } from "@/data/locations";
import ctaBg from "@/assets/cta-yard.jpg";
import heroArborist from "@/assets/hero-arborist.jpg";

const LocationPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = slug ? locations[slug] : null;

  useEffect(() => {
    if (!location) return;
    const prevTitle = document.title;
    document.title = location.metaTitle;

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute("content");
    metaDesc?.setAttribute("content", location.metaDescription);

    return () => {
      document.title = prevTitle;
      if (metaDesc && prevDesc) metaDesc.setAttribute("content", prevDesc);
    };
  }, [location]);

  if (!location) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-heading font-bold text-foreground">
            Location not found
          </h1>
          <p className="text-muted-foreground mt-4">
            The location page you're looking for is coming soon.
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
        <section className="relative overflow-hidden bg-card lg:min-h-[78vh] lg:flex lg:items-center">
          {/* DESKTOP photo */}
          <div className="hidden lg:block absolute inset-y-0 right-0 w-[58%]">
            <img
              src={heroArborist}
              alt={`Tree service in ${location.name}, ${location.state}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-card via-card/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-card to-transparent" />
          </div>

          <div className="hidden lg:block absolute inset-y-0 left-0 w-1/2 bg-card" aria-hidden="true" />
          <div className="hidden lg:block absolute inset-y-0 left-1/2 w-[14%] bg-gradient-to-r from-card to-transparent pointer-events-none" aria-hidden="true" />

          <div className="container mx-auto px-4 relative z-10 pt-[96px] pb-10 md:pt-[120px] md:pb-14 lg:py-20">
            <div className="max-w-2xl space-y-6 lg:space-y-7 animate-fade-in">
              <div className="flex items-center gap-3">
                <span className="block w-10 h-px bg-secondary" aria-hidden="true" />
                <p className="text-secondary font-bold uppercase tracking-[0.25em] text-xs">
                  {location.heroEyebrow}
                </p>
              </div>

              <h1 className="text-foreground leading-[1.1] text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-heading font-bold">
                Tree Service in <span className="text-secondary">{location.name}, {location.state}</span>
                <span className="block mt-2 text-foreground/85 text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-semibold leading-snug">
                  Removal, Trimming and Emergency Care Since 2008
                </span>
              </h1>

              {/* MOBILE photo */}
              <div className="lg:hidden rounded-2xl overflow-hidden aspect-[16/10]">
                <img
                  src={heroArborist}
                  alt={`Tree service in ${location.name}, ${location.state}`}
                  className="w-full h-full object-cover"
                />
              </div>

              <p
                className="text-muted-foreground max-w-xl"
                style={{ fontSize: "var(--text-md)", lineHeight: 1.65 }}
              >
                {location.heroSubhead}
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
                <Button
                  variant="outline"
                  size="xl"
                  asChild
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                >
                  <a href="tel:5129128733" className="flex items-center gap-2">
                    <Phone className="w-5 h-5" /> 512-912-8733
                  </a>
                </Button>
              </div>

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

        {/* SERVICES GRID */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-3">
                Local Tree Services
              </p>
              <h2 className="font-heading font-bold text-foreground">
                {location.servicesHeadline}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {location.services.map((service) => (
                <article
                  key={service.title}
                  className="bg-card border border-border rounded-2xl p-6 flex flex-col"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3
                    className="font-heading font-bold text-foreground mb-3"
                    style={{ fontSize: "var(--text-lg)" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    {service.body}
                  </p>
                  {service.href && (
                    <a
                      href={service.href}
                      className="inline-flex items-center gap-1.5 text-primary font-semibold mt-4 hover:underline"
                    >
                      Learn more <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHY US STRIP */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h2 className="font-heading font-bold text-secondary-foreground">
                {location.whyHeadline}
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {location.whyPoints.map((point) => (
                <div key={point.title} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground inline-flex items-center justify-center mb-4">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3
                    className="font-heading font-bold text-secondary-foreground mb-2"
                    style={{ fontSize: "var(--text-lg)" }}
                  >
                    {point.title}
                  </h3>
                  <p
                    className="text-secondary-foreground/85 leading-relaxed"
                    style={{ fontSize: "var(--text-base)" }}
                  >
                    {point.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LOCAL INFO */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-10">
              <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-3">
                Local Knowledge
              </p>
              <h2 className="font-heading font-bold text-foreground">
                {location.localInfoHeadline}
              </h2>
            </div>
            <div className="space-y-5">
              {location.localInfoParagraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-muted-foreground leading-relaxed"
                  style={{ fontSize: "var(--text-md)" }}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* NEIGHBORHOODS */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-3">
                Where We Work
              </p>
              <h2 className="font-heading font-bold text-foreground mb-4">
                {location.neighborhoodsHeadline}
              </h2>
              <p
                className="text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                style={{ fontSize: "var(--text-md)" }}
              >
                {location.neighborhoodsIntro}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {location.neighborhoods.map((n) => (
                <div
                  key={n.name}
                  className="bg-background border border-border rounded-2xl p-5 flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3
                      className="font-heading font-bold text-foreground mb-1"
                      style={{ fontSize: "var(--text-base)" }}
                    >
                      {n.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {n.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-foreground mt-10 max-w-3xl mx-auto" style={{ fontSize: "var(--text-base)" }}>
              {location.neighborhoodsFooter.split("512-912-8733")[0]}
              <a href="tel:5129128733" className="text-primary font-semibold hover:underline">
                512-912-8733
              </a>
              {location.neighborhoodsFooter.split("512-912-8733")[1]}
            </p>
          </div>
        </section>

        {/* REVIEWS */}
        <GoogleReviews />

        {/* FAQ */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-10">
              <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-3">
                Frequently Asked Questions
              </p>
              <h2 className="font-heading font-bold text-foreground mb-4">
                {location.faqsHeadline}
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {location.faqs.map((faq, idx) => (
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

        {/* CTA */}
        <section className="relative py-28 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${ctaBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/70 to-foreground/50" />
          <div className="relative container mx-auto px-4 text-center max-w-2xl">
            <h2 className="font-heading font-bold text-primary-foreground mb-6">
              {location.ctaHeadline}
            </h2>
            <p
              className="text-primary-foreground/80 max-w-xl mx-auto mb-10"
              style={{ fontSize: "var(--text-md)", lineHeight: 1.65 }}
            >
              Contact us today by calling or texting{" "}
              <a href="tel:5129128733" className="text-accent font-bold hover:underline">
                512-912-8733
              </a>{" "}
              or fill out our contact form.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button
                variant="cta"
                size="xl"
                className="uppercase tracking-wider text-[15px] font-bold"
                asChild
              >
                <a href="/#estimate">Schedule an Estimate</a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="tel:5129128733" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" /> 512-912-8733
                </a>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-2 text-primary-foreground/70 text-sm">
              <Clock className="w-4 h-4" />
              <span>Mon–Fri: 8:00 AM – 5:30 PM · Sat: 8:00 AM – 3:00 PM · Sun: Closed</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LocationPage;
