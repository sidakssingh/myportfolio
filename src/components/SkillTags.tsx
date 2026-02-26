import { skills } from "@/data/skills";

export default function SkillTags() {
  return (
    <div className="space-y-4">
      {skills.map((category) => (
        <div key={category.label}>
          <p className="text-[0.75rem] font-sans text-tertiary mb-1.5">
            {category.label}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {category.items.map((item) => (
              <span
                key={item}
                className="text-[0.80rem] font-sans px-2.5 py-1 bg-primary/5 text-secondary rounded-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
