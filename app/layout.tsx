import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Header from "@/components/Header";
import { dark } from "@clerk/themes";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dark Dev",
  description: "Unveiling the Hidden Knowledge.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: [dark],
      }}
    >
      <html lang="en">
        <body suppressHydrationWarning>
          <Header />
          <main className="h-fit pt-[80px]">{children}</main>
          <Footer/>
        </body>
      </html>
    </ClerkProvider>
  );
}
