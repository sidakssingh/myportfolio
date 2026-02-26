import type { Metadata } from "next";
import { newsreader, geist } from "@/lib/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TransitionContainer from "@/components/TransitionContainer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "sidak singh",
    template: "%s | sidak singh",
  },
  description: "princeton ece. builder. researcher.",
  openGraph: {
    title: "sidak singh",
    description: "princeton ece. builder. researcher.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full overflow-hidden">
      <body
        className={`${newsreader.variable} ${geist.variable} antialiased h-full overflow-hidden flex flex-col`}
      >
        <Header />
        <main className="flex-1 overflow-hidden relative">
          <TransitionContainer>{children}</TransitionContainer>
        </main>
        <Footer />
      </body>
    </html>
  );
}
