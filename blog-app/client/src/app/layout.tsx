import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProviderWrapper from "@/components/providers/ThemeProviderWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Buddha Wisdom",
  description: "Buddha Wisdom Blog using NextJS, Express, Mongoose",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProviderWrapper>
        <body suppressHydrationWarning className={inter.className}>
          {children}
        </body>
      </ThemeProviderWrapper>
    </html>
  );
}
