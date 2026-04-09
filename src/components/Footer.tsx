import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="Adam's Apple Tree Service" className="h-12 w-auto brightness-0 invert" />
            <p className="text-primary-foreground/70 leading-relaxed">
              Austin's trusted tree care experts. ISA-certified arborists delivering quality service since 2010.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><a href="/services/tree-removal" className="hover:text-primary-foreground transition-colors">Tree Removal</a></li>
              <li><a href="/services/tree-pruning-trimming" className="hover:text-primary-foreground transition-colors">Tree Pruning & Trimming</a></li>
              <li><a href="/services/tree-planting" className="hover:text-primary-foreground transition-colors">Tree Planting</a></li>
              <li><a href="/services/soil-amendments" className="hover:text-primary-foreground transition-colors">Soil Amendments & Care</a></li>
              <li><a href="/services/emergency" className="hover:text-primary-foreground transition-colors">Emergency Services</a></li>
              <li><a href="/services/legacy-tree-program" className="hover:text-primary-foreground transition-colors">Legacy Tree Program</a></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Service Areas</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><a href="/areas/austin" className="hover:text-primary-foreground transition-colors">Austin</a></li>
              <li><a href="/areas/georgetown" className="hover:text-primary-foreground transition-colors">Georgetown</a></li>
              <li><a href="/areas/round-rock" className="hover:text-primary-foreground transition-colors">Round Rock</a></li>
              <li><a href="/areas/cedar-park" className="hover:text-primary-foreground transition-colors">Cedar Park</a></li>
              <li><a href="/areas/bastrop" className="hover:text-primary-foreground transition-colors">Bastrop</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3 text-primary-foreground/70">
              <a href="tel:5121234873" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4" /> 512-123-TREE
              </a>
              <a href="mailto:info@adamsappletreeservice.com" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4" /> info@adamsappletreeservice.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" /> Austin, TX &amp; Surrounding Areas
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6 text-center text-primary-foreground/50 text-sm">
          © {new Date().getFullYear()} Adam's Apple Tree Service. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
