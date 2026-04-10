import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AccreditationStrip from "@/components/AccreditationStrip";
import TrustBar from "@/components/TrustBar";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import MeetTheTeam from "@/components/MeetTheTeam";
import TransformationGallery from "@/components/TransformationGallery";
import ReviewsSection from "@/components/ReviewsSection";
import EstimateCalculator from "@/components/EstimateCalculator";
import ServiceAreas from "@/components/ServiceAreas";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AccreditationStrip />
      <TrustBar />
      <ServicesSection />
      <WhyChooseUs />
      <MeetTheTeam />
      <TransformationGallery />
      <ReviewsSection />
      <EstimateCalculator />
      <ServiceAreas />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
