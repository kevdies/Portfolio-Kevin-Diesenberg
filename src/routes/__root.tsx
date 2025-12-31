import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  ScriptOnce,
  Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import type { QueryClient } from "@tanstack/react-query";
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
        href: "/favicon.ico",
      },
    ],
  }),
  component: RootComponent,
});

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
        {import.meta.env.DEV && <TanStackRouterDevtools position="bottom-right" />}
      </body>
    </html>
  );
}
