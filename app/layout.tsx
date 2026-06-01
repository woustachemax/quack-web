import type { Metadata } from "next";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "QuackStack",
  description: "Your cracked unpaid intern for all things codebase related!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" />

        <Script id="theme-script" strategy="beforeInteractive">
          {`
            try {
              const saved = localStorage.getItem('quackstack-theme');
              if (saved === 'dark') {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            } catch(e) {}
          `}
        </Script>
      </head>

      <body className="font-serif bg-stone-50 text-stone-900">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}