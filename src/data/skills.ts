export interface SkillCategory {
  label: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    label: "Languages",
    items: [
      "Python",
      "Java",
      "C++",
      "Golang",
      "Rust",
      "JavaScript",
      "TypeScript",
      "SQL",
      "Scala",
      "C#",
      "R",
      "Swift",
    ],
  },
  {
    label: "Frameworks",
    items: [
      "React",
      "Next.js",
      "Spring Boot",
      "FastAPI",
      "Flask",
      "Node.js",
      "TensorFlow",
      "scikit-learn",
      "Apache Spark",
    ],
  },
  {
    label: "Tools",
    items: [
      "Git",
      "AWS",
      "Azure",
      "Docker",
      "Supabase",
      "PostgreSQL",
      "MongoDB",
      "Figma",
      "MATLAB",
      "Tableau",
      "Linux",
    ],
  },
];
