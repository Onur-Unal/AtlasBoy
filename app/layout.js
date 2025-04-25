"use client";

import "./globals.css";
import { basePath } from "@/lib/config";
import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Atlas 1 Yaşında!</title>
        <link rel="icon" href={`${basePath}/favicon.ico`} />
      </Head>
      <body>{children}</body>
    </html>
  );
}
