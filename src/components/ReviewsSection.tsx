import { Star } from "lucide-react";

const reviews = [
  {
    name: "Robert",
    location: "South Manchaca",
    text: "These folks want to earn your business, and they seem willing to go the extra mile to keep you as a return customer.",
    rating: 5,
  },
  {
    name: "Sara",
    location: "Great Hills",
    text: "At no point along the way did I feel like they were pressuring me to expand my scope beyond what I asked them to do.",
    rating: 5,
  },
  {
    name: "Alex",
    location: "Austin, TX",
    text: "I used them to manage all tree related work on our 200+ homes under my portfolio. Could not be happier with the service they provide.",
    rating: 5,
  },
  {
    name: "Andy",
    location: "Austin, TX",
    text: "I took bids from more than 10 tree service firms and not only was yours among the lowest, but you did exactly what I wanted and didn't try to upsell me on anything.",
    rating: 5,
  },
  {
    name: "Shelby",
    location: "Austin, TX",
    text: "They did such a great job that my neighbor ended up hiring them to trim her tree as well. I've been through a few different tree removal/trimming companies and Adam's Apple is by far the best.",
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
