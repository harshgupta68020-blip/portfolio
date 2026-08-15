import { Geist, Geist_Mono } from "next/font/google";
import LenisProvider from "@/components/LenisProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Harsh — Backend & AI Engineer",
  description:
    "Building intelligent systems that solve real-world problems. Backend • AI • System Design",
  openGraph: {
    title: "Harsh — Backend & AI Engineer",
    description:
      "Building intelligent systems that solve real-world problems. Backend • AI • System Design",
    url: "https://portfolio.dev",
    siteName: "Harsh Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
      <body className="min-h-screen bg-[#09090B] text-white font-sans antialiased selection:bg-[#3B82F6] selection:text-white">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}

