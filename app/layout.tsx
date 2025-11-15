import type { Metadata } from "next";
import { ThemeProvider } from '@/contexts/ThemeContext'
import ThemeScript from "./ThemeScript";
import "./globals.css";


export const metadata: Metadata = {
  title: "QuackStack",
  description: "Your cracked unpaid intern for all things codebase related!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body
        className='font-serif'
      >
        <ThemeScript/>
        <ThemeProvider>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
