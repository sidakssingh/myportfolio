export interface Social {
  name: string;
  url: string;
  icon: "linkedin" | "github" | "email" | "x";
}

export const socials: Social[] = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/sidakssingh",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/sidakssingh",
    icon: "github",
  },
  {
    name: "Email",
    url: "mailto:sidaksingh@princeton.edu",
    icon: "email",
  },
  {
    name: "X",
    url: "https://x.com/sidakssingh",
    icon: "x",
  },
];
