import teamGroup from "@/assets/team-group.jpg";

const MeetTheTeam = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={teamGroup}
              alt="The Adam's Apple Tree Service team"
              loading="lazy"
              width={1200}
              height={700}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-3">Our Team</p>
            <h2 className="font-heading font-bold text-foreground mb-6">
              Meet the Crew
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6" style={{ fontSize: 'var(--text-md)' }}>
              Adam's Apple Tree Service is a locally owned Austin company built on certified expertise and real relationships with our clients. Our team includes ISA Certified Arborists Neil Myers (TX-4612A) and Geoff Oliver (TX-5212A), arborist-in-training Jon Haben, and operations manager Devin Oller. Every project in Austin gets certified oversight from assessment through cleanup — not just a crew with a chainsaw.
            </p>
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors"
              style={{ fontSize: 'var(--text-base)' }}
            >
              Meet the Full Team →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
