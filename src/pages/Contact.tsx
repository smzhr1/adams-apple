import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => (
  <div className="min-h-screen">
    <Header />
    <main className="container mx-auto px-4 py-20">
      <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">Contact Us</h1>
      <p className="text-muted-foreground text-lg max-w-3xl">
        Contact form and Jobber CRM embed coming soon. Call us at 512-123-TREE for a free estimate.
      </p>
    </main>
    <Footer />
  </div>
);

export default Contact;
