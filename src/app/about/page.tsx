import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import SkillTags from "@/components/SkillTags";

export const metadata: Metadata = {
  title: "about",
  description:
    "About Sidak Singh — Princeton ECE student, builder, and researcher.",
};

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="px-6 md:px-16 pt-16 md:pt-24 pb-12 max-w-[42rem]">
        <PageHeader title="About" subtitle="the longer definition" />

        <div className="space-y-5 text-[0.9375rem] leading-relaxed text-secondary font-serif">
          <p>
            I&apos;m Sidak — a sophomore at Princeton pursuing a B.S.E. in
            Electrical and Computer Engineering with minors in Computer
            Science, Applied &amp; Computational Mathematics, Statistics &amp;
            Machine Learning, and Finance. Originally from the New York metro
            area, I came to Princeton drawn to the idea that the hardest
            problems live at the intersections of disciplines.
          </p>

          <p>
            My academic work reflects that cross-disciplinary pull. I&apos;m
            currently a research assistant in Professor Kastl&apos;s group,
            studying market microstructure — building order books from NYSE TAQ
            data, simulating matching engines, and tracing how correlated
            assets behave. The work sits at the exact intersection of
            computation, statistics, and economics that I find most compelling.
          </p>

          <p>
            Outside the classroom, I direct outreach for{" "}
            <span className="font-medium text-primary">Tigers in Product</span>{" "}
            under Princeton&apos;s E-Club, connecting students with SWE and PM
            roles at early-stage startups. I also help organize{" "}
            <span className="font-medium text-primary">Envision AI</span>, a
            student-led conference exploring the applications and implications
            of artificial intelligence. These communities matter to me — they&apos;re
            where I learn fastest and give back the most.
          </p>

          <p>
            I build things to understand them. That instinct has taken me from
            SCADA microservices at a Fortune 250 utility to protein folding
            platforms that won Y Combinator recognition. I care most about work
            that&apos;s technically demanding, has real stakes, and is done with
            people who push me to think differently.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="font-serif text-lg text-primary mb-4">Skills</h2>
          <SkillTags />
        </div>

        <div className="mt-12">
          <h2 className="font-serif text-lg text-primary mb-4">Education</h2>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-primary text-[0.9375rem]">
                Princeton University
              </p>
              <p className="text-[0.80rem] italic text-tertiary font-serif">
                B.S.E. Electrical &amp; Computer Engineering · 4.0 GPA · May
                2028
              </p>
              <p className="text-[0.8125rem] text-secondary mt-1">
                Shapiro Prize for Academic Merit (Top 3%). Minors in CS,
                Applied &amp; Computational Math, Statistics &amp; ML, and
                Finance.
              </p>
            </div>
            <div>
              <p className="font-semibold text-primary text-[0.9375rem]">
                Battlefield High School
              </p>
              <p className="text-[0.80rem] italic text-tertiary font-serif">
                Advanced Studies Diploma · 4.0 GPA
              </p>
              <p className="text-[0.8125rem] text-secondary mt-1">
                Summa Cum Laude. Early College Scholar Distinction. STEM,
                Science &amp; Environment, and CTE diploma seals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
