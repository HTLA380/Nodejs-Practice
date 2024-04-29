import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import ThemeProviderWrapper from "@/components/providers/ThemeProviderWrapper";
import Footer from "@/components/footer/Footer";

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
          <Navbar />
          {children}
          <Footer />
        </body>
      </ThemeProviderWrapper>
    </html>
  );
}
