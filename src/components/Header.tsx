import { useState, useEffect } from "react";
import { Phone, Menu, X, ChevronDown, TreePine, Scissors, Sprout, Leaf, AlertTriangle, Crown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const services = [
  { icon: TreePine, label: "Tree Removal", href: "/services/tree-removal", desc: "Safe removal of dead or hazardous trees" },
  { icon: Scissors, label: "Tree Pruning & Trimming", href: "/services/tree-pruning-trimming", desc: "Expert shaping for healthy growth" },
  { icon: Sprout, label: "Tree Planting", href: "/services/tree-planting", desc: "Species selection & professional planting" },
  { icon: Leaf, label: "Soil Amendments & Care", href: "/services/soil-amendments", desc: "Root zone treatments & fertilization" },
  { icon: AlertTriangle, label: "Emergency Services", href: "/services/emergency", desc: "24/7 storm damage response" },
  { icon: Crown, label: "Legacy Tree Program", href: "/services/legacy-tree-program", desc: "Heritage tree preservation & care" },
];

const areas = [
  { name: "Austin", slug: "austin" },
  { name: "Georgetown", slug: "georgetown" },
  { name: "Round Rock", slug: "round-rock" },
  { name: "Cedar Park", slug: "cedar-park" },
  { name: "Bastrop", slug: "bastrop" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "border-b border-transparent"
      }`}
      style={!scrolled && !mobileOpen ? {
        background: "linear-gradient(to right, hsl(0 0% 100% / 0.95) 0%, hsl(0 0% 100% / 0.7) 30%, hsl(0 0% 100% / 0) 60%)"
      } : undefined}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img src={logo} alt="Adam's Apple Tree Service" className="h-12 md:h-14 w-auto" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {/* Services Mega Menu */}
          <div className="relative group">
            <button className={`flex items-center gap-1 font-semibold transition-colors text-[15px] ${
              scrolled ? "text-foreground/80 hover:text-primary" : "text-primary-foreground hover:text-accent drop-shadow-sm"
            }`}>
              Services <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-background rounded-2xl shadow-2xl border border-border p-6 min-w-[640px]">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">Our Services</p>
                <div className="grid grid-cols-2 gap-2">
                  {services.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-card transition-colors group/item"
                    >
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

          {/* Service Areas Dropdown */}
          <div className="relative group">
            <button className={`flex items-center gap-1 font-semibold transition-colors text-[15px] ${
              scrolled ? "text-foreground/80 hover:text-primary" : "text-primary-foreground hover:text-accent drop-shadow-sm"
            }`}>
              Service Areas <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-background rounded-xl shadow-2xl border border-border p-2 min-w-[200px]">
                {areas.map((a) => (
                  <a
                    key={a.slug}
                    href={`/areas/${a.slug}`}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-foreground/80 hover:bg-card hover:text-primary transition-colors text-sm font-semibold"
                  >
                    <MapPin className="w-4 h-4 text-primary" />
                    {a.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a href="/about" className={`font-semibold transition-colors text-[15px] ${
            scrolled ? "text-foreground/80 hover:text-primary" : "text-primary-foreground hover:text-accent drop-shadow-sm"
          }`}>About</a>
          <a href="/contact" className={`font-semibold transition-colors text-[15px] ${
            scrolled ? "text-foreground/80 hover:text-primary" : "text-primary-foreground hover:text-accent drop-shadow-sm"
          }`}>Contact</a>
          <a href="/blog" className={`font-semibold transition-colors text-[15px] ${
            scrolled ? "text-foreground/80 hover:text-primary" : "text-primary-foreground hover:text-accent drop-shadow-sm"
          }`}>Blog</a>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <a href="tel:5121234873" className={`hidden md:flex items-center gap-2 font-bold text-[15px] ${
            scrolled ? "text-primary" : "text-accent"
          }`}>
            <Phone className="w-4 h-4" />
            512-123-TREE
          </a>
          <Button variant="cta" size="lg" className="hidden sm:inline-flex uppercase tracking-wider text-[15px] font-bold" asChild>
            <a href="#estimate">Get Free Estimate</a>
          </Button>
          <button className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-primary-foreground"}`} onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-1">
            <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className="flex items-center justify-between w-full py-3 text-foreground font-bold">
              Services <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 space-y-1 pb-2">
                {services.map((s) => (
                  <a key={s.label} href={s.href} className="flex items-center gap-2 py-2 text-foreground/70 text-sm">
                    <s.icon className="w-4 h-4 text-primary" /> {s.label}
                  </a>
                ))}
              </div>
            )}

            <button onClick={() => setMobileAreasOpen(!mobileAreasOpen)} className="flex items-center justify-between w-full py-3 text-foreground font-bold">
              Service Areas <ChevronDown className={`w-4 h-4 transition-transform ${mobileAreasOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileAreasOpen && (
              <div className="pl-4 space-y-1 pb-2">
                {areas.map((a) => (
                  <a key={a.slug} href={`/areas/${a.slug}`} className="flex items-center gap-2 py-2 text-foreground/70 text-sm">
                    <MapPin className="w-4 h-4 text-primary" /> {a.name}
                  </a>
                ))}
              </div>
            )}

            <a href="/about" className="block py-3 text-foreground font-bold">About</a>
            <a href="/contact" className="block py-3 text-foreground font-bold">Contact</a>
            <a href="/blog" className="block py-3 text-foreground font-bold">Blog</a>
            <a href="tel:5121234873" className="flex items-center gap-2 py-3 text-primary font-bold">
              <Phone className="w-4 h-4" /> 512-123-TREE
            </a>
            <Button variant="cta" className="w-full uppercase tracking-wider font-bold" asChild>
              <a href="#estimate">Get Free Estimate</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
