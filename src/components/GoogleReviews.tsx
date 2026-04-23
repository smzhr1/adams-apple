import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type Review = {
  name: string;
  initials: string;
  timeAgo: string;
  rating: number;
  text: string;
  avatarColor: string;
};

const reviews: Review[] = [
  {
    name: "Andy R.",
    initials: "AR",
    timeAgo: "2 weeks ago",
    rating: 5,
    text: "I took bids from more than 10 tree service firms and not only was yours among the lowest, but you did exactly what I wanted and didn't try to upsell me on anything. Highly recommend Adam's Apple to anyone in Austin.",
    avatarColor: "bg-primary",
  },
  {
    name: "Shelby T.",
    initials: "ST",
    timeAgo: "1 month ago",
    rating: 5,
    text: "They did such a great job that my neighbor ended up hiring them to trim her tree as well. Adam's Apple is by far the best tree service I've worked with.",
    avatarColor: "bg-secondary",
  },
  {
    name: "Robert M.",
    initials: "RM",
    timeAgo: "1 month ago",
    rating: 5,
    text: "These folks want to earn your business, and they seem willing to go the extra mile to keep you as a return customer. Professional, on-time, and clean.",
    avatarColor: "bg-accent",
  },
  {
    name: "Sara L.",
    initials: "SL",
    timeAgo: "2 months ago",
    rating: 5,
    text: "At no point along the way did I feel like they were pressuring me to expand my scope beyond what I asked them to do. Honest pricing and quality work.",
    avatarColor: "bg-primary",
  },
  {
    name: "Alex P.",
    initials: "AP",
    timeAgo: "3 months ago",
    rating: 5,
    text: "I used them to manage all tree related work on our 200+ homes under my portfolio. Could not be happier with the service they provide. Truly a top-tier crew.",
    avatarColor: "bg-secondary",
  },
  {
    name: "Jennifer K.",
    initials: "JK",
    timeAgo: "3 months ago",
    rating: 5,
    text: "ISA Certified Arborist took the time to walk our property and explain exactly what each tree needed. No pressure, just expert advice. Booked them on the spot.",
    avatarColor: "bg-accent",
  },
];

const GoogleLogo = () => (
  <svg viewBox="0 0 272 92" className="h-7 w-auto" xmlns="http://www.w3.org/2000/svg" aria-label="Google">
    <path
      fill="#EA4335"
      d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
    />
    <path
      fill="#FBBC05"
      d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
    />
    <path
      fill="#4285F4"
      d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"
    />
    <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z" />
    <path
      fill="#EA4335"
      d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"
    />
    <path
      fill="#4285F4"
      d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"
    />
  </svg>
);

const GoogleReviews = () => {
  const overall = 5.0;
  const totalReviews = 247;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-3">
            Google Reviews
          </p>
          <h2 className="font-heading font-bold text-foreground mb-2">
            Rated 5 Stars by Austin Homeowners
          </h2>
        </div>

        {/* Summary card */}
        <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-6 md:p-8 mb-10 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <GoogleLogo />
              <div className="h-10 w-px bg-border" aria-hidden="true" />
              <div>
                <p className="text-foreground font-semibold leading-tight">Reviews</p>
                <p className="text-muted-foreground text-xs">Verified by Google</p>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <div className="flex items-center gap-3">
                <span className="font-heading font-bold text-foreground text-4xl leading-none">
                  {overall.toFixed(1)}
                </span>
                <div className="flex flex-col">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-xs mt-1">
                    Based on {totalReviews}+ reviews
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/search?q=Adam%27s+Apple+Tree+Service+Austin+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              Write a Review
            </a>
          </div>
        </div>

        {/* Review cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {reviews.map((review, idx) => (
            <article
              key={idx}
              className="bg-card border border-border rounded-2xl p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <Avatar className="h-11 w-11">
                    <AvatarFallback className={`${review.avatarColor} text-primary-foreground font-semibold text-sm`}>
                      {review.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground text-sm leading-tight">
                      {review.name}
                    </p>
                    <p className="text-muted-foreground text-xs mt-0.5">{review.timeAgo}</p>
                  </div>
                </div>
                <GoogleLogo />
              </div>

              <div className="flex gap-0.5 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground/80 text-sm leading-relaxed flex-1">
                {review.text}
              </p>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.google.com/search?q=Adam%27s+Apple+Tree+Service+Austin+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline"
            style={{ fontSize: "var(--text-md)" }}
          >
            See all reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
