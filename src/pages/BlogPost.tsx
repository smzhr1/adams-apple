import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blog";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h1 className="font-heading font-bold text-foreground text-3xl md:text-4xl mb-4">
              Article not found
            </h1>
            <p className="text-muted-foreground mb-8">
              The article you're looking for doesn't exist or may have moved.
            </p>
            <Button variant="cta" size="lg" asChild>
              <Link to="/blog">Back to the Journal</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* HERO */}
        <section className="bg-card pt-32 pb-10 md:pt-40 md:pb-14 border-b border-border">
          <div className="container mx-auto px-4 max-w-3xl">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm mb-6 hover:gap-2.5 transition-all"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Journal
            </Link>
            <p className="text-secondary font-bold uppercase tracking-[0.25em] text-xs mb-4">
              {post.category}
            </p>
            <h1 className="font-heading font-bold text-foreground mb-5 text-[30px] sm:text-[36px] md:text-5xl leading-[1.1]">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" /> {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" /> {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> {post.readTime}
              </span>
            </div>
          </div>
        </section>

        {/* FEATURED IMAGE */}
        <section className="bg-background pt-10 md:pt-14">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="overflow-hidden rounded-2xl aspect-[16/9] bg-muted">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* ARTICLE BODY (placeholder) */}
        <article className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <div
              className="prose-content space-y-6 text-foreground/90"
              style={{ fontSize: "var(--text-md)", lineHeight: 1.75 }}
            >
              <p className="text-xl md:text-2xl font-heading text-foreground leading-snug">
                {post.excerpt}
              </p>

              <h2 className="font-heading font-bold text-foreground text-2xl md:text-3xl mt-10 mb-2">
                Why this matters in Austin
              </h2>
              <p>
                Central Texas trees deal with conditions you won't find in most
                of the country — caliche soils, flash drought, late freezes,
                and a long, hot growing season. Understanding how those local
                pressures affect your trees is the first step to keeping them
                healthy for decades.
              </p>
              <p>
                Our ISA Certified Arborists have spent 15+ years working in
                neighborhoods across the Greater Austin Area. The notes below
                come straight from the field.
              </p>

              <h2 className="font-heading font-bold text-foreground text-2xl md:text-3xl mt-10 mb-2">
                What to look for
              </h2>
              <p>
                Start with a slow walk around the trunk and the drip line.
                Healthy trees show consistent leaf color, full canopies, and no
                fungal growth at the base. Warning signs include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sudden leaf drop outside of the dormant season</li>
                <li>Bark that's loose, cracking, or oozing sap</li>
                <li>Mushrooms or conks growing from the trunk or roots</li>
                <li>Dead branches in the upper canopy</li>
                <li>Soil heaving or visible root damage near the base</li>
              </ul>

              <h2 className="font-heading font-bold text-foreground text-2xl md:text-3xl mt-10 mb-2">
                When to call an arborist
              </h2>
              <p>
                If you're seeing any of those warning signs — or you just want
                a second opinion before making a removal or pruning decision —
                a free 30-minute on-site visit is the safest bet. We'll walk
                the property with you, identify the species, and explain your
                options without pressure.
              </p>

              <blockquote className="border-l-4 border-secondary pl-5 py-2 italic text-foreground/80 my-8">
                "A healthy mature tree adds real value to your property. Losing
                one is rarely an emergency overnight — but waiting too long
                almost always costs more."
              </blockquote>

              <h2 className="font-heading font-bold text-foreground text-2xl md:text-3xl mt-10 mb-2">
                Next steps
              </h2>
              <p>
                If you'd like an arborist to take a look, give us a call or
                text at{" "}
                <a
                  href="tel:5129128733"
                  className="text-primary font-bold hover:underline"
                >
                  512-912-8733
                </a>
                . Estimates are always free, and there are no deposits required
                to get on the schedule.
              </p>
            </div>

            {/* Inline CTA */}
            <div className="mt-12 p-6 md:p-8 rounded-2xl bg-muted border border-border text-center">
              <p className="font-heading font-bold text-foreground text-xl md:text-2xl mb-4">
                Want an arborist's eyes on your tree?
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="cta" size="lg" asChild>
                  <Link to="/contact">Schedule an Estimate</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:5129128733" className="flex items-center gap-2">
                    <Phone className="w-5 h-5" /> 512-912-8733
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </article>

        {/* RELATED */}
        {related.length > 0 && (
          <section className="py-16 bg-card border-t border-border">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="font-heading font-bold text-foreground text-2xl md:text-3xl mb-8 text-center">
                Keep Reading
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/blog/${p.slug}`}
                    className="group block bg-background rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-muted">
                      <img
                        src={p.image}
                        alt={p.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-primary font-bold uppercase tracking-[0.18em] text-[11px] mb-2">
                        {p.category}
                      </p>
                      <h3 className="font-heading font-bold text-foreground text-lg leading-snug mb-2 group-hover:text-primary transition-colors">
                        {p.title}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 text-primary font-bold text-sm group-hover:gap-2.5 transition-all">
                        Read article <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
