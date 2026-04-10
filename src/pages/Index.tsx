import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

import BrandStatement from "@/components/BrandStatement";
import ServicesSection from "@/components/ServicesSection";
import DifferentiatorStrip from "@/components/DifferentiatorStrip";
import OurValues from "@/components/OurValues";
import MeetTheTeam from "@/components/MeetTheTeam";
import ReviewsSection from "@/components/ReviewsSection";
import LegacyTreeProgram from "@/components/LegacyTreeProgram";
import ServiceAreas from "@/components/ServiceAreas";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AccreditationStrip />
      <BrandStatement />
      <ServicesSection />
      <DifferentiatorStrip />
      <OurValues />
      <MeetTheTeam />
      <ReviewsSection />
      <LegacyTreeProgram />
      <ServiceAreas />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
