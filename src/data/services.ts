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
  offerings: { title: string; body: string; image: string }[];
  showGuesstimator?: boolean;
  guesstimatorHeadline?: string;
  guesstimatorSubhead?: string;
  whyChoose: {
    headline: string;
    intro: string;
    points: { title: string; body: string }[];
  };
  included: {
    image: string;
    headline: string;
    items: string[];
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
      "Adam's Apple Tree Service is the best tree removal service in Austin, TX and surrounding communities. We offer a wide range of services to meet your needs. Our team is experienced and professional, and we use the latest equipment to ensure that your job is done safely and efficiently.",
    heroImage: heroArborist,
    offerings: [
      {
        title: "Tree Removal",
        image: imgRemoval,
        body: "We provide a full range of tree removal services for residential and commercial properties. We can remove trees of any size, from small saplings to large mature trees. We also offer stump grinding and debris removal services.",
      },
      {
        title: "Land Clearing",
        image: imgPlanting,
        body: "Adam's Apple Tree Service offers land clearing services for residential and commercial properties. We can clear lots of any size, from small backyards to large commercial sites. We also offer brush removal and debris hauling services.",
      },
      {
        title: "Stump Grinding & Stump Removal",
        image: imgSoil,
        body: "Stumps are an eyesore and can be a tripping hazard. We offer stump grinding and stump removal services to get rid of those unsightly stumps for good. Our stump grinders can handle stumps of any size, and we can grind them down below ground level so they're virtually invisible. If you'd rather have your stump removed completely, we can do that too — leaving your yard looking clean and ready for whatever's next.",
      },
    ],
    showGuesstimator: true,
    guesstimatorHeadline: "Tree Removal Guesstimator",
    guesstimatorSubhead:
      "Curious what your removal might cost? Move the sliders for a ballpark range in seconds — then book a free on-site visit for an exact written quote.",
    whyChoose: {
      headline: "How is Adam's Apple Different From Other Tree Services?",
      intro:
        "At Adam's Apple, we take pride in providing top-notch tree care services to our customers. We are committed to using the highest quality materials and equipment to ensure that your trees receive the best possible care.",
      points: [
        {
          title: "Certified Arborists On Every Job",
          body: "Our team of certified arborists has years of experience in the industry. They are knowledgeable about the latest tree care techniques and are dedicated to providing exceptional customer service.",
        },
        {
          title: "Tailored to Your Tree",
          body: "We understand that every tree is unique, and we tailor our services to meet the specific needs of each tree. We assess the condition of your tree and develop a customized care plan that will help it thrive.",
        },
        {
          title: "Latest Equipment, Safer Work",
          body: "We use the latest equipment to ensure your job is done safely and efficiently — from rigging gear for tight spaces to powerful stump grinders that leave your yard clean.",
        },
        {
          title: "Satisfaction Guaranteed",
          body: "We are committed to your satisfaction and will go above and beyond to ensure that you are happy with our work. You don't pay until the job is done and you've signed off.",
        },
      ],
    },
    included: {
      image: valueClean,
      headline: "Included With Every Removal",
      items: [
        "On-site arborist assessment",
        "Low-impact take-down process",
        "Rope rigging for tight spaces or large trees",
        "Complete cleanup (limbs, logs, debris)",
        "Haul-off so wood doesn't stay behind",
        "Stump cut low (full grinding available as an add-on)",
        "Final walk-through and sign-off",
      ],
    },
    faqs: [
      {
        q: "How much does tree removal cost?",
        a: "The cost of tree removal depends on several factors, including the size of the tree, its location, and the complexity of the job. We offer free estimates, so please contact us for a quote — or try our Tree Removal Guesstimator above for a quick ballpark.",
      },
      {
        q: "Do I need a permit to remove a tree?",
        a: "In most cases, yes. The City of Austin requires permits for protected trees (generally 19\" diameter and up, with stricter rules for heritage species like live oak and pecan over 24\"). Contact your local municipality, or let us know — we'll tell you if a permit is required and can help with the application.",
      },
      {
        q: "What happens to the wood after the tree is removed?",
        a: "We can haul away the wood for you, or we can leave it for you to use as firewood — your choice. Either way, your property is left clean.",
      },
      {
        q: "Do you remove the stump too?",
        a: "Standard removal cuts the stump as low as possible. Full stump grinding is a separate add-on — we can grind 6–12 inches below grade so the area can be re-sodded or replanted.",
      },
      {
        q: "Is your crew licensed and insured?",
        a: "Yes. We carry full general liability and workers' comp. Ask for a certificate of insurance and we'll send it before work begins.",
      },
    ],
    related: allRelated.filter((r) => r.slug !== "tree-removal").slice(0, 4),
  },
};
