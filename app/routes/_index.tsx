import type { MetaFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

interface University {
  name: string;
  url: string;
  coordinate?: string;
  tutionfee: number;
  housing: any;
  coa: number;
  rating: number;
  email: string;
  state: string;
}

const data: University[] = [
  {
    name: "Louisiana Tech University",
    url: "https://www.latech.edu/",
    coordinate:
      "https://www.google.com/maps/place/Louisiana+Tech+University/@32.5321092,-92.6398012,15z/data=!4m5!3m4!1s0x0:0x4a5d7d1f8f0d1f3b!8m2!3d32.5321092!4d-92.6398012",
    tutionfee: 13230,
    housing: 6795,
    coa: 21924,
    rating: 4,
    email: "international@latech.edu",
    state: "LA",
  },
  {
    name: "McNeese State University",
    url: "https://www.mcneese.edu/",
    coordinate:
      "https://www.google.com/maps/place/McNeese+State+University/@30.2249921,-93.2157577,15z/data=!4m5!3m4!1s0x0:0x5d2c8a0c6c0c0c0c!8m2!3d30.2249921!4d-93.2157577",
    tutionfee: 20000,
    housing: 10220,
    coa: 32020,
    rating: 3,
    email: "admissions@mcneese.edu",
    state: "LA",
  },
  {
    name: "City University of Seattle",
    url: "https://www.cityu.edu/",
    coordinate:
      "https://www.google.com/maps/place/City+University+of+Seattle/@47.6062095,-122.3320708,15z/data=!4m5!3m4!1s0x0:0x9d3970d975d1a9d5!8m2!3d47.6062095!4d-122.3320708",
    tutionfee: 25473,
    housing: 14824,
    coa: 45257,
    rating: 4,
    email: "admissions@cityu.edu",
    state: "WA",
  },
  {
    name: "Western Illinois University",
    url: "https://www.wiu.edu/",
    coordinate:
      "https://www.google.com/maps/place/Western+Illinois+University/@40.4693943,-90.6707294,15z/data=!4m5!3m4!1s0x0:0x8b7f9b5c1d6e6f3a!8m2!3d40.4693943!4d-90.6707294",
    tutionfee: 16160,
    housing: 10430,
    coa: 26590,
    rating: 3,
    email: "admissions@wiu.edu",
    state: "IL",
  },
  {
    name: "Arkansas Tech University",
    url: "https://www.atu.edu/",
    coordinate:
      "https://www.google.com/maps/place/Arkansas+Tech+University/@35.2839622,-93.1331382,15z/data=!4m5!3m4!1s0x0:0x8d6d7c3c3c3c3c3c!8m2!3d35.2839622!4d-93.1331382",
    tutionfee: 12187,
    housing: 9994,
    coa: 23431,
    rating: 4,
    email: "admissions@atu.edu",
    state: "AR",
  },
  {
    name: "Missouri State University",
    url: "https://www.missouristate.edu/",
    coordinate:
      "https://www.google.com/maps/place/Missouri+State+University/@37.2089713,-93.2914562,15z/data=!4m5!3m4!1s0x0:0xfb3e10d6e3c3c3c3!8m2!3d37.2089713!4d-93.2914562",
    tutionfee: 12042,
    housing: 10780,
    coa: 24222,
    rating: 4,
    email: "admissions@missouristate.edu",
    state: "MO",
  },
  {
    name: "University of Central Missouri",
    url: "https://www.ucmo.edu/",
    coordinate:
      "https://www.google.com/maps/place/University+of+Central+Missouri/@38.7461419,-93.7373395,15z/data=!4m5!3m4!1s0x0:0xfb3e10d6e3c3c3c3!8m2!3d38.7461419!4d-93.7373395",
    tutionfee: 8922,
    housing: 5400,
    coa: 15647,
    rating: 4,
    email: "admissions@ucmo.edu",
    state: "MO",
  },
  {
    name: "California State University, Chico",
    url: "https://www.csuchico.edu/",
    coordinate:
      "https://www.google.com/maps/place/California+State+University,+Chico/@39.7284152,-121.8374777,15z/data=!4m5!3m4!1s0x0:0x8b7f9b5c1d6e6f3a!8m2!3d39.7284152!4d-121.8374777",
    tutionfee: 16376,
    housing: 11314,
    coa: 31430,
    rating: 4,
    email: "admissions@csuchico.edu",
    state: "CA",
  },
  {
    name: "Lamar University",
    url: "https://www.lamar.edu/",
    coordinate:
      "https://www.google.com/maps/place/Lamar+University/@29.9930305,-94.0586193,15z/data=!4m5!3m4!1s0x0:0x8b7f9b5c1d6e6f3a!8m2!3d29.9930305!4d-94.0586193",
    tutionfee: 15698,
    housing: 9980,
    coa: 27952,
    rating: 4,
    email: "admissions@lamar.edu",
    state: "TX",
  },
  {
    name: "South Dakota State University",
    url: "https://www.sdstate.edu/",
    coordinate:
      "https://www.google.com/maps/place/South+Dakota+State+University/@44.3089151,-96.7806998,15z/data=!4m5!3m4!1s0x0:0x8d6d7c3c3c3c3c3c!8m2!3d44.3089151!4d-96.7806998",
    tutionfee: 11800,
    housing: 5800,
    coa: 23000,
    rating: 4,
    email: "admissions@sdstate.edu",
    state: "SD",
  },
  {
    name: "California State University, Bakersfield",
    url: "https://www.csub.edu/",
    coordinate:
      "https://www.google.com/maps/place/California+State+University,+Bakersfield/@35.3424692,-119.1021012,15z/data=!4m5!3m4!1s0x0:0xfb3e10d6e3c3c3c3!8m2!3d35.3424692!4d-119.1021012",
    tutionfee: 15610,
    housing: 7872,
    coa: 29000,
    rating: 4,
    email: "admissions@csub.edu",
    state: "CA",
  },
  {
    name: "University of North Florida",
    url: "https://www.unf.edu/",
    coordinate:
      "https://www.google.com/maps/place/University+of+North+Florida/@30.2733547,-81.5068651,15z/data=!4m5!3m4!1s0x0:0xfb3e10d6e3c3c3c3!8m2!3d30.2733547!4d-81.5068651",
    tutionfee: 20662,
    housing: 10230,
    coa: 30892,
    rating: 4,
    email: "admissions@unf.edu",
    state: "FL",
  },
  {
    name: "Park University",
    url: "https://www.park.edu/",
    coordinate:
      "https://www.google.com/maps/place/Park+University/@39.1433824,-94.6854092,15z/data=!4m5!3m4!1s0x0:0xfb3e10d6e3c3c3c3!8m2!3d39.1433824!4d-94.6854092",
    tutionfee: 7380,
    housing: 10000,
    coa: 19868,
    rating: 3,
    email: "admissions@park.edu",
    state: "MO",
  },
  {
    name: "Missouri State University",
    url: "https://www.missouristate.edu/",
    coordinate:
      "https://www.google.com/maps/place/Missouri+State+University/@37.2089713,-93.2914562,15z/data=!4m5!3m4!1s0x0:0xfb3e10d6e3c3c3c3!8m2!3d37.2089713!4d-93.2914562",
    tutionfee: 12042,
    housing: 10780,
    coa: 24222,
    rating: 4,
    email: "admissions@missouristate.edu",
    state: "MO",
  },
  {
    name: "University of Central Missouri",
    url: "https://www.ucmo.edu/",
    coordinate:
      "https://www.google.com/maps/place/University+of+Central+Missouri/@38.7461419,-93.7373395,15z/data=!4m5!3m4!1s0x0:0xfb3e10d6e3c3c3c3!8m2!3d38.7461419!4d-93.7373395",
    tutionfee: 8922,
    housing: 5400,
    coa: 15647,
    rating: 4,
    email: "admissions@ucmo.edu",
    state: "MO",
  },
  {
    name: "Caldwell University",
    url: "https://www.caldwell.edu/",
    coordinate:
      "https://www.google.com/maps/place/Caldwell+University/@40.8688,-74.2808,15z/data=!4m5!3m4!1s0x0:0xfb3e10d6e3c3c3c3!8m2!3d40.8688!4d-74.2808",
    tutionfee: 15798,
    housing: 6500,
    coa: 25441,
    rating: 3,
    email: "admissions@caldwell.edu",
    state: "NJ",
  },
];

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    {
      name: "description",
      content: "Welcome to Remix on Cloudflare!",
    },
  ];
};

const columnhelper = createColumnHelper<University>();

const columns = [
  columnhelper.accessor("name", {
    cell: (info) => info.getValue(),
    header: "Name",
  }),

  columnhelper.accessor((row) => row.url, {
    cell: (info) =>
      info.getValue() && (
        <Link
          target="_blank"
          className="underline cursor-pointer"
          to={info.getValue()!}
        >
          website
        </Link>
      ),
    header: "URL",
  }),
  columnhelper.accessor((row) => row.coordinate, {
    cell: (info) =>
      info.getValue() && (
        <Link
          target="_blank"
          className="cursor-pointer underline"
          to={info.getValue()!}
        >
          url
        </Link>
      ),
    header: "gmap",
  }),
  columnhelper.accessor("tutionfee", {
    cell: (info) => `${info.getValue() ? "$" : ""}${info.getValue()}`,
    header: "Tution Fee",
  }),
  columnhelper.accessor("housing", {
    cell: (info) => `${info.getValue() ? "$" : ""}${info.getValue()}`,
    header: "Housing",
  }),
  columnhelper.accessor("coa", {
    cell: (info) => `${info.getValue() ? "$" : ""}${info.getValue()}`,
    header: "COA",
  }),
  columnhelper.accessor("rating", {
    cell: (info) => info.getValue(),
    header: "Rating",
  }),
  columnhelper.accessor("email", {
    cell: (info) => (
      <span className="flex items-center gap-2">
        <a
          href={`mailto:${info.getValue()}`}
          className="underline cursor-pointer"
        >
          {info.getValue()}
        </a>
        <button
          className="text-sm text-gray-600 hover:text-gray-900"
          type="button"
          onClick={() => navigator.clipboard.writeText(info.getValue()!)}
        >
          copy
        </button>
      </span>
    ),
    header: "Email",
  }),
  columnhelper.accessor("state", {
    cell: (info) => info.getValue(),
    header: "State",
  }),
];

export default function Index() {
  const table = useReactTable({
    data: data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="font-serif flex items-center justify-center min-h-screen">
      <table className="table-auto">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="border border-gray-300 p-2 font-bold"
                >
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
        <tbody className="">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-b border-gray-300">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border border-gray-300 p-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="border border-gray-300 p-2 font-bold"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
}
