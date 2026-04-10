import { TreePine, Scissors, Sprout, Leaf, AlertTriangle, FileText } from "lucide-react";
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
    description: "Safe and efficient tree removals will remove hazardous, dead, or unwanted trees on your property.",
    cta: "Visit Tree Removal page or get an idea of price using our Tree Removal GUESStimator tool",
  },
  {
    icon: Scissors,
    title: "Tree Pruning & Tree Trimming",
    slug: "tree-pruning-trimming",
    image: imgPruning,
    description: "Expert tree pruning and trimming to remove dead, diseased, and damaged branches or to enhance the structure of your trees. This makes your trees safer and more aesthetically pleasing.",
    cta: "Learn More",
  },
  {
    icon: Sprout,
    title: "Tree Planting",
    slug: "tree-planting",
    image: imgPlanting,
    description: "We will select, deliver, and plant trees as large as 45-gallons. Our services can include maintenance plans to ensure proper watering regimens, root ball development, and to mitigate early signs and symptoms of stress-causing diseases.",
    cta: "Learn More",
  },
  {
    icon: Leaf,
    title: "Soil Amendments and Care",
    slug: "soil-amendments",
    image: imgSoil,
    description: "We care deeply for the soil that is holding your trees. We can apply organic material and ensure the highest care for your trees by improving soil composition and introducing additional organic matter.",
    cta: "Learn More",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Services",
    slug: "emergency",
    image: imgEmergency,
    description: "Life happens — call us and we will handle fallen branches or trees, including any issues with your trees, as quickly as possible.",
    cta: "Learn More",
  },
  {
    icon: FileText,
    title: "Professional Services",
    slug: "professional-services",
    image: imgLegacy,
    description: "Our Certified Arborists can provide professional reports for insurance companies, city requirements, or even file a permit on your behalf.",
    cta: "Learn More",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-3">
            Tree Services We Provide
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Austin Tree Service Designed for You
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            For more details about a specific service, please visit one of the many service pages available. 
            If you would like a quick response, please call or text us at{" "}
            <a href="tel:5129128733" className="text-primary font-semibold hover:underline">512-912-8733</a>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <a
              key={service.title}
              href={`/services/${service.slug}`}
              className="group bg-[hsl(110,41%,42%)] rounded-2xl overflow-hidden border border-[hsl(110,41%,38%)] hover:shadow-lg transition-all duration-300"
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
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-primary-foreground mb-2">{service.title}</h3>
                <p className="text-primary-foreground/80 mb-4 leading-relaxed text-[15px]">{service.description}</p>
                <span className="text-primary-foreground font-semibold text-sm">{service.cta} →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
