import { Shield, Award, Truck, MapPin, Clock, Leaf } from "lucide-react";
import whyImage from "@/assets/why-choose-us.jpg";

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
    <section id="why-us" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src={whyImage}
              alt="Adam's Apple Tree Service professional team"
              className="w-full h-auto object-cover"
              loading="lazy"
              width={800}
              height={900}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-heading font-bold text-foreground mb-4">
              Why Austin Homeowners Choose Us
            </h2>
            <p className="text-muted-foreground mb-8" style={{ fontSize: 'var(--text-md)' }}>
              We combine certified expertise, modern equipment, and genuine care to deliver tree services you can trust.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((r) => (
                <div key={r.title} className="flex gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <r.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-body font-bold text-foreground mb-0.5" style={{ fontSize: 'var(--text-base)' }}>{r.title}</h3>
                    <p className="text-muted-foreground leading-relaxed" style={{ fontSize: 'var(--text-sm)' }}>{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
