import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import ErrorLayout from "./layouts/ErrorLayout";
import "./app.css";
import avatar from "/avatar.png";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Developer Portfolio | Achintha Dilshan" },
    {
      name: "description",
      content:
        "I'm Achintha, a web developer passionate about crafting clean, scalable web applications that deliver exceptional performance and a delightful user experience.",
    },
    {
      property: "og:title",
      content: "Developer Portfolio | Achintha Dilshan",
    },
    {
      property: "og:description",
      content:
        "I'm Achintha, a web developer passionate about crafting clean, scalable web applications that deliver exceptional performance and a delightful user experience.",
    },
    {
      property: "og:image",
      content: avatar,
    },
  ];
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-zinc-900">
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

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <ErrorLayout>
      <div className="mx-auto self-center">
        <div className="text-center flex flex-col items-center gap-2 max-w-96">
          <h1 className="text-7xl sm:text-9xl font-bold text-white/30">
            {message}
          </h1>
          <p className="text-white/30  text-xl">{details}</p>
          {stack && (
            <pre className="w-full p-4 overflow-x-auto">
              <code>{stack}</code>
            </pre>
          )}
        </div>
      </div>
    </ErrorLayout>
  );
}
