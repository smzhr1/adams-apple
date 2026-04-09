import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const serviceData: Record<string, { title: string; description: string }> = {
  "tree-removal": {
    title: "Tree Removal",
    description: "Safe, efficient removal of dead, hazardous, or unwanted trees with full cleanup and haul-away included.",
  },
  "tree-pruning-trimming": {
    title: "Tree Pruning & Trimming",
    description: "Expert pruning and trimming following ANSI A300 standards to promote healthy growth, improve structure, and enhance your property's appearance.",
  },
  "tree-planting": {
    title: "Tree Planting",
    description: "Species selection guidance and professional planting to add beauty, shade, and value to your Central Texas landscape.",
  },
  "soil-amendments": {
    title: "Soil Amendments & Care",
    description: "Custom soil treatments, fertilization programs, and root zone care to give your trees the foundation they need to thrive.",
  },
  "emergency": {
    title: "Emergency Tree Services",
    description: "24/7 storm damage response and emergency tree removal to keep your property and family safe.",
  },
  "legacy-tree-program": {
    title: "Legacy Tree Program",
    description: "Preserve and protect your property's most valuable heritage trees with our comprehensive long-term care and monitoring program.",
  },
};

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceData[slug] : null;

  if (!service) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-heading font-bold text-foreground">Service not found</h1>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="bg-primary py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">{service.title}</h1>
            <p className="text-primary-foreground/80 text-lg max-w-3xl">{service.description}</p>
            <Button variant="cta" size="xl" className="mt-8" asChild>
              <a href="/contact">Get Free Estimate</a>
            </Button>
          </div>
        </section>
        <section className="container mx-auto px-4 py-16">
          <p className="text-muted-foreground text-lg">Full service page content coming soon.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePage;
