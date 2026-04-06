type TagListProps = {
  tags: string[];
};

export function TagList({ tags }: TagListProps) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-slate-200">
          {tag}
        </span>
      ))}
    </div>
  );
}
