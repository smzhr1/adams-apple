import { useMemo, useState } from "react";
import { TreePine } from "lucide-react";
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

type Props = {
  onCtaClick?: () => void;
};

const GuesstimatorForm = ({ onCtaClick }: Props) => {
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
    <div className="bg-background border border-border rounded-2xl p-6 md:p-8 shadow-lg">
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

        <a
          href="/contact#contact-form"
          onClick={onCtaClick}
          className="group bg-secondary hover:bg-secondary/90 transition-colors rounded-xl px-5 py-5 mt-6 flex flex-col items-center text-center gap-3 cursor-pointer"
          aria-label="Get an exact quote — go to contact form"
        >
          <div className="leading-tight">
            <p className="text-secondary-foreground font-heading font-bold text-2xl md:text-3xl">
              ${estimate.low.toLocaleString()} – ${estimate.high.toLocaleString()}
            </p>
            <p className="text-secondary-foreground/85 text-xs mt-1">
              Rough estimate
            </p>
          </div>
          <span className="inline-flex items-center justify-center bg-accent text-accent-foreground font-bold uppercase tracking-wider text-xs rounded-lg px-5 py-2.5 shadow-md group-hover:shadow-lg group-hover:bg-accent/90 transition-all whitespace-nowrap leading-none">
            Get Exact Quote →
          </span>
        </a>
      </div>
    </div>
  );
};

export default GuesstimatorForm;
