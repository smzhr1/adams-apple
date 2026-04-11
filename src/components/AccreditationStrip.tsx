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
        <div className="grid grid-cols-3 md:flex md:flex-wrap justify-center items-center gap-8 md:gap-12">
          {badges.map((badge, index) => (
            <div
              key={badge.alt}
              className={`flex flex-col items-center gap-2 ${
                index === 6 ? "md:col-auto col-start-1 col-end-2 justify-self-end mr-4" : ""
              }${
                index === 7 ? "md:col-auto col-start-2 col-end-3 justify-self-start ml-4" : ""
              }`}
            >
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
    </section>
  );
};

export default AccreditationStrip;
