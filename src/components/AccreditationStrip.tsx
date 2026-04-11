import trustGoogle from "@/assets/trust-google.png";
import trustIsaTexas from "@/assets/trust-isa-texas.png";
import trustCertifiedArborist from "@/assets/trust-certified-arborist.png";
import trustTraq from "@/assets/trust-traq.png";
import trustTexasAg from "@/assets/trust-texas-ag.png";
import trustLicensed from "@/assets/trust-licensed.png";
import trustUrbanForestry from "@/assets/trust-urban-forestry.png";
import trustBbb from "@/assets/trust-bbb.png";

const badges = [
  { src: trustGoogle, alt: "5 Stars Google", label: "5★ Google" },
  { src: trustIsaTexas, alt: "ISA Member", label: "ISA Member" },
  { src: trustCertifiedArborist, alt: "Certified Arborist", label: "ISA Certified" },
  { src: trustTraq, alt: "TRAQ Certified", label: "TRAQ Certified" },
  { src: trustTexasAg, alt: "Texas Dept. of Agriculture", label: "TX Dept. of Ag" },
  { src: trustLicensed, alt: "Licensed & Insured", label: "Licensed & Insured" },
  { src: trustUrbanForestry, alt: "Urban Forestry", label: "Urban Forestry" },
  { src: trustBbb, alt: "BBB Accredited", label: "BBB Accredited" },
];

const AccreditationStrip = () => {
  return (
    <section className="py-10 bg-card border-b border-border">
      <div className="container mx-auto px-4">
        <p className="text-center text-muted-foreground uppercase tracking-[0.2em] text-sm font-bold mb-8">
          Trusted & Accredited
        </p>
        <div className="grid grid-cols-3 md:flex md:flex-wrap justify-center justify-items-center items-start gap-y-6 gap-x-4 md:gap-8 md:gap-12">
          {badges.slice(0, 6).map((badge) => (
            <div key={badge.alt} className="flex flex-col items-center gap-2">
              <img
                src={badge.src}
                alt={badge.alt}
                loading="lazy"
                width={512}
                height={512}
                className="h-16 w-16 md:h-20 md:w-20 object-contain"
              />
              <span className="text-foreground text-xs font-semibold tracking-wide text-center">
                {badge.label}
              </span>
            </div>
          ))}
          <div className="col-span-3 flex justify-center gap-8 md:contents">
            {badges.slice(6).map((badge) => (
              <div key={badge.alt} className="flex flex-col items-center gap-2">
                <img
                  src={badge.src}
                  alt={badge.alt}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="h-16 w-16 md:h-20 md:w-20 object-contain"
                />
                <span className="text-foreground text-xs font-semibold tracking-wide text-center">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccreditationStrip;
