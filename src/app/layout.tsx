import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sidak Singh | Software Engineer",
  description: "Personal website of Sidak Singh, showcasing projects, experience, and skills.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0a192f] text-gray-300`}>
        {children}
      </body>
    </html>
  );
}
