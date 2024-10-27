import type { Metadata } from "next";
import "./globals.css";

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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
