import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background">
      {/* Main footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="Adam's Apple Tree Service" className="h-12 w-auto brightness-0 invert" />
            <p className="text-background/60 leading-relaxed text-sm">
              Austin's trusted tree care experts. ISA-certified arborists delivering quality service since 2010.
            </p>
            <Button variant="cta" size="lg" asChild>
              <a href="#estimate">Get Free Estimate</a>
            </Button>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-accent">Services</h4>
            <ul className="space-y-2 text-background/70 text-sm">
              <li><a href="/services/tree-removal" className="hover:text-accent transition-colors">Tree Removal</a></li>
              <li><a href="/services/tree-pruning-trimming" className="hover:text-accent transition-colors">Tree Pruning & Trimming</a></li>
              <li><a href="/services/tree-planting" className="hover:text-accent transition-colors">Tree Planting</a></li>
              <li><a href="/services/soil-amendments" className="hover:text-accent transition-colors">Soil Amendments & Care</a></li>
              <li><a href="/services/emergency" className="hover:text-accent transition-colors">Emergency Services</a></li>
              <li><a href="/services/legacy-tree-program" className="hover:text-accent transition-colors">Legacy Tree Program</a></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-accent">Service Areas</h4>
            <ul className="space-y-2 text-background/70 text-sm">
              <li><a href="/areas/austin" className="hover:text-accent transition-colors">Austin</a></li>
              <li><a href="/areas/georgetown" className="hover:text-accent transition-colors">Georgetown</a></li>
              <li><a href="/areas/round-rock" className="hover:text-accent transition-colors">Round Rock</a></li>
              <li><a href="/areas/cedar-park" className="hover:text-accent transition-colors">Cedar Park</a></li>
              <li><a href="/areas/bastrop" className="hover:text-accent transition-colors">Bastrop</a></li>
            </ul>
            <div className="mt-4">
              <h4 className="font-heading font-semibold text-lg mb-2 text-accent">Company</h4>
              <ul className="space-y-2 text-background/70 text-sm">
                <li><a href="/about" className="hover:text-accent transition-colors">About Us</a></li>
                <li><a href="/blog" className="hover:text-accent transition-colors">Blog</a></li>
                <li><a href="/contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-accent">Contact Us</h4>
            <div className="space-y-3 text-background/70 text-sm">
              <a href="tel:5129128733" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 text-accent" /> 512-912-8733 (TREE)
              </a>
              <a href="mailto:info@adamsappletreeservice.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="w-4 h-4 text-accent" /> info@adamsappletreeservice.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" /> Austin, TX &amp; Surrounding Areas
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-background/40 text-xs">
          <span>© {new Date().getFullYear()} Adam's Apple Tree Service. All rights reserved.</span>
          <span>Serving Central Texas with pride 🌳</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
