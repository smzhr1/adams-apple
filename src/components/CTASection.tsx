import { Phone, Clock } from "lucide-react";
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
        <h2 className="font-heading font-bold text-primary-foreground mb-6">
          Get a Free Estimate in Austin, TX
        </h2>
        <p className="text-primary-foreground/80 max-w-xl mx-auto mb-10" style={{ fontSize: 'var(--text-md)', lineHeight: 1.65 }}>
          Contact us today by calling or texting{" "}
          <a href="tel:5129128733" className="text-accent font-bold hover:underline">512-912-8733</a>{" "}
          or fill out our contact form.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Button variant="cta" size="xl" className="uppercase tracking-wider text-[15px] font-bold" asChild>
            <a href="#estimate">Schedule an Estimate</a>
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
  );
};

export default CTASection;
