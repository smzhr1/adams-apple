import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-arborist.jpg";

const trustItems = [
  "🌳 15+ Years Serving Austin",
  "🛡 Fully Licensed & Insured",
  "✅ ISA Certified Arborists on Staff",
  "📋 ANSI A300 Standards",
  "🏠 Locally Owned & Operated",
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional arborist performing tree care in Austin, TX"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(110,44%,20%)]/90 via-[hsl(110,44%,25%)]/75 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-2xl space-y-8 animate-fade-in">
          <p className="text-accent font-bold uppercase tracking-[0.15em] text-[15px]">
            Call or text for a free estimate |{" "}
            <a href="tel:5129128733" className="underline underline-offset-2 hover:text-primary-foreground transition-colors">
              512-912-8733
            </a>
          </p>

          <h1 className="text-primary-foreground leading-[1.05]">
            Your Favorite Austin<br />
            <span className="text-accent">Tree Service</span>
          </h1>

          <p className="text-primary-foreground/80 text-lg max-w-lg leading-relaxed">
            Adam's Apple Tree Service is your local Austin tree care experts
            specializing in the maintenance and longevity of trees.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button variant="cta" size="xl" className="uppercase tracking-wider text-[15px] font-bold" asChild>
              <a href="#estimate">Schedule an Estimate</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="tel:5129128733" className="flex items-center gap-2">
                <Phone className="w-5 h-5" /> 512-912-8733
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Trust bar overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-foreground/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-primary-foreground text-sm font-semibold">
            {trustItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
