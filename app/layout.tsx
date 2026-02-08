import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import BottomNav from "@/components/BottomNav";
import MouseGradient from "@/components/MouseGradient";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Suhrit Ghimire | Portfolio",
  description: "Computer Science Engineering Student & Data Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-white">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black min-h-screen flex flex-col lg:flex-row`}
        suppressHydrationWarning
      >
        <MouseGradient />
        <Sidebar />
        <main className="flex-1 lg:ml-80 min-h-screen p-8 lg:p-16 max-w-5xl mx-auto pb-32">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}
