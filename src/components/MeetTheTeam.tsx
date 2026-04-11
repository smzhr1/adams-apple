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
              At Adam's Apple Tree Service, we are more than just tree care professionals; we are dedicated 
              partners in your journey to create and maintain a beautiful, safe, and thriving landscape. With 
              deep roots in the Austin community and over 15 years of experience, we understand the unique 
              challenges and opportunities that our region's trees present.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6" style={{ fontSize: 'var(--text-md)' }}>
              Our team includes ISA Certified Arborists Neil Myers (TX-4612A) and Geoff Oliver (TX-5212A), 
              arborist-in-training Jon Haben, and operations manager Devin Oller — each bringing specialized 
              skills and genuine passion for tree care to every project.
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
