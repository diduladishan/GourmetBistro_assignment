import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import { Pacifico, Inter } from "next/font/google";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico", // Define a CSS variable for reuse
});

const inter = Inter({
  weight: ["400", "500", "600", "700", "800"], // Multiple weights
  subsets: ["latin"],
  variable: "--font-inter", // Define another CSS variable
});

export const metadata: Metadata = {
  title: "Restaurant - Gourmet Bistro",
  description: "Restaurant Application Developed Using Nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pacifico.variable} ${inter.variable}`}>
        <main className="relative overflow-hidden"> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
