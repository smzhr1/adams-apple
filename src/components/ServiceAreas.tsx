import { MapPin } from "lucide-react";

const greaterAustin = [
  "South Austin", "Shady Hollow", "Circle C Ranch", "Barton Hills", "Manchaca",
  "Travis Heights", "Cherry Creek", "Tanglewood Forest", "Hyde Park", "Allandale",
  "Tarrytown", "Barton Creek", "West Lake Hills", "Rollingwood", "Sunset Valley",
  "Cedar Park", "Round Rock", "Pflugerville", "Leander", "Bee Cave",
  "Lakeway", "Dripping Springs", "Bastrop", "Manor", "And More",
];

const ServiceAreas = () => {
  return (
    <section id="service-areas" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-3">Where We Work</p>
          <h2 className="font-heading font-bold text-foreground mb-4">
            Proudly Serving Austin, TX and Surrounding Communities
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed" style={{ fontSize: 'var(--text-md)' }}>
            Rooted in over 15 years of experience serving the Austin area, Adam's Apple Tree Service works throughout Austin and the surrounding communities. Our crews are based in South Austin, which means faster response times across Travis County and the surrounding suburbs. We know Austin's neighborhoods, its tree ordinances, and its seasonal tree care calendar.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-primary" /> Austin and Surrounding Areas
          </h3>
          <div className="flex flex-wrap gap-2">
            {greaterAustin.map((area) => (
              <span
                key={area}
                className="bg-card border border-border rounded-full px-4 py-1.5 text-sm text-foreground"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        <p className="text-center text-muted-foreground text-[15px]">
          Not sure if we cover your neighborhood? Call or text us at{" "}
          <a href="tel:5129128733" className="text-primary font-semibold hover:underline">512-912-8733</a>.
          {" "}If you are within 50 miles of South Austin, the answer is almost certainly yes.
        </p>
      </div>
    </section>
  );
};

export default ServiceAreas;
