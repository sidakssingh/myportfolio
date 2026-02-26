import type { Experience } from "@/data/experiences";
import ExternalLink from "./ExternalLink";

interface ExperienceBlockProps {
  experience: Experience;
}

export default function ExperienceBlock({ experience }: ExperienceBlockProps) {
  return (
    <div className="mb-6">
      <p className="font-serif text-[0.9375rem] text-primary mb-1.5">
        {experience.url ? (
          <ExternalLink href={experience.url}>{experience.company}</ExternalLink>
        ) : (
          experience.company
        )}
      </p>
      <div className="space-y-1">
        {experience.bullets.map((bullet, i) => (
          <p key={i} className="font-serif text-[0.875rem] text-secondary">
            · {bullet}
          </p>
        ))}
      </div>
    </div>
  );
}
