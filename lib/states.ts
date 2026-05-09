export type StateData = {
  slug: string;
  name: string;
  abbr: string;
  city: string;
  blurb: string;
};

export const STATES: StateData[] = [
  {
    slug: "utah",
    name: "Utah",
    abbr: "UT",
    city: "Salt Lake City",
    blurb:
      "Solar Exit Utah helps Utah homeowners escape unfair solar contracts. Based in Salt Lake City, we serve homeowners across the entire state — from St. George to Logan.",
  },
  {
    slug: "arizona",
    name: "Arizona",
    abbr: "AZ",
    city: "Phoenix",
    blurb:
      "Thousands of Arizona homeowners are trapped in unfair solar contracts. Solar Exit Utah connects Arizona residents with trusted professionals to exit solar leases and PPAs.",
  },
  {
    slug: "nevada",
    name: "Nevada",
    abbr: "NV",
    city: "Las Vegas",
    blurb:
      "Nevada homeowners facing solar contract issues deserve expert help. Solar Exit Utah works with Nevada residents to explore every legal exit option available.",
  },
  {
    slug: "california",
    name: "California",
    abbr: "CA",
    city: "Los Angeles",
    blurb:
      "California leads the nation in solar installations — and solar contract complaints. Solar Exit Utah helps California homeowners identify and pursue legitimate contract exit strategies.",
  },
  {
    slug: "colorado",
    name: "Colorado",
    abbr: "CO",
    city: "Denver",
    blurb:
      "Colorado homeowners stuck in unfair solar agreements can get help. Solar Exit Utah connects Colorado residents with professionals who specialize in solar contract cancellation.",
  },
  {
    slug: "idaho",
    name: "Idaho",
    abbr: "ID",
    city: "Boise",
    blurb:
      "Idaho homeowners dealing with predatory solar contracts have options. Solar Exit Utah helps Idaho residents review their agreements and find a path to freedom.",
  },
  {
    slug: "texas",
    name: "Texas",
    abbr: "TX",
    city: "Houston",
    blurb:
      "Texas has seen a surge in solar contract complaints. Solar Exit Utah connects Texas homeowners with consumer protection professionals to exit unfair solar agreements.",
  },
  {
    slug: "florida",
    name: "Florida",
    abbr: "FL",
    city: "Orlando",
    blurb:
      "Florida homeowners are frequently targeted by aggressive solar sales tactics. Solar Exit Utah helps Florida residents understand their rights and options for contract cancellation.",
  },
  {
    slug: "georgia",
    name: "Georgia",
    abbr: "GA",
    city: "Atlanta",
    blurb:
      "Georgia homeowners trapped in solar leases and PPAs deserve a way out. Solar Exit Utah connects Georgia residents with professionals who can help.",
  },
  {
    slug: "north-carolina",
    name: "North Carolina",
    abbr: "NC",
    city: "Charlotte",
    blurb:
      "North Carolina's growing solar market comes with growing contract disputes. Solar Exit Utah helps NC homeowners review their contracts and pursue legal exit strategies.",
  },
  {
    slug: "oregon",
    name: "Oregon",
    abbr: "OR",
    city: "Portland",
    blurb:
      "Oregon homeowners facing unfair solar contracts can get expert guidance. Solar Exit Utah works with Oregon residents to identify exit paths and connect them with the right professionals.",
  },
  {
    slug: "washington",
    name: "Washington",
    abbr: "WA",
    city: "Seattle",
    blurb:
      "Washington state homeowners stuck in problematic solar agreements have options. Solar Exit Utah helps Washington residents find legal pathways to contract freedom.",
  },
  {
    slug: "new-mexico",
    name: "New Mexico",
    abbr: "NM",
    city: "Albuquerque",
    blurb:
      "New Mexico homeowners dealing with solar contract issues can get help. Solar Exit Utah connects New Mexico residents with trusted professionals for contract review and exit.",
  },
  {
    slug: "hawaii",
    name: "Hawaii",
    abbr: "HI",
    city: "Honolulu",
    blurb:
      "Hawaii's high energy costs make solar attractive — but also make predatory contracts common. Solar Exit Utah helps Hawaii homeowners escape unfair solar agreements.",
  },
  {
    slug: "virginia",
    name: "Virginia",
    abbr: "VA",
    city: "Richmond",
    blurb:
      "Virginia homeowners facing solar contract problems deserve expert help. Solar Exit Utah connects Virginia residents with professionals who specialize in solar contract cancellation.",
  },
  {
    slug: "ohio",
    name: "Ohio",
    abbr: "OH",
    city: "Columbus",
    blurb:
      "Ohio homeowners trapped in solar leases or PPAs can explore their options. Solar Exit Utah helps Ohio residents review their contracts and find legitimate exit strategies.",
  },
  {
    slug: "illinois",
    name: "Illinois",
    abbr: "IL",
    city: "Chicago",
    blurb:
      "Illinois homeowners stuck in unfair solar contracts have options. Solar Exit Utah connects Illinois residents with consumer protection professionals for contract cancellation.",
  },
  {
    slug: "pennsylvania",
    name: "Pennsylvania",
    abbr: "PA",
    city: "Philadelphia",
    blurb:
      "Pennsylvania homeowners dealing with problematic solar agreements can get expert guidance. Solar Exit Utah helps PA residents identify and pursue every available exit option.",
  },
  {
    slug: "new-york",
    name: "New York",
    abbr: "NY",
    city: "New York City",
    blurb:
      "New York homeowners facing unfair solar contracts deserve a clear path forward. Solar Exit Utah connects New York residents with professionals who can help them exit.",
  },
  {
    slug: "new-jersey",
    name: "New Jersey",
    abbr: "NJ",
    city: "Newark",
    blurb:
      "New Jersey has one of the highest rates of solar adoption — and solar contract complaints. Solar Exit Utah helps NJ homeowners review their options and find a way out.",
  },
];

export function getStateBySlug(slug: string): StateData | undefined {
  return STATES.find((s) => s.slug === slug);
}
