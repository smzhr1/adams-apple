import { Phone, Shield, Award, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-arborist.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-primary overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-6 text-primary-foreground animate-fade-in">
            <p className="text-secondary font-semibold tracking-wide uppercase text-sm">
              Certified Arborists Serving Central Texas
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              Your Trusted Local Tree Experts in Austin, TX
            </h1>

            <div className="space-y-3 text-primary-foreground/90">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-accent flex-shrink-0" />
                <span>Fully Licensed &amp; Insured</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-accent flex-shrink-0" />
                <span>ISA Certified Arborists</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="w-5 h-5 text-accent flex-shrink-0" />
                <span>Top Rated 5-Star Service</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="cta" size="xl" asChild>
                <a href="#estimate">Get Free Estimate</a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="tel:5121234873" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" /> Or Call 512-123-TREE
                </a>
              </Button>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Professional arborist performing tree trimming in Austin, TX"
                className="w-full h-[400px] md:h-[500px] object-cover"
                width={1280}
                height={960}
              />
            </div>
            {/* Badges */}
            <div className="absolute -bottom-4 left-4 bg-card rounded-xl shadow-lg px-4 py-3 flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              <div>
                <p className="font-semibold text-foreground text-sm">ISA Certified</p>
                <p className="text-muted-foreground text-xs">Arborist Team</p>
              </div>
            </div>
            <div className="absolute -top-4 right-4 bg-accent text-accent-foreground rounded-xl shadow-lg px-4 py-3">
              <p className="font-bold text-sm">50+ Years</p>
              <p className="text-xs">Combined Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
