import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import ctaBg from "@/assets/cta-yard.jpg";

const CTASection = () => {
  return (
    <section className="relative py-28 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${ctaBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/70 to-foreground/50" />
      <div className="relative container mx-auto px-4 text-center max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
          Ready to Transform Your Yard?
        </h2>
        <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Get a free estimate today. No obligation, no pressure. Our team will assess your needs and provide a transparent quote.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="cta" size="xl" className="uppercase tracking-wider text-[15px] font-bold" asChild>
            <a href="#estimate">Get Free Estimate</a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="tel:5125550123" className="flex items-center gap-2">
              <Phone className="w-5 h-5" /> Call (512) 555-0123
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
