import { Scissors, TreePine, Sprout, Leaf, AlertTriangle, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgRemoval from "@/assets/service-tree-removal.jpg";
import imgPruning from "@/assets/service-pruning.jpg";
import imgPlanting from "@/assets/service-planting.jpg";
import imgSoil from "@/assets/service-soil.jpg";
import imgEmergency from "@/assets/service-emergency.jpg";
import imgLegacy from "@/assets/service-legacy.jpg";

const services = [
  {
    icon: TreePine,
    title: "Tree Removal",
    slug: "tree-removal",
    image: imgRemoval,
    description: "Safe, efficient removal of dead, hazardous, or unwanted trees with full cleanup and haul-away included.",
  },
  {
    icon: Scissors,
    title: "Tree Pruning & Trimming",
    slug: "tree-pruning-trimming",
    image: imgPruning,
    description: "Expert pruning and trimming to promote healthy growth, improve structure, and enhance your property's appearance.",
  },
  {
    icon: Sprout,
    title: "Tree Planting",
    slug: "tree-planting",
    image: imgPlanting,
    description: "Species selection guidance and professional planting to add beauty and value to your landscape.",
  },
  {
    icon: Leaf,
    title: "Soil Amendments & Care",
    slug: "soil-amendments",
    image: imgSoil,
    description: "Custom soil treatments, fertilization programs, and root zone care to give your trees the foundation they need.",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Services",
    slug: "emergency",
    image: imgEmergency,
    description: "24/7 storm damage response and emergency tree removal to keep your property safe.",
  },
  {
    icon: Crown,
    title: "Legacy Tree Program",
    slug: "legacy-tree-program",
    image: imgLegacy,
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
            <a
              key={service.title}
              href={`/services/${service.slug}`}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                <div className="absolute bottom-3 left-3 w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                  <service.icon className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-[15px]">{service.description}</p>
                <span className="text-primary font-semibold text-sm">Learn More →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
