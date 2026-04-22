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
};
