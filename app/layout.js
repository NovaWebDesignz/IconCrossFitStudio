import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Icon CrossFit Studio",
  description: "Embark on your Fitness Journey",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} antialiased`}>
        {children}
        <Header />
      </body>
    </html>
  );
}
