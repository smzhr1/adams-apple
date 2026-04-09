import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    location: "Austin, TX",
    text: "Adam's Apple did an incredible job removing two large oaks from our backyard. Professional, clean, and on time. Couldn't recommend them more!",
    rating: 5,
  },
  {
    name: "James R.",
    location: "Round Rock, TX",
    text: "We've used them three times now for trimming and they always exceed expectations. Fair pricing and the team is super respectful of our property.",
    rating: 5,
  },
  {
    name: "Maria L.",
    location: "Cedar Park, TX",
    text: "Called them for emergency storm cleanup and they were at our door within hours. Lifesavers! Our yard looks better than before the storm.",
    rating: 5,
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-accent text-accent" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-lg">5.0 Stars on Google · 200+ Reviews</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.name} className="bg-card rounded-2xl p-8 border border-border shadow-sm">
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
      </div>
    </section>
  );
};

export default ReviewsSection;
