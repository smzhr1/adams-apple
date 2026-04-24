import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const areaData: Record<string, { name: string; description: string }> = {
  georgetown: {
    name: "Georgetown",
    description: "Serving Georgetown's historic neighborhoods and new developments with expert tree trimming, removal, and planting. Trust our certified arborists to care for your Georgetown property's trees.",
  },
  "round-rock": {
    name: "Round Rock",
    description: "Professional tree services for Round Rock homeowners and businesses. From routine pruning to emergency storm cleanup, we keep Round Rock's trees healthy and beautiful.",
  },
  "cedar-park": {
    name: "Cedar Park",
    description: "Expert tree care for Cedar Park and the surrounding Leander area. Our arborists provide safe removals, precision trimming, and tree health assessments.",
  },
  leander: {
    name: "Leander",
    description: "Reliable tree care for Leander homeowners — from young tree planting and structural pruning to safe removals and storm cleanup across the growing Leander area.",
  },
  "shady-hollow": {
    name: "Shady Hollow",
    description: "Specialized tree care for Shady Hollow's mature live oak canopy. Our certified arborists are experienced with oak wilt prevention, pruning, and Heritage Tree management.",
  },
  buda: {
    name: "Buda",
    description: "Trusted tree services for Buda properties — covering tree removal, trimming, planting, and emergency response across Hays County and the surrounding area.",
  },
  "bee-cave": {
    name: "Bee Cave",
    description: "Expert tree care for Bee Cave's hill country properties. We handle live oak pruning, cedar elm care, and large tree removals with full-service cleanup.",
  },
  rollingwood: {
    name: "Rollingwood",
    description: "Premium tree care for Rollingwood's established neighborhoods and Heritage Trees. Certified arborists, city permit handling, and meticulous craftsmanship every time.",
  },
  manor: {
    name: "Manor",
    description: "Dependable tree services for Manor homeowners and acreage properties — tree removal, trimming, planting, and storm cleanup throughout eastern Travis County.",
  },
};

const AreaPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const area = slug ? areaData[slug] : null;

  if (!area) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-heading font-bold text-foreground">Area not found</h1>
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
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
              Tree Service in {area.name}, TX
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-3xl">{area.description}</p>
            <Button variant="cta" size="xl" className="mt-8" asChild>
              <a href="/contact">Get Free Estimate</a>
            </Button>
          </div>
        </section>
        <section className="container mx-auto px-4 py-16">
          <p className="text-muted-foreground text-lg">Full area page content coming soon.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AreaPage;
