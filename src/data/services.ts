import imgRemoval from "@/assets/service-tree-removal.jpg";
import imgPruning from "@/assets/service-pruning.jpg";
import imgPlanting from "@/assets/service-planting.jpg";
import imgSoil from "@/assets/service-soil.jpg";
import imgEmergency from "@/assets/service-emergency.jpg";
import imgLegacy from "@/assets/service-legacy.jpg";
import heroArborist from "@/assets/hero-arborist.jpg";
import whyChoose from "@/assets/why-choose-us.jpg";
import valueClean from "@/assets/value-clean.jpg";

export type ServiceContent = {
  slug: string;
  title: string;
  heroEyebrow: string;
  heroHeadline: string;
  heroTagline: string;
  heroSubhead: string;
  heroImage: string;
  heroImages?: string[];
  offerings: { title: string; body: string; image: string; cta?: { label: string; href: string } }[];
  showGuesstimator?: boolean;
  guesstimatorHeadline?: string;
  guesstimatorSubhead?: string;
  whyChoose: {
    headline: string;
    paragraphs: string[];
  };
  included: {
    image: string;
    headline: string;
    items: string[];
  };
  partnerships?: {
    headline: string;
    intro?: string;
    partners: {
      title: string;
      body: string;
      contact?: { phone?: string; email?: string; website?: string };
    }[];
    disclaimer?: string;
  };
  blogCallout?: {
    headline: string;
    paragraphs: string[];
    ctaLabel: string;
    ctaHref: string;
  };
  faqs: { q: string; a: string }[];
  related: { slug: string; title: string; image: string }[];
};

const allRelated = [
  { slug: "tree-removal", title: "Tree Removal", image: imgRemoval },
  { slug: "tree-pruning-trimming", title: "Tree Pruning & Trimming", image: imgPruning },
  { slug: "tree-planting", title: "Tree Planting", image: imgPlanting },
  { slug: "soil-amendments", title: "Soil Amendments", image: imgSoil },
  { slug: "emergency", title: "24/7 Emergency", image: imgEmergency },
  { slug: "legacy-tree-program", title: "Legacy Tree Program", image: imgLegacy },
];

export const services: Record<string, ServiceContent> = {
  "tree-removal": {
    slug: "tree-removal",
    title: "Tree Removal",
    heroEyebrow: "Austin Tree Services",
    heroHeadline: "Tree Removal",
    heroTagline: "Tree removal done right at an affordable price.",
    heroSubhead:
      "Adam's Apple Tree Service specializes in the removal of trees and shrubs. Whether it is a large tree removal or clearing a plot of land, our team is equipped to handle your needs. We can even remove the stump and debris.",
    heroImage: heroArborist,
    heroImages: [heroArborist, imgRemoval, imgEmergency],
    offerings: [
      {
        title: "Tree Removal",
        image: imgRemoval,
        body: "We handle large tree removals with experience and safe practices to ensure your property is protected through the entire process. Curious how much a removal of a single tree may cost? Try our Tree Removal Guesstimator below.",
        cta: { label: "Try the Guesstimator", href: "#guesstimator" },
      },
      {
        title: "Land Clearing",
        image: imgPlanting,
        body: "We will clear a piece of land by removing any unwanted trees and shrubs. We offer pathway clearance, fence line clearance, and even full land clearance. Debris can be mulched on site or removed from the property. We are experts in understanding local ordinance requirements and will ensure all local rules and regulations are followed.",
      },
      {
        title: "Stump Grinding & Stump Removal",
        image: imgSoil,
        body: "Stump removal includes fully tracing the entire stump and roots out of the yard. Stump grinding is a cost-effective way to remove the unsightly stump by cutting it just below the surface, allowing the area to be covered by sod, mulch, or rocks. Stump remains can be left on site as a high-quality mulch or removed and replaced with another product.",
      },
    ],
    showGuesstimator: true,
    guesstimatorHeadline: "Tree Removal Guesstimator",
    guesstimatorSubhead:
      "Curious what your removal might cost? Move the sliders for a ballpark range in seconds — then book a free on-site visit for an exact written quote.",
    whyChoose: {
      headline: "How is Adam's Apple Different From Other Tree Services?",
      paragraphs: [
        "When it comes to the trees that grace your Austin property, you need more than just a chainsaw and a ladder. You need a team that understands the unique challenges and beauty of Central Texas trees, from majestic live oaks to delicate crepe myrtles. That's where Adam's Apple Tree Service comes in.",
        "Unlike other companies, we're not just about getting the job done quickly. We're expert climbers with a passion for trees and a commitment to your property's safety and aesthetics. We know that each tree is unique, and we approach each project with a meticulous eye, utilizing our extensive knowledge of tree biology and growth patterns to provide tailored care that goes beyond the basics.",
        "We understand that your trees are an investment in your property's value and beauty, and we take that responsibility seriously. Our approach is rooted in transparency and communication. We believe in empowering you with knowledge, which is why we provide a comprehensive scope of work before we start. This detailed plan outlines each step of the process, from initial assessment to final cleanup, complete with images that show you exactly what to expect. No surprises, just exceptional results.",
        "We're your neighbors, deeply rooted in the Austin community and the surrounding areas. Whether you're in the heart of the city or a nearby town like Dripping Springs or Georgetown, we'll treat your trees with the same care and respect we would our own.",
        "When you choose Adam's Apple Tree Service, you're not just hiring a tree service; you're partnering with a team that values your trees as much as you do.",
      ],
    },
    included: {
      image: valueClean,
      headline: "Included With Every Removal",
      items: [
        "On-site arborist assessment",
        "Comprehensive scope of work before we start",
        "Low-impact take-down with rigging where needed",
        "Complete cleanup (limbs, logs, debris)",
        "Haul-off so wood doesn't stay behind",
        "Stump cut low (full grinding available as an add-on)",
        "Final walk-through and sign-off before payment",
      ],
    },
    partnerships: {
      headline: "Trusted Partnerships",
      intro:
        "We're equipped to handle most tree care needs in-house. For specialized situations, we partner with trusted local experts so you always get the right tool for the job — with no hidden costs or markups.",
      partners: [
        {
          title: "Certified Arborist Consultations",
          body: "We've cultivated relationships with ISA-Certified Consulting Arborists ready to provide high-quality assessments and consultations. This is a great resource when you want an unbiased professional opinion that isn't predicated on the potential for tree work.",
        },
        {
          title: "Austin Stump Buster — Stump Grinding",
          body: "We partner with Eric Olsen of Austin Stump Buster for top-quality stump grinding. There are never hidden costs or markups: what Austin Stump Buster charges us is what you pay.",
          contact: {
            phone: "512-202-5638",
            email: "atxstumpbuster@gmail.com",
            website: "https://www.austinstumpbuster.com",
          },
        },
      ],
      disclaimer:
        "Although we are proud to work with our partners, please understand we do not represent or speak on behalf of these companies.",
    },
    blogCallout: {
      headline: "Have More Questions?",
      paragraphs: [
        "With over 15 years of hands-on experience caring for Austin's trees, we've developed a deep understanding of the unique challenges and joys our local trees bring. From towering live oaks to vibrant crepe myrtles, each species plays an important role in making Austin the place we love.",
        "Whether you're a seasoned homeowner or a new tree enthusiast, our blog has something for you — in-depth guides to the services we provide, expert answers to tricky tree-health questions specific to our Central Texas climate, and the fascinating ways trees improve our neighborhoods.",
      ],
      ctaLabel: "Read the Blog",
      ctaHref: "/blog",
    },
    faqs: [
      {
        q: "Should I remove a tree or just trim it?",
        a: "Our Certified Arborists can discuss all options with you about whether a tree can be safely pruned or if removal is a prudent choice. Contact us for more details.",
      },
      {
        q: "How much does removing a tree cost?",
        a: "The cost of Adam's Apple Tree Service's tree services depends on various factors such as the type of service, the size of the tree, and the location. Please contact us for a free estimate or try our Tree Removal Guesstimator above.",
      },
      {
        q: "Do I need to remove the stump?",
        a: "Stump removal is usually a separate line item on most tree removals since it requires specialized equipment. Removing a stump should be completed if you plan to replant another tree or shrub in the area, wish to add sod or mulch, or just want to improve the aesthetics of the yard. Our Certified Arborists will be glad to discuss options with you.",
      },
      {
        q: "Do I need a permit to remove a tree in Austin?",
        a: "In many cases, yes. The City of Austin requires permits for protected trees (generally 19\" diameter and up, with stricter rules for heritage species like live oak and pecan over 24\"). We'll tell you if a permit is required and can help with the application.",
      },
    ],
    related: allRelated.filter((r) => r.slug !== "tree-removal").slice(0, 4),
  },

  "tree-pruning-trimming": {
    slug: "tree-pruning-trimming",
    title: "Tree Pruning & Trimming",
    heroEyebrow: "Austin Tree Services",
    heroHeadline: "Tree Pruning & Trimming",
    heroTagline: "Tree pruning done right at an affordable price.",
    heroSubhead:
      "Adam's Apple Tree Service is an expert at pruning all trees and shrubs in our natural landscape. Whether you're concerned about clearances and large deadwood and want a budget-friendly solution, or you want to focus on the long-term benefits of the tree, we can offer detailed structural pruning to fit your goals.",
    heroImage: imgPruning,
    heroImages: [imgPruning, heroArborist, imgLegacy],
    offerings: [
      {
        title: "Deadwood Pruning",
        image: imgPruning,
        body: "Most trees develop dead wood every few years. Our team is experienced in removing large deadwood to reduce the risk of falling branches — all the way down to the small twigs that improve the overall aesthetics of the tree.",
      },
      {
        title: "Ball Moss & Mistletoe Removal",
        image: imgLegacy,
        body: "Adam's Apple Tree Service will remove any unsightly ball moss or mistletoe from your trees, helping your canopy look clean and stay healthy for the long haul.",
      },
      {
        title: "Structural Pruning",
        image: heroArborist,
        body: "Pruning living branches to encourage strong form can dramatically increase the lifespan of your trees by reducing or fully removing dysfunctional branches before they become a long-term problem.",
      },
    ],
    whyChoose: {
      headline: "How is Adam's Apple Different From Other Tree Services?",
      paragraphs: [
        "When it comes to the trees that grace your Austin property, you need more than just a chainsaw and a ladder. You need a team that understands the unique challenges and beauty of Central Texas trees, from majestic live oaks to delicate crepe myrtles. That's where Adam's Apple Tree Service comes in.",
        "Unlike other companies, we're not just about getting the job done quickly. We're expert climbers with a passion for trees and a commitment to your property's safety and aesthetics. We approach each project with a meticulous eye, utilizing our extensive knowledge of tree biology and growth patterns to provide tailored care that goes beyond the basics.",
        "We understand that your trees are an investment in your property's value and beauty, and we take that responsibility seriously. We provide a comprehensive scope of work before we start — a detailed plan that outlines every step from initial assessment to final cleanup, complete with images so you know exactly what to expect.",
        "When you choose Adam's Apple Tree Service, you're not just hiring a tree service; you're partnering with a team that values your trees as much as you do.",
      ],
    },
    included: {
      image: valueClean,
      headline: "Included With Every Pruning Job",
      items: [
        "On-site arborist assessment & pruning plan",
        "ANSI A300 pruning standards followed",
        "Targeted deadwood and hazard limb removal",
        "Clearances over roofs, driveways, and walkways",
        "Complete cleanup of limbs and debris",
        "Haul-off so nothing stays behind",
        "Final walk-through and sign-off before payment",
      ],
    },
    partnerships: {
      headline: "Trusted Partnerships",
      intro:
        "We handle most pruning needs in-house. For specialized situations, we partner with trusted local experts so you always get the right tool for the job — with no hidden costs or markups.",
      partners: [
        {
          title: "Certified Arborist Consultations",
          body: "We've cultivated relationships with ISA-Certified Consulting Arborists ready to provide high-quality assessments and consultations. A great resource when you want an unbiased professional opinion that isn't predicated on the potential for tree work.",
        },
        {
          title: "Austin Stump Buster — Stump Grinding",
          body: "We partner with Eric Olsen of Austin Stump Buster for top-quality stump grinding. There are never hidden costs or markups: what Austin Stump Buster charges us is what you pay.",
          contact: {
            phone: "512-202-5638",
            email: "atxstumpbuster@gmail.com",
            website: "https://www.austinstumpbuster.com",
          },
        },
      ],
      disclaimer:
        "Although we are proud to work with our partners, please understand we do not represent or speak on behalf of these companies.",
    },
    blogCallout: {
      headline: "Have More Questions?",
      paragraphs: [
        "With over 15 years of hands-on experience caring for Austin's trees, we've built a deep understanding of the unique challenges and joys our local trees bring. Our blog is where we share that knowledge with you — including in-depth guides, expert answers to tricky tree-health questions, and the fascinating ways trees improve our neighborhoods.",
      ],
      ctaLabel: "Read the Blog",
      ctaHref: "/blog",
    },
    faqs: [
      {
        q: "How often should I trim my trees?",
        a: "Most mature trees benefit from a structural or maintenance prune every 3–5 years, while young trees benefit from lighter shaping every 1–2 years. We can recommend a cycle based on species, age, and condition during your free on-site visit.",
      },
      {
        q: "Does trimming my tree keep it healthier?",
        a: "Yes — when done properly. Removing dead, diseased, or crossing branches reduces decay pathways, improves airflow, and lets the tree put energy into stronger structure. Over-pruning or 'topping' does the opposite, which is why we follow ANSI A300 standards.",
      },
      {
        q: "When is the best time to trim my trees?",
        a: "For most Central Texas species, late winter (dormant season) is ideal. For oaks specifically, we strictly avoid the high-risk oak wilt window (Feb 1 – June 30) unless it's an emergency, in which case wounds are sealed immediately.",
      },
      {
        q: "Can tree bark grow back?",
        a: "Bark itself does not regrow once removed, but trees can slowly close over wounds with new callus tissue from the edges. Proper pruning cuts that protect the branch collar give the tree the best chance to seal the wound naturally.",
      },
    ],
    related: allRelated.filter((r) => r.slug !== "tree-pruning-trimming").slice(0, 4),
  },

  "tree-planting": {
    slug: "tree-planting",
    title: "Tree Planting",
    heroEyebrow: "Austin Tree Services",
    heroHeadline: "Tree Planting",
    heroTagline: "Bringing new life to your home.",
    heroSubhead:
      "Improve the aesthetic and bring shade to your yard with a new tree selected, installed, and maintained by Adam's Apple Tree Service. We help you choose the right species for the right spot — and back it up with the care plan it needs to thrive.",
    heroImage: imgPlanting,
    heroImages: [imgPlanting, imgLegacy, heroArborist],
    offerings: [
      {
        title: "Tree Planting",
        image: imgPlanting,
        body: "We help you select, deliver, and install a new tree in your yard. We can include maintenance plans to ensure proper watering, root-ball development, and early mitigation of stress-causing diseases. We recommend planting up to 45-gallon trees so they overcome transplant shock sooner — bigger isn't always better when it comes to long-term health.",
      },
      {
        title: "Legacy Tree Planting",
        image: imgLegacy,
        body: "A program we offer existing clients at no cost to celebrate life's many events. We deliver and install a 5-gallon native Texas tree on your property to mark a birth, an anniversary, a memorial, or any moment worth rooting in the ground.",
        cta: { label: "Learn About the Legacy Program", href: "/services/legacy-tree-program" },
      },
    ],
    whyChoose: {
      headline: "How is Adam's Apple Different From Other Tree Services?",
      paragraphs: [
        "When it comes to the trees that grace your Austin property, you need more than just a chainsaw and a ladder. You need a team that understands the unique challenges and beauty of Central Texas trees, from majestic live oaks to delicate crepe myrtles. That's where Adam's Apple Tree Service comes in.",
        "Unlike other companies, we're not just about getting the job done quickly. We're expert climbers with a passion for trees and a commitment to your property's safety and aesthetics. We approach each project with a meticulous eye, utilizing our extensive knowledge of tree biology and growth patterns to provide tailored care that goes beyond the basics.",
        "We understand that your trees are an investment in your property's value and beauty, and we take that responsibility seriously. We provide a comprehensive scope of work before we start — a detailed plan that outlines every step from initial assessment to final cleanup, so there are no surprises along the way.",
        "We're your neighbors, deeply rooted in the Austin community and the surrounding areas. When you choose Adam's Apple Tree Service, you're partnering with a team that values your trees as much as you do.",
      ],
    },
    included: {
      image: valueClean,
      headline: "Included With Every Planting",
      items: [
        "Site assessment and species recommendation",
        "Sourcing and delivery of healthy nursery stock",
        "Proper hole prep, planting depth, and back-fill",
        "Root-ball orientation set for long-term structure",
        "Mulch ring installed at the right depth",
        "Initial watering and a written care guide",
        "Optional ongoing maintenance plan",
      ],
    },
    partnerships: {
      headline: "Trusted Partnerships",
      intro:
        "We handle most planting and follow-up care in-house. For specialized situations, we partner with trusted local experts so you always get the right resource for the job — with no hidden costs or markups.",
      partners: [
        {
          title: "Certified Arborist Consultations",
          body: "We've cultivated relationships with ISA-Certified Consulting Arborists ready to provide high-quality assessments and consultations — a great resource when you want an unbiased professional opinion.",
        },
        {
          title: "Austin Stump Buster — Stump Grinding",
          body: "If your new tree is going where an old stump still lives, we partner with Eric Olsen of Austin Stump Buster for top-quality stump grinding. There are never hidden costs or markups: what Austin Stump Buster charges us is what you pay.",
          contact: {
            phone: "512-202-5638",
            email: "atxstumpbuster@gmail.com",
            website: "https://www.austinstumpbuster.com",
          },
        },
      ],
      disclaimer:
        "Although we are proud to work with our partners, please understand we do not represent or speak on behalf of these companies.",
    },
    faqs: [
      {
        q: "What factors should I consider before planting a tree?",
        a: "Mature size, sun exposure, soil drainage, distance from foundations and utility lines, and what role you want the tree to play (shade, screening, ornamental). We'll walk through all of these with you on the free on-site visit.",
      },
      {
        q: "What kind of trees or shrubs do you plant?",
        a: "We focus on native and well-adapted Central Texas species — Live Oak, Cedar Elm, Texas Mountain Laurel, Pecan, Monterrey Oak, Crepe Myrtle, and others. Native species establish faster and need less long-term maintenance.",
      },
      {
        q: "How much do I need to water a newly planted tree?",
        a: "For the first year, plan on a slow deep soak 2–3 times per week (more in summer heat). We'll send you home with a written watering guide tailored to species, container size, and the time of year you plant.",
      },
    ],
    related: allRelated.filter((r) => r.slug !== "tree-planting").slice(0, 4),
  },

  "soil-amendments": {
    slug: "soil-amendments",
    title: "Soil Amendments & Care",
    heroEyebrow: "Austin Tree Services",
    heroHeadline: "Soil Amendments & Care",
    heroTagline: "Revitalizing soil with nutrients and proper watering.",
    heroSubhead:
      "Our obsession with improving soil quality is a great way to extend the life of your favorite trees. By focusing on soil texture and structure, we help increase microbial biodiversity, reduce compaction, and absorb more water for longer periods. You'll often hear us talk about \"recreating a forest\" when we discuss soils.",
    heroImage: imgSoil,
    heroImages: [imgSoil, imgPlanting, heroArborist],
    offerings: [
      {
        title: "Mulch & Compost",
        image: imgSoil,
        body: "Adding organic material to your soil is essential to ensure nutrients are reintroduced and readily available for your trees. These materials minimize compaction and create larger pores for water penetration and retention.",
      },
      {
        title: "Liquid Soil Amendments",
        image: imgPlanting,
        body: "Liquid soil amendments are a great addition for areas that cannot be mulched or need quicker activity than compost can provide. Usually recommended for xeriscaped areas or trees competing with grass and small shrubs in the same space.",
      },
      {
        title: "Air Spade / Root Collar Excavation",
        image: heroArborist,
        body: "In extreme situations, we may recommend the use of an AirSpade to decompact the soil, introduce more organic matter, and remove excess material from the base of the tree where it's smothering the root flare.",
      },
    ],
    whyChoose: {
      headline: "How is Adam's Apple Different From Other Tree Services?",
      paragraphs: [
        "When it comes to the trees that grace your Austin property, you need more than just a chainsaw and a ladder. You need a team that understands the unique challenges and beauty of Central Texas trees, from majestic live oaks to delicate crepe myrtles. That's where Adam's Apple Tree Service comes in.",
        "Most tree-care companies focus only on what's above the ground. We focus on what's below it too — because healthy soil is what gives a tree the resilience to survive Texas heat, drought, and disease pressure. We approach each soil project with the same meticulous eye we bring to our climbing work.",
        "We understand that your trees are an investment in your property's value and beauty, and we take that responsibility seriously. We provide a comprehensive scope of work before we start — a detailed plan that outlines every step, with images so you know exactly what to expect.",
        "When you choose Adam's Apple Tree Service, you're partnering with a team that values your trees as much as you do.",
      ],
    },
    included: {
      image: valueClean,
      headline: "Included With Every Soil Visit",
      items: [
        "On-site soil and root-flare assessment",
        "Recommendations matched to your species and site",
        "Proper mulch depth (never volcano mulched)",
        "Targeted compost or liquid amendment application",
        "Clean, contained work area",
        "Written care plan and follow-up watering guidance",
      ],
    },
    partnerships: {
      headline: "Trusted Partnerships",
      intro:
        "We handle most soil care in-house. For specialized situations, we partner with trusted local experts so you always get the right resource for the job — with no hidden costs or markups.",
      partners: [
        {
          title: "Certified Arborist Consultations",
          body: "We've cultivated relationships with ISA-Certified Consulting Arborists ready to provide high-quality assessments — a great resource when you want an unbiased opinion on a struggling tree.",
        },
        {
          title: "Austin Stump Buster — Stump Grinding",
          body: "We partner with Eric Olsen of Austin Stump Buster for top-quality stump grinding. There are never hidden costs or markups: what Austin Stump Buster charges us is what you pay.",
          contact: {
            phone: "512-202-5638",
            email: "atxstumpbuster@gmail.com",
            website: "https://www.austinstumpbuster.com",
          },
        },
      ],
      disclaimer:
        "Although we are proud to work with our partners, please understand we do not represent or speak on behalf of these companies.",
    },
    faqs: [
      {
        q: "How often should I be fertilizing my trees?",
        a: "Most established Central Texas trees do not need traditional fertilizer — they need better soil. We typically recommend an annual or biannual compost top-dress rather than synthetic fertilizer, which can do more harm than good if applied incorrectly.",
      },
      {
        q: "How can I tell if my soil is compacted?",
        a: "Common signs include water pooling instead of soaking in, thin or struggling turf under the canopy, exposed roots, and a hard surface that's tough to push a screwdriver into. We can confirm with an on-site assessment.",
      },
      {
        q: "How much mulch or compost do I need to add to my trees?",
        a: "A 2–4 inch layer of mulch out to (or beyond) the drip line is ideal — pulled back several inches from the trunk so the root flare can breathe. We'll calculate the exact volume during your visit.",
      },
      {
        q: "Can you help kill a fungus affecting my tree?",
        a: "Many fungal issues are symptoms of an underlying soil or stress problem. We'll diagnose the root cause and, when treatment is appropriate, can apply or recommend the right product. For complex pathology cases, we'll bring in a Consulting Arborist.",
      },
    ],
    related: allRelated.filter((r) => r.slug !== "soil-amendments").slice(0, 4),
  },

  "emergency": {
    slug: "emergency",
    title: "Emergency Services",
    heroEyebrow: "Austin Tree Services",
    heroHeadline: "Emergency Services",
    heroTagline: "Trees can be unpredictable — we're here to help.",
    heroSubhead:
      "Let our team remove any damaged branches or fallen trees and get your property back to good shape. We respond fast, work safely around your home, and can document everything you need for an insurance claim.",
    heroImage: imgEmergency,
    heroImages: [imgEmergency, heroArborist, imgRemoval],
    offerings: [
      {
        title: "Emergency Tree or Branch Removal",
        image: imgEmergency,
        body: "When a branch or tree falls unexpectedly, give us a call. Our crew will expertly remove the fallen branch or tree to minimize any further damage to your property. We can also assist with damage reports or photos as needed for potential insurance claims.",
        cta: { label: "Call 512-912-8733", href: "tel:5129128733" },
      },
    ],
    whyChoose: {
      headline: "How is Adam's Apple Different From Other Tree Services?",
      paragraphs: [
        "When a storm hits Austin, you don't need just any chainsaw crew — you need a team that knows how to safely take down a compromised tree without making the damage worse. That's where Adam's Apple Tree Service comes in.",
        "Unlike other companies, we're not just about getting the job done quickly. We're expert climbers with a passion for trees and a commitment to your property's safety. Even in emergency situations we approach each project with a meticulous eye, using rigging and controlled lowering wherever it protects what's still standing.",
        "We understand that emergencies are stressful and that insurance claims add another layer of complexity. We document everything — before, during, and after — and provide the photos and written reports you need to make your claim straightforward.",
        "When you choose Adam's Apple Tree Service, you're partnering with neighbors who treat your property the way we'd treat our own.",
      ],
    },
    included: {
      image: valueClean,
      headline: "Included With Every Emergency Call",
      items: [
        "Fast response and safe scene assessment",
        "Controlled removal of fallen or hanging limbs",
        "Protection of structures, fences, and landscaping",
        "Photo documentation for insurance claims",
        "Written damage report on request",
        "Complete cleanup and haul-off",
        "Follow-up plan for any remaining damaged trees",
      ],
    },
    partnerships: {
      headline: "Trusted Partnerships",
      intro:
        "We handle most emergency work in-house. For specialized situations, we partner with trusted local experts — with no hidden costs or markups.",
      partners: [
        {
          title: "Certified Arborist Consultations",
          body: "For complex post-storm situations, we've cultivated relationships with ISA-Certified Consulting Arborists who can provide unbiased professional opinions — useful for major insurance disputes or risk assessments.",
        },
        {
          title: "Austin Stump Buster — Stump Grinding",
          body: "When an emergency removal leaves a stump behind, we partner with Eric Olsen of Austin Stump Buster for top-quality stump grinding. What Austin Stump Buster charges us is what you pay.",
          contact: {
            phone: "512-202-5638",
            email: "atxstumpbuster@gmail.com",
            website: "https://www.austinstumpbuster.com",
          },
        },
      ],
      disclaimer:
        "Although we are proud to work with our partners, please understand we do not represent or speak on behalf of these companies.",
    },
    faqs: [
      {
        q: "How quickly can your crew arrive for emergencies?",
        a: "We prioritize emergency calls and typically respond same-day for active hazards in the Greater Austin area. Call or text 512-912-8733 and we'll let you know our exact ETA.",
      },
      {
        q: "Do you bill my insurance for emergency work?",
        a: "We don't bill insurance directly, but we do provide all the documentation you need — itemized invoices, before/after photos, and written scope-of-work — to make reimbursement straightforward. Most clients are reimbursed without issue.",
      },
      {
        q: "Will emergency work cost more than standard tree work?",
        a: "Emergency work is priced fairly based on the actual difficulty and risk of the job, not because it's after hours. Many emergency jobs end up costing about the same as a planned removal of similar complexity.",
      },
    ],
    related: allRelated.filter((r) => r.slug !== "emergency").slice(0, 4),
  },

  "legacy-tree-program": {
    slug: "legacy-tree-program",
    title: "Legacy Tree Program",
    heroEyebrow: "Austin Tree Services",
    heroHeadline: "Legacy Tree Program",
    heroTagline: "Establishing roots for your memories.",
    heroSubhead:
      "At Adam's Apple Tree Service we spend our days caring for trees — now we want to help you start one. The Legacy Planting Program is a simple, sustainable way to mark life's significant transitions with a native Texas tree planted right in your yard.",
    heroImage: imgLegacy,
    heroImages: [imgLegacy, imgPlanting, heroArborist],
    offerings: [
      {
        title: "How It Works",
        image: imgLegacy,
        body: "We plant a native Texas sapling in your yard to commemorate a special moment — a birth or adoption, a first home, the life of a loved one or pet, an anniversary, a retirement, or any other moment worth rooting in the ground.",
      },
      {
        title: "The Details",
        image: imgPlanting,
        body: "We provide a 1–5 gallon sapling and professional installation. Species options include Live Oak, Cedar Elm, Texas Mountain Laurel, and Pecan. We plant during the recommended season (late fall through early spring) and help select a suitable location based on species and site conditions.",
      },
      {
        title: "After-Care & Pricing",
        image: heroArborist,
        body: "Once the tree is planted we provide a simple guide to ensure a long, healthy life for the tree. Pricing: FREE for current clients, $50 + sales tax for new clients. A commemorative stone or protective materials can be added for an additional fee.",
        cta: { label: "Schedule a Planting", href: "/contact" },
      },
    ],
    whyChoose: {
      headline: "Why Plant a Legacy Tree?",
      paragraphs: [
        "A planted tree is one of the most generous gifts you can give. It outlives the moment it commemorates, returns oxygen and shade to your neighborhood for decades, and gives the next generation of your family a living place to gather.",
        "We use only native Central Texas species because they're built for this climate — they require less water, support more local wildlife, and are far more likely to be standing on the property a hundred years from now than a fashion-of-the-month nursery import.",
        "And because we install it personally, we know it's planted at the right depth, in the right spot, with the right care plan to actually survive its critical first year. That's the difference between a tree you remember and a tree that becomes part of your family's story.",
      ],
    },
    included: {
      image: valueClean,
      headline: "Included With Every Legacy Planting",
      items: [
        "1–5 gallon native Texas sapling",
        "Species consultation (Live Oak, Cedar Elm, Texas Mountain Laurel, Pecan)",
        "Site selection based on sun, soil, and mature size",
        "Professional installation at proper depth",
        "Mulch ring and initial watering",
        "Written after-care guide",
        "Optional commemorative stone (additional fee)",
      ],
    },
    faqs: [
      {
        q: "Who is eligible for a free Legacy Tree?",
        a: "Current Adam's Apple clients receive their Legacy Tree free. New clients can participate for $50 + sales tax. Either way, the planting itself is professionally handled by our team.",
      },
      {
        q: "When can the tree be planted?",
        a: "We plant Legacy Trees during the recommended planting season for Central Texas — late fall through early spring — so the sapling has the best possible chance to establish before summer heat arrives.",
      },
      {
        q: "Can I add a commemorative marker?",
        a: "Yes. A commemorative stone or protective materials (cages, wraps) can be ordered for an additional fee. We'll include it during installation so everything is set up at once.",
      },
    ],
    related: allRelated.filter((r) => r.slug !== "legacy-tree-program").slice(0, 4),
  },
};
