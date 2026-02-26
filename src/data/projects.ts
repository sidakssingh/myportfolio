export interface Project {
  name: string;
  award: string;
  url?: string;
  bullets: string[];
}

export const projects: Project[] = [
  {
    name: "capitalyou",
    award: "1st place, capital one tech summit",
    url: "https://github.com/sidakssingh/CapitalYou-Card",
    bullets: [
      "ML-powered credit card optimizer tackling a $500M industry problem",
      "logistic regression assigns optimal point multipliers across 9+ categories without user input",
    ],
  },
  {
    name: "protein architect",
    award: "y combinator award, hackprinceton",
    url: "https://github.com/rsingh135/ProteinArchitect",
    bullets: [
      "transformer-based ESM2 model for protein-protein interaction prediction (77% F1)",
      "real-time 3D molecular views, voice Q&A, and AI-generated physics videos",
    ],
  },
  {
    name: "nutrilens",
    award: "telora fellowship finalist, hackprinceton",
    url: "https://github.com/sidakssingh/NutriLens",
    bullets: [
      "AI pipeline: food identification, recipe recs, carbon footprint scoring",
      "swift mobile app mapping nearby eco-friendly stores via Core Location",
    ],
  },
  {
    name: "asteroid audit",
    award: "best financial hack, hackprinceton",
    url: "https://github.com/sidakssingh/AsteroidAudit",
    bullets: [
      "gamified tax and finance education in C# and Unity",
      "tax and investments calculator with visual breakdowns via QuickChart API",
    ],
  },
];
