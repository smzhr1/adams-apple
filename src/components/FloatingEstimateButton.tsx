import { useState, useEffect } from "react";
import { Calculator } from "lucide-react";

const FloatingEstimateButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#estimate"
      className={`fixed right-0 bottom-4 md:bottom-6 z-50 flex items-center gap-2 bg-accent text-accent-foreground font-bold shadow-lg hover:shadow-xl transition-all duration-300 group rounded-l-xl px-4 py-3 ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none md:opacity-100 md:translate-x-0 md:pointer-events-auto"
      }`}
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
