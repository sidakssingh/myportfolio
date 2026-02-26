import Link from "next/link";

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}

export default function ExternalLink({
  href,
  children,
  external = true,
  className = "",
}: ExternalLinkProps) {
  const baseClasses =
    "group inline-flex items-center font-semibold text-primary hover:text-secondary transition-colors duration-200";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${className}`}
      >
        {children}
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-1 transition-transform duration-200 group-hover:-translate-y-0.5"
        >
          <path d="M7 17L17 7M7 7h10v10" />
        </svg>
      </a>
    );
  }

  return (
    <Link href={href} className={`${baseClasses} ${className}`}>
      {children}
    </Link>
  );
}
