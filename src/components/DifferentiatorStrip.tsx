import { Clock, DollarSign, Award } from "lucide-react";

const items = [
  {
    icon: Clock,
    title: "Free 30-Min Site Visit",
    desc: "Every Austin estimate includes an on-site assessment with your certified arborist. No guessing, no vague ranges. We align on scope before any work is started.",
  },
  {
    icon: DollarSign,
    title: "No Deposit Required",
    desc: "Work starts when you are ready. You pay when the job is done and you are satisfied. Zero upfront commitment on any Austin tree service job.",
  },
  {
    icon: Award,
    title: "ISA Certified Arborists on Staff",
    desc: "Neil Myers (TX-4612A) and Geoff Oliver (TX-5212A) are on staff for every project. Not a crew that shows up and figures it out — certified expertise from assessment to cleanup.",
  },
];

const DifferentiatorStrip = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.title} className="text-center">
              <item.icon className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="font-heading font-bold text-secondary-foreground mb-2" style={{ fontSize: 'var(--text-lg)' }}>{item.title}</h3>
              <p className="text-secondary-foreground/80 leading-relaxed" style={{ fontSize: 'var(--text-base)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorStrip;
