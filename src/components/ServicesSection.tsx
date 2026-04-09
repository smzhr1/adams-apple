import { Scissors, TreePine, CircleDot, Sprout, AlertTriangle, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Scissors,
    title: "Tree Trimming",
    description: "Expert pruning and trimming to promote healthy growth, improve structure, and enhance your property's appearance.",
  },
  {
    icon: TreePine,
    title: "Tree Removal",
    description: "Safe, efficient removal of dead, hazardous, or unwanted trees with full cleanup and haul-away included.",
  },
  {
    icon: CircleDot,
    title: "Stump Grinding",
    description: "Complete stump removal below grade, ready for replanting or seamless lawn restoration.",
  },
  {
    icon: Sprout,
    title: "Tree Planting",
    description: "Species selection guidance and professional planting to add beauty and value to your landscape.",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Services",
    description: "24/7 storm damage response and emergency tree removal to keep your property safe.",
  },
  {
    icon: Leaf,
    title: "Tree Health Care",
    description: "Disease diagnosis, treatment plans, and preventive care to keep your trees thriving year-round.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Your Trees Deserve Expert Care
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From routine trimming to emergency removals, our ISA-certified arborists handle every aspect of tree care with precision and professionalism.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-5 leading-relaxed">{service.description}</p>
              <Button variant="link" className="text-primary p-0 h-auto font-semibold">
                Learn More →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
