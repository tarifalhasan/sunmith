import MainHeader from "@/components/layout/Header";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Noto_Sans_Thai as FontSans, Noto_Sans } from "next/font/google";
import { ReactNode } from "react";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const natoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--nato-sans",
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
          fontSans.variable,
          natoSans.variable
        )}
      >
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
