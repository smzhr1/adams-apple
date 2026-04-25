import trustGoogle from "@/assets/trust-google.png";
import trustIsaMember from "@/assets/trust-isa-member.png";
import trustIsaCertified from "@/assets/trust-isa-certified.png";
import trustTraq from "@/assets/trust-traq.png";
import trustOakWilt from "@/assets/trust-oak-wilt.png";
import trustWildfire from "@/assets/trust-wildfire.png";
import trustLicensed from "@/assets/trust-licensed.png";
import trustBbb from "@/assets/trust-bbb.png";

const badges = [
  { src: trustGoogle, alt: "5 Stars Google", label: "5★ Google" },
  { src: trustIsaMember, alt: "ISA Member", label: "ISA Member" },
  { src: trustIsaCertified, alt: "ISA Certified Arborist", label: "ISA Certified" },
  { src: trustTraq, alt: "Tree Risk Assessment Qualified", label: "Tree Risk Assessment Qualified (TRAQ)" },
  { src: trustOakWilt, alt: "Texas Oak Wilt Qualified", label: "Texas Oak Wilt Qualified" },
  { src: trustWildfire, alt: "Wildfire Risk Reduction Qualified", label: "Wildfire Risk Reduction Qualified" },
  { src: trustLicensed, alt: "Insured", label: "Insured" },
  { src: trustBbb, alt: "BBB Accredited", label: "BBB Accredited" },
];

const AccreditationStrip = () => {
  return (
    <section className="py-10 bg-card border-b border-border">
      <div className="container mx-auto px-4">
        <p className="text-center text-muted-foreground uppercase tracking-[0.2em] text-sm font-bold mb-8">
          Trusted & Accredited
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 justify-items-center items-start gap-y-6 gap-x-4 md:gap-6">
          {badges.map((badge) => {
            const scale =
              badge.alt === "ISA Member"
                ? 1.5
                : badge.alt === "ISA Certified Arborist"
                ? 1.1
                : badge.alt === "Wildfire Risk Reduction Qualified"
                ? 1.5
                : 1;
            return (
              <div key={badge.alt} className="flex flex-col items-center gap-2 max-w-[140px]">
                <div className="h-16 w-16 md:h-20 md:w-20 flex items-center justify-center">
                  <img
                    src={badge.src}
                    alt={badge.alt}
                    loading="lazy"
                    width={512}
                    height={512}
                    style={{ transform: `scale(${scale})` }}
                    className="max-h-full max-w-full object-contain origin-center"
                  />
                </div>
                <span className="text-foreground text-[11px] md:text-xs font-semibold tracking-wide text-center leading-snug">
                  {badge.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AccreditationStrip;
