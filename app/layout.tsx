import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Developer Playground",
  description: "A basic todo app, to implement tests of performance and developer tools"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        data-theme="dracula"
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen w-screen max-w-screen  font-(family-name:--font-geist-mono)`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
