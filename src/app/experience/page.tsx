import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "experiences",
};

function IL({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-primary hover:text-secondary transition-colors inline-flex items-center gap-0.5"
    >
      {children}
      <svg
        width="10"
        height="10"
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

function B({ children }: { children: React.ReactNode }) {
  return <span className="font-semibold text-primary">{children}</span>;
}

export default function ExperiencePage() {
  return (
    <PageTransition>
      <div className="absolute inset-0 flex items-center px-10 md:px-16">
        <div className="w-full max-w-[42rem]">
          <p className="font-serif text-[0.72rem] text-tertiary mb-8 tracking-wider uppercase">
            experiences
          </p>

          <div className="space-y-6 font-serif text-[0.9375rem] leading-relaxed text-secondary">
            <p>
              built Python and C# microservices for SCADA-to-PMU telemetry at{" "}
              <IL href="https://www.dominionenergy.com">dominion energy</IL>.{" "}
            </p>
            <p>
              researching the empirics of market microstructure by building NYSE TAQ order books and
              simulating a real-time matching engine at{" "}
              <IL href="https://www.princeton.edu/">princeton</IL>
            </p>
            <p>
              built and presented for investors HIPAA-secure tools promoting social-impact health outcomes at{" "}
              <IL href="https://www.lambentdata.com/">lambent data</IL>.
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
