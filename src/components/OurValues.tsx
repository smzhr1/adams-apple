import imgClient from "@/assets/value-client-focused.jpg";
import imgExpertise from "@/assets/value-expertise.jpg";
import imgSafety from "@/assets/value-safety.jpg";
import imgAffordable from "@/assets/value-affordable.jpg";
import imgClean from "@/assets/value-clean.jpg";
import imgSatisfaction from "@/assets/value-satisfaction.jpg";

const values = [
  {
    title: "Client-Focused Results",
    body: "We listen first, then build a customized plan that aligns with your vision — from estimate to cleanup.",
    image: imgClient,
  },
  {
    title: "Unmatched Expertise",
    body: "15+ years tending Austin's urban forest. Passionate tree advocates, not just skilled technicians.",
    image: imgExpertise,
  },
  {
    title: "Safety First",
    body: "Every project follows ANSI A300 standards. Fully insured. Your property and our crew, always protected.",
    image: imgSafety,
  },
  {
    title: "Affordability and Quality",
    body: "Quality work that doesn't break the bank. Free estimates and 30-minute site visits, always.",
    image: imgAffordable,
  },
  {
    title: "Immaculate Job Sites",
    body: "We don't leave until your landscape is in pristine condition. Clean site, every time.",
    image: imgClean,
  },
  {
    title: "Satisfaction Guarantee",
    body: "We stand behind every job. Not fully satisfied? We'll make it right.",
    image: imgSatisfaction,
  },
];

const OurValues = () => {
  return (
    <section className="py-20 bg-muted relative overflow-hidden">
      {/* Subtle tree pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cpath d='M40 10 L50 30 L45 30 L55 50 L48 50 L58 70 L22 70 L32 50 L25 50 L35 30 L30 30 Z' fill='%23336633' /%3E%3Crect x='37' y='70' width='6' height='10' fill='%23664422' /%3E%3C/svg%3E")`,
        backgroundSize: '120px 120px',
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-3">Our Values</p>
          <h2 className="font-heading font-bold text-foreground max-w-3xl mx-auto">
            Superb Communication, Safe Work Practices, and Affordable Rates
          </h2>
        </div>

        <div className="space-y-16 max-w-5xl mx-auto">
          {values.map((v, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={v.title}
                className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12`}
              >
                <div className="w-full md:w-1/2">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={v.image}
                      alt={v.title}
                      loading="lazy"
                      width={800}
                      height={600}
                      className="w-full h-64 md:h-72 object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <span className="text-primary font-bold text-sm uppercase tracking-[0.15em]">0{idx + 1}</span>
                  <h3 className="font-heading font-bold text-foreground mt-1 mb-3" style={{ fontSize: 'var(--text-xl)' }}>{v.title}</h3>
                  <p className="text-muted-foreground leading-relaxed" style={{ fontSize: 'var(--text-md)' }}>{v.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
