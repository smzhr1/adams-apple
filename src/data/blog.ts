import imgRemoval from "@/assets/service-tree-removal.jpg";
import imgPruning from "@/assets/service-pruning.jpg";
import imgPlanting from "@/assets/service-planting.jpg";
import imgSoil from "@/assets/service-soil.jpg";
import imgEmergency from "@/assets/service-emergency.jpg";
import imgLegacy from "@/assets/service-legacy.jpg";
import imgArborist from "@/assets/hero-arborist.jpg";
import imgWhyChoose from "@/assets/why-choose-us.jpg";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "oak-wilt-prevention-austin",
    title: "Oak Wilt in Austin: How to Spot, Prevent, and Treat It",
    excerpt:
      "Oak wilt is one of the most destructive tree diseases in Central Texas. Learn the warning signs, the safe pruning windows, and what ISA Certified Arborists do to protect your live oaks.",
    category: "Tree Health",
    date: "April 18, 2026",
    readTime: "6 min read",
    image: imgArborist,
    author: "Adam's Apple Crew",
  },
  {
    slug: "when-to-prune-trees-central-texas",
    title: "When to Prune Trees in Central Texas: A Season-by-Season Guide",
    excerpt:
      "Timing matters. Pruning at the wrong time of year can stress your trees or invite disease. Here's our month-by-month guide for Austin homeowners.",
    category: "Pruning",
    date: "April 4, 2026",
    readTime: "5 min read",
    image: imgPruning,
    author: "Adam's Apple Crew",
  },
  {
    slug: "storm-damage-tree-emergency-response",
    title: "After the Storm: What to Do When a Tree Falls on Your Property",
    excerpt:
      "Spring storms in Austin can take down even healthy trees. Here's the safest order of operations — from your first call to insurance documentation to debris removal.",
    category: "Emergency",
    date: "March 22, 2026",
    readTime: "4 min read",
    image: imgEmergency,
    author: "Adam's Apple Crew",
  },
  {
    slug: "best-native-trees-austin-yards",
    title: "5 Best Native Trees to Plant in Austin Yards",
    excerpt:
      "Drought-tolerant, wildlife-friendly, and built for our soil. Our top picks for native trees that will thrive in Central Texas for generations.",
    category: "Planting",
    date: "March 8, 2026",
    readTime: "7 min read",
    image: imgPlanting,
    author: "Adam's Apple Crew",
  },
  {
    slug: "soil-amendments-tree-health",
    title: "Why Soil Amendments Matter More Than You Think",
    excerpt:
      "Healthy trees start underground. We break down soil compaction, root zone treatments, and how the right fertilization extends the life of your mature trees.",
    category: "Tree Health",
    date: "February 25, 2026",
    readTime: "5 min read",
    image: imgSoil,
    author: "Adam's Apple Crew",
  },
  {
    slug: "how-much-does-tree-removal-cost",
    title: "How Much Does Tree Removal Cost in Austin?",
    excerpt:
      "Removal pricing depends on size, species, and access. We walk through real-world examples and explain what drives the price up — or keeps it reasonable.",
    category: "Tree Removal",
    date: "February 11, 2026",
    readTime: "6 min read",
    image: imgRemoval,
    author: "Adam's Apple Crew",
  },
  {
    slug: "legacy-tree-program-explained",
    title: "Plant a Legacy: How Our Native Sapling Program Works",
    excerpt:
      "Mark a milestone, honor a loved one, or simply give back to the canopy. Here's how our Legacy Tree Program is helping Austin neighborhoods stay green.",
    category: "Community",
    date: "January 28, 2026",
    readTime: "4 min read",
    image: imgLegacy,
    author: "Adam's Apple Crew",
  },
  {
    slug: "choosing-arborist-questions-to-ask",
    title: "Choosing an Arborist: 7 Questions to Ask Before You Hire",
    excerpt:
      "Not all tree services are created equal. Use this checklist to vet any company before you let them on your property — including credentials, insurance, and pricing transparency.",
    category: "Tree Care Tips",
    date: "January 14, 2026",
    readTime: "6 min read",
    image: imgWhyChoose,
    author: "Adam's Apple Crew",
  },
];
