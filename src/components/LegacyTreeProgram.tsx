import { Button } from "@/components/ui/button";
import legacyImg from "@/assets/legacy-tree.jpg";

const LegacyTreeProgram = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={legacyImg}
              alt="Young sapling planted as part of the Legacy Tree Program"
              loading="lazy"
              width={800}
              height={600}
              className="w-full h-72 md:h-80 object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-3">Something Special</p>
            <h2 className="font-heading font-bold text-foreground mb-4">
              Establishing Roots for Your Memories
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6" style={{ fontSize: 'var(--text-md)' }}>
              A simple, sustainable way to mark life's significant transitions — a new baby, a first home, 
              honoring a loved one, or any of life's precious moments.
            </p>
            <p className="text-foreground font-semibold mb-6" style={{ fontSize: 'var(--text-base)' }}>
              Current clients: Free · New clients: $50 + tax
            </p>
            <Button variant="cta" size="lg" className="uppercase tracking-wider text-[15px] font-bold" asChild>
              <a href="/services/legacy-tree-program">Learn More →</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegacyTreeProgram;
