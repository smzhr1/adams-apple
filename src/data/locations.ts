import { TreePine, Scissors, AlertTriangle, Trees, Sprout, FileText, type LucideIcon } from "lucide-react";

export type LocationService = {
  title: string;
  body: string;
  icon: LucideIcon;
  href?: string;
};

export type LocationNeighborhood = {
  name: string;
  description: string;
};

export type LocationFaq = { q: string; a: string };

export type LocationContent = {
  slug: string;
  name: string;
  state: string;
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  geoRegion?: string;
  heroHeadline: string;
  heroSubhead: string;
  servicesHeadline: string;
  services: LocationService[];
  whyHeadline: string;
  whyPoints: { title: string; body: string }[];
  localInfoHeadline: string;
  localInfoParagraphs: string[];
  neighborhoodsHeadline: string;
  neighborhoodsIntro: string;
  neighborhoods: LocationNeighborhood[];
  neighborhoodsFooter: string;
  faqsHeadline: string;
  faqs: LocationFaq[];
  ctaHeadline: string;
};

export const locations: Record<string, LocationContent> = {
  "round-rock": {
    slug: "round-rock",
    name: "Round Rock",
    state: "TX",
    metaTitle: "Tree Service Round Rock, TX | Trimming, Removal & Emergency Care | Adam's Apple",
    metaDescription:
      "Local tree service in Round Rock, TX. Tree removal, trimming, stump grinding, emergency service and oak wilt treatment. Free estimates. Call 512-912-8733.",
    heroEyebrow: "Round Rock, TX Tree Service",
    heroHeadline: "Tree Service in Round Rock, TX | Removal, Trimming and Emergency Care Since 2008",
    heroSubhead:
      "ISA certified arborists serving Round Rock and Williamson County since 2008. Tree removal, trimming, emergency response, stump grinding and oak wilt treatment with flat-rate pricing and free on-site estimates.",
    servicesHeadline: "Tree Services We Provide in Round Rock, TX",
    services: [
      {
        title: "Tree Removal Round Rock, TX",
        body: "Round Rock's older established neighborhoods have large live oaks and pecans that have been growing for 30 or more years. Big trees near fences, driveways, and structures require careful rigging and sectional removal. We assess access and overhead obstructions before quoting any job.",
        icon: TreePine,
        href: "/services/tree-removal",
      },
      {
        title: "Tree Trimming and Pruning Round Rock, TX",
        body: "The live oaks, cedar elms, and pecans in Round Rock neighborhoods like Forest Creek and Downtown Round Rock need structural pruning as they mature. Dead wood accumulation and crossing branches become a liability issue after major storm seasons. We work to the ANSI A300 standard on every job.",
        icon: Scissors,
        href: "/services/tree-pruning-trimming",
      },
      {
        title: "Emergency Tree Service Round Rock, TX",
        body: "Round Rock sits in a storm corridor that sees regular high wind and hail events. When a tree comes down on a structure or blocks access, call 512-912-8733. We cover all Round Rock neighborhoods for same-day emergency response.",
        icon: AlertTriangle,
        href: "/services/emergency",
      },
      {
        title: "Stump Grinding Round Rock, TX",
        body: "Stumps from Round Rock's clay and limestone mixed soils can be stubborn to grind depending on root spread and soil depth. We bring equipment sized to the job and clear the site completely so you can sod, replant, or build over the area.",
        icon: Trees,
      },
      {
        title: "Oak Wilt Treatment Round Rock, TX",
        body: "The live oaks in Teravista, Forest Creek, and the Brushy Creek corridor are connected through root systems that let oak wilt spread from one tree to multiple neighbors within a single growing season. Early treatment with propiconazole injections stops the spread before it jumps property lines.",
        icon: Sprout,
      },
      {
        title: "Arborist Reports and Professional Services",
        body: "Round Rock homeowners dealing with insurance claims after storm damage, disputes with neighbors over shared trees, or questions about city protected species need a written arborist report. We prepare documentation that meets the requirements of insurance adjusters and city building departments.",
        icon: FileText,
      },
    ],
    whyHeadline: "Why Round Rock Homeowners Choose Adam's Apple Tree Service",
    whyPoints: [
      {
        title: "Free 30-Min Site Visit",
        body: "Every Round Rock estimate includes a free on-site assessment. We walk the property with you, evaluate your trees, and align on scope before a single branch comes down. No guessing, no vague phone quotes.",
      },
      {
        title: "No Deposit Required",
        body: "We start when you are ready and you pay when the job is done to your satisfaction. Zero upfront commitment on any Round Rock tree service job, large or small.",
      },
      {
        title: "Transparent Flat-Rate Quotes",
        body: "Round Rock homeowners get a written quote with photos before any work begins. The price we give is the price you pay. No add-ons, no surprises when the crew shows up.",
      },
    ],
    localInfoHeadline: "Tree Care in Round Rock, TX — What Local Homeowners Should Know",
    localInfoParagraphs: [
      "Round Rock sits at the edge of the Blackland Prairie and the Edwards Plateau, which means your yard can have two entirely different soil types depending on which side of Brushy Creek you are on. Properties near Forest Creek and Teravista tend to have heavier clay soils that hold moisture and stress tree root systems differently than the rockier limestone-based soils closer to Old Settlers Park and the northwest neighborhoods near I-35. Understanding which soil type your trees are rooted in changes how we approach fertilization, drainage, and long-term tree health planning.",
      "The dominant tree species in Round Rock are live oaks, cedar elms, and pecans — all of which are tough but have specific care windows. Live oaks are the biggest concern: the oak wilt pruning ban runs from February 1 through June 30 each year, and Round Rock sees active beetle pressure during that window. Any pruning cuts left unsealed during that period can become an infection point that spreads through connected root systems to neighboring trees. We seal every cut as a standard practice regardless of season.",
      "Round Rock also has a significant number of mature trees in established neighborhoods — University Boulevard corridor, Brushy Creek, the older subdivisions near Downtown Round Rock — that are entering a maintenance phase where storm damage, deadwood accumulation, and structural issues become more frequent. If your property has trees that predate the 2000s, a professional assessment is worth doing before the next major storm season.",
    ],
    neighborhoodsHeadline: "Round Rock Neighborhoods We Serve",
    neighborhoodsIntro:
      "Adam's Apple Tree Service works throughout Round Rock and surrounding Williamson County. Our South Austin base means we run regular crew routes north along I-35 and service Round Rock neighborhoods on a consistent schedule.",
    neighborhoods: [
      {
        name: "Forest Creek",
        description:
          "Established master-planned community with dense live oak canopies and Brushy Creek frontage properties requiring regular pruning and root zone management.",
      },
      {
        name: "Teravista",
        description:
          "Large mixed-development community with newer plantings and maturing tree populations entering their first major maintenance cycle.",
      },
      {
        name: "Brushy Creek",
        description:
          "Creek corridor properties with diverse native species including cedar elms, pecans, and Texas ash. Flood zone considerations affect removal permits in some areas.",
      },
      {
        name: "University Boulevard corridor",
        description:
          "High-traffic commercial and residential mix with mature street trees and overhang clearance needs.",
      },
      {
        name: "Downtown Round Rock",
        description:
          "Historic core with older specimen trees, some protected under city ordinance. Heritage designation research recommended before removal.",
      },
      {
        name: "Stone Canyon",
        description:
          "North Round Rock suburb with newer subdivisions and growing canopy.",
      },
      {
        name: "Avery Ranch",
        description:
          "Northwest border community with a mix of Round Rock and Austin addresses. We serve both sides.",
      },
      {
        name: "Old Settlers Park area",
        description:
          "One of Round Rock's most recognizable landmarks surrounded by mature native tree stands. Nearby residential properties benefit from regular assessments.",
      },
    ],
    neighborhoodsFooter:
      "We also serve Hutto, Pflugerville, Cedar Park, and Georgetown. Not sure if we reach your street? Call or text 512-912-8733.",
    faqsHeadline: "Frequently Asked Questions — Round Rock Tree Service",
    faqs: [
      {
        q: "How much does tree removal cost in Round Rock, TX?",
        a: "Tree removal in Round Rock typically ranges from $300 to $2,500 depending on tree size, species, location on the property, and whether stump grinding is included. Live oaks and large pecans run on the higher end due to size and root complexity. Call 512-912-8733 or use our Tree Removal Guesstimator for a free instant range before scheduling your on-site estimate.",
      },
      {
        q: "Does Round Rock require a permit to remove a tree?",
        a: "The City of Round Rock has tree preservation standards that apply to protected species and trees above certain size thresholds, particularly on commercial and newly developed properties. Residential removal rules are generally less restrictive than Austin's Heritage Tree ordinance but vary by property and HOA. We research the specific requirements for your address before any work begins.",
      },
      {
        q: "When is the safe window to trim oak trees in Round Rock, TX?",
        a: "July through January is the recommended pruning window for live oaks in Round Rock. Avoid pruning from February 1 through June 30 when the nitidulid beetles that spread oak wilt are most active in Central Texas. Emergency storm damage is the exception, but any fresh cut during that window should be sealed with wound sealant immediately.",
      },
      {
        q: "How fast can you respond to a tree emergency in Round Rock?",
        a: "For storm damage, fallen trees, and hazardous limb situations in Round Rock, we aim for same-day response. Call 512-912-8733 directly for the fastest dispatch. We serve all Round Rock neighborhoods and can assist with insurance documentation if needed.",
      },
    ],
    ctaHeadline: "Get a Free Estimate in Round Rock, TX",
  },
};
