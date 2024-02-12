import "@/styles/globals.css";
import { Noto_Sans_Thai as FontSans } from "next/font/google";

import MainHeader from "@/components/layout/Header";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
