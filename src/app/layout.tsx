import type { Metadata } from "next";
import "./globals.css";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export const metadata: Metadata = {
  title: "alphXium",
  description: "The Lending and Borrowing DeFi built on alephium technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=array@401,400,600,601,700,701&f[]=space-grotesk@1&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
