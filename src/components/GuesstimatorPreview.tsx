import GuesstimatorForm from "./GuesstimatorForm";

const GuesstimatorPreview = () => {
  return (
    <section
      id="guesstimator"
      className="py-20 md:py-24 bg-muted scroll-mt-24"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT — copy + CTA */}
          <div>
            <p className="text-secondary font-bold uppercase tracking-[0.2em] text-sm mb-4">
              Instant Pricing Tool
            </p>
            <h2 className="font-heading font-bold text-foreground mb-5">
              Tree Removal{" "}
              <span className="text-secondary">Guesstimator</span>
            </h2>
            <p
              className="text-foreground/75 leading-relaxed mb-8 max-w-xl"
              style={{ fontSize: "var(--text-md)" }}
            >
              Not sure what tree removal costs? Use our free online tool to get a
              rough estimate based on your tree's size — no personal info
              required.
            </p>
            <a
              href="tel:5129128733"
              className="mx-auto sm:mx-0 flex flex-col items-center text-center w-fit border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground rounded-xl px-6 py-3 transition-colors leading-tight"
            >
              <span className="uppercase tracking-wider text-[11px] font-semibold opacity-80">
                Or call for a free estimate
              </span>
              <span className="text-lg font-bold mt-0.5">512-912-8733</span>
            </a>
          </div>

          {/* RIGHT — interactive preview card */}
          <div id="guesstimator-form" className="scroll-mt-24">
            <GuesstimatorForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuesstimatorPreview;
