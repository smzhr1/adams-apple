import { Star } from "lucide-react";

const reviews = [
  {
    name: "Review Placeholder",
    location: "Austin Neighborhood",
    text: "Placeholder for verified Google/Yelp review. Replace with actual client testimonial.",
    rating: 5,
  },
  {
    name: "Review Placeholder",
    location: "Austin Neighborhood",
    text: "Placeholder for verified Google/Yelp review. Replace with actual client testimonial.",
    rating: 5,
  },
  {
    name: "Review Placeholder",
    location: "Austin Neighborhood",
    text: "Placeholder for verified Google/Yelp review. Replace with actual client testimonial.",
    rating: 5,
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
            What Austin Homeowners Are Saying
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-card rounded-2xl p-8 border border-border shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 italic">"{review.text}"</p>
              <div>
                <p className="font-semibold text-foreground">{review.name}</p>
                <p className="text-muted-foreground text-sm">{review.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="/reviews" className="text-primary font-semibold hover:underline text-lg">
            Read More Reviews →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
