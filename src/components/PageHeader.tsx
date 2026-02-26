interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="mb-10">
      <h1 className="font-serif text-[2.75rem] leading-tight text-primary">
        {title}
      </h1>
      {subtitle && (
        <p className="text-[0.85rem] italic text-tertiary font-serif mt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
}
