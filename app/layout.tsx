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
              console.log("ThemeScript running…");
              const saved = localStorage.getItem('quackstack-theme');
              console.log("Saved theme from localStorage:", saved);

              if (saved === 'light') {
                document.documentElement.classList.remove('dark');
                console.log("Removing dark class (light mode)");
              } else {
                document.documentElement.classList.add('dark');
                console.log("Adding dark class (default dark)");
              }
            } catch(e) {
              console.error("Error in ThemeScript:", e);
            }
          `}
        </Script>
      </head>

      <body className="font-serif bg-gray-900 text-white">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
