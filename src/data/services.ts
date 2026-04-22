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
  heroSubhead: string;
  heroImage: string;
  process: {
    image: string;
    steps: { title: string; body: string }[];
  };
  whyChoose: {
    headline: string;
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
    heroHeadline: "Safe, Clean Tree Removal in Austin",
    heroSubhead:
      "From hazardous limbs to full take-downs, our ISA-certified arborists remove trees safely with full cleanup and haul-off included. No deposit. No surprises. Just honest, expert work.",
    heroImage: heroArborist,
    process: {
      image: whyChoose,
      steps: [
        {
          title: "On-Site Evaluation",
          body: "A certified arborist visits your property to assess the tree's condition, surroundings, and removal requirements. If the tree doesn't have to come down — we'll tell you. If it does, we explain exactly what we will do and how.",
        },
        {
          title: "Safe Removal & Equipment",
          body: "Our crews are trained for complex skill sets — whether the tree is over open land or tightly spaced between buildings. We use rigging, lifts, and ground protection methods as needed to remove trees safely.",
        },
        {
          title: "Haul-Off & Cleanup",
          body: "We remove logs, limbs, and debris and leave your property neat and tidy. The wood is hauled off so it's no longer your problem. The Scout patrols the site to confirm everything is clean before payment is collected.",
        },
      ],
    },
    whyChoose: {
      headline: "Why Customers Choose Adam's Apple for Tree Removal",
      points: [
        {
          title: "Certified Arborist Oversight",
          body: "Two ISA-certified arborists on staff (Neil TX-4612A & Geoff TX-5212A). Every removal is reviewed before a chainsaw starts.",
        },
        {
          title: "We Explain Your Options Clearly",
          body: "We won't recommend removal if a tree can be saved. When removal is the right call, we walk you through it in plain language.",
        },
        {
          title: "24/7 Emergency Tree Removal",
          body: "Storm damage doesn't wait. Our crews respond quickly to fallen or hazardous trees to keep your family and property safe.",
        },
        {
          title: "No Payment Until You Approve",
          body: "You don't pay a dime until the work is complete and you've walked the site with us. That's the way it should be.",
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
        q: "How do I know if my tree needs to be removed?",
        a: "Signs include heavy lean, root damage, large dead sections, or fungal conks at the base. We inspect for free and give you a straight answer — sometimes the right call is to save the tree, not remove it.",
      },
      {
        q: "Do I need a permit to remove a tree in Austin?",
        a: "Austin requires a permit for protected trees (generally 19\" diameter and up, with stricter rules for heritage species like live oak and pecan over 24\"). We'll tell you if a permit is required and can help with the application.",
      },
      {
        q: "Do you remove the stump too?",
        a: "Standard removal cuts the stump as low as possible. Full stump grinding is a separate add-on — we can grind 6–12 inches below grade so the area can be re-sodded or replanted.",
      },
      {
        q: "Is your crew insured?",
        a: "Yes. We carry full general liability and workers' comp. Ask for a certificate of insurance and we'll send it before work begins.",
      },
      {
        q: "How much does tree removal cost?",
        a: "It depends on size, species, location, and access. Most residential removals fall between $500 and $3,500. We provide a firm written quote after the on-site visit — no vague ranges.",
      },
    ],
    related: allRelated.filter((r) => r.slug !== "tree-removal").slice(0, 4),
  },
};
