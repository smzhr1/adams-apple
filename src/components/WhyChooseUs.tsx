import { Shield, Award, Truck, MapPin, Clock, Leaf } from "lucide-react";

const reasons = [
  { icon: Award, title: "ISA Certified Arborists", desc: "Our team holds industry-leading certifications ensuring best practices." },
  { icon: Shield, title: "Fully Licensed & Insured", desc: "Complete liability coverage for your peace of mind on every job." },
  { icon: Truck, title: "Professional Equipment", desc: "Industry-grade machinery for safe, efficient, and clean work." },
  { icon: MapPin, title: "Local Experts", desc: "Born and raised in Central Texas — we know your trees." },
  { icon: Clock, title: "24/7 Emergency Response", desc: "Storm damage? We're on call to protect your property fast." },
  { icon: Leaf, title: "Eco-Conscious Practices", desc: "We recycle 100% of tree waste into mulch and firewood." },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Why Austin Homeowners Choose Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We combine certified expertise, modern equipment, and genuine care to deliver tree services you can trust.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r) => (
            <div key={r.title} className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                <r.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground text-lg mb-1">{r.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
