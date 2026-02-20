import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const latinModern = localFont({
  src: "../../public/latinmodern-math.otf",
  variable: "--font-latin-modern",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adv. V. E. Abdul Gafoor | IUML Leader",
  description: "Official portfolio of Adv. V. E. Abdul Gafoor, Ernakulam District General Secretary of IUML.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${latinModern.variable} antialiased bg-gray-50 text-gray-900 font-serif`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
