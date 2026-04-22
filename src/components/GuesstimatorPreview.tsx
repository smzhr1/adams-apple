import { useMemo, useState } from "react";
import { TreePine } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const heights = [
  { value: "small", label: "Under 30 feet", base: 450 },
  { value: "medium", label: "30 – 50 feet", base: 900 },
  { value: "large", label: "50 – 75 feet", base: 1600 },
  { value: "xl", label: "Over 75 feet", base: 2600 },
];

const diameters = [
  { value: "thin", label: "Under 12 inches", mult: 0.85 },
  { value: "med", label: "12 – 18 inches", mult: 1.0 },
  { value: "thick", label: "18 – 30 inches", mult: 1.25 },
  { value: "huge", label: "Over 30 inches", mult: 1.55 },
];

const access = [
  { value: "open", label: "Open / drivable access", mult: 0.9 },
  { value: "standard", label: "Standard (backyard)", mult: 1.0 },
  { value: "tight", label: "Tight / hard to reach", mult: 1.25 },
  { value: "crane", label: "Crane required", mult: 1.6 },
];

const round = (n: number) => Math.round(n / 50) * 50;

const GuesstimatorPreview = () => {
  const [h, setH] = useState("medium");
  const [d, setD] = useState("med");
  const [a, setA] = useState("standard");

  const estimate = useMemo(() => {
    const hh = heights.find((x) => x.value === h)!;
    const dd = diameters.find((x) => x.value === d)!;
    const aa = access.find((x) => x.value === a)!;
    const base = hh.base * dd.mult * aa.mult;
    return { low: round(base * 0.85), high: round(base * 1.25) };
  }, [h, d, a]);

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
            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              <Button variant="cta" size="xl" asChild>
                <a href="#guesstimator-form">Try the Guesstimator →</a>
              </Button>
              <p className="text-foreground/70 text-sm">
                Or call for a free estimate:{" "}
                <a
                  href="tel:5129128733"
                  className="text-secondary font-semibold hover:text-secondary/80"
                >
                  512-912-8733
                </a>
              </p>
            </div>
          </div>

          {/* RIGHT — interactive preview card */}
          <div
            id="guesstimator-form"
            className="bg-background border border-border rounded-2xl p-6 md:p-8 shadow-lg scroll-mt-24"
          >
            <div className="flex items-center gap-2 mb-6">
              <TreePine className="w-5 h-5 text-secondary" />
              <p className="text-secondary font-bold uppercase tracking-[0.18em] text-sm">
                Quick Estimate Preview
              </p>
            </div>

            <div className="space-y-5">
              <div>
                <label className="text-foreground/80 text-sm font-medium mb-2 block">
                  Tree Height
                </label>
                <Select value={h} onValueChange={setH}>
                  <SelectTrigger className="bg-muted border-border text-foreground h-12 hover:bg-muted/70">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {heights.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-foreground/80 text-sm font-medium mb-2 block">
                  Trunk Diameter
                </label>
                <Select value={d} onValueChange={setD}>
                  <SelectTrigger className="bg-muted border-border text-foreground h-12 hover:bg-muted/70">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {diameters.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-foreground/80 text-sm font-medium mb-2 block">
                  Accessibility
                </label>
                <Select value={a} onValueChange={setA}>
                  <SelectTrigger className="bg-muted border-border text-foreground h-12 hover:bg-muted/70">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {access.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="bg-secondary rounded-xl px-5 py-4 mt-6 flex items-center justify-between">
                <div>
                  <p className="text-secondary-foreground font-heading font-bold text-2xl md:text-3xl leading-tight">
                    ${estimate.low.toLocaleString()} – ${estimate.high.toLocaleString()}
                  </p>
                  <p className="text-secondary-foreground/85 text-xs">
                    Rough estimate ·{" "}
                    <a href="/#estimate" className="underline hover:text-accent">
                      Get exact quote
                    </a>
                  </p>
                </div>
                <TreePine className="w-8 h-8 text-secondary-foreground/70" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuesstimatorPreview;
