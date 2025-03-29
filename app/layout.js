"use client";

import { Geist_Mono } from "next/font/google";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Loader from "@/components/Loader";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocationSection from "@/components/LocationSection";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname(); // Detects route changes

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // Adjust time as needed
    return () => clearTimeout(timer);
  }, [pathname]); // Runs effect on every route change

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body className={`${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
        {loading ? (
            <Loader />
          ) : (
            <div className="min-h-screen bg-white dark:bg-[#202020] transition-colors duration-300">
              <Header />
              {children}
              <LocationSection />
              <Footer />
            </div>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
