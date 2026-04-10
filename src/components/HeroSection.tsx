import { Phone, Shield, Award, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-arborist.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Full background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional arborist performing tree trimming in Austin, TX"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(110,44%,20%)]/90 via-[hsl(110,44%,25%)]/75 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-2xl space-y-8 animate-fade-in">
          <p className="text-accent font-bold uppercase tracking-[0.2em] text-[15px]">
            Certified Arborists · Austin, TX
          </p>

          <h1 className="text-primary-foreground leading-[1.05]">
            Expert Tree Care<br />
            <span className="text-accent">You Can Trust</span>
          </h1>

          <p className="text-primary-foreground/80 text-lg max-w-lg leading-relaxed">
            Austin's premier ISA-certified arborist team — protecting your trees
            and property with 50+ years of combined experience.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-primary-foreground/90 text-[15px]">
            <span className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent" /> Licensed &amp; Insured
            </span>
            <span className="flex items-center gap-2">
              <Award className="w-5 h-5 text-accent" /> ISA Certified
            </span>
            <span className="flex items-center gap-2">
              <Star className="w-5 h-5 text-accent" /> 5-Star Rated
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button variant="cta" size="xl" className="uppercase tracking-wider text-[15px] font-bold" asChild>
              <a href="#estimate">Get Free Estimate</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="tel:5121234873" className="flex items-center gap-2">
                <Phone className="w-5 h-5" /> 512-123-TREE
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
