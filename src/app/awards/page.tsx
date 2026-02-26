import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import { competitionWins, academicHonors } from "@/data/awards";

export const metadata: Metadata = {
  title: "awards",
};

function AwardLink({
  url,
  children,
}: {
  url?: string;
  children: React.ReactNode;
}) {
  if (!url) return <>{children}</>;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-0.5 text-primary hover:text-secondary transition-colors"
    >
      {children}
      <svg
        width="9"
        height="9"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="inline-block shrink-0"
      >
        <path d="M7 17L17 7M7 7h10v10" />
      </svg>
    </a>
  );
}

export default function AwardsPage() {
  return (
    <PageTransition>
      <div className="absolute inset-0 flex items-center px-10 md:px-16">
        <div className="w-full max-w-[42rem]">
          <p className="font-serif text-[0.72rem] text-tertiary mb-8 tracking-wider uppercase">
            awards
          </p>

          <div className="flex gap-16">
            <div>
              <p className="font-serif text-[0.72rem] text-tertiary mb-3 tracking-wide">
                competitions
              </p>
              <div className="space-y-3">
                {competitionWins.map((award) => (
                  <div key={`${award.title}-${award.issuer}`}>
                    <p className="font-serif text-[0.9375rem] text-primary">
                      <AwardLink url={award.url}>{award.title}</AwardLink>
                    </p>
                    <p className="font-serif text-[0.8125rem] text-secondary">
                      {award.issuer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="font-serif text-[0.72rem] text-tertiary mb-3 tracking-wide">
                academic
              </p>
              <div className="space-y-3">
                {academicHonors.map((award) => (
                  <div key={`${award.title}-${award.issuer}`}>
                    <p className="font-serif text-[0.9375rem] text-primary">
                      {award.title}
                    </p>
                    <p className="font-serif text-[0.8125rem] text-secondary">
                      {award.issuer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
