import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Award,
  ShieldCheck,
  Sparkles,
  Heart,
  Users,
  Leaf,
  CheckCircle2,
  ClipboardCheck,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccreditationStrip from "@/components/AccreditationStrip";
import { Button } from "@/components/ui/button";
import teamGroup from "@/assets/team-group.jpg";
import heroArborist from "@/assets/hero-arborist.jpg";
import ctaBg from "@/assets/cta-yard.jpg";

const arborists = [
  {
    name: "Neil Myers",
    cert: "ISA Certified Arborist · TX-4612A",
    quals: "Tree Risk Assessment · Texas Oak Wilt · Wildfire Risk Reduction",
    bio: "If you see Neil in the field, there is a very good chance he will be talking with you about your soil, or his love for disc golf and cooking with his wife and dogs.",
  },
  {
    name: "Geoff Oliver",
    cert: "ISA Certified Arborist · TX-5212A",
    quals: "Tree Risk Assessment Qualification",
    bio: "Geoff conveys his knowledge to the crews and office staff to ensure ethics and work product are kept to industry standards. Talk with Geoff and he will very likely tell a cheesy joke.",
  },
  {
    name: "Jon Haben",
    cert: "Arborist in Training",
    quals: "Months away from qualifying for the certification exam",
    bio: "We encourage all clients to quiz Jon on his tree knowledge. Jon is also a member of a band with his twin brother and speaks Spanish fluently.",
  },
  {
    name: "Devin Oller",
    cert: "Operations Manager",
    quals: "Office, scheduling and client care",
    bio: "If you have called or texted the office, you have had the pleasure of working with Devin. She keeps operations running smoothly while raising her young daughter, Frankie — and rumor has it she will beat any contender at pool.",
  },
];

const pillars = [
  {
    icon: Award,
    title: "Certified Arborists on Staff",
    body: "ISA Certified Arborists Neil Myers (TX-4612A) and Geoff Oliver (TX-5212A) personally oversee assessments and pruning standards on every job — not a sales rep with a clipboard.",
  },
  {
    icon: Sparkles,
    title: "Unrivaled Expertise",
    body: "Our team is made up of seasoned professionals with deep knowledge of tree biology, growth patterns, and local Central Texas species. Every recommendation is tailored to your trees.",
  },
  {
    icon: Leaf,
    title: "Comprehensive Services",
    body: "From routine trimming and structural pruning to safe removals, stump grinding, planting, soil care and emergency response — we handle every aspect of tree care under one roof.",
  },
  {
    icon: ShieldCheck,
    title: "Unwavering Commitment to Safety",
    body: "We adhere to the highest industry safety standards on every project. Our crews are fully trained and equipped to handle the most challenging tree care tasks with precision and care.",
  },
  {
    icon: Heart,
    title: "Tree Health Champions",
    body: "Healthy trees are the backbone of a vibrant community. We take a proactive approach focused on long-term tree vitality and educate our clients along the way.",
  },
  {
    icon: Users,
    title: "Superior Customer Service",
    body: "Open communication, transparency and collaboration on every job. Our friendly team listens to your needs, answers your questions, and provides a clear, detailed estimate.",
  },
  {
    icon: CheckCircle2,
    title: "Immaculate Job Sites",
    body: "Your property is a valuable asset and we treat it with respect. Crews take pride in clean, organized job sites and leave your landscape in pristine condition when we are done.",
  },
  {
    icon: ClipboardCheck,
    title: "ISA & ANSI Best Practices",
    body: "We follow International Society of Arboriculture (ISA) and ANSI A300 best management practices on every job — the industry standard for safety, quality, and sustainability.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured & Local",
    body: "Locally owned and operated in Austin with full liability and workers' compensation insurance. When you hire us, you support a local business that cares about Central Texas.",
  },
];

const greaterAustin = [
  "Bee Cave",
  "Barton Creek",
  "Cedar Valley",
  "Cedar Park",
  "Round Rock",
  "Pflugerville",
  "Leander",
  "Circle C Ranch",
  "Bluff Springs",
  "Lakeway",
  "Steiner Ranch",
  "Oak Hill",
  "Sunset Valley",
  "Dripping Springs",
];

const About = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title =
      "About Adam's Apple Tree Service | Austin's ISA Certified Arborists";
    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute("content");
    metaDesc?.setAttribute(
      "content",
      "Locally owned Austin tree service with 15+ years of experience. ISA Certified Arborists, fully insured, ANSI A300 standards. Free estimates: 512-912-8733.",
    );
    return () => {
      document.title = prevTitle;
      if (metaDesc && prevDesc) metaDesc.setAttribute("content", prevDesc);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-card lg:min-h-[78vh] lg:flex lg:items-center">
          <div className="hidden lg:block absolute inset-y-0 right-0 w-[58%]">
            <img
              src={teamGroup}
              alt="The Adam's Apple Tree Service team in Austin, TX"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-card via-card/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-card to-transparent" />
          </div>
          <div
            className="hidden lg:block absolute inset-y-0 left-0 w-1/2 bg-card"
            aria-hidden="true"
          />
          <div
            className="hidden lg:block absolute inset-y-0 left-1/2 w-[14%] bg-gradient-to-r from-card to-transparent pointer-events-none"
            aria-hidden="true"
          />

          <div className="container mx-auto px-4 relative z-10 pt-[96px] pb-10 md:pt-[120px] md:pb-14 lg:py-20">
            <div className="max-w-2xl space-y-6 lg:space-y-7 animate-fade-in">
              <div className="flex items-center gap-3">
                <span
                  className="block w-10 h-px bg-secondary"
                  aria-hidden="true"
                />
                <p className="text-secondary font-bold uppercase tracking-[0.25em] text-xs">
                  Experts in the Industry
                </p>
              </div>

              <h1 className="text-foreground leading-[1.1] text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-heading font-bold">
                Your Austin Tree Care Experts,{" "}
                <span className="text-secondary">Our Client Commitment</span>
                <span className="block mt-2 text-foreground/85 text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-semibold leading-snug">
                  Adam's Apple Tree Service: A Trusted Partner for Exceptional
                  Tree Care in Austin and Beyond
                </span>
              </h1>

              <div className="lg:hidden rounded-2xl overflow-hidden aspect-[16/10]">
                <img
                  src={teamGroup}
                  alt="The Adam's Apple Tree Service team"
                  className="w-full h-full object-cover"
                />
              </div>

              <p
                className="text-muted-foreground max-w-xl"
                style={{ fontSize: "var(--text-md)", lineHeight: 1.65 }}
              >
                We are more than just tree care professionals — we are dedicated
                partners in your journey to create and maintain a beautiful,
                safe, and thriving landscape. With deep roots in the Austin
                community and over 15 years of experience, we understand the
                unique challenges and opportunities our region's trees present.
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
                  <a
                    href="tel:5129128733"
                    className="flex items-center gap-2"
                  >
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

        {/* BRAND STORY */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-10">
              <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-3">
                Who We Are
              </p>
              <h2 className="font-heading font-bold text-foreground">
                Rooted in Austin. Trusted Across Central Texas.
              </h2>
            </div>
            <div
              className="space-y-5 text-muted-foreground leading-relaxed"
              style={{ fontSize: "var(--text-md)" }}
            >
              <p>
                Adam's Apple Tree Service is a locally owned tree care company
                serving Austin and the surrounding communities for more than 15
                years. Our seasoned team brings a wealth of knowledge and
                expertise to every project — from precise pruning that enhances
                the natural beauty of your trees to safe removal of hazardous or
                unwanted trees, rapid storm response, and complete lot clearing.
              </p>
              <p>
                As a locally owned and operated business, we understand the
                unique challenges and opportunities that Central Texas climate
                and tree species present. Our deep knowledge of local conditions
                allows us to provide tailored solutions that meet the specific
                needs of your landscape — whether you live on a downtown lot, a
                suburban acre, or a hill country estate.
              </p>
              <p>
                We pride ourselves on transparent communication, competitive
                rates, and outstanding results that speak for themselves. When
                you choose Adam's Apple Tree Service, your trees are in the
                hands of experienced professionals who genuinely care about
                their long-term well-being.
              </p>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US — PILLAR GRID */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-3">
                Why Choose Us
              </p>
              <h2 className="font-heading font-bold text-foreground">
                Why Austin Homeowners Choose Adam's Apple
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillars.map((p) => (
                <article
                  key={p.title}
                  className="bg-background border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <p.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3
                    className="font-heading font-semibold text-foreground mb-2"
                    style={{ fontSize: "var(--text-lg)" }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-muted-foreground leading-relaxed"
                    style={{ fontSize: "var(--text-base)" }}
                  >
                    {p.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* MEET THE TEAM — GROUP PHOTO */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={teamGroup}
                  alt="The Adam's Apple Tree Service team"
                  loading="lazy"
                  width={1200}
                  height={700}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div>
                <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-3">
                  Meet the Crew
                </p>
                <h2 className="font-heading font-bold text-foreground mb-6">
                  Certified, Local, and Genuinely in Love with Trees
                </h2>
                <p
                  className="text-muted-foreground leading-relaxed"
                  style={{ fontSize: "var(--text-md)" }}
                >
                  Every Adam's Apple project gets certified oversight from
                  assessment through final cleanup — not just a crew with a
                  chainsaw. Our team includes ISA Certified Arborists, an
                  arborist-in-training, and an operations manager who knows
                  every client by name. We hire for character first and train
                  for skill, which is why our customers stay with us for
                  decades.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ARBORIST + STAFF DETAIL */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-3">
                Our People
              </p>
              <h2 className="font-heading font-bold text-foreground">
                The Arborists Behind Every Job
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {arborists.map((person) => (
                <article
                  key={person.name}
                  className="bg-background border border-border rounded-2xl p-6 flex flex-col"
                >
                  <h3
                    className="font-heading font-bold text-foreground"
                    style={{ fontSize: "var(--text-lg)" }}
                  >
                    {person.name}
                  </h3>
                  <p className="text-primary font-semibold text-sm mt-1">
                    {person.cert}
                  </p>
                  <p className="text-secondary text-sm font-medium mt-1">
                    {person.quals}
                  </p>
                  <p
                    className="text-muted-foreground leading-relaxed mt-4"
                    style={{ fontSize: "var(--text-base)" }}
                  >
                    {person.bio}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICE AREAS */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-3">
                Where We Work
              </p>
              <h2 className="font-heading font-bold text-foreground mb-4">
                Proudly Serving Austin & the Greater Austin Area
              </h2>
              <p
                className="text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                style={{ fontSize: "var(--text-md)" }}
              >
                While deeply rooted in Austin, our commitment to exceptional
                tree care extends far beyond the city limits. From Round Rock to
                Cedar Park, Pflugerville to Dripping Springs — and everywhere in
                between — we are your trusted local partner for all things
                tree-related.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {greaterAustin.map((city) => (
                <div
                  key={city}
                  className="bg-muted border border-border rounded-xl px-4 py-3 flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium text-sm">
                    {city}
                  </span>
                </div>
              ))}
            </div>
            <p
              className="text-center text-muted-foreground mt-10 max-w-3xl mx-auto"
              style={{ fontSize: "var(--text-base)" }}
            >
              Not sure if we cover your area? Call or text{" "}
              <a
                href="tel:5129128733"
                className="text-primary font-semibold hover:underline"
              >
                512-912-8733
              </a>{" "}
              — we are always happy to confirm availability.
            </p>
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
              Get a FREE Estimate Today
            </h2>
            <p
              className="text-primary-foreground/80 max-w-xl mx-auto mb-10"
              style={{ fontSize: "var(--text-md)", lineHeight: 1.65 }}
            >
              Contact us today by calling or texting{" "}
              <a
                href="tel:5129128733"
                className="text-accent font-bold hover:underline"
              >
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
              <span>
                Mon–Fri: 8:00 AM – 5:30 PM · Sat: 8:00 AM – 3:00 PM · Sun:
                Closed
              </span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
