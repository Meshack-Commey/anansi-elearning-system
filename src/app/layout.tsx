import type { Metadata } from "next";
//import { Inter } from "next/font/google";
import "./globals.css";
import "@/components/courses-and-questions.css"

//const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anansi BeUnorthodox",
  description: "We provide students with access to past questions, current slides as well as lecture and examination timetables",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
