import { cn } from "@/lib/utils";

type SegmentedItem = {
  value: string;
  label: React.ReactNode;
};

interface SegmentedProps {
  items: SegmentedItem[];
  value: string;
  onChange: (v: string) => void;
  className?: string;
}

export function Segmented({
  items,
  value,
  onChange,
  className,
}: SegmentedProps) {
  return (
    <div
      className={cn("inline-flex items-center gap-4", className)}
      role="radiogroup"
    >
      {items.map((it) => {
        const active = it.value === value;
        return (
          <button
            key={it.value}
            role="radio"
            aria-checked={active}
            type="button"
            onClick={() => onChange(it.value)}
            className={cn(
              "flex items-center gap-2 rounded-full p-1 text-sm font-medium transition-colors",
              active ? "text-primary" : "text-muted-foreground"
            )}
          >
            <span
              className={cn(
                "h-5 w-5 rounded-full flex items-center justify-center border",
                active
                  ? "border-primary bg-primary/10"
                  : "border-muted-foreground/40"
              )}
            >
              <span
                className={cn(
                  "h-2.5 w-2.5 rounded-full",
                  active ? "bg-primary" : "bg-transparent"
                )}
              ></span>
            </span>
            <span>{it.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export default Segmented;
