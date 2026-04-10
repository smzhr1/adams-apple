import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const occasions = [
  "A new baby or adoption",
  "A first-home purchase",
  "Honoring a loved one or pet",
  "An anniversary or retirement",
  "Any of life's precious moments",
];

const LegacyTreeProgram = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-3">Something Special</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
          Establishing Roots for Your Memories
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          At Adam's Apple Tree Service, we spend our days caring for trees. Now, we want to help you 
          start one. Introducing our Legacy Planting Program — a simple, sustainable way to mark life's 
          significant transitions.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {occasions.map((item) => (
            <span key={item} className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 text-sm text-foreground">
              <Heart className="w-4 h-4 text-primary" /> {item}
            </span>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-6 border border-border mb-8 inline-block">
          <p className="text-foreground text-[15px]">
            We provide a 1–5 gallon native Texas sapling and professional installation.<br />
            <span className="font-bold">Current clients: Free.</span>{" "}
            <span className="font-bold">New clients: $50 + tax.</span>
          </p>
        </div>

        <div>
          <Button variant="cta" size="lg" className="uppercase tracking-wider text-[15px] font-bold" asChild>
            <a href="/services/legacy-tree-program">Learn About the Legacy Tree Program →</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LegacyTreeProgram;
