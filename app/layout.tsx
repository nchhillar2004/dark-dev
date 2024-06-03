import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Header from "@/components/Header";
import { dark, neobrutalism } from "@clerk/themes";

const font = Lato({
  weight: "400",
  subsets: ["latin"],
});

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
        <body className={font.className} suppressHydrationWarning>
          <Header />
          <main className="h-fit pt-[80px]">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
