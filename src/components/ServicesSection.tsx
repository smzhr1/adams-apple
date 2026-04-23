import { ArrowRight } from "lucide-react";
import imgRemoval from "@/assets/service-tree-removal.jpg";
import imgPruning from "@/assets/service-pruning.jpg";
import imgPlanting from "@/assets/service-planting.jpg";
import imgSoil from "@/assets/service-soil.jpg";
import imgEmergency from "@/assets/service-emergency.jpg";
import imgLegacy from "@/assets/service-legacy.jpg";

const services = [
  {
    title: "Tree Removal Austin, TX",
    slug: "tree-removal",
    image: imgRemoval,
    description: "Safe, efficient removal of hazardous, dead, or unwanted trees. We handle city permits for Heritage Trees and provide flat-rate quotes before any work begins.",
  },
  {
    title: "Tree Trimming and Pruning Austin, TX",
    slug: "tree-pruning-trimming",
    image: imgPruning,
    description: "Structural pruning, dead wood removal, and crown shaping following ANSI A300 standards. We follow Austin's oak pruning guidelines to protect your trees from oak wilt.",
  },
  {
    title: "Tree Planting Austin, TX",
    slug: "tree-planting",
    image: imgPlanting,
    description: "Native species selection, delivery, and professional installation up to 45-gallon containers. Includes a personalized aftercare plan from our certified arborist.",
  },
  {
    title: "Soil Amendments and Care",
    slug: "soil-amendments",
    image: imgSoil,
    description: "Deep root health starts with the soil. We improve composition and introduce organic matter to support long-term tree vitality in Austin's challenging limestone and clay soils.",
  },
  {
    title: "Emergency Tree Service Austin, TX",
    slug: "emergency",
    image: imgEmergency,
    description: "Storm damage, fallen trees, and hazardous limbs handled fast. Our crew is available for emergency callouts across Austin. Call 512-912-8733 for same-day response.",
  },
  {
    title: "Arborist Reports and Professional Services",
    slug: "legacy-tree-program",
    image: imgLegacy,
    description: "ISA certified arborist reports for insurance claims, city permit applications, Heritage Tree assessments, and construction protection plans.",
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
          <h2 className="font-heading font-bold text-foreground mb-4">
            Austin Tree Service Designed for You
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" style={{ fontSize: 'var(--text-md)' }}>
            From routine trimming to emergency storm cleanup, our certified arborists handle every aspect of tree care across Austin, TX. Visit a service page for full details or call us at{" "}
            <a href="tel:5129128733" className="text-primary font-semibold hover:underline">512-912-8733</a> for a fast response.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <a
              key={service.title}
              href={`/services/${service.slug}`}
              className="group flex flex-col bg-[hsl(110,41%,42%)] rounded-2xl overflow-hidden border border-[hsl(110,41%,38%)] hover:shadow-lg transition-all duration-300"
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
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-heading font-semibold text-primary-foreground mb-2" style={{ fontSize: 'var(--text-lg)' }}>{service.title}</h3>
                <p className="text-primary-foreground/80 mb-4 leading-relaxed flex-1" style={{ fontSize: 'var(--text-base)' }}>{service.description}</p>
                <div className={`flex mt-auto gap-2 ${service.slug === "tree-removal" ? "flex-col items-center sm:flex-row sm:items-center" : "flex-col items-center md:flex-row md:justify-end"}`}>
                  {service.slug === "tree-removal" && (
                    <a href="#estimate" className="inline-flex items-center justify-center gap-1.5 bg-primary-foreground text-[hsl(110,41%,42%)] font-semibold rounded-full px-4 py-1.5 text-[13px] hover:bg-primary-foreground/90 transition-colors">
                      Get a Free Instant Estimate
                    </a>
                  )}
                  <span className="inline-flex items-center justify-center gap-1.5 bg-accent text-accent-foreground font-semibold rounded-full px-4 py-1.5 text-[13px] group-hover:bg-accent/90 transition-colors md:ml-auto">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
