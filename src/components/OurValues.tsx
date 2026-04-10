import { Users, TreePine, Shield, DollarSign, Sparkles, ThumbsUp } from "lucide-react";

const values = [
  {
    icon: Users,
    num: "01",
    title: "Client-Focused Results",
    body: "We listen first, then build a customized plan that aligns with your vision — from estimate to cleanup.",
  },
  {
    icon: TreePine,
    num: "02",
    title: "Unmatched Expertise",
    body: "15+ years tending Austin's urban forest. Passionate tree advocates, not just skilled technicians.",
  },
  {
    icon: Shield,
    num: "03",
    title: "Safety First",
    body: "Every project follows ANSI A300 standards. Fully insured. Your property and our crew, always protected.",
  },
  {
    icon: DollarSign,
    num: "04",
    title: "Affordability and Quality",
    body: "Quality work that doesn't break the bank. Free estimates and 30-minute site visits, always.",
  },
  {
    icon: Sparkles,
    num: "05",
    title: "Immaculate Job Sites",
    body: "We don't leave until your landscape is in pristine condition. Clean site, every time.",
  },
  {
    icon: ThumbsUp,
    num: "06",
    title: "Satisfaction Guarantee",
    body: "We stand behind every job. Not fully satisfied? We'll make it right.",
  },
];

const OurValues = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-3">Our Values</p>
          <h2 className="font-heading font-bold text-foreground max-w-3xl mx-auto">
            Superb Communication, Safe Work Practices, and Affordable Rates
          </h2>
        </div>

        <div className="max-w-4xl mx-auto divide-y divide-border">
          {values.map((v) => (
            <div key={v.title} className="flex items-start gap-6 md:gap-10 py-10 group">
              <span className="text-4xl md:text-5xl font-heading font-bold text-accent/30 group-hover:text-accent transition-colors duration-300 shrink-0 w-14 md:w-20 text-right leading-none pt-1">
                {v.num}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <v.icon className="w-5 h-5 text-primary shrink-0" />
                  <h3 className="font-heading font-bold text-foreground" style={{ fontSize: 'var(--text-lg)' }}>{v.title}</h3>
                </div>
                <p className="text-muted-foreground text-[15px] md:text-base leading-relaxed max-w-2xl">{v.body}</p>
              </div>
              <div className="hidden md:block w-2.5 h-2.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors duration-300 mt-3 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;