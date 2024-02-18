import Footer from "@/components/layout/Footer";
import MainHeader from "@/components/layout/Header";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { notFound } from "next/navigation";

import { useLocale } from "next-intl";
import {
  Noto_Sans_Thai as FontSans,
  Noto_Sans,
  Roboto,
} from "next/font/google";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const natoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--nato-sans",
});

const robotoFont = Roboto({
  subsets: ["latin"],
  variable: "--roboto",
  weight: ["300", "400", "500", "700"],
});

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const l = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (locale !== l) {
    notFound();
  }
  return (
    <html lang={locale} suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          natoSans.variable,
          robotoFont.variable
        )}
        style={{
          pointerEvents: "inherit",
        }}
      >
        <MainHeader />
        <main className=" pt-[81px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
