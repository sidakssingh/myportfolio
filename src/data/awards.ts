export interface Award {
  title: string;
  issuer: string;
  url?: string;
}

export const competitionWins: Award[] = [
  {
    title: "1st place",
    issuer: "capital one hackathon",
    url: "https://github.com/sidakssingh/CapitalYou-Card",
  },
  {
    title: "y combinator award",
    issuer: "hackprinceton fall 2025",
    url: "https://github.com/rsingh135/ProteinArchitect",
  },
  {
    title: "best financial hack",
    issuer: "hackprinceton fall 2024",
    url: "https://github.com/sidakssingh/AsteroidAudit",
  },
  {
    title: "telora fellowship finalist",
    issuer: "hackprinceton spring 2025",
    url: "https://github.com/sidakssingh/NutriLens",
  },
  {
    title: "1st place",
    issuer: "northern virginia regional science fair",
    url: "https://github.com/sidakssingh/SanitaryDecomposition",
  },
  {
    title: "earth system science award",
    issuer: "nasa",
    url: "https://github.com/sidakssingh/SanitaryDecomposition",
  },
  {
    title: "environmental sustainability award",
    issuer: "epa",
    url: "https://github.com/sidakssingh/SanitaryDecomposition",
  },
];

export const academicHonors: Award[] = [
  { title: "shapiro prize for academic excellence", issuer: "princeton (top 3% of class)" },
  { title: "national merit scholar", issuer: "national merit scholarship corporation" },
  { title: "harvey olem scholarship ($3,000)", issuer: "water environment federation" },
  { title: "intern excellence scholarship (2,500)", issuer: "dominion energy" },
];
