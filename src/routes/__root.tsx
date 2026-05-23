import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <div dir="rtl" className="flex min-h-screen items-center justify-center bg-surface px-4">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-black text-gradient-cyan">404</h1>
        <h2 className="mt-4 text-2xl font-bold text-white">الصفحة غير موجودة</h2>
        <p className="mt-2 text-sm text-white/60">قد يكون الرابط منتهي الصلاحية أو منقولاً.</p>
        <Link to="/" className="mt-6 inline-flex gradient-cyan text-black px-6 py-3 text-sm font-black tracking-wider">العودة للرئيسية</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "تكنو دور | TECHNODOOR — أبواب أوتوماتيكية عالمية" },
      { name: "description", content: "تكنو دور (TECHNODOOR) — أكثر من 50 عاماً من الريادة في الأبواب الأوتوماتيكية العالمية: رولينج شاتر، أبواب جرّار ومفصلية، سبيد دور، حواجز وشيش الحصيرة." },
      { name: "author", content: "TECHNODOOR" },
      { property: "og:site_name", content: "TECHNODOOR" },
      { property: "og:title", content: "تكنو دور | TECHNODOOR" },
      { property: "og:description", content: "أبواب أوتوماتيكية عالمية بخبرة 50+ سنة." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "theme-color", content: "#0e0e0e" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "TECHNODOOR — تكنو دور",
          url: "https://techno-door.com",
          email: "admin@techno-door.com",
          foundingDate: "1970",
          areaServed: ["EG", "SY", "SD", "LY"],
          sameAs: ["https://www.facebook.com/techhnoodoor99"],
        }),
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <HeadContent />
      </head>
      <body className="bg-surface text-white">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-surface">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
