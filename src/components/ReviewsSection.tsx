import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Robert",
    location: "South Manchaca",
    text: "These folks want to earn your business, and they seem willing to go the extra mile to keep you as a return customer.",
  },
  {
    name: "Sara",
    location: "Great Hills",
    text: "At no point along the way did I feel like they were pressuring me to expand my scope beyond what I asked them to do.",
  },
  {
    name: "Alex",
    location: "Austin, TX",
    text: "I used them to manage all tree related work on our 200+ homes under my portfolio. Could not be happier with the service they provide.",
  },
  {
    name: "Andy",
    location: "Austin, TX",
    text: "I took bids from more than 10 tree service firms and not only was yours among the lowest, but you did exactly what I wanted and didn't try to upsell me on anything.",
  },
  {
    name: "Shelby",
    location: "Austin, TX",
    text: "They did such a great job that my neighbor ended up hiring them to trim her tree as well. Adam's Apple is by far the best.",
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-3">Testimonials</p>
          <h2 className="font-heading font-bold text-foreground mb-2">
            What Austin Homeowners Are Saying
          </h2>
        </div>

        {/* Featured review */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <Quote className="w-10 h-10 text-accent mx-auto mb-4 rotate-180" />
          <p className="text-foreground italic leading-relaxed mb-6" style={{ fontSize: 'var(--text-xl)' }}>
            "{reviews[3].text}"
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-muted-foreground">—</span>
            <span className="font-semibold text-foreground">{reviews[3].name}</span>
            <span className="text-muted-foreground text-sm">{reviews[3].location}</span>
          </div>
        </div>

        {/* Other reviews in a simpler layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {reviews.filter((_, i) => i !== 3).map((review, idx) => (
            <div key={idx} className="border-l-2 border-accent pl-5 py-2">
              <p className="text-foreground leading-relaxed mb-3 italic" style={{ fontSize: 'var(--text-sm)' }}>
                "{review.text.length > 120 ? review.text.slice(0, 120) + '…' : review.text}"
              </p>
              <p className="font-semibold text-foreground text-sm">{review.name}</p>
              <p className="text-muted-foreground text-xs">{review.location}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="/reviews" className="text-primary font-semibold hover:underline" style={{ fontSize: 'var(--text-md)' }}>
            Read More Reviews →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
