import { Button } from "@/components/ui/button";

const BrandStatement = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <p className="text-foreground leading-relaxed mb-8" style={{ fontSize: 'var(--text-md)' }}>
          Serving Austin homeowners and property managers since 2008, Adam's Apple Tree Service is a locally owned, fully insured tree care company with ISA certified arborists on staff. We hold certifications in arboriculture, tree risk assessment, urban forestry, and pesticide application — the credentials that matter for Austin's Heritage Trees, oak wilt zones, and city permit requirements.
        </p>
        <Button variant="cta" size="lg" className="uppercase tracking-wider text-[15px] font-bold" asChild>
          <a href="#estimate">Schedule an Estimate</a>
        </Button>
      </div>
    </section>
  );
};

export default BrandStatement;
