import type { Column } from "@tanstack/react-table";
import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";

/**
 * ColumnHeader
 * This component is intended to be used as the `header` render for a column
 * via `flexRender(header.column.columnDef.header, header.getContext())` where
 * the header value is a function that receives the header context.
 *
 * It expects the header context object from TanStack and uses the column
 * helpers to show sort state and toggle sorting.
 */
export function ColumnHeader(props: any) {
  // props is the header context passed by `header.getContext()` via flexRender
  const column: Column<any, any> | undefined = props.column;

  const canSort = !!column?.getCanSort?.();
  const sorted = column?.getIsSorted ? column.getIsSorted() : false; // false | 'asc' | 'desc'
  const toggle = column?.getToggleSortingHandler?.();

  const renderTitle = () => {
    // Prefer using the column header renderer if it's a React node/JSX
    const headerDef = column?.columnDef?.header;
    // If headerDef is a function or JSX, we let flexRender handle it upstream.
    // Here we only render simple values when this component is used directly.
    if (typeof headerDef === "string" || typeof headerDef === "number") {
      return headerDef;
    }
    // fallback: use props.title or column.id
    return props.title ?? column?.id ?? null;
  };

  return (
    <div className="flex items-center justify-between gap-2">
      <button
        type="button"
        className="flex items-center gap-2 w-full text-left px-2 py-1 text-sm font-medium"
        onClick={canSort ? toggle : undefined}
        aria-sort={
          sorted === "asc"
            ? "ascending"
            : sorted === "desc"
            ? "descending"
            : "none"
        }
        title={canSort ? "Toggle sort" : undefined}
      >
        <span className="truncate">{renderTitle()}</span>
        <span className="ml-2 inline-flex items-center">
          {sorted === "asc" ? (
            <ArrowUp size={16} aria-hidden />
          ) : sorted === "desc" ? (
            <ArrowDown size={16} aria-hidden />
          ) : (
            <ArrowUpDown size={16} className="opacity-60" aria-hidden />
          )}
        </span>
      </button>
    </div>
  );
}
