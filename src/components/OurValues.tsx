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
      {/* Left tree stem */}
      <svg className="absolute left-6 md:left-12 top-0 h-full w-16 opacity-50 pointer-events-none" viewBox="0 0 60 1000" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 0 V1000" stroke="hsl(var(--primary))" strokeWidth="3" />
        <path d="M30 80 Q10 70 5 55" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
        <ellipse cx="4" cy="50" rx="8" ry="5" fill="hsl(var(--primary))" opacity="0.7" />
        <path d="M30 160 Q50 150 55 135" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
        <ellipse cx="56" cy="130" rx="8" ry="5" fill="hsl(var(--primary))" opacity="0.7" />
        <path d="M30 280 Q8 265 3 250" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
        <ellipse cx="2" cy="245" rx="9" ry="5" fill="hsl(var(--primary))" opacity="0.6" />
        <path d="M30 400 Q52 390 58 370" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
        <ellipse cx="58" cy="365" rx="8" ry="5" fill="hsl(var(--primary))" opacity="0.7" />
        <path d="M30 520 Q6 505 2 490" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
        <ellipse cx="1" cy="485" rx="9" ry="6" fill="hsl(var(--primary))" opacity="0.6" />
        <path d="M30 650 Q48 640 54 620" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
        <ellipse cx="55" cy="615" rx="8" ry="5" fill="hsl(var(--primary))" opacity="0.7" />
        <path d="M30 780 Q10 770 4 755" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
        <ellipse cx="3" cy="750" rx="8" ry="5" fill="hsl(var(--primary))" opacity="0.6" />
        <path d="M30 900 Q50 890 56 870" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
        <ellipse cx="57" cy="865" rx="8" ry="5" fill="hsl(var(--primary))" opacity="0.7" />
      </svg>

      {/* Right tree stem */}
      <svg className="absolute right-6 md:right-12 top-0 h-full w-16 opacity-50 pointer-events-none" viewBox="0 0 60 1000" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 0 V1000" stroke="hsl(var(--primary))" strokeWidth="3" />
        <path d="M30 120 Q50 110 56 95" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
        <ellipse cx="57" cy="90" rx="8" ry="5" fill="hsl(var(--primary))" opacity="0.7" />
        <path d="M30 240 Q8 225 3 210" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
        <ellipse cx="2" cy="205" rx="9" ry="5" fill="hsl(var(--primary))" opacity="0.6" />
        <path d="M30 360 Q52 345 57 330" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
        <ellipse cx="58" cy="325" rx="8" ry="5" fill="hsl(var(--primary))" opacity="0.7" />
        <path d="M30 480 Q6 465 2 450" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
        <ellipse cx="1" cy="445" rx="9" ry="6" fill="hsl(var(--primary))" opacity="0.6" />
        <path d="M30 600 Q48 585 55 570" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
        <ellipse cx="56" cy="565" rx="8" ry="5" fill="hsl(var(--primary))" opacity="0.7" />
        <path d="M30 720 Q10 705 5 690" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
        <ellipse cx="4" cy="685" rx="8" ry="5" fill="hsl(var(--primary))" opacity="0.6" />
        <path d="M30 850 Q50 835 56 820" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
        <ellipse cx="57" cy="815" rx="8" ry="5" fill="hsl(var(--primary))" opacity="0.7" />
        <path d="M30 960 Q8 945 3 930" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
        <ellipse cx="2" cy="925" rx="9" ry="5" fill="hsl(var(--primary))" opacity="0.6" />
      </svg>

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
