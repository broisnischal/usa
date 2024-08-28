import {
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="">
        <Navbar />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function Navbar() {
  return (
    <nav className="py-2">
      <ul className="flex items-center justify-center gap-4">
        <li>
          <NavLink className="" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="" to="document">
            Documents
          </NavLink>
        </li>
        <li>
          <NavLink className="" to="universities">
            Universitites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
