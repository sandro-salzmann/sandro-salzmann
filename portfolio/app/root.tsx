import "@fontsource-variable/material-symbols-rounded";
import "@fontsource-variable/onest/wght.css";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import { ReactNode } from "react";
import "./root.scss";

export const TITLE = "Sandro Salzmann";

export function Layout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
        <link rel="manifest" href="site.webmanifest" />
        <title>{TITLE}</title>
        <meta name="description" content="Sandro Salzmann's Portfolio" />
      </head>
      <body>
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
