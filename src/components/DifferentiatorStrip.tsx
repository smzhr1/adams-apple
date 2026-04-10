import { Clock, DollarSign, Award } from "lucide-react";

const items = [
  {
    icon: Clock,
    title: "Free 30-Min Site Visit",
    desc: "Every estimate includes an on-site assessment. No guessing, no vague ranges. We align before any work is started.",
  },
  {
    icon: DollarSign,
    title: "No Deposit Required",
    desc: "Work starts, you pay when it's done. Zero upfront commitment required on any job.",
  },
  {
    icon: Award,
    title: "ISA Certified Arborists on Staff",
    desc: "Neil (TX-4612A) and Geoff (TX-5212A) on staff. Not just a crew — certified expertise on every project.",
  },
];

const DifferentiatorStrip = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.title} className="text-center">
              <item.icon className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-heading font-bold text-primary-foreground mb-2">{item.title}</h3>
              <p className="text-primary-foreground/80 leading-relaxed text-[15px]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorStrip;
