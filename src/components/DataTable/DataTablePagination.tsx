import type { Table } from "@tanstack/react-table";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  return (
    <div className="flex justify-center items-center space-x-6">
      {/* Page number pagination (redesigned) */}
      <div className="flex items-center space-x-4">
        <button
          aria-label="Previous page"
          className="flex items-center space-x-2 text-base text-gray-700 disabled:opacity-40"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          type="button"
        >
          <ChevronLeftIcon className="w-4 h-4" />
          <span className="hidden sm:inline text-sm">Previous</span>
        </button>

        {/* page pills */}
        {(() => {
          const pageCount = table.getPageCount();
          const pageIndex = table.getState().pagination.pageIndex;
          const buttons: React.ReactNode[] = [];

          // Always show first page
          const pushPage = (i: number, isCurrent = false) => {
            // Square buttons: fixed width & height so active doesn't resize.
            // Inactive buttons get a subtle gray background (`bg-gray-100`).
            const base =
              "flex items-center justify-center rounded-sm w-10 h-10 font-medium text-sm border border-transparent bg-gray-100 text-gray-700";
            const currentClass =
              "flex items-center justify-center rounded-sm w-10 h-10 font-medium text-sm bg-primary-gradient text-white border-transparent";

            buttons.push(
              <button
                key={i}
                aria-current={isCurrent ? "page" : undefined}
                className={isCurrent ? currentClass : base}
                onClick={() => table.setPageIndex(i)}
                type="button"
              >
                {i + 1}
              </button>
            );
          };

          if (pageCount <= 7) {
            for (let i = 0; i < pageCount; i++) {
              pushPage(i, pageIndex === i);
            }
          } else {
            // first
            pushPage(0, pageIndex === 0);

            const left = Math.max(1, pageIndex - 1);
            const right = Math.min(pageCount - 2, pageIndex + 1);

            if (left > 1) {
              buttons.push(
                <span key="left-ellipsis" className="px-2 text-gray-500">
                  …
                </span>
              );
            }

            for (let i = left; i <= right; i++) {
              pushPage(i, pageIndex === i);
            }

            if (right < pageCount - 2) {
              buttons.push(
                <span key="right-ellipsis" className="px-2 text-gray-500">
                  …
                </span>
              );
            }

            // last
            pushPage(pageCount - 1, pageIndex === pageCount - 1);
          }

          return <div className="flex items-center space-x-2">{buttons}</div>;
        })()}

        <button
          aria-label="Next page"
          className="flex items-center space-x-2 text-base text-gray-700 disabled:opacity-40"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          type="button"
        >
          <span className="hidden sm:inline text-sm">Next</span>
          <ChevronRightIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
