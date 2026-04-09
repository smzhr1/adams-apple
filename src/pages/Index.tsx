import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ServicesSection from "@/components/ServicesSection";
import EstimateCalculator from "@/components/EstimateCalculator";
import WhyChooseUs from "@/components/WhyChooseUs";
import ReviewsSection from "@/components/ReviewsSection";
import ServiceAreas from "@/components/ServiceAreas";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <EstimateCalculator />
      <WhyChooseUs />
      <ReviewsSection />
      <ServiceAreas />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
