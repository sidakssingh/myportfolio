import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import { projects } from "@/data/projects";
import ExternalLink from "@/components/ExternalLink";

export const metadata: Metadata = {
  title: "projects",
};

export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="absolute inset-0 flex items-center px-10 md:px-16">
        <div className="w-full max-w-[42rem]">
          <p className="font-serif text-[0.72rem] text-tertiary mb-8 tracking-wider uppercase">
            projects
          </p>

          <div className="space-y-6">
            {projects.map((project) => (
              <div key={project.name}>
                <div className="flex flex-wrap items-baseline gap-x-2.5 mb-1.5">
                  <p className="font-serif text-[1rem] text-primary">
                    {project.url ? (
                      <ExternalLink href={project.url}>{project.name}</ExternalLink>
                    ) : (
                      project.name
                    )}
                  </p>
                  <span className="font-sans text-[0.72rem] text-tertiary">
                    {project.award}
                  </span>
                </div>
                <div className="space-y-0.5">
                  {project.bullets.map((bullet, i) => (
                    <p key={i} className="font-serif text-[0.9375rem] text-secondary">
                      · {bullet}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
