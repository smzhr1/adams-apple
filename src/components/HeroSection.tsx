import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-arborist.jpg";
import trustGoogle from "@/assets/trust-google.png";
import trustIsaTexas from "@/assets/trust-isa-texas.png";
import trustCertifiedArborist from "@/assets/trust-certified-arborist.png";
import trustTraq from "@/assets/trust-traq.png";
import trustTexasAg from "@/assets/trust-texas-ag.png";
import trustLicensed from "@/assets/trust-licensed.png";
import trustUrbanForestry from "@/assets/trust-urban-forestry.png";
import trustBbb from "@/assets/trust-bbb.png";

const badges = [
  { src: trustGoogle, alt: "5 Stars Google", label: "5★ GOOGLE" },
  { src: trustIsaTexas, alt: "ISA Texas Member", label: "ISA MEMBER" },
  { src: trustCertifiedArborist, alt: "Certified Arborist", label: "CERTIFIED ARBORIST" },
  { src: trustTraq, alt: "TRAQ Certified", label: "TRAQ CERTIFIED" },
  { src: trustTexasAg, alt: "Texas Dept. of Agriculture", label: "TX DEPT. OF AG" },
  { src: trustLicensed, alt: "Licensed & Insured", label: "LICENSED & INSURED" },
  { src: trustUrbanForestry, alt: "Urban Forestry", label: "URBAN FORESTRY" },
  { src: trustBbb, alt: "BBB Accredited", label: "BBB ACCREDITED" },
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
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(110,20%,12%)]/80 via-[hsl(110,15%,15%)]/55 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#d4e0d1] to-transparent" />
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

    </section>
  );
};

export default HeroSection;
