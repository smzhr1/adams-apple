import { useState } from "react";
import { Phone, Menu, X, ChevronDown, TreePine, Scissors, Sprout, Leaf, AlertTriangle, FileText, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const services = [
  { icon: TreePine, label: "Tree Removal", href: "/services/tree-removal", desc: "Safe removal of dead or hazardous trees" },
  { icon: Scissors, label: "Tree Pruning & Trimming", href: "/services/tree-pruning-trimming", desc: "Expert shaping for healthy growth" },
  { icon: Sprout, label: "Tree Planting", href: "/services/tree-planting", desc: "Species selection & professional planting" },
  { icon: Leaf, label: "Soil Amendments & Care", href: "/services/soil-amendments", desc: "Root zone treatments & fertilization" },
  { icon: AlertTriangle, label: "Emergency Services", href: "/services/emergency", desc: "24/7 storm damage response" },
  { icon: FileText, label: "Professional Services", href: "/services/professional-services", desc: "Reports, permits & insurance docs" },
];

const serviceAreas = {
  "South Austin": ["Barton Hills", "Bouldin Creek", "South Congress", "South Lamar", "Travis Heights", "Zilker"],
  "West Austin": ["Westlake", "Tarrytown", "Rollingwood", "Westlake Hills"],
  "Central Austin": ["Downtown", "Hyde Park", "Clarksville"],
  "East Austin": ["Mueller", "Govalle", "East Riverside"],
  "North Austin": ["Allandale", "Crestview", "North Loop"],
};

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[hsl(110,44%,60%)] backdrop-blur-md border-b border-[hsl(110,44%,50%)] shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <a href="/" className="flex-shrink-0">
          <img src={logo} alt="Adam's Apple Tree Service" className="h-[72px] md:h-[84px] w-auto" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          <div className="relative group">
            <button className="flex items-center gap-1 text-white/90 hover:text-white font-semibold transition-colors text-[15px]">
              Services <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-background rounded-2xl shadow-2xl border border-border p-6 min-w-[640px]">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">Our Services</p>
                <div className="grid grid-cols-2 gap-2">
                  {services.map((s) => (
                    <a key={s.label} href={s.href} className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-card transition-colors group/item">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary/20 transition-colors">
                        <s.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground text-sm">{s.label}</p>
                        <p className="text-muted-foreground text-xs mt-0.5">{s.desc}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center gap-1 text-white/90 hover:text-white font-semibold transition-colors text-[15px]">
              Service Areas <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-background rounded-2xl shadow-2xl border border-border p-6 min-w-[480px]">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">Areas We Serve</p>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(serviceAreas).map(([region, areas]) => (
                    <div key={region}>
                      <p className="font-bold text-foreground text-sm flex items-center gap-1.5 mb-1.5">
                        <MapPin className="w-3.5 h-3.5 text-primary" /> {region}
                      </p>
                      <ul className="space-y-0.5">
                        {areas.map((area) => (
                          <li key={area}>
                            <a href={`/areas/${area.toLowerCase().replace(/\s+/g, '-')}`} className="text-muted-foreground text-xs hover:text-primary transition-colors">
                              {area}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <a href="/about" className="text-white/90 hover:text-white font-semibold transition-colors text-[15px]">About</a>
          <a href="/gallery" className="text-white/90 hover:text-white font-semibold transition-colors text-[15px]">Gallery</a>
          <a href="/contact" className="text-white/90 hover:text-white font-semibold transition-colors text-[15px]">Contact</a>
          <a href="/blog" className="text-white/90 hover:text-white font-semibold transition-colors text-[15px]">Blog</a>
          <a href="/faqs" className="text-white/90 hover:text-white font-semibold transition-colors text-[15px]">FAQs</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:5129128733" className="hidden md:flex items-center gap-2 text-white font-bold text-[15px]">
            <Phone className="w-4 h-4" /> 512-912-8733
          </a>
          <Button variant="cta" size="lg" className="hidden sm:inline-flex uppercase tracking-wider text-[15px] font-bold" asChild>
            <a href="#estimate">Schedule an Estimate</a>
          </Button>
          <button className="lg:hidden p-2 text-white" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-[hsl(110,44%,55%)] border-t border-[hsl(110,44%,50%)]">
          <div className="container mx-auto px-4 py-4 space-y-1">
            <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className="flex items-center justify-between w-full py-3 text-white font-bold">
              Services <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 space-y-1 pb-2">
                {services.map((s) => (
                  <a key={s.label} href={s.href} className="flex items-center gap-2 py-2 text-white/80 text-sm">
                    <s.icon className="w-4 h-4 text-white/70" /> {s.label}
                  </a>
                ))}
              </div>
            )}

            <button onClick={() => setMobileAreasOpen(!mobileAreasOpen)} className="flex items-center justify-between w-full py-3 text-white font-bold">
              Service Areas <ChevronDown className={`w-4 h-4 transition-transform ${mobileAreasOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileAreasOpen && (
              <div className="pl-4 space-y-2 pb-2">
                {Object.entries(serviceAreas).map(([region, areas]) => (
                  <div key={region}>
                    <p className="text-white font-semibold text-sm flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" /> {region}
                    </p>
                    <div className="pl-5 flex flex-wrap gap-x-3 gap-y-0.5">
                      {areas.map((area) => (
                        <a key={area} href={`/areas/${area.toLowerCase().replace(/\s+/g, '-')}`} className="text-white/70 text-xs hover:text-white transition-colors">
                          {area}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <a href="/about" className="block py-3 text-white font-bold">About</a>
            <a href="/gallery" className="block py-3 text-white font-bold">Gallery</a>
            <a href="/contact" className="block py-3 text-white font-bold">Contact</a>
            <a href="/blog" className="block py-3 text-white font-bold">Blog</a>
            <a href="/faqs" className="block py-3 text-white font-bold">FAQs</a>
            <a href="tel:5129128733" className="flex items-center gap-2 py-3 text-white font-bold">
              <Phone className="w-4 h-4" /> 512-912-8733
            </a>
            <Button variant="cta" className="w-full uppercase tracking-wider font-bold" asChild>
              <a href="#estimate">Schedule an Estimate</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
