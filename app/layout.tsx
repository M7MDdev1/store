import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ebra Store — Modern demo shop",
  description: "A simple, responsive storefront built with Next.js and the Fake Store API.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        <header className="border-b bg-white">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3">
              <img src="/logo.svg" alt="Ebra logo" className="w-9 h-9" />
              <span className="font-semibold text-lg">Ebra Store</span>
            </Link>

            <div className="flex-1 max-w-xl mx-6 hidden md:block">
              <input
                className="w-full border rounded-lg px-3 py-2 text-sm bg-gray-50"
                placeholder="Search products, categories..."
                aria-label="Search"
              />
            </div>

            <nav className="flex items-center gap-4">
              <Link href="/" className="text-sm text-gray-700 hover:text-black">
                Home
              </Link>
              <Link href="/cart" className="text-sm text-gray-700 hover:text-black">
                Cart
              </Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
