"use client"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const columns = [
  {
    accessorKey: "metric",
    header: "Metric",
  },
  {
    accessorKey: "start",
    header: "Start",
  },
  {
    accessorKey: "current",
    header: "current",
  },
  {
    accessorKey: "miniGoal",
    header: "Mini-goal",
  },
  {
    accessorKey: "goal",
    header: "Goal",
  },
  {
    accessorKey: "difference",
    header: "Difference",
  },
  {
    accessorKey: "progress",
    header: "Progress",
  },
];

const dummyData = [
  { metric: "Weight", start: 224, current: 219, miniGoal: 210, goal: 180, difference: 30, progress: -5 },
  { metric: "Body Fat %", start: `26%`, current: `25.9%`, miniGoal: `22%`, goal: `10%`, difference: `15.9%`, progress: `-.1%` },
  { metric: "Running Miles", start: 8.24, current: 7.34, miniGoal: 12, goal: 40, difference: 32.66, progress: -.9 },
  { metric: "Steps", start: 5559, current: 8417, miniGoal: 10000, goal: 15000, difference: -6583, progress: 2858 },
  { metric: "Sleep", start: '6hr 10m', current: '6hr 0m', miniGoal: '7hr', goal: '7hr', difference: '1hr', progress: '-10m' },
  { metric: "HRV", start: 33, current: 33, miniGoal: 35, goal: 40, difference: -7, progress: 0 },
];

function HealthDataTable() {
  const table = useReactTable({
    data: dummyData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-lg shadow-lg border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
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
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default HealthDataTable;
