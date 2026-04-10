import logoIsa from "@/assets/logo-isa.png";
import logoTcia from "@/assets/logo-tcia.png";
import logoBbb from "@/assets/logo-bbb.png";
import logoTaa from "@/assets/logo-taa.png";

const accreditations = [
  { src: logoIsa, alt: "ISA Certified Arborist", name: "ISA Certified" },
  { src: logoTcia, alt: "TCIA Accredited Business", name: "TCIA Accredited" },
  { src: logoBbb, alt: "BBB Accredited Business", name: "BBB Accredited" },
  { src: logoTaa, alt: "Texas Arborist Association Member", name: "Texas Arborist Assoc." },
];

const AccreditationStrip = () => {
  return (
    <section className="bg-background border-b border-border py-6">
      <div className="container mx-auto px-4">
        <p className="text-center text-muted-foreground text-xs font-bold uppercase tracking-[0.2em] mb-5">
          Trusted & Accredited
        </p>
        <div className="flex items-center justify-center gap-8 md:gap-14 flex-wrap">
          {accreditations.map((acc) => (
            <div key={acc.name} className="flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
              <img
                src={acc.src}
                alt={acc.alt}
                loading="lazy"
                width={512}
                height={512}
                className="h-14 md:h-16 w-auto object-contain"
              />
              <span className="text-muted-foreground text-[11px] font-semibold">{acc.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccreditationStrip;
