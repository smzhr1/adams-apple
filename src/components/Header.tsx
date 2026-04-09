import { useState } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { label: "Tree Trimming", href: "#services" },
    { label: "Tree Removal", href: "#services" },
    { label: "Stump Grinding", href: "#services" },
    { label: "Tree Planting", href: "#services" },
    { label: "Emergency Services", href: "#services" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img src={logo} alt="Adam's Apple Tree Service" className="h-12 md:h-14 w-auto" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <div className="relative group">
            <button className="flex items-center gap-1 text-foreground/80 hover:text-primary font-medium transition-colors">
              Services <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <div className="bg-card rounded-lg shadow-lg border border-border p-2 min-w-[200px]">
                {services.map((s) => (
                  <a key={s.label} href={s.href} className="block px-4 py-2 rounded-md text-foreground/80 hover:bg-muted hover:text-primary transition-colors">
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <a href="#tree-planting" className="text-foreground/80 hover:text-primary font-medium transition-colors">Tree Planting</a>
          <a href="#why-us" className="text-foreground/80 hover:text-primary font-medium transition-colors">About</a>
          <a href="#contact" className="text-foreground/80 hover:text-primary font-medium transition-colors">Contact</a>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <a href="tel:5121234873" className="hidden md:flex items-center gap-2 text-primary font-semibold">
            <Phone className="w-4 h-4" />
            512-123-TREE
          </a>
          <Button variant="cta" size="lg" className="hidden sm:inline-flex" asChild>
            <a href="#estimate">Get Free Estimate</a>
          </Button>
          <button className="lg:hidden p-2 text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center justify-between w-full py-2 text-foreground font-medium">
              Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="pl-4 space-y-2">
                {services.map((s) => (
                  <a key={s.label} href={s.href} className="block py-1 text-foreground/70">{s.label}</a>
                ))}
              </div>
            )}
            <a href="#tree-planting" className="block py-2 text-foreground font-medium">Tree Planting</a>
            <a href="#why-us" className="block py-2 text-foreground font-medium">About</a>
            <a href="#contact" className="block py-2 text-foreground font-medium">Contact</a>
            <a href="tel:5121234873" className="flex items-center gap-2 py-2 text-primary font-semibold">
              <Phone className="w-4 h-4" /> 512-123-TREE
            </a>
            <Button variant="cta" className="w-full" asChild>
              <a href="#estimate">Get Free Estimate</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
