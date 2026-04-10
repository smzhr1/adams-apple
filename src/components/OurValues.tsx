import { Users, Shield, Leaf, DollarSign } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Client-Focused Results Rooted in Industry Expertise",
    body: "We believe that exceptional tree care goes beyond technical skill; it's about building relationships and understanding your unique needs and goals. We start by actively listening to your concerns and aspirations for your trees and landscape. Then, we leverage our experience and up-to-date knowledge of arboricultural science to develop a customized plan that aligns with your vision. From detailed estimates and transparent communication to meticulous execution and thorough cleanup, our client-focused approach ensures that every step of the process is smooth, efficient, and delivers the outstanding results you deserve.",
  },
  {
    icon: Leaf,
    title: "Unmatched Expertise, Unwavering Dedication: Your Trees in the Best Hands",
    body: "With over 15 years of hands-on experience tending to Austin's unique urban forest, we've developed a deep understanding of tree care that goes beyond textbook knowledge. Our tree experts are not just skilled technicians but passionate tree advocates. We continuously invest in formal training and education, staying ahead of the curve on the latest arboricultural best practices. This translates to healthier, stronger, and more beautiful trees for your property, along with enhanced safety and increased property value.",
  },
  {
    icon: Shield,
    title: "Safety First: Your Peace of Mind is Our Priority",
    body: "Safety is the cornerstone of every project we undertake. Whether it's a simple pruning job or a complex removal, we prioritize the safety of our clients, their property, and our team members above all else. We rigorously adhere to all industry safety standards (ANSI A300) and best practices, utilizing state-of-the-art equipment and techniques to minimize risk and ensure a secure working environment. Our comprehensive insurance coverage provides an extra layer of protection, giving you peace of mind throughout the entire process.",
  },
  {
    icon: DollarSign,
    title: "Affordability and Quality",
    body: "Our dedication to providing quality work does not need to break the bank. Our team is dedicated to understanding your objectives while managing options that work within a range of budgets. We can custom tailor our solutions to match price points. We will always offer free estimates and 30-minute site visits to ensure we align before any work is started.",
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

        <div className="grid md:grid-cols-2 gap-8">
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
