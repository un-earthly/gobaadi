import type { Metadata, Viewport } from "next";
import "./globals.css";
import { inter, spaceGrotesk, notoBengali, audiowide, tuskerGrotesk } from "@/lib/fonts";
import { baseMetadata } from "@/lib/metadata";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipNav } from "@/components/layout/SkipNav";
import { OrganizationSchema, WebSiteSchema } from "@/components/shared/JsonLd";

export const metadata: Metadata = baseMetadata;

export const viewport: Viewport = {
  themeColor: "#C0612B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${notoBengali.variable} ${audiowide.variable} ${tuskerGrotesk.variable} antialiased`}
    >
      <body className="flex min-h-dvh flex-col bg-surface">
        <SkipNav />
        <OrganizationSchema />
        <WebSiteSchema />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
