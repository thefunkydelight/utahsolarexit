"use client";

type TickerProps = {
  items: readonly string[];
};

export function Ticker({ items }: TickerProps) {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden w-full max-w-2xl mx-auto">
      <div className="flex animate-ticker whitespace-nowrap gap-8" style={{ width: "max-content" }}>
        {doubled.map((item, i) => (
          <span key={i} className="text-sm text-[#858481] shrink-0">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
