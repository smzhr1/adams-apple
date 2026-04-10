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
      {/* Left tree trunk */}
      <svg className="absolute left-4 md:left-16 top-0 h-full w-24 opacity-50 pointer-events-none" viewBox="0 0 100 1200" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main trunk - slightly tapered, organic curve */}
        <path d="M52 0 C54 200, 48 400, 50 600 C52 800, 46 1000, 50 1200" stroke="hsl(var(--primary))" strokeWidth="8" fill="none" />
        <path d="M44 0 C42 200, 48 400, 46 600 C44 800, 50 1000, 46 1200" stroke="hsl(var(--primary))" strokeWidth="6" fill="none" opacity="0.4" />
        {/* Branches going right */}
        <path d="M50 80 C60 70, 75 55, 90 40" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" />
        <path d="M78 48 C82 38, 88 35, 95 30" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
        <path d="M50 320 C62 305, 78 285, 92 265" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" />
        <path d="M80 278 C86 268, 90 262, 98 258" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
        <path d="M50 580 C65 565, 80 545, 88 530" stroke="hsl(var(--primary))" strokeWidth="2.5" fill="none" />
        <path d="M50 850 C60 835, 75 820, 85 808" stroke="hsl(var(--primary))" strokeWidth="2.5" fill="none" />
        {/* Branches going left */}
        <path d="M48 180 C38 165, 22 150, 8 140" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" />
        <path d="M20 148 C14 140, 8 135, 2 128" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
        <path d="M48 450 C35 435, 18 420, 5 410" stroke="hsl(var(--primary))" strokeWidth="2.5" fill="none" />
        <path d="M48 700 C36 688, 20 672, 10 660" stroke="hsl(var(--primary))" strokeWidth="2.5" fill="none" />
        <path d="M48 960 C38 948, 25 932, 12 920" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
        {/* Small leaf clusters */}
        <path d="M90 36 C95 28, 98 30, 94 38 Z" fill="hsl(var(--primary))" opacity="0.5" />
        <path d="M86 32 C82 24, 78 26, 82 34 Z" fill="hsl(var(--primary))" opacity="0.4" />
        <path d="M6 136 C1 128, -2 130, 2 138 Z" fill="hsl(var(--primary))" opacity="0.5" />
        <path d="M12 132 C8 124, 4 126, 8 134 Z" fill="hsl(var(--primary))" opacity="0.4" />
        <path d="M92 260 C97 252, 100 254, 96 262 Z" fill="hsl(var(--primary))" opacity="0.5" />
        <path d="M3 406 C-2 398, -4 400, 0 408 Z" fill="hsl(var(--primary))" opacity="0.5" />
        <path d="M86 526 C90 518, 94 520, 90 528 Z" fill="hsl(var(--primary))" opacity="0.4" />
        <path d="M8 656 C3 648, 0 650, 4 658 Z" fill="hsl(var(--primary))" opacity="0.5" />
        <path d="M83 804 C87 796, 90 798, 86 806 Z" fill="hsl(var(--primary))" opacity="0.4" />
        <path d="M10 916 C5 908, 2 910, 6 918 Z" fill="hsl(var(--primary))" opacity="0.5" />
      </svg>

      {/* Right tree trunk (mirrored) */}
      <svg className="absolute right-4 md:right-16 top-0 h-full w-24 opacity-50 pointer-events-none" viewBox="0 0 100 1200" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'scaleX(-1)' }}>
        <path d="M52 0 C54 200, 48 400, 50 600 C52 800, 46 1000, 50 1200" stroke="hsl(var(--primary))" strokeWidth="8" fill="none" />
        <path d="M44 0 C42 200, 48 400, 46 600 C44 800, 50 1000, 46 1200" stroke="hsl(var(--primary))" strokeWidth="6" fill="none" opacity="0.4" />
        <path d="M50 120 C60 105, 75 90, 90 75" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" />
        <path d="M78 83 C82 73, 88 70, 95 65" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
        <path d="M50 380 C62 365, 78 345, 92 325" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" />
        <path d="M50 640 C65 625, 80 605, 88 590" stroke="hsl(var(--primary))" strokeWidth="2.5" fill="none" />
        <path d="M50 920 C60 905, 75 890, 85 878" stroke="hsl(var(--primary))" strokeWidth="2.5" fill="none" />
        <path d="M48 240 C38 225, 22 210, 8 200" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" />
        <path d="M20 208 C14 200, 8 195, 2 188" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
        <path d="M48 500 C35 485, 18 470, 5 460" stroke="hsl(var(--primary))" strokeWidth="2.5" fill="none" />
        <path d="M48 760 C36 748, 20 732, 10 720" stroke="hsl(var(--primary))" strokeWidth="2.5" fill="none" />
        <path d="M48 1050 C38 1038, 25 1022, 12 1010" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
        <path d="M90 71 C95 63, 98 65, 94 73 Z" fill="hsl(var(--primary))" opacity="0.5" />
        <path d="M6 196 C1 188, -2 190, 2 198 Z" fill="hsl(var(--primary))" opacity="0.5" />
        <path d="M92 321 C97 313, 100 315, 96 323 Z" fill="hsl(var(--primary))" opacity="0.5" />
        <path d="M3 456 C-2 448, -4 450, 0 458 Z" fill="hsl(var(--primary))" opacity="0.5" />
        <path d="M86 586 C90 578, 94 580, 90 588 Z" fill="hsl(var(--primary))" opacity="0.4" />
        <path d="M8 716 C3 708, 0 710, 4 718 Z" fill="hsl(var(--primary))" opacity="0.5" />
        <path d="M83 874 C87 866, 90 868, 86 876 Z" fill="hsl(var(--primary))" opacity="0.4" />
        <path d="M10 1006 C5 998, 2 1000, 6 1008 Z" fill="hsl(var(--primary))" opacity="0.5" />
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
