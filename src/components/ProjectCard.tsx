import type { Project } from "@/data/projects";
import ExternalLink from "./ExternalLink";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="mb-6">
      <div className="flex flex-wrap items-baseline gap-x-2.5 mb-1.5">
        <p className="font-serif text-[0.9375rem] text-primary">
          {project.url ? (
            <ExternalLink href={project.url}>{project.name}</ExternalLink>
          ) : (
            project.name
          )}
        </p>
        <span className="font-sans text-[0.72rem] text-tertiary">{project.award}</span>
      </div>
      <div className="space-y-1">
        {project.bullets.map((bullet, i) => (
          <p key={i} className="font-serif text-[0.875rem] text-secondary">
            · {bullet}
          </p>
        ))}
      </div>
    </div>
  );
}
