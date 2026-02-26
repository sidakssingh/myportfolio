import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "leadership",
};

function B({ children }: { children: React.ReactNode }) {
  return <span className="font-semibold text-primary">{children}</span>;
}

export default function LeadershipPage() {
  return (
    <PageTransition>
      <div className="absolute inset-0 flex items-center px-10 md:px-16">
        <div className="w-full max-w-[42rem]">
          <p className="font-serif text-[0.72rem] text-tertiary mb-8 tracking-wider uppercase">
            leadership
          </p>

          <div className="space-y-6 font-serif text-[0.9375rem] leading-relaxed text-secondary">
            <p>
              director of <B>tigers in product</B>, outreach under princeton&apos;s
              550+ member E-Club. connecting students with SWE and PM roles at
              early-stage startups.
            </p>
            <p>
              director of <B>envision AI</B>, a student-led AI conference with 6
              industry speakers and 100+ attendees. weekly seminars on
              reinforcement learning, NLP, and computer vision.
            </p>
            <p>
              finance assistant at <B>princeton autonomous vehicle engineering</B>,
              supporting princeton&apos;s self-driving systems team.
            </p>
            <p>
              vice president of <B>sikhs of princeton</B>, building community
              and cultural awareness through campus programming.
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
