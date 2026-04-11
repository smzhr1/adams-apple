import { Calculator } from "lucide-react";

const FloatingEstimateButton = () => {
  return (
    <a
      href="#estimate"
      className="fixed right-4 bottom-4 md:right-6 md:bottom-6 z-50 flex items-center gap-2 bg-accent text-accent-foreground font-bold shadow-lg hover:shadow-xl transition-all group rounded-xl px-4 py-3"
      aria-label="Tree Removal Guesstimator"
    >
      <Calculator className="w-6 h-6 md:w-7 md:h-7 shrink-0" />
      <span className="text-xs md:text-sm font-bold uppercase tracking-wider leading-tight">
        Tree Removal<br />GUESStimator
      </span>
    </a>
  );
};

export default FloatingEstimateButton;
