import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cockatoo",
  description: "An AI Powered chatbot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <main className={`${inter.className} bg-background flex min-h-screen flex-col justify-between px-16`}>
          {children}
        </main>
      </ThemeProvider>
    </html>
  );
}
