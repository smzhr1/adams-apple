import { Button } from "@/components/ui/button";
import ctaBg from "@/assets/cta-background.jpg";

const CTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${ctaBg})` }}
      />
      <div className="absolute inset-0 bg-primary/80" />
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
          Keep Your Trees Healthy &amp; Beautiful
        </h2>
        <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
          Schedule your free assessment today and let our certified arborists create a care plan for your property.
        </p>
        <Button variant="cta" size="xl" asChild>
          <a href="#estimate">Get Free Estimate</a>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
