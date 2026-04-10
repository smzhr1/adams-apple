import { Button } from "@/components/ui/button";

const BrandStatement = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <p className="text-foreground leading-relaxed mb-8" style={{ fontSize: 'var(--text-md)' }}>
          Adam's Apple Tree Service is your trusted local source for expert tree care in the Austin area. 
          With over 15 years of experience serving the diverse landscapes of Central Texas, we understand 
          the unique needs of our region's trees. From the iconic live oaks that shade our streets to the 
          delicate crepe myrtles that add a burst of color, we're passionate about preserving the health 
          and beauty of every tree we touch.
        </p>
        <Button variant="cta" size="lg" className="uppercase tracking-wider text-[15px] font-bold" asChild>
          <a href="#estimate">Schedule an Estimate</a>
        </Button>
      </div>
    </section>
  );
};

export default BrandStatement;
