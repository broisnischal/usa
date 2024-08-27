import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

type University = {
  domains: string[];
  state_province: string | null;
  country: string;
  web_pages: string[];
  name: string;
  alpha_two_code: string;
};

export async function loader() {
  const response = await fetch(
    "http://universities.hipolabs.com/search?country=United%20States"
  );
  const result: University[] = await response.json();

  return json({ result });
}

import { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  SortingState,
} from "@tanstack/react-table";
import { createColumnHelper } from "@tanstack/react-table";

export default function Index() {
  const { result } = useLoaderData<typeof loader>();
  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState<SortingState>([]);

  const filteredData = result.filter((university) =>
    university.name.toLowerCase().includes(search.toLowerCase())
  );

  const columnHelper = createColumnHelper<University>();

  const columns = [
    columnHelper.accessor("name", {
      header: "Name",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("web_pages", {
      header: "Website",
      cell: (info) => (
        <a href={info.getValue()[0]} target="_blank" rel="noopener noreferrer">
          {info.getValue()}
        </a>
      ),
    }),
  ];

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: { sorting },
    onSortingChange: setSorting,
  });

  return (
    <div>
      <h1>Universities</h1>
      {/* <input
        type="text"
        placeholder="search"
        className="border mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      /> */}
      <table className="table-auto w-full border">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="border p-2">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-t">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border p-2">
                  {/* {cell.renderCell({})} */}
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
