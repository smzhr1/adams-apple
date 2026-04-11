import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo-footer.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="Adam's Apple Tree Service" className="h-[72px] w-auto" />
            <div className="space-y-2 text-primary-foreground/80 text-sm">
              <a href="tel:5129128733" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 text-accent" /> 512-912-8733
              </a>
              <a href="mailto:info@adamsappletreeservice.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="w-4 h-4 text-accent" /> info@adamsappletreeservice.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" /> Austin, TX, USA
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-accent">Navigation</h4>
            <ul className="space-y-2 text-primary-foreground/80 text-sm">
              <li><a href="/" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="/contact" className="hover:text-accent transition-colors">Contact Us</a></li>
              <li><a href="/about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="/services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="/gallery" className="hover:text-accent transition-colors">Gallery</a></li>
              <li><a href="/blog" className="hover:text-accent transition-colors">Blog</a></li>
              <li><a href="/faqs" className="hover:text-accent transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-accent">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80 text-sm">
              <li><a href="/services/tree-removal" className="hover:text-accent transition-colors">Tree Removal</a></li>
              <li><a href="/services/tree-pruning-trimming" className="hover:text-accent transition-colors">Tree Pruning and Trimming</a></li>
              <li><a href="/services/tree-planting" className="hover:text-accent transition-colors">Tree Planting</a></li>
              <li><a href="/services/soil-amendments" className="hover:text-accent transition-colors">Soil Amendments and Care</a></li>
              <li><a href="/services/emergency" className="hover:text-accent transition-colors">Emergency Services</a></li>
              <li><a href="/services/legacy-tree-program" className="hover:text-accent transition-colors">Legacy Tree Program</a></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-accent">Service Areas</h4>
            <ul className="space-y-2 text-primary-foreground/80 text-sm">
              <li><a href="/areas/austin" className="hover:text-accent transition-colors">Austin</a></li>
              <li><a href="/areas/westlake" className="hover:text-accent transition-colors">Westlake</a></li>
              <li><a href="/areas/cedar-park" className="hover:text-accent transition-colors">Cedar Park</a></li>
              <li><a href="/areas/round-rock" className="hover:text-accent transition-colors">Round Rock</a></li>
              <li><a href="/areas/pflugerville" className="hover:text-accent transition-colors">Pflugerville</a></li>
              <li><a href="/areas/bee-cave" className="hover:text-accent transition-colors">Bee Cave</a></li>
              <li><a href="/areas/lakeway" className="hover:text-accent transition-colors">Lakeway</a></li>
              <li><a href="/areas/dripping-springs" className="hover:text-accent transition-colors">Dripping Springs</a></li>
              <li><a href="/areas/leander" className="hover:text-accent transition-colors">Leander</a></li>
              <li><a href="/areas/tarrytown" className="hover:text-accent transition-colors">Tarrytown</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-primary-foreground/60 text-xs">
          <span>© {new Date().getFullYear()} Adam's Apple Tree Service, LLC · Locally Owned & Proudly Serving Austin Area</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
