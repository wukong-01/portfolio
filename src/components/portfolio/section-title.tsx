type SectionTitleProps = {
  title: string;
  hint?: string;
};

export function SectionTitle({ title, hint }: SectionTitleProps) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">{title}</h2>
      {hint ? <p className="mt-2 text-sm text-slate-500">{hint}</p> : null}
    </div>
  );
}
