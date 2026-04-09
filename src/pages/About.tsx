import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => (
  <div className="min-h-screen">
    <Header />
    <main className="container mx-auto px-4 py-20">
      <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">About Adam's Apple Tree Service</h1>
      <p className="text-muted-foreground text-lg max-w-3xl">
        Content coming soon. Learn about our team, certifications, and commitment to Central Texas tree care.
      </p>
    </main>
    <Footer />
  </div>
);

export default About;
