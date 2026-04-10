import { useState } from "react";
import { Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const EstimateCalculator = () => {
  const [height, setHeight] = useState([30]);
  const [diameter, setDiameter] = useState([12]);

  const calcEstimate = () => {
    const h = height[0];
    const d = diameter[0];
    const base = h * 8 + d * 15;
    const low = Math.round(base * 0.8 / 50) * 50;
    const high = Math.round(base * 1.4 / 50) * 50;
    return { low, high };
  };

  const estimate = calcEstimate();

  return (
    <section id="estimate" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl shadow-xl border border-border p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <Calculator className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="font-heading font-bold text-foreground" style={{ fontSize: 'var(--text-2xl)' }}>
                  Tree Service Estimator
                </h2>
                <p className="text-muted-foreground text-sm">Get a rough cost estimate instantly</p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-3">
                  <label className="font-medium text-foreground">Tree Height</label>
                  <span className="text-primary font-semibold">{height[0]} ft</span>
                </div>
                <Slider
                  value={height}
                  onValueChange={setHeight}
                  min={10}
                  max={100}
                  step={5}
                  className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>10 ft</span><span>100 ft</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <label className="font-medium text-foreground">Trunk Diameter</label>
                  <span className="text-primary font-semibold">{diameter[0]} in</span>
                </div>
                <Slider
                  value={diameter}
                  onValueChange={setDiameter}
                  min={4}
                  max={48}
                  step={2}
                  className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>4 in</span><span>48 in</span>
                </div>
              </div>

              <div className="bg-muted rounded-xl p-6 text-center">
                <p className="text-muted-foreground text-sm mb-1">Estimated Price Range</p>
                <p className="text-3xl md:text-4xl font-heading font-bold text-primary">
                  ${estimate.low} – ${estimate.high}
                </p>
                <p className="text-xs text-muted-foreground mt-2">*Actual pricing may vary based on site conditions</p>
              </div>

              <Button variant="cta" size="xl" className="w-full" asChild>
                <a href="#contact">Get Exact Estimate</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EstimateCalculator;
