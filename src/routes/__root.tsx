import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  ScriptOnce,
  Scripts,
} from "@tanstack/react-router";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import type { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { MainLayout } from "@/components/layout/main-layout";
import appCss from "@/styles/app.css?url";

interface RouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Kevin Diesenberg | Software Engineer",
      },
      {
        name: "description",
        content:
          "Full-stack software engineer specializing in React, TypeScript, and modern web technologies.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFound,
});

function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-foreground">404</h1>
      <p className="mt-2 text-muted-foreground">Page not found</p>
      <a
        href="/"
        className="mt-4 text-sm text-brand-primary hover:underline"
      >
        Back to home
      </a>
    </div>
  );
}

function RootComponent() {
  return (
    <RootDocument>
      <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
        <TooltipProvider>
          <MainLayout>
            <Outlet />
          </MainLayout>
        </TooltipProvider>
        <Analytics />
        <SpeedInsights />
      </ThemeProvider>
    </RootDocument>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ScriptOnce>
          {`document.documentElement.classList.toggle(
            'dark',
            localStorage.getItem('portfolio-theme') === 'dark' ||
            (localStorage.getItem('portfolio-theme') !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches)
          )`}
        </ScriptOnce>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
        {import.meta.env.DEV && (
          <TanStackDevtools
            config={{
              position: "bottom-right",
              theme: "dark",
              defaultOpen: false,
            }}
            plugins={[
              {
                id: "tanstack-query",
                name: "TanStack Query",
                render: <ReactQueryDevtoolsPanel />,
                defaultOpen: true,
              },
              {
                id: "tanstack-router",
                name: "TanStack Router",
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          />
        )}
      </body>
    </html>
  );
}
