import { Calculator } from "lucide-react";

const FloatingEstimateButton = () => {
  return (
    <a
      href="#estimate"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex items-center gap-2 bg-accent text-accent-foreground font-bold shadow-lg hover:shadow-xl transition-all group rounded-l-xl px-3 py-3 md:px-4 md:py-4"
      aria-label="Tree Service Estimator"
    >
      <Calculator className="w-6 h-6 md:w-7 md:h-7 shrink-0" />
      <span className="hidden md:inline text-sm font-bold uppercase tracking-wider whitespace-nowrap [writing-mode:horizontal-tb]">
        GUESStimator
      </span>
    </a>
  );
};

export default FloatingEstimateButton;
