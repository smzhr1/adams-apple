import { Users, TreePine, Shield, DollarSign, Sparkles, ThumbsUp } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Client-Focused Results",
    body: "We listen first, then build a customized plan that aligns with your vision — from estimate to cleanup.",
  },
  {
    icon: TreePine,
    title: "Unmatched Expertise",
    body: "15+ years tending Austin's urban forest. Passionate tree advocates, not just skilled technicians.",
  },
  {
    icon: Shield,
    title: "Safety First",
    body: "Every project follows ANSI A300 standards. Fully insured. Your property and our crew, always protected.",
  },
  {
    icon: DollarSign,
    title: "Affordability and Quality",
    body: "Quality work that doesn't break the bank. Free estimates and 30-minute site visits, always.",
  },
  {
    icon: Sparkles,
    title: "Immaculate Job Sites",
    body: "We don't leave until your landscape is in pristine condition. Clean site, every time.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guarantee",
    body: "We stand behind every job. Not fully satisfied? We'll make it right.",
  },
];

const OurValues = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-3">Our Values</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Superb Communication, Safe Work Practices, and Affordable Rates
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-background rounded-2xl p-8 border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <v.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-3">{v.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-[15px]">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
