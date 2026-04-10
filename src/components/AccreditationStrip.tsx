import trustGoogle from "@/assets/trust-google.png";
import trustIsaTexas from "@/assets/trust-isa-texas.png";
import trustCertifiedArborist from "@/assets/trust-certified-arborist.png";
import trustTraq from "@/assets/trust-traq.png";
import trustTexasAg from "@/assets/trust-texas-ag.png";
import trustLicensed from "@/assets/trust-licensed.png";
import trustUrbanForestry from "@/assets/trust-urban-forestry.png";
import trustBbb from "@/assets/trust-bbb.png";

const badges = [
  { src: trustGoogle, alt: "5 Stars Google", line1: "5 STARS GOOGLE", line2: "★★★★★" },
  { src: trustIsaTexas, alt: "ISA Member", line1: "ISA MEMBER", line2: "# 272915" },
  { src: trustCertifiedArborist, alt: "Certified Arborist", line1: "CERTIFIED ARBORIST", line2: "# TX-4955A" },
  { src: trustTraq, alt: "TRAQ Certified", line1: "TRAQ", line2: "CERTIFIED" },
  { src: trustTexasAg, alt: "Texas Dept. of Agriculture", line1: "TEXAS DEPT.", line2: "OF AGRICULTURE" },
  { src: trustLicensed, alt: "Licensed & Insured", line1: "LICENSED", line2: "& INSURED" },
  { src: trustUrbanForestry, alt: "Urban Forestry", line1: "URBAN FORESTRY", line2: "# TX-4955AF" },
  { src: trustBbb, alt: "BBB Accredited", line1: "BBB", line2: "ACCREDITED" },
];

const AccreditationStrip = () => {
  return (
    <section className="relative py-10 overflow-hidden bg-foreground/90">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
          {badges.map((badge) => (
            <div
              key={badge.alt}
              className="flex items-center gap-3 bg-background rounded-xl px-4 py-4 shadow-sm border border-border"
            >
              <img
                src={badge.src}
                alt={badge.alt}
                loading="lazy"
                width={512}
                height={512}
                className="h-10 w-10 md:h-12 md:w-12 object-contain flex-shrink-0"
              />
              <div className="min-w-0">
                <p className="text-foreground font-extrabold text-xs md:text-sm leading-tight tracking-wide uppercase">
                  {badge.line1}
                </p>
                <p className="text-foreground font-extrabold text-xs md:text-sm leading-tight tracking-wide uppercase">
                  {badge.line2}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccreditationStrip;
