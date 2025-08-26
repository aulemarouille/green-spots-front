interface InfoListProps {
  title: string;
  items: string[];
}

export default function SpotInfoList({ title, items }: InfoListProps) {
  if (items.length === 0) return;

  return (
    <div>
      <p className="text-xs mb-1">{title}:</p>
      <div className="flex flex-wrap gap-1">
        {items.map((item, index) => (
          <span
            key={index}
            className="inline-block px-1 py-0.5 bg-(--bg-light) text-(--title-color) text-xs rounded-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
