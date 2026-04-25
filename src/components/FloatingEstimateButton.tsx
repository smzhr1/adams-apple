import { useState, useEffect } from "react";
import { Calculator } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import GuesstimatorForm from "./GuesstimatorForm";

const FloatingEstimateButton = () => {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`fixed right-0 bottom-4 md:bottom-6 z-50 flex items-center gap-2 bg-accent text-accent-foreground font-bold shadow-lg hover:shadow-xl transition-all duration-300 group rounded-l-xl px-4 py-3 ${
          visible
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none md:opacity-100 md:translate-x-0 md:pointer-events-auto"
        }`}
        aria-label="Open Tree Removal Guesstimator"
      >
        <Calculator className="w-6 h-6 md:w-7 md:h-7 shrink-0" />
        <span className="text-xs md:text-sm font-bold uppercase tracking-wider leading-tight text-left">
          Tree Removal
          <br />
          GUESStimator
        </span>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg p-0 bg-transparent border-none shadow-none">
          <DialogTitle className="sr-only">Tree Removal Guesstimator</DialogTitle>
          <DialogDescription className="sr-only">
            Get a rough tree removal estimate based on tree size and access.
          </DialogDescription>
          <div className="bg-muted rounded-2xl p-1">
            <GuesstimatorForm onCtaClick={() => setOpen(false)} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FloatingEstimateButton;
