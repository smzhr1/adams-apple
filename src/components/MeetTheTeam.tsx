import teamAdam from "@/assets/team-adam.jpg";
import teamSarah from "@/assets/team-sarah.jpg";
import teamJake from "@/assets/team-jake.jpg";
import teamMike from "@/assets/team-mike.jpg";

const team = [
  {
    name: "Neil Myers",
    role: "ISA Certified Arborist (TX-4612A)",
    photo: teamAdam,
    bio: "Neil Myers (TX-4612A) is a Certified Arborist with a Tree Risk Assessment, Texas Oak Wilt, and Wildfire Risk Reduction Qualifications. If you see Neil in the field there is a very good chance he will be talking with you about your soil or his love for disc golf and cooking with his wife and dogs.",
  },
  {
    name: "Geoff Oliver",
    role: "ISA Certified Arborist (TX-5212A)",
    photo: teamSarah,
    bio: "Geoff Oliver (TX-5212A) is a Certified Arborist with a Tree Risk Assessment Qualification. His knowledge is conveyed to the crews and office staff to ensure ethics and work product are kept to industry standards. If you talk with Geoff he will very likely tell a cheesy joke.",
  },
  {
    name: "Jon Haben",
    role: "Arborist in Training",
    photo: teamJake,
    bio: "Jon is months away from qualifying for the certification exam. We are excited and encourage all clients to quiz him on his tree knowledge. Jon also is a member of a band with his twin brother and speaks Spanish fluently.",
  },
  {
    name: "Devin Oller",
    role: "Operations",
    photo: teamMike,
    bio: "If you have called or texted the office you have had the pleasure of working with Devin Oller. She ensures our operations continue to run smoothly all while raising her young daughter, Frankie. There is also a rumor that she will beat any contender at pool!",
  },
];

const MeetTheTeam = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-3">Our Team</p>
          <h2 className="font-heading font-bold text-foreground">Why Choose Adam's Apple Tree Service?</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
            At Adam's Apple Tree Service, we are more than just tree care professionals; we are dedicated 
            partners in your journey to create and maintain a beautiful, safe, and thriving landscape. With 
            deep roots in the Austin community and over 15 years of experience, we understand the unique 
            challenges and opportunities that our region's trees present.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
                <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs font-bold text-primary-foreground bg-primary/80 px-3 py-1 rounded-full backdrop-blur-sm whitespace-nowrap">
                  {member.role}
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
