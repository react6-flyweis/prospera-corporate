"use client";

import {
  type ColumnDef,
  type ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type Table as ReactTable,
  type SortingState,
  useReactTable,
  type VisibilityState,
} from "@tanstack/react-table";
import { forwardRef, useImperativeHandle, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DataTablePagination } from "./DataTablePagination";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  searchableColumns?: {
    id: string;
    title: string;
  }[];
  showToolbar?: boolean;
  showPagination?: boolean;
  pageSize?: number;
}

function DataTableInner<TData, TValue>(
  {
    columns,
    data,
    //   searchableColumns,
    // showToolbar,
    showPagination = true,
    pageSize = 10, // Default page size
  }: DataTableProps<TData, TValue>,
  ref: React.ForwardedRef<ReactTable<TData>>
) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    initialState: {
      pagination: {
        pageSize,
      },
    },
  });

  useImperativeHandle(ref, () => table, [table]);
  const pageCount = table.getPageCount();
  // Pagination / row sizing helpers for rendering empty rows on the last page
  const rowModel = table.getRowModel();
  const rows = rowModel.rows ?? [];
  const rowsCount = rows.length;
  const pageSizeUsed = table.getState().pagination?.pageSize ?? pageSize;
  const pageIndex = table.getState().pagination?.pageIndex ?? 0;
  const isLastPage = pageCount > 0 && pageIndex === pageCount - 1;
  const emptyRows = isLastPage ? Math.max(0, pageSizeUsed - rowsCount) : 0;
  return (
    <div className="space-y-6">
      <div className="space-y-4 border shadow">
        {/* {showToolbar && (
        <DataTableToolbar searchableColumns={searchableColumns} table={table} />
      )} */}
        <div className="overflow-hidden">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow
                  className="h-12 bg-primary-gradient text-white hover:bg-primary"
                  key={headerGroup.id}
                >
                  {headerGroup.headers.map((header) => (
                    <TableHead className="px-5 text-white " key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {rowsCount ? (
                // Render data rows
                rows.map((row) => (
                  <TableRow className="h-12 py-2" key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell className="h-12 px-5 py-2" key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    className="h-24 text-center"
                    colSpan={columns.length}
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}

              {/* Render empty placeholder rows on the last page to keep table height consistent */}
              {emptyRows > 0 &&
                Array.from({ length: emptyRows }).map((_, i) => (
                  <TableRow className="h-12 py-2" key={`empty-row-${i}`}>
                    {// Use visible cells count from first data row if present, otherwise fallback to columns.length
                    (rows[0]?.getVisibleCells().length ?? columns.length) > 0 &&
                      Array.from({
                        length:
                          rows[0]?.getVisibleCells().length ?? columns.length,
                      }).map((__, j) => (
                        <TableCell
                          className="h-12 px-5 py-2"
                          key={`empty-cell-${i}-${j}`}
                        >
                          {/* non-breaking space keeps cell height while appearing empty */}
                          &nbsp;
                        </TableCell>
                      ))}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </div>
      {showPagination && pageCount > 1 && <DataTablePagination table={table} />}
    </div>
  );
}

export type DataTableRef<TData> = ReactTable<TData>;
const DataTable = forwardRef(DataTableInner) as <TData, TValue>(
  props: DataTableProps<TData, TValue> & {
    ref?: React.ForwardedRef<ReactTable<TData>>;
  }
) => ReturnType<typeof DataTableInner>;
export { DataTable };
