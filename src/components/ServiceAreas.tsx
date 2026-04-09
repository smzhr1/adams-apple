import { MapPin } from "lucide-react";

const areas = [
  { name: "Austin", desc: "Our home base — full-service tree care across the metro." },
  { name: "Round Rock", desc: "Trusted tree services for Round Rock neighborhoods." },
  { name: "Cedar Park", desc: "Professional arborist care in Cedar Park & Leander." },
  { name: "Georgetown", desc: "Serving Georgetown's historic and new-growth areas." },
  { name: "Bastrop", desc: "Tree removal & care for Bastrop County properties." },
];

const ServiceAreas = () => {
  return (
    <section id="service-areas" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Serving Central Texas Communities
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Proudly providing expert tree care across the greater Austin area and Hill Country.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {areas.map((area) => (
            <a
              key={area.name}
              href={`#${area.name.toLowerCase().replace(" ", "-")}`}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all text-center"
            >
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading font-semibold text-foreground text-lg mb-1">{area.name}</h3>
              <p className="text-muted-foreground text-sm">{area.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
