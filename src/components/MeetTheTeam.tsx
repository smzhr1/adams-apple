import teamAdam from "@/assets/team-adam.jpg";
import teamSarah from "@/assets/team-sarah.jpg";
import teamJake from "@/assets/team-jake.jpg";
import teamMike from "@/assets/team-mike.jpg";

const team = [
  { name: "Adam Reeves", role: "Owner & Lead Arborist", cert: "ISA Certified", photo: teamAdam },
  { name: "Sarah Chen", role: "Climbing Specialist", cert: "TCIA Qualified", photo: teamSarah },
  { name: "Jake Morrison", role: "Tree Climber", cert: "ISA Certified", photo: teamJake },
  { name: "Mike Daniels", role: "Soil & Plant Health", cert: "Licensed Applicator", photo: teamMike },
];

const MeetTheTeam = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-3">The Experts Behind the Work</p>
          <h2 className="font-heading font-bold text-foreground">Meet Our Team</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Every member is trained, certified, and passionate about keeping Austin's trees healthy.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {team.map((member) => (
            <div key={member.name} className="group text-center">
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/5]">
                <img
                  src={member.photo}
                  alt={member.name}
                  loading="lazy"
                  width={512}
                  height={640}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-foreground/60 to-transparent" />
                <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs font-bold text-primary-foreground bg-primary/80 px-3 py-1 rounded-full backdrop-blur-sm">
                  {member.cert}
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
              <p className="text-muted-foreground text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
