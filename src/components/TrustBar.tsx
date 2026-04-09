import { Calendar, Users, Star, TreePine } from "lucide-react";

const stats = [
  { icon: Calendar, value: "15+", label: "Years in Business" },
  { icon: Users, value: "2,500+", label: "Happy Customers" },
  { icon: Star, value: "5.0", label: "Google Rating" },
  { icon: TreePine, value: "10,000+", label: "Trees Serviced" },
];

const TrustBar = () => {
  return (
    <section className="bg-card border-y border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-4 justify-center animate-count-up">
              <stat.icon className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <p className="text-2xl md:text-3xl font-heading font-bold text-foreground">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
