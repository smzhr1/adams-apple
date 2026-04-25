import { TreePine, Scissors, AlertTriangle, Trees, Sprout, FileText, type LucideIcon } from "lucide-react";
import imgRemoval from "@/assets/service-tree-removal.jpg";
import imgPruning from "@/assets/service-pruning.jpg";
import imgEmergency from "@/assets/service-emergency.jpg";
import imgSoil from "@/assets/service-soil.jpg";
import imgPlanting from "@/assets/service-planting.jpg";
import imgLegacy from "@/assets/service-legacy.jpg";

export type LocationService = {
  title: string;
  body: string;
  icon: LucideIcon;
  image: string;
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
        image: imgRemoval,
        href: "/services/tree-removal",
      },
      {
        title: "Tree Trimming and Pruning Round Rock, TX",
        body: "The live oaks, cedar elms, and pecans in Round Rock neighborhoods like Forest Creek and Downtown Round Rock need structural pruning as they mature. Dead wood accumulation and crossing branches become a liability issue after major storm seasons. We work to the ANSI A300 standard on every job.",
        icon: Scissors,
        image: imgPruning,
        href: "/services/tree-pruning-trimming",
      },
      {
        title: "Emergency Tree Service Round Rock, TX",
        body: "Round Rock sits in a storm corridor that sees regular high wind and hail events. When a tree comes down on a structure or blocks access, call 512-912-8733. We cover all Round Rock neighborhoods for same-day emergency response.",
        icon: AlertTriangle,
        image: imgEmergency,
        href: "/services/emergency",
      },
      {
        title: "Stump Grinding Round Rock, TX",
        body: "Stumps from Round Rock's clay and limestone mixed soils can be stubborn to grind depending on root spread and soil depth. We bring equipment sized to the job and clear the site completely so you can sod, replant, or build over the area.",
        icon: Trees,
        image: imgSoil,
      },
      {
        title: "Oak Wilt Treatment Round Rock, TX",
        body: "The live oaks in Teravista, Forest Creek, and the Brushy Creek corridor are connected through root systems that let oak wilt spread from one tree to multiple neighbors within a single growing season. Early treatment with propiconazole injections stops the spread before it jumps property lines.",
        icon: Sprout,
        image: imgPlanting,
      },
      {
        title: "Arborist Reports and Professional Services",
        body: "Round Rock homeowners dealing with insurance claims after storm damage, disputes with neighbors over shared trees, or questions about city protected species need a written arborist report. We prepare documentation that meets the requirements of insurance adjusters and city building departments.",
        icon: FileText,
        image: imgLegacy,
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
  "cedar-park": {
    slug: "cedar-park",
    name: "Cedar Park",
    state: "TX",
    metaTitle: "Tree Service Cedar Park, TX | Trimming, Removal and Oak Wilt Care | Adam's Apple",
    metaDescription:
      "Local tree service in Cedar Park, TX. Tree removal, trimming, stump grinding, emergency service and oak wilt treatment. Free estimates. Call 512-912-8733.",
    heroEyebrow: "Cedar Park, TX Tree Service",
    heroHeadline: "Tree Service Cedar Park, TX: Removal, Trimming and Emergency Care for Central Texas Trees",
    heroSubhead:
      "ISA certified arborists serving Cedar Park and Williamson County. Tree removal, trimming, emergency response, stump grinding and oak wilt treatment with flat-rate pricing and free on-site estimates.",
    servicesHeadline: "Tree Services We Provide in Cedar Park, TX",
    services: [
      {
        title: "Tree Removal Cedar Park, TX",
        body: "Many Cedar Park neighborhoods along the 183A corridor have older live oaks growing close to newer construction, utility lines, and hardscape. Removal near these obstructions requires planning and proper rigging. We review the site before quoting and price the actual job in front of you.",
        icon: TreePine,
        image: imgRemoval,
        href: "/services/tree-removal",
      },
      {
        title: "Tree Trimming and Pruning Cedar Park, TX",
        body: "Cedar Park's clay soils create conditions where live oaks and cedar elms grow fast in wet years and stress during dry ones. Structural pruning that reduces weight on major limbs before storm season is one of the most cost-effective things you can do for a large mature tree in this area.",
        icon: Scissors,
        image: imgPruning,
        href: "/services/tree-pruning-trimming",
      },
      {
        title: "Emergency Tree Service Cedar Park, TX",
        body: "Cedar Park sees significant ice storm and high wind activity during winter fronts. When a tree comes down on a structure or blocks your driveway, call 512-912-8733. We respond same-day across Cedar Park and surrounding Williamson County.",
        icon: AlertTriangle,
        image: imgEmergency,
        href: "/services/emergency",
      },
      {
        title: "Stump Grinding Cedar Park, TX",
        body: "Cedar Park's clay-heavy soils mean root systems spread wide and stay near the surface. We grind the root crown and major lateral roots so the stump does not resprout and the area is ready for whatever you are planning next.",
        icon: Trees,
        image: imgSoil,
      },
      {
        title: "Oak Wilt Treatment Cedar Park, TX",
        body: "Cedar Park sits in an active oak wilt zone with live oak populations in neighborhoods like Buttercup Creek that have been in the ground long enough to form extensive root connections with neighboring trees. Catching the disease early with propiconazole injections is the only option that works.",
        icon: Sprout,
        image: imgPlanting,
      },
      {
        title: "Arborist Reports and Professional Services",
        body: "Cedar Park's tree mitigation ordinance applies to development activity near protected trees. If you are planning construction, driveway expansion, or site work near large oaks or elms on your property, a pre-work arborist assessment can prevent fines and required replacement planting after the fact.",
        icon: FileText,
        image: imgLegacy,
      },
    ],
    whyHeadline: "Why Cedar Park Homeowners Choose Adam's Apple Tree Service",
    whyPoints: [
      {
        title: "Free 30-Min Site Visit",
        body: "Every Cedar Park estimate includes a free on-site assessment. We walk the property with you, look at every tree in question, and give you a written scope before any work is scheduled. No phone guesses, no surprise charges on job day.",
      },
      {
        title: "No Deposit Required",
        body: "We start when you are ready and you pay when the job is done and you are satisfied. Zero upfront commitment on any Cedar Park tree service job.",
      },
      {
        title: "Transparent Flat-Rate Quotes",
        body: "Cedar Park homeowners get a written quote with photos before we start. The number we give you is the number you pay. No add-ons at the end of the job.",
      },
    ],
    localInfoHeadline: "Tree Care in Cedar Park, TX — What Homeowners Should Know",
    localInfoParagraphs: [
      "Cedar Park's expansion over the past 15 years has put pressure on the mature tree canopy that predates the development. Many neighborhoods along the 183A corridor and near the Lakeline area have older live oaks and cedar elms growing close to newer construction, utility lines, and expanded impervious cover. Root compaction from nearby concrete and asphalt changes how these trees take up water and nutrients, and it shows up as thinning canopies and early deadwood accumulation before the tree is structurally compromised.",
      "Cedar Park's soil is predominantly clay-based with limestone outcroppings in the western sections near the Brushy Creek Regional Trail. Clay soils hold water longer than sandy soils, which creates drainage stress for trees that do not tolerate wet feet. Live oaks in these areas are particularly susceptible to Hypoxylon canker when stressed by waterlogging after heavy rain cycles. This is a separate issue from oak wilt but often gets misdiagnosed. If your live oak is showing patchy bark discoloration or a gray crust forming on the trunk, contact us before assuming it is oak wilt.",
      "The City of Cedar Park has a tree mitigation ordinance that applies to development and significant land disturbance. If you are planning any construction, driveway expansion, or site work near protected trees on your property, a pre-work arborist assessment can save you from fines and required mitigation planting after the fact. We provide those assessments as part of our professional services.",
    ],
    neighborhoodsHeadline: "Cedar Park Neighborhoods We Serve",
    neighborhoodsIntro:
      "Adam's Apple Tree Service covers Cedar Park and surrounding Williamson County. Our crews run consistent routes through Cedar Park on a regular schedule out of our South Austin base.",
    neighborhoods: [
      { name: "Buttercup Creek", description: "One of Cedar Park's oldest neighborhoods with mature live oak and cedar elm canopies. Trees in this area are large and require experienced crews for safe removal and structural pruning." },
      { name: "Walsh Ranch", description: "Newer master-planned community with younger tree populations entering their first significant maintenance cycle." },
      { name: "Brushy Creek Regional Trail corridor", description: "Properties backing up to the trail have native tree stands with creek-bottom species including pecan, Texas ash, and bald cypress requiring different care than upland oaks." },
      { name: "Lakeline area", description: "High-density development zone where trees near retail and commercial properties regularly need clearance pruning for utilities and signage." },
      { name: "Twin Creeks", description: "Large golf course community with HOA property maintenance standards and regular maintenance requirements." },
      { name: "Anderson Mill area", description: "Established western Cedar Park neighborhoods with older tree populations and more frequent deadwood and structural issues." },
      { name: "Crossing at Carriage Hills", description: "North Cedar Park residential community with mixed soil conditions and newer plantings coming into maturity." },
    ],
    neighborhoodsFooter:
      "We also serve Leander, Round Rock, Pflugerville, and Austin. Not sure if we reach your street? Call or text 512-912-8733.",
    faqsHeadline: "Frequently Asked Questions — Cedar Park Tree Service",
    faqs: [
      { q: "How much does tree removal cost in Cedar Park, TX?", a: "Tree removal in Cedar Park typically ranges from $300 to $2,500 depending on tree size, species, access on the property, and whether stump grinding is included. Large live oaks in tight spaces near fencing or structures run on the higher end. Call 512-912-8733 or use our Tree Removal Guesstimator for a free instant range before your on-site estimate." },
      { q: "Does Cedar Park require a permit to remove a tree?", a: "Cedar Park has a tree mitigation ordinance that applies to development activity and significant land disturbance. For standard residential removal of trees not in a development zone, permits are generally not required, but HOA rules vary by neighborhood. If your removal is connected to any construction or grading work, contact us first and we will confirm what applies to your specific address." },
      { q: "When should I trim my oak trees in Cedar Park, TX?", a: "July through January is the safe window for oak pruning in Cedar Park. Avoid any cuts on live oaks from February 1 through June 30 when nitidulid beetles are active and can carry oak wilt fungus into fresh wounds. Any emergency cuts made during that window need to be sealed with wound sealant within minutes of the cut." },
      { q: "What is Hypoxylon canker and is it the same as oak wilt?", a: "No. Hypoxylon canker is a separate fungal disease that attacks live oaks already stressed by drought, waterlogging, or root damage. It shows up as patchy bark sloughing off and a gray powdery layer underneath. Unlike oak wilt, it does not spread through root grafts, but there is no treatment once it takes hold. The best defense is keeping your trees healthy. If you are not sure which problem you have, call us for an assessment before assuming the tree is a loss." },
    ],
    ctaHeadline: "Get a Free Estimate in Cedar Park, TX",
  },
  leander: {
    slug: "leander",
    name: "Leander",
    state: "TX",
    metaTitle: "Tree Service Leander, TX | Removal, Trimming and Emergency Care | Adam's Apple",
    metaDescription:
      "Local tree service in Leander, TX. Tree removal, trimming, stump grinding, emergency service and oak wilt treatment. Free estimates. Call 512-912-8733.",
    heroEyebrow: "Leander, TX Tree Service",
    heroHeadline: "Tree Service Leander, TX: Removal, Trimming and Oak Wilt Care for Northwest Austin Homeowners",
    heroSubhead:
      "ISA certified arborists serving Leander and Williamson County. Tree removal, trimming, emergency response, stump grinding and oak wilt treatment with flat-rate pricing and free on-site estimates.",
    servicesHeadline: "Tree Services We Provide in Leander, TX",
    services: [
      { title: "Tree Removal Leander, TX", body: "Leander's rocky limestone terrain and shallow soils mean root systems often grow around caliche and rock rather than through it. Removal on sloped lots in Travisso and other hillside neighborhoods requires rigging and crew experience with uneven terrain. We assess access before every quote.", icon: TreePine, image: imgRemoval, href: "/services/tree-removal" },
      { title: "Tree Trimming and Pruning Leander, TX", body: "The live oaks in Crystal Falls and Block House Creek are large, established trees that benefit from regular crown cleaning to reduce storm risk. Shallow soils in these neighborhoods limit how much root support a large canopy has, making structural pruning important before ice and wind seasons.", icon: Scissors, image: imgPruning, href: "/services/tree-pruning-trimming" },
      { title: "Emergency Tree Service Leander, TX", body: "Leander's position in Williamson County puts it in the path of the same ice storms and wind events that affect the broader northwest Austin corridor. Call 512-912-8733 for same-day response when storm damage creates a hazard on your property.", icon: AlertTriangle, image: imgEmergency, href: "/services/emergency" },
      { title: "Stump Grinding Leander, TX", body: "Rocky soils in Travisso and other hillside Leander neighborhoods make stump grinding more involved than work in flat clay-soil areas. We bring equipment suited to limestone terrain and grind the stump down so the area is clear and ready for your next use.", icon: Trees, image: imgSoil },
      { title: "Oak Wilt Treatment Leander, TX", body: "Crystal Falls and Block House Creek have dense live oak populations where trees share root systems with neighbors. A single infected tree can spread oak wilt to six or more neighboring trees in one season if the root connections are not disrupted. Early propiconazole trunk injections are the only treatment that works once symptoms appear.", icon: Sprout, image: imgPlanting },
      { title: "Arborist Reports and Professional Services", body: "HOA communities in Leander including Crystal Falls, Travisso, and Bryson require arborist documentation before approving tree removal near common areas or property lines. We prepare reports that meet HOA and city requirements so your project does not stall waiting on paperwork.", icon: FileText, image: imgLegacy },
    ],
    whyHeadline: "Why Leander Homeowners Choose Adam's Apple Tree Service",
    whyPoints: [
      { title: "Free 30-Min Site Visit", body: "Every Leander estimate includes a free on-site assessment. We walk the property with you, look at every tree in question, and provide a written scope before any work is scheduled. No phone guesses, no surprises on job day." },
      { title: "No Deposit Required", body: "We start when you are ready and you pay when the job is complete and you are satisfied. Zero upfront commitment on any Leander tree service job." },
      { title: "Transparent Flat-Rate Quotes", body: "Leander homeowners get a written quote with photos before we start. The number we give you is the number you pay. No add-ons at the end of the job." },
    ],
    localInfoHeadline: "Tree Care in Leander, TX — What Homeowners Should Know",
    localInfoParagraphs: [
      "Leander sits on the eastern edge of the Edwards Plateau where shallow, rocky soils are common across most of the established and newer neighborhoods. Shallow soil depth limits how far root systems can expand horizontally and vertically, which means trees in Leander are more exposed to wind failure during ice events and storm systems than trees in deeper clay-based soils further east. This is especially relevant for the mature live oaks in Crystal Falls and Block House Creek where older specimens have root systems that have been working around rock and caliche for decades.",
      "Oak wilt is the main tree disease concern across Leander. The northwest Austin corridor sees active beetle pressure every year from February through June, and the dense live oak populations in master-planned communities like Travisso and Bryson create ideal conditions for disease to spread through root grafts between neighboring trees. HOA and CC&R requirements in these communities also regulate what work can be done on trees near common areas and property lines. We are familiar with the review processes in these neighborhoods and can help coordinate the documentation needed if your HOA requires it before work begins.",
      "The Ronald Reagan Blvd and SH-183A corridors have both brought significant construction activity through Leander over the past decade. Properties near these corridors have trees that have experienced root zone compaction, grade changes, and utility installation near their root systems. Trees that have been through construction impact often show delayed stress symptoms two to three years after the disturbance. If you have trees near any recently developed or widened roadway, a health assessment is worth scheduling before problems become visible.",
    ],
    neighborhoodsHeadline: "Leander Neighborhoods We Serve",
    neighborhoodsIntro:
      "Adam's Apple Tree Service covers Leander and surrounding Williamson County. Our crews run regular routes into Leander from our South Austin base along the 183A corridor.",
    neighborhoods: [
      { name: "Crystal Falls", description: "Established HOA community in west Leander with mature live oak canopies and CC&R requirements for tree work near common areas and property lines." },
      { name: "Block House Creek", description: "One of Leander's older master-planned communities with dense oak and cedar elm populations. Trees here are large and benefit from regular structural pruning to reduce storm risk." },
      { name: "Travisso", description: "Newer hillside development on rocky limestone terrain. Shallow soils and steep grades require careful rigging and removal techniques to protect surrounding structures." },
      { name: "Bryson", description: "Growing northwest Leander community with younger tree populations and HOA property standards that apply to street trees and easement areas." },
      { name: "Mason Hills", description: "Established residential area with a mix of native oaks and cedars on larger lots." },
      { name: "Leander town center area", description: "Older core neighborhoods with mature tree populations and a mix of residential and small commercial properties." },
      { name: "Liberty Hill area", description: "We regularly service properties along the Leander and Liberty Hill border. Call to confirm coverage at your specific address." },
    ],
    neighborhoodsFooter:
      "We also serve Cedar Park, Round Rock, Georgetown, and Austin. Not sure if we reach your street? Call or text 512-912-8733.",
    faqsHeadline: "Frequently Asked Questions — Leander Tree Service",
    faqs: [
      { q: "How much does tree removal cost in Leander, TX?", a: "Tree removal in Leander typically ranges from $300 to $2,500 depending on tree size, species, access on the property, and whether stump grinding is included. Trees on rocky terrain or near structures on sloped lots in areas like Travisso run on the higher end due to rigging and access requirements. Call 512-912-8733 or use our Tree Removal Guesstimator for a free instant range before your on-site estimate." },
      { q: "Does Leander require a permit to remove a tree?", a: "The City of Leander has tree preservation requirements that apply to protected species and trees above certain size thresholds, particularly in newer development zones. HOA rules in communities like Crystal Falls and Travisso add another layer that varies by neighborhood. We research the specific requirements for your address before any work begins so you are not caught off guard." },
      { q: "When is it safe to trim oak trees in Leander, TX?", a: "July through January is the safe pruning window for live oaks in Leander. Avoid cuts from February 1 through June 30 when the sap beetles that spread oak wilt are most active across Williamson County. Any emergency cuts during that window need to be sealed immediately with wound sealant to block beetle access." },
      { q: "My HOA requires an arborist report before I can remove a tree. Can you help?", a: "Yes. We provide written arborist reports that meet HOA and city documentation requirements for Crystal Falls, Block House Creek, Travisso, Bryson, and other Leander communities. Call us and we will confirm what your specific HOA requires before scheduling the assessment." },
    ],
    ctaHeadline: "Get a Free Estimate in Leander, TX",
  },
  "shady-hollow": {
    slug: "shady-hollow",
    name: "Shady Hollow",
    state: "TX",
    metaTitle: "Tree Service Shady Hollow, TX | Oak Wilt Treatment, Removal and Trimming | Adam's Apple",
    metaDescription:
      "Local tree service in Shady Hollow, TX. Tree removal, trimming, stump grinding, oak wilt treatment and emergency care. Free estimates. Call 512-912-8733.",
    heroEyebrow: "Shady Hollow, TX Tree Service",
    heroHeadline: "Tree Service Shady Hollow, TX: Oak Wilt Treatment, Removal and Trimming in South Austin",
    heroSubhead:
      "ISA certified arborists serving Shady Hollow and South Austin. Tree removal, trimming, oak wilt treatment, emergency response and Heritage Tree permit handling with flat-rate pricing and free on-site estimates.",
    servicesHeadline: "Tree Services We Provide in Shady Hollow, TX",
    services: [
      { title: "Tree Removal Shady Hollow, TX", body: "Safe removal of hazardous, dead, or unwanted trees across Shady Hollow. Written flat-rate quotes before work starts, full cleanup included, no deposit until the job is done.", icon: TreePine, image: imgRemoval, href: "/services/tree-removal" },
      { title: "Tree Trimming and Pruning Shady Hollow, TX", body: "Structural pruning, dead wood removal, and crown shaping for Shady Hollow's live oaks, cedar elms, and native species. All work follows ANSI A300 standards. Oak pruning is scheduled outside the February 1 through June 30 beetle pressure window without exception.", icon: Scissors, image: imgPruning, href: "/services/tree-pruning-trimming" },
      { title: "Oak Wilt Treatment Shady Hollow, TX", body: "Shady Hollow is one of the most active oak wilt zones in South Austin. Live oaks in this neighborhood are connected through root grafts, which means one infected tree can spread the disease to its neighbors within a single season. Early propiconazole trunk injections can stop the spread if the infection is caught before it reaches the vascular system.", icon: Sprout, image: imgPlanting },
      { title: "Emergency Tree Service Shady Hollow, TX", body: "Storm damage, fallen trees, and hazardous limbs handled fast. Call 512-912-8733 for same-day emergency response across Shady Hollow and surrounding South Austin.", icon: AlertTriangle, image: imgEmergency, href: "/services/emergency" },
      { title: "Stump Grinding Shady Hollow, TX", body: "Complete stump removal down to the root system. We grind and clear so your yard is ready for replanting or lawn work without any leftover hazard or regrowth.", icon: Trees, image: imgSoil },
      { title: "Arborist Reports and Professional Services", body: "Written arborist reports for insurance claims, Austin Heritage Tree permit applications, and property transactions. Our certified staff handles the documentation so you do not need a separate consultant.", icon: FileText, image: imgLegacy },
    ],
    whyHeadline: "Why Shady Hollow Homeowners Choose Adam's Apple Tree Service",
    whyPoints: [
      { title: "Free 30-Min Site Visit", body: "Every Shady Hollow estimate includes a free on-site assessment. We walk the property with you, evaluate every tree in question, and give you a written scope before any work is scheduled. No phone guesses, no surprises on job day." },
      { title: "No Deposit Required", body: "We start when you are ready and you pay when the job is done and you are satisfied. Zero upfront commitment on any Shady Hollow tree service job." },
      { title: "Transparent Flat-Rate Quotes", body: "Shady Hollow homeowners get a written quote with photos before we start. The number we give you is the number you pay. No add-ons at the end of the job." },
    ],
    localInfoHeadline: "Tree Care in Shady Hollow, TX — What Homeowners Should Know",
    localInfoParagraphs: [
      "Shady Hollow was an unincorporated community before being annexed into the City of Austin, which means properties here are now subject to Austin's Heritage Tree ordinance. If you have a live oak, cedar elm, pecan, or bald cypress that is 19 inches or more in diameter measured at 4.5 feet from the ground, it qualifies as a Heritage Tree and requires a city permit before removal. Trees over 24 inches in diameter face additional restrictions. Many Shady Hollow homeowners are not aware their trees fall under these protections. We assess the protected status of your trees before any removal work is scheduled so there are no permit violations after the fact.",
      "Oak wilt is the most pressing tree health concern in Shady Hollow. This neighborhood has one of the higher concentrations of mature live oaks in South Austin, and the interconnected root systems that run beneath the streets and property lines create a direct path for the fungus to travel from tree to tree without any beetle involvement at all. Root graft transmission is faster and more destructive than beetle transmission. If one live oak in a cluster is confirmed infected, the neighboring trees are already at risk. Treatment with propiconazole injections in a trench cut around the infected tree's root zone can block further spread if the diagnosis is made before the disease reaches the secondary trees. Do not wait for visual symptoms on neighboring trees before calling us.",
      "The soil in Shady Hollow is predominantly clay with some limestone outcropping in the western sections near Slaughter Creek. Clay soils compact easily under foot traffic and vehicle weight, which limits oxygen and water movement to tree roots over time. Compaction stress makes trees more vulnerable to secondary infections and drought damage. If your live oaks are showing early signs of thinning canopies or early leaf drop outside of oak wilt season, soil compaction is worth evaluating alongside disease as a possible cause.",
    ],
    neighborhoodsHeadline: "Shady Hollow Neighborhoods We Serve",
    neighborhoodsIntro:
      "Adam's Apple Tree Service is based in South Austin, which makes Shady Hollow one of our closest and most frequently serviced areas. Our crews work this part of Travis County on a regular schedule.",
    neighborhoods: [
      { name: "Shady Hollow", description: "South Austin neighborhood annexed into the City of Austin. Active oak wilt zone with mature live oak canopies and Heritage Tree protections that apply to most older trees on the street." },
      { name: "Circle C Ranch", description: "Planned community to the west of Shady Hollow with a similar tree canopy and the same Heritage Tree ordinance coverage. Many Circle C properties have live oaks that predate the development." },
      { name: "Onion Creek", description: "Creek corridor community to the east with native pecan, cedar elm, and Texas ash populations along the waterway. Flood zone status affects removal permits on creek-adjacent properties." },
      { name: "Manchaca", description: "South Austin community along the MoPac corridor with older residential properties and a mix of large native oaks and cedar trees." },
      { name: "Bluff Springs", description: "Southeast South Austin with a growing residential base and native tree populations entering their first major maintenance window." },
      { name: "Slaughter Creek corridor", description: "Properties backing up to the creek have a different species mix than upland lots, including bald cypress and pecan that require separate care considerations." },
    ],
    neighborhoodsFooter:
      "We also serve Austin, Buda, Bastrop, and surrounding South Travis County. Not sure if we cover your street? Call or text 512-912-8733.",
    faqsHeadline: "Frequently Asked Questions — Shady Hollow Tree Service",
    faqs: [
      { q: "Does Shady Hollow fall under Austin's Heritage Tree ordinance?", a: "Yes. Shady Hollow was annexed into the City of Austin, so the Austin Heritage Tree ordinance applies to all properties in the neighborhood. Live oaks, cedar elms, pecans, and bald cypresses 19 inches or more in diameter at 4.5 feet from the ground are protected and require a city permit before removal. We confirm the protected status of your specific trees before any work begins." },
      { q: "How serious is oak wilt in Shady Hollow?", a: "Shady Hollow is one of the higher-risk neighborhoods in South Austin for oak wilt due to the density of its live oak canopy and the connected root systems running between properties. The disease spreads underground through root grafts faster than most homeowners expect. If you see rapid leaf drop or leaves browning from the tips inward on a live oak between February and June, treat it as an emergency and call us before the infection spreads to neighboring trees." },
      { q: "When is it safe to trim live oaks in Shady Hollow?", a: "July through January is the safe pruning window. Do not prune live oaks from February 1 through June 30 when nitidulid beetles are active and can carry oak wilt spores into fresh cuts. Storm damage cuts made during that window need to be sealed with wound sealant within minutes of the cut to block beetle access." },
      { q: "How much does tree removal cost in Shady Hollow, TX?", a: "Tree removal in Shady Hollow typically ranges from $300 to $3,000 depending on tree size, species, access on the property, and whether a Heritage Tree permit is required. Large live oaks near structures or fencing run on the higher end due to rigging requirements and permit processing time. Call 512-912-8733 or use our Tree Removal Guesstimator for a free instant range before scheduling your on-site estimate." },
    ],
    ctaHeadline: "Get a Free Estimate in Shady Hollow, TX",
  },
  buda: {
    slug: "buda",
    name: "Buda",
    state: "TX",
    metaTitle: "Tree Service Buda, TX | Removal, Trimming and Emergency Care | Adam's Apple",
    metaDescription:
      "Local tree service in Buda, TX. Tree removal, trimming, stump grinding, emergency service and oak wilt treatment. Free estimates. Call 512-912-8733.",
    heroEyebrow: "Buda, TX Tree Service",
    heroHeadline: "Tree Service Buda, TX: Removal, Trimming and Emergency Care for Hays County Homeowners",
    heroSubhead:
      "ISA certified arborists serving Buda and Hays County. Tree removal, trimming, emergency response, stump grinding and oak wilt treatment with flat-rate pricing and free on-site estimates.",
    servicesHeadline: "Tree Services We Provide in Buda, TX",
    services: [
      { title: "Tree Removal Buda, TX", body: "Buda's blackland clay soils hold roots tight and deep, which makes large tree removal more involved than it looks from the surface. We assess root zone, proximity to structures, and access before quoting every job. Flat-rate quote on-site, no deposit until the work is done.", icon: TreePine, image: imgRemoval, href: "/services/tree-removal" },
      { title: "Tree Trimming and Pruning Buda, TX", body: "Live oaks, cedar elms, and pecans throughout Buda's established and newer neighborhoods need structural pruning as they mature in dense clay soils. We schedule all oak trimming outside the February through June beetle pressure window and follow ANSI A300 standards on every job.", icon: Scissors, image: imgPruning, href: "/services/tree-pruning-trimming" },
      { title: "Emergency Tree Service Buda, TX", body: "Hays County sees fast-moving fronts that bring high winds and ice through the I-35 corridor with little warning. When a tree comes down on a structure or blocks access in Buda, call 512-912-8733 for same-day emergency response.", icon: AlertTriangle, image: imgEmergency, href: "/services/emergency" },
      { title: "Stump Grinding Buda, TX", body: "Blackland clay in Buda grips stumps and surface roots differently than sandy or rocky soils. We grind the root crown and major laterals so the site is ready for sod, replanting, or construction without any resprouting issues down the road.", icon: Trees, image: imgSoil },
      { title: "Oak Wilt Treatment Buda, TX", body: "Oak wilt pressure exists throughout the live oak corridor running north from San Marcos through Buda and into South Austin. If you are seeing browning from the tips inward or rapid leaf drop on your live oaks, contact us before the disease spreads through the root connections to neighboring trees.", icon: Sprout, image: imgPlanting },
      { title: "Arborist Reports and Professional Services", body: "Hays County and HOA communities in newer Buda developments require documentation for certain tree work. We prepare written arborist reports for insurance claims, permit applications, and HOA approval processes so your project does not stall on paperwork.", icon: FileText, image: imgLegacy },
    ],
    whyHeadline: "Why Buda Homeowners Choose Adam's Apple Tree Service",
    whyPoints: [
      { title: "Free 30-Min Site Visit", body: "Every Buda estimate includes a free on-site assessment. We walk the property with you, look at every tree in question, and give you a written scope before any work is scheduled. No phone guesses, no surprises on job day." },
      { title: "No Deposit Required", body: "We start when you are ready and you pay when the job is done and you are satisfied. Zero upfront commitment on any Buda tree service job." },
      { title: "Transparent Flat-Rate Quotes", body: "Buda homeowners get a written quote with photos before we start. The number we give you is the number you pay. No add-ons at the end of the job." },
    ],
    localInfoHeadline: "Tree Care in Buda, TX — What Homeowners Should Know",
    localInfoParagraphs: [
      "Buda sits in Hays County on the northern edge of the blackland prairie, where heavy clay soils dominate most residential areas. Clay soils hold moisture after rain events and crack during drought, which puts stress on tree root systems in both directions. Live oaks and cedar elms handle these cycles reasonably well, but pecans and younger shade trees planted in the past 10 years in newer subdivisions are more susceptible to root stress during extended dry periods. Supplemental deep watering during summer months is one of the most straightforward things Buda homeowners can do to protect trees that were planted during the construction phase of newer neighborhoods.",
      "Buda has grown fast along the 35 corridor with several large master-planned communities coming online in the past decade. Neighborhoods like Sunfield, Garlic Creek, and Shadow Creek all have HOA requirements and city development codes that affect what tree work can be done without prior approval. Trees near utility easements, drainage channels, and green belt areas in these communities often have additional restrictions that vary by plat. We check the specific requirements for your address before any removal or significant trimming work is scheduled.",
      "Adam's Apple has crew members who live in the Buda area, which gives us a real pricing advantage over Austin-based companies making the drive south. When your job is near home for our crew, the cost reflects that. We are not padding quotes to cover drive time from North Austin.",
    ],
    neighborhoodsHeadline: "Buda Neighborhoods We Serve",
    neighborhoodsIntro:
      "Adam's Apple Tree Service covers Buda and surrounding Hays County. Our crew members live in the area and work Buda jobs regularly, which means faster response and better pricing than companies based in North Austin or Georgetown.",
    neighborhoods: [
      { name: "Garlic Creek", description: "Established master-planned community in north Buda with mature live oaks and cedar elms in common areas and residential lots. HOA landscape requirements apply to removal and trimming near shared spaces." },
      { name: "Sunfield", description: "Large newer development in south Buda with younger tree populations entering their first major growth and maintenance phase." },
      { name: "Shadow Creek", description: "Residential community with a mix of native oaks and cedars on properties ranging from standard lots to larger acreage." },
      { name: "Elm Grove", description: "Established neighborhood in central Buda with older tree populations and more frequent deadwood and storm damage issues." },
      { name: "Downtown Buda area", description: "Older residential core with mature specimen trees and a mix of city ordinance and HOA requirements depending on the block." },
      { name: "Kyle border area", description: "We regularly service properties along the Buda and Kyle border. Call to confirm coverage at your specific address." },
    ],
    neighborhoodsFooter:
      "We also serve Austin, San Marcos, Manchaca, and Dripping Springs. Not sure if we reach your street? Call or text 512-912-8733.",
    faqsHeadline: "Frequently Asked Questions — Buda Tree Service",
    faqs: [
      { q: "How much does tree removal cost in Buda, TX?", a: "Tree removal in Buda typically ranges from $300 to $2,500 depending on tree size, species, access, and whether stump grinding is included. Large live oaks and pecans in clay soil with wide surface roots run on the higher end. Call 512-912-8733 or use our Tree Removal Guesstimator for a free instant range before your on-site estimate." },
      { q: "Does Buda require a permit to remove a tree?", a: "Permit requirements in Buda depend on whether you are in the city limits, an ETJ area, or a development zone with HOA rules. Newer subdivisions like Sunfield and Garlic Creek have HOA requirements that may apply regardless of city rules. We research the specific requirements for your address before scheduling any work." },
      { q: "When is it safe to trim oak trees in Buda, TX?", a: "July through January is the safe pruning window for live oaks in Buda. Avoid cuts from February 1 through June 30 when sap beetles are active and can carry oak wilt fungus into fresh wounds. Any emergency cuts during that window need to be sealed with wound sealant immediately to block beetle access." },
      { q: "Why is Adam's Apple priced competitively in Buda compared to other companies?", a: "Several of our crew members live in the Buda area. When we take a job near where our crew is already based, we are not pricing in long drive times from North Austin or paying to transport equipment from far away. That savings goes into the quote you receive." },
    ],
    ctaHeadline: "Get a Free Estimate in Buda, TX",
  },
  "bee-cave": {
    slug: "bee-cave",
    name: "Bee Cave",
    state: "TX",
    metaTitle: "Tree Service Bee Cave, TX | Removal, Trimming and Oak Wilt Care | Adam's Apple",
    metaDescription:
      "Local tree service in Bee Cave, TX. Tree removal, trimming, stump grinding, emergency service and oak wilt treatment. Free estimates. Call 512-912-8733.",
    heroEyebrow: "Bee Cave, TX Tree Service",
    heroHeadline: "Tree Service Bee Cave, TX: Removal, Trimming and Oak Wilt Care for Hill Country Properties",
    heroSubhead:
      "ISA certified arborists serving Bee Cave and western Travis County. Tree removal, trimming, emergency response, stump grinding and oak wilt treatment with flat-rate pricing and free on-site estimates.",
    servicesHeadline: "Tree Services We Provide in Bee Cave, TX",
    services: [
      { title: "Tree Removal Bee Cave, TX", body: "Bee Cave properties sit on thin limestone soils where root systems spread wide and shallow. Our removal crews account for rocky terrain, sloped lots, and proximity to structures before any cuts are made. Flat-rate quote provided on-site before work begins.", icon: TreePine, image: imgRemoval, href: "/services/tree-removal" },
      { title: "Tree Trimming Services Bee Cave, TX", body: "Live oaks in Spanish Oaks, Falconhead, and along the 71 corridor need structural pruning that works with their natural form — not against it. We follow ANSI A300 standards and keep all oak trimming outside the February through June beetle pressure window.", icon: Scissors, image: imgPruning, href: "/services/tree-pruning-trimming" },
      { title: "Emergency Tree Service Bee Cave, TX", body: "Western Travis County sees strong wind events off Lake Travis that bring down limbs and whole trees on short notice. Call 512-912-8733 for same-day response across Bee Cave when storm damage puts your property or access at risk.", icon: AlertTriangle, image: imgEmergency, href: "/services/emergency" },
      { title: "Stump Grinding Bee Cave, TX", body: "Rocky Hill Country soils make stump grinding in Bee Cave more involved than flatland work. We bring the right equipment for limestone terrain and grind the root crown down so your yard is clear for replanting or lawn work.", icon: Trees, image: imgSoil },
      { title: "Oak Wilt Treatment Bee Cave, TX", body: "Spanish Oaks and Falconhead have some of the densest live oak populations in western Travis County, and oak wilt moves fast through connected root grafts in tight neighborhoods. If you are seeing rapid browning from the tips inward on your live oaks, call us before the disease crosses into neighboring trees.", icon: Sprout, image: imgPlanting },
      { title: "Arborist Reports and Professional Services", body: "Bee Cave's tree preservation ordinance and HOA requirements in Spanish Oaks, Falconhead, and Ladera both require documentation before certain tree work can proceed. We prepare the arborist reports your city permit or HOA application needs so you are not held up waiting on paperwork.", icon: FileText, image: imgLegacy },
    ],
    whyHeadline: "Why Bee Cave Homeowners Choose Adam's Apple Tree Service",
    whyPoints: [
      { title: "Free 30-Min Site Visit", body: "Every Bee Cave estimate includes a free on-site assessment. We walk the property with you, look at every tree in question, and give you a written scope before any work is scheduled. No phone guesses, no surprises on job day." },
      { title: "No Deposit Required", body: "We start when you are ready and you pay when the job is done and you are satisfied. Zero upfront commitment on any Bee Cave tree service job." },
      { title: "Transparent Flat-Rate Quotes", body: "Bee Cave homeowners get a written quote with photos before we start. The number we give you is the number you pay. No add-ons at the end of the job." },
    ],
    localInfoHeadline: "Tree Care in Bee Cave, TX — What Homeowners Should Know",
    localInfoParagraphs: [
      "Bee Cave sits at the eastern edge of the Hill Country where the Edwards Plateau transitions toward Lake Travis. Most residential properties in Bee Cave are on thin limestone-based soils with limited topsoil depth. These soils drain fast, which stresses trees during extended dry periods. Live oaks and cedar elms handle these conditions better than most species, but they still need monitoring during drought years when root systems are working harder to find water.",
      "The City of Bee Cave has a tree preservation ordinance that protects heritage trees and certain species above specific size thresholds. Protected trees in Bee Cave include live oaks, pecans, cedar elms, and Texas ash over 8 inches in diameter. Removal of a protected tree without a permit carries fines and may require mitigation planting. HOA requirements in communities like Spanish Oaks, Falconhead, and Ladera often add restrictions beyond what the city requires. We review the permit requirements for your specific address before any work begins.",
      "Properties along the Lake Travis shoreline have additional tree care considerations. Shoreline exposure, fluctuating lake levels, and wind off the water create stress conditions that affect trees differently than inland properties. Root zone saturation during high water events followed by dry periods can weaken otherwise healthy trees over several seasons. If your property has direct lake frontage or creek drainage running through it, a structural assessment of your mature trees is worth scheduling before storm season.",
    ],
    neighborhoodsHeadline: "Bee Cave Neighborhoods We Serve",
    neighborhoodsIntro:
      "Adam's Apple Tree Service covers Bee Cave and western Travis County. Our crews make regular runs west from South Austin along 71 and service Bee Cave neighborhoods on a consistent schedule.",
    neighborhoods: [
      { name: "Spanish Oaks", description: "Gated golf course community with large estate lots, mature live oak canopies, and HOA tree care requirements for removal and trimming near common areas." },
      { name: "Falconhead", description: "Established subdivision in central Bee Cave with dense oak populations and active oak wilt pressure throughout the neighborhood." },
      { name: "Ladera", description: "Newer hillside development with younger tree populations on rocky terrain. Properties on steeper grades require rigging for safe removal." },
      { name: "The Galleria area", description: "Mixed commercial and residential zone along 71. Street trees and commercial property trees in this corridor need regular clearance and maintenance." },
      { name: "Spillman Ranch", description: "Residential community on the eastern edge of Bee Cave with a mix of native oaks and cedars on larger lots." },
      { name: "Lake Travis shoreline properties", description: "Waterfront and near-water properties with specific soil and exposure conditions. We assess lake-adjacent trees separately from standard residential work." },
    ],
    neighborhoodsFooter:
      "We also serve Lakeway, Austin, Dripping Springs, and Rollingwood. Not sure if we reach your address? Call or text 512-912-8733.",
    faqsHeadline: "Frequently Asked Questions — Bee Cave Tree Service",
    faqs: [
      { q: "How much does tree removal cost in Bee Cave, TX?", a: "Tree removal in Bee Cave typically ranges from $400 to $3,000 depending on tree size, species, terrain, and access. Properties on rocky or sloped lots in areas like Ladera and the Lake Travis corridor run on the higher end due to rigging requirements. Call 512-912-8733 or use our Tree Removal Guesstimator for a free instant range before your on-site estimate." },
      { q: "Do I need a permit to remove a tree in Bee Cave?", a: "Yes, in most cases involving protected species. Bee Cave's tree preservation ordinance covers live oaks, pecans, cedar elms, and Texas ash over 8 inches in diameter. Removal without a permit can result in fines and required mitigation planting. HOA rules in Spanish Oaks, Falconhead, and Ladera often add their own requirements on top of the city ordinance. We research both sets of requirements for your specific address before scheduling any work." },
      { q: "When is it safe to trim oak trees in Bee Cave, TX?", a: "July through January is the recommended pruning window for live oaks in Bee Cave. Avoid cuts from February 1 through June 30 when sap beetles are active and can carry oak wilt fungus into fresh wounds. Any emergency cuts during that period need to be sealed with wound sealant immediately. Bee Cave has active oak wilt pressure particularly in the Spanish Oaks and Falconhead areas." },
      { q: "What tree services do you provide for commercial properties in Bee Cave?", a: "We provide tree removal, trimming, stump grinding, and arborist reports for commercial properties along the 71 corridor, retail centers near The Galleria, and HOA-managed common areas throughout Bee Cave. Call 512-912-8733 to discuss scope and scheduling for commercial jobs." },
    ],
    ctaHeadline: "Get a Free Estimate in Bee Cave, TX",
  },
  rollingwood: {
    slug: "rollingwood",
    name: "Rollingwood",
    state: "TX",
    metaTitle: "Tree Service Rollingwood, TX | Removal, Commercial Tree Services Rollingwood and Arborist Care",
    metaDescription:
      "Local tree service in Rollingwood, TX. Tree removal, trimming, stump grinding, emergency service and arborist reports. Free estimates. Call 512-912-8733.",
    heroEyebrow: "Rollingwood, TX Tree Service",
    heroHeadline: "Tree Service Rollingwood, TX: Removal, Trimming and Arborist Care for West Austin Properties",
    heroSubhead:
      "Adam's Apple Tree Service provides residential and commercial tree services in Rollingwood, TX. Tree removal, trimming, stump grinding, emergency response, and arborist reports for estate properties, HOA common areas, and commercial sites throughout Rollingwood and the west Austin corridor.",
    servicesHeadline: "Tree Services We Provide in Rollingwood, TX",
    services: [
      { title: "Tree Removal Rollingwood, TX", body: "Rollingwood's estate properties sit on rolling limestone terrain with mature live oaks, cedar elms, and specimen trees that often grow near structures, retaining walls, and drainage features. Every removal starts with an on-site scope review. Flat-rate quote provided before any work begins.", icon: TreePine, image: imgRemoval, href: "/services/tree-removal" },
      { title: "Residential Tree Services Rollingwood, TX", body: "Crown cleaning, structural pruning, and dead wood removal for Rollingwood's live oaks and native Hill Country species. Properties in this area have trees that have been in the ground for decades and respond well to careful pruning that respects their established form.", icon: Scissors, image: imgPruning, href: "/services/tree-pruning-trimming" },
      { title: "Emergency Tree Service Rollingwood, TX", body: "Wind events off Barton Creek and through the canyon corridors near Rollingwood can bring down large limbs on short notice. Call 512-912-8733 for same-day response when storm damage puts your property or access at risk.", icon: AlertTriangle, image: imgEmergency, href: "/services/emergency" },
      { title: "Stump Grinding Rollingwood, TX", body: "Limestone-based soils in Rollingwood make stump grinding more technical than flat-ground work. We bring equipment suited to rocky terrain and clear the site cleanly so your yard is ready for replanting or restoration work.", icon: Trees, image: imgSoil },
      { title: "Oak Wilt Treatment Rollingwood, TX", body: "Rollingwood's dense live oak canopy creates exactly the conditions where oak wilt spreads fast through root grafts between neighboring properties. The February through June pruning ban is especially important to follow in this area. If you are seeing symptoms, contact us before the disease moves across your property line.", icon: Sprout, image: imgPlanting },
      { title: "Arborist Reports and Professional Services", body: "Rollingwood has specific tree preservation ordinances that require documentation before removal of protected trees. We prepare written arborist reports for city permit applications, insurance claims, and property transactions so your project moves forward without delays.", icon: FileText, image: imgLegacy },
    ],
    whyHeadline: "Why Rollingwood Homeowners Choose Adam's Apple Tree Service",
    whyPoints: [
      { title: "Free 30-Min Site Visit", body: "Every Rollingwood estimate includes a free on-site assessment. We walk the property with you, review every tree in question, and provide a written scope before any work begins. No phone estimates, no surprises on job day." },
      { title: "No Deposit Required", body: "We start when you are ready and you pay when the job is done and you are satisfied. Zero upfront commitment on any Rollingwood tree service job." },
      { title: "Transparent Flat-Rate Quotes", body: "Rollingwood homeowners get a written quote with photos before we start. The number we give you is the number you pay. No add-ons at the end of the job." },
    ],
    localInfoHeadline: "Tree Care in Rollingwood, TX — What Homeowners Should Know",
    localInfoParagraphs: [
      "Rollingwood is a 1.3 square mile city entirely surrounded by Austin and West Lake Hills. The small size and high density of mature trees means that almost every property has at least one tree that shares a root zone with a neighbor's tree. This matters for oak wilt because the fungus travels through those root connections rather than through the air. A single infected tree in Rollingwood can spread disease to multiple adjacent properties within one growing season if the connecting root grafts are not disrupted early.",
      "The rolling limestone topography that gives the city its name creates specific challenges for tree work. Steep grades, exposed rock faces, and retaining walls near root zones change how we approach both removal and pruning. Trees on slopes or near structures on hillside lots require rigging techniques that a standard flatland crew is not always equipped for. Our crews are experienced with this terrain and price slope and access into every quote upfront.",
    ],
    neighborhoodsHeadline: "Rollingwood Neighborhoods We Serve",
    neighborhoodsIntro:
      "Rollingwood is a small city with no internal neighborhood divisions, but the surrounding area gives us useful reference points for coverage. Our South Austin base puts us close to this market and we run regular routes into the west Austin corridor.",
    neighborhoods: [
      { name: "Rollingwood city proper", description: "All residential properties within the city limits. We are familiar with the local ordinance requirements and can confirm permit needs for your specific address." },
      { name: "Barton Creek corridor", description: "Properties along and near the Barton Creek greenbelt adjacent to Rollingwood with native tree stands and canyon terrain requiring specific access planning." },
      { name: "West Lake Hills adjacent", description: "Properties on the Rollingwood and West Lake Hills border. We serve both sides and confirm city ordinance requirements based on your specific parcel location." },
      { name: "Westwood Country Club area", description: "Established residential properties with mature canopies and HOA or deed restriction considerations for tree work near shared areas." },
    ],
    neighborhoodsFooter:
      "We also serve Austin, Bee Cave, Sunset Valley, and West Lake Hills. Not sure if your address is in Rollingwood proper? Call or text 512-912-8733 and we will confirm.",
    faqsHeadline: "Frequently Asked Questions — Rollingwood Tree Service",
    faqs: [
      { q: "How much does tree removal cost in Rollingwood, TX?", a: "Tree removal in Rollingwood typically ranges from $500 to $3,500 depending on tree size, terrain, access, and whether a permit is required. Large live oaks on sloped lots near structures run on the higher end due to rigging requirements. Call 512-912-8733 or use our Tree Removal Guesstimator for a free range before your on-site estimate." },
      { q: "Does Rollingwood require a permit to remove a tree?", a: "Yes. Rollingwood has its own tree preservation ordinance separate from Austin that requires a permit before removing protected trees above certain size thresholds. We research the requirements for your specific parcel before scheduling any removal work so you are not caught off guard." },
      { q: "When is it safe to trim oak trees in Rollingwood, TX?", a: "July through January is the safe window for oak pruning in Rollingwood. Avoid cuts from February 1 through June 30 when sap beetles are active and can carry oak wilt fungus into fresh wounds. Given Rollingwood's density and the connected root systems between neighboring properties, following this window is especially important here." },
      { q: "Can you handle tree work on sloped or hillside properties in Rollingwood?", a: "Yes. Rollingwood's limestone terrain and sloped lots are something our crews work on regularly in the west Austin corridor. We assess grade, root zone proximity to structures, and equipment access during the on-site estimate and price the actual conditions of the job rather than a standard flatland rate." },
    ],
    ctaHeadline: "Get a Free Estimate in Rollingwood, TX",
  },
  manor: {
    slug: "manor",
    name: "Manor",
    state: "TX",
    metaTitle: "Tree Service Manor, TX | Removal, Trimming and Emergency Care | Adam's Apple",
    metaDescription:
      "Local tree service in Manor, TX. Tree removal, trimming, stump grinding, emergency service and oak wilt treatment. Free estimates. Call 512-912-8733.",
    heroEyebrow: "Manor, TX Tree Service",
    heroHeadline: "Tree Service Manor, TX: Removal, Trimming and Emergency Care for East Travis County",
    heroSubhead:
      "ISA certified arborists serving Manor and eastern Travis County. Tree removal, trimming, emergency response, stump grinding and oak wilt treatment with flat-rate pricing and free on-site estimates.",
    servicesHeadline: "Tree Services We Provide in Manor, TX",
    services: [
      { title: "Tree Removal Manor, TX", body: "Manor sits on deep blackland clay where large pecans and hackberries develop wide surface root systems that require careful planning before removal. We assess root zone, access, and proximity to structures on-site before quoting every job.", icon: TreePine, image: imgRemoval, href: "/services/tree-removal" },
      { title: "Tree Trimming and Pruning Manor, TX", body: "The pecans, hackberries, cedar elms, and live oaks common across Manor's residential and rural properties need different pruning approaches depending on species and age. We schedule all oak trimming outside the February through June beetle pressure window and follow ANSI A300 standards on every job.", icon: Scissors, image: imgPruning, href: "/services/tree-pruning-trimming" },
      { title: "Emergency Tree Service Manor, TX", body: "Manor's position on the eastern Travis County plain means it sits in the direct path of fast-moving thunderstorms that push through from the southwest. Call 512-912-8733 for same-day emergency response when storm damage creates a hazard on your property.", icon: AlertTriangle, image: imgEmergency, href: "/services/emergency" },
      { title: "Stump Grinding Manor, TX", body: "Deep blackland clay in Manor holds stump root systems tight below the surface. We grind the root crown and main laterals so the area is clear for replanting, sod work, or construction without resprouting over time.", icon: Trees, image: imgSoil },
      { title: "Oak Wilt Treatment Manor, TX", body: "Manor has live oak populations across its older neighborhoods and rural acreage properties that are connected through root grafts. Oak wilt spreads fast in live oak clusters. If you are seeing rapid browning from the tips inward, contact us before the disease jumps to neighboring trees.", icon: Sprout, image: imgPlanting },
      { title: "Arborist Reports and Professional Services", body: "Written arborist reports for insurance claims, HOA documentation in newer Manor developments, and property transactions. We handle the documentation so your project does not stall waiting on paperwork.", icon: FileText, image: imgLegacy },
    ],
    whyHeadline: "Why Manor Homeowners Choose Adam's Apple Tree Service",
    whyPoints: [
      { title: "Free 30-Min Site Visit", body: "Every Manor estimate includes a free on-site assessment. We walk the property with you, look at every tree in question, and give you a written scope before any work is scheduled. No phone guesses, no surprises on job day." },
      { title: "No Deposit Required", body: "We start when you are ready and you pay when the job is done and you are satisfied. Zero upfront commitment on any Manor tree service job." },
      { title: "Transparent Flat-Rate Quotes", body: "Manor homeowners get a written quote with photos before we start. The number we give you is the number you pay. No add-ons at the end of the job." },
    ],
    localInfoHeadline: "Tree Care in Manor, TX — What Homeowners Should Know",
    localInfoParagraphs: [
      "Manor sits on the eastern edge of Travis County where deep blackland prairie soils dominate most of the land. These heavy clay soils shrink during drought and swell after rain, which puts constant stress on tree root systems regardless of species. Pecans and hackberries are the dominant large trees in older Manor properties and along the creek corridors, and both species respond poorly to extended drought periods without supplemental water. If your pecan is dropping leaves early or showing dieback in the upper canopy, clay soil stress during the previous summer is often the contributing factor rather than disease.",
      "The SH-130 toll road and the growth it has brought to the Manor area over the past decade has resulted in a significant number of new subdivisions with younger tree populations. Neighborhoods like Whisper Valley, Shadowglen, and Briarcreek all have HOA requirements and development codes that affect tree removal and trimming near easements, drainage features, and shared green space. Trees planted during the construction phase of these developments are now entering a period where first structural pruning and assessment is worthwhile before they become large enough to create liability issues.",
      "If you are proactive about maintenance and assessment, you are already ahead of most of your neighbors and less likely to face an emergency removal at peak demand times after a storm.",
    ],
    neighborhoodsHeadline: "Manor Neighborhoods We Serve",
    neighborhoodsIntro:
      "Adam's Apple Tree Service covers Manor and eastern Travis County. Our South Austin base puts us roughly 20 miles from central Manor, and we run regular routes east through this corridor.",
    neighborhoods: [
      { name: "Shadowglen", description: "Large master-planned community in south Manor with HOA property standards, newer tree populations, and drainage green belts with tree preservation requirements." },
      { name: "Whisper Valley", description: "Newer eco-focused development with native plantings and specific landscape requirements tied to the community's sustainability standards." },
      { name: "Briarcreek", description: "Established residential neighborhood with a mix of older native trees and newer plantings on standard lots." },
      { name: "Manor town center area", description: "Older residential core with mature pecan and hackberry trees on larger lots. Trees in this area are often the largest on the property and benefit from regular structural assessment." },
      { name: "Hornsby Bend area", description: "Rural and semi-rural acreage properties along the Colorado River corridor with large native tree stands including pecan, cottonwood, and cedar elm." },
      { name: "Webberville road corridor", description: "Mixed residential and rural properties with varied tree populations and acreage lots that require different equipment than standard suburban work." },
    ],
    neighborhoodsFooter:
      "We also serve Pflugerville, Austin, Bastrop, and Round Rock. Not sure if we reach your address? Call or text 512-912-8733.",
    faqsHeadline: "Frequently Asked Questions — Manor Tree Service",
    faqs: [
      { q: "How much does tree removal cost in Manor, TX?", a: "Tree removal in Manor typically ranges from $300 to $2,000 depending on tree size, species, and access. Large pecans with wide surface root systems in clay soil run on the higher end. Call 512-912-8733 or use our Tree Removal Guesstimator for a free instant range before your on-site estimate." },
      { q: "What are the most common tree problems in Manor, TX?", a: "The most common issues we see in Manor are storm damage from high wind events, pecan and hackberry deadwood accumulation from drought stress, and oak wilt in live oak clusters on older properties and acreage land. Hackberry trees in particular tend to develop structural issues as they age in clay soils and are frequently the trees that come down in wind events." },
      { q: "When is it safe to trim oak trees in Manor, TX?", a: "July through January is the safe pruning window for live oaks in Manor. Avoid cuts from February 1 through June 30 when sap beetles are active across Travis County and can spread oak wilt through fresh cuts. Any emergency cuts during that window need to be sealed with wound sealant immediately." },
      { q: "Do you service rural and acreage properties in Manor?", a: "Yes. Several of our crew members work the east Austin and Manor corridor regularly. We service acreage properties along the Hornsby Bend area, Webberville road, and rural Travis County land east of Manor. Call us to confirm coverage and discuss equipment access for larger lot work." },
    ],
    ctaHeadline: "Get a Free Estimate in Manor, TX",
  },
  georgetown: {
    slug: "georgetown",
    name: "Georgetown",
    state: "TX",
    metaTitle: "Georgetown Tree Service | Removal, Trimming and Oak Wilt Care | Adam's Apple",
    metaDescription:
      "Tree service in Georgetown, TX. Tree removal, trimming, stump grinding, emergency service and oak wilt treatment. Free estimates. Call 512-912-8733.",
    heroEyebrow: "Georgetown, TX Tree Service",
    heroHeadline: "Georgetown Tree Service: Removal, Trimming and Oak Wilt Care for Williamson County Homeowners",
    heroSubhead:
      "ISA certified arborists serving Georgetown and Williamson County. Tree removal, trimming, emergency response, stump grinding and oak wilt treatment with flat-rate pricing and free on-site estimates.",
    servicesHeadline: "Tree Services We Provide in Georgetown, TX",
    services: [
      {
        title: "Tree Removal Georgetown, TX",
        body: "Georgetown's Sun City and Berry Creek communities have large established trees growing near driveways, rooflines, and HOA common areas. Many require permits under Georgetown's tree preservation ordinance before removal can proceed. We research your specific address requirements before quoting and handle the documentation if a permit is needed.",
        icon: TreePine,
        image: imgRemoval,
        href: "/services/tree-removal",
      },
      {
        title: "Tree Trimming Service Georgetown, TX",
        body: "The live oaks, cedar elms, and post oaks throughout Georgetown's established neighborhoods benefit from regular crown cleaning and structural pruning. Properties near the San Gabriel River corridor have trees with wider root systems that respond well to canopy reduction before high wind and ice seasons.",
        icon: Scissors,
        image: imgPruning,
        href: "/services/tree-pruning-trimming",
      },
      {
        title: "Emergency Tree Service Georgetown, TX",
        body: "Georgetown sees ice storms and wind events that bring down mature trees in Sun City, Wolf Ranch, and the older downtown neighborhoods. Call 512-912-8733 for same-day emergency response across Georgetown when storm damage creates a hazard on your property.",
        icon: AlertTriangle,
        image: imgEmergency,
        href: "/services/emergency",
      },
      {
        title: "Stump Grinding Georgetown, TX",
        body: "Georgetown sits on a mix of Blackland clay and limestone-based soils depending on the neighborhood. Stumps in clay-heavy areas can resprout if not ground deep enough. We clear the root crown and surrounding surface roots so the site is ready for whatever comes next.",
        icon: Trees,
        image: imgSoil,
      },
      {
        title: "Oak Wilt Treatment Georgetown, TX",
        body: "Georgetown's live oak populations in Cimarron Hills, Berry Creek, and the older residential areas near downtown are connected through root grafts that let oak wilt spread quickly across adjacent properties. The February through June pruning ban applies here the same as anywhere in Central Texas. Call us at the first sign of rapid leaf drop or browning from the tips inward.",
        icon: Sprout,
        image: imgPlanting,
      },
      {
        title: "Arborist Reports and Professional Services",
        body: "Georgetown has specific tree preservation rules that apply to residential and commercial properties, with additional HOA requirements in Sun City, Berry Creek, Teravista, and Cimarron Hills. We prepare written arborist reports for city permit applications, HOA approval processes, and insurance documentation so your project moves forward without delays.",
        icon: FileText,
        image: imgLegacy,
      },
    ],
    whyHeadline: "Why Georgetown Homeowners Choose Adam's Apple Tree Service",
    whyPoints: [
      {
        title: "Free 30-Min Site Visit",
        body: "Every Georgetown estimate includes a free on-site assessment with your arborist. We walk the property with you, look at every tree in question, and give you a written scope before any work is scheduled. No phone guesses, no surprises on job day.",
      },
      {
        title: "No Deposit Required",
        body: "We start when you are ready and you pay when the job is done and you are satisfied. Zero upfront commitment on any Georgetown tree service job, large or small.",
      },
      {
        title: "Transparent Flat-Rate Quotes",
        body: "Georgetown homeowners get a written quote with photos before we start. The number we give you is the number you pay. No add-ons, no pressure to expand scope beyond what you asked for.",
      },
    ],
    localInfoHeadline: "Tree Care in Georgetown, TX: What Homeowners Should Know",
    localInfoParagraphs: [
      "Georgetown sits at the northern edge of the Edwards Plateau where soil conditions shift between the limestone-based terrain of western Georgetown and the heavier Blackland clay soils in the eastern neighborhoods and around the San Gabriel River corridor. This distinction matters for tree care. Trees on limestone soils in areas like Cimarron Hills and the western Sun City sections have shallower root systems that are more exposed to drought stress, while trees in clay-heavy eastern neighborhoods near Wolf Ranch and the river corridor tend to hold water longer and face different drainage-related stress. Knowing which soil type your trees are in changes how we approach fertilization and long-term health planning.",
      "Georgetown has specific tree preservation rules that go beyond standard Williamson County requirements. Protected trees in Georgetown include live oaks, pecans, Texas ash, and other significant species above specific size thresholds. HOA communities including Sun City, Berry Creek, Teravista, and Cimarron Hills add their own layer of requirements on top of city rules. Sun City in particular has an active architectural committee that reviews tree work requests near common areas and property lines. We are familiar with the documentation these communities require and can confirm what applies to your specific address before any work is scheduled.",
      "Georgetown is a retirement community for a significant portion of its residents, and Geoff's experience working here reflects that. When Georgetown clients find a tree company they trust, they tend to stay. We do not recommend work your trees do not need, we do not expand scope without asking, and we provide written estimates with photos so there are no surprises. That approach has earned us repeat clients across the Austin metro for over 15 years.",
    ],
    neighborhoodsHeadline: "Georgetown Neighborhoods We Serve",
    neighborhoodsIntro:
      "Adam's Apple Tree Service covers Georgetown and surrounding Williamson County. Georgetown is roughly a 40-minute drive from our South Austin base, and we schedule Georgetown jobs in dedicated route days to keep pricing competitive for the distance.",
    neighborhoods: [
      { name: "Sun City", description: "Active adult community in western Georgetown with mature live oak canopies, HOA architectural committee requirements, and a high concentration of retired homeowners who prioritize trust and transparency in any contractor relationship." },
      { name: "Berry Creek", description: "Golf course community with protected trees, landscape requirements, and regular maintenance needs across both residential lots and course-adjacent properties." },
      { name: "Teravista", description: "Large master-planned development with mixed tree populations and HOA standards that apply to removal and trimming near easements and shared spaces." },
      { name: "Cimarron Hills", description: "Gated golf community in western Georgetown on limestone terrain. Properties here have trees growing in shallow soils that require different pruning and health approaches than the clay-soil neighborhoods to the east." },
      { name: "Georgetown Village", description: "Established residential area near downtown with older specimen trees and city ordinance requirements that apply to significant removals." },
      { name: "Wolf Ranch", description: "Master-planned community near I-35 with newer tree populations entering their first major maintenance cycle." },
      { name: "San Gabriel River corridor", description: "Properties along and near the river with native tree stands including pecan, cedar elm, and Texas ash. Flood zone considerations affect removal and grading work near the water." },
      { name: "Old Town Georgetown", description: "Historic downtown area with heritage trees and historic preservation considerations that affect what work can be done on significant specimens." },
    ],
    neighborhoodsFooter:
      "We also serve Round Rock, Cedar Park, Leander, and Austin. Not sure if we reach your street? Call or text 512-912-8733.",
    faqsHeadline: "Frequently Asked Questions: Georgetown Tree Service",
    faqs: [
      { q: "How much does tree removal cost in Georgetown, TX?", a: "Tree removal in Georgetown typically ranges from $300 to $2,500 depending on tree size, species, access, and whether a permit is required. Large live oaks near structures or in HOA common areas run on the higher end. Call 512-912-8733 or use our Tree Removal Guesstimator for a free instant range before your on-site estimate." },
      { q: "Does Georgetown require a permit to remove a tree?", a: "Georgetown has tree preservation rules that protect live oaks, pecans, Texas ash, and other significant species above certain size thresholds. HOA communities like Sun City, Berry Creek, and Cimarron Hills add their own approval requirements on top of city rules. We research the specific requirements for your address and handle the documentation before any removal work is scheduled." },
      { q: "When is it safe to trim oak trees in Georgetown, TX?", a: "July through January is the safe pruning window for live oaks in Georgetown. Avoid cuts from February 1 through June 30 when sap beetles are active and can carry oak wilt fungus into fresh wounds. Georgetown's oak populations in Cimarron Hills and Berry Creek are particularly at risk given the density of connected root systems in those neighborhoods." },
      { q: "Does Adam's Apple service Georgetown even though you are based in South Austin?", a: "Yes. Georgetown is a regular part of our service area and Geoff Oliver, our lead arborist, has worked in Georgetown neighborhoods for years. We schedule Georgetown jobs in dedicated route days which keeps our pricing straightforward. Call 512-912-8733 to confirm availability and scheduling for your address." },
    ],
    ctaHeadline: "Get a Free Estimate in Georgetown, TX",
  },
};
