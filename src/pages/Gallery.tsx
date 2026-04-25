import { useState, useMemo } from "react";
import { X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";
import before3 from "@/assets/before-3.jpg";
import after3 from "@/assets/after-3.jpg";
import imgRemoval from "@/assets/service-tree-removal.jpg";
import imgPruning from "@/assets/service-pruning.jpg";
import imgPlanting from "@/assets/service-planting.jpg";
import imgEmergency from "@/assets/service-emergency.jpg";
import imgLegacy from "@/assets/service-legacy.jpg";
import imgSoil from "@/assets/service-soil.jpg";
import imgArborist from "@/assets/hero-arborist.jpg";
import imgWhyChoose from "@/assets/why-choose-us.jpg";
import imgCta from "@/assets/cta-yard.jpg";

type Category =
  | "All"
  | "Tree Removal"
  | "Pruning"
  | "Planting"
  | "Emergency"
  | "Stump Grinding"
  | "Soil & Health";

type Photo = {
  src: string;
  alt: string;
  category: Exclude<Category, "All">;
  caption?: string;
};

const photos: Photo[] = [
  { src: before1, alt: "Overgrown yard before cleanup", category: "Tree Removal", caption: "Overgrown yard — before" },
  { src: after1, alt: "Yard after restoration", category: "Tree Removal", caption: "Same yard — after" },
  { src: before2, alt: "Hazardous tree near roofline", category: "Emergency", caption: "Hazardous tree near roofline" },
  { src: after2, alt: "Tree safely removed", category: "Emergency", caption: "Safely removed" },
  { src: before3, alt: "Overgrown shrubs before shaping", category: "Pruning", caption: "Overgrown shrubs — before" },
  { src: after3, alt: "Clean shaped landscaping", category: "Pruning", caption: "Clean landscaping — after" },
  { src: imgRemoval, alt: "Crew performing tree removal", category: "Tree Removal", caption: "Large removal in South Austin" },
  { src: imgPruning, alt: "Pruning live oak canopy", category: "Pruning", caption: "Live oak canopy work" },
  { src: imgPlanting, alt: "Planting native sapling", category: "Planting", caption: "Legacy native planting" },
  { src: imgLegacy, alt: "Legacy tree program planting", category: "Planting", caption: "Legacy Tree Program install" },
  { src: imgEmergency, alt: "Storm damage cleanup", category: "Emergency", caption: "After-storm cleanup" },
  { src: imgSoil, alt: "Soil amendment treatment", category: "Soil & Health", caption: "Root zone treatment" },
  { src: imgArborist, alt: "ISA arborist climbing", category: "Pruning", caption: "ISA Certified climber" },
  { src: imgWhyChoose, alt: "Crew at work", category: "Tree Removal", caption: "Equipment access — backyard" },
  { src: imgCta, alt: "Restored property", category: "Soil & Health", caption: "Restored landscape" },
];

const categories: Category[] = [
  "All",
  "Tree Removal",
  "Pruning",
  "Planting",
  "Emergency",
  "Stump Grinding",
  "Soil & Health",
];

const Gallery = () => {
  const [active, setActive] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<Photo | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? photos : photos.filter((p) => p.category === active)),
    [active]
  );

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* HERO */}
        <section className="bg-card pt-32 pb-12 md:pt-40 md:pb-16 border-b border-border">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-secondary font-bold uppercase tracking-[0.25em] text-xs mb-4">
              Photo Gallery
            </p>
            <h1 className="font-heading font-bold text-foreground mb-5 text-[34px] sm:text-[40px] md:text-5xl leading-[1.05]">
              Real Projects from{" "}
              <span className="text-secondary">Austin Properties</span>
            </h1>
            <p
              className="text-muted-foreground max-w-2xl mx-auto"
              style={{ fontSize: "var(--text-md)", lineHeight: 1.65 }}
            >
              Browse a sampling of removals, prunings, plantings, and emergency
              jobs we've completed across the Greater Austin area.
            </p>
          </div>
        </section>

        {/* FILTERS */}
        <section className="py-10 bg-background sticky top-16 md:top-20 z-30 border-b border-border/60 backdrop-blur supports-[backdrop-filter]:bg-background/85">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {categories.map((cat) => {
                const count =
                  cat === "All"
                    ? photos.length
                    : photos.filter((p) => p.category === cat).length;
                const isActive = cat === active;
                return (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className={cn(
                      "px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider border transition-all",
                      isActive
                        ? "bg-primary text-primary-foreground border-primary shadow-sm"
                        : "bg-card text-foreground border-border hover:border-primary hover:text-primary"
                    )}
                  >
                    {cat}{" "}
                    <span
                      className={cn(
                        "ml-1.5 text-[10px] md:text-xs font-semibold",
                        isActive ? "opacity-90" : "text-muted-foreground"
                      )}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* GRID */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            {filtered.length === 0 ? (
              <p className="text-center text-muted-foreground py-16">
                No photos in this category yet — check back soon.
              </p>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
                {filtered.map((photo, idx) => (
                  <button
                    key={`${photo.src}-${idx}`}
                    onClick={() => setLightbox(photo)}
                    className="group relative overflow-hidden rounded-xl aspect-square bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    aria-label={`View ${photo.caption || photo.alt}`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 md:p-4">
                      <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-primary-foreground/90">
                        {photo.category}
                      </span>
                      {photo.caption && (
                        <span className="text-primary-foreground text-xs md:text-sm font-semibold leading-tight mt-1">
                          {photo.caption}
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />

      {/* LIGHTBOX */}
      <Dialog open={!!lightbox} onOpenChange={(open) => !open && setLightbox(null)}>
        <DialogContent
          className="max-w-5xl p-0 overflow-hidden bg-foreground border-none"
          onInteractOutside={() => setLightbox(null)}
        >
          {lightbox && (
            <div className="relative bg-foreground">
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="w-full max-h-[80vh] object-contain"
              />
              {(lightbox.caption || lightbox.category) && (
                <div className="px-4 md:px-6 py-3 md:py-4 bg-foreground/95 text-background">
                  <p className="text-[11px] uppercase tracking-wider text-secondary font-bold">
                    {lightbox.category}
                  </p>
                  {lightbox.caption && (
                    <p className="text-base font-semibold mt-0.5">
                      {lightbox.caption}
                    </p>
                  )}
                </div>
              )}
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-background/90 text-foreground flex items-center justify-center hover:bg-background transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
