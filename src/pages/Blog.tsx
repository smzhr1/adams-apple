import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => (
  <div className="min-h-screen">
    <Header />
    <main className="container mx-auto px-4 py-20">
      <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">Blog</h1>
      <p className="text-muted-foreground text-lg max-w-3xl">
        Tree care tips, seasonal guides, and news from Adam's Apple Tree Service. Coming soon.
      </p>
    </main>
    <Footer />
  </div>
);

export default Blog;
