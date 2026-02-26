export interface Experience {
  company: string;
  url?: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    company: "princeton university",
    bullets: [
      "research assistant with prof. kastl on market microstructure",
      "building NYSE TAQ order books and simulating a real-time matching engine",
    ],
  },
  {
    company: "dominion energy",
    url: "https://www.dominionenergy.com",
    bullets: [
      "built Python and C# microservices for SCADA-to-PMU telemetry (fortune 250)",
      "automated CI/CD in Azure DevOps, 99.9%+ system uptime",
    ],
  },
  {
    company: "carolina direct auto",
    bullets: [
      "spring boot referral backend driving $130K in car sales",
      "react dashboards with PostgreSQL for tamper-free payout tracking",
    ],
  },
  {
    company: "lambent data",
    url: "https://www.lambentdata.com",
    bullets: [
      "HIPAA-secure AI tools for social-impact health outcomes",
    ],
  },
];
