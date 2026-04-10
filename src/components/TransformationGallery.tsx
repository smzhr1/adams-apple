import { useState } from "react";
import { ArrowRight } from "lucide-react";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";
import before3 from "@/assets/before-3.jpg";
import after3 from "@/assets/after-3.jpg";

const projects = [
  { before: before1, after: after1, title: "Overgrown Yard Cleanup", desc: "Dead branch removal & full yard restoration" },
  { before: before2, after: after2, title: "Hazardous Tree Removal", desc: "Large dead tree safely removed from roofline" },
  { before: before3, after: after3, title: "Hedge & Shrub Shaping", desc: "Overgrown shrubs transformed into clean landscaping" },
];

const TransformationGallery = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-3">See the Difference</p>
          <h2 className="font-heading font-bold text-foreground" style={{ fontSize: 'var(--text-3xl)' }}>Before &amp; After</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Real results from real Austin properties. Swipe or hover to reveal the transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div key={project.title} className="group">
              <div
                className="relative overflow-hidden rounded-2xl aspect-[3/2] cursor-pointer"
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                onTouchStart={() => setHoveredIdx(hoveredIdx === idx ? null : idx)}
              >
                {/* Before image */}
                <img
                  src={project.before}
                  alt={`Before: ${project.title}`}
                  loading="lazy"
                  width={768}
                  height={512}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    hoveredIdx === idx ? "opacity-0" : "opacity-100"
                  }`}
                />
                {/* After image */}
                <img
                  src={project.after}
                  alt={`After: ${project.title}`}
                  loading="lazy"
                  width={768}
                  height={512}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    hoveredIdx === idx ? "opacity-100" : "opacity-0"
                  }`}
                />
                {/* Label */}
                <span className={`absolute top-3 left-3 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full backdrop-blur-sm transition-colors duration-300 ${
                  hoveredIdx === idx
                    ? "bg-primary/90 text-primary-foreground"
                    : "bg-foreground/70 text-primary-foreground"
                }`}>
                  {hoveredIdx === idx ? "After" : "Before"}
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground mt-4">{project.title}</h3>
              <p className="text-muted-foreground text-sm">{project.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/gallery"
            className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors text-[15px]"
          >
            View Full Photo Gallery <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TransformationGallery;
