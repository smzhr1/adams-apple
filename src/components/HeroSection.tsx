import { Phone, Calendar, Users, Star, TreePine } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-arborist.webp";

const stats = [
  { icon: Calendar, value: "15+", label: "Years in Business" },
  { icon: Users, value: "2,500+", label: "Happy Customers" },
  { icon: Star, value: "5.0", label: "Google Rating" },
  { icon: TreePine, value: "10,000+", label: "Trees Serviced" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional arborist performing tree care in Austin, TX"
          className="w-full h-full object-cover animate-hero-zoom"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(110,20%,12%)]/80 via-[hsl(110,15%,15%)]/55 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#d4e0d1] to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-2xl space-y-8 animate-fade-in">
          <h1 className="text-primary-foreground leading-[1.05] text-[38px] md:text-5xl lg:text-[length:var(--text-hero)] pt-8 md:pt-0">
            Your Favorite Austin<br />
            <span className="text-accent">Tree Service</span>
          </h1>

          <p className="text-primary-foreground/80 max-w-lg" style={{ fontSize: 'var(--text-lg)', lineHeight: 1.6 }}>
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

          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <stat.icon className="w-6 h-6 text-accent flex-shrink-0" />
                <div>
                  <p className="text-xl md:text-2xl font-heading font-bold text-primary-foreground leading-none">{stat.value}</p>
                  <p className="text-primary-foreground/60 text-xs">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
