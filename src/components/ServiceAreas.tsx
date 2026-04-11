import { MapPin } from "lucide-react";

const greaterAustin = [
  "Bee Cave", "Barton Creek", "Cedar Valley", "Cedar Park", "Round Rock", "Pflugerville",
  "Leander", "Circle C Ranch", "Bluff Springs", "Lakeway", "Steiner Ranch", "Oak Hill",
  "Sunset Valley", "Dripping Springs", "And More!",
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
            Rooted in over 15 years of experience serving Austin and the surrounding communities, 
            Adam's Apple Tree Service is more than just a tree service company. We're your dedicated 
            partners in maintaining the health, beauty, and safety of your outdoor spaces. As a locally 
            owned and operated business, we understand the unique challenges and opportunities that our 
            region's climate and tree species present.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-primary" /> Greater Austin Area
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
          Not sure if we cover your area? Simply give us a call, send us a text, or email us. 
          We are always happy to confirm our availability in your area.
        </p>
      </div>
    </section>
  );
};

export default ServiceAreas;
