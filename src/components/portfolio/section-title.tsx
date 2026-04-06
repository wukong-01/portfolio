type SectionTitleProps = {
  title: string;
  hint?: string;
};

export function SectionTitle({ title, hint }: SectionTitleProps) {
  return (
    <div className="flex items-end justify-between gap-4">
      <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
      {hint ? <p className="text-sm text-slate-400">{hint}</p> : null}
    </div>
  );
}
