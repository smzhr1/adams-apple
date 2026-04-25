import { ArrowRight, Calendar, Clock, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blog";

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* HERO */}
        <section className="bg-card pt-32 pb-12 md:pt-40 md:pb-16 border-b border-border">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-secondary font-bold uppercase tracking-[0.25em] text-xs mb-4">
              Adam's Apple Journal
            </p>
            <h1 className="font-heading font-bold text-foreground mb-5 text-[34px] sm:text-[40px] md:text-5xl leading-[1.05]">
              Tree Care Tips, Seasonal Guides{" "}
              <span className="text-secondary">& Local Insight</span>
            </h1>
            <p
              className="text-muted-foreground max-w-2xl mx-auto"
              style={{ fontSize: "var(--text-md)", lineHeight: 1.65 }}
            >
              Practical advice from our ISA Certified Arborists on caring for
              the trees that make Austin, Austin.
            </p>
          </div>
        </section>

        {/* POST LIST */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <ul className="divide-y divide-border">
              {blogPosts.map((post) => (
                <li key={post.slug} className="group">
                  <a
                    href={`/blog/${post.slug}`}
                    className="grid grid-cols-1 sm:grid-cols-[200px_1fr] md:grid-cols-[260px_1fr] gap-6 md:gap-8 py-8 md:py-10 items-start"
                  >
                    {/* Thumbnail */}
                    <div className="overflow-hidden rounded-xl aspect-[4/3] sm:aspect-[5/4] bg-muted">
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col">
                      <p className="text-primary font-bold uppercase tracking-[0.18em] text-xs mb-3">
                        {post.category}
                      </p>
                      <h2
                        className="font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight"
                        style={{ fontSize: "var(--text-xl)" }}
                      >
                        {post.title}
                      </h2>
                      <p
                        className="text-muted-foreground leading-relaxed mb-4"
                        style={{ fontSize: "var(--text-base)" }}
                      >
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground mb-4">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" /> {post.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" /> {post.readTime}
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-primary font-bold text-sm group-hover:gap-2.5 transition-all">
                        Read article <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PHONE CTA */}
        <section className="py-12 bg-muted border-y border-border">
          <div className="container mx-auto px-4 text-center">
            <p className="text-foreground font-semibold mb-4">
              Have a tree question we haven't covered yet?
            </p>
            <Button variant="cta" size="xl" asChild>
              <a href="tel:5129128733" className="flex items-center gap-2">
                <Phone className="w-5 h-5" /> Call 512-912-8733
              </a>
            </Button>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
