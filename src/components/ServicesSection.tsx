import { Scissors, TreePine, Sprout, Leaf, AlertTriangle, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: TreePine,
    title: "Tree Removal",
    slug: "tree-removal",
    description: "Safe, efficient removal of dead, hazardous, or unwanted trees with full cleanup and haul-away included.",
  },
  {
    icon: Scissors,
    title: "Tree Pruning & Trimming",
    slug: "tree-pruning-trimming",
    description: "Expert pruning and trimming to promote healthy growth, improve structure, and enhance your property's appearance.",
  },
  {
    icon: Sprout,
    title: "Tree Planting",
    slug: "tree-planting",
    description: "Species selection guidance and professional planting to add beauty and value to your landscape.",
  },
  {
    icon: Leaf,
    title: "Soil Amendments & Care",
    slug: "soil-amendments",
    description: "Custom soil treatments, fertilization programs, and root zone care to give your trees the foundation they need.",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Services",
    slug: "emergency",
    description: "24/7 storm damage response and emergency tree removal to keep your property safe.",
  },
  {
    icon: Crown,
    title: "Legacy Tree Program",
    slug: "legacy-tree-program",
    description: "Preserve and protect your property's most valuable heritage trees with our comprehensive long-term care program.",
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
              <Button variant="link" className="text-primary p-0 h-auto font-semibold" asChild>
                <a href={`/services/${service.slug}`}>Learn More →</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
