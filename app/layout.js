"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { basePath } from "@/lib/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Atlas Boy Birthday Party!",
  description: "This little man is turning 1!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href={`${basePath}/favicon.ico`} />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
